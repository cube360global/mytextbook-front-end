import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profile-reset-pwd',
  templateUrl: './user-profile-reset-pwd.component.html',
  styleUrls: ['./user-profile-reset-pwd.component.scss']
})
export class UserProfileResetPwdComponent implements OnInit {
  hide = true;
  pwdForm = {} as FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.pwdForm = new FormGroup({
      password: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required]),
      conPassword: new FormControl(null, [Validators.required])
    });
  }

}
