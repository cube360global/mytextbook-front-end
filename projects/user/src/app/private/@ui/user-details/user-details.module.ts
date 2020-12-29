import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserSidebarComponent} from './layout/user-sidebar/user-sidebar.component';
import {MaterialModule} from '../../../../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../../../../lib/vendors/src/lib/primeng/primeng.module';
import {UserSharedModule} from '../../shared/user-shared.module';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from './user-profile/page/user-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserProfileResetPwdComponent} from './user-profile/components/user-profile-reset-pwd/user-profile-reset-pwd.component';
import {UserProfileFormComponent} from './user-profile/components/user-profile-form/user-profile-form.component';
import {LyButtonModule} from '@alyle/ui/button';


const routes: Routes = [
  {
    path: '', component: UserSidebarComponent, children: [
      {path: '', component: UserProfileComponent}
    ]
  }
];

@NgModule({
  declarations: [
    UserSidebarComponent,
    UserProfileComponent,
    UserProfileResetPwdComponent,
    UserProfileFormComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PrimengModule,
    UserSharedModule,
    FormsModule,
    ReactiveFormsModule,
    LyButtonModule

  ]
})
export class UserDetailsModule {
}
