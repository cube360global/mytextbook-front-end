import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserModel} from '../../../@core/interfaces/api/UserModel';


@Component({
  selector: 'app-user-viewer-dialog',
  templateUrl: './user-viewer-dialog.component.html',
  styleUrls: ['./user-viewer-dialog.component.scss']
})
export class UserViewerDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<UserViewerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userModel: UserModel) {
  }

  ngOnInit(): void {

  }

}
