import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {ResponsesModel} from '../interfaces/ResponsesModel';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {AlertService} from '../services/alert.service';


@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {


  constructor(private http: HttpClient,
              private ngxUiLoader: NgxUiLoaderService,
              private alertService: AlertService,
              @Inject('BASE_URL') private baseUrl: string) {
  }


  POST_API<T>(path: string[], body: any, isLoaderOn = false, isShowSuccess = true): Observable<T> {
    if (isLoaderOn) {
      this.ngxUiLoader.start('3100');
    }
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.post<ResponsesModel>(apiPath, body)
      .pipe(
        map((data) => {
          if (data.statusCode === 200) {
            if (isLoaderOn) {
              this.ngxUiLoader.stop('3100');
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
            this.ngxUiLoader.stop('3100');
          }
          this.alertService.showError(err.error.message);
          return throwError(err);
        }));
  }

  UPDATE_API<T>(path: string[], body: any, isLoaderOn = false): Observable<T> {
    if (isLoaderOn) {
      this.ngxUiLoader.start('3300');
    }
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.put<ResponsesModel>(apiPath, body)
      .pipe(
        map((data) => {
          if (data.statusCode === 200) {
            if (isLoaderOn) {
              this.ngxUiLoader.stop('3300');
            }
            this.alertService.showSuccess(data.message);
            return data.data as T;
          } else {
            throw Error(data.message);
          }
        }), catchError(err => {
          if (isLoaderOn) {
            this.ngxUiLoader.stop('3300');
          }
          this.alertService.showError(err.error.message);
          return throwError(err);
        }));
  }


  GET_API<T>(path: string[], isLoaderOn = false): Observable<T> {
    if (isLoaderOn) {
      this.ngxUiLoader.start('3200');
    }
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.get<ResponsesModel>(apiPath)
      .pipe(
        map((data) => {
          if (data.statusCode === 200) {
            if (isLoaderOn) {
              this.ngxUiLoader.stop('3200');
            }
            return data.data as T;

          } else {
            throw Error(data.message);
          }
        }), catchError((err: HttpErrorResponse) => {
          if (isLoaderOn) {
            this.ngxUiLoader.stop('3200');
          }
          this.alertService.showError(err.error.message);
          return throwError(err);
        }));
  }

  DELETE_API<T>(path: string[]): Observable<T> {
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.delete<ResponsesModel>(apiPath)
      .pipe(
        map((data) => {
          if (data.statusCode === 200) {
            return data.data as T;
          } else {
            throw Error('VERTEX');
          }
        }), catchError(err => {

          if (err.message !== 'VERTEX') {
          }
          this.alertService.showError(err.error.message);
          return throwError(err);
        }));
  }
}
