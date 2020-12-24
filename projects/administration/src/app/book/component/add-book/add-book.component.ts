import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {SubjectApiService} from '../../../subject/shared/services/subject-api.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilityService} from '../../../@core/services/utility.service';

interface City {
  name: string;
  code: string;
}



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {



  countries = [] as any[];

  cities = [] as City[];


  addBook = {} as FormGroup;
  subjects = [] as SubjectModel[];
  selectedGrade: any;
  selectedCityCode: any;
  selectedCountry: any;

  constructor(public dialogRef: MatDialogRef<AddBookComponent>,
              private subjectService: SubjectApiService,
              public utilityService: UtilityService,
              private ngxUiLoaderService: NgxUiLoaderService) {
  }

  ngOnInit(): void {

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];


    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
    ];


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

  onAddBooks(): void{

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
