import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AlertService} from '../../../../../@core/services/alert.service';
import {AlertConst} from '../../../../../@core/const/AlertConst';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../app.reducer';
import {USER_LOGOUT} from '../../../../../+auth/store/auth.action';
import {TusUploadService} from '../../../../../@core/services/tus-upload.service';
import {Subscription} from 'rxjs';
import {OverlayPanel} from 'primeng/overlaypanel';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit, OnDestroy {

  @ViewChild('op') primePanel = {} as OverlayPanel;
  subscription = new Subscription();


  constructor(private alertService: AlertService,
              public tusService: TusUploadService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.subscription = this.tusService.uploadComplete
      .subscribe(() => {
        if (this.tusService.fileUploadArray.length > 0) {
          this.primePanel.hide();
        }
      });
  }

  onLogOutClick(): void {
    this.alertService.getConfirmationDialog()
      .confirm({
        key: 'tb-250',
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.store.dispatch(USER_LOGOUT());
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
