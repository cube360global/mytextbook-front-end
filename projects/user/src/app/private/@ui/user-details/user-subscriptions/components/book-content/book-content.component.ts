import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookAndContentModel} from '../../../../../../@core/interfaces/api/BookAndContentModel';
import {BookModel} from '../../../../../../@core/interfaces/api/BookModel';
import {ContentApiService} from '../../shared/service/content-api.service';
import {BookSearchApiModel} from '../../../../../../@core/interfaces/api/BookSearchApiModel';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.scss']
})
export class BookContentComponent implements OnInit {
  @Input() bookId = '' as string;
  bookContent = {} as BookAndContentModel;
  name = null;
  chapterNo = '';
  pageNo = '';

  constructor(private contentApiService: ContentApiService,
              private activatedRouter: ActivatedRoute) {
    this.bookContent.book = {} as BookModel;
  }

  ngOnInit(): void {
    this.bookId = this.activatedRouter.snapshot.params.id;
    this.contentApiService.getBookContentByBookId(this.bookId).subscribe(res => this.bookContent = res);
  }

  onSearchClick(): void {
    const searchData = {} as BookSearchApiModel;
    searchData.bookId = +this.bookId;
    searchData.chapter = +this.chapterNo;
    searchData.pageNumber = +this.pageNo;
    searchData.name = name;
    console.log(searchData);
    this.contentApiService.searchBookContentByBookId(searchData)
      .subscribe(res => console.log(res));
  }

}
