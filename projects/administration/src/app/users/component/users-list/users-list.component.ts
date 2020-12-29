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
import {USERS_AND_SCHOOL_DATA_LOADED} from '../../store/user.action';
import {SearchUserModel} from '../../../@core/interfaces/api/SearchUserModel';
import {AlertService} from '../../../@core/services/alert.service';
import {SubjectApiService} from '../../../subject/shared/services/subject-api.service';
import {SubscriptionManagementComponent} from '../subscription-management/subscription-management.component';
import {SubjectUser} from '../../../@core/interfaces/SubjectUser';
import {UserEditComponent} from '../user-edit/user-edit.component';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  filterForm = {} as FormGroup;
  subjects = [] as SubjectModel[];
  schools = [] as string[];

  users = [] as UserModel[];
  loading = true;
  searchInputData: any;

  constructor(private userApiService: UserApiService,
              private dialog: MatDialog,
              private toastr: ToastrService,
              private router: Router,
              private subjectService: SubjectApiService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private store: Store<fromApp.AppState>,
              private alertService: AlertService) {

    this.store.select(fromApp.getUserReducer)
      .subscribe(res => {
          if (res != null && res.userData.length > 0) {
            this.users = res.userData;
            this.loading = false;
          }
          if (res != null && res.schools.length > 0) {
            this.schools = res.schools;
          }
        }
        , error => console.error(error));

    this.store.select(fromApp.getSubjectReducer)
      .subscribe(res => {
        if (res.subjectData != null && res.subjectData.length > 0) {
          this.subjects = res.subjectData;
        } else {
          this.toastr.warning('Data not initialized');
          this.router.navigate(['/admin/subject']);
        }
      });
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
    this.sendToServer();
  }

  sendToServer(): void {
    const searchUser = this.filterForm.value as SearchUserModel;
    console.log(searchUser);
    searchUser.grade = +searchUser.grade;
    this.userApiService.searchUsers(searchUser)
      .subscribe(res => {
        console.log(res);
        this.store.dispatch(USERS_AND_SCHOOL_DATA_LOADED({payload: res}));
      });
  }

  openManageSubDialog(user: UserModel): void {
    this.ngxUiLoaderService.start();
    this.subjectService.All()
      .subscribe(res => {
        const subjectUser = {} as SubjectUser;
        subjectUser.user = user;
        subjectUser.subjectList = res;
        this.dialog.open(SubscriptionManagementComponent, {
          width: '100%',
          data: subjectUser,
        });
        this.ngxUiLoaderService.stop();
      }, () => {
        this.ngxUiLoaderService.stop();
      });
  }

  onUserStatusEditClick(user: UserModel): void {
    this.dialog.open(UserEditComponent, {
      width: '100%',
      data: JSON.parse(JSON.stringify(user))
    });
  }
}
