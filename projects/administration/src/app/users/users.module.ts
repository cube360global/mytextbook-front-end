import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserManagementComponent} from './page/user-management/user-management.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from '../dashboard/page/admin-dashboard/admin-dashboard.component';
import {AdminAuthGuard} from '../@core/guards/admin-auth.guard';

const routes: Routes = [
  {path: '', component: UserManagementComponent, canLoad: [AdminAuthGuard]},
];

@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule {
}
