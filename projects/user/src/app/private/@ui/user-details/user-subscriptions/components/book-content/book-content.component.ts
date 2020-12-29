import {Component, OnInit} from '@angular/core';
import {ContentModel} from '../../../../../../@core/interfaces/api/ContentModel';
import {ContentApiService} from '../../shared/service/content-api.service';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.scss']
})
export class BookContentComponent implements OnInit {
  content = [] as ContentModel[];

  constructor(private contentApiService: ContentApiService) {
  }

  ngOnInit(): void {
    this.contentApiService.All().subscribe(res => this.content = res);
  }
}
