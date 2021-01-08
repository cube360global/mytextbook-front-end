import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {RippleModule} from 'primeng/ripple';
import {PanelMenuModule} from 'primeng/panelmenu';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {FileUploadModule} from 'primeng/fileupload';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';
import {BadgeModule} from 'primeng/badge';
import {SkeletonModule} from 'primeng/skeleton';
import {InputTextareaModule} from 'primeng/inputtextarea';


const primeNg = [
  ButtonModule,
  AccordionModule,
  RippleModule,
  PanelMenuModule,
  InputTextModule,
  SidebarModule,
  ToastModule,
  TableModule,
  OverlayPanelModule,
  FileUploadModule,
  ConfirmDialogModule,
  DropdownModule,
  BadgeModule,
  SkeletonModule,
  InputTextareaModule
];

@NgModule({
  declarations: [],
  imports: [
    primeNg
  ], exports: [
    primeNg
  ]
})
export class PrimengModule {
}
