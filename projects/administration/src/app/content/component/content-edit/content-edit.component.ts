import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {ContentModel} from '../../../@core/interfaces/api/ContentModel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookModel} from '../../../@core/interfaces/api/BookModel';
import {ContentApiService} from '../../shared/service/content-api.service';
import {BookContentModel} from '../../../@core/interfaces/BookContentModel';
import {AlertService} from '../../../@core/services/alert.service';
import {AlertConst} from '../../../@core/const/AlertConst';
import {CONTENT_DATA_LOADED} from '../../store/content.action';
import {Router} from '@angular/router';


@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.scss']
})
export class ContentEditComponent implements OnInit {

  contentAddForm = {} as FormGroup;
  books = [] as BookModel[];
  contentImage: any;
  initialLoad = true;


  constructor(public dialogRef: MatDialogRef<ContentEditComponent>,
              private alertService: AlertService,
              private contentApiService: ContentApiService,
              private store: Store<fromApp.AppState>,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public bookContentModel: BookContentModel) {
  }


  ngOnInit(): void {

    this.books = this.bookContentModel.bookList;
    console.log(this.bookContentModel.content);
    this.contentImage = this.bookContentModel.content.markerImageURL;

    this.contentAddForm = new FormGroup({
      name: new FormControl(this.bookContentModel.content.name, [Validators.required]),
      description: new FormControl(this.bookContentModel.content.description, [Validators.required]),
      chapter: new FormControl(this.bookContentModel.content.chapter, [Validators.required]),
      pageNumber: new FormControl(this.bookContentModel.content.pageNumber, [Validators.required]),
      contentURL: new FormControl(this.bookContentModel.content.contentURL, [Validators.required]),
      bookId: new FormControl(this.bookContentModel.content.bookId, [Validators.required]),
    });

  }


  onBasicUpload($event: any): void {
    try {
      if ($event != null) {
        this.contentImage = $event.currentFiles[0];
      }
    } catch (e) {
      this.contentImage = null;
    }
  }

  onRemoveClick(): void {
    this.contentImage = null;
  }

  onContentSubmit(): void {
    if (this.contentAddForm.invalid || this.contentImage == null) {
      this.contentAddForm.markAllAsTouched();
      return;
    }

    if (this.initialLoad) {
      this.contentImage = null;
    }

    const postData = this.contentAddForm.value as ContentModel;
    console.log(this.contentAddForm.value);
    postData.id = this.bookContentModel.content.id;
    // postData.chapter = +postData.chapter;
    // postData.pageNumber = +postData.pageNumber;
    // postData.bookId = +this.contentAddForm.controls.bookId.value;
    console.log(postData);
    const postDataString = JSON.stringify(postData);


    const formData = new FormData();
    formData.append('image', this.contentImage);
    formData.append('body', postDataString);
    console.log(postDataString);

    this.alertService.getConfirmationDialog()
      .confirm({
        key: 'ce-100',
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.sendToServer(formData);
        }
      });

  }


  sendToServer(formData: FormData): void {
    this.contentApiService.updateContent(formData)
      .subscribe(res => {
        this.dialogRef.close();
        this.router.navigate(['/admin/content/all']);
        this.store.dispatch(CONTENT_DATA_LOADED({payload: res}));
      });
  }


  onRemoveCurrentImageClick(): void {
    this.initialLoad = false;
    this.contentImage = null;
  }
}
