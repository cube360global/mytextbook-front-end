import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {QuestionModel} from '../../../../../@core/interfaces/api/QuestionModel';

@Component({
  selector: 'app-content-question-edit',
  templateUrl: './content-question-edit.component.html',
  styleUrls: ['./content-question-edit.component.scss']
})
export class ContentQuestionEditComponent implements OnInit {
  questionEditForm = {} as FormGroup;

  constructor(public dialogRef: MatDialogRef<ContentQuestionEditComponent>,
              @Inject(MAT_DIALOG_DATA) public question: QuestionModel) {
  }

  ngOnInit(): void {
    this.questionEditForm = new FormGroup({
      question: new FormControl(this.question.question, [Validators.required]),
      answer1: new FormControl(this.question.answer1, [Validators.required]),
      answer2: new FormControl(this.question.answer2, [Validators.required]),
      answer3: new FormControl(this.question.answer3, [Validators.required]),
      answer4: new FormControl(this.question.answer4, [Validators.required]),
      correctAnswer: new FormControl(this.question.correctAnswer, [Validators.required])
    });
  }

  onEditQuestionSubmit(): void {

  }

}
