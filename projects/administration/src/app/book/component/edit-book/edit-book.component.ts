import {Component, Injectable, OnInit} from '@angular/core';
import {BookModel} from '../../../@core/interfaces/api/BookModel';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  constructor(@Injectable() public bookModel: BookModel) {
  }

  ngOnInit(): void {
    console.log(this.bookModel);
  }

}
