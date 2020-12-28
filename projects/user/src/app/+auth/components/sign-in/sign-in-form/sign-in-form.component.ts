import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../../administration/src/app/app.reducer';

import {AlertService} from '../../../../../../../lib/tools/src/lib/alert.service';
import {ToastrService} from 'ngx-toastr';
import {USER_LOGIN_STAT} from '../../../store/auth.action';
import {LoginModel} from '../../../../../../../lib/authentication/src/lib/interfaces/LoginModel';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  hide = true;
  loginForm = {} as FormGroup;

  constructor(private store: Store<fromApp.AppState>,
              private alertService: AlertService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('kaveen.madusanka1@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('#Compaq123', [Validators.required, Validators.minLength(8)])
    });
  }


  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.store.dispatch(USER_LOGIN_STAT({payload: this.loginForm.value as LoginModel}));
  }

}
