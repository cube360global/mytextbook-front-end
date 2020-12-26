import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContentApiService} from '../../../shared/service/content-api.service';
import {BookModel} from '../../../../@core/interfaces/api/BookModel';
import {ContentModel} from '../../../../@core/interfaces/api/ContentModel';
import {AlertConst} from '../../../../@core/const/AlertConst';
import {AlertService} from '../../../../@core/services/alert.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../app.reducer';
import {CONTENT_DATA_LOADED} from '../../../store/content.action';

@Component({
  selector: 'app-content-add-form',
  templateUrl: './content-add-form.component.html',
  styleUrls: ['./content-add-form.component.scss']
})
export class ContentAddFormComponent implements OnInit {

  contentAddForm = {} as FormGroup;
  books = [] as BookModel[];
  contentImage: any;


  constructor(private contentApiService: ContentApiService,
              private store: Store<fromApp.AppState>,
              private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.loadBooks();

    this.contentAddForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      chapter: new FormControl(null, [Validators.required]),
      pageNumber: new FormControl(null, [Validators.required]),
      contentURL: new FormControl(null, [Validators.required]),
      bookId: new FormControl(null, [Validators.required]),
    });
  }

  onBasicUpload($event: any): void {
    try {
      if ($event != null) {
        this.contentImage = $event.currentFiles[0];
        console.log(this.contentImage);
      }
    } catch (e) {
      this.contentImage = null;
    }
  }

  onRemoveClick(): void {
    this.contentImage = null;
  }

  onContentSubmit(): void {
    if (this.contentAddForm.invalid && this.contentImage == null) {
      this.contentAddForm.markAllAsTouched();
      return;
    }

    const postData = this.contentAddForm.value as ContentModel;
    postData.chapter = +postData.chapter;
    postData.pageNumber = +postData.pageNumber;
    postData.bookId = +this.contentAddForm.controls.bookId.value;

    const postDataString = JSON.stringify(postData);

    console.log(postDataString);
    const formData = new FormData();
    formData.append('image', this.contentImage);
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
    this.contentApiService.putContent(formData)
      .subscribe(res => {
        this.store.dispatch(CONTENT_DATA_LOADED({payload: res}));
      });
  }

  private loadBooks(): void {
    this.contentApiService.allBooks()
      .subscribe(res => this.books = res);
  }
}
