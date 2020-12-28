import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Cookie} from '../enum/cookie.enum';

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  constructor(private cookieService: CookieService) {
  }

  public setCookie(accessToken: string, refreshToken: string): void {
    // this.deleteCookie();
    localStorage.setItem(Cookie.ACCESS_TOKEN, accessToken);
    localStorage.setItem(Cookie.REFRESH_TOKEN, refreshToken);

    // this.cookieService.set(Cookie.ACCESS_TOKEN, accessToken, {path: '/', expires: 0.1, sameSite: 'Strict'});
    // this.cookieService.set(Cookie.REFRESH_TOKEN, REFRESH_TOKEN, {path: '/', expires: 5, sameSite: 'Strict'});
  }

  public deleteCookie(): void {
    localStorage.removeItem(Cookie.ACCESS_TOKEN);
    localStorage.removeItem(Cookie.REFRESH_TOKEN);
    this.cookieService.deleteAll();
  }

  public checkAccessToken(): boolean {
    return localStorage.getItem(Cookie.ACCESS_TOKEN) !== null;
    // return this.cookieService.check(Cookie.ACCESS_TOKEN);
  }

  public checkRefreshToken(): boolean {
    return localStorage.getItem(Cookie.REFRESH_TOKEN) !== null;
  }

  public getAccessToken(): any {
    if (this.checkAccessToken()) {
      return localStorage.getItem(Cookie.ACCESS_TOKEN);
    } else {
      return '';
    }
  }

  public getRefreshToken(): any {
    if (this.checkRefreshToken()) {
      return localStorage.getItem(Cookie.REFRESH_TOKEN);
    } else {
      return '';
    }
  }

}
