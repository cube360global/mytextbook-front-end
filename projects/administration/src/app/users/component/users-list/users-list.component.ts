import {Component, OnInit} from '@angular/core';
import {UserApiService} from '../../shared/service/user-api.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {UserModel} from '../../../@core/interfaces/api/UserModel';
import {MatDialog} from '@angular/material/dialog';
import {UserViewerDialogComponent} from '../user-viewer-dialog/user-viewer-dialog.component';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AlertConst} from '../../../@core/const/AlertConst';
import {AddUserModel} from '../../../@core/interfaces/api/AddUserModel';
import {USERS_AND_SCHOOL_DATA_LOADED, USERS_DATA_LOADED} from '../../store/user.action';
import {SearchUserModel} from '../../../@core/interfaces/api/SearchUserModel';
import {AlertService} from '../../../@core/services/alert.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  filterForm = {} as FormGroup;

  users = [] as UserModel[];
  loading = true;

  constructor(private userApiService: UserApiService,
              private dialog: MatDialog,
              private toastr: ToastrService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private store: Store<fromApp.AppState>,
              private alertService: AlertService) {

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
    this.filterForm = new FormGroup({
      district: new FormControl(),
      school: new FormControl(),
      subject: new FormControl(),
      grade: new FormControl(),
      salesLead: new FormControl(),
    });

  }

  openUserViewDialog(userId: string): void {

    this.ngxUiLoaderService.start();
    this.userApiService.getUserProfileById(userId)
      .subscribe(res => {
        this.dialog.open(UserViewerDialogComponent, {
          width: '100%',
          data: res
        });
        this.ngxUiLoaderService.stop();
      }, () => {
        this.ngxUiLoaderService.stop();
      });

  }


  onFilterApply(): void {

    this.alertService.getConfirmationDialog()
      .confirm({
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.sendToServer();
        }
      });
  }

  sendToServer(): void {
    const searchUser = this.filterForm.value as SearchUserModel;
    searchUser.grade = +searchUser.grade;

    console.log(searchUser);
    console.log('CALLED');

    this.userApiService.searchUsers(searchUser)
      .subscribe(res => {
        console.log(res);
        this.store.dispatch(USERS_AND_SCHOOL_DATA_LOADED({payload: res}));
      });
  }
}
