import {createAction, props} from '@ngrx/store';
import {SubjectModel} from '../../../../../../@core/interfaces/api/SubjectModel';

export const SUBJECT_DATA_REQUEST = createAction('[Subject Management] SUBJECT_DATA_REQUEST');
export const SUBJECT_DATA_LOADED = createAction('[Subject Management] SUBJECT_DATA_LOADED', props<{ payload: SubjectModel[] }>());
export const SUBJECT_DATA_LOAD_FAIL = createAction('[Subject Management] SUBJECT_DATA_LOAD_FAIL');
