import {Injectable} from '@angular/core';
import {ApiBaseService} from '../../../@core/api/api.base.service';
import {Observable} from 'rxjs';
import {ContentModel} from '../../../@core/interfaces/api/ContentModel';
import {AdminControllersConst} from '../../../@core/const/AdminControllersConst';
import {BookModel} from '../../../@core/interfaces/api/BookModel';

@Injectable({
  providedIn: 'root'
})
export class ContentApiService {

  constructor(private apiBaseService: ApiBaseService) {
  }

  all(): Observable<ContentModel[]> {
    return this.apiBaseService.GET_API<ContentModel[]>([AdminControllersConst.ContentController,
      AdminControllersConst.All]);
  }

  allBooks(): Observable<BookModel[]> {
    return this.apiBaseService.GET_API<BookModel[]>([AdminControllersConst.BookController,
      AdminControllersConst.All], true);
  }

  putContent(contentData: FormData): Observable<any> {
    return this.apiBaseService.UPDATE_API<ContentModel[]>([AdminControllersConst.ContentController], contentData,
      true);
  }

}
