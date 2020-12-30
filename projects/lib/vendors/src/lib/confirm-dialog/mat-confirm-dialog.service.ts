import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatConfirmDialogComponent} from './component/mat-confirm-dialog/mat-confirm-dialog.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatConfirmDialogService {

  constructor(private dialog: MatDialog) {
  }

  confirm(): Observable<any> {
    const dialogRef = this.dialog.open(MatConfirmDialogComponent, {
      width: '350px',
      data: false,
      disableClose: true,
      panelClass: 'dialog-panel'
    });
    return dialogRef.afterClosed();
  }
}
