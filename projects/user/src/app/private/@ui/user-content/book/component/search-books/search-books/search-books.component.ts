import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
// import {Observable} from 'rxjs';
import * as fromApp from '../../../../../../../app.reducer';
import {SubjectModel} from '../../../../../../../@core/interfaces/api/SubjectModel';
import {UtilityService} from '../../../../../../../../../../lib/tools/src/lib/utility.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss']
})
export class SearchBooksComponent implements OnInit {
  // $obs = new Observable<SubjectModel[]>();
  subjects = [] as SubjectModel[];

  constructor(public utilityService: UtilityService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    // this.$obs = this.store.select(fromApp.getAllSubjects);
    this.store.select(fromApp.getSubjectReducer).subscribe(subjects => {
      if (subjects.subjectData.length > 0) {
        this.subjects = subjects.subjectData;
      }
    }, error => {
      console.error(error);
    });
  }
}
