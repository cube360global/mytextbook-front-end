import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {USERS_DATA_REQUEST} from '../../store/user.action';
import {MatDialog} from '@angular/material/dialog';
import {AddUserComponent} from '../../component/add-user/add-user.component';
import {AddBulkUserComponent} from '../../component/add-bulk-user/add-bulk-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.dispatch(USERS_DATA_REQUEST());
  }

  openAddUserDialog(): void {
    this.dialog.open(AddUserComponent, {
      width: '450px'
    });
  }


  onAddBulkDialogOpenClick(): void {
    this.dialog.open(AddBulkUserComponent, {
      width: '500px'
    });
  }
}
