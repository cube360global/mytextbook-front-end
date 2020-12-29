import * as fromAuth from './+auth/store/auth.reducer';
import * as fromProfile from './private/@ui/user-details/user-profile/store/user-profile.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface AppState {
  auth: fromAuth.AuthState;
  userProfile: fromProfile.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  userProfile: fromProfile.userProfileReducer
};

// Main Selectors
export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
export const getUserProfileReducer = createFeatureSelector<fromProfile.State>('userProfile');
