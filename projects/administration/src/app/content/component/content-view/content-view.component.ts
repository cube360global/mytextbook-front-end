import {Component, OnInit} from '@angular/core';
import {ContentModel} from '../../../@core/interfaces/api/ContentModel';
import {DomSanitizer} from '@angular/platform-browser';
import {BookContentModel} from '../../../@core/interfaces/BookContentModel';
import {ContentEditComponent} from '../content-edit/content-edit.component';
import {ContentApiService} from '../../shared/service/content-api.service';
import {MatDialog} from '@angular/material/dialog';
import {AlertService} from '../../../@core/services/alert.service';
import {AlertConst} from '../../../@core/const/AlertConst';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {CONTENT_DATA_LOADED} from '../../store/content.action';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentQuestionAddComponent} from './content-question/content-question-add/content-question-add.component';
import {QuestionModel} from '../../../@core/interfaces/api/QuestionModel';
import {ContentQuestionApiService} from '../../shared/service/content-question-api.service';
import {QUESTION_DATA_REQUEST} from '../../store/question/question.action';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss']
})
export class ContentViewComponent implements OnInit {

  contentData = {} as ContentModel;
  questions = [] as QuestionModel[];
  videoUrl: any;

  constructor(private sanitizer: DomSanitizer,
              private dialog: MatDialog,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<fromApp.AppState>,
              private alertService: AlertService,
              private contentApiService: ContentApiService,
              private contentQuestionApiService: ContentQuestionApiService) {

    this.store.select(fromApp.getQuestionReducer)
      .subscribe(res => {
        if (res.questionData.length > 0) {
          this.questions = res.questionData;
        }
      });

  }

  ngOnInit(): void {

    this.contentApiService.getContentById(this.activatedRoute.snapshot.params.id)
      .subscribe(res => {
        console.log(res);
        this.contentData = res;
        this.videoUrl = this.sanitizer
          .bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${this.contentData.contentURL}`);
      });

    // this.contentQuestionApiService.getQuestions(this.activatedRoute.snapshot.params.id)
    //   .subscribe(res => {
    //     this.questions = res;
    //   });

    this.store.dispatch(QUESTION_DATA_REQUEST(this.activatedRoute.snapshot.params.id));

    // this.contentData = window.history.state;
  }

  onContentEditDialogOpen(content: ContentModel): void {
    this.contentApiService.allBooks()
      .subscribe((res) => {
        const bookContent = {} as BookContentModel;
        bookContent.content = content;
        bookContent.bookList = res;
        this.dialog.open(ContentEditComponent, {
          width: '100%',
          data: bookContent
        });

      });

  }

  onDeleteContentClick(contentData: ContentModel): void {
    this.alertService.getConfirmationDialog()
      .confirm({
        key: 'cd-100',
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.contentApiService.deleteContent(contentData.id.toString())
            .subscribe(res => {
              this.router.navigate(['/admin/content/all']);
              this.store.dispatch(CONTENT_DATA_LOADED({payload: res}));
            });
        }
      });
  }

  openAddQuestionDialog(): void {
    this.dialog.open(ContentQuestionAddComponent, {
      width: '100%',
      data: this.contentData.id
    });
  }

}
