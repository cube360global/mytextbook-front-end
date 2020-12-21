import {Injectable} from '@angular/core';
import {ApiBaseService} from '../../../@core/api/api.base.service';
import {UserModel} from '../../../@core/interfaces/api/UserModel';
import {AdminControllersConst} from '../../../@core/const/AdminControllersConst';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private apiBaseService: ApiBaseService) {
  }

  public getUserAll(): Observable<UserModel[]> {
    return this.apiBaseService.GET_API<UserModel[]>([AdminControllersConst.UserController, AdminControllersConst.All]);

  }
}
