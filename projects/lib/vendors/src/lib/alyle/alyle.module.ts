import { NgModule } from '@angular/core';
import {LyButtonModule} from '@alyle/ui/button';
import {LyToolbarModule} from '@alyle/ui/toolbar';
import {LyImageCropperModule} from '@alyle/ui/image-cropper';
import {LyIconModule} from '@alyle/ui/icon';
import {LyFieldModule} from '@alyle/ui/field';
import {LySelectModule} from '@alyle/ui/select';


const alyle = [
  LyButtonModule,
  LyToolbarModule,
  LyImageCropperModule,
  LyIconModule,
  LyFieldModule,
  LySelectModule
];

@NgModule({
  imports: [alyle],
  exports: [alyle],
})
export class AlyleModule { }
