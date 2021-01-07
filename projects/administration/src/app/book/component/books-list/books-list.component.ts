import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {BookApiService} from '../../shared/services/book-api.service';
import {BookModel} from '../../../@core/interfaces/api/BookModel';
import {EditBookComponent} from "../edit-book/edit-book.component";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {


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
  }


  onDelete(id: any): void {

  }

  openBookEditViewDialog(book: BookModel): void {
    this.dialog.open(EditBookComponent, {
      width: '100%',
      data: book
    });
  }
}
