import * as fromAuth from './+auth/store/auth.reducer';
import * as fromBookManagement from './private/@ui/user-content/book/store/book.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface AppState {
  auth: fromAuth.AuthState;
  // userManagement: fromUserManagement.State;
  bookManagement: fromBookManagement.State;
  // subjectManagement: fromSubjectManagement.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  // userManagement: fromUserManagement.userReducer,
  bookManagement: fromBookManagement.bookReducer,
  // subjectManagement: fromSubjectManagement.subjectReducer
};

// Main Selectors
export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
// export const getUserReducer = createFeatureSelector<fromUserManagement.State>('userManagement');
export const getBookReducer = createFeatureSelector<fromBookManagement.State>('bookManagement');
// export const getSubjectReducer = createFeatureSelector<fromSubjectManagement.State>('subjectManagement');

// export const getCurrentAuthToken = createSelector(getAuthState, fromAuth.getCurrentAuthToken);
// export const getUserAccessFunctions = createSelector(getAuthState, fromAuth.getUserAccessFunctions);
// export const getCurrentUserModel = createSelector(getAuthState, fromAuth.getCurrentUserModel);
