import {Component, OnInit} from '@angular/core';
import {UserApiService} from '../../shared/service/user-api.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {UserModel} from '../../../@core/interfaces/api/UserModel';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users = [] as UserModel[];
  loading = true;

  constructor(private userApiService: UserApiService,
              private store: Store<fromApp.AppState>) {

    this.store.select(fromApp.getUserReducer)
      .subscribe(res => {
          if (res.userData.length > 0) {
            this.users = res.userData;
            this.loading = false;
          }
        }
        , error => console.error(error));

  }

  ngOnInit(): void {

  }

}
