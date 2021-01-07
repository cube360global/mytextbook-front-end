import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';
import {SubjectApiService} from '../../shared/services/subject-api.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {SUBJECT_DATA_LOADED} from '../../store/subject.action';

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
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.subjectEditForm = new FormGroup({
      name: new FormControl(this.subjectModel.name, [Validators.required]),
      image: new FormControl(this.subjectModel.image, [Validators.required])
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
    this.subjectModel.image = '';
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

    this.subjectApiService.Put(formData)
      .subscribe(res => {
        this.store.dispatch(SUBJECT_DATA_LOADED({payload: res}));
      });
  }

}
