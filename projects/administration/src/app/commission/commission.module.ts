import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommissionManagementComponent} from './page/commission-management/commission-management.component';
import {CommissionListComponent} from './component/commission-list/commission-list.component';
import {RouterModule, Routes} from '@angular/router';
import {TableModule} from 'primeng/table';
import {MatButtonModule} from '@angular/material/button';


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
    TableModule,
    MatButtonModule,
  ]
})
export class CommissionModule {
}
