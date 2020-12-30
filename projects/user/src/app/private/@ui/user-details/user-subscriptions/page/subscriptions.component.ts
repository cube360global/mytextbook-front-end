import {Component, OnInit} from '@angular/core';
import {USER_DATA_REQUEST} from '../../user-profile/store/user-profile.action';
import {USER_LOGIN_FAIL} from '../../../../../+auth/store/auth.action';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../app.reducer';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  private userId = null as string | null;
  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('USERID');
    if (this.userId != null) {
      this.store.dispatch(USER_DATA_REQUEST({payload: this.userId}));
    } else {
      this.store.dispatch(USER_LOGIN_FAIL());
    }
  }
}
