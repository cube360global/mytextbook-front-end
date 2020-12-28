import {NgModule} from '@angular/core';
import {VendorsComponent} from './vendors.component';
import {MaterialModule} from './material/material.module';
import { SuccessNotifyComponent } from './snackbar-notify/components/success-notify/success-notify.component';


@NgModule({
  declarations: [VendorsComponent, SuccessNotifyComponent],
  imports: [
    MaterialModule,
  ],
  exports: [VendorsComponent]
})
export class VendorsModule {
}
