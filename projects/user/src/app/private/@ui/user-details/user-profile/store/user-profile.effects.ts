import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {USER_DATA_LOAD_FAIL, USER_DATA_LOADED, USERS_DATA_REQUEST} from './user-profile.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UserProfileApiService} from '../shared/service/user-profile-api.service';
import {of} from 'rxjs';

@Injectable()
export class UsersEffects {
  userList$ = createEffect(() => {
    return this.action.pipe(
      ofType(USERS_DATA_REQUEST),
      switchMap(() => {
        return this.userProfileApiService.getUserProfileById('1').pipe(
          map((resData) => {
            console.log(resData);
            return USER_DATA_LOADED({payload: resData});
          }),
          catchError(() => {
            return of(USER_DATA_LOAD_FAIL());
          })
        );
      })
    );
  });

  constructor(private userProfileApiService: UserProfileApiService,
              private action: Actions) {
  }

}
