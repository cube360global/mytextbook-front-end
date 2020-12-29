import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-watch-history-item',
  templateUrl: './user-watch-history-item.component.html',
  styleUrls: ['./user-watch-history-item.component.scss']
})
export class UserWatchHistoryItemComponent implements OnInit {
  @Input() content: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
