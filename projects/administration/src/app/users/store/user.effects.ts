import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {USERS_AND_SCHOOL_DATA_LOADED, USERS_DATA_LOAD_FAIL, USERS_DATA_LOADED, USERS_DATA_REQUEST} from './user.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UserApiService} from '../shared/service/user-api.service';
import {of} from 'rxjs';

@Injectable()
export class UsersEffects {
  userList$ = createEffect(() => {
    return this.action.pipe(
      ofType(USERS_DATA_REQUEST),
      switchMap(() => {
        return this.usersApiService.all().pipe(
          map((resData) => {
            console.log(resData);
            return USERS_AND_SCHOOL_DATA_LOADED({payload: resData});
          }),
          catchError(() => {
            return of(USERS_DATA_LOAD_FAIL());
          })
        );
      })
    );
  });

  constructor(private usersApiService: UserApiService,
              private action: Actions) {
  }

}
