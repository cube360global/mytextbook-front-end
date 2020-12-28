import {Injectable} from '@angular/core';
import {ApiUtilityToolService} from '../../../../../../../../../lib/tools/src/lib/api-utility-tool.service';
import {Observable} from 'rxjs';
import {ControllerConst} from '../../../../../../../../../lib/tools/src/lib/global/ControllerConst';
import {UserProfileModel} from '../../../../../../@core/interfaces/api/UserProfileModel';

@Injectable({
  providedIn: 'root'
})
export class UserProfileApiService {

  constructor(private  apiUtilityToolService: ApiUtilityToolService) {
  }

  public getUserProfileById(userId: string): Observable<UserProfileModel> {
    return this.apiUtilityToolService.GET<UserProfileModel>([ControllerConst.User, 'profile', userId], true);
  }
}
