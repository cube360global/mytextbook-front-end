import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'lib-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css']
})
export class MatConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MatConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: boolean) {
  }

  ngOnInit(): void {

  }

  onClickYes(): void {
    this.data = true;
    this.dialogRef.close(true);

  }

  onClickNo(): void {
    this.dialogRef.close(false);
  }
}
