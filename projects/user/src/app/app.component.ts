import {Component, HostListener, Inject} from '@angular/core';
import {DisplayContentService} from '../../../lib/tools/src/lib/display-content.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private displayContentService: DisplayContentService){}


  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.displayContentService.isMobile = window.screen.width <= 411;
  }
}
