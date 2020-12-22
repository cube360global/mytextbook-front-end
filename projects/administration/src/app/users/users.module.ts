import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserManagementComponent} from './page/user-management/user-management.component';
import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from './component/users-list/users-list.component';
import {MaterialModule} from '../../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../../lib/vendors/src/lib/primeng/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserViewerDialogComponent } from './component/user-viewer-dialog/user-viewer-dialog.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AddBulkUserComponent } from './component/add-bulk-user/add-bulk-user.component';

const routes: Routes = [
  {path: '', component: UserManagementComponent},
];

@NgModule({
  declarations: [UserManagementComponent, UsersListComponent
    , UserViewerDialogComponent, AddUserComponent, AddBulkUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule {
}
