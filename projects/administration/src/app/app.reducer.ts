import * as fromAuth from './+auth/store/auth.reducer';
import * as fromUserManagement from './users/store/user.reducer';
import * as fromBookManagement from './book/store/book.reducer';
import * as fromSubjectManagement from './subject/store/subject.reducer';
import * as fromContentManagement from './content/store/content.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromProfile from '../../../user/src/app/private/@ui/user-details/user-profile/store/user-profile.reducer';
import {getUserProfileReducer} from '../../../user/src/app/app.reducer';

export interface AppState {
  auth: fromAuth.AuthState;
  userManagement: fromUserManagement.State;
  bookManagement: fromBookManagement.State;
  subjectManagement: fromSubjectManagement.State;
  contentManagement: fromContentManagement.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  userManagement: fromUserManagement.userReducer,
  bookManagement: fromBookManagement.bookReducer,
  subjectManagement: fromSubjectManagement.subjectReducer,
  contentManagement: fromContentManagement.contentReducer,
};

// Feature Selectors
export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
export const getUserReducer = createFeatureSelector<fromUserManagement.State>('userManagement');
export const getBookReducer = createFeatureSelector<fromBookManagement.State>('bookManagement');
export const getSubjectReducer = createFeatureSelector<fromSubjectManagement.State>('subjectManagement');
export const getContentReducer = createFeatureSelector<fromContentManagement.State>('contentManagement');

// Selectors - based on the Feature Selectors
export const getUserDataLoading = createSelector(getUserReducer, fromUserManagement.getUserLoadingState);



// export const getCurrentAuthToken = createSelector(getAuthState, fromAuth.getCurrentAuthToken);
// export const getUserAccessFunctions = createSelector(getAuthState, fromAuth.getUserAccessFunctions);
// export const getCurrentUserModel = createSelector(getAuthState, fromAuth.getCurrentUserModel);
