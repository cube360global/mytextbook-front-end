import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {CONTENT_DATA_REQUEST} from '../../store/content.action';
import {ContentModel} from '../../../@core/interfaces/api/ContentModel';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList = [] as ContentModel[];
  loading = true;
  searchInputData: any;

  constructor(private store: Store<fromApp.AppState>) {
    store.select(fromApp.getContentReducer)
      .subscribe(res => {
        if (res.contentData.length > 0) {
          this.contentList = res.contentData;
          this.loading = false;
        }

      });
  }

  ngOnInit(): void {
    this.store.dispatch(CONTENT_DATA_REQUEST());
  }



}
