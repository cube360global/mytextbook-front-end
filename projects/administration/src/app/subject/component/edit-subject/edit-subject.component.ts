import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';
import {SubjectApiService} from '../../shared/services/subject-api.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {SUBJECT_DATA_LOADED} from '../../store/subject.action';
import {AlertConst} from '../../../@core/const/AlertConst';
import {AlertService} from '../../../@core/services/alert.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.scss']
})
export class EditSubjectComponent implements OnInit {

  subjectEditForm = {} as FormGroup;
  initialLoad = true;
  image: any;

  constructor(public dialogRef: MatDialogRef<EditSubjectComponent>,
              @Inject(MAT_DIALOG_DATA) public subjectModel: SubjectModel,
              private subjectApiService: SubjectApiService,
              private store: Store<fromApp.AppState>,
              private alertService: AlertService) {
  }

  ngOnInit(): void {
    console.log(this.subjectModel);
    this.image = this.subjectModel.image;
    this.subjectEditForm = new FormGroup({
      name: new FormControl(this.subjectModel.name, [Validators.required]),
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
    // this.subjectModel.image = '';
    this.image = null;
  }

  onEditSubjectSubmit(): void {
    if (this.subjectEditForm.invalid) {
      return;
    }
    const subjectData = this.subjectEditForm.value as SubjectModel;

    subjectData.id = this.subjectModel.id;
    const postDataString = JSON.stringify(subjectData);

    const formData = new FormData();
    formData.append('image', this.image);
    formData.append('body', postDataString);

    this.alertService.getConfirmationDialog()
      .confirm({
        key: 'ce-100',
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.sendToServer(formData);
        }
      });
  }

  sendToServer(data: FormData): void {
    this.subjectApiService.Put(data)
      .subscribe(res => {
        this.dialogRef.close();
        this.store.dispatch(SUBJECT_DATA_LOADED({payload: res}));
      });
  }

}
