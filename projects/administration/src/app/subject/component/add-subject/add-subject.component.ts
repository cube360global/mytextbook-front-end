import {Component, OnInit} from '@angular/core';
import {SubjectApiService} from '../../shared/services/subject-api.service';
import {SubjectPostModel} from '../../../@core/interfaces/api/SubjectPostModel';
import {AlertConst} from '../../../@core/const/AlertConst';
import {AlertService} from '../../../@core/services/alert.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {SUBJECT_DATA_LOADED} from '../../store/subject.action';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {

  subjectNameCon = new FormControl(null, [Validators.required]);
  file: any;
  imageError: any;
  isImageSaved: any;
  cardImageBase64 = '';

  constructor(private subjectApiService: SubjectApiService,
              private store: Store<fromApp.AppState>,
              private alertService: AlertService,
              public dialogRef: MatDialogRef<AddSubjectComponent>,
  ) {
  }

  ngOnInit(): void {
  }

  fileChangeEvent(fileInput: any): any {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const maxSize = 20971520;
      const allowedTypes = ['image/png', 'image/jpeg'];
      const maxHeight = 15200;
      const maxWidth = 25600;

      if (fileInput.target.files[0].size > maxSize) {
        this.imageError =
          'Maximum size allowed is ' + maxSize / 1000 + 'Mb';

        return false;
      }

      if (!allowedTypes.includes(fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }

      this.file = fileInput.target.files[0];

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();

        this.cardImageBase64 = e.target.result;
        this.isImageSaved = true;

        // image.onload = () => {
        //   if (rs == null){
        //     return;
        //   }
        //   // @ts-ignore
        //   const imgHeight = rs.currentTarget.height;
        //   // @ts-ignore
        //   const imgWidth = rs.currentTarget.width;
        //
        //
        //
        //   if (imgHeight > maxHeight && imgWidth > maxWidth) {
        //     this.imageError =
        //       'Maximum dimensions allowed ' +
        //       maxHeight +
        //       '*' +
        //       maxWidth +
        //       'px';
        //     return false;
        //   } else {
        //     const imgBase64Path = e.target.result;
        //     this.cardImageBase64 = imgBase64Path;
        //     this.isImageSaved = true;
        //     // this.previewImagePath = imgBase64Path;
        //   }
        // };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  removeImage(): void {
    this.cardImageBase64 = '';
    this.isImageSaved = false;
  }

  onSubmitImg(): void {
    if (!this.subjectNameCon.valid) {
      this.alertService.showInfo('Input data not valid');
      return;
    }
    this.alertService.getConfirmationDialog()
      .confirm({
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.doSubmit();
        }
      });
  }

  doSubmit(): void {
    const postData = {} as SubjectPostModel;
    postData.name = this.subjectNameCon.value;

    const x = JSON.stringify(postData);

    const formData = new FormData();
    formData.append('image', this.file);
    formData.append('body', x);


    this.subjectApiService.Post(formData)
      .subscribe(res => {
        this.dialogRef.close();
        this.store.dispatch(SUBJECT_DATA_LOADED({payload: res}));
      }, () => {

      });
  }
}
