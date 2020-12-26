import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../../lib/vendors/src/lib/material/material.module';
import {PrimengModule} from '../../../lib/vendors/src/lib/primeng/primeng.module';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {UserAuthModule} from './+auth/user-auth.module';
import {StoreModule} from '@ngrx/store';
import * as fromApp from '../../../administration/src/app/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './+auth/store/auth.effects';
import {HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';
import {ToastrModule} from 'ngx-toastr';
import {tokenGetter} from '../../../administration/src/app/app.module';
import {AlyleModule} from '../../../lib/vendors/src/lib/alyle/alyle.module';
import {LY_THEME, LY_THEME_NAME, LyHammerGestureConfig, LyTheme2, StyleRenderer} from '@alyle/ui';
import {MinimaDark, MinimaLight} from '@alyle/ui/themes/minima';
import {CustomMinimaDark, CustomMinimaLight} from '../../../lib/vendors/src/lib/alyle/alyle.config';




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
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    AlyleModule,
    PrimengModule,
    NgxUiLoaderModule,
    UserAuthModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [
    [ LyTheme2 ],
    [ StyleRenderer ],
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
    { provide: LY_THEME, useClass: MinimaDark, multi: true },
    { provide: LY_THEME, useClass: CustomMinimaLight, multi: true },
    { provide: LY_THEME, useClass: CustomMinimaDark, multi: true },
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



