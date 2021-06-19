import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable'

import quotes from './../../../../assets/estimatelist.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  result: any;
  private sideNavInvoice: boolean = true;
  private quotesData = quotes;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {


    console.log('quotes data: ', this.quotesData);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      const result = JSON.parse(data.data);
      this.result = result;
      console.log(data, result, this.result);
    })
  }

  testtablePDF() {
    var columns = [
      { title: "ID", dataKey: "id" },
      { title: "Name", dataKey: "name" },
      { title: "Country", dataKey: "country" },

    ];
    var rows = [
      { "id": 1, "name": "Shaw", "country": "Tanzania" },
      { "id": 2, "name": "Nelson", "country": "Kazakhstan" },
      { "id": 3, "name": "Garcia", "country": "Madagascar" },

    ];

    var doc = new jsPDF('p', 'pt');
    doc.autoTable(columns, rows, {
      // theme: 'striped' | 'grid' | 'plain' | 'css' = 'striped'
      theme: 'striped',
      styles: { fillColor: [129, 216, 208] },
      columnStyles: {
        id: { fillColor: 255 }
      },
      margin: { top: 160 },
      beforePageContent: function (data) {
        doc.text("Header", 40, 30);
      }
    });
    doc.save('table.pdf');
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

}
