import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserModel} from '../../../@core/interfaces/api/UserModel';

@Component({
  selector: 'app-teacher-view-dialog',
  templateUrl: './teacher-view-dialog.component.html',
  styleUrls: ['./teacher-view-dialog.component.scss']
})
export class TeacherViewDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TeacherViewDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public userModel: UserModel) {
  }

  ngOnInit(): void {
    console.log(this.userModel);
  }

}
