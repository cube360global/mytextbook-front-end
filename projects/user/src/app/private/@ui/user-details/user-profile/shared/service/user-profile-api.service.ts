import {Injectable} from '@angular/core';
import {ApiUtilityToolService} from '../../../../../../../../../lib/tools/src/lib/api-utility-tool.service';
import {Observable} from 'rxjs';
import {ControllerConst} from '../../../../../../../../../lib/tools/src/lib/global/ControllerConst';
import {UserModel} from '../../../../../../@core/interfaces/api/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserProfileApiService {

  constructor(private  apiUtilityToolService: ApiUtilityToolService) {
  }

  public getUserProfileById(userId: string): Observable<UserModel> {
    return this.apiUtilityToolService.GET<UserModel>([ControllerConst.User, 'profile', userId], true);
  }
}
