import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Validators, FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import * as jsPDF from 'jspdf';
import 'jspdf-autotable'

import { FirebaseService } from "../../firebase-integration.service";
import { EstimateModel } from "./../../invoice.model";
import { AuthService } from "./../../../../app/services/auth.service";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Papa } from "ngx-papaparse";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  createEstimateForm: FormGroup;
  estimateData: EstimateModel = new EstimateModel();
  uid: string;
  email: string;
  estimatesDetail: EstimateModel = new EstimateModel();
  customeditemsList: any;

  //////////////////////////
  reimburshForm: FormGroup;
  salesListArray: FormArray;
  downloadURL: any;
  csvData: any;
  headerRow: any;
  csv: string;
  contacts: any;
  value: any;
  totalPrice: number;
  //////////////////////////
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private papa: Papa
  ) {
    this.uid = this.authService.uid();
    this.email = this.authService.email();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(res => {
      const value = JSON.parse(res.data);
      console.log(value);
      this.estimatesDetail = value;
    })

    this.readItems();
    this.buildForm();
  }
  ionViewWillEnter() {
    this.getCsvData();
  }
  updateEstimate() {
    // update the salesList array --> need to update
    console.log(this.uid, this.email, this.estimatesDetail, this.reimburshForm.value);
    console.log(this.totalPrice);

    this.reimburshForm.value['Total'] = this.totalPrice;

    this.firebaseService.updateEstimates(this.estimatesDetail['id'], this.uid, this.email, this.reimburshForm.value).then(() => {
      this.dismissModal();
    });
  }

  dismissModal() {
    this.navCtrl.navigateBack('/firebase/quotes');
  }

  testTablePDF() {
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

  buildForm() {
    this.reimburshForm = this.formBuilder.group({
      "Estimate Date": new FormControl(this.estimatesDetail["Estimate Date"]),
      "Estimate ID": new FormControl(this.estimatesDetail["Estimate ID"]),
      "Estimate Number": new FormControl(this.estimatesDetail["Estimate Number"]),
      "Estimate Status": new FormControl('revised'),
      "Customer ID": new FormControl(this.estimatesDetail["Customer ID"]),
      "Expiry Date": new FormControl(this.estimatesDetail["Expiry Date"]),
      "PurchaseOrder": new FormControl(this.estimatesDetail.PurchaseOrder),
      "Currency Code": new FormControl(this.estimatesDetail["Currency Code"]),
      "Exchange Rate": new FormControl(this.estimatesDetail["Exchange Rate"]),
      "Discount Type": new FormControl(this.estimatesDetail["Discount Type"]),
      "Is Discount Before Tax": new FormControl(this.estimatesDetail["Is Discount Before Tax"]),
      "Entity Discount Percent": new FormControl(this.estimatesDetail["Entity Discount Percent"]),
      "Is Inclusive Tax": new FormControl(this.estimatesDetail["Is Inclusive Tax"]),
      "SubTotal": new FormControl(this.estimatesDetail.SubTotal),
      "Total": new FormControl(),
      "Adjustment": new FormControl(this.estimatesDetail.Adjustment),
      "Notes": new FormControl(this.estimatesDetail.Notes),
      'Terms': new FormControl(this.estimatesDetail.Terms),
      "Terms & Conditions": new FormControl(this.estimatesDetail["Terms & Conditions"]),
      "Customer Name": new FormControl(this.estimatesDetail["Customer Name"]),
      "Project Name": new FormControl(this.estimatesDetail["Project Name"]),
      // orderNumber: this.formBuilder.control(null),
      "Project ID": new FormControl(this.estimatesDetail["Project ID"]),
      // salesPerson: this.formBuilder.control(null),
      "Sales person": new FormControl(this.estimatesDetail["Sales person"]),
      "Billing Address": new FormControl(this.estimatesDetail["Billing Address"]),
      "Billing City": new FormControl(this.estimatesDetail["Billing City"]),
      "Billing State": new FormControl(this.estimatesDetail["Billing State"]),
      "Billing Country": new FormControl(this.estimatesDetail["Billing Country"]),
      "Billing Code": new FormControl(this.estimatesDetail["Billing Code"]),
      "Billing Fax": new FormControl(this.estimatesDetail["Billing Fax"]),
      "Template Name": new FormControl(this.estimatesDetail["Template Name"]),
      "Adjustment Description": new FormControl(this.estimatesDetail["Adjustment Description"]),
      "Shipping Address": new FormControl(this.estimatesDetail["Shipping Address"]),
      "Shipping City": new FormControl(this.estimatesDetail["Shipping City"]),
      "Shipping State": new FormControl(this.estimatesDetail["Shipping State"]),
      "Shipping Country": new FormControl(this.estimatesDetail["Shipping Country"]),
      "Shipping Code": new FormControl(this.estimatesDetail["Shipping Code"]),
      "Shipping Fax": new FormControl(this.estimatesDetail["Shipping Fax"]),
      "Source": new FormControl(this.estimatesDetail.Source),
      "Reference ID": new FormControl(this.estimatesDetail["Reference ID"]),
      "Last Sync Time": new FormControl(this.estimatesDetail["Last Sync Time"]),
      "Shipping Charge": new FormControl(this.estimatesDetail["Shipping Charge"]),
      "Shipping Charge Tax ID": new FormControl(this.estimatesDetail["Shipping Charge Tax ID"]),
      "Shipping Charge Tax Amount": new FormControl(this.estimatesDetail["Shipping Charge Tax Amount"]),
      "Shipping Charge Tax Name": new FormControl(this.estimatesDetail["Shipping Charge Tax Name"]),
      "Shipping Charge Tax %": new FormControl(this.estimatesDetail["Shipping Charge Tax %"]),
      "Shipping Charge Tax Type": new FormControl(this.estimatesDetail["Shipping Charge Tax Type"]),
      "Item Name": new FormControl(this.estimatesDetail["Item Name"]),
      "Item Desc": new FormControl(this.estimatesDetail["Item Desc"]),
      "Quantity": new FormControl(this.estimatesDetail.Quantity),
      "Discount": new FormControl(this.estimatesDetail.Discount),
      "Discount Amount": new FormControl(this.estimatesDetail["Discount Amount"]),
      "Item Tax Amount": new FormControl(this.estimatesDetail["Item Tax Amount"]),
      "Item Total": new FormControl(this.estimatesDetail["Item Total"]),
      "Account": new FormControl(this.estimatesDetail.Account),
      "SKU": new FormControl(this.estimatesDetail.SKU),
      "Usage unit": new FormControl(this.estimatesDetail["Usage unit"]),
      "Item Price": new FormControl(this.estimatesDetail["Item Price"]),
      "Tax ID": new FormControl(this.estimatesDetail["Tax ID"]),
      "Item Tax": new FormControl(this.estimatesDetail["Item Total"]),
      "Item Tax %": new FormControl(this.estimatesDetail["Item Tax %"]),
      "Item Tax Type": new FormControl(this.estimatesDetail["Item Tax Type"]),
      // this one would be the first item in the group array
      // salesList: this.formBuilder.array([
      //   this.formBuilder.group({
      //     quantity: this.formBuilder.control(null),
      //     Rate: this.formBuilder.control(null),
      //     amount: this.formBuilder.control(null),
      //     "Description": this.formBuilder.control(null),
      //     "Item Name": this.formBuilder.control(null),
      //   }),
      // ]),
      salesList: this.formBuilder.array(this.estimatesDetail.salesList.map(data => this.createSalesList(data)))

    });
    //    this.salesListArray = this.estimatesDetail.salesList as FormArray;
    this.salesListArray = this.reimburshForm.get('salesList') as FormArray;
    console.log(this.salesListArray.value);
  }

  createSalesList(contact): FormGroup {
    return this.formBuilder.group({
      quantity: [contact.quantity],
      Rate: [contact.Rate],
      amount: [contact.amount],
      Description: [contact.Description],
      "Item Name": [contact['Item Name']],
    });
  }

  returnProduct(a: number, b: number) {
    return a * b
  }

  jsonstringify(value) {
    return JSON.stringify(value)
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

  // call items list data

  readItems(): void {
    console.log(this.email, this.uid);
    this.firebaseService.readItems(this.uid, this.email).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.customeditemsList = data;
      console.log(this.customeditemsList, this.customeditemsList.length);
    });
  }

  onPush(value) {
    console.log(value);
    // this.salesListArray.push(value);
    let formGroup: FormGroup = this.formBuilder.group({

      //   itemName: this.formBuilder.control(null),
      //   itemDetail: this.formBuilder.control(null),
      quantity: this.formBuilder.control(0),
      Rate: this.formBuilder.control(value['Rate']),
      // tax: this.formBuilder.control(null),
      amount: this.formBuilder.control(1 * value['Rate']),

      "Description": this.formBuilder.control(value['Description']),
      // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
      "Item Name": this.formBuilder.control(value['Item Name']),
      // "Last Sync Time": this.formBuilder.control(this.itemSelected["Last Sync Time"]),
      // "Product Type": this.formBuilder.control(this.itemSelected["Product Type"]),
      // "Rate": this.formBuilder.control(this.itemSelected.Rate),
      // "Reference ID": this.formBuilder.control(this.itemSelected["Reference ID"]),
      // "Source": this.formBuilder.control(this.itemSelected.Source),
      // "Status": this.formBuilder.control(this.itemSelected.Status),
      // "Tax1 Name": this.formBuilder.control(this.itemSelected["Tax1 Name"]),
      // "Tax1 Percentage": this.formBuilder.control(this.itemSelected["Tax1 Percentage"]),
      // "Tax1 Type": this.formBuilder.control(this.itemSelected["Tax1 Type"]),
      // "Usage unit": this.formBuilder.control(this.itemSelected["Usage unit"]),
      // "id": this.formBuilder.control(this.itemSelected['id']),
    });

    // this.arr.push(formGroup.value);

    // this.arr = this.reimburshForm.get('salesList') as FormArray;
    this.value = value;
    console.log(this.salesListArray.value, value);
    this.addSalesListItem();
  }

  addSalesListItem() {

    console.log(this.value, this.salesListArray.value);
    let formGroup: FormGroup = this.formBuilder.group({
      quantity: this.formBuilder.control(0),
      Rate: this.formBuilder.control(this.value['Rate']),
      amount: this.formBuilder.control(this.value['amount']),
      "Description": this.formBuilder.control(this.value['Description']),
      "Item Name": this.formBuilder.control(this.value['Item Name']),
    });

    this.salesListArray.push(formGroup);
    this.salesListArray = this.reimburshForm.get('salesList') as FormArray;
    console.log(this.salesListArray.value);
  }

  onCreateInventoryItemPage() {
    this.navCtrl.navigateForward('/firebase/create%23inventory');
  }

  removeSalesListItem(index) {
    console.log(index);

    this.salesListArray.removeAt(index);
    this.salesListArray = this.reimburshForm.get('salesList') as FormArray;
    console.log(this.salesListArray.value);
    this.totalPrice = this.returnSum();
    console.log(this.totalPrice);

  }

  onQtyChange(e, Rate, f: FormGroup): void {
    // const qty = (e.target as HTMLInputElement).value;
    // console.log(qty, Rate);
    // const product = Number(qty) * Rate
    // console.log(product);
    // f.get('amount').setValue(qty * price);

    const qty = (e.target as HTMLInputElement).value;
    const price = f.get('Rate').value;
    const product = Number(qty) * price;
    console.log(f, product);
    f.get('amount').setValue(Number(qty) * price);

    this.totalPrice = this.returnSum();
    console.log(this.totalPrice);

  }

  onPriceChange(e, quantity, f: FormGroup): void {
    // const price = (e.target as HTMLInputElement).value;
    // console.log(quantity, price);
    // const product = Number(price) * quantity;
    // console.log(product);

    //  f.get('amount').setValue(qty * price);
    const qty = f.get('quantity').value;
    const price = (e.target as HTMLInputElement).value;
    const product = qty * Number(price);
    console.log(f, product);
    f.get('amount').setValue(qty * Number(price));

    this.totalPrice = this.returnSum();
    console.log(this.totalPrice);

  }

  returnSum() {
    let totalPrice = 0;
    //   console.log(this.reimburshForm.value.salesList);
    this.reimburshForm.value.salesList.forEach(element => {

      if (element.amount) {
        //   console.log(element.amount);
        totalPrice += element.amount;
      }

    });
    console.log(totalPrice);
    return totalPrice;
  }

  // addSalesListItem() {
  //   let formGroup: FormGroup = this.formBuilder.group({
  //     itemDetail: this.formBuilder.control(null),
  //     quantity: this.formBuilder.control(null),
  //     rate: this.formBuilder.control(null),
  //     tax: this.formBuilder.control(null),
  //     amount: this.formBuilder.control(null),
  //   });

  //   this.salesListArray.push(formGroup);

  //   console.log(this.salesListArray.value);
  // }
}

  // onReset() {
  //   this.createEstimateForm = new FormGroup({
  //     name: new FormControl("", Validators.required),
  //     phone: new FormControl("", Validators.required),
  //     email: new FormControl(
  //       "",
  //       Validators.compose([
  //         Validators.required,
  //         Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
  //       ])
  //     ),
  //     cate_1: new FormControl(""),
  //     cate_2: new FormControl(""),
  //     cate_3: new FormControl(""),
  //     cate_4: new FormControl(""),
  //     average_speed: new FormControl(0),
  //     reply_rate: new FormControl(0),
  //     editor_choice: new FormControl(),
  //     class_size: new FormControl({ lower: 10, upper: 42 }),
  //     target_user_age: new FormControl({ lower: 10, upper: 16 }),
  //     class_length: new FormControl({ lower: 10, upper: 42 }),
  //     teaching_materials: new FormControl("rental"),
  //     company_intro: new FormControl(),
  //     tutor_qual: new FormControl(),
  //     competition_exp: new FormControl()
  //   });
  // }