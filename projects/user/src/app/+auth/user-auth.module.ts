import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthHomeComponent} from './home/auth-home/auth-home.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignInFormComponent} from './components/sign-in/sign-in-form/sign-in-form.component';
import {MaterialModule} from '../../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../../lib/vendors/src/lib/primeng/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PublicModule} from '../public/public.module';
import {AlyleModule} from '../../../../lib/vendors/src/lib/alyle/alyle.module';
import {SignUpFormComponent} from './components/sign-up/sign-up-form/sign-up-form.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ForgetPasswordComponent} from './components/forget-password/forget-password.component';
import {ForgetPasswordFormComponent} from './components/forget-password/forget-password-form/forget-password-form.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {ResetPasswordFormComponent} from './components/reset-password/reset-password-form/reset-password-form.component';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';


@NgModule({
  declarations: [
    AuthHomeComponent,
    SignInComponent,
    SignUpComponent,
    SignInFormComponent,
    SignUpFormComponent,
    ForgetPasswordComponent,
    ForgetPasswordFormComponent,
    ResetPasswordComponent,
    ResetPasswordFormComponent
  ],
  exports: [
    AuthHomeComponent,
    SignInComponent,
    SignInFormComponent,
    SignUpFormComponent,
    ForgetPasswordFormComponent
  ],
  imports: [
    CommonModule,
    AlyleModule,
    PrimengModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PublicModule,
    MatPasswordStrengthModule,
  ]
})
export class UserAuthModule {
}
