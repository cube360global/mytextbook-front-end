import {Component, Input, OnInit} from '@angular/core';
import {UserContentModel} from '../../../../../../@core/interfaces/api/UserContentModel';
import {USER_LOGIN_FAIL} from '../../../../../../+auth/store/auth.action';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../app.reducer';

@Component({
  selector: 'app-user-watch-history-item',
  templateUrl: './user-watch-history-item.component.html',
  styleUrls: ['./user-watch-history-item.component.scss']
})
export class UserWatchHistoryItemComponent implements OnInit {
  @Input() content = {} as UserContentModel;
  userId: any;

  constructor(private store: Store<fromApp.AppState>) {


  }


  ngOnInit(): void {
    this.userId = localStorage.getItem('USERID');
    if (this.userId == null) {
      this.store.dispatch(USER_LOGIN_FAIL());
    }
  }

}
