import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiUtilityToolService} from '../../../../../../../../../lib/tools/src/lib/api-utility-tool.service';
import {ControllerConst} from '../../../../../../../../../lib/tools/src/lib/global/ControllerConst';
import {ContentModel} from '../../../../../../@core/interfaces/api/ContentModel';

@Injectable({
  providedIn: 'root'
})
export class ContentApiService {
  constructor(private apiUtilityToolService: ApiUtilityToolService) {
  }

  All(): Observable<ContentModel[]> {
    return this.apiUtilityToolService.GET<ContentModel[]>([ControllerConst.Content, ControllerConst.All], true);
  }
}
