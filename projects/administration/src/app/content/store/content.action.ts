import {createAction, props} from '@ngrx/store';
import {UserModel} from '../../@core/interfaces/api/UserModel';

export const CONTENT_DATA_REQUEST = createAction('[Content Management] USERS_DATA_REQUEST');
export const CONTENT_DATA_LOADED = createAction('[Content Management] USERS_DATA_LOADED', props<{ payload: UserModel[] }>());
export const CONTENT_DATA_LOAD_FAIL = createAction('[Content Management] USERS_DATA_LOAD_FAIL');

