import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {BOOK_DATA_LOAD_FAIL, BOOK_DATA_LOADED, BOOK_DATA_REQUEST} from './book.action';
import {BookApiService} from '../shared/service/book-api.service';

@Injectable()
export class BooksEffects {
  bookList$ = createEffect(() => {
    return this.action.pipe(
      ofType(BOOK_DATA_REQUEST),
      switchMap(() => {
        return this.bookApiService.all().pipe(
          map((resData) => {
            console.log(resData);
            return BOOK_DATA_LOADED({payload: resData});
          }),
          catchError(() => {
            return of(BOOK_DATA_LOAD_FAIL());
          })
        );
      })
    );
  });

  constructor(private bookApiService: BookApiService,
              private action: Actions) {
  }
}
