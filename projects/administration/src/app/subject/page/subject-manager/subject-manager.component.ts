import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {MatDialog} from '@angular/material/dialog';
import {AddUserComponent} from '../../../users/component/add-user/add-user.component';
import {AddBulkUserComponent} from '../../../users/component/add-bulk-user/add-bulk-user.component';
import {SUBJECT_DATA_REQUEST} from '../../store/subject.action';

@Component({
  selector: 'app-subject-manager',
  templateUrl: './subject-manager.component.html',
  styleUrls: ['./subject-manager.component.scss']
})
export class SubjectManagerComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.dispatch(SUBJECT_DATA_REQUEST());
  }

  openAddUserDialog(): void {
    this.dialog.open(AddUserComponent, {
      width: '400px'
    });
  }


  onAddBulkDialogOpenClick(): void {
    this.dialog.open(AddBulkUserComponent, {
      width: '500px'
    });
  }

}
