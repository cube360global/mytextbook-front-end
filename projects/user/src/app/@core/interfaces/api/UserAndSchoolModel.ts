import {UserModel} from './UserModel';

export interface UserAndSchoolModel {
  schools: string[];
  users: UserModel[];
}
