import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserModel} from '../../../@core/interfaces/api/UserModel';
import {UserApiService} from '../../shared/service/user-api.service';
import {AlertService} from '../../../@core/services/alert.service';
import {AlertConst} from '../../../@core/const/AlertConst';

@Component({
  selector: 'app-users-push-notification-dialog',
  templateUrl: './users-push-notification-dialog.component.html',
  styleUrls: ['./users-push-notification-dialog.component.scss']
})
export class UsersPushNotificationDialogComponent implements OnInit {

  message = '';

  constructor(public dialogRef: MatDialogRef<UsersPushNotificationDialogComponent>,
              private alertService: AlertService,
              private userApiService: UserApiService,
              @Inject(MAT_DIALOG_DATA) public userDataList: UserModel[]) {
  }

  ngOnInit(): void {
  }

  onSendNotification(): void {
    this.alertService.getConfirmationDialog()
      .confirm({
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          const emails = [] as string[];
          this.userDataList.forEach(value => {
            emails.push(value.email);
          });
          this.userApiService.pushUserNotifications({emails, message: this.message}).subscribe(res => {
            // Can add fail notification window
          });
        }
      });
  }
}
