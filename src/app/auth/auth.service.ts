import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AppGlobal } from './../app.global';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

  loginError = new Subject<any>();

  constructor(private router: Router,
              private httpClient: HttpClient,
              private appGlobal: AppGlobal) {}

  getGlobalHeaders() {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.getToken()
    });

    return headers;
  }

  signinUser(email: string, password: string) {
    const data = {
      username: email,
      password: password
    }
    // FIXME This is for testing
    localStorage.setItem('token', 'lKBhho9ZFVuOqAy7u9S5kCWwK8ASEz');
    localStorage.setItem('refresh_token', '8mgphoA2kVRfvuMRcswjd7TIp6ZzSS');
    localStorage.setItem('user', '21232f297a57a5a743894a0e4a801fc3');
    localStorage.setItem('client_id', '8vINgnF0vLDIWsuIDtB2Etz8EfmiwAfGGEl2TI5E');
    this.router.navigate(['/admin']);
    // FIXME This is for testing
    
    // this.httpClient.post(`${this.appGlobal.getBaseUrl()}v1/auth/`, data)
    //   .subscribe(
    //     (res: any) => {
    //
    //       let basic = btoa(`${res.client_id}:${this.appGlobal.getClientSecret()}`);
    //
    //       let headers = new HttpHeaders({
    //         'Authorization':  `Basic ${basic}`,
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //       });
    //       let payload = new HttpParams()
    //         .set('grant_type', 'password')
    //         .set('username', email)
    //         .set('password', password);
    //       this.httpClient.post(
    //         `${this.appGlobal.getBaseUrl()}o/token/`,
    //         payload.toString(),
    //         {headers: headers}
    //       ).subscribe(
    //         (data: any) => {
    //           localStorage.setItem('token', data.access_token);
    //           localStorage.setItem('refresh_token', data.refresh_token);
    //           localStorage.setItem('user', res.user_type);
    //           localStorage.setItem('client_id', res.client_id);
    //
    //           this.router.navigate(['/admin']);
    //         },
    //         err => {
    //           localStorage.clear()
    //         }
    //       )
    //     },
    //     err => {
    //       localStorage.clear();
    //       this.loginError.next(true);
    //     }
    //   )

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    return this.getToken() != null;
  }

  getUserType() {
    return localStorage.getItem('user');
  }

  refreshToken() {
    let basic = btoa(`${localStorage.getItem('client_id')}:${this.appGlobal.getClientSecret()}`);

    let headers = new HttpHeaders({
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let payload = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', localStorage.getItem('refresh_token'));

    this.httpClient.post(
      `${this.appGlobal.getBaseUrl()}o/token/`,
      payload.toString(),
      {headers: headers}
    ).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
      },
      err => {
        localStorage.clear();
      }
    )
  }
}
