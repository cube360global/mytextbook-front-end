import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import {MaterialModule} from '../../../../../lib/vendors/src/lib/material/material.module';
import {RouterModule} from '@angular/router';
import {ToolBarComponent} from './component/nav-bar/tool-bar/tool-bar.component';
import {PrimengModule} from '../../../../../lib/vendors/src/lib/primeng/primeng.module';
import {CoreModule} from '../../@core/core.module';


@NgModule({
  declarations: [NavBarComponent, ToolBarComponent],
  exports: [
    NavBarComponent,
    ToolBarComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        PrimengModule,
        CoreModule,
    ]
})
export class LayoutModule {
}
