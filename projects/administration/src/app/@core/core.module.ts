import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UploadProgressBarComponent } from './shared/components/upload-progress-bar/upload-progress-bar.component';
import {MaterialModule} from '../../../../lib/vendors/src/lib/material/material.module';


@NgModule({
  declarations: [UploadProgressBarComponent],
  exports: [
    UploadProgressBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule {
}
