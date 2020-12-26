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
    this.cookieService.set(Cookie.ACCESS_TOKEN, accessToken, {path: '/', expires: 0.1, sameSite: 'Lax'});
    this.cookieService.set(Cookie.REFRESH_TOKEN, refreshToken, {path: '/', expires: 5, sameSite: 'Lax'});
  }

  public deleteCookie(): void {
    this.cookieService.deleteAll();
    // this.cookieService.delete(Cookie.ACCESS_TOKEN);
    // this.cookieService.delete(Cookie.REFRESH_TOKEN);
  }

  public checkAccessToken(): boolean {
    return this.cookieService.check(Cookie.ACCESS_TOKEN);
  }

  public checkRefreshToken(): boolean {
    return this.cookieService.check(Cookie.REFRESH_TOKEN);
  }

  public getAccessToken(): string {
    return this.cookieService.get(Cookie.ACCESS_TOKEN).toString();
  }

  public getRefreshToken(): string {
    return this.cookieService.get(Cookie.REFRESH_TOKEN).toString();
  }


}
