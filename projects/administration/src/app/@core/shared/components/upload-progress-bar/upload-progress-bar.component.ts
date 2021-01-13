import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-progress-bar',
  templateUrl: './upload-progress-bar.component.html',
  styleUrls: ['./upload-progress-bar.component.scss']
})
export class UploadProgressBarComponent implements OnInit {

  fileName = '';

  constructor() { }

  ngOnInit(): void {
  }

}
