import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {RippleModule} from 'primeng/ripple';
import {PanelMenuModule} from 'primeng/panelmenu';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';

const primeNg = [
  ButtonModule,
  AccordionModule,
  RippleModule,
  PanelMenuModule,
  InputTextModule,
  SidebarModule,
  ToastModule,
  TableModule,

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
