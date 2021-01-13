import {Component, OnDestroy, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {CookieManagerService} from './@core/services/cookie-manager.service';
import {Store} from '@ngrx/store';
import * as fromApp from './app.reducer';
import {LOGIN_WITH_REFRESH_TOKEN} from './+auth/store/auth.action';
import {VideoUploadService} from './@core/services/video-upload.service';
import {Subscription} from 'rxjs';
import {TusUploadService} from './@core/services/tus-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'administration';
  videoSub = new Subscription();

  constructor(private primengConfig: PrimeNGConfig,
              private store: Store<fromApp.AppState>,
              private videoUploadService: VideoUploadService,
              private tusUploadService: TusUploadService,
              private cookieManagementService: CookieManagerService) {

    this.videoSub = this.videoUploadService.getUploadVide().subscribe(res => {
        this.tusUploadService.tusUpload(res.video, res.upload_link).start();
    });

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

  ngOnDestroy(): void {
    this.videoSub.unsubscribe();
  }

}
