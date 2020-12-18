import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {AdminAuthService} from '../../shared/services/admin-auth.service';
import {LoginModel} from '../../shared/interfaces/LoginModel';
import {Store} from '@ngrx/store';
import {USER_LOGIN, USER_LOGIN_STAT} from '../../store/auth.action';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm = {} as FormGroup;

  constructor(private messageService: MessageService,
              private store: Store,
              private adminAuthService: AdminAuthService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
        username: new FormControl('web-client', [Validators.required]),
        password: new FormControl('web-secret', [Validators.required])
      }
    );
  }

  onLoginSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log('Click');
    this.store.dispatch(USER_LOGIN_STAT({ payload: this.loginForm.value as LoginModel}));
  }

  showInvalidFormToast(): void {
    this.messageService.add({key: 'tr', severity: 'info', summary: 'Info', detail: 'Message Content'});
  }
}
