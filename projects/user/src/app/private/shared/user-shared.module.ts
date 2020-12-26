import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrivateNavBarComponent} from "./private-nav-bar/private-nav-bar.component";
import {MaterialModule} from "../../../../../lib/vendors/src/lib/material/material.module";
import {PrimengModule} from "../../../../../lib/vendors/src/lib/primeng/primeng.module";


@NgModule({
  declarations: [
    PrivateNavBarComponent
  ],
  exports: [
    PrivateNavBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimengModule,
  ]
})
export class UserSharedModule {
}
