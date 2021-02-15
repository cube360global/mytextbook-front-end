import {Component, Input, OnInit} from '@angular/core';
import {QuestionModel} from '../../../../@core/interfaces/api/QuestionModel';
import {ContentQuestionEditComponent} from './content-question-edit/content-question-edit.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-content-question',
  templateUrl: './content-question.component.html',
  styleUrls: ['./content-question.component.scss']
})
export class ContentQuestionComponent implements OnInit {

  @Input() question = {} as QuestionModel;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openEditDialog(): void {
    this.dialog.open(ContentQuestionEditComponent, {
      width: '100%',
      data: this.question
    });
  }
}
