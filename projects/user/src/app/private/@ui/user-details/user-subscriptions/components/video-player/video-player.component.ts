import {Component, OnInit} from '@angular/core';
import {ContentModel} from '../../../../../../@core/interfaces/api/ContentModel';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
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
