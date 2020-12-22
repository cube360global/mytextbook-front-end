import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {UserApiService} from '../../shared/service/user-api.service';

@Component({
  selector: 'app-add-bulk-user',
  templateUrl: './add-bulk-user.component.html',
  styleUrls: ['./add-bulk-user.component.scss']
})
export class AddBulkUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddBulkUserComponent>,
              private userApiService: UserApiService) {
  }

  ngOnInit(): void {
  }

  myUploader($event: any): void {
    const file = $event.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append('file', file, file.name);
    console.log(formData.getAll('file'));
    this.userApiService.bulkUpload(formData)
      .subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
    this.dialogRef.close();
  }
}
