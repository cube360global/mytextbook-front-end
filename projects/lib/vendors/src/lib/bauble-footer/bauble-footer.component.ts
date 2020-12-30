import {Component, OnInit} from '@angular/core';
import {DisplayContentService} from '../../../../tools/src/lib/display-content.service';

@Component({
  selector: 'lib-bauble-footer',
  templateUrl: './bauble-footer.component.html',
  styleUrls: ['./bauble-footer.component.css']
})
export class BaubleFooterComponent implements OnInit {

  constructor(public displayContentService: DisplayContentService) {
  }

  ngOnInit(): void {
  }

}
