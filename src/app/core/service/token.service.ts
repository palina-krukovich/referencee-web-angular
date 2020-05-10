import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public getIdToken() {
    return firebase.auth().currentUser.getIdToken();
  }

  public get email(): string {
    return firebase.auth().currentUser.email;
  }
}
