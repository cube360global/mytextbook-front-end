import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserApiService} from '../../shared/service/user-api.service';
import {AddUserModel} from '../../../@core/interfaces/api/AddUserModel';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {USERS_DATA_LOADED} from '../../store/user.action';
import {AlertService} from '../../../@core/services/alert.service';
import {AlertConst} from '../../../@core/const/AlertConst';
import {UtilityService} from '../../../../../../lib/tools/src/lib/utility.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUser = {} as FormGroup;


  constructor(public dialogRef: MatDialogRef<AddUserComponent>,
              private alertService: AlertService,
              public utilityService: UtilityService,
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
    if (this.addUser.invalid) {
      this.addUser.markAllAsTouched();
      return;
    }

    this.alertService.getConfirmationDialog()
      .confirm({
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.sendToServer();
        }
      });
  }

  sendToServer(): void {
    const addUser = this.addUser.value as AddUserModel;
    addUser.roleId = +this.addUser.value.roleId;
    this.userApiService.createUser(addUser)
      .subscribe(res => {
        this.dialogRef.close();
        this.store.dispatch(USERS_DATA_LOADED({payload: res?.users}));
      });
  }
}
