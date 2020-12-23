import {Injectable} from '@angular/core';
import {ApiBaseService} from '../../../@core/api/api.base.service';
import {AdminControllersConst} from '../../../@core/const/AdminControllersConst';
import {Observable} from 'rxjs';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';

@Injectable({
  providedIn: 'root'
})
export class SubjectApiService {

  constructor(private apiBaseService: ApiBaseService) {
  }

  public All(): Observable<SubjectModel[]> {
    return this.apiBaseService.GET_API<SubjectModel[]>
    ([AdminControllersConst.SubjectController, AdminControllersConst.All]);
  }

  // Get(dookId: string) {
  //
  // }
  public Put(data: FormData): Observable<SubjectModel[]> {
    return this.apiBaseService.UPDATE_API<SubjectModel[]>([AdminControllersConst.SubjectController], data, true);
  }
}
