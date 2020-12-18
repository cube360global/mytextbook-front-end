import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AdminAuthService} from '../shared/services/admin-auth.service';
import {Router} from '@angular/router';
import {USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_STAT} from './auth.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {CookieManagerService} from '../../@core/services/cookie-manager.service';
import {TokenDecodeModel} from '../shared/interfaces/TokenDecodeModel';
import {of} from 'rxjs';


@Injectable()
export class AuthEffects {

  constructor(private authService: AdminAuthService,
              private action: Actions,
              private cookieManager: CookieManagerService,
              private router: Router) {
  }


  authLoginStart$ = createEffect(() => {
    return this.action.pipe(
      ofType(USER_LOGIN_STAT),
      switchMap((loginData) => {
        return this.authService.loginAdAdmin(loginData.payload)
          .pipe(
            map((resData: TokenDecodeModel) => {
              this.cookieManager.setCookie(resData.access_token, resData.refresh_token);
              return USER_LOGIN({payload: resData});
            }),
            catchError(err => {
              this.cookieManager.deleteCookie();
              return of(USER_LOGIN_FAIL);
            })
          );
      })
    );
  });


}
