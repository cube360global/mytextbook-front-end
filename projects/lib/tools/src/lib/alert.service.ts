import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {MatConfirmDialogService} from '../../../vendors/src/lib/confirm-dialog/mat-confirm-dialog.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr: ToastrService,
              private matConfirmDialog: MatConfirmDialogService) {
  }


  showSuccess(message: string): void {
    this.toastr.success('', message);
  }

  showError(message: string): void {
    this.toastr.warning('', message);
  }
  showAuthHttpResponseError(error: any): void {
    this.toastr.warning('', error.error.error_description);
  }

  showConfirmationDialog(): Observable<boolean> {
    return this.matConfirmDialog.confirm();
  }

}
