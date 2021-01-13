import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  private uploadedVideo = new Subject();

  constructor() {
  }

  public setUploadVideo(file: any): void {
    this.uploadedVideo.next(file);
  }

  public getUploadVide(): Observable<any> {
    return this.uploadedVideo.asObservable();
  }


}
