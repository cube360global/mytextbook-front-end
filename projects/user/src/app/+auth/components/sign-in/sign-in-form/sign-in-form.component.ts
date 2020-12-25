import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {USER_LOGIN_STAT} from '../../../store/auth.action';
import {LoginModel} from '../../../../../../../lib/authentication/src/lib/interfaces/LoginModel';
import * as fromApp from '../../../../../../../administration/src/app/app.reducer';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  // loginForm: FormGroup;
  loginForm = {} as FormGroup;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('admin@abc.com', [Validators.required]),
      password: new FormControl('Admin', [Validators.required])
    });
  }

  onLogin(): void {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.store.dispatch(USER_LOGIN_STAT({payload: this.loginForm.value as LoginModel}));
  }

}
