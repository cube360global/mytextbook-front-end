import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {BookApiService} from '../../shared/services/book-api.service';
import {BookModel} from '../../../@core/interfaces/api/BookModel';
import {EditBookComponent} from '../edit-book/edit-book.component';
import {SubjectApiService} from '../../../subject/shared/services/subject-api.service';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';
import {SubjectBookModel} from '../../../@core/interfaces/SubjectBookModel';
import {AlertConst} from '../../../@core/const/AlertConst';
import {SUBJECT_DATA_REQUEST} from '../../../subject/store/subject.action';
import {AlertService} from '../../../@core/services/alert.service';
import {BOOK_DATA_REQUEST} from '../../store/book.action';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books = [] as BookModel[];
  subjects = [] as SubjectModel[];
  loading = true;
  searchInputData = '';

  constructor(private bookApiService: BookApiService,
              private subjectApiService: SubjectApiService,
              private alertService: AlertService,
              private dialog: MatDialog,
              private ngxUiLoaderService: NgxUiLoaderService,
              private store: Store<fromApp.AppState>) {

    this.store.select(fromApp.getBookReducer)
      .subscribe(res => {
          if (res.bookData.length > 0) {
            this.books = res.bookData;
            console.log(this.books);
            this.loading = false;
          }
        }
        , error => console.error(error));

  }

  ngOnInit(): void {
  }


  onDelete(id: any): void {
    this.alertService.getConfirmationDialog()
      .confirm({
        key: 'book-delete',
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.bookApiService.Delete(id)
            .subscribe(() => {
              this.store.dispatch(BOOK_DATA_REQUEST());
            });
        }
      });
  }

  openBookEditViewDialog(book: BookModel): void {
    this.subjectApiService.All()
      .subscribe(res => {
        console.log(res);
        this.subjects = res;
        const subjectBook: SubjectBookModel = {
          subjects: this.subjects,
          book
        };
        this.dialog.open(EditBookComponent, {
          width: '100%',
          data: subjectBook
        });
      });
  }
}
