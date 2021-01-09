import {Component, OnInit} from '@angular/core';
import {CommissionApiServices} from '../../shared/service/commission-api.service';

@Component({
  selector: 'app-commission-list',
  templateUrl: './commission-list.component.html',
  styleUrls: ['./commission-list.component.scss']
})
export class CommissionListComponent implements OnInit {

  constructor(private commissionApiService: CommissionApiServices) {
  }

  ngOnInit(): void {
    this.commissionApiService.all().subscribe(res => {
      console.log(res);
    });
  }

}
