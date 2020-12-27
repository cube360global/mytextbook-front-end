import {Component, OnInit} from '@angular/core';
import {DisplayContentService} from '../../../../../../lib/tools/src/lib/display-content.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(public displayService: DisplayContentService) {
  }

  ngOnInit(): void {
  }

}
