import * as UserManagement from './user-profile.action';
import {createReducer, on} from '@ngrx/store';
import {UserProfileModel} from '../../../../../@core/interfaces/api/UserProfileModel';


export interface State {
  loading: boolean;
  user: UserProfileModel;
}

export const initialState: State = {
  loading: false,
  user: {} as UserProfileModel
};

export const userProfileReducer = createReducer(
  initialState,
  on(UserManagement.USER_DATA_REQUEST, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(UserManagement.USER_DATA_LOADED, (state, {payload}) => {
    return {
      ...state,
      user: payload,
      loading: false
    };
  }),
  on(UserManagement.USER_DATA_LOAD_FAIL, (state) => {
    return {
      ...state,
      user: {} as UserProfileModel,
      loading: false
    };
  })
);

export const getUser = (state: State) => state.user;
export const getUserSubscription = (state: State) => state.user.subscriptions;
export const getUserLoadingState = (state: State) => state.loading;
