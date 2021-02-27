import {Component, Input, OnInit} from '@angular/core';
import {QuestionModel} from '../../../../@core/interfaces/api/QuestionModel';
import {ContentQuestionEditComponent} from './content-question-edit/content-question-edit.component';
import {MatDialog} from '@angular/material/dialog';
import {ContentQuestionApiService} from '../../../shared/service/content-question-api.service';
import {AlertConst} from '../../../../@core/const/AlertConst';
import {AlertService} from '../../../../@core/services/alert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-content-question',
  templateUrl: './content-question.component.html',
  styleUrls: ['./content-question.component.scss']
})
export class ContentQuestionComponent implements OnInit {

  @Input() question = {} as QuestionModel;
  @Input() contentId = 0;

  constructor(public dialog: MatDialog,
              private contentQuestionApiService: ContentQuestionApiService,
              private alertService: AlertService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  openEditDialog(): void {
    this.dialog.open(ContentQuestionEditComponent, {
      width: '100%',
      data: {question: this.question, contentId: this.contentId}
    });
  }

  onDeleteQuestion(): void {
    this.alertService.getConfirmationDialog()
      .confirm({
        key: 'cd-100',
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.contentQuestionApiService.deleteQuestion(this.question.id.toString())
            .subscribe(res => {
              this.router.navigate(['admin', 'content', 'all']);
            });
        }
      });
  }
}
