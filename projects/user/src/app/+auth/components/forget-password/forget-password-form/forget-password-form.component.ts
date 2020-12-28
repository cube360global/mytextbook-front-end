import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {UserAuthService} from '../../../shared/services/user-auth.service';

@Component({
  selector: 'app-forget-password-form',
  templateUrl: './forget-password-form.component.html',
  styleUrls: ['./forget-password-form.component.scss']
})
export class ForgetPasswordFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private userApiService: UserAuthService) {
  }
  ngOnInit(): void {
  }

  onReset(): void {
    console.log( 'email:' + this.email.value);
    this.userApiService.forgetPassword(this.email.value)
      .subscribe(res => console.log(res));
  }
}
