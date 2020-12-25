import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from '../../../../@core/interfaces/api/BookModel';
import {UserSubscriptionService} from '../../../shared/service/user-subscription.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book = {} as BookModel;

  constructor(public userSubscriptionService: UserSubscriptionService) {
  }

  ngOnInit(): void {
  }

  onAddToServiceList(bookId: number): void {
    this.userSubscriptionService.addToSelectedBookList(bookId);
  }
}

