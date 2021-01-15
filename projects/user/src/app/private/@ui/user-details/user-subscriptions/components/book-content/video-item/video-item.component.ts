import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../../app.reducer';
import {USER_LOGIN_FAIL} from '../../../../../../../+auth/store/auth.action';
import {DisplayContentService} from '../../../../../../../../../../lib/tools/src/lib/display-content.service';
import { ContentModel } from 'projects/user/src/app/@core/interfaces/api/ContentModel';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  @Input() video = {} as ContentModel;

  userId: any;

  constructor(private store: Store<fromApp.AppState>, public displayContentService: DisplayContentService) {
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('USERID');
    if (this.userId == null) {
      this.store.dispatch(USER_LOGIN_FAIL());
    }
  }
}
