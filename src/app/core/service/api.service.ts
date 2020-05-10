import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AuthService} from './auth.service';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {strict} from 'assert';
import {TokenService} from './token.service';
import {Reference} from '../model/reference';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  public saveUser() {
    return this.tokenService.getIdToken().then((idToken) => {
      const options = {
        params: new HttpParams()
          .set('token', idToken)
          .set('email', this.tokenService.email)
      };
      return this.http.post(`${environment.apiUrl}user/save`, null, options);
    });
  }

  public isAdmin() {
    return this.tokenService.getIdToken().then((idToken) => {
      const options = {
        params: new HttpParams()
          .set('token', idToken)
          .set('email', this.tokenService.email)
      };
      return this.http.get<boolean>(`${environment.apiUrl}user/isAdmin`, options);
    });
  }

  public saveReference(fd, gender, clothing, pose) {
    return this.tokenService.getIdToken().then((idToken) => {
      const options = {
        params: new HttpParams()
          .set('token', idToken)
          .set('email', this.tokenService.email)
          .set('gender', gender)
          .set('clothing', clothing)
          .set('pose', pose)
      };
      return this.http.post(`${environment.apiUrl}reference/save`, fd, options);
    });
  }

  public findReferenceByUser() {
    return this.tokenService.getIdToken().then((idToken) => {
      const options = {
        params: new HttpParams()
          .set('token', idToken)
          .set('email', this.tokenService.email)
      };
      return this.http.get<Reference[]>(`${environment.apiUrl}reference/find/all/byUser`, options);
    });
  }

  public findLimitByQuery(gender, clothing, pose, count) {
    return this.tokenService.getIdToken().then((idToken) => {
      const options = {
        params: new HttpParams()
          .set('token', idToken)
          .set('gender', gender)
          .set('clothing', clothing)
          .set('pose', pose)
          .set('count', count)
      };
      return this.http.get<Reference[]>(`${environment.apiUrl}reference/find/limit/byQuery`, options);
    });
  }

  public findOneByQuery(gender, clothing, pose) {
    return this.tokenService.getIdToken().then((idToken) => {
      const options = {
        params: new HttpParams()
          .set('token', idToken)
          .set('gender', gender)
          .set('clothing', clothing)
          .set('pose', pose)
      };
      return this.http.get<Reference>(`${environment.apiUrl}reference/find/one/byQuery`, options);
    });
  }
}
