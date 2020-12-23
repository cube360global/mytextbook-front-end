import {Component, OnInit} from '@angular/core';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';
import {SubjectApiService} from '../../shared/services/subject-api.service';
import {MatDialog} from '@angular/material/dialog';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';

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

  openUserViewDialog(userId: string): void {
    // this.ngxUiLoaderService.start();
    // this.bookApiService.Get(userId)
    //   .subscribe(res => {
    //     this.dialog.open(UserViewerDialogComponent, {
    //       width: '100%',
    //       data: res
    //     });
    //     this.ngxUiLoaderService.stop();
    //   }, () => {
    //     this.ngxUiLoaderService.stop();
    //   });

  }


  onFilterApply(): void {

  }

}
