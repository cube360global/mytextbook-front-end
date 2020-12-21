import * as fromAuth from './+auth/store/auth.reducer';
import * as fromUserManagement from './users/store/user.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface AppState {
  auth: fromAuth.AuthState;
  userManagement: fromUserManagement.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  userManagement: fromUserManagement.userReducer
};

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
export const getUserReducer = createFeatureSelector<fromUserManagement.State>('userManagement');

// export const getCurrentAuthToken = createSelector(getAuthState, fromAuth.getCurrentAuthToken);
// export const getUserAccessFunctions = createSelector(getAuthState, fromAuth.getUserAccessFunctions);
// export const getCurrentUserModel = createSelector(getAuthState, fromAuth.getCurrentUserModel);
