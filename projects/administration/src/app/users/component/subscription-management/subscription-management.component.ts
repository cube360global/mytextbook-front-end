import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../app.reducer';
import {SubjectUser} from '../../../@core/interfaces/SubjectUser';
import {SubjectModel} from '../../../@core/interfaces/api/SubjectModel';
import {UtilityService} from '../../../@core/services/utility.service';
import {BookModel} from '../../../@core/interfaces/api/BookModel';
import {KeyValueModel} from '../../../@core/interfaces/KeyValueModel';
import {BookApiService} from '../../../book/shared/services/book-api.service';
import {AlertService} from '../../../@core/services/alert.service';
import {UserSubscriptionService} from '../../shared/service/user-subscription.service';
import {UserApiService} from '../../shared/service/user-api.service';
import {PostSubscription} from '../../../@core/interfaces/api/PostSubscription';


@Component({
  selector: 'app-subscription-management',
  templateUrl: './subscription-management.component.html',
  styleUrls: ['./subscription-management.component.scss']
})
export class SubscriptionManagementComponent implements OnInit {

  subjects = [] as SubjectModel[];
  selectedSubject = {} as SubjectModel;
  selectedMedium = {} as KeyValueModel;
  selectedGrades = {} as KeyValueModel;

  // Post Data
  bookModel = [] as BookModel[];

  constructor(public dialogRef: MatDialogRef<SubscriptionManagementComponent>,
              private store: Store<fromApp.AppState>,
              private bookService: BookApiService,
              public userSubscriptionService: UserSubscriptionService,
              private userApiService: UserApiService,
              private alertService: AlertService,
              public utilityService: UtilityService,
              @Inject(MAT_DIALOG_DATA) public data: SubjectUser) {
  }

  ngOnInit(): void {
    this.subjects = this.data.subjectList;
  }

  onSearchClick(): void {
    const bookSearchModel = {
      grade: +this.selectedGrades.code,
      medium: this.selectedMedium.code,
      subjectId: +this.selectedSubject.id
    };
    this.bookService.search(bookSearchModel)
      .subscribe(res => {
        this.bookModel = res;
        console.log(res);
      });
  }

  onAddSubscription(): void {
    this.alertService
      .getConfirmationDialog().confirm({
      message: `Do you really want to add selected ${this.userSubscriptionService.getSelectedBookList().length}
      subscriptions to ${this.data.user.firstName + ' ' + this.data.user.lastName}
      `,
      accept: () => {
        const userBook = {} as PostSubscription;
        userBook.bookIds = this.userSubscriptionService.getSelectedBookList();
        userBook.userId = this.data.user.id;
        this.userApiService.addSubscriptionToUser(userBook)
          .subscribe(() => {
            this.dialogRef.close();
          });
      }
    });
  }
}
