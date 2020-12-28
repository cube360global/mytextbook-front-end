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

    const cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: '#164969'
        },
        button: {
          background: '#ffe000',
          text: '#164969'
        }
      },
      theme: 'classic',
      content: {
        message: 'This website uses cookies to ensure you get the best experience on our website.',
        dismiss: 'Got it!',
      }
    });

    if (this.cookieManagementService.checkRefreshToken()) {

      let refresh: any;
      refresh = this.cookieManagementService.getRefreshToken();
      this.store.dispatch(LOGIN_WITH_REFRESH_TOKEN({payload: refresh}));
    }
    this.primengConfig.ripple = true;
  }

}
