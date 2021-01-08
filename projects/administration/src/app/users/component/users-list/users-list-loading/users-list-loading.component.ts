import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users-list-loading',
  templateUrl: './users-list-loading.component.html',
  styleUrls: ['./users-list-loading.component.scss']
})
export class UsersListLoadingComponent implements OnInit {

  loadingData = [{}, {}, {}, {}, {}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
