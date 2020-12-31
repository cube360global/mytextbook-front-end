import {Component, OnInit} from '@angular/core';
import {DisplayContentService} from '../../../../../../lib/tools/src/lib/display-content.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public displayService: DisplayContentService) {
  }

  ngOnInit(): void {
  }

}

