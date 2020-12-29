import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookAndContentModel} from '../../../../../../@core/interfaces/api/BookAndContentModel';
import {BookModel} from '../../../../../../@core/interfaces/api/BookModel';
import {ContentApiService} from '../../shared/service/content-api.service';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.scss']
})
export class BookContentComponent implements OnInit {
  @Input() bookId = '' as string;
  bookContent = {} as BookAndContentModel;

  constructor(private contentApiService: ContentApiService,
              private activatedRouter: ActivatedRoute) {
    this.bookContent.book = {} as BookModel;
  }

  ngOnInit(): void {
    const bookId = this.activatedRouter.snapshot.params.id;
    this.contentApiService.getBookContentByBookId(bookId).subscribe(res => this.bookContent = res);
  }
}
