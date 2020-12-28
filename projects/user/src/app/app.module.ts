import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PrimengModule} from '../../../lib/vendors/src/lib/primeng/primeng.module';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {UserAuthModule} from './+auth/user-auth.module';
import {StoreModule} from '@ngrx/store';
import * as fromApp from '../../../administration/src/app/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './+auth/store/auth.effects';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';
import {ToastrModule} from 'ngx-toastr';
import {tokenGetter} from '../../../administration/src/app/app.module';
import {AlyleModule} from '../../../lib/vendors/src/lib/alyle/alyle.module';
import {LY_THEME, LY_THEME_NAME, LyHammerGestureConfig, LyTheme2, StyleRenderer} from '@alyle/ui';
import {MinimaDark, MinimaLight} from '@alyle/ui/themes/minima';
import {CustomMinimaDark, CustomMinimaLight} from '../../../lib/vendors/src/lib/alyle/alyle.config';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {NgxSpinnerModule} from 'ngx-spinner';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BooksEffects} from './private/@ui/user-content/book/store/book/book.effects';
import {AuthInterceptorService} from './@core/interceptors/auth-interceptor.service';


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
        tokenGetter,
      }
    }),
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
    }),
    AlyleModule,
    PrimengModule,
    NgxUiLoaderModule,
    UserAuthModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, BooksEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
    }),
    MatPasswordStrengthModule.forRoot(),
    NgxSpinnerModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    [LyTheme2],
    [StyleRenderer],
    {provide: LY_THEME_NAME, useValue: 'minima-light'},
    {provide: LY_THEME, useClass: MinimaLight, multi: true},
    {provide: LY_THEME, useClass: MinimaDark, multi: true},
    {provide: LY_THEME, useClass: CustomMinimaLight, multi: true},
    {provide: LY_THEME, useClass: CustomMinimaDark, multi: true},
    {provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



