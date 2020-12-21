import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {ResponsesModel} from '../interfaces/ResponsesModel';


@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {



  constructor(private http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string) {
  }


  POST_API<T>(path: string[], body: any, isShowSuccess = true): Observable<T> {
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.post<ResponsesModel>(apiPath, body)
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
          return throwError(err);
        }));
  }

  UPDATE_API<T>(path: string[], body: any): Observable<T> {
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.put<ResponsesModel>(apiPath, body)
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
          return throwError(err);
        }));
  }

  GET_API<T>(path: string[]): Observable<T> {
    // this.showSpinner();
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.get<ResponsesModel>(apiPath)
      .pipe(
        map((data) => {
          if (data.statusCode === 200) {
            // this.hideSpinner();
            return data.data as T;

          } else {
            throw Error('VERTEX');
          }
        }), catchError(err => {
          if (err.message !== 'VERTEX') {
          }
          return throwError(err);
        }));
  }

  DELETE_API<T>(path: string[]): Observable<T>  {
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
          return throwError(err);
        }));
  }
}
