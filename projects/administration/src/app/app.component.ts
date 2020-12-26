import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {CookieManagerService} from './@core/services/cookie-manager.service';
import {Store} from '@ngrx/store';
import * as fromApp from './app.reducer';
import {LOGIN_WITH_REFRESH_TOKEN} from './+auth/store/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'administration';

  constructor(private primengConfig: PrimeNGConfig,
              private store: Store<fromApp.AppState>,
              private cookieManagementService: CookieManagerService) {
  }

  ngOnInit(): void {
    if (this.cookieManagementService.checkRefreshToken()) {
      this.store.dispatch(LOGIN_WITH_REFRESH_TOKEN({payload: this.cookieManagementService.getRefreshToken()}));
    }
    this.primengConfig.ripple = true;
  }

}
