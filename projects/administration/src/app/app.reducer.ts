import * as fromAuth from './+auth/store/auth.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';


export interface AppState {
  auth: fromAuth.AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
};

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

// export const getCurrentAuthToken = createSelector(getAuthState, fromAuth.getCurrentAuthToken);
// export const getUserAccessFunctions = createSelector(getAuthState, fromAuth.getUserAccessFunctions);
// export const getCurrentUserModel = createSelector(getAuthState, fromAuth.getCurrentUserModel);
