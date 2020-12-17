import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicNavbarComponent} from './components/public-navbar/public-navbar.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    PublicNavbarComponent
  ],
  exports: [
    PublicNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule {
}
