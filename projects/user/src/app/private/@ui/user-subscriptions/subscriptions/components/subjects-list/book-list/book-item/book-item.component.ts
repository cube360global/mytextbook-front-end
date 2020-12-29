import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from '../../../../../../../../@core/interfaces/api/BookModel';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book = {} as BookModel;

  constructor() {
  }

  ngOnInit(): void {
  }
}
