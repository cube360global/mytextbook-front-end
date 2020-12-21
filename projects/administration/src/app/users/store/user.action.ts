import {createAction, props} from '@ngrx/store';
import {UserModel} from '../../@core/interfaces/api/UserModel';

export const USERS_DATA_REQUEST = createAction('[User Management] USERS_DATA_REQUEST');
export const USERS_DATA_LOADED = createAction('[User Management] USERS_DATA_LOADED', props<{ payload: UserModel[] }>());
export const USERS_DATA_LOAD_FAIL = createAction('[User Management] USERS_DATA_LOAD_FAIL');
