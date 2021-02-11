import {Component, OnInit} from '@angular/core';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';
import {SubjectApiService} from '../../shared/services/subject-api.service';
import {MatDialog} from '@angular/material/dialog';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {EditSubjectComponent} from '../edit-subject/edit-subject.component';
import {AlertConst} from '../../../@core/const/AlertConst';
import {AlertService} from '../../../@core/services/alert.service';
import {SUBJECT_DATA_REQUEST} from '../../store/subject.action';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  subjects = [] as SubjectModel[];
  loading = true;
  searchInputData = '';

  constructor(private subjectApiService: SubjectApiService,
              private dialog: MatDialog,
              private alertService: AlertService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private store: Store<fromApp.AppState>) {

    this.store.select(fromApp.getSubjectReducer)
      .subscribe(res => {
          if (res.subjectData.length > 0) {
            this.subjects = res.subjectData;
            this.loading = false;
          }
        }
        , error => console.error(error));

  }

  ngOnInit(): void {

  }

  onDeleteSubject(id: number): void {
    this.alertService.getConfirmationDialog()
      .confirm({
        key: 'subject-delete',
        message: AlertConst.ConfirmationMessage,
        accept: () => {
            this.subjectApiService.Delete(id)
              .subscribe(() => {
                this.store.dispatch(SUBJECT_DATA_REQUEST());
              });
        }
      });
  }

  openSubjectViewDialog(subject: SubjectModel): void {
    this.dialog.open(EditSubjectComponent, {
      width: '100%',
      data: subject
    });
  }

  onFilterApply(): void {

  }

}
