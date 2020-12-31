import {Component, Input, OnInit} from '@angular/core';
import {UserContentModel} from '../../../../../../@core/interfaces/api/UserContentModel';
import {USER_LOGIN_FAIL} from '../../../../../../+auth/store/auth.action';

@Component({
  selector: 'app-user-profile-watch-history',
  templateUrl: './user-profile-watch-history.component.html',
  styleUrls: ['./user-profile-watch-history.component.scss']
})
export class UserProfileWatchHistoryComponent implements OnInit {
  userId: any;
  @Input() content = {} as UserContentModel;
  constructor() { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('USERID');
  }

}
