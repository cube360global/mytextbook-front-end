import {Inject, Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {NgxSpinnerService} from 'ngx-spinner';
import {ApiResponseModel} from './interfaces/ApiResponseModel';
import {AlertService} from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilityToolService {
  constructor(private http: HttpClient,
              private httpBackend: HttpBackend,
              private spinner: NgxSpinnerService,
              private alertService: AlertService,
              @Inject('BASE_URL') private baseUrl: string) {
  }

  POST<T>(path: string[], body: any, isLoaderOn = false, isShowSuccess = true): Observable<T> {
    if (isLoaderOn) {
      this.spinner.show();
    }
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.post<ApiResponseModel>(apiPath, body)
      .pipe(
        map((data) => {
          if (data.statusCode === 200) {
            if (isLoaderOn) {
              this.spinner.hide();
            }
            if (isShowSuccess) {
              this.alertService.showSuccess(data.message);
            }
            return data.data as T;
          } else {
            throw Error('VERTEX');
          }
        }), catchError(err => {
          if (isLoaderOn) {
            this.spinner.hide();
          }
          this.alertService.showError(err?.error?.message);
          return throwError(err);
        }));
  }

  PUT<T>(path: string[], body: any, isLoaderOn = false): Observable<T> {
    if (isLoaderOn) {
      this.spinner.show();
    }
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.put<ApiResponseModel>(apiPath, body)
      .pipe(
        map((data) => {
          if (data.statusCode === 200) {
            if (isLoaderOn) {
              this.spinner.hide();
            }
            this.alertService.showSuccess(data.message);
            return data.data as T;
          } else {
            throw Error(data.message);
          }
        }), catchError(err => {
          if (isLoaderOn) {
            this.spinner.hide();
          }
          this.alertService.showError(err?.error?.message);
          return throwError(err);
        }));
  }

  GET<T>(path: string[], isLoaderOn = false): Observable<T> {
    if (isLoaderOn) {
      this.spinner.show();
    }
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.get<ApiResponseModel>(apiPath)
      .pipe(
        map((data) => {
          if (data.statusCode === 200) {
            if (isLoaderOn) {
              this.spinner.hide();
            }
            return data.data as T;
          } else {
            throw Error(data.message);
          }
        }), catchError(err => {
          if (isLoaderOn) {
            this.spinner.hide();
          }
          this.alertService.showError(err?.error?.message);
          return throwError(err);
        }));
  }

  DELETE<T>(path: string[]): Observable<T> {
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.delete<ApiResponseModel>(apiPath)
      .pipe(
        map((data) => {
          if (data.statusCode === 200) {
            return data.data as T;
          } else {
            throw Error('VERTEX');
          }
        }), catchError(err => {
          this.alertService.showError(err?.error?.message);
          if (err.message !== 'VERTEX') {
          }
          return throwError(err);
        }));
  }

  POST_WITHOUT_AUTH<T>(path: string[], body: T, httpHeaders: HttpHeaders, isLoaderOn = false, isShowSuccess = false): Observable<T> {
    if (isLoaderOn) {
      this.spinner.show();
    }
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    const httpClient = new HttpClient(this.httpBackend);
    return httpClient.post<ApiResponseModel>(apiPath, body,
      {
        headers: httpHeaders
      }).pipe(
      map((data) => {
        if (data.statusCode === 200) {
          if (isLoaderOn) {
            this.spinner.hide();
          }
          if (isShowSuccess) {
            this.alertService.showSuccess(data.message);
          }

          return data.data as T;
        } else {
          throw Error(data.message);
        }
      }), catchError(err => {
        if (isLoaderOn) {
          this.spinner.hide();
        }
        this.alertService.showError(err?.error?.message);
        return throwError(err);
      }));
  }
}
