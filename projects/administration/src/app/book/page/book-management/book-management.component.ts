import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {MatDialog} from '@angular/material/dialog';
import {BOOK_DATA_REQUEST} from '../../store/book.action';
import {AddBookComponent} from '../../component/add-book/add-book.component';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss']
})
export class BookManagementComponent implements OnInit {

  link = 'https://drive.google.com/file/d/1wxqV2dcznExZWhAjx07EVHqK5pwLVZrC/view';

  constructor(private store: Store<fromApp.AppState>,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.dispatch(BOOK_DATA_REQUEST());
  }

  onAddBookDialogOpenClick(): void {

  }

  openAddBookDialog(): void {
    this.dialog.open(AddBookComponent, {
      width: '350px',
    });
  }
}
