import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
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
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.videoUrl = this.sanitizer
      .bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${this.activatedRouter.snapshot.params.id}?autoplay=1`);
    this.notify();
  }

  notify(): void {
    // /user-content
    // {
    //   "contentId": 0,
    //   "userId": 0
    // }
    console.log(+this.activatedRouter.snapshot.params.userId);
    console.log(+this.activatedRouter.snapshot.params.contentId);
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
