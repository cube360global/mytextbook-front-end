import {Inject, Injectable} from '@angular/core';
import {
  HttpBackend,
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpParams,
  HttpRequest
} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../app.reducer';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {CookieManagerService} from '../services/cookie-manager.service';
import {TokenDecodeModel} from '../../+auth/shared/interfaces/TokenDecodeModel';
import {ControllerConst} from '../../../../../lib/tools/src/lib/global/ControllerConst';
import {REFRESH_USER_TOKEN, USER_LOGIN_FAIL} from '../../+auth/store/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  private token = '';
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<TokenDecodeModel> = new BehaviorSubject<TokenDecodeModel>({} as TokenDecodeModel);

  constructor(private store: Store<fromApp.AppState>,
              private httpBackend: HttpBackend,
              @Inject('BASE_URL') private baseUrl: string,
              private cookieManagerService: CookieManagerService) {

    // store.select(fromApp.getAuthState)
    //   .subscribe(authData => {
    //     if (authData != null && authData.tokenDecodeModel != null && authData.tokenDecodeModel.access_token != null) {
    //       // this.token = authData.tokenDecodeModel.access_token;
    //     }
    //   });

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = this.cookieManagerService.getAccessToken();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next({} as TokenDecodeModel);
      return this.tryGetRefreshTokenService().pipe(
        switchMap((token) => {
          this.store.dispatch(REFRESH_USER_TOKEN({payload: token}));
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token);
          return next.handle(this.addToken(request, token.access_token));
        }), catchError((err) => {
          this.store.dispatch(USER_LOGIN_FAIL());
          return throwError(err);
        }));
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt.access_token));
        }));
    }
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private tryGetRefreshTokenService(): Observable<TokenDecodeModel> {
    const refreshToken = this.cookieManagerService.getRefreshToken();
    // Set up x-www-form-urlencode body
    const reqBody = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', refreshToken.toString());

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
}
