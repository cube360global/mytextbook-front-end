import {Injectable} from '@angular/core';
import {KeyValueModel} from '../interfaces/KeyValueModel';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  // countries = [
  //   {name: 'Australia', code: 'AU'},
  //   {name: 'Brazil', code: 'BR'},
  //   {name: 'China', code: 'CN'},
  //   {name: 'Egypt', code: 'EG'},
  //   {name: 'France', code: 'FR'},
  //   {name: 'Germany', code: 'DE'},
  //   {name: 'India', code: 'IN'},
  //   {name: 'Japan', code: 'JP'},
  //   {name: 'Spain', code: 'ES'},
  //   {name: 'United States', code: 'US'}
  // ] as KeyValueModel[];

  gradeList = [
    {name: 'Grade 01', code: '1'},
    {name: 'Grade 02', code: '2'},
    {name: 'Grade 03', code: '3'},
    {name: 'Grade 04', code: '4'},
    {name: 'Grade 05', code: '5'},
    {name: 'Grade 06', code: '6'},
    {name: 'Grade 07', code: '7'},
    {name: 'Grade 08', code: '8'},
    {name: 'Grade 09', code: '9'},
    {name: 'Grade 10', code: '10'},
    {name: 'Grade 11', code: '11'},
    {name: 'Grade 12', code: '12'},
    {name: 'Grade 13', code: '13'},
  ] as KeyValueModel[];

  constructor() {
    // this.getGradeList();
  }


}
