import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserModel} from '../../../@core/interfaces/api/UserModel';
import {AlertConst} from '../../../@core/const/AlertConst';
import {USERS_DATA_REQUEST} from '../../store/user.action';
import {AlertService} from '../../../@core/services/alert.service';
import {UserApiService} from '../../shared/service/user-api.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';


@Component({
  selector: 'app-user-viewer-dialog',
  templateUrl: './user-viewer-dialog.component.html',
  styleUrls: ['./user-viewer-dialog.component.scss']
})
export class UserViewerDialogComponent implements OnInit {


  constructor(
    private alertService: AlertService,
    private userApiService: UserApiService,
    private store: Store<fromApp.AppState>,
    public dialogRef: MatDialogRef<UserViewerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userModel: UserModel) {
  }

  ngOnInit(): void {

  }

  onDeleteUserClick(id: number): void {
    this.alertService.getConfirmationDialog()
      .confirm({
        key: 'user-delete',
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.userApiService.Delete(id)
            .subscribe(() => {
              this.store.dispatch(USERS_DATA_REQUEST());
              this.dialogRef.close();
            });
        }
      });
  }

}
