import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';
import {ControllerConst} from '../../../../../../lib/tools/src/lib/global/ControllerConst';
import {ApiUtilityToolService} from '../../../../../../lib/tools/src/lib/api-utility-tool.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectApiService {
  constructor(private apiUtilityToolService: ApiUtilityToolService) {
  }

  public All(): Observable<SubjectModel[]> {
    return this.apiUtilityToolService.GET<SubjectModel[]>([ControllerConst.Subject, ControllerConst.All]);
  }
}
