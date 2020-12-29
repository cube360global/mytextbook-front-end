import {TokenDecodeModel} from '../../../../../lib/authentication/src/lib/interfaces/TokenDecodeModel';
import {createReducer, on} from '@ngrx/store';
import * as AuthAction from './auth.action';

export interface AuthState {
  tokenDecodeModel: TokenDecodeModel;
}

export const initialState: AuthState = {
  tokenDecodeModel: {} as TokenDecodeModel
};

export const authReducer = createReducer(
  initialState,
  on(AuthAction.USER_LOGIN_STAT, state => {
    return {
      ...state,
      tokenDecodeModel: {} as TokenDecodeModel
    };
  }),
  on(AuthAction.USER_LOGIN, (state, {payload}) => {
    return {
      ...state,
      tokenDecodeModel: payload
    };
  }),
  on(AuthAction.USER_LOGIN_FAIL, state => {
    console.log('Called From error');
    return {
      ...state,
      tokenDecodeModel: {} as TokenDecodeModel
    };
  }),
  on(AuthAction.USER_LOGOUT, state => {
    return {
      ...state,
      tokenDecodeModel: {} as TokenDecodeModel
    };
  }),
  on(AuthAction.REFRESH_USER_TOKEN, (state, {payload}) => {
    return {
      ...state,
      tokenDecodeModel: payload
    };
  }), on(AuthAction.FINISH_REFRESH_USER_TOKEN, state => {
    return {
      ...state,
    };
  })
);

export const getTokenDecodeModel = (state: AuthState) => state.tokenDecodeModel;
export const getUserId = (state: AuthState) => state.tokenDecodeModel?.userId;
export const getUserRole = (state: AuthState) => state.tokenDecodeModel?.role;
export const getAccessToken = (state: AuthState) => state.tokenDecodeModel?.access_token;
export const getRefreshToken = (state: AuthState) => state.tokenDecodeModel?.refresh_token;
