import {Inject, Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoginModel} from '../../../../../../lib/authentication/src/lib/interfaces/LoginModel';
import {ControllerConst} from '../../../../../../lib/tools/src/lib/global/ControllerConst';
import {Observable} from 'rxjs';
import {TokenDecodeModel} from '../../../../../../lib/authentication/src/lib/interfaces/TokenDecodeModel';
import {ApiUtilityToolService} from "../../../../../../lib/tools/src/lib/api-utility-tool.service";
import {UserSignUpModel} from "../../../@core/interfaces/api/UserSignUpModel";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private httpBackend: HttpBackend,
              private apiUtilityToolService: ApiUtilityToolService,
              @Inject('BASE_URL') private baseUrl: string) {
  }

  loginAdAdmin(loginModel: LoginModel): Observable<any> {
    console.log(loginModel);
    // Set up x-www-form-urlencode body
    const reqBody = new HttpParams()
      .set('grant_type', 'password-and-role')
      .set('username', loginModel.username)
      .set('password', loginModel.password)
      .set('user_role', 'STUDENT');


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

  public signUpUser(signUp: UserSignUpModel): Observable<any> {
    return this.apiUtilityToolService.POST([ControllerConst.User, 'sign-up'],
      signUp, true, true);
  }
  public  forgetPassword(email: string): Observable<any>{
    return this.apiUtilityToolService.POST([ControllerConst.User, 'forgot-password', email],
      null, true, true);
  }

  public  resetPassword(password: string, token: string): Observable<any>{
    const x = {password};
    const headersObject = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    const httpClient = new HttpClient(this.httpBackend);
    return  this.apiUtilityToolService.POST_WITHOUT_AUTH([ControllerConst.User, 'set-password'],
      x, headersObject, true);
  }
}
