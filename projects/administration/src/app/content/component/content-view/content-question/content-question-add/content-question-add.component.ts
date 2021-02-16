import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ContentQuestionApiService} from '../../../../shared/service/content-question-api.service';
import {QuestionAddModel} from '../../../../../@core/interfaces/api/QuestionAddModel';
import {AlertConst} from '../../../../../@core/const/AlertConst';
import {AlertService} from '../../../../../@core/services/alert.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../app.reducer';
import {CONTENT_DATA_REQUEST} from '../../../../store/content.action';


@Component({
  selector: 'app-content-question-add',
  templateUrl: './content-question-add.component.html',
  styleUrls: ['./content-question-add.component.scss']
})
export class ContentQuestionAddComponent implements OnInit {
  questionAddForm = {} as FormGroup;

  constructor(public dialogRef: MatDialogRef<ContentQuestionAddComponent>,
              @Inject(MAT_DIALOG_DATA) public contentId: number,
              private contentQuestionApiService: ContentQuestionApiService,
              private alertService: AlertService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.questionAddForm = new FormGroup({
      question: new FormControl(null, [Validators.required]),
      answer1: new FormControl(null, [Validators.required]),
      answer2: new FormControl(null, [Validators.required]),
      answer3: new FormControl(null, [Validators.required]),
      answer4: new FormControl(null, [Validators.required]),
      correctAnswer: new FormControl(null, [Validators.required])
    });
  }

  onAddQuestionSubmit(): void {
    if (this.questionAddForm.invalid) {
      return;
    }
    const newQuestion = this.questionAddForm.value as QuestionAddModel;
    newQuestion.correctAnswer = +this.questionAddForm.value.correctAnswer;
    newQuestion.contentId = this.contentId;

    this.alertService.getConfirmationDialog()
      .confirm({
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.contentQuestionApiService.addQuestion(newQuestion)
            .subscribe(res => {
              this.dialogRef.close();
              this.store.dispatch(CONTENT_DATA_REQUEST());
            });
        }
      });
  }

}
