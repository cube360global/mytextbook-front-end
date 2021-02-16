import {createReducer, on} from '@ngrx/store';
import {QuestionModel} from '../../../@core/interfaces/api/QuestionModel';
import * as QuestionManagement from './question.action';

export interface State {
  loading: boolean;
  questionData: QuestionModel[];
}

export const initialState: State = {
  loading: false,
  questionData: []
};

export const questionReducer = createReducer(
  initialState,
  on(QuestionManagement.QUESTION_DATA_REQUEST, state => {
    return {
      ...state,
      loading: false
    };
  }),
  on(QuestionManagement.QUESTION_DATA_LOADED, (state, {payload}) => {
    return {
      ...state,
      questionData: payload,
      loading: false
    };
  }),
  on(QuestionManagement.QUESTION_DATA_LOAD_FAIL, state => {
    return {
      ...state,
      questionData: [],
      loading: false
    };
  })
);
