import {Injectable} from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private confirmationService: ConfirmationService,
              private toastr: ToastrService) {
  }

  public getConfirmationDialog(): ConfirmationService {
    return this.confirmationService;
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

  showInfo(message: string): void {
    this.toastr.info(message);
  }
}
