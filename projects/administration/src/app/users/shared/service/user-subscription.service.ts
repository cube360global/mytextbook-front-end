import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSubscriptionService {

  private selectedBooksList = [] as number[];

  constructor() {
  }

  addToSelectedBookList(bookId: number): void {
    this.selectedBooksList.push(bookId);
  }

  removeFromList(bookId: number): void {
    const index = this.selectedBooksList.indexOf(bookId);
    this.selectedBooksList.splice(index, 1);
  }

  isBookExist(bookId: number): boolean{
    return this.selectedBooksList.includes(bookId);
  }


}
