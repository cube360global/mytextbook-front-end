import { Component, OnInit } from '@angular/core';
import {ContentModel} from '../../../../@core/interfaces/api/ContentModel';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../app.reducer';
import {CONTENT_DATA_REQUEST} from '../../../store/content.action';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent implements OnInit {

  contentList = [] as ContentModel[];
  loading = true;
  searchInputData: any;

  constructor(private store: Store<fromApp.AppState>) {
    store.select(fromApp.getContentReducer)
      .subscribe(res => {
        if (res.contentData.length > 0){
          this.contentList = res.contentData;
          this.loading = false;
        }

      });
  }

  ngOnInit(): void {
    this.store.dispatch(CONTENT_DATA_REQUEST());
  }


}
