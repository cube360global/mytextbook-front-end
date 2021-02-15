import {Injectable} from '@angular/core';
import {ApiBaseService} from '../../../@core/api/api.base.service';
import {AdminControllersConst} from '../../../@core/const/AdminControllersConst';
import {Observable} from 'rxjs';
import {QuestionAddModel} from '../../../@core/interfaces/api/QuestionAddModel';
import {QuestionUpdateModel} from '../../../@core/interfaces/api/QuestionUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class ContentQuestionApiService {
  constructor(private apiBaseService: ApiBaseService) {
  }

  addQuestion(question: QuestionAddModel): Observable<QuestionAddModel> {
    return this.apiBaseService.POST_API<QuestionAddModel>([AdminControllersConst.QuestionController], question, true, true);
  }

  updateQuestion(question: QuestionUpdateModel): Observable<QuestionUpdateModel> {
    return this.apiBaseService.UPDATE_API<QuestionUpdateModel>([AdminControllersConst.QuestionController], question, true);
  }

  deleteQuestion(id: string): Observable<QuestionAddModel> {
    return this.apiBaseService.DELETE_API<QuestionAddModel>([AdminControllersConst.QuestionController, id]);
  }
}
