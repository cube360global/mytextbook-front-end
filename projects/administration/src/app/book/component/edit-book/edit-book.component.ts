import {Component, Inject, OnInit} from '@angular/core';
import {BookModel} from '../../../@core/interfaces/api/BookModel';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {SubjectApiService} from "../../../subject/shared/services/subject-api.service";
import {SubjectModel} from "../../../@core/interfaces/api/SubjectModel";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  bookEditForm = {} as FormGroup;
  initialLoad = true;
  image: any;
  subjects = [] as SubjectModel[];

  constructor(public dialogRef: MatDialogRef<EditBookComponent>,
              @Inject(MAT_DIALOG_DATA) public bookModel: BookModel,
              private store: Store<fromApp.AppState>,
              private subjectApiService: SubjectApiService) {
  }

  ngOnInit(): void {
    console.log(this.bookModel);

    this.subjectApiService.All()
      .subscribe(res => {
        console.log(res);
        this.subjects = res;
      });

    this.bookEditForm = new FormGroup({
      grade: new FormControl(this.bookModel.grade, [Validators.required]),
      image: new FormControl(this.bookModel.image, [Validators.required]),
      medium: new FormControl(this.bookModel.medium, [Validators.required]),
      name: new FormControl(this.bookModel.name, [Validators.required]),
      price: new FormControl(this.bookModel.price, [Validators.required]),
      subjectId: new FormControl(this.bookModel.subjectId, [Validators.required])
    });
  }

  onBasicUpload($event: any): void {
    try {
      if ($event != null) {
        this.image = $event.currentFiles[0];
      }
    } catch (e) {
      this.image = null;
    }
  }

  onImageRemoveClick(): void {
    this.image = null;
  }

  onRemoveCurrentImageClick(): void {
    this.initialLoad = false;
    this.bookModel.image = '';
  }

  onEditBookSubmit(): void {
    if (this.bookEditForm.valid) {
      this.bookEditForm.markAllAsTouched();
      return;
    }

    const bookData = this.bookEditForm.value as BookModel;
    bookData.id = this.bookModel.id;
    bookData.subjectId = this.bookModel.subjectId;

    // this.store.dispatch(BOOK_DATA_LOADED, )
  }

}
