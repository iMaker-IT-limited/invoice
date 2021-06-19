import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as HighCharts from 'highcharts';


import quotes from './../../../../assets/estimatelist.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  contactDetail: any;
  result: any;
  private sideNavInvoice: boolean = true;
  private quotesData = quotes;
  results: any;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {
    console.log('quotes data: ', this.quotesData);
  }

  ngOnInit() {
    // this.route.queryParams.subscribe(res => {
    //   const value = JSON.parse(res.data);
    //   console.log(value);
    //   this.contactDetail = value;
    // })
    this.route.queryParams.subscribe(data => {
      const result = JSON.parse(data.data);
      const results = JSON.parse(data.datas);
      this.result = result;
      this.results = results;
      console.log(data, result, this.result, this.results);
    })
  }

  ionViewDidEnter() {
    // this.barChartPopulation();
    this.barChart();
    // this.pieChart();
  }

  showSideNav(value) {
    if (value == true) {
      document.getElementById("grid-container2").style.gridTemplateColumns = "30% auto";
    } else {
      document.getElementById("grid-container2").style.gridTemplateColumns = "0% 100%";
    }

  }

  onDismiss() {
    this.navCtrl.back();
  }

  // pieChart() {
  //   HighCharts.chart('pieCateChart', {
  //     chart: {
  //       plotBackgroundColor: null,
  //       plotBorderWidth: null,
  //       plotShadow: false,
  //       type: 'pie'
  //     },
  //     title: {
  //       text: ''
  //     },
  //     tooltip: {
  //       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  //     },
  //     plotOptions: {
  //       pie: {
  //         allowPointSelect: true,
  //         cursor: 'pointer',
  //         dataLabels: {
  //           enabled: true,
  //           format: '<b>{point.name}</b>: {point.percentage:.1f} %'
  //         }
  //       }
  //     },
  //     series: [{
  //       name: 'Brands',
  //       colorByPoint: true,
  //       type: undefined,
  //       data: [{
  //         name: 'Chrome',
  //         y: 61.41,
  //         sliced: true,
  //         selected: true
  //       }, {
  //         name: 'Internet Explorer',
  //         y: 11.84
  //       }, {
  //         name: 'Firefox',
  //         y: 10.85
  //       }, {
  //         name: 'Edge',
  //         y: 4.67
  //       }, {
  //         name: 'Safari',
  //         y: 4.18
  //       }, {
  //         name: 'Sogou Explorer',
  //         y: 1.64
  //       }, {
  //         name: 'Opera',
  //         y: 1.6
  //       }, {
  //         name: 'QQ',
  //         y: 1.2
  //       }, {
  //         name: 'Other',
  //         y: 2.61
  //       }]
  //     }]
  //   });
  // }

  barChart() {
    HighCharts.chart('incomenexpenseDetailChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Income and Expense'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      // credits: {
      //   enabled: false
      // },
      series: [{
        type: undefined,
        name: '',
        data: [107000, -31000, 63500, 20300, -2000, 10700, 31000, 63500, 2030, -2000, 31000, 6350]
      }]
    });
  }

  // barChartPopulation() {
  //   HighCharts.chart('userDetailChart', {
  //     chart: {
  //       type: 'bar'
  //     },
  //     title: {
  //       text: 'Total Receivable'
  //     },
  //     xAxis: {
  //       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  //       // categories: ['Africa'],
  //     },
  //     yAxis: {
  //       min: 0,
  //       title: {
  //         text: '(millions)',
  //         align: 'high'
  //       },
  //     },
  //     tooltip: {
  //       valueSuffix: ' millions'
  //     },
  //     plotOptions: {
  //       bar: {
  //         dataLabels: {
  //           enabled: true
  //         }
  //       }
  //     },
  //     series: [{
  //       type: undefined,
  //       name: '',
  //       data: [107, 31, 635, 203, 200]
  //     }
  //       //   , {
  //       //   type: undefined,
  //       //   name: 'Year 1900',
  //       //   data: [133, 156, 947, 408, 6]
  //       // }, {
  //       //   type: undefined,
  //       //   name: 'Year 2000',
  //       //   data: [814, 841, 3714, 727, 31]
  //       // }, {
  //       //   type: undefined,
  //       //   name: 'Year 2016',
  //       //   data: [1216, 1001, 4436, 738, 40]
  //       // }
  //     ]
  //   });
  // }
}
