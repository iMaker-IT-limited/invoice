import { Component, OnInit, HostBinding, ViewChild } from "@angular/core";
import { ActivatedRoute, NavigationExtras } from "@angular/router";

// import { UserProfileModel } from "./user-profile.model";
import {
  AlertController,
  IonReorderGroup,
  LoadingController,
  ToastController,
  NavController,
  Platform
} from "@ionic/angular";

// import { LanguageService } from "../../language/language.service";
import { TranslateService } from "@ngx-translate/core";
import * as firebase from "firebase";
import { AuthService } from "./../../../../app/services/auth.service";
import { FirebaseService } from "./../../../../app/firebase/firebase-integration.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Storage } from "@ionic/storage";

// contacts
// import contactsdata from './../../../../assets/contacts.json';
// items
import itemsdata from './../../../../assets/items.json';
// estimates
import estimatesdata from './../../../../assets/estimates.json';
// invoices
import invoicesdata from './../../../../assets/invoices.json';

import data from './../../../../assets/company.json';

import { Papa } from 'ngx-papaparse';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import quotes from './../../../../assets/estimatelist.json';
import { map, tap } from "rxjs/operators";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  // ngx-table start
  // private contacts = contactsdata;
  private invoices = invoicesdata;
  private sideNavInvoice: boolean = true;
  private quotesData = quotes;

  private companies = data;
  tableStyle = 'dark';
  customRowClass = false;
  companiesArr: any[];
  downloadURL: string;
  email: string;
  uid: string;
  csvData = [];
  headerRow = [];
  contactsList: any;
  csv: string;
  contacts: any;
  headerRowDemo: any[] = [];
  csvDemoData: any[] = [];
  contact: unknown;
  democsv: string;
  readyBody: any;

  // ngx-table end

  constructor(
    private authService: AuthService,
    private plt: Platform,
    private http: HttpClient,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private firebaseService: FirebaseService,
    public translate: TranslateService,
    public alertController: AlertController,
    private storage: Storage,
    private papa: Papa,

  ) {
    this.email = this.authService.email();
    this.uid = this.authService.uid();
    console.log(this.companies, this.invoices);
    console.log('quotes data: ', this.quotesData);
    this.loadDemoCSV();
  }

  ngOnInit(): void { }

  ionViewWillEnter() {

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    var close = document.getElementById("close");

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    close.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    this.getCsvData();
    //  this.readContact();

    // this.http.get(this.downloadURL, {
    //   responseType: 'text'
    // }).subscribe(
    //   data => this.extractData(data),
    //   err => console.log('error', err)
    // )

  }

  refresh() {
    this.firebaseService.readContactsinCSV(this.uid, this.email).subscribe(res => {

      //  this.downloadURL = res[0]['downloadURL'];
      this.downloadURL = res.userData['downloadURL'];
      console.log('csv import value: ', res, this.downloadURL);
    })

    this.http.get(this.downloadURL, {
      responseType: 'text'
    }).subscribe(
      data => console.log(data),
      err => console.log(err)

      // this.extractData(data),
    )
  }

  onCreateContact() {
    this.navCtrl.navigateRoot(["/firebase/create#contacts"]);
  }

  onDetailPage(value, values) {
    console.log(value);
    const data = JSON.stringify(value);
    console.log(data);
    const datas = JSON.stringify(values);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        datas: datas
      }
    };
    this.navCtrl.navigateRoot(["/firebase/contacts#details"], navigationExtras);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  // Step 1: bulk import data from the csv file contact list
  //  <app-uploader-bulk-import [id]="uid"></app-uploader-bulk-import>

  // Step 2: convert the data from csv to json and to be shown on the  
  getCsvData() {

    this.firebaseService.readContactsinCSV(this.uid, this.email).subscribe(res => {
      this.contact = res.userData;
      if (res.userData) {
        console.log('res');
        console.log(res.userData);
        this.downloadURL = res.userData['downloadURL'];
        console.log('csv import value: ', res, this.downloadURL);
        this.loadCSV();
        setTimeout(() => {
          this.exportCSV();
          console.log('export CSV');
        }, 2000);

        setTimeout(() => {
          this.convertCSVtoJSON();
        }, 4000)

      } else if (!res.userData) {
        console.log('res');
        console.log(res.userData);

      } else {
        console.error(res);

      }

    })

  }

  // try out the async await funciton
  firstFunction() {
    return new Promise((resolve, reject) => {
      let y = 0
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          y++
        }
        console.log('loop completed')
        resolve(y)
      }, 2000)
    })
  }

  async secondFunction() {
    console.log('before promise call')
    //3. Await for the first function to complete
    let result = await this.firstFunction()
    console.log('promise resolved: ' + result)
    console.log('next step')
  };

  loadCSV() {

    console.log('load CSV', this.downloadURL);

    function readBody(xhr) {
      var data;
      if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;

      } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
      } else {
        data = xhr.response;
      }
      return data;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', this.downloadURL, true);

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        console.log(readBody(xhr));
        this.readyBody = readBody(xhr);
        this.extractData(this.readyBody);
      }


    }
    // xhr.setRequestHeader("Content-Type", "text/html; charset=UTF-8");
    // xhr.setRequestHeader('Content-type', 'application/json');
    // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    //  xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Allow');
    //   xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET,POST');
    // xhr.setRequestHeader('Allow', "GET");
    xhr.send();



    // this.http.get(this.downloadURL, { responseType: 'text' })
    //   .pipe(
    //     tap( // Log the result or error
    //       data => this.extractData(data),
    //       //  data => console.log(data),
    //       error => error.log(this.downloadURL, error)
    //     )
    //   );
  }

  extractData(res) {

    console.log('res is => ', res);

    let csvData = res || '';
    this.papa.parse(csvData, {
      complete: parsedData => {

        console.log(parsedData);
        //  console.log(parsedData.data.splice(0, 1)[0]);
        this.headerRow = parsedData.data.splice(0, 1)[0];
        this.csvData = parsedData.data;
        console.log(this.headerRow);
      }
    })
    console.log(res, this.csvData);
  }

  exportCSV() {
    let csv = this.papa.unparse({
      fields: this.headerRow,
      data: this.csvData
    });
    this.csv = csv;
    console.log('header row: ', this.headerRow);
    console.log('csv: ', this.csvData);
    //    console.log('contacts: ', this.contacts);

    // if (this.plt.is('cordova')) {
    //   console.log('cordova');

    // } else {
    //   console.log('not cordova');

    //   var blob = new Blob([csv]);
    //   var a = window.document.createElement('a');
    //   a.href = window.URL.createObjectURL(blob);
    //   a.download = 'contacts.csv';
    //   document.body.appendChild(a);
    //   a.click();
    //   document.body.removeChild(a);
    // }
  }

  realDownLoadCSV() {
    if (this.plt.is('cordova')) {
      console.log('cordova');

    } else {
      console.log('not cordova');

      var blob = new Blob([this.csv]);
      var a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'contacts.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  convertCSVtoJSON() {

    console.log(this.csv);
    // our dummy CSV let csvStr = `ONE,TWO,THREE,FOUR,FIVE "escape""quote","escape,comma",no quotes,"double""""quote","quote"",comma" true,123,null,undefined,"[false,456,null]" true,123,null,undefined,{"one":"two"}`; 
    // running Papa Parse, you just pass it your csv. 
    // our dummy CSV 
    // let csvStr = `ONE,TWO,THREE,FOUR,FIVE "escape""quote","escape,comma",no quotes,"double""""quote","quote"",comma" true,123,null,undefined,"[false,456,null]" true,123,null,undefined,{"one":"two"}`;
    // running Papa Parse, you just pass it your csv. 
    let csv = this.papa.parse(this.csv, {
      delimiter: "", // auto-detect 
      newline: "", // auto-detect 
      quoteChar: '"Name"',
      escapeChar: '"',
      header: true, // creates array of {head:value} 
      dynamicTyping: false, // convert values to numbers if possible
      skipEmptyLines: true
    });
    // the arrays of csv fields are in the data property 

    this.contacts = csv.data;
    console.log('contacts: ', this.contacts);

  }

  readContact() {
    console.log(this.email, this.uid);
    this.firebaseService.readContacts(this.uid, this.email).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.contactsList = data;
    });
  }

  getRowClass(row) {
    // console.log('class: ', row);
    const isMale = row.gender == 'male';

    if (!this.customRowClass) {
      return {};
    }
    return {
      'male-row': isMale,
      'female-row': !isMale
    }
  }

  private loadDemoCSV() {
    this.http.get('./assets/demo.csv', {
      responseType: 'text'
    }).subscribe(
      data => //console.log(data),
        this.extractDemoData(data),
      err => console.log('error', err)
    )
  }

  extractDemoData(res) {
    let csvData = res || '';
    console.log(csvData);

    this.papa.parse(csvData, {

      complete: parsedData => {
        console.log(parsedData);
        //  console.log(parsedData.data.splice(0, 1)[0]);
        this.headerRowDemo = parsedData.data.splice(0, 1)[0];
        this.csvDemoData = parsedData.data;

        console.log(this.headerRowDemo);

      }
    })
  }

  exportDemoCSV() {
    let democsv = this.papa.unparse({
      fields: this.headerRowDemo,
      data: this.csvDemoData
    });
    this.democsv = democsv;
    console.log('demo header row: ', this.headerRowDemo);
    console.log('csv: ', this.csvDemoData);
    // console.log('contacts: ', this.contacts);

    if (this.plt.is('cordova')) {
      console.log('cordova');

    } else {
      console.log('not cordova');

      var blob = new Blob([democsv]);
      var a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'contacts.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }


}
