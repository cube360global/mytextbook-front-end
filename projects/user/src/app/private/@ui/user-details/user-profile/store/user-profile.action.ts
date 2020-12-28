import {createAction, props} from '@ngrx/store';
import {UserProfileModel} from '../../../../../@core/interfaces/api/UserProfileModel';


export const USER_DATA_REQUEST = createAction('[User Profile] USER_DATA_REQUEST', props<{ payload: string }>());
export const USER_DATA_LOADED = createAction('[User Profile] USER_DATA_LOADED', props<{ payload: UserProfileModel }>());
export const USER_DATA_LOAD_FAIL = createAction('[User Profile] USER_DATA_LOAD_FAIL');
