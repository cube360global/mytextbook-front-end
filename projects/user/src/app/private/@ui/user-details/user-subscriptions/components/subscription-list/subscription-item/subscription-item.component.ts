import {Component, Input, OnInit} from '@angular/core';
import {UserProfileSubModel} from '../../../../../../../@core/interfaces/api/UserProfileSubModel';
import {DisplayContentService} from '../../../../../../../../../../lib/tools/src/lib/display-content.service';

@Component({
  selector: 'app-subscription-item',
  templateUrl: './subscription-item.component.html',
  styleUrls: ['./subscription-item.component.scss']
})
export class SubscriptionItemComponent implements OnInit {
  @Input() subscription = {} as UserProfileSubModel;

  constructor(public displayContentService: DisplayContentService) {
  }

  ngOnInit(): void {
  }
}
