import {Component, OnInit} from '@angular/core';
import * as fromApp from '../../../../../app.reducer';
import {Store} from '@ngrx/store';
import {UserContentModel} from '../../../../../@core/interfaces/api/UserContentModel';

@Component({
  selector: 'app-user-watch-history',
  templateUrl: './user-watch-history.component.html',
  styleUrls: ['./user-watch-history.component.scss']
})
export class UserWatchHistoryComponent implements OnInit {

  contents = [] as UserContentModel[];

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
