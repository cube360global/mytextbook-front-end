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

  Get(dookId: string) {

  }
}
