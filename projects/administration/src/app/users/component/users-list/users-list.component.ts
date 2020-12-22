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

  }
}
