import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserAuthService} from "../../../shared/services/user-auth.service";

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
  constructor(private activatedRouter: ActivatedRoute, private userApiService: UserAuthService) { }

  ngOnInit(): void {
    const authToken = this.activatedRouter.snapshot.queryParams.auth_token;
    console.log(authToken);
    this.token = authToken;
  }
  onStrengthChanged(strength: number): void {
    console.log('password strength = ', strength);
  }

  onResetPassword(): void {
    console.log(this.token);
    if (this.token != null){
      this.userApiService.resetPassword(this.passwordFormControl.value, this.token)
        .subscribe(res => console.log(res));
    }
  }
}
