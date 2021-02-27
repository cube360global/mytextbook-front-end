import { Component, Input, OnInit } from '@angular/core';
import { UserProfileSubModel } from 'projects/user/src/app/@core/interfaces/api/UserProfileSubModel';


@Component({
  selector: 'app-user-profile-subscription',
  templateUrl: './user-profile-subscription.component.html',
  styleUrls: ['./user-profile-subscription.component.scss']
})
export class UserProfileSubscriptionComponent implements OnInit {

  @Input() subscription = {} as UserProfileSubModel;
  constructor() { }

  ngOnInit(): void {
  }

}
