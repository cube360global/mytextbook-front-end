import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import * as fromApp from './app.reducer';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../../lib/vendors/src/lib/material/material.module';
import {NgxUiLoaderConfig, NgxUiLoaderModule, NgxUiLoaderService} from 'ngx-ui-loader';
import {PrimengModule} from '../../../lib/vendors/src/lib/primeng/primeng.module';
import {AdminLoginComponent} from './+auth/components/admin-login/admin-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ValdemortModule} from 'ngx-valdemort';
import {MessageService} from 'primeng/api';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CookieService} from 'ngx-cookie-service';
import {AuthEffects} from './+auth/store/auth.effects';
import {JwtModule} from '@auth0/angular-jwt';
import {LayoutModule} from './@ui/layout/layout.module';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'ball-spin-clockwise',
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: '#001851',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'cube-grid',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: '#001851',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300,
  // blur: 4,
  // pbColor: '#001851',
  // overlayColor: 'rgba(40,40,40,0.18)',
  // fgsColor: '#001851',
  // fgsType: 'cube-grid'
};


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    JwtModule,
    LayoutModule,
    MaterialModule,
    PrimengModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ReactiveFormsModule,
    ValdemortModule

    // NgxUiLoaderModule
  ],
  providers: [MessageService, CookieService, NgxUiLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
