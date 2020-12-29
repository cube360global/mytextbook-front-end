import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {USER_DATA_LOAD_FAIL, USER_DATA_LOADED, USER_DATA_REQUEST} from './user-profile.action';
import {UserProfileApiService} from '../shared/service/user-profile-api.service';

@Injectable()
export class UserProfileEffects {
  userList$ = createEffect(() => {
    return this.action.pipe(
      ofType(USER_DATA_REQUEST),
      switchMap((userid) => {
        return this.userProfileApiService.getUserProfileById(userid.payload).pipe(
          map((resData) => {
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
