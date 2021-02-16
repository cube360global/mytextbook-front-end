import {createAction, props} from '@ngrx/store';
import {LoginModel} from '../shared/interfaces/LoginModel';
import {TokenDecodeModel} from '../shared/interfaces/TokenDecodeModel';

export const USER_LOGIN_STAT = createAction('[AUTH] User Login Start', props<{ payload: LoginModel }>());
export const USER_LOGIN = createAction('[AUTH] User Login', props<{ payload: TokenDecodeModel }>());
export const USER_LOGIN_FAIL = createAction('[Auth] User Login Fail');
export const USER_LOGOUT = createAction('[Auth] USER_LOGOUT', props<{payload: string}>());

export const REFRESH_USER_TOKEN = createAction('[Auth] User Refresh User Token', props<{ payload: TokenDecodeModel }>());
export const FINISH_REFRESH_USER_TOKEN = createAction('[Auth] User Finish Refresh User Token');

export const LOGIN_WITH_REFRESH_TOKEN = createAction('[Auth] Login With Refresh Token', props<{ payload: string }>());
