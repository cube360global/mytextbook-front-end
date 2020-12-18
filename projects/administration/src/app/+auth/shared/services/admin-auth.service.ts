import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoginModel} from '../interfaces/LoginModel';
import {ControllerConst} from '../../../../../../lib/tools/src/lib/global/ControllerConst';
import {Observable} from 'rxjs';
import {TokenDecodeModel} from '../interfaces/TokenDecodeModel';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  loginAdAdmin(loginModel: LoginModel): Observable<any> {
    // Set up x-www-form-urlencode body
    const reqBody = new HttpParams()
      .set('grant_type', 'password-and-role')
      .set('username', 'admin@abc.com')
      .set('password', 'Admin')
      .set('user_role', 'ADMIN');

    // set headers
    const headersObject = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + btoa(loginModel.username + ':' + loginModel.password));

    return this.http.post<TokenDecodeModel>(this.baseUrl + ControllerConst.LoginController, reqBody.toString(),
      {
        headers: headersObject
      });
  }


}
