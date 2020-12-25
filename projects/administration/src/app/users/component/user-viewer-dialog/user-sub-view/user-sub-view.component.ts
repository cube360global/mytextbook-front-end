import {Component, Input, OnInit} from '@angular/core';
import {UserSubscriptionModel} from '../../../../@core/interfaces/api/UserSubscriptionModel';

@Component({
  selector: 'app-user-sub-view',
  templateUrl: './user-sub-view.component.html',
  styleUrls: ['./user-sub-view.component.scss']
})
export class UserSubViewComponent implements OnInit {

  @Input() userSubscription = [] as UserSubscriptionModel [];
  constructor() { }

  ngOnInit(): void {
  }

}
