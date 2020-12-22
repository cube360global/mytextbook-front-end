import {Injectable} from '@angular/core';
import {ApiBaseService} from '../../../@core/api/api.base.service';
import {UserModel} from '../../../@core/interfaces/api/UserModel';
import {AdminControllersConst} from '../../../@core/const/AdminControllersConst';
import {Observable} from 'rxjs';
import {AddUserModel} from '../../../@core/interfaces/api/AddUserModel';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private apiBaseService: ApiBaseService) {
  }

  public getUserAll(): Observable<UserModel[]> {
    return this.apiBaseService.GET_API<UserModel[]>([AdminControllersConst.UserController, AdminControllersConst.All]);
  }

  public getUserProfileById(userId: string): Observable<UserModel> {
    return this.apiBaseService.GET_API<UserModel>([AdminControllersConst.UserController, 'profile', userId]);
  }

  public createUser(addUserModel: AddUserModel): Observable<UserModel[]> {
    return this.apiBaseService.UPDATE_API<UserModel[]>([AdminControllersConst.UserController], addUserModel, true);
  }

  public bulkUpload(fileData: FormData): Observable<any> {
    return this.apiBaseService.UPDATE_API<UserModel[]>([AdminControllersConst.UserController, 'all'], fileData, true);
  }
}
