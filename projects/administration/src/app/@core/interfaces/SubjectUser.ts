import {SubjectModel} from './api/SubjectModel';

export interface SubjectUser{
  userId: string;
  subjectList: SubjectModel[];
}
