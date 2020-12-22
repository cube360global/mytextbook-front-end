import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserApiService} from '../../shared/service/user-api.service';
import {AddUserModel} from '../../../@core/interfaces/api/AddUserModel';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {USERS_DATA_LOADED} from '../../store/user.action';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUser = {} as FormGroup;

  constructor(public dialogRef: MatDialogRef<AddUserComponent>,
              private store: Store<fromApp.AppState>,
              private userApiService: UserApiService) {
  }

  ngOnInit(): void {
    this.addUser = new FormGroup({
      email: new FormControl(null, {validators: [Validators.email, Validators.required]}),
      referralLink: new FormControl(null),
      roleId: new FormControl(null, {validators: [Validators.required]})
    });
  }

  onAddUsers(): void {
    const addUser = this.addUser.value as AddUserModel;
    addUser.roleId = 2;
    this.userApiService.createUser(addUser)
      .subscribe(res => {
        this.store.dispatch(USERS_DATA_LOADED({payload: res}));
      });
  }
}
