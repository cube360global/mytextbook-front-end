import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../../administration/src/app/app.reducer';
import {VertexSnackbarNotifyService} from '../../../../../../../lib/vendors/src/lib/snackbar-notify/vertex-snackbar-notify.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  hide = true;
  loginForm = {} as FormGroup;

  constructor(private store: Store<fromApp.AppState>, private notify: VertexSnackbarNotifyService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }


  onLogin(): void {
    this.notify.showSuccess('jsdhjkdsh', 'sjdhsdjkhsdj');
    // if (this.loginForm.invalid) {
    //   this.loginForm.markAllAsTouched();
    //   return;
    // }
    // this.store.dispatch(USER_LOGIN_STAT({payload: this.loginForm.value as LoginModel}));
  }

}
