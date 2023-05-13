import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { SettingsService } from '../settings/settings.service';

//models

import { LoginToken } from '../models/login-token';
import { CurrentUser } from '../models/current-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signedInUserSub = new Subject();
  public signedInUser$ = this.signedInUserSub.asObservable();

  constructor(
    private http: HttpClient,
    private settingsService: SettingsService
  ) {}

  isAuthorized(): boolean {
    return this.isSessionActive();
  }
  getSignedInUser() {
    const sessionActive = this.isSessionActive();
    if (sessionActive) {
      const user = localStorage.getItem('user') || null;
      if (user) {
        return JSON.parse(user);
      }
    } else {
      return {};
    }
  }
  getUserToken(): string {
    const user: CurrentUser = this.getSignedInUser();
    const userToken = user?.sessionToken?.access_token || '';
    return userToken;
  }
  isSessionActive(): boolean {
    const user = localStorage.getItem('user') || null;
    if (user) {
      const userObj: CurrentUser = JSON.parse(user);
      const { token_expiration } = userObj.sessionToken;
      const expirationTime = new Date(token_expiration);
      const now = new Date();
      const timeDiffinMs = now.getTime() - expirationTime.getTime();
      if (timeDiffinMs < 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  signUp(userName: string, email: string, password: string) {
    const url = this.settingsService.getBaseUrl() + '/auth/sign-up';
    const payload = {
      userName,
      email,
      password,
    };
    return this.http.post(url, payload);
  }
  login(email: string, password: string): Observable<any> {
    const url = this.settingsService.getBaseUrl() + '/auth/sign-in';
    const payload = {
      email,
      password,
    };
    return this.http.post(url, payload);
  }
  setCurrentUser(loginResp: LoginToken) {
    const user: CurrentUser = {
      userName: loginResp.userName,
      sessionToken: loginResp,
    };

    localStorage.setItem('user', JSON.stringify(user));
    this.signedInUserSub.next(user);
  }
}
