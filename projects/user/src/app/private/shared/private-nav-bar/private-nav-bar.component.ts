import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {USER_LOGOUT} from '../../../+auth/store/auth.action';

@Component({
  selector: 'app-private-nav-bar',
  templateUrl: './private-nav-bar.component.html',
  styleUrls: ['./private-nav-bar.component.scss']
})
export class PrivateNavBarComponent implements OnInit {

  @Input() drawer = {} as MatDrawer;
  @Input() isDrawerShow = true;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {

  }

  onSignOut(): void {
    this.store.dispatch(USER_LOGOUT());
  }
}
