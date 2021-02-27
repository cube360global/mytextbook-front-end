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

}
