import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {UserApiService} from '../../shared/service/user-api.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {USERS_DATA_LOADED} from '../../store/user.action';

@Component({
  selector: 'app-add-bulk-user',
  templateUrl: './add-bulk-user.component.html',
  styleUrls: ['./add-bulk-user.component.scss']
})
export class AddBulkUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddBulkUserComponent>,
              private store: Store<fromApp.AppState>,
              private userApiService: UserApiService) {
  }

  ngOnInit(): void {
  }

  myUploader($event: any): void {
    const file = $event.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.userApiService.bulkUpload(formData)
      .subscribe(res => {
        this.store.dispatch(USERS_DATA_LOADED({payload: res.allUsers}));
      }, error => {

      });
    this.dialogRef.close();
  }
}
