import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {BookApiService} from '../../shared/services/book-api.service';
import {BookModel} from '../../../@core/interfaces/api/BookModel';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  // filterForm = {} as FormGroup;

  books = [] as BookModel[];
  loading = true;
  searchInputData = '';

  constructor(private bookApiService: BookApiService,
              private dialog: MatDialog,
              private ngxUiLoaderService: NgxUiLoaderService,
              private store: Store<fromApp.AppState>) {

    this.store.select(fromApp.getBookReducer)
      .subscribe(res => {
          if (res.bookData.length > 0) {
            this.books = res.bookData;
            this.loading = false;
          }
        }
        , error => console.error(error));

  }

  ngOnInit(): void {
    // this.filterForm = new FormGroup({
    //   district: new FormControl(),
    //   school: new FormControl(),
    //   subject: new FormControl(),
    //   grade: new FormControl(),
    //   salesLead: new FormControl(),
    // });

  }

  openUserViewDialog(userId: string): void {
    // this.ngxUiLoaderService.start();
    // this.bookApiService.Get(userId)
    //   .subscribe(res => {
    //     this.dialog.open(UserViewerDialogComponent, {
    //       width: '100%',
    //       data: res
    //     });
    //     this.ngxUiLoaderService.stop();
    //   }, () => {
    //     this.ngxUiLoaderService.stop();
    //   });

  }


  onFilterApply(): void {

  }
}
