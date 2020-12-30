import {NgModule} from '@angular/core';
import {VendorsComponent} from './vendors.component';
import {MaterialModule} from './material/material.module';
import {SuccessNotifyComponent} from './snackbar-notify/components/success-notify/success-notify.component';
import {FooterComponent} from './footer/footer.component';
import {MatConfirmDialogComponent} from './confirm-dialog/component/mat-confirm-dialog/mat-confirm-dialog.component';
import {BaubleFooterComponent} from './bauble-footer/bauble-footer.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    VendorsComponent,
    SuccessNotifyComponent,
    FooterComponent,
    MatConfirmDialogComponent,
    BaubleFooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    VendorsComponent,
    SuccessNotifyComponent,
    FooterComponent,
    MatConfirmDialogComponent,
    BaubleFooterComponent]
})
export class VendorsModule {
}
