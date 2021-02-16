import {createAction, props} from '@ngrx/store';
import {QuestionModel} from '../../../@core/interfaces/api/QuestionModel';

export const QUESTION_DATA_REQUEST = createAction('[Question Management] QUESTION_DATA_REQUEST', props<{ payload: string }>());

export const QUESTION_DATA_LOADED = createAction('[Question Management] QUESTION_DATA_LOADED', props<{ payload: QuestionModel[] }>());

export const QUESTION_DATA_LOAD_FAIL = createAction('[Question Management QUESTION_DATA_LOAD_FAIL]');
