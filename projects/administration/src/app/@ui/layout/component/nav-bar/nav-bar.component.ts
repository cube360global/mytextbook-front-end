import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('1s ease-out',
              style({  opacity: 1 }))
          ]
        )
      ]
    ),
    trigger('toggleClick', [
      state('true', style({
        backgroundColor: '#D5D5D5'
      })),
      state('false', style({
        backgroundColor: '#ffffff'
      })),
      transition('true => false', animate('1s linear')),  // animation timing
      transition('false => true', animate('1s linear'))
    ])
  ]
})
export class NavBarComponent implements OnInit {

  showFiller = false;

  constructor() {
  }

  ngOnInit(): void {

  }

}
