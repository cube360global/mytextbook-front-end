import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from './page/admin-dashboard/admin-dashboard.component';
import {AdminAuthGuard} from '../@core/guards/admin-auth.guard';


const routes: Routes = [
  {path: '', component: AdminDashboardComponent, canLoad: [AdminAuthGuard]},
];

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule {
}
