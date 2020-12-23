import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {SubjectApiService} from '../../../subject/shared/services/subject-api.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilityService} from '../../../@core/services/utility.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addBook = {} as FormGroup;
  subjects = [] as SubjectModel[];
  selectedGrade: any;

  constructor(public dialogRef: MatDialogRef<AddBookComponent>,
              private subjectService: SubjectApiService,
              public utilityService: UtilityService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.ngxUiLoaderService.start();
    this.subjectService.All()
      .subscribe(res => {
        this.subjects = res;
        this.ngxUiLoaderService.stop();
      }, () => {
        this.ngxUiLoaderService.stop();
      });
    this.initForm();
  }

  onAddBooks() {

  }

  private initForm(): void {
    this.addBook = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      medium: new FormControl(null, {validators: [Validators.required]}),
      grade: new FormControl(null, {validators: [Validators.required]}),
      price: new FormControl(null, {validators: [Validators.required]})
    });
  }
}
