import {createAction, props} from '@ngrx/store';
import {BookModel} from '../../../../../@core/interfaces/api/BookModel';

export const BOOK_DATA_REQUEST = createAction('[Book Management] BOOK_DATA_REQUEST');
export const BOOK_DATA_LOADED = createAction('[Book Management] BOOK_DATA_LOADED', props<{ payload: BookModel[] }>());
export const BOOK_DATA_LOAD_FAIL = createAction('[Book Management] BOOK_DATA_LOAD_FAIL');

