import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../../administration/src/app/app.reducer';
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

  constructor(private store: Store<fromApp.AppState>) {
  }

  @HostListener('window:keydown', ['$event'])
  onClick(kbdEvent: KeyboardEvent): void {
    if (kbdEvent.code === 'Enter') {
      this.onLogin();
    }
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(): void {
  //   // this.displayContentService.isMobile = window.screen.width <= 600;
  //   // this.displayContentService.isMinHeight = window.screen.height <= 580;
  // }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('kaveen.madusanka1@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
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
