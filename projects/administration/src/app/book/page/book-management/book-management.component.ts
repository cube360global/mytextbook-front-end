import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {MatDialog} from '@angular/material/dialog';
import {BOOK_DATA_REQUEST} from '../../store/book.action';
import {AddBookComponent} from '../../component/add-book/add-book.component';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {SubjectApiService} from '../../../subject/shared/services/subject-api.service';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss']
})
export class BookManagementComponent implements OnInit {


  constructor(private store: Store<fromApp.AppState>,
              private subjectService: SubjectApiService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.dispatch(BOOK_DATA_REQUEST());
  }


  openAddBookDialog(): void {
    this.ngxUiLoaderService.start();
    this.subjectService.All()
      .subscribe(res => {
        this.dialog.open(AddBookComponent, {
          width: '400px',
          data: res
        });
        this.ngxUiLoaderService.stop();
      }, () => {
        this.ngxUiLoaderService.stop();
      });
  }
}
