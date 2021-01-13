import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {VideoUploadModel} from '../interfaces/VideoUploadModel';

@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  private uploadedVideo = new Subject<VideoUploadModel>();

  constructor() {
  }

  public setUploadVideo(file: VideoUploadModel): void {
    this.uploadedVideo.next(file);
  }

  public getUploadVide(): Observable<VideoUploadModel> {
    return this.uploadedVideo.asObservable();
  }


}
