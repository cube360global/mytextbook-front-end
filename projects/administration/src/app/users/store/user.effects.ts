import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CookieManagerService} from '../../@core/services/cookie-manager.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Router} from '@angular/router';
import {USERS_DATA_LOAD_FAIL, USERS_DATA_LOADED, USERS_DATA_REQUEST} from './user.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UserApiService} from '../shared/service/user-api.service';
import {of} from 'rxjs';

@Injectable()
export class UsersEffects {
  constructor(private usersApiService: UserApiService,
              private action: Actions,
              private cookieManager: CookieManagerService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private router: Router) {
  }

  userList$ = createEffect(() => {
    return this.action.pipe(
      ofType(USERS_DATA_REQUEST),
      switchMap(() => {
        return  this.usersApiService.getUserAll().pipe(
          map((resData) => {
            console.log(resData);
            return USERS_DATA_LOADED({payload: resData});
          }),
          catchError(() => {
            return of(USERS_DATA_LOAD_FAIL());
          })
        );
      })
    );
  });

}
