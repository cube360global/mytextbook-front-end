import {Injectable} from '@angular/core';
import {ApiBaseService} from '../../../@core/api/api.base.service';
import {UserModel} from '../../../@core/interfaces/api/UserModel';
import {AdminControllersConst} from '../../../@core/const/AdminControllersConst';
import {Observable} from 'rxjs';
import {AddUserModel} from '../../../@core/interfaces/api/AddUserModel';
import {BulkResponseModel} from '../../../@core/interfaces/api/BulkResponseModel';
import {UserAndSchoolModel} from '../../../@core/interfaces/api/UserAndSchoolModel';
import {SearchUserModel} from '../../../@core/interfaces/api/SearchUserModel';
import {PostSubscription} from '../../../@core/interfaces/api/PostSubscription';
import {UserChangeStatus} from '../../../@core/interfaces/api/UserChangeStatus';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private apiBaseService: ApiBaseService) {
  }

  public all(): Observable<UserAndSchoolModel> {
    return this.apiBaseService.GET_API<UserAndSchoolModel>([AdminControllersConst.UserController,
      AdminControllersConst.All]);
  }

  public getUserProfileById(userId: string): Observable<UserModel> {
    return this.apiBaseService.GET_API<UserModel>([AdminControllersConst.UserController, 'profile', userId]);
  }

  public createUser(addUserModel: AddUserModel): Observable<UserAndSchoolModel> {
    return this.apiBaseService.UPDATE_API<UserAndSchoolModel>([AdminControllersConst.UserController],
      addUserModel, true);
  }

  public bulkUpload(fileData: FormData): Observable<BulkResponseModel> {
    return this.apiBaseService.UPDATE_API<BulkResponseModel>([AdminControllersConst.UserController, 'all'],
      fileData, true);
  }

  public searchUsers(searchUserModel: SearchUserModel): Observable<UserAndSchoolModel> {
    return this.apiBaseService.POST_API<UserAndSchoolModel>([AdminControllersConst.UserController, 'search'],
      searchUserModel, true, true);
  }

  public changeUserStatus(userStatus: UserChangeStatus): Observable<UserAndSchoolModel> {
    return this.apiBaseService.POST_API<UserAndSchoolModel>([AdminControllersConst.UserController, 'change-status'], userStatus, true);
  }

  public pushUserNotifications(userList: any): Observable<any> {
    return this.apiBaseService.POST_API<any>([AdminControllersConst.UserController, 'push-notification'],
      userList, true, true);
  }


  public addSubscriptionToUser(postSub: PostSubscription): Observable<any> {
    return this.apiBaseService.POST_API<any>([AdminControllersConst.SubscriptionController],
      postSub, true, true);
  }

  public deleteSubscription(userId: string, bookId: string): Observable<UserAndSchoolModel> {
    console.log(bookId);
    return this.apiBaseService.DELETE_API<UserAndSchoolModel>
    ([AdminControllersConst.SubscriptionController, userId, bookId]);
  }


  Delete(id: number): Observable<any> {
    return this.apiBaseService.DELETE_API<any>([AdminControllersConst.UserController, id.toString()]);
  }
}
