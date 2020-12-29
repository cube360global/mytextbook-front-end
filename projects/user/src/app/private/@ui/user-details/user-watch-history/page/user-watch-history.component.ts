import {Component, OnInit} from '@angular/core';
import * as fromApp from '../../../../../app.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-user-watch-history',
  templateUrl: './user-watch-history.component.html',
  styleUrls: ['./user-watch-history.component.scss']
})
export class UserWatchHistoryComponent implements OnInit {

  // userProfile = {} as UserProfileModel;
  contents: any;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.store.select(fromApp.getUserProfileReducer).subscribe(res => {
      if (res != null && res.user.id != null) {
        this.contents = res.user.contents;
      }
    });
  }

}
