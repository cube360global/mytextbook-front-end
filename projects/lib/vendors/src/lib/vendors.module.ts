import {NgModule} from '@angular/core';
import {VendorsComponent} from './vendors.component';
import {MaterialModule} from './material/material.module';
import {SuccessNotifyComponent} from './snackbar-notify/components/success-notify/success-notify.component';
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations: [VendorsComponent, SuccessNotifyComponent, FooterComponent],
  imports: [
    MaterialModule,
  ],
  exports: [VendorsComponent, FooterComponent]
})
export class VendorsModule {
}
