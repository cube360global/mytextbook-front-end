import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {SubjectApiService} from '../../../../../../subject/shared/services/subject-api.service';
import {SUBJECT_DATA_LOAD_FAIL, SUBJECT_DATA_LOADED, SUBJECT_DATA_REQUEST} from './subject.action';

@Injectable()
export class SubjectEffects {
  subjectList$ = createEffect(() => {
    return this.action.pipe(
      ofType(SUBJECT_DATA_REQUEST),
      switchMap(() => {
        return this.subjectApiService.All().pipe(
          map((resData) => {
            return SUBJECT_DATA_LOADED({payload: resData});
          }),
          catchError(() => {
            return of(SUBJECT_DATA_LOAD_FAIL());
          })
        );
      })
    );
  });

  constructor(private subjectApiService: SubjectApiService,
              private action: Actions) {
  }
}
