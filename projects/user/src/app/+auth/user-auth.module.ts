import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthHomeComponent} from './home/auth-home/auth-home.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {LayoutModule} from '../@ui/layout/layout.module';
import {SignInFormComponent} from './components/sign-in/sign-in-form/sign-in-form.component';
import {MaterialModule} from '../../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../../lib/vendors/src/lib/primeng/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {Path} from '../@core/enum/path.enum';


const routes: Routes = [
  {
    path: '', component: AuthHomeComponent,
    children: [
      {path: '', component: SignInComponent},
      {path: Path.SignUp, component: SignUpComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AuthHomeComponent,
    SignInComponent,
    SignInFormComponent,
    SignUpComponent],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserAuthModule {
}
