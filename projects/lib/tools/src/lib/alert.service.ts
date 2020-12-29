import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr: ToastrService) {
  }


  showSuccess(message: string): void {
    this.toastr.success(message, 'success');
  }

  showError(message: string): void {
    this.toastr.error(message, 'Error occur !!');
  }

  showWaning(message: string, title: string): void {
    this.toastr.warning(message, title);
  }

  showAuthHttpResponseError(error: any): void {
    this.toastr.warning('', error.error.error_description);
  }


}
