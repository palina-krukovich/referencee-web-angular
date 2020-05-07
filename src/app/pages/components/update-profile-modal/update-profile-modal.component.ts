import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-profile-modal',
  templateUrl: './update-profile-modal.component.html',
})
export class UpdateProfileModalComponent {

  selectedImageURL: string = null;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  onSelectImage(url: string) {
    this.selectedImageURL = url;
  }

  onUpdateProfile(newUsername: string) {
    if (newUsername !== null && newUsername.trim() !== '' && newUsername !== this.authService.displayName) {
      this.authService.updateDisplayName(newUsername).catch((error) => alert(error.message));
    }
    if (this.selectedImageURL !== null && this.selectedImageURL !== this.authService.photoURL) {
      this.authService.updatePhotoURL(this.selectedImageURL).catch((error) => alert(error.message));
    }
  }

  onCloseModal() {
    this.router.navigate([this.router.url]);
  }
}
