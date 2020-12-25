import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserAuthService} from '../shared/services/user-auth.service';
import {Router} from '@angular/router';
import {REFRESH_USER_TOKEN, USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_STAT} from './auth.action';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {CookieManagerService} from '../../@core/services/cookie-manager.service';
import {TokenDecodeModel} from '../../../../../lib/authentication/src/lib/interfaces/TokenDecodeModel';
import {of} from 'rxjs';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Path} from '../../@core/enum/path.enum';


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
              this.router.navigate(['/', Path.Private]);
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
  authLogOut = createEffect(() => {
    return this.action.pipe(
      ofType(REFRESH_USER_TOKEN),
      tap((tokenData) => {
        console.log('from Refresh Token', tokenData);
        this.cookieManager.setCookie(tokenData.payload.access_token, tokenData.payload.refresh_token);
      })
    );
  }, {dispatch: false});

  constructor(private authService: UserAuthService,
              private action: Actions,
              private cookieManager: CookieManagerService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private router: Router) {
  }


}
