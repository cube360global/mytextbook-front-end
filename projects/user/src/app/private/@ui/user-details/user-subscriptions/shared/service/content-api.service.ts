import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiUtilityToolService} from '../../../../../../../../../lib/tools/src/lib/api-utility-tool.service';
import {ControllerConst} from '../../../../../../../../../lib/tools/src/lib/global/ControllerConst';
import {BookAndContentModel} from '../../../../../../@core/interfaces/api/BookAndContentModel';
import {BookSearchApiModel} from '../../../../../../@core/interfaces/api/BookSearchApiModel';
import {ContentModel} from '../../../../../../@core/interfaces/api/ContentModel';

@Injectable({
  providedIn: 'root'
})
export class ContentApiService {
  constructor(private apiUtilityToolService: ApiUtilityToolService) {
  }

  public getBookContentByBookId(bookId: string): Observable<BookAndContentModel> {
    return this.apiUtilityToolService.GET<BookAndContentModel>([ControllerConst.Book, 'book-and-contents', bookId], true);
  }

  public searchBookContentByBookId(bookSearch: BookSearchApiModel): Observable<ContentModel[]> {
    return this.apiUtilityToolService.POST<ContentModel[]>
    ([ControllerConst.Content, 'book-contents', 'search'], bookSearch, true, true);
  }
}
