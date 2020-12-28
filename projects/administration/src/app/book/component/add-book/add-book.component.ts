import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilityService} from '../../../../../../lib/tools/src/lib/utility.service';
import {BookModel} from '../../../@core/interfaces/api/BookModel';
import {BookApiService} from '../../shared/services/book-api.service';
import {AlertService} from '../../../@core/services/alert.service';
import {AlertConst} from '../../../@core/const/AlertConst';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {BOOK_DATA_LOADED} from '../../store/book.action';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {


  countries = [] as any[];
  addBook = {} as FormGroup;
  subjects = [] as SubjectModel[];
  selectedGrade: any;

  bookImage: any;


  constructor(public dialogRef: MatDialogRef<AddBookComponent>,
              private store: Store<fromApp.AppState>,
              @Inject(MAT_DIALOG_DATA) public subjectData: SubjectModel[],
              public utilityService: UtilityService,
              private alertService: AlertService,
              private bookApiService: BookApiService) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    // this.ngxUiLoaderService.start();
    this.subjects = this.subjectData;
    this.initForm();
  }

  onBasicUpload($event: any): void {
    try {
      if ($event != null) {
        this.bookImage = $event.currentFiles[0];
        console.log(this.bookImage);
      }
    } catch (e) {
      this.bookImage = null;
    }

  }

  onRemoveClick(): void {
    this.bookImage = null;
  }

  onAddBooks(): void {
    if (this.addBook.invalid && this.bookImage == null) {
      this.addBook.markAllAsTouched();
      return;
    }
    const postData = this.addBook.value as BookModel;
    postData.subjectId = this.addBook.controls.subjectId.value.id;
    postData.grade = +this.addBook.controls.grade.value.code;
    postData.price = +this.addBook.controls.price.value;


    const postDataString = JSON.stringify(postData);

    console.log(postDataString);
    const formData = new FormData();
    formData.append('image', this.bookImage);
    formData.append('body', postDataString);

    this.alertService.getConfirmationDialog()
      .confirm({
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.sendToServer(formData);
        }
      });
  }

  sendToServer(formData: FormData): void {
    console.log(formData);
    this.bookApiService.Send(formData)
      .subscribe(res => {
        this.store.dispatch(BOOK_DATA_LOADED({payload: res}));
        this.dialogRef.close();
      });
  }

  private initForm(): void {
    this.addBook = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      medium: new FormControl(null, {validators: [Validators.required]}),
      grade: new FormControl(null, {validators: [Validators.required]}),
      price: new FormControl(null, {validators: [Validators.required]}),
      subjectId: new FormControl(null, {validators: [Validators.required]}),
    });
  }

}
