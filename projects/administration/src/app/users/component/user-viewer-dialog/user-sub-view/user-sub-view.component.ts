import {Component, Input, OnInit} from '@angular/core';
import {UserSubscriptionModel} from '../../../../@core/interfaces/api/UserSubscriptionModel';
import {UserSubscriptionService} from '../../../shared/service/user-subscription.service';

@Component({
  selector: 'app-user-sub-view',
  templateUrl: './user-sub-view.component.html',
  styleUrls: ['./user-sub-view.component.scss']
})
export class UserSubViewComponent implements OnInit {

  @Input() userSubscription = [] as UserSubscriptionModel [];
  @Input() userId = 0 ;

  constructor(private userSubscriptionService: UserSubscriptionService) {
  }

  ngOnInit(): void {
  }

  onSubDeleteClick(userId: number): void {
   // this.userSubscriptionService
  }
}
