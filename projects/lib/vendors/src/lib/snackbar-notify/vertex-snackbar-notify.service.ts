import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SuccessNotifyComponent} from './components/success-notify/success-notify.component';

@Injectable({
  providedIn: 'root'
})
export class VertexSnackbarNotifyService {

  constructor(private snackbar: MatSnackBar) {
  }

  showSuccess(message: string, title: string): void {
    this.snackbar.openFromComponent(SuccessNotifyComponent, {
      data: {
        message,
        title
      },
      duration: 2000,
      panelClass: 'success-snack'
    });
  }
}
