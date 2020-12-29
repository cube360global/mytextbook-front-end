import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserProfileApiService} from '../../shared/service/user-profile-api.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile-reset-pwd',
  templateUrl: './user-profile-reset-pwd.component.html',
  styleUrls: ['./user-profile-reset-pwd.component.scss']
})
export class UserProfileResetPwdComponent implements OnInit {
  hide = true;
  hideNew = true;
  hideConf = true;
  pwdForm = {} as FormGroup;
  token = '';
  showDetails = true;

  constructor(private userProfileApiService: UserProfileApiService,
              public dialogRef: MatDialogRef<UserProfileResetPwdComponent>,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pwdForm = new FormGroup({
      password: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required]),
      conPassword: new FormControl(null, [Validators.required])
    });
    this.token = this.activatedRouter.snapshot.queryParams.auth_token;
  }

  onStrengthChanged(strength: number): void {

  }

  onSavePwd(): void {
    if (this.token != null) {
      this.userProfileApiService.resetPassword(this.pwdForm.value.conPassword, this.token)
        .subscribe(res => res);
    }
  }

}
