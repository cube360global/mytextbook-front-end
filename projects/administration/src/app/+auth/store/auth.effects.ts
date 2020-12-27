import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AdminAuthService} from '../shared/services/admin-auth.service';
import {Router} from '@angular/router';
import {LOGIN_WITH_REFRESH_TOKEN, REFRESH_USER_TOKEN, USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_STAT, USER_LOGOUT} from './auth.action';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {CookieManagerService} from '../../@core/services/cookie-manager.service';
import {TokenDecodeModel} from '../shared/interfaces/TokenDecodeModel';
import {of} from 'rxjs';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Path} from '../../@core/enum/path.enum';
import {AlertService} from '../../@core/services/alert.service';


@Injectable()
export class AuthEffects {

  authLoginStart$ = createEffect(() => {
    return this.action.pipe(
      ofType(USER_LOGIN_STAT),
      switchMap((loginData) => {
        this.ngxUiLoaderService.start('1200');
        return this.authService.loginAdAdmin(loginData.payload)
          .pipe(
            map((resData: TokenDecodeModel) => {
              this.ngxUiLoaderService.stop('1200');
              this.cookieManager.setCookie(resData.access_token, resData.refresh_token);
              this.router.navigate(['/', Path.Admin]);
              return USER_LOGIN({payload: resData});
            }),
            catchError(() => {
              this.ngxUiLoaderService.stop('1200');
              this.cookieManager.deleteCookie();
              return of(USER_LOGIN_FAIL());
            })
          );
      })
    );
  });

  authLoginWithRefreshToken = createEffect(() => {
    return this.action.pipe(
      ofType(LOGIN_WITH_REFRESH_TOKEN),
      switchMap((refreshToken) => {
        this.ngxUiLoaderService.start('1300');
        return this.authService.loginWithRefreshToken(refreshToken.payload)
          .pipe(
            map(resData => {
              this.cookieManager.deleteCookie();
              this.cookieManager.setCookie(resData.access_token, resData.refresh_token);
              this.router.navigate(['/', Path.Admin]);
              this.ngxUiLoaderService.stop('1300');
              return USER_LOGIN({payload: resData});
            }),
            catchError(() => {
              this.ngxUiLoaderService.stop('1300');
              this.cookieManager.deleteCookie();
              return of(USER_LOGIN_FAIL());
            })
          );
      })
    );
  });


  authLogOut = createEffect(() => {
    return this.action.pipe(
      ofType(REFRESH_USER_TOKEN),
      tap((tokenData) => {
        console.log(tokenData);
        this.cookieManager.deleteCookie();
        this.cookieManager.setCookie(tokenData.payload.access_token, tokenData.payload.refresh_token);
      })
    );
  }, {dispatch: false});

  userLoginFail = createEffect(() => {
    return this.action.pipe(
      ofType(USER_LOGIN_FAIL),
      tap(() => {
        this.alertService.showWaning('Authentication Fail or Session Time Out', 'Please Login Again!');
        this.cookieManager.deleteCookie();
        this.router.navigate(['']);
      })
    );
  }, {dispatch: false});

  userLogOut = createEffect(() => {
    return this.action.pipe(
      ofType(USER_LOGOUT),
      tap(() => {
        this.cookieManager.deleteCookie();
        this.router.navigate(['']);
      })
    );
  }, {dispatch: false});

  constructor(private authService: AdminAuthService,
              private action: Actions,
              private cookieManager: CookieManagerService,
              private alertService: AlertService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private router: Router) {
  }


}
