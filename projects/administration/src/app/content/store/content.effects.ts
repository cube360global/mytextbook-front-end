import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CONTENT_DATA_LOAD_FAIL, CONTENT_DATA_LOADED, CONTENT_DATA_REQUEST} from './content.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ContentApiService} from '../shared/service/content-api.service';

@Injectable()
export class ContentEffects {
  userList$ = createEffect(() => {
    return this.action.pipe(
      ofType(CONTENT_DATA_REQUEST),
      switchMap(() => {
        return this.contentApiService.all().pipe(
          map((resData) => {
            console.log(resData);
            return CONTENT_DATA_LOADED({payload: resData});
          }),
          catchError(() => {
            return of(CONTENT_DATA_LOAD_FAIL());
          })
        );
      })
    );
  });

  constructor(private contentApiService: ContentApiService,
              private action: Actions) {
  }

}
