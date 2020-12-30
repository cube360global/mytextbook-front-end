import {Component, OnInit} from '@angular/core';
import * as fromApp from '../../../../../app.reducer';
import {Store} from '@ngrx/store';
import {UserContentModel} from '../../../../../@core/interfaces/api/UserContentModel';
import {USER_DATA_REQUEST} from '../../user-profile/store/user-profile.action';
import {USER_LOGIN_FAIL} from '../../../../../+auth/store/auth.action';

@Component({
  selector: 'app-user-watch-history',
  templateUrl: './user-watch-history.component.html',
  styleUrls: ['./user-watch-history.component.scss']
})
export class UserWatchHistoryComponent implements OnInit {

  contents = [] as UserContentModel[];
  private userId: any;

  constructor(private store: Store<fromApp.AppState>) {
    this.store.select(fromApp.getUserProfileReducer).subscribe(res => {
      if (res != null && res.user.id != null) {
        this.contents = res.user.contents;
      }
    });
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
