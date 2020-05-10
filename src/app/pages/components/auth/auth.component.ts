import { Component } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service';
import { Router } from '@angular/router';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {ApiService} from '../../../core/service/api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {

  selectedImageURL: string;
  warning: string;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
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

    this.authService.signIn(email, password).then(() => {
      this.apiService.isAdmin().then((isAdminQuery) => {
        isAdminQuery.subscribe((isAdmin) => {
          if (isAdmin) {
            this.authService.setAdmin();
          }
          this.router.navigate(['calendar']);
        });
      });
    }).catch((error) => alert(error.message));
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

    this.authService.signUp(email, password).then(() => {
      this.authService.updatePhotoURL(this.selectedImageURL)
        .catch((error) => alert(error.message))
        .finally(() => {
          this.authService.updateDisplayName(username)
            .catch((error) => alert(error.message))
            .finally(() => {
              this.apiService.saveUser().then((saveQuery) => {
                saveQuery.subscribe(() => this.router.navigate(['calendar']));
              });
            });
        });
    }).catch((error) => alert(error.message));
  }
}
