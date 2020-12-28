import {Component, OnInit} from '@angular/core';
import {SubjectModel} from '../../../../../../../@core/interfaces/api/SubjectModel';
import {UtilityService} from '../../../../../../../../../../lib/tools/src/lib/utility.service';
import {SubjectApiService} from '../../../../../../shared/service/subject-api.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss']
})
export class SearchBooksComponent implements OnInit {
  subjects = [] as SubjectModel[];

  constructor(public utilityService: UtilityService,
              private subjectApiService: SubjectApiService) {
  }

  ngOnInit(): void {
    this.subjectApiService.All().subscribe(res => this.subjects = res);
  }
}
