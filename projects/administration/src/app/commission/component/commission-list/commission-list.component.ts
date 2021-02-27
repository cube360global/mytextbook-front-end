import {Component, OnInit} from '@angular/core';
import {CommissionApiService} from '../../shared/service/commission-api.service';
import {CommissionModel} from '../../../@core/interfaces/api/CommissionModel';
import {CommissionPayModel} from '../../../@core/interfaces/api/CommissionPayModel';
import {AlertConst} from '../../../@core/const/AlertConst';
import {AlertService} from '../../../@core/services/alert.service';

@Component({
  selector: 'app-commission-list',
  templateUrl: './commission-list.component.html',
  styleUrls: ['./commission-list.component.scss']
})
export class CommissionListComponent implements OnInit {

  commissions = [] as CommissionModel[];
  selectedCommissions = [] as CommissionModel[];
  payCommissions = [] as CommissionPayModel[];

  constructor(private commissionApiService: CommissionApiService,
              private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.loadCommissions();
  }

  pay(): void {
    this.selectedCommissions.forEach(commission => {
      this.payCommissions.push({
        amount: commission.amount,
        referralCount: commission.referralCount,
        userId: commission.id
      });
    });

    this.alertService.getConfirmationDialog()
      .confirm({
        key: 'ce-100',
        message: AlertConst.ConfirmationMessage,
        accept: () => {
          this.sendToServer(this.payCommissions);
        }
      });
  }

  loadCommissions(): void {
    this.commissionApiService.all().subscribe(res => {
      this.commissions = res;
    });
  }

  sendToServer(payCommissions: CommissionPayModel[]): void {
    this.commissionApiService.post(payCommissions)
      .subscribe(res => {
        this.payCommissions = [];
        this.loadCommissions();
      });
  }

}
