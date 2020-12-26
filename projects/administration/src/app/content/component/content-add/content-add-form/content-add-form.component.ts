import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContentApiService} from '../../../shared/service/content-api.service';
import {BookModel} from '../../../../@core/interfaces/api/BookModel';

@Component({
  selector: 'app-content-add-form',
  templateUrl: './content-add-form.component.html',
  styleUrls: ['./content-add-form.component.scss']
})
export class ContentAddFormComponent implements OnInit {

  contentAddForm = {} as FormGroup;
  books = [] as BookModel[];


  constructor(private contentApiService: ContentApiService) {
  }

  ngOnInit(): void {
    this.loadBooks();

    this.contentAddForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      chapter: new FormControl(null, [Validators.required]),
      pageNumber: new FormControl(null, [Validators.required]),
      contentURL: new FormControl(null, [Validators.required]),
      bookId: new FormControl(null, [Validators.required]),
    });
  }

  private loadBooks(): void {
    this.contentApiService.allBooks()
      .subscribe(res => this.books = res);
  }

}
