import {Component, OnInit} from '@angular/core';
import {SearchUserModel} from '../../../../@core/interfaces/api/SearchUserModel';
import {USERS_AND_SCHOOL_DATA_LOADED} from '../../../store/user.action';
import {FormControl, FormGroup} from '@angular/forms';
import {UserApiService} from '../../../shared/service/user-api.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../app.reducer';
import {SubjectModel} from '../../../../@core/interfaces/api/SubjectModel';
import {UtilityService} from '../../../../../../../lib/tools/src/lib/utility.service';

@Component({
  selector: 'app-users-list-search',
  templateUrl: './users-list-search.component.html',
  styleUrls: ['./users-list-search.component.scss']
})
export class UsersListSearchComponent implements OnInit {

  filterForm = {} as FormGroup;
  subjects = [] as SubjectModel[];

  constructor(private userApiService: UserApiService,
              public  utilityService: UtilityService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      district: new FormControl(),
      school: new FormControl(),
      status: new FormControl(),
      subject: new FormControl(),
      grade: new FormControl(),
      salesLead: new FormControl(),
    });
  }

  onSearchClick(): void {
    const searchUser = this.filterForm.value as SearchUserModel;
    searchUser.grade = +searchUser.grade;
    this.userApiService.searchUsers(searchUser)
      .subscribe(res => {
        this.store.dispatch(USERS_AND_SCHOOL_DATA_LOADED({payload: res}));
      });

  }
}
