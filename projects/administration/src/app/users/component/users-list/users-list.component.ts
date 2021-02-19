import {Component, OnInit} from '@angular/core';
import {UserApiService} from '../../shared/service/user-api.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {UserModel} from '../../../@core/interfaces/api/UserModel';
import {MatDialog} from '@angular/material/dialog';
import {UserViewerDialogComponent} from '../user-viewer-dialog/user-viewer-dialog.component';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';
import {SubjectApiService} from '../../../subject/shared/services/subject-api.service';
import {SubscriptionManagementComponent} from '../subscription-management/subscription-management.component';
import {SubjectUser} from '../../../@core/interfaces/SubjectUser';
import {UserEditComponent} from '../user-edit/user-edit.component';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Table} from 'primeng/table';
import {UsersPushNotificationDialogComponent} from '../users-push-notification-dialog/users-push-notification-dialog.component';
import {TeacherViewDialogComponent} from '../teacher-view-dialog/teacher-view-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  // 2021-01-07
  searchInputData = '';
  schools = [] as string[];
  users = [] as UserModel[];
  selectedUsers = [] as UserModel[];
  loading = true;

  isSuperAdmin = false;


  constructor(private userApiService: UserApiService,
              private dialog: MatDialog,
              private toastr: ToastrService,
              private router: Router,
              private subjectService: SubjectApiService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private store: Store<fromApp.AppState>) {

    this.store.select(fromApp.getUserDataLoading)
      .subscribe(res => this.loading = res);

    this.store.select(fromApp.getUserReducer)
      .subscribe(res => {
        console.log('CALLED');
        if (res != null && res.userData.length > 0) {
          this.users = res.userData;
          this.selectedUsers = res.userData;
        }
        if (res != null && res.schools.length > 0) {
          this.schools = res.schools;
        }
      }, error => console.error(error));

    this.store.select(fromApp.getAuthState)
      .subscribe(res => {
        if (res.tokenDecodeModel?.role === 'SUPER_ADMIN'){
          this.isSuperAdmin = true;
        }
      });
    // this.store.select(fromApp.getSubjectReducer)
    //   .subscribe(res => {
    //     if (res.subjectData != null && res.subjectData.length > 0) {
    //       this.subjects = res.subjectData;
    //     } else {
    //       this.toastr.warning('Data not initialized');
    //       this.router.navigate(['/admin/subject']);
    //     }
    //   });
  }

  ngOnInit(): void {
  }


  openUserViewDialog(userId: string): void {
    this.userApiService.getUserProfileById(userId)
      .subscribe(res => {
        this.dialog.open(UserViewerDialogComponent, {
          width: '100%',
          data: res
        });
      }, () => {
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

  onPushNotificationClick(): void {
    this.dialog.open(UsersPushNotificationDialogComponent, {
      width: '100%',
      data: this.selectedUsers
    });
  }

  onFilterDataTable($event: any, dt1: Table): void {
    this.selectedUsers = $event.filteredValue;
  }

  openTeacherViewDialog(userId: string): void {
    this.userApiService.getUserProfileById(userId)
      .subscribe(res => {
        this.dialog.open(TeacherViewDialogComponent, {
          width: '100%',
          data: res
        });
      }, () => {
      });
  }
}
