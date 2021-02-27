import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {USER_LOGOUT} from '../../../+auth/store/auth.action';
import { DisplayContentService } from 'projects/lib/tools/src/lib/display-content.service';

@Component({
  selector: 'app-private-nav-bar',
  templateUrl: './private-nav-bar.component.html',
  styleUrls: ['./private-nav-bar.component.scss']
})
export class PrivateNavBarComponent implements OnInit {

  @Input() drawer = {} as MatDrawer;
  @Input() isDrawerShow = true;
  userEmail = '';

  constructor(
    public displayContentService: DisplayContentService,
    private store: Store<fromApp.AppState>) {
    this.store.select(fromApp.getAuthState)
      .subscribe(tokenData => {
        this.userEmail = tokenData.tokenDecodeModel?.email;
      });
  }

  ngOnInit(): void {

  }

  onSignOut(): void {
    this.store.dispatch(USER_LOGOUT({payload: this.userEmail}));
  }
}
