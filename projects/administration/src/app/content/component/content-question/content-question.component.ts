import {Component, Input, OnInit} from '@angular/core';
import {QuestionModel} from '../../../@core/interfaces/api/QuestionModel';

@Component({
  selector: 'app-content-question',
  templateUrl: './content-question.component.html',
  styleUrls: ['./content-question.component.scss']
})
export class ContentQuestionComponent implements OnInit {

  @Input() question = {} as QuestionModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
