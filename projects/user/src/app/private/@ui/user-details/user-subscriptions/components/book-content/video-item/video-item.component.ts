import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ContentModel} from '../../../../../../../../../../administration/src/app/@core/interfaces/api/ContentModel';
import * as fromApp from '../../../../../../../app.reducer';
import {USER_LOGIN_FAIL} from '../../../../../../../+auth/store/auth.action';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  @Input() video = {} as ContentModel;

  userId: any;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('USERID');
    if (this.userId == null) {
      this.store.dispatch(USER_LOGIN_FAIL());
    }
  }
}
