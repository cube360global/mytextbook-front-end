import * as bookManagement from './book.action';
import {createReducer, on} from '@ngrx/store';
import {BookModel} from '../../@core/interfaces/api/BookModel';


export interface State {
  loading: boolean;
  bookData: BookModel[];
}

export const initialState: State = {
  loading: false,
  bookData: [] as BookModel[]
};

export const bookReducer = createReducer(
  initialState,
  on(bookManagement.BOOK_DATA_REQUEST, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(bookManagement.BOOK_DATA_LOADED, (state, {payload}) => {
    return {
      ...state,
      bookData: payload,
      loading: false
    };
  }),
  on(bookManagement.BOOK_DATA_LOAD_FAIL, (state) => {
    return {
      ...state,
      userData: [] as BookModel[],
      loading: false
    };
  })
);

export const getBooks = (state: State) => state.bookData;
export const getBooksLoadingState = (state: State) => state.loading;
