import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiUtilityToolService} from '../../../../../../../../../lib/tools/src/lib/api-utility-tool.service';
import {ControllerConst} from '../../../../../../../../../lib/tools/src/lib/global/ControllerConst';
import {BookModel} from '../../../../../../@core/interfaces/api/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  constructor(private  apiUtilityToolService: ApiUtilityToolService) {
  }

  All(): Observable<BookModel[]> {
    return this.apiUtilityToolService.GET<BookModel[]>([ControllerConst.Book, ControllerConst.All], true);
  }
}
