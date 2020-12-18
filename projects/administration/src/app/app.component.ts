import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {HelloWorldService} from '../../../lib/tools/src/lib/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'administration';

  constructor(private primengConfig: PrimeNGConfig, private helloWoldService: HelloWorldService) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
