import {Component, Input, OnInit} from '@angular/core';
import {CommissionModel} from '../../../../@core/interfaces/api/CommissionModel';

@Component({
  selector: 'app-teacher-sub-view-dialog',
  templateUrl: './teacher-sub-view-dialog.component.html',
  styleUrls: ['./teacher-sub-view-dialog.component.scss']
})
export class TeacherSubViewDialogComponent implements OnInit {
  @Input() commissions = [] as CommissionModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
