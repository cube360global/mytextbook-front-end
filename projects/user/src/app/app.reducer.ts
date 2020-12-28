import * as fromAuth from './+auth/store/auth.reducer';
import * as fromBookManagement from './private/@ui/user-content/book/store/book.reducer';
import * as fromProfile from './private/@ui/user-details/user-profile/store/user-profile.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface AppState {
  auth: fromAuth.AuthState;
  profile: fromProfile.State;
  bookManagement: fromBookManagement.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  profile: fromProfile.userProfileReducer,
  bookManagement: fromBookManagement.bookReducer,
};

// Main Selectors
export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
export const getUserProfileReducer = createFeatureSelector<fromProfile.State>('userProfile');
export const getBookReducer = createFeatureSelector<fromBookManagement.State>('bookManagement');
export const getAllBooks = createSelector(getBookReducer, fromBookManagement.getBooks);

