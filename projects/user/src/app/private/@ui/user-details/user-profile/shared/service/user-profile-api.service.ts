import {Injectable} from '@angular/core';
import {ApiUtilityToolService} from '../../../../../../../../../lib/tools/src/lib/api-utility-tool.service';
import {Observable} from 'rxjs';
import {ControllerConst} from '../../../../../../../../../lib/tools/src/lib/global/ControllerConst';
import {UserProfileModel} from '../../../../../../@core/interfaces/api/UserProfileModel';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileApiService {

  constructor(private  apiUtilityToolService: ApiUtilityToolService, private httpBackend: HttpBackend) {
  }

  public getUserProfileById(userId: string): Observable<UserProfileModel> {
    return this.apiUtilityToolService.GET<UserProfileModel>([ControllerConst.User, 'profile', userId], true);
  }

  public updateUser(userSignUpModel: any): Observable<UserProfileModel> {
    return this.apiUtilityToolService.PUT<UserProfileModel>([ControllerConst.User, 'update'], userSignUpModel);
  }

  public resetPassword(password: string, token: string): Observable<any> {
    const x = {password};
    const headersObject = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    const httpClient = new HttpClient(this.httpBackend);
    return this.apiUtilityToolService.POST_WITHOUT_AUTH([ControllerConst.User, 'set-password'],
      x, headersObject, true);
  }
}
