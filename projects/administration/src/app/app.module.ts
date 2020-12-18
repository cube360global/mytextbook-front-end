import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import * as fromApp from './app.reducer';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../../lib/vendors/src/lib/material/material.module';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {PrimengModule} from '../../../lib/vendors/src/lib/primeng/primeng.module';
import { AdminLoginComponent } from './+auth/components/admin-login/admin-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ValdemortModule} from 'ngx-valdemort';
import {MessageService} from 'primeng/api';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CookieService} from 'ngx-cookie-service';
import {AuthEffects} from './+auth/store/auth.effects';


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
    MaterialModule,
    PrimengModule,
    NgxUiLoaderModule,
    ReactiveFormsModule,
    ValdemortModule

    // NgxUiLoaderModule
  ],
  providers: [MessageService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
