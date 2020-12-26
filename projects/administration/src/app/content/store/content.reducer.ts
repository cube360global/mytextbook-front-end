import * as ContentManagement from './content.action';
import {createReducer, on} from '@ngrx/store';
import {ContentModel} from '../../@core/interfaces/api/ContentModel';


export interface State {
  loading: boolean;
  contentData: ContentModel[];
}

export const initialState: State = {
  loading: false,
  contentData: [] as ContentModel[]
};

export const contentReducer = createReducer(
  initialState,
  on(ContentManagement.CONTENT_DATA_REQUEST, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(ContentManagement.CONTENT_DATA_LOADED, (state, {payload}) => {
    return {
      ...state,
      contentData: payload,
      loading: false
    };
  }),
  on(ContentManagement.CONTENT_DATA_LOAD_FAIL, (state) => {
    return {
      ...state,
      contentData: [] as ContentModel[],
      loading: false
    };
  })
);

export const getContentList = (state: State) => state.contentData;
export const getContentLoadingState = (state: State) => state.loading;
