import {Component, Input, OnInit} from '@angular/core';
import {UserSubscriptionModel} from '../../../../@core/interfaces/api/UserSubscriptionModel';
import {AlertService} from '../../../../@core/services/alert.service';
import {AlertConst} from '../../../../@core/const/AlertConst';
import {UserApiService} from '../../../shared/service/user-api.service';
import {USERS_DATA_REQUEST} from '../../../store/user.action';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../app.reducer';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-sub-view',
  templateUrl: './user-sub-view.component.html',
  styleUrls: ['./user-sub-view.component.scss']
})
export class UserSubViewComponent implements OnInit {

  @Input() userSubscription = [] as UserSubscriptionModel [];
  @Input() userId = 0;

  @Input() dialogRef: any;

  constructor(private userApiService: UserApiService,
              private store: Store<fromApp.AppState>,
              private alertService: AlertService) {
  }

  ngOnInit(): void {
  }

  onSubDeleteClick(userId: number, bookId: number): void {

    this.alertService.getConfirmationDialog()
      .confirm({
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.userApiService.deleteSubscription(userId.toString(), bookId.toString())
            .subscribe(res => {
              this.store.dispatch(USERS_DATA_REQUEST());
              this.dialogRef.close();
            });
        }
      });

  }
}
