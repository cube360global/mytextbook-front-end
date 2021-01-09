import {Injectable} from '@angular/core';
import * as tus from 'tus-js-client';

@Injectable({
  providedIn: 'root'
})
export class TusUploadService {

  constructor() {
  }

  public tusUpload(file: File, uploadLink: string): tus.Upload {
    const upload = new tus.Upload(file, {
      uploadUrl: uploadLink,
      endpoint: uploadLink,
      retryDelays: [0, 1000, 3000, 5000],
      onError: error => {
        console.log('Failed: ' + file.name + error);
      },
      onProgress: (bytesUploaded, bytesTotal) => {
        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log(
          'file: :',
          bytesUploaded,
          bytesTotal,
          percentage + '%'
        );
      },
      onSuccess: () => {
        console.log('Download' + file.name + 'from' + upload.url);
      }
    });
    return upload;
  }


}
