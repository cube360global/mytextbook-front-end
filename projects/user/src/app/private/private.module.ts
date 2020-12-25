import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserSidebarComponent} from './layout/user-sidebar/user-sidebar.component';
import {UserToolbarComponent} from './layout/user-sidebar/user-toolbar/user-toolbar.component';
import {MaterialModule} from "../../../../lib/vendors/src/lib/material/material.module";
import {PrimengModule} from "../../../../lib/vendors/src/lib/primeng/primeng.module";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: UserSidebarComponent}
];

@NgModule({
  declarations: [
    UserSidebarComponent,
    UserToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimengModule,
    RouterModule.forChild(routes),
  ]
})
export class PrivateModule {
}
