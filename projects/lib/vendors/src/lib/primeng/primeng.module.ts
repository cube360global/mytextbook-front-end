import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {RippleModule} from 'primeng/ripple';
import {PanelMenuModule} from 'primeng/panelmenu';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';

const primeNg = [
  ButtonModule,
  AccordionModule,
  RippleModule,
  PanelMenuModule,
  InputTextModule,
  ToastModule

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
