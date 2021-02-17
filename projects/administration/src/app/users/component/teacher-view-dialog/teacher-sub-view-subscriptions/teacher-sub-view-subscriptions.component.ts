import {Component, Input, OnInit} from '@angular/core';
import {UserSubscriptionModel} from '../../../../@core/interfaces/api/UserSubscriptionModel';
import {UserApiService} from '../../../shared/service/user-api.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../app.reducer';
import {AlertService} from '../../../../@core/services/alert.service';
import {AlertConst} from '../../../../@core/const/AlertConst';
import {USERS_DATA_REQUEST} from '../../../store/user.action';

@Component({
  selector: 'app-teacher-sub-view-subscriptions',
  templateUrl: './teacher-sub-view-subscriptions.component.html',
  styleUrls: ['./teacher-sub-view-subscriptions.component.scss']
})
export class TeacherSubViewSubscriptionsComponent implements OnInit {

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
