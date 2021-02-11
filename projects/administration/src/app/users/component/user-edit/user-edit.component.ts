import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserModel} from '../../../@core/interfaces/api/UserModel';
import {UtilityService} from '../../../../../../lib/tools/src/lib/utility.service';
import {UserApiService} from '../../shared/service/user-api.service';
import {AlertService} from '../../../@core/services/alert.service';
import {AlertConst} from '../../../@core/const/AlertConst';
import {UserChangeStatus} from '../../../@core/interfaces/api/UserChangeStatus';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {USERS_DATA_LOADED, USERS_DATA_REQUEST} from '../../store/user.action';
import {SUBJECT_DATA_REQUEST} from '../../../subject/store/subject.action';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  selectedStatus = false;

  constructor(public dialogRef: MatDialogRef<UserEditComponent>,
              public utilityService: UtilityService,
              private alertService: AlertService,
              private store: Store<fromApp.AppState>,
              private userApiService: UserApiService,
              @Inject(MAT_DIALOG_DATA) public user: UserModel) {
  }

  ngOnInit(): void {
    this.selectedStatus = this.user.active;
  }

  onEditSubmit(): void {
    this.alertService.getConfirmationDialog()
      .confirm({
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          const userStatus = {} as UserChangeStatus;
          userStatus.id = this.user.id;
          userStatus.status = this.selectedStatus;
          this.userApiService.changeUserStatus(userStatus)
            .subscribe(res => {
              this.dialogRef.close();
              this.store.dispatch(USERS_DATA_LOADED({payload: res.users}));
            });
        }
      });
  }


}
