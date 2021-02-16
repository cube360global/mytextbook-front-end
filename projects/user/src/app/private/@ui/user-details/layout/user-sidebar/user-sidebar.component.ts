import {Component, OnInit} from '@angular/core';
import * as fromApp from '../../../../../app.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {UserProfileModel} from '../../../../../@core/interfaces/api/UserProfileModel';
import {USER_LOGOUT} from '../../../../../+auth/store/auth.action';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {
  $userData = new Observable<UserProfileModel>();
  userEmail = '';

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.$userData = this.store.select(fromApp.getUserProfile);

    this.store.select(fromApp.getAuthState)
      .subscribe(tokenData => {
        this.userEmail = tokenData.tokenDecodeModel.email;
      });
  }

  onLogOutClick(): void {
    this.store.dispatch(USER_LOGOUT({payload: this.userEmail}));
  }
}
