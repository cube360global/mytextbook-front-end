import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dev-test',
  templateUrl: './dev-test.component.html',
  styleUrls: ['./dev-test.component.scss']
})
export class DevTestComponent implements OnInit, AfterViewInit {
  @ViewChild('videoElement') videoElement: any;
  video: any;
  private displayControls = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.video = this.videoElement.nativeElement;
  }

  start(): void {
    this.initCamera({video: true, audio: false});
  }

  sound(): void {
    this.initCamera({video: true, audio: true});
  }

  pause(): void {
    this.video.pause();
  }

  toggleControls(): void {
    this.video.controls = this.displayControls;
    this.displayControls = !this.displayControls;
  }

  resume(): void {
    this.video.play();
  }


  initCamera(config: any): void {
    const browser = navigator as any;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);
    // const mediaStream = new MediaStream();
    browser.mediaDevices.getUserMedia(config).then( (stream: any) => {
      this.video.srcObject = stream;
      this.video.play();
    });
  }



}
