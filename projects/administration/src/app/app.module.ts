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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValdemortModule} from 'ngx-valdemort';
import {ConfirmationService, MessageService} from 'primeng/api';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CookieService} from 'ngx-cookie-service';
import {AuthEffects} from './+auth/store/auth.effects';
import {JwtModule} from '@auth0/angular-jwt';
import {LayoutModule} from './@ui/layout/layout.module';
import {AuthInterceptorService} from './@core/interceptors/auth-interceptor.service';
import {UsersEffects} from './users/store/user.effects';
import {ToastrModule} from 'ngx-toastr';
import {BooksEffects} from './book/store/book.effects';
import {SubjectEffects} from './subject/store/subject.effects';
import {ContentEffects} from './content/store/content.effects';
import {AgGridModule} from 'ag-grid-angular';
import { DevTestComponent } from './dev-test/dev-test.component';
import {WebcamModule} from 'ngx-webcam';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';

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

export function tokenGetter(): string {
  return 'this is test';
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    DevTestComponent,

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
    StoreModule.forRoot(fromApp.appReducer),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: true,
    // }),
    EffectsModule.forRoot([
      AuthEffects,
      UsersEffects,
      BooksEffects,
      SubjectEffects,
      ContentEffects,
    ]),

    LayoutModule,
    MaterialModule,
    PrimengModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    ValdemortModule,
    WebcamModule,
    AgGridModule.withComponents([]),
    FormsModule,

    // NgxUiLoaderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    ConfirmationService,
    MessageService,
    CookieService,
    NgxUiLoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
