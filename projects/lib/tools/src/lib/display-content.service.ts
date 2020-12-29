import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayContentService {
  public isMobile = false;
  public isMinHeight = false;

  constructor() {
    this.isMobile = window.screen.width <= 600;
    this.isMinHeight = window.screen.height <= 580;
  }
}
