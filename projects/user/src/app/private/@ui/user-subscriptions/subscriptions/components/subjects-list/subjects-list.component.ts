import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SubjectApiService} from '../../../../../shared/service/subject-api.service';
import {SubjectModel} from '../../../../../../@core/interfaces/api/SubjectModel';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit {
  $obs = new Observable<SubjectModel[]>();

  constructor(private subjectApiService: SubjectApiService) {
  }

  ngOnInit(): void {
    this.$obs = this.subjectApiService.All();
  }
}
