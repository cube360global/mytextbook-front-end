import {Injectable} from '@angular/core';
import {ApiBaseService} from '../../../@core/api/api.base.service';
import {Observable} from 'rxjs';
import {AdminControllersConst} from '../../../@core/const/AdminControllersConst';

@Injectable({
  providedIn: 'root'
})
export class CommissionApiServices {

  constructor(private apiBaseService: ApiBaseService) {
  }

  public all(): Observable<any> {
    return this.apiBaseService.GET_API([AdminControllersConst.UserController, 'pending-commissions']);
  }

}
