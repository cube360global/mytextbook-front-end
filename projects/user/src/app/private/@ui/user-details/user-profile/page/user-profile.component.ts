import {Component, OnInit} from '@angular/core';
import {USER_DATA_REQUEST} from '../store/user-profile.action';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../app.reducer';
import {USER_LOGIN_FAIL} from '../../../../../+auth/store/auth.action';
import {Observable} from 'rxjs';
import {UserProfileModel} from '../../../../../@core/interfaces/api/UserProfileModel';
import {MatDialog} from '@angular/material/dialog';
import {UserProfileFormComponent} from '../components/user-profile-form/user-profile-form.component';
import {UserProfileResetPwdComponent} from '../components/user-profile-reset-pwd/user-profile-reset-pwd.component';
import {UserContentModel} from '../../../../../@core/interfaces/api/UserContentModel';
import {UserProfileSubModel} from '../../../../../@core/interfaces/api/UserProfileSubModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  $userProfile = new Observable<UserProfileModel>();
  userId: any;
  contents = [] as UserContentModel[];
  $obs = new Observable<UserProfileSubModel[]>();

  constructor(private store: Store<fromApp.AppState>,
              private dialog: MatDialog) {
    this.$userProfile = store.select(fromApp.getUserProfile);

  }

  ngOnInit(): void {
    this.$obs = this.store.select(fromApp.getUserSubscription);
    this.userId = localStorage.getItem('USERID');
    if (this.userId != null) {
      this.store.dispatch(USER_DATA_REQUEST({payload: this.userId}));
    } else {
      this.store.dispatch(USER_LOGIN_FAIL());
    }
    this.store.select(fromApp.getUserProfileReducer).subscribe(res => {
      if (res != null && res.user.id != null) {
        console.log(res.user.contents);
        this.contents = res.user.contents;
      }
    });
  }


  openUserEditDialog(): void {
    this.dialog.open(UserProfileFormComponent, {
      width: '100%'
    });
  }

  onResetPasswordDialogOpen(): void {
    this.dialog.open(UserProfileResetPwdComponent, {
      width: '100%'
    });
  }
}
