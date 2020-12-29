import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromAuth from './+auth/store/auth.reducer';
import * as fromProfile from './private/@ui/user-details/user-profile/store/user-profile.reducer';

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
export const getUserProfile = createSelector(getUserProfileReducer, fromProfile.getUser);
export const getUserSubscription = createSelector(getUserProfileReducer, fromProfile.getUserSubscription);
