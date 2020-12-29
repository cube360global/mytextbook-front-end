import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BookModel} from '../../../../../../@core/interfaces/api/BookModel';
import {BookApiService} from '../../shared/service/book-api.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  $obs = new Observable<BookModel[]>();

  constructor(private bookApiService: BookApiService) {
  }

  ngOnInit(): void {
    this.$obs = this.bookApiService.All();
  }
}
