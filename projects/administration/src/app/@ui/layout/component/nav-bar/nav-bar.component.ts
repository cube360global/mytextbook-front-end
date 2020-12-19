import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('drawer')
  drawer!: MatDrawer;
  showFiller = false;

  constructor() {
  }

  ngOnInit(): void {
    this.drawer.opened = true;
  }

}
