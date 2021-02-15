import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {QuestionModel} from '../../../../../@core/interfaces/api/QuestionModel';
import {QuestionUpdateModel} from '../../../../../@core/interfaces/api/QuestionUpdateModel';
import {AlertService} from '../../../../../@core/services/alert.service';
import {ContentQuestionApiService} from '../../../../shared/service/content-question-api.service';

@Component({
  selector: 'app-content-question-edit',
  templateUrl: './content-question-edit.component.html',
  styleUrls: ['./content-question-edit.component.scss']
})
export class ContentQuestionEditComponent implements OnInit {
  questionEditForm = {} as FormGroup;

  constructor(public dialogRef: MatDialogRef<ContentQuestionEditComponent>,
              @Inject(MAT_DIALOG_DATA) public questionUpdateData: { question: QuestionModel, contentId: number },
              private alertService: AlertService,
              private contentQuestionApiService: ContentQuestionApiService) {
  }

  ngOnInit(): void {
    this.questionEditForm = new FormGroup({
      question: new FormControl(this.questionUpdateData.question.question, [Validators.required]),
      answer1: new FormControl(this.questionUpdateData.question.answer1, [Validators.required]),
      answer2: new FormControl(this.questionUpdateData.question.answer2, [Validators.required]),
      answer3: new FormControl(this.questionUpdateData.question.answer3, [Validators.required]),
      answer4: new FormControl(this.questionUpdateData.question.answer4, [Validators.required]),
      correctAnswer: new FormControl(this.questionUpdateData.question.correctAnswer, [Validators.required])
    });
  }

  onEditQuestionSubmit(): void {
    if (this.questionEditForm.invalid) {
      return;
    }
    const editedQuestion = this.questionEditForm.value as QuestionUpdateModel;
    editedQuestion.correctAnswer = +this.questionEditForm.value.correctAnswer;
    editedQuestion.contentId = this.questionUpdateData.contentId;
    editedQuestion.id = this.questionUpdateData.question.id;
    console.log(this.questionUpdateData.contentId);
    console.log(editedQuestion);
    // this.alertService.getConfirmationDialog()
    //   .confirm({
    //     key: 'cd-100',
    //     message: AlertConst.ConfirmationMessage,
    //     accept: () => {
    //       this.contentQuestionApiService.updateQuestion(editedQuestion)
    //         .subscribe(res => console.log(res));
    //     }
    //   });
  }

}
