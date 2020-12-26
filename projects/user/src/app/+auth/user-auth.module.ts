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


@NgModule({
  declarations: [
    AuthHomeComponent,
    SignInComponent,
    SignInFormComponent
  ],
  exports: [
    AuthHomeComponent,
    SignInComponent,
    SignInFormComponent
  ],
  imports: [
    CommonModule,
    AlyleModule,
    PrimengModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PublicModule,
  ]
})
export class UserAuthModule {
}
