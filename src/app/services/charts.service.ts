import { Injectable } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

import { AppGlobal } from './../app.global';

@Injectable()
export class ChartsService {

  private colors: any =  [
				"#4690FF",
				"#FCD202",
				"#e55f5f",
				"#B0DE09",
				"#d0a0fd",
				"#1e726e",
				"#d5e11a",
				"#51e8ff",
				"#9e56e6",
				"#e55f88",
				"#4690ff",
				"#e66f4b",
				"#b1cc1d",
				"#33beb8",
				"#d06483",
				"#7ad9ff",
				"#f8b83e",
				"#b74c6c",
				"#8da317",
				"#eb8b6f",
				"#5d8de1",
				"#ac59cd",
				"#62c489",
				"#6a7a11",
				"#6587df",
				"#fdac4b",
				"#5e338a",
				"#63ada9",
				"#ec8f8f",
				"#7db1ff",
				"#33dcce",
				"#44885f",
				"#b07986",
				"#9769c6",
				"#81cfa0"
      ];

  constructor(private AmCharts: AmChartsService) {}

  chart_example(container, data) {

    this.AmCharts.makeChart(container,{
    	"type": "serial",
    	"categoryField": "category",
    	"startDuration": 1,
    	"categoryAxis": {
    		"gridPosition": "start"
    	},
    	"valueScrollbar": {
    		"enabled": true
    	},
    	"chartCursor": {
    		"enabled": true
    	},
    	"chartScrollbar": {
    		"enabled": true
    	},
    	"trendLines": [],
    	"graphs": [
    		{
    			"balloonText": "[[title]] of [[category]]:[[value]]",
    			"fillAlphas": 0.7,
    			"id": "AmGraph-1",
    			"lineAlpha": 0,
    			"title": "graph 1",
    			"valueField": "column-1"
    		},
    		{
    			"balloonText": "[[title]] of [[category]]:[[value]]",
    			"fillAlphas": 0.7,
    			"id": "AmGraph-2",
    			"lineAlpha": 0,
    			"title": "graph 2",
    			"valueField": "column-2"
    		}
    	],
    	"guides": [],
    	"valueAxes": [
    		{
    			"id": "ValueAxis-1",
    			"title": "Axis title"
    		}
    	],
    	"allLabels": [],
    	"balloon": {},
    	"legend": {
    		"enabled": true
    	},
    	"titles": [
    		{
    			"id": "Title-1",
    			"size": 15,
    			"text": "Chart Title"
    		}
    	],
    	"dataProvider": [
    		{
    			"category": "category 1",
    			"column-1": 8,
    			"column-2": 5
    		},
    		{
    			"category": "category 2",
    			"column-1": 6,
    			"column-2": 7
    		},
    		{
    			"category": "category 3",
    			"column-1": 2,
    			"column-2": 3
    		},
    		{
    			"category": "category 4",
    			"column-1": 1,
    			"column-2": 3
    		},
    		{
    			"category": "category 5",
    			"column-1": 2,
    			"column-2": 1
    		},
    		{
    			"category": "category 6",
    			"column-1": 3,
    			"column-2": 2
    		},
    		{
    			"category": "category 7",
    			"column-1": 6,
    			"column-2": 8
    		}
    	]
    });
  }

}
