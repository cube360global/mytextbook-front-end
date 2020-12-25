import {SubjectModel} from './api/SubjectModel';
import {UserModel} from './api/UserModel';

export interface SubjectUser{
  user: UserModel;
  subjectList: SubjectModel[];
}
