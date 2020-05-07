import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  signUp(email, password) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('user', JSON.stringify(firebase.auth().currentUser));
    });
  }

  signIn(email, password) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('user', JSON.stringify(firebase.auth().currentUser));
    });
  }

  signOut() {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.setItem('user', null);
    });
  }

  updateDisplayName(username) {
    return firebase.auth().currentUser.updateProfile({
      displayName: username
    }).catch((error) => alert(error.message));
  }

  updatePhotoURL(url) {
    return firebase.auth().currentUser.updateProfile({
      photoURL: url
    }).catch((error) => alert(error.message));
  }

  isLoggedIn() {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  get displayName(): string {
    return firebase.auth().currentUser.displayName;
  }

  get photoURL(): string {
    return firebase.auth().currentUser.photoURL;
  }

  get email(): string {
    return firebase.auth().currentUser.email;
  }
}
