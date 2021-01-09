import {NgModule} from '@angular/core';
import {VendorsComponent} from './vendors.component';
import {MaterialModule} from './material/material.module';
import {SuccessNotifyComponent} from './snackbar-notify/components/success-notify/success-notify.component';
import {FooterComponent} from './footer/footer.component';
import {MatConfirmDialogComponent} from './confirm-dialog/component/mat-confirm-dialog/mat-confirm-dialog.component';
import {BaubleFooterComponent} from './bauble-footer/bauble-footer.component';
import {CommonModule} from '@angular/common';
import {NoDataFoundComponent} from './no-data-found/no-data-found.component';
import {TableLoaderComponent} from './components/loaders/table-loader/table-loader.component';
import {SkeletonModule} from 'primeng/skeleton';


@NgModule({
  declarations: [
    VendorsComponent,
    SuccessNotifyComponent,
    FooterComponent,
    MatConfirmDialogComponent,
    BaubleFooterComponent,
    NoDataFoundComponent,
    TableLoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SkeletonModule,
  ],
  exports: [
    VendorsComponent,
    SuccessNotifyComponent,
    FooterComponent,
    MatConfirmDialogComponent,
    NoDataFoundComponent,
    BaubleFooterComponent,
    TableLoaderComponent
  ]
})
export class VendorsModule {
}
