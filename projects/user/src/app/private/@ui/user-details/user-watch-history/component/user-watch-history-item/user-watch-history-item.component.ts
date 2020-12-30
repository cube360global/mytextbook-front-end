import {Component, Input, OnInit} from '@angular/core';
import {UserContentModel} from '../../../../../../@core/interfaces/api/UserContentModel';

@Component({
  selector: 'app-user-watch-history-item',
  templateUrl: './user-watch-history-item.component.html',
  styleUrls: ['./user-watch-history-item.component.scss']
})
export class UserWatchHistoryItemComponent implements OnInit {
  @Input() content = {} as UserContentModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
