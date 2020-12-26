import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {LoginModel} from '../../shared/interfaces/LoginModel';
import {Store} from '@ngrx/store';
import {LOGIN_WITH_REFRESH_TOKEN, USER_LOGIN_STAT} from '../../store/auth.action';
import * as fromApp from '../../../app.reducer';
import {CookieManagerService} from '../../../@core/services/cookie-manager.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm = {} as FormGroup;

  constructor(private messageService: MessageService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
        username: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
      }
    );
  }

  onLoginSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.store.dispatch(USER_LOGIN_STAT({payload: this.loginForm.value as LoginModel}));
  }

  showInvalidFormToast(): void {
    this.messageService.add({key: 'tr', severity: 'info', summary: 'Info', detail: 'Message Content'});
  }
}
