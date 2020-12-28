import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {MatDialog} from '@angular/material/dialog';
import {SUBJECT_DATA_REQUEST} from '../../store/subject.action';
import {AddSubjectComponent} from '../../component/add-subject/add-subject.component';

@Component({
  selector: 'app-subject-manager',
  templateUrl: './subject-manager.component.html',
  styleUrls: ['./subject-manager.component.scss']
})
export class SubjectManagerComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.store.dispatch(SUBJECT_DATA_REQUEST());
  }

  openAddSubjectDialog(): void {
    this.dialog.open(AddSubjectComponent, {
      width: '400px'
    });
  }


}
