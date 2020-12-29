import {Component, Input, OnInit} from '@angular/core';
import {ContentModel} from '../../../../../../../../../../../administration/src/app/@core/interfaces/api/ContentModel';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  @Input() video = {} as ContentModel;

  constructor() {
  }

  ngOnInit(): void {
  }
}
