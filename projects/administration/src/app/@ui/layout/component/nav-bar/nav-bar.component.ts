import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../app.reducer';


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
            style({opacity: 0}),
            animate('1s ease-out',
              style({opacity: 1}))
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

  userEmail = '';
  showFiller = true;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.store.select(fromApp.getAuthState)
      .subscribe(tokenData => {
        this.userEmail = tokenData.tokenDecodeModel.email;
      });

  }

}
