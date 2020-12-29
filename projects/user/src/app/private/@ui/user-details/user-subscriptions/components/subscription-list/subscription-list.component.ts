import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {SubjectApiService} from '../../../../../shared/service/subject-api.service';
import * as fromApp from '../../../../../../app.reducer';
import {UserProfileSubModel} from '../../../../../../@core/interfaces/api/UserProfileSubModel';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss']
})
export class SubscriptionListComponent implements OnInit {
  $obs = new Observable<UserProfileSubModel[]>();

  constructor(private subjectApiService: SubjectApiService, private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.$obs = this.store.select(fromApp.getUserSubscription);
  }
}
