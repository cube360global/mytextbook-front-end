import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../app.reducer';
import {BookModel} from '../../../../../../@core/interfaces/api/BookModel';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  // books = [] as BookModel[];
  $obs = new Observable<BookModel[]>();

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.$obs = this.store.select(fromApp.getAllBooks);
    // this.store.select(fromApp.getBookReducer).subscribe(books => {
    //   if (books.bookData.length > 0) {
    //     console.log(books);
    //     this.books = books.bookData;
    //   }
    // }, error => {
    //   console.error(error);
    // });
  }
}
