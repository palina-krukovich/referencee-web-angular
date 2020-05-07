import { Component } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service';
import { Router } from '@angular/router';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {

  selectedImageURL: string;
  warning: string;
  isLoading = false;

  constructor(
    public authService: AuthService,
    public router: Router,
    public translate: TranslateService
  ) {
    this.translate.get('WARN_FILL_ALL_FIELDS').subscribe((text: string) => {
      this.warning = text;
    });
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translate.get('WARN_FILL_ALL_FIELDS').subscribe((text: string) => {
        this.warning = text;
      });
    });
  }

  onSelectImage(url: string) {
    this.selectedImageURL = url;
  }

  onSignIn(email, password) {
    if (email === null || email === ''
      || password === null || password === ''
    ) {
      alert(this.warning);
      return;
    }
    this.isLoading = true;
    this.authService.signIn(email, password).then(() => {
      this.isLoading = false;
      this.router.navigate(['calendar']);
    }).catch((error) => {
      this.isLoading = false;
      alert(error.message);
    });
  }

  onSignUp(email: string, username: string, password: string) {
    if (email === null || email === ''
      || username === null || username === ''
      || password === null || password === ''
      || this.selectedImageURL === null || this.selectedImageURL === ''
    ) {
      alert(this.warning);
      return;
    }
    this.isLoading = true;
    this.authService.signUp(email, password).then(() => {
      this.authService.updatePhotoURL(this.selectedImageURL).then(() => {
        this.authService.updateDisplayName(username).then(() => {
          this.isLoading = false;
          this.router.navigate(['calendar']).catch((error) => {
            this.isLoading = false;
            alert(error.message);
          });
        }).catch((error) => {
          this.isLoading = false;
          alert(error.message);
        });
      }).catch((error) => {
        this.isLoading = false;
        alert(error.message);
      });
    }).catch((error) => {
      this.isLoading = false;
      alert(error.message);
    });
  }
}
