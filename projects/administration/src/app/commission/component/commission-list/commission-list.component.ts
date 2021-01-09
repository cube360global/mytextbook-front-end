import {Component, OnInit} from '@angular/core';
import {CommissionApiService} from '../../shared/service/commission-api.service';
import {CommissionModel} from '../../../@core/interfaces/api/CommissionModel';
import {CommissionPayModel} from '../../../@core/interfaces/api/CommissionPayModel';

@Component({
  selector: 'app-commission-list',
  templateUrl: './commission-list.component.html',
  styleUrls: ['./commission-list.component.scss']
})
export class CommissionListComponent implements OnInit {

  commissions = [] as CommissionModel[];
  selectedCommissions = [] as CommissionModel[];
  payCommissions = [] as CommissionPayModel[];

  constructor(private commissionApiService: CommissionApiService) {
  }

  ngOnInit(): void {
    this.commissionApiService.all().subscribe(res => {
      console.log(res);
      this.commissions = res;
      console.log(this.commissions);
    });
  }

  pay(): void {
    console.log(this.selectedCommissions);

    // const b = [] as CommissionPayModel;
    this.selectedCommissions.forEach(commission => {
      this.payCommissions.push({
        amount: commission.amount,
        referralCount: commission.referralCount,
        userId: commission.id
      });
    });
    console.log(this.payCommissions);
    this.commissionApiService.post(this.payCommissions)
      .subscribe(res => {
        console.log(res);
      });
  }

}
