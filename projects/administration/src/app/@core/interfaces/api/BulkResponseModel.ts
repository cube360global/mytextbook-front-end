import {UserModel} from './UserModel';

export interface BulkResponseModel {
  allUsers: UserModel[];
  failedAccount: string[];
  successAccounts: string[];
}
