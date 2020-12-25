import {Inject, Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoginModel} from '../../../../../../lib/authentication/src/lib/interfaces/LoginModel';
import {ControllerConst} from '../../../../../../lib/tools/src/lib/global/ControllerConst';
import {Observable} from 'rxjs';
import {TokenDecodeModel} from '../../../../../../lib/authentication/src/lib/interfaces/TokenDecodeModel';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private httpBackend: HttpBackend,
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
    return httpClient.post<TokenDecodeModel>(this.baseUrl + ControllerConst.LoginController, reqBody.toString(),
      {
        headers: headersObject
      });
  }


}
