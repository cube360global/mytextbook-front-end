import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayContentService {
  public isMobile = false;

  constructor() {
    this.isMobile = window.screen.width <= 411;
  }
}
