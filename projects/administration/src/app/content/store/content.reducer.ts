import * as UserManagement from './content.action';
import {UserModel} from '../../@core/interfaces/api/UserModel';
import {createReducer, on} from '@ngrx/store';


export interface State {
  loading: boolean;
  userData: UserModel[];
}

export const initialState: State = {
  loading: false,
  userData: [] as UserModel[]
};

export const contentReducer = createReducer(
  initialState,
  on(UserManagement.USERS_DATA_REQUEST, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(UserManagement.USERS_DATA_LOADED, (state, {payload}) => {
    return {
      ...state,
      userData: payload,
      loading: false
    };
  }),
  on(UserManagement.USERS_DATA_LOAD_FAIL, (state) => {
    return {
      ...state,
      userData: [] as UserModel[],
      loading: false
    };
  })
);

export const getUsesList = (state: State) => state.userData;
export const getUserLoadingState = (state: State) => state.loading;
