import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserProfileApiService} from '../../shared/service/user-profile-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {AlertService} from '../../../../../../../../../lib/tools/src/lib/alert.service';

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
              private router: Router,
              private alertService: AlertService,
              public dialogRef: MatDialogRef<UserProfileResetPwdComponent>,
              private activatedRouter: ActivatedRoute) {
  }

  @HostListener('window:keydown', ['$event'])
  onClick(kbdEvent: KeyboardEvent): void {
    if (kbdEvent.code === 'Enter') {
      this.onSavePwd();
    }
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
    this.alertService.showError('This function not available right now, Please User Forgot password');
    this.router.navigate(['auth/forgot-password']);
    // if (this.token != null) {
    //   this.userProfileApiService.resetPassword(this.pwdForm.value.conPassword, this.token)
    //     .subscribe(res => res);
    // }
  }

}
