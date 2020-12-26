import {Component, OnInit} from '@angular/core';
import {AlertService} from '../../../../../@core/services/alert.service';
import {AlertConst} from '../../../../../@core/const/AlertConst';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../app.reducer';
import {USER_LOGIN_FAIL} from '../../../../../+auth/store/auth.action';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  constructor(private alertService: AlertService, private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
  }

  onLogOutClick(): void {
    this.alertService.getConfirmationDialog()
      .confirm({
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.store.dispatch(USER_LOGIN_FAIL());
        }
      });
  }
}
