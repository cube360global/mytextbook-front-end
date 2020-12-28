import {Injectable} from '@angular/core';
import {ApiUtilityToolService} from '../../../../../../../../../lib/tools/src/lib/api-utility-tool.service';
import {Observable} from 'rxjs';
import {BookModel} from '../../../../../../@core/interfaces/api/BookModel';
import {ControllerConst} from '../../../../../../../../../lib/tools/src/lib/global/ControllerConst';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private  apiUtilityToolService: ApiUtilityToolService) {
  }

  all(): Observable<BookModel[]> {
    return this.apiUtilityToolService.GET<BookModel[]>([ControllerConst.Book, ControllerConst.All], true);
  }
}
