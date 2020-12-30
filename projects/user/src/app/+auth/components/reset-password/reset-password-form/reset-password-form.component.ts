import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserAuthService} from '../../../shared/services/user-auth.service';
import {AlertService} from '../../../../../../../lib/tools/src/lib/alert.service';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {
  passwordFormControl = new FormControl('', [Validators.required]);
  showDetails = true;
  hide = true;
  hide2 = true;
  token = '';

  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              private userApiService: UserAuthService) {
  }

  ngOnInit(): void {
    this.token = this.activatedRouter.snapshot.queryParams.auth_token;
    if (this.token == null || this.token === '') {
      this.alertService.showError('Token is empty you are not allowed this function');
      this.router.navigate(['']);
    }
  }

  onStrengthChanged(strength: number): void {
  }

  onResetPassword(): void {
    if (this.token != null) {
      this.userApiService.resetPassword(this.passwordFormControl.value, this.token)
        .subscribe(res => {
          console.log(res);
          this.router.navigate(['']);
        });
    }
  }
}
