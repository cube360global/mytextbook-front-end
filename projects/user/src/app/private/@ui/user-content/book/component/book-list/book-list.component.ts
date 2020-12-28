import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../app.reducer';
import {BookModel} from '../../../../../../@core/interfaces/api/BookModel';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.store.select(fromApp.getBookReducer).subscribe(res => {
      console.log(res);
    });
  }
}
