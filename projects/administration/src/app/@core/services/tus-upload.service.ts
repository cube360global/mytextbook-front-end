import {Injectable} from '@angular/core';
import * as tus from 'tus-js-client';
import {UploadVideoArrModel} from '../interfaces/UploadVideoArrModel';
import {AlertService} from './alert.service';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TusUploadService {

  public uploadComplete = new Subject<any>();
  public fileUploadArray = [] as UploadVideoArrModel[];


  constructor(private alertService: AlertService) {
  }

  public tusUpload(file: File, uploadLink: string, index: number): tus.Upload {

    const upload = new tus.Upload(file, {
      uploadUrl: uploadLink,
      endpoint: uploadLink,
      retryDelays: [0, 1000, 3000, 5000],
      onError: error => {
        console.log('Failed: ' + file.name + error);
        this.alertService.showError(file.name + ' ' + error);
      },
      onProgress: (bytesUploaded, bytesTotal) => {
        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        this.fileUploadArray[index].progress = +percentage;
      },
      onSuccess: () => {
        this.fileUploadArray.splice(index, 1);
        this.alertService.showSuccess(file.name + ' ' + 'Successfully uploaded to vimeo');
        this.uploadComplete.next();
        console.log('Download' + file.name + 'from' + upload.url);
      }
    });
    return upload;
  }


}
