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

  allBooks(isLoaderOn = true): Observable<BookModel[]> {
    return this.apiBaseService.GET_API<BookModel[]>([AdminControllersConst.BookController,
      AdminControllersConst.All], isLoaderOn);
  }

  putContent(contentData: FormData): Observable<any> {
    return this.apiBaseService.UPDATE_API<ContentModel[]>([AdminControllersConst.ContentController], contentData,
      true);
  }

  // Update
  updateContent(contentData: FormData): Observable<any> {
    return this.apiBaseService.UPDATE_API<ContentModel[]>([AdminControllersConst.ContentController, 'update'], contentData,
      true);
  }

  deleteContent(id: string): Observable<any> {
    return this.apiBaseService.DELETE_API<ContentModel[]>([AdminControllersConst.ContentController, id]);
  }

}
