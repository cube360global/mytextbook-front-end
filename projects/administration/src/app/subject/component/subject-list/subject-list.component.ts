import {Component, OnInit} from '@angular/core';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';
import {SubjectApiService} from '../../shared/services/subject-api.service';
import {MatDialog} from '@angular/material/dialog';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {EditSubjectComponent} from '../edit-subject/edit-subject.component';

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
    // this.filterForm = new FormGroup({
    //   district: new FormControl(),
    //   school: new FormControl(),
    //   subject: new FormControl(),
    //   grade: new FormControl(),
    //   salesLead: new FormControl(),
    // });

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
