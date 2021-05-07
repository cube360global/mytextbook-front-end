import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from './page/admin-dashboard/admin-dashboard.component';
import {MaterialModule} from '../../../../lib/vendors/src/lib/material/material.module';


const routes: Routes = [
  {path: '', component: AdminDashboardComponent},
];

@NgModule({
  declarations: [AdminDashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
    ]
})
export class DashboardModule {
}
