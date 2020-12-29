import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserAuthService} from '../shared/services/user-auth.service';
import {Router} from '@angular/router';
import {REFRESH_USER_TOKEN, USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_STAT} from './auth.action';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {CookieManagerService} from '../../@core/services/cookie-manager.service';
import {TokenDecodeModel} from '../../../../../lib/authentication/src/lib/interfaces/TokenDecodeModel';
import {of} from 'rxjs';
import {Path} from '../../@core/enum/path.enum';
import {NgxSpinnerService} from 'ngx-spinner';
import {USER_LOGOUT} from '../../../../../administration/src/app/+auth/store/auth.action';
import {AlertService} from '../../../../../lib/tools/src/lib/alert.service';

@Injectable()
export class AuthEffects {
  authLoginStart$ = createEffect(() => {
    return this.action.pipe(
      ofType(USER_LOGIN_STAT),
      switchMap((loginData) => {
        this.spinner.show();
        return this.authService.loginAdAdmin(loginData.payload)
          .pipe(
            map((resData: TokenDecodeModel) => {
              this.spinner.hide();
              this.cookieManager.setCookie(resData.access_token, resData.refresh_token);
              localStorage.setItem('USERID', resData.userId);
              this.router.navigate(['/', Path.Private]);
              return USER_LOGIN({payload: resData});
            }),
            catchError((err) => {
              this.spinner.hide();
              this.alertService.showAuthHttpResponseError(err);
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
        this.cookieManager.setCookie(tokenData.payload.access_token, tokenData.payload.refresh_token);
      })
    );
  }, {dispatch: false});

  // authLoginSuccess$ = createEffect(() => {
  //   return this.action.pipe(
  //     ofType(USER_LOGIN),
  //     pipe(
  //       map((res) => {
  //         return USER_DATA_REQUEST({payload: res.payload.userId.toString()});
  //       }),
  //       catchError(() => {
  //         return of(USER_LOGIN_FAIL());
  //       })
  //     )
  //   );
  // });

  userLogOut = createEffect(() => {
    return this.action.pipe(
      ofType(USER_LOGOUT),
      tap(() => {
        this.cookieManager.deleteCookie();
        this.router.navigate(['']);
      })
    );
  }, {dispatch: false});

  constructor(private authService: UserAuthService,
              private action: Actions,
              private cookieManager: CookieManagerService,
              private alertService: AlertService,
              private spinner: NgxSpinnerService,
              private router: Router) {
  }
}
