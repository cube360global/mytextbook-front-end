import {Inject, Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoginModel} from '../interfaces/LoginModel';
import {ControllerConst} from '../../../../../../lib/tools/src/lib/global/ControllerConst';
import {Observable} from 'rxjs';
import {TokenDecodeModel} from '../interfaces/TokenDecodeModel';
import {ApiBaseService} from '../../../@core/api/api.base.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private httpBackend: HttpBackend,
              private apiBaseService: ApiBaseService,
              @Inject('BASE_URL') private baseUrl: string) {
  }

  loginAdAdmin(loginModel: LoginModel): Observable<any> {
    // Set up x-www-form-urlencode body
    const reqBody = new HttpParams()
      .set('grant_type', 'password-and-role')
      .set('username', loginModel.username)
      .set('password', loginModel.password)
      .set('user_role', 'ADMIN');


    // set headers
    const headersObject = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + btoa('web-client:web-secret'));
    const httpClient = new HttpClient(this.httpBackend);
    return httpClient.post<TokenDecodeModel>(this.baseUrl + ControllerConst.Login, reqBody.toString(),
      {
        headers: headersObject
      });
  }

  loginWithRefreshToken(refreshToken: string): Observable<TokenDecodeModel> {

    // Set up x-www-form-urlencode body
    const reqBody = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', refreshToken);

    // set headers
    const headersObject = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + btoa('web-client' + ':' + 'web-secret'));

    const httpClient = new HttpClient(this.httpBackend);
    return httpClient.post<TokenDecodeModel>(this.baseUrl + ControllerConst.Login, reqBody.toString(),
      {
        headers: headersObject
      });
  }


  userLogOut(userEmail: string): Observable<any> {
    return this.apiBaseService.POST_API(['user', 'logout', userEmail], null, false, false);
  }

}
