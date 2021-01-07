import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-table-loader',
  templateUrl: './table-loader.component.html',
  styleUrls: ['./table-loader.component.css']
})
export class TableLoaderComponent implements OnInit {

  @Input() colCount = 2;
  tempArr = [this.colCount];
  constructor() { }

  ngOnInit(): void {
  }

}
