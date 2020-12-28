import {Injectable} from '@angular/core';
import {KeyValueModel} from '../../../../administration/src/app/@core/interfaces/KeyValueModel';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
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

  mediums = [
    {name: 'Sinhala', code: 'sinhala'},
    {name: 'English', code: 'english'},
    {name: 'Tamil', code: 'tamil'}
  ] as KeyValueModel[];

  status = [
    {name: 'Active', code: true},
    {name: 'Deactivate', code: false}
  ];

  constructor() {
  }
}
