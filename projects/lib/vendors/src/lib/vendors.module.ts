import {NgModule} from '@angular/core';
import {VendorsComponent} from './vendors.component';
import {MaterialModule} from './material/material.module';


@NgModule({
  declarations: [VendorsComponent],
  imports: [
    MaterialModule,
  ],
  exports: [VendorsComponent]
})
export class VendorsModule {
}
