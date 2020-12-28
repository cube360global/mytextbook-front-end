import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../../app.reducer';
import {BOOK_DATA_REQUEST} from '../../store/book/book.action';

@Component({
  selector: 'app-user-book',
  templateUrl: './user-book.component.html',
  styleUrls: ['./user-book.component.scss']
})
export class UserBookComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(BOOK_DATA_REQUEST());
  }
}
