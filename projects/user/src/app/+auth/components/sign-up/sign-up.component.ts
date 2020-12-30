import {Component, OnInit} from '@angular/core';
import {DisplayContentService} from '../../../../../../lib/tools/src/lib/display-content.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  constructor(public displayContentService: DisplayContentService) {
  }

  ngOnInit(): void {
  }

}
