import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BookModel} from '../../../../../../../@core/interfaces/api/BookModel';
import {BookApiService} from '../../../../../user-content/book/shared/service/book-api.service';
import {SubjectModel} from '../../../../../../../@core/interfaces/api/SubjectModel';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() subject = {} as SubjectModel;
  $obs = new Observable<BookModel[]>();

  constructor(private bookApiService: BookApiService) {
  }

  ngOnInit(): void {
    this.$obs = this.bookApiService.All();
  }
}
