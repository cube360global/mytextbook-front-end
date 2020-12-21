import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserManagementComponent} from './page/user-management/user-management.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminAuthGuard} from '../@core/guards/admin-auth.guard';
import {UsersListComponent} from './component/users-list/users-list.component';
import {MaterialModule} from '../../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../../lib/vendors/src/lib/primeng/primeng.module';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from './store/user.effects';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: UserManagementComponent, canLoad: [AdminAuthGuard]},
];

@NgModule({
  declarations: [UserManagementComponent, UsersListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PrimengModule,
    EffectsModule.forFeature([UsersEffects]),
    FormsModule
  ]
})
export class UsersModule {
}
