import { Component, OnInit } from '@angular/core';

import { ChartsService } from './../services/charts.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private chartsService: ChartsService) { }

  ngOnInit() {
    this.initElements();
  }

  initElements() {
    this.chartsService.chart_example('graph-01', {});
  }

}
