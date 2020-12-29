import {Component, OnInit} from '@angular/core';
import {ContentModel} from '../../../../../../../../../../../administration/src/app/@core/interfaces/api/ContentModel';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  contentData = {} as ContentModel;
  videoUrl: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.contentData = window.history.state;
    this.videoUrl = this.sanitizer
      .bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${this.contentData.contentURL}`);
  }
}
