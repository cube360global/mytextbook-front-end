import {Injectable} from '@angular/core';
import * as tus from 'tus-js-client';
import {UploadVideoArrModel} from '../interfaces/UploadVideoArrModel';
import {UUID} from 'angular2-uuid';


@Injectable({
  providedIn: 'root'
})
export class TusUploadService {

  fileUploadArray = [] as UploadVideoArrModel[];


  constructor() {
  }

  public tusUpload(file: File, uploadLink: string): tus.Upload {
    const uuid = UUID.UUID();

    this.fileUploadArray.push({id: uuid, fileName: file.name, progress: 0});
    const index = this.fileUploadArray.findIndex(value => value.id = uuid);

    const upload = new tus.Upload(file, {
      uploadUrl: uploadLink,
      endpoint: uploadLink,
      retryDelays: [0, 1000, 3000, 5000],
      onError: error => {
        console.log('Failed: ' + file.name + error);
      },
      onProgress: (bytesUploaded, bytesTotal) => {
        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        this.fileUploadArray[index].progress = +percentage;

        console.log(this.fileUploadArray);

        // console.log(
        //   'file: :',
        //   bytesUploaded,
        //   bytesTotal,
        //   percentage + '%'
        // );
      },
      onSuccess: () => {
        this.fileUploadArray.splice(index, 1);
        console.log('Download' + file.name + 'from' + upload.url);
      }
    });
    return upload;
  }


}
