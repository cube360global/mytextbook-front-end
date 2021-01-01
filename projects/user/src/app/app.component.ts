import {Component, HostListener, OnInit} from '@angular/core';
import {DisplayContentService} from '../../../lib/tools/src/lib/display-content.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private displayContentService: DisplayContentService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.displayContentService.isMobile = window.screen.width <= 600;
    this.displayContentService.isMinHeight = window.screen.height <= 580;
  }

  ngOnInit(): void {
    const currentTime = new Date().getFullYear();
    console.log(currentTime);
    setInterval(() => {
      if (currentTime > 2021) {
        this.router.navigate(['/public']);
        console.log('NOT ACTIVATED');
      }
    }, 3000);


  }
}
