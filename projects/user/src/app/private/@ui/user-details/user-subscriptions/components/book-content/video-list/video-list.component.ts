import {Component, Input, OnInit} from '@angular/core';
import {ContentModel} from '../../../../../../../@core/interfaces/api/ContentModel';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() content = {} as ContentModel;

  constructor() {
  }

  ngOnInit(): void {
  }
}
