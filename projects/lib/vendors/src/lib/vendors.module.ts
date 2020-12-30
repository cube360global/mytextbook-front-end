import {NgModule} from '@angular/core';
import {VendorsComponent} from './vendors.component';
import {MaterialModule} from './material/material.module';
import {SuccessNotifyComponent} from './snackbar-notify/components/success-notify/success-notify.component';
import {FooterComponent} from './footer/footer.component';
import { MatConfirmDialogComponent } from './confirm-dialog/component/mat-confirm-dialog/mat-confirm-dialog.component';


@NgModule({
  declarations: [VendorsComponent, SuccessNotifyComponent, FooterComponent, MatConfirmDialogComponent],
  imports: [
    MaterialModule,
  ],
  exports: [VendorsComponent, FooterComponent]
})
export class VendorsModule {
}
