import {Component, Inject, OnInit} from '@angular/core';
import {BookModel} from '../../../@core/interfaces/api/BookModel';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  editSubjectForm = {} as FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public bookModel: BookModel) {
  }

  ngOnInit(): void {
    // console.log(this.bookModel);
    // // this.editSubjectForm = new FormGroup(
    // // })
  }

}
