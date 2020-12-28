import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-private-nav-bar',
  templateUrl: './private-nav-bar.component.html',
  styleUrls: ['./private-nav-bar.component.scss']
})
export class PrivateNavBarComponent implements OnInit {

  @Input() drawer = {} as MatDrawer;

  constructor() {
  }

  ngOnInit(): void {

  }

}
