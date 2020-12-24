import {Injectable} from '@angular/core';
import {ApiBaseService} from '../../../@core/api/api.base.service';
import {UserModel} from '../../../@core/interfaces/api/UserModel';
import {AdminControllersConst} from '../../../@core/const/AdminControllersConst';
import {Observable} from 'rxjs';
import {AddUserModel} from '../../../@core/interfaces/api/AddUserModel';
import {BulkResponseModel} from '../../../@core/interfaces/api/BulkResponseModel';
import {UserAndSchoolModel} from '../../../@core/interfaces/api/UserAndSchoolModel';
import {SearchUserModel} from '../../../@core/interfaces/api/SearchUserModel';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private apiBaseService: ApiBaseService) {
  }

  public all(): Observable<UserAndSchoolModel> {
    return this.apiBaseService.GET_API<UserAndSchoolModel>([AdminControllersConst.UserController, AdminControllersConst.All]);
  }

  public getUserProfileById(userId: string): Observable<UserModel> {
    return this.apiBaseService.GET_API<UserModel>([AdminControllersConst.UserController, 'profile', userId]);
  }

  public createUser(addUserModel: AddUserModel): Observable<UserModel[]> {
    return this.apiBaseService.UPDATE_API<UserModel[]>([AdminControllersConst.UserController], addUserModel, true);
  }

  public bulkUpload(fileData: FormData): Observable<BulkResponseModel> {
    return this.apiBaseService.UPDATE_API<BulkResponseModel>([AdminControllersConst.UserController, 'all'], fileData, true);
  }

  public searchUsers(searchUserModel: SearchUserModel): Observable<UserModel[]> {
    return this.apiBaseService.POST_API<UserModel[]>([AdminControllersConst.UserController, 'search'], searchUserModel, true);
  }
}
