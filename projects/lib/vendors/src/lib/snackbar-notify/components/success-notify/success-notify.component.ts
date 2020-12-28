import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'lib-success-notify',
  templateUrl: './success-notify.component.html',
  styleUrls: ['./success-notify.component.css']
})
export class SuccessNotifyComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
              public snackBarRef: MatSnackBarRef<SuccessNotifyComponent>) {
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
