import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ContentQuestionApiService} from '../../shared/service/content-question-api.service';
import {QUESTION_DATA_LOAD_FAIL, QUESTION_DATA_LOADED, QUESTION_DATA_REQUEST} from './question.action';

@Injectable()
export class ContentEffects {
  userList$ = createEffect(() => {
    return this.action.pipe(
      ofType(QUESTION_DATA_REQUEST),
      switchMap((action) => {
        return this.contentQuestionApiService.getQuestions(action.payload).pipe(
          map((resData) => {
            return QUESTION_DATA_LOADED({payload: resData});
          }),
          catchError(() => {
            return of(QUESTION_DATA_LOAD_FAIL());
          })
        );
      })
    );
  });

  constructor(private contentQuestionApiService: ContentQuestionApiService,
              private action: Actions) {
  }

}
