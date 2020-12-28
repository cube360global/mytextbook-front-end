import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserSidebarComponent} from './layout/user-sidebar/user-sidebar.component';
import {MaterialModule} from '../../../../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../../../../lib/vendors/src/lib/primeng/primeng.module';
import {UserSharedModule} from '../../shared/user-shared.module';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from './user-profile/components/user-profile.component';


const routes: Routes = [
  {path: '', component: UserSidebarComponent},

];

@NgModule({
  declarations: [
    UserSidebarComponent,
    UserProfileComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PrimengModule,
    UserSharedModule

  ]
})
export class UserDetailsModule {
}
