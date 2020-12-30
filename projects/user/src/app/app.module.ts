import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {NgxSpinnerModule} from 'ngx-spinner';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ToastrModule} from 'ngx-toastr';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserAuthModule} from './+auth/user-auth.module';
import * as fromApp from './app.reducer';
import {AuthEffects} from './+auth/store/auth.effects';
import {AuthInterceptorService} from './@core/interceptors/auth-interceptor.service';
import {UserProfileEffects} from './private/@ui/user-details/user-profile/store/user-profile.effects';
import {PrimengModule} from '../../../lib/vendors/src/lib/primeng/primeng.module';
import {VendorsModule} from '../../../lib/vendors/src/lib/vendors.module';

export function tokenGetter(): string {
  return 'this is test';
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter
      }
    }),
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true
    }),
    VendorsModule,
    PrimengModule,
    NgxUiLoaderModule,
    UserAuthModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, UserProfileEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true
    }),
    MatPasswordStrengthModule.forRoot(),
    NgxSpinnerModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
