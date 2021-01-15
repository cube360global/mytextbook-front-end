import {Injectable} from '@angular/core';
import {ApiBaseService} from '../../../@core/api/api.base.service';
import {BookModel} from '../../../@core/interfaces/api/BookModel';
import {AdminControllersConst} from '../../../@core/const/AdminControllersConst';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private apiBaseService: ApiBaseService) {
  }

  public All(): Observable<BookModel[]> {
    return this.apiBaseService.GET_API<BookModel[]>
    ([AdminControllersConst.BookController, AdminControllersConst.All]);
  }

  public Send(formBody: FormData): Observable<BookModel[]> {
    return this.apiBaseService.POST_API<BookModel[]>([AdminControllersConst.BookController], formBody, true);
  }

  public search(bookModel: any): Observable<BookModel[]> {
    return this.apiBaseService.POST_API<BookModel[]>
    ([AdminControllersConst.BookController, AdminControllersConst.Search],
      bookModel, true, true);
  }

  public Put(formData: FormData): Observable<BookModel[]> {
    return this.apiBaseService.UPDATE_API<BookModel[]>([AdminControllersConst.BookController], formData, true);
  }

  // Get(dookId: string) {
  //
  // }
}
