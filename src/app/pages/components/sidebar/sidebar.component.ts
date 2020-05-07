import { Component } from '@angular/core';
import {AuthService} from '../../../core/service/auth.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(
    public authService: AuthService,
    public router: Router,
    public translate: TranslateService
  ) { }

  onSignOut() {
    this.authService.signOut().then(() => {
      this.router.navigate(['guest']);
    });
  }

  onSidebarItemClicked(link: string) {
    this.router.navigate([link]);
  }
}
