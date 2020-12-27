import {Component, OnInit} from '@angular/core';
import {ContentModel} from '../../../../@core/interfaces/api/ContentModel';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../app.reducer';
import {CONTENT_DATA_REQUEST} from '../../../store/content.action';
import {Router} from '@angular/router';
import {ContentEditComponent} from '../../content-edit/content-edit.component';
import {MatDialog} from '@angular/material/dialog';
import {ContentApiService} from '../../../shared/service/content-api.service';
import {BookContentModel} from '../../../../@core/interfaces/BookContentModel';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent implements OnInit {

  contentList = [] as ContentModel[];
  loading = true;
  searchInputData: any;

  constructor(private store: Store<fromApp.AppState>,
              private contentApiService: ContentApiService,
              private router: Router,
              private dialog: MatDialog) {
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

  onContentEditDialogOpen(content: ContentModel): void {
    this.contentApiService.allBooks()
      .subscribe((res) => {
        const bookContent = {} as BookContentModel;
        bookContent.content = content;
        bookContent.bookList = res;
        this.dialog.open(ContentEditComponent, {
          width: '100%',
          data: bookContent
        });

      });

  }

}
