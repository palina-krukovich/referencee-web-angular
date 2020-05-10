import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private apiService: ApiService,
    private router: Router,
  ) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', null);
        localStorage.setItem('isAdmin', null);
      }
    });
  }

  public signUp(email, password) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('user', JSON.stringify(firebase.auth().currentUser));
    });
  }

  public signIn(email, password) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('user', JSON.stringify(firebase.auth().currentUser));
    });
  }

  public signOut() {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.setItem('user', null);
    });
  }

  public setAdmin() {
    localStorage.setItem('isAdmin', JSON.stringify(true));
  }

  public updateDisplayName(username) {
    return firebase.auth().currentUser.updateProfile({
      displayName: username
    }).catch((error) => alert(error.message));
  }

  public updatePhotoURL(url) {
    return firebase.auth().currentUser.updateProfile({
      photoURL: url
    }).catch((error) => alert(error.message));
  }

  public isLoggedIn() {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  public isAdmin() {
    const isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
    return isAdmin !== null;
  }

  public get displayName(): string {
    return firebase.auth().currentUser.displayName;
  }

  public get photoURL(): string {
    return firebase.auth().currentUser.photoURL;
  }

  public get email(): string {
    return firebase.auth().currentUser.email;
  }
}
