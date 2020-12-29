import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {ContentModel} from '../../../../../../@core/interfaces/api/ContentModel';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  contentData = {} as ContentModel;
  videoUrl: any;

  constructor(private sanitizer: DomSanitizer,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.contentData = window.history.state;
    this.videoUrl = this.sanitizer
      .bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${this.activatedRouter.snapshot.params.id}`);
  }
}
