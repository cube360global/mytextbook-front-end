import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

@Component({
  selector: 'app-dev-test',
  templateUrl: './dev-test.component.html',
  styleUrls: ['./dev-test.component.scss']
})
export class DevTestComponent implements OnInit {
  // @ViewChild('videoElement') videoElement: any;
  // video: any;
  // private displayControls = false;
  //
  // constructor() {
  // }
  //
  // ngOnInit(): void {
  //
  // }
  //
  // ngAfterViewInit(): void {
  //   this.video = this.videoElement.nativeElement;
  // }
  //
  // start(): void {
  //   this.initCamera({video: true, audio: false});
  // }
  //
  // sound(): void {
  //   this.initCamera({video: true, audio: true});
  // }
  //
  // pause(): void {
  //   this.video.pause();
  // }
  //
  // toggleControls(): void {
  //   this.video.controls = this.displayControls;
  //   this.displayControls = !this.displayControls;
  // }
  //
  // resume(): void {
  //   this.video.play();
  // }
  //
  //
  // initCamera(config: any): void {
  //   const browser = navigator as any;
  //
  //   browser.getUserMedia = (browser.getUserMedia ||
  //     browser.webkitGetUserMedia ||
  //     browser.mozGetUserMedia ||
  //     browser.msGetUserMedia);
  //   // const mediaStream = new MediaStream();
  //   browser.mediaDevices.getUserMedia(config).then( (stream: any) => {
  //     this.video.srcObject = stream;
  //     this.video.play();
  //   });
  // }

  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId = '';
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage = {} as WebcamImage;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    this.deviceId = deviceId;
  }


}
