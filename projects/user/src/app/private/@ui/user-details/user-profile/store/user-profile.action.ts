import {createAction, props} from '@ngrx/store';
import {UserModel} from '../../../../../@core/interfaces/api/UserModel';
import {UserAndSchoolModel} from '../../../../../@core/interfaces/api/UserAndSchoolModel';

export const USERS_DATA_REQUEST = createAction('[User Management] USERS_DATA_REQUEST');

export const USERS_AND_SCHOOL_DATA_LOADED = createAction('[User Management] USERS_AND_SCHOOL_DATA_LOADED',
  props<{ payload: UserAndSchoolModel }>());

export const USERS_DATA_LOADED = createAction('[User Management] USERS_DATA_LOADED', props<{ payload: UserModel[] }>());
export const USER_DATA_LOADED = createAction('[User Management] USER_DATA_LOADED', props<{ payload: UserModel }>());
export const USERS_DATA_LOAD_FAIL = createAction('[User Management] USERS_DATA_LOAD_FAIL');
export const USER_DATA_LOAD_FAIL = createAction('[User Management] USER_DATA_LOAD_FAIL');
