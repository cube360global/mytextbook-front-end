import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../lib/vendors/src/lib/primeng/primeng.module';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {UserAuthModule} from './+auth/user-auth.module';
import {TestComponent} from './test/component/test/test.component';
import {StoreModule} from '@ngrx/store';
import * as fromApp from '../../../administration/src/app/app.reducer';
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./+auth/store/auth.effects";
import {HttpClientModule} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {ToastrModule} from "ngx-toastr";
import {tokenGetter} from "../../../administration/src/app/app.module";


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
      }
    }),
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    MaterialModule,
    PrimengModule,
    NgxUiLoaderModule,
    UserAuthModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
