import {Injectable} from '@angular/core';
import {ApiBaseService} from '../../../@core/api/api.base.service';
import {Observable} from 'rxjs';
import {AdminControllersConst} from '../../../@core/const/AdminControllersConst';
import {CommissionModel} from '../../../@core/interfaces/api/CommissionModel';
import {CommissionPayModel} from '../../../@core/interfaces/api/CommissionPayModel';

@Injectable({
  providedIn: 'root'
})
export class CommissionApiService {

  constructor(private apiBaseService: ApiBaseService) {
  }

  public all(): Observable<CommissionModel[]> {
    return this.apiBaseService.GET_API<CommissionModel[]>([AdminControllersConst.UserController, 'pending-commissions']);
  }

  public post(commissionPayModel: CommissionPayModel[]): Observable<CommissionPayModel[]> {
    return this.apiBaseService.POST_API<CommissionPayModel[]>(
      [AdminControllersConst.CommissionController],
      commissionPayModel,
      true,
      true);
  }
}
