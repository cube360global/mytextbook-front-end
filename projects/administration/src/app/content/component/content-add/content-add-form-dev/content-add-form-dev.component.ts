import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TusUploadService} from '../../../../@core/services/tus-upload.service';

@Component({
  selector: 'app-content-add-form-dev',
  templateUrl: './content-add-form-dev.component.html',
  styleUrls: ['./content-add-form-dev.component.scss']
})
export class ContentAddFormDevComponent implements OnInit {

  uploadedFiles: any[] = [];

  constructor(private http: HttpClient, private tusFileUpload: TusUploadService) {
  }

  ngOnInit(): void {
  }

  // onUpload($event: any): void {
  //   console.log($event);
  // }
  //
  // onBasicUpload($event: any): void {
  //   console.log($event);
  //   const file = $event.currentFiles[0];
  //   const size = $event.currentFiles[0].size;
  //   const name = $event.currentFiles[0].name;
  //   const body = {} as ContentModel;
  //   body.videoSize = size;
  //   body.videoName = name;
  //
  //   this.http.post<any>('http://localhost:5000/api/vimeo/upload-video', body).subscribe(res => {
  //     // console.log(res.upload.upload_link);
  //     console.log(res);
  //     this.tusFileUpload.tusUpload(file, res.upload_url).start();
  //   });
  // }
}