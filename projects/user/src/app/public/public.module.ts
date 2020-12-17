import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicHomePageComponent} from './components/public-home-page/public-home-page.component';
import {RouterModule, Routes} from '@angular/router';
import {LayoutModule} from '../@ui/layout/layout.module';
import {MaterialModule} from '../../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../../lib/vendors/src/lib/primeng/primeng.module';


const routes: Routes = [
  {
    path: '', component: PublicHomePageComponent,
  }
];


@NgModule({
  declarations: [
    PublicHomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    MaterialModule,
    PrimengModule,

  ]
})
export class PublicModule {
}
