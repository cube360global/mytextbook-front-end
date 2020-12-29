import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {ControllerConst} from '../../../../../../../../../lib/tools/src/lib/global/ControllerConst';
import {ApiUtilityToolService} from '../../../../../../../../../lib/tools/src/lib/api-utility-tool.service';
// @ts-ignore
// import Player from '@vimeo/player';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  // @ViewChild('player_container') playerContainer = {} as ElementRef;
  // private player: Player;

  videoUrl: any;

  constructor(private sanitizer: DomSanitizer,
              private activatedRouter: ActivatedRoute,
              private apiUtilityToolService: ApiUtilityToolService) {
  }

  ngOnInit(): void {
    this.videoUrl = this.sanitizer
      .bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${this.activatedRouter.snapshot.params.id}?autoplay=1`);
    this.notify();
  }

  notify(): void {
    const userId = +this.activatedRouter.snapshot.params.userId;
    const contentId = +this.activatedRouter.snapshot.params.contentId;
    this.apiUtilityToolService.POST([ControllerConst.UserContent], {contentId, userId}, true, false)
      .subscribe(res => res);
  }

  ngAfterViewInit(): void {
    // this.player = new Player(this.playerContainer.nativeElement);
    // this.player.play().then(() => {
    //   // the video was played
    // }).catch((error: any) => {
    //   switch (error.name) {
    //     case 'PasswordError':
    //       // the video is password-protected and the viewer needs to enter the
    //       // password first
    //       break;
    //     case 'PrivacyError':
    //       // the video is private
    //       break;
    //     default:
    //       // some other error occurred
    //       break;
    //   }
    // });
  }
}
