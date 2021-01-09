import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommissionManagementComponent} from './page/commission-management/commission-management.component';
import {CommissionListComponent} from './component/commission-list/commission-list.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: CommissionManagementComponent},
];


@NgModule({
  declarations: [
    CommissionManagementComponent,
    CommissionListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CommissionModule {
}
