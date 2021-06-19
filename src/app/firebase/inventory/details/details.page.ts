import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { FirebaseService } from "./../../../../app/firebase/firebase-integration.service";
import * as firebase from "firebase";
import { DomSanitizer } from '@angular/platform-browser';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable'

// import './../../../../assets/fonts/NotoSansTC-Medium-normal.js';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import items from './../../../../assets/items.json';
import { AuthService } from "./../../../../app/services/auth.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  itemDetail: any;
  result: any;
  private sideNav: boolean = true;
  private itemsData = items;
  uid: string;
  email: string;
  itemList: any;

  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {
    this.uid = this.authService.uid();
    this.email = this.authService.email();
    console.log('itemsData data: ', this.itemsData);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(res => {
      const value = JSON.parse(res.data);
      const values = JSON.parse(res.datas);
      console.log(value, values);
      this.itemDetail = value;
      this.itemList = values;
    })
  }

  showSideNav(value) {
    if (value == true) {
      document.getElementById("grid-container").style.gridTemplateColumns = "30% auto";
    } else {
      document.getElementById("grid-container").style.gridTemplateColumns = "0% 100%";
    }

  }

  updateItems(): void {
    console.log(this.email, this.uid, this.itemDetail);

    const data = JSON.stringify(this.itemDetail);
    console.log(data);

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        email: this.email,
        uid: this.uid
      }
    };
    this.navCtrl.navigateRoot(["/firebase/update#inventory"], navigationExtras);
  }

  deleteItem(value) {
    console.log(this.itemDetail, this.email, this.uid, value);
    this.firebaseService.deleteItems(this.itemDetail.id, this.uid, this.email).then(() => {
      this.onDismiss();
    });
  }

  onDismiss() {
    this.navCtrl.back();
  }
}
