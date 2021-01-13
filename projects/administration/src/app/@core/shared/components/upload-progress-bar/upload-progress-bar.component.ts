import {Component, Input, OnInit} from '@angular/core';
import {UploadVideoArrModel} from '../../../interfaces/UploadVideoArrModel';

@Component({
  selector: 'app-upload-progress-bar',
  templateUrl: './upload-progress-bar.component.html',
  styleUrls: ['./upload-progress-bar.component.scss']
})
export class UploadProgressBarComponent implements OnInit {

  @Input() UploadFileData  = {} as UploadVideoArrModel;

  constructor() { }

  ngOnInit(): void {
  }

}
