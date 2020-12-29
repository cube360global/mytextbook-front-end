import {Component, Input, OnInit} from '@angular/core';
import {UserSubscriptionModel} from '../../../../@core/interfaces/api/UserSubscriptionModel';
import {AlertService} from '../../../../@core/services/alert.service';
import {AlertConst} from '../../../../@core/const/AlertConst';
import {UserApiService} from '../../../shared/service/user-api.service';

@Component({
  selector: 'app-user-sub-view',
  templateUrl: './user-sub-view.component.html',
  styleUrls: ['./user-sub-view.component.scss']
})
export class UserSubViewComponent implements OnInit {

  @Input() userSubscription = [] as UserSubscriptionModel [];
  @Input() userId = 0;

  constructor(private userApiService: UserApiService, private alertService: AlertService) {
  }

  ngOnInit(): void {
    console.log(this.userSubscription);
  }

  onSubDeleteClick(userId: number): void {

    this.alertService.getConfirmationDialog()
      .confirm({
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          // this.userApiService.deleteSubscription(userId,);
        }
      });

  }
}
