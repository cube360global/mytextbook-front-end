import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicHomePageComponent} from './components/public-home-page/public-home-page.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../../lib/vendors/src/lib/primeng/primeng.module';
import {PublicNavbarComponent} from './layout/public-navbar/public-navbar.component';


const routes: Routes = [
  {
    path: '', component: PublicHomePageComponent,
  }
];


@NgModule({
  declarations: [
    PublicNavbarComponent,
    PublicHomePageComponent
  ],
  exports: [
    PublicNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PrimengModule,

  ]
})
export class PublicModule {
}
