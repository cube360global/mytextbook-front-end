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

const primeNg = [
  ButtonModule,
  AccordionModule,
  RippleModule,
  PanelMenuModule,
  InputTextModule,
  SidebarModule,
  ToastModule,
  TableModule,
  OverlayPanelModule

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
