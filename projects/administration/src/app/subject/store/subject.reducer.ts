import * as subjectManagement from './subject.action';
import {createReducer, on} from '@ngrx/store';
import {BookModel} from '../../@core/interfaces/api/BookModel';
import {SubjectModel} from '../../@core/interfaces/api/SubjectModel';


export interface State {
  loading: boolean;
  subjectData: SubjectModel[];
}

export const initialState: State = {
  loading: false,
  subjectData: [] as SubjectModel[]
};

export const subjectReducer = createReducer(
  initialState,
  on(subjectManagement.SUBJECT_DATA_REQUEST, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(subjectManagement.SUBJECT_DATA_LOADED, (state, {payload}) => {
    return {
      ...state,
      subjectData: payload,
      loading: false
    };
  }),
  on(subjectManagement.SUBJECT_DATA_LOAD_FAIL, (state) => {
    return {
      ...state,
      subjectData: [] as SubjectModel[],
      loading: false
    };
  })
);

export const getSubjects = (state: State) => state.subjectData;
export const getSubjectLoadingState = (state: State) => state.loading;
