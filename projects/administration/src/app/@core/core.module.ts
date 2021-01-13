import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UploadProgressBarComponent } from './shared/components/upload-progress-bar/upload-progress-bar.component';


@NgModule({
  declarations: [UploadProgressBarComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
