import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Validators, FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import * as jsPDF from 'jspdf';
import 'jspdf-autotable'

import { FirebaseService } from "../../firebase-integration.service";
import { EstimateModel, ItemModel } from "./../../invoice.model";
import { AuthService } from "./../../../../app/services/auth.service";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Papa } from "ngx-papaparse";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  createEstimateForm: FormGroup;
  estimateData: EstimateModel = new EstimateModel();
  itemSelected: ItemModel = new ItemModel();
  uid: string;
  email: string;
  customeditemsList: any;

  arr = [];
  /////////////////////////
  reimburshForm: FormGroup;
  salesListArray: FormArray;

  itemsListArray: FormArray;

  showItem = false;
  itemIndex: any;
  RateValue: any;
  ListArray: FormArray;
  value: any;
  downloadURL: any;
  csvData: any;
  headerRow: any;
  csv: string;
  contacts: any;
  totalPrice: any;
  customernotes: any;
  termsandconditions: any;
  estimate_date: any;
  e_d: Date;
  es_d: string;
  item: any;
  today: number;
  /////////////////////////
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    public firebaseService: FirebaseService,
    private http: HttpClient,
    private papa: Papa
  ) {
    this.uid = this.authService.uid();
    this.email = this.authService.email();
  }

  ngOnInit() {

    this.buildForm();

    this.es_d = new Date().toISOString();
  }

  ionViewWillEnter() {

    this.today = Date.now();

    this.getCsvData();
    // this.getTermsandConditions();
    // this.getCustomerNotes();
  }

  getCustomerNotes() {
    console.log(this.email, this.uid);

    this.firebaseService.readCustomerNote(this.uid).subscribe(res => {
      console.log(res['userData']);
      this.customernotes = res['userData']['customernotes'];
    })

  }

  getTermsandConditions() {
    console.log(this.email, this.uid);

    this.firebaseService.readTermsandConditions(this.uid).subscribe(res => {
      console.log(res['userData']);
      this.termsandconditions = res['userData']['termsandconditions'];
    })

  }
  // get preset customer list 
  getCsvData() {

    this.firebaseService.readContactsinCSV(this.uid, this.email).subscribe(res => {
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
    })

  }

  loadCSV() {
    console.log('load CSV');
    this.http.get(this.downloadURL, {
      responseType: 'text'
    }).subscribe(
      data => this.extractData(data),
      err => console.log('error', err)
    )
  }

  extractData(res) {
    let csvData = res || '';

    this.papa.parse(csvData, {
      complete: parsedData => {
        this.csvData = parsedData.data;

        console.log(parsedData);
        //  console.log(parsedData.data.splice(0, 1)[0]);

        this.headerRow = parsedData.data.splice(0, 1)[0];

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
    console.log(this.csv, csv.data);
    this.contacts = csv.data;
  }
  // end of get preset customer list

  submitForm(value) {
    console.log(value);
  }

  createEstimate() {
    //  console.log(this.uid, this.email, this.createEstimateForm.);
    console.log(this.totalPrice);

    //  this.reimburshForm.value['Total'] = this.totalPrice;
    console.log(this.reimburshForm.value);
    this.firebaseService.createExpense(this.uid, this.email, this.reimburshForm.value).then(() => {
      this.dismissModal();
    });
  }

  dismissModal() {
    this.navCtrl.navigateBack('/firebase/expenses');
  }

  onEstimateDate(event) {
    console.log(event.detail.value);
    this.estimate_date = event.detail.value;

  }

  ////////////////////////////////
  buildForm() {
    console.log(this.e_d, this.customernotes, this.termsandconditions);

    // Date
    // Category Name
    // Amount
    // Reference# = estimate number
    // Notes
    // Customer Name

    this.reimburshForm = this.formBuilder.group({
      "Customer Name": new FormControl(),
      "Expense Date": new FormControl(this.today),
      "Expense Category": new FormControl(),
      "Expense Amount": new FormControl(),
      "Total": new FormControl(),
      "Notes": new FormControl(),

    })

    // this.reimburshForm = this.formBuilder.group({
    //   "category_name": new FormControl(),
    //   "amount": new FormControl(),
    //   "Estimate Date": new FormControl(this.es_d),
    //   "Estimate ID": new FormControl(Date.now()),
    //   "Estimate Number": new FormControl(`SQ-${Date.now()}`),
    //   "Estimate Status": new FormControl('draft'),
    //   "Customer ID": new FormControl(Date.now()),
    //   "Expiry Date": new FormControl(this.e_d),
    //   "PurchaseOrder": new FormControl(""),
    //   "Currency Code": new FormControl(""),
    //   "Exchange Rate": new FormControl(),
    //   "Discount Type": new FormControl(""),
    //   "Is Discount Before Tax": new FormControl(),
    //   "Entity Discount Percent": new FormControl(),
    //   "Is Inclusive Tax": new FormControl(),
    //   "SubTotal": new FormControl(),
    //   "Total": new FormControl(this.totalPrice),
    //   "Adjustment": new FormControl(),
    //   "Notes": new FormControl(this.customernotes),
    //   // d.setDate(d.getDate() + 50);
    //   "Terms": new FormControl(),
    //   "Terms & Conditions": new FormControl(this.termsandconditions),
    //   "Customer Name": new FormControl(""),
    //   "Project Name": new FormControl(""),
    //   // orderNumber: this.formBuilder.control(null),
    //   // same as estimate number
    //   "Project ID": new FormControl(`SQ-${Date.now()}`),
    //   // salesPerson: this.formBuilder.control(null),
    //   "Sales person": new FormControl(""),
    //   "Billing Address": new FormControl(""),
    //   "Billing City": new FormControl(""),
    //   "Billing State": new FormControl(""),
    //   "Billing Country": new FormControl(""),
    //   "Billing Code": new FormControl(""),
    //   "Billing Fax": new FormControl(""),
    //   "Template Name": new FormControl(""),
    //   "Adjustment Description": new FormControl(""),
    //   "Shipping Address": new FormControl(""),
    //   "Shipping City": new FormControl(""),
    //   "Shipping State": new FormControl(""),
    //   "Shipping Country": new FormControl(""),
    //   "Shipping Code": new FormControl(""),
    //   "Shipping Fax": new FormControl(""),
    //   "Source": new FormControl(),
    //   "Reference ID": new FormControl(""),
    //   "Last Sync Time": new FormControl(""),
    //   "Shipping Charge": new FormControl(),
    //   "Shipping Charge Tax ID": new FormControl(""),
    //   "Shipping Charge Tax Amount": new FormControl(""),
    //   "Shipping Charge Tax Name": new FormControl(""),
    //   "Shipping Charge Tax %": new FormControl(""),
    //   "Shipping Charge Tax Type": new FormControl(""),
    //   "Item Name": new FormControl(""),
    //   "Item Desc": new FormControl(""),
    //   "Quantity": new FormControl(),
    //   "Discount": new FormControl(),
    //   "Discount Amount": new FormControl(),
    //   "Item Tax Amount": new FormControl(),
    //   "Item Total": new FormControl(),
    //   "Account": new FormControl(""),
    //   "SKU": new FormControl(""),
    //   "Usage unit": new FormControl(""),
    //   "Item Price": new FormControl(),
    //   "Tax ID": new FormControl(""),
    //   "Item Tax": new FormControl(""),
    //   "Item Tax %": new FormControl(""),
    //   "Item Tax Type": new FormControl(""),
    //   // this one would be the first item in the group array
    //   salesList: this.formBuilder.array([
    //     this.formBuilder.group({
    //       //   itemName: this.formBuilder.control(null),
    //       //   itemDetail: this.formBuilder.control(null),
    //       quantity: this.formBuilder.control(null),
    //       Rate: this.formBuilder.control(null),
    //       // tax: this.formBuilder.control(null),
    //       amount: this.formBuilder.control(null),
    //       "Description": this.formBuilder.control(null),
    //       // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
    //       "Item Name": this.formBuilder.control(null),
    //       // "Last Sync Time": this.formBuilder.control(this.itemSelected["Last Sync Time"]),
    //       // "Product Type": this.formBuilder.control(this.itemSelected["Product Type"]),
    //       // "Rate": this.formBuilder.control(this.itemSelected.Rate),
    //       // "Reference ID": this.formBuilder.control(this.itemSelected["Reference ID"]),
    //       // "Source": this.formBuilder.control(this.itemSelected.Source),
    //       // "Status": this.formBuilder.control(this.itemSelected.Status),
    //       // "Tax1 Name": this.formBuilder.control(this.itemSelected["Tax1 Name"]),
    //       // "Tax1 Percentage": this.formBuilder.control(this.itemSelected["Tax1 Percentage"]),
    //       // "Tax1 Type": this.formBuilder.control(this.itemSelected["Tax1 Type"]),
    //       // "Usage unit": this.formBuilder.control(this.itemSelected["Usage unit"]),
    //       // "id": this.formBuilder.control(this.itemSelected['id']),
    //     }),
    //   ]),
    // });

    this.salesListArray = this.reimburshForm.get('salesList') as FormArray;

  }

  jsonstringify(value) {
    return JSON.stringify(value)
  }

  onCreateInventoryItemPage() {
    this.navCtrl.navigateForward('/firebase/create#expense');
  }
}
