import {createAction, props} from '@ngrx/store';
import {LoginModel} from '../shared/interfaces/LoginModel';
import {TokenDecodeModel} from '../shared/interfaces/TokenDecodeModel';

export const USER_LOGIN_STAT = createAction('[AUTH] User Login Start', props<{ payload: LoginModel }>());
export const USER_LOGIN = createAction('[AUTH] User Login', props<{ payload: TokenDecodeModel }>());
export const USER_LOGIN_FAIL = createAction('[Auth] User Login Fail');
