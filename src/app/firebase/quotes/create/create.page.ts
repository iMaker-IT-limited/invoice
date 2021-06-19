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
  companylogisticprofile: unknown;
  shipper: any;
  consignee: any;
  port_of_loading: any;
  port_of_discharge: any;
  HBL: any;
  MBL: any;
  carriage_by: any;
  vessel: any;
  container: any;
  date_of_order: any;
  your_reference: any;
  terms_of_delivery: any;
  marks_no: any;
  pieces: any;
  packaging: any;
  description_of_goods: any;
  weight: any;
  cbm: any;
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
    this.readItems();
    this.buildForm();

    this.es_d = new Date().toISOString();
  }

  ionViewWillEnter() {
    this.getCsvData();
    this.getLogisticCompanyProfile();
    this.getTermsandConditions();
    this.getCustomerNotes();
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

  getLogisticCompanyProfile() {

    console.log(this.email, this.uid);
    this.firebaseService.readLogisticCompanyProfile(this.uid).subscribe(res => {

      console.log(res['userData']);
      this.companylogisticprofile = res['userData'];
      this.shipper = res['userData']['shipper'];
      this.consignee = res['userData']['consignee'];
      this.port_of_loading = res['userData']['port_of_loading'];
      this.port_of_discharge = res['userData']['port_of_discharge'];
      this.HBL = res['userData']['HBL'];
      this.MBL = res['userData']['MBL'];
      this.carriage_by = res['userData']['carriage_by'];
      this.vessel = res['userData']['vessel'];
      this.container = res['userData']['container'];
      this.date_of_order = res['userData']['date_of_order'];
      this.your_reference = res['userData']['your_reference'];
      this.terms_of_delivery = res['userData']['terms_of_delivery'];
      this.marks_no = res['userData']['marks_no'];
      this.pieces = res['userData']['pieces'];
      this.packaging = res['userData']['packaging'];
      this.description_of_goods = res['userData']['description_of_goods'];
      this.weight = res['userData']['weight'];
      this.cbm = res['userData']['cbm'];

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

    this.reimburshForm.value['Total'] = this.totalPrice;
    console.log(this.reimburshForm.value);
    this.firebaseService.createEstimates(this.uid, this.email, this.reimburshForm.value).then(() => {
      this.dismissModal();
    });
  }

  dismissModal() {
    this.navCtrl.navigateBack('/firebase/quotes');
  }

  // testTablePDF() {
  //   var columns = [
  //     { title: "ID", dataKey: "id" },
  //     { title: "Name", dataKey: "name" },
  //     { title: "Country", dataKey: "country" },

  //   ];
  //   var rows = [
  //     { "id": 1, "name": "Shaw", "country": "Tanzania" },
  //     { "id": 2, "name": "Nelson", "country": "Kazakhstan" },
  //     { "id": 3, "name": "Garcia", "country": "Madagascar" },

  //   ];

  //   var doc = new jsPDF('p', 'pt');
  //   doc.autoTable(columns, rows, {
  //     // theme: 'striped' | 'grid' | 'plain' | 'css' = 'striped'
  //     theme: 'striped',
  //     styles: { fillColor: [129, 216, 208] },
  //     columnStyles: {
  //       id: { fillColor: 255 }
  //     },
  //     margin: { top: 160 },
  //     beforePageContent: function (data) {
  //       doc.text("Header", 40, 30);
  //     }
  //   });
  //   doc.save('table.pdf');
  // }

  ////////////////////////////////
  onEstimateDate(event) {
    console.log(event.detail.value);
    this.estimate_date = event.detail.value;

  }

  onEstimateTerms(event) {
    console.log(50, event, this.reimburshForm.value);
    var d = new Date();
    d.setDate(d.getDate() + 50);
    const date = new Date(this.estimate_date);
    const expiry_date = date.setDate(date.getDate() + Number(event));
    console.log(expiry_date);
    const e_d = new Date(expiry_date);
    console.log(e_d);
    this.e_d = e_d;

  }

  ////////////////////////////////
  buildForm() {
    console.log(this.e_d, this.customernotes, this.termsandconditions);

    this.reimburshForm = this.formBuilder.group({
      "Estimate Date": new FormControl(this.es_d),
      "Estimate ID": new FormControl(Date.now()),
      "Estimate Number": new FormControl(`SQ-${Date.now()}`),
      "Estimate Status": new FormControl('draft'),
      "Customer ID": new FormControl(Date.now()),
      "Expiry Date": new FormControl(this.e_d),
      "PurchaseOrder": new FormControl(""),
      "Currency Code": new FormControl(""),
      "Exchange Rate": new FormControl(),
      "Discount Type": new FormControl(""),
      "Is Discount Before Tax": new FormControl(),
      "Entity Discount Percent": new FormControl(),
      "Is Inclusive Tax": new FormControl(),
      "SubTotal": new FormControl(),
      "Total": new FormControl(this.totalPrice),
      "Adjustment": new FormControl(),
      "Notes": new FormControl(this.customernotes),
      // d.setDate(d.getDate() + 50);
      "Terms": new FormControl(),
      "Terms & Conditions": new FormControl(this.termsandconditions),
      "Customer Name": new FormControl(""),
      "Project Name": new FormControl(""),
      // orderNumber: this.formBuilder.control(null),
      // same as estimate number
      "Project ID": new FormControl(`SQ-${Date.now()}`),
      // salesPerson: this.formBuilder.control(null),
      "Sales person": new FormControl(""),
      "Billing Address": new FormControl(""),
      "Billing City": new FormControl(""),
      "Billing State": new FormControl(""),
      "Billing Country": new FormControl(""),
      "Billing Code": new FormControl(""),
      "Billing Fax": new FormControl(""),
      "Template Name": new FormControl(""),
      "Adjustment Description": new FormControl(""),
      "Shipping Address": new FormControl(""),
      "Shipping City": new FormControl(""),
      "Shipping State": new FormControl(""),
      "Shipping Country": new FormControl(""),
      "Shipping Code": new FormControl(""),
      "Shipping Fax": new FormControl(""),
      "Source": new FormControl(),
      "Reference ID": new FormControl(""),
      "Last Sync Time": new FormControl(""),
      "Shipping Charge": new FormControl(),
      "Shipping Charge Tax ID": new FormControl(""),
      "Shipping Charge Tax Amount": new FormControl(""),
      "Shipping Charge Tax Name": new FormControl(""),
      "Shipping Charge Tax %": new FormControl(""),
      "Shipping Charge Tax Type": new FormControl(""),
      "Item Name": new FormControl(""),
      "Item Desc": new FormControl(""),
      "Quantity": new FormControl(),
      "Discount": new FormControl(),
      "Discount Amount": new FormControl(),
      "Item Tax Amount": new FormControl(),
      "Item Total": new FormControl(),
      "Account": new FormControl(""),
      "SKU": new FormControl(""),
      "Usage unit": new FormControl(""),
      "Item Price": new FormControl(),
      "Tax ID": new FormControl(""),
      "Item Tax": new FormControl(""),
      "Item Tax %": new FormControl(""),
      "Item Tax Type": new FormControl(""),
      // this one would be the first item in the group array
      salesList: this.formBuilder.array([
        this.formBuilder.group({
          //   itemName: this.formBuilder.control(null),
          //   itemDetail: this.formBuilder.control(null),
          quantity: this.formBuilder.control(null),
          Rate: this.formBuilder.control(null),
          // tax: this.formBuilder.control(null),
          amount: this.formBuilder.control(null),
          "Description": this.formBuilder.control(null),
          // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
          "Item Name": this.formBuilder.control(null),
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
        }),
      ]),
    });

    this.salesListArray = this.reimburshForm.get('salesList') as FormArray;

  }

  returnProduct(a: number, b: number) {
    return a * b
  }

  // returnSum(a: number, b: number) {
  //   return a + b
  // }

  jsonstringify(value) {
    return JSON.stringify(value)
  }

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

  // call contact list data

  readContacts(): void {

    console.log(this.email, this.uid);
    this.firebaseService.readContactsinCSV(this.uid, this.email).subscribe((res) => {
      console.log(res);

    })
    // this.firebaseService.readContacts(this.uid, this.email).snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({ id: c.payload.doc.id, ...c.payload.doc.data() })
    //     )
    //   )
    // ).subscribe(data => {
    //   this.customeditemsList = data;
    //   console.log(this.customeditemsList);
    // });
  }

  // update items in estimate
  onPush(value) {
    // const qty = (e.target as HTMLInputElement).value;
    // const price = f.get('Rate').value;
    // const product = Number(qty) * price;
    // console.log(f, product);
    // f.get('amount').setValue(Number(qty) * price);
    // console.log(this.returnSum());
    // this.totalPrice = this.returnSum();

    console.log(this.totalPrice);
    console.log(value);
    this.value = value;
    console.log(this.salesListArray.value, value);
    this.addSalesListItem();
  }

  addSalesListItem() {

    console.log(this.value, this.salesListArray.value);
    let formGroup: FormGroup = this.formBuilder.group({
      quantity: this.formBuilder.control(this.value['quantity']),
      Rate: this.formBuilder.control(this.value['Rate']),
      amount: this.formBuilder.control(this.value['amount']),
      "Description": this.formBuilder.control(this.value['Description']),
      "Item Name": this.formBuilder.control(this.value['Item Name']),
    });

    this.salesListArray.push(formGroup);
    this.salesListArray = this.reimburshForm.get('salesList') as FormArray;
    console.log(this.salesListArray.value);

  }

  // addItem(item) {
  //   this.arrayItems.push(item);
  //   this.demoArray.push(this._formBuilder.control(false));
  // }

  removeSalesListItem(index) {
    console.log(index);

    //    this.salesListArray.removeAt(this.salesListArray.length - 1);
    this.salesListArray.removeAt(index);
    this.salesListArray = this.reimburshForm.get('salesList') as FormArray;
    console.log(this.salesListArray.value);
    this.totalPrice = this.returnSum();
    console.log(this.totalPrice);

  }

  //   removeSalesListItem(index) {

  //     // let salesListArray = this.salesListArray.value;
  //     //  salesListArray.splice(index, 1);

  // //    this.item.splice(index, 1);
  //     //    this.item = this.salesListArray.value.splice(index, 1);
  //   //  console.log(this.item);

  //   }

  onQtyChange(e, f: FormGroup): void {
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
    console.log(this.returnSum());
    this.totalPrice = this.returnSum();
  }

  onPriceChange(e, f: FormGroup): void {
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
    console.log(this.returnSum());
    this.totalPrice = this.returnSum();

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

  // handleInputChange() {
  //   this.totalPrice = this.returnSum();
  //   console.log(this.totalPrice);
  // }

  onCreateInventoryItemPage() {
    this.navCtrl.navigateForward('/firebase/create%23inventory');
  }
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