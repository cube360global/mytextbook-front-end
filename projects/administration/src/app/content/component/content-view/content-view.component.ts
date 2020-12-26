import {Component, OnInit} from '@angular/core';
import {ContentModel} from '../../../@core/interfaces/api/ContentModel';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss']
})
export class ContentViewComponent implements OnInit {

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
