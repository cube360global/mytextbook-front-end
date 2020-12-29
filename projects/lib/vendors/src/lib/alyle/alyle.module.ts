import {NgModule} from '@angular/core';
import {LyButtonModule} from '@alyle/ui/button';
import {LyToolbarModule} from '@alyle/ui/toolbar';
import {LyImageCropperModule} from '@alyle/ui/image-cropper';
import {LyIconModule} from '@alyle/ui/icon';
import {LyFieldModule} from '@alyle/ui/field';
import {LySelectModule} from '@alyle/ui/select';
import {LyGridModule} from '@alyle/ui/grid';
import {LyRadioModule} from '@alyle/ui/radio';


const alyle = [
  LyButtonModule,
  LyToolbarModule,
  LyImageCropperModule,
  LyIconModule,
  LyFieldModule,
  LySelectModule,
  LyGridModule,
  LyRadioModule,
];

@NgModule({
  imports: [alyle],
  exports: [alyle],
})
export class AlyleModule {
}
