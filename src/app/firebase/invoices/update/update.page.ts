import { InvoiceModel } from "../../invoice.model";

// import { SelectUserImageModal } from "../select-image/select-user-image.modal";
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
  createInvoiceForm: FormGroup;
  invoiceData: InvoiceModel = new InvoiceModel();
  uid: string;
  email: string;
  invoiceDetail: InvoiceModel = new InvoiceModel();
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
  es_d: string;
  estimate_date: any;
  e_d: Date;
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
      this.invoiceDetail = value;
    })

    this.es_d = new Date().toISOString();

    // this.createInvoiceForm = new FormGroup({
    //   "Invoice Date": new FormControl(this.invoiceDetail["Invoice Date"]),
    //   "Invoice ID": new FormControl(this.invoiceDetail["Invoice ID"]),
    //   "Invoice Number": new FormControl(this.invoiceDetail["Invoice Number"]),
    //   "Estimate Number": new FormControl(),
    //   "Invoice Status": new FormControl(""),
    //   "Customer Name": new FormControl(""),
    //   "Company Name": new FormControl(""),
    //   "Customer ID": new FormControl(""),
    //   "Branch ID": new FormControl(""),
    //   "Branch Name": new FormControl(""),
    //   "Due Date": new FormControl(""),
    //   "Expected Payment Date": new FormControl(""),
    //   "PurchaseOrder": new FormControl(""),
    //   "Template Name": new FormControl(""),
    //   "Currency Code": new FormControl(""),
    //   "Exchange Rate": new FormControl(""),
    //   "Discount Type": new FormControl(""),
    //   "Is Discount Before Tax": new FormControl(""),
    //   "Entity Discount Percent": new FormControl(""),
    //   "Entity Discount Amount": new FormControl(""),
    //   "Item Name": new FormControl(""),
    //   "Item Desc": new FormControl(""),
    //   "Quantity": new FormControl(""),
    //   "Usage unit": new FormControl(""),
    //   "Item Price": new FormControl(""),
    //   "Discount": new FormControl(""),
    //   "Discount Amount": new FormControl(""),
    //   "Expense Reference ID": new FormControl(""),
    //   "Project ID": new FormControl(""),
    //   "Project Name": new FormControl(""),
    //   "Is Inclusive Tax": new FormControl(""),
    //   "Tax1 ID": new FormControl(""),
    //   "Item Tax1": new FormControl(""),
    //   "Item Tax1 %": new FormControl(""),
    //   "Item Tax1 Amount": new FormControl(""),
    //   "Item Tax1 Type": new FormControl(""),
    //   "Item Total": new FormControl(""),
    //   "SubTotal": new FormControl(""),
    //   "Total": new FormControl(""),
    //   "Balance": new FormControl(""),
    //   "Shipping Charge": new FormControl(""),
    //   "Shipping Charge Tax ID": new FormControl(""),
    //   "Shipping Charge Tax Amount": new FormControl(""),
    //   "Shipping Charge Tax Name": new FormControl(""),
    //   "Shipping Charge Tax %": new FormControl(""),
    //   "Shipping Charge Tax Type": new FormControl(""),
    //   "Adjustment": new FormControl(""),
    //   "Adjustment Description": new FormControl(""),
    //   "Round Off": new FormControl(""),
    //   "Sales person": new FormControl(""),
    //   "Payment Terms": new FormControl(""),
    //   "Payment Terms Label": new FormControl(""),
    //   "Last Payment Date": new FormControl(""),
    //   "Notes": new FormControl(""),
    //   "Terms & Conditions": new FormControl(""),
    //   "Subject": new FormControl(""),
    //   "LateFee Name": new FormControl(""),
    //   "LateFee Type": new FormControl(""),
    //   "LateFee Rate": new FormControl(""),
    //   "LateFee Amount": new FormControl(""),
    //   "LateFee Frequency": new FormControl(""),
    //   "WriteOff Date": new FormControl(""),
    //   "WriteOff Exchange Rate": new FormControl(""),
    //   "WriteOff Amount": new FormControl(""),
    //   "Recurrence Name": new FormControl(""),
    //   "PayPal": new FormControl(""),
    //   "Authorize.Net": new FormControl(""),
    //   "Google Checkout": new FormControl(""),
    //   "Payflow Pro": new FormControl(""),
    //   "Stripe": new FormControl(""),
    //   "2Checkout": new FormControl(""),
    //   "Braintree": new FormControl(""),
    //   "Forte": new FormControl(""),
    //   "WorldPay": new FormControl(""),
    //   "Payments Pro": new FormControl(""),
    //   "Square": new FormControl(""),
    //   "WePay": new FormControl(""),
    //   "Razorpay": new FormControl(""),
    //   "GoCardless": new FormControl(""),
    //   "Partial Payments": new FormControl(""),
    //   "Billing Address": new FormControl(""),
    //   "Billing City": new FormControl(""),
    //   "Billing State": new FormControl(""),
    //   "Billing Country": new FormControl(""),
    //   "Billing Code": new FormControl(""),
    //   "Billing Fax": new FormControl(""),
    //   "Billing Phone": new FormControl(""),
    //   "Shipping Address": new FormControl(""),
    //   "Shipping City": new FormControl(""),
    //   "Shipping State": new FormControl(""),
    //   "Shipping Country": new FormControl(""),
    //   "Shipping Code": new FormControl(""),
    //   "Shipping Fax": new FormControl(""),
    //   "Shipping Phone Number": new FormControl(""),

    // })

    this.readItems();
    this.buildForm();
  }

  ionViewWillEnter() {
    this.getCsvData();
    this.invoiceDetail.Total = this.totalPrice;
    this.invoiceDetail.Total = this.reimburshForm.value['Total'];
    console.log(this.totalPrice, this.invoiceDetail.Total, this.reimburshForm.value['Total']);


  }
  updateInvoice() {

    //    this.invoiceData["Invoice Date"] = this.createInvoiceForm.value["Invoice Date"];

    //  this.reimburshForm.value['Total'] = this.totalPrice;
    this.invoiceDetail.Total = this.totalPrice;
    this.invoiceDetail.Total = this.reimburshForm.value['Total'];
    console.log(this.totalPrice, this.invoiceDetail.Total, this.reimburshForm.value['Total']);

    console.log(this.invoiceDetail['id'], this.uid, this.email, this.reimburshForm.value);
    this.firebaseService.updateInvoices(this.invoiceDetail['id'], this.uid, this.email, this.reimburshForm.value).then(() => {
      this.dismissModal();
    });
  }

  dismissModal() {
    //  this.modalController.dismiss();
    this.navCtrl.navigateBack('/firebase/invoices');
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

  buildForm() {
    this.reimburshForm = this.formBuilder.group({
      "Estimate Date": new FormControl(this.invoiceDetail["Estimate Date"]),
      "Estimate ID": new FormControl(this.invoiceDetail["Estimate ID"]),
      "Estimate Number": new FormControl(this.invoiceDetail["Estimate Number"]),
      "Estimate Status": new FormControl('revised'),
      "Customer ID": new FormControl(this.invoiceDetail["Customer ID"]),
      "Expiry Date": new FormControl(this.invoiceDetail["Expiry Date"]),
      "PurchaseOrder": new FormControl(this.invoiceDetail.PurchaseOrder),
      "Currency Code": new FormControl(this.invoiceDetail["Currency Code"]),
      "Exchange Rate": new FormControl(this.invoiceDetail["Exchange Rate"]),
      "Discount Type": new FormControl(this.invoiceDetail["Discount Type"]),
      "Is Discount Before Tax": new FormControl(this.invoiceDetail["Is Discount Before Tax"]),
      "Entity Discount Percent": new FormControl(this.invoiceDetail["Entity Discount Percent"]),
      "Is Inclusive Tax": new FormControl(this.invoiceDetail["Is Inclusive Tax"]),
      "SubTotal": new FormControl(this.invoiceDetail.SubTotal),
      "Total": new FormControl(this.invoiceDetail.Total),
      "Adjustment": new FormControl(this.invoiceDetail.Adjustment),
      "Notes": new FormControl(this.invoiceDetail.Notes),
      'Terms': new FormControl(this.invoiceDetail.Terms),
      "Terms & Conditions": new FormControl(this.invoiceDetail["Terms & Conditions"]),
      "Customer Name": new FormControl(this.invoiceDetail["Customer Name"]),
      "Project Name": new FormControl(this.invoiceDetail["Project Name"]),
      // orderNumber: this.formBuilder.control(null),
      "Project ID": new FormControl(this.invoiceDetail["Project ID"]),
      // salesPerson: this.formBuilder.control(null),
      "Sales person": new FormControl(this.invoiceDetail["Sales person"]),
      "Billing Address": new FormControl(this.invoiceDetail["Billing Address"]),
      "Billing City": new FormControl(this.invoiceDetail["Billing City"]),
      "Billing State": new FormControl(this.invoiceDetail["Billing State"]),
      "Billing Country": new FormControl(this.invoiceDetail["Billing Country"]),
      "Billing Code": new FormControl(this.invoiceDetail["Billing Code"]),
      "Billing Fax": new FormControl(this.invoiceDetail["Billing Fax"]),
      "Template Name": new FormControl(this.invoiceDetail["Template Name"]),
      "Adjustment Description": new FormControl(this.invoiceDetail["Adjustment Description"]),
      "Shipping Address": new FormControl(this.invoiceDetail["Shipping Address"]),
      "Shipping City": new FormControl(this.invoiceDetail["Shipping City"]),
      "Shipping State": new FormControl(this.invoiceDetail["Shipping State"]),
      "Shipping Country": new FormControl(this.invoiceDetail["Shipping Country"]),
      "Shipping Code": new FormControl(this.invoiceDetail["Shipping Code"]),
      "Shipping Fax": new FormControl(this.invoiceDetail["Shipping Fax"]),
      //   "Source": new FormControl(this.invoiceDetail.Source),
      "Reference ID": new FormControl(this.invoiceDetail["Reference ID"]),
      "Last Sync Time": new FormControl(this.invoiceDetail["Last Sync Time"]),
      "Shipping Charge": new FormControl(this.invoiceDetail["Shipping Charge"]),
      "Shipping Charge Tax ID": new FormControl(this.invoiceDetail["Shipping Charge Tax ID"]),
      "Shipping Charge Tax Amount": new FormControl(this.invoiceDetail["Shipping Charge Tax Amount"]),
      "Shipping Charge Tax Name": new FormControl(this.invoiceDetail["Shipping Charge Tax Name"]),
      "Shipping Charge Tax %": new FormControl(this.invoiceDetail["Shipping Charge Tax %"]),
      "Shipping Charge Tax Type": new FormControl(this.invoiceDetail["Shipping Charge Tax Type"]),
      "Item Name": new FormControl(this.invoiceDetail["Item Name"]),
      "Item Desc": new FormControl(this.invoiceDetail["Item Desc"]),
      "Quantity": new FormControl(this.invoiceDetail.Quantity),
      "Discount": new FormControl(this.invoiceDetail.Discount),
      "Discount Amount": new FormControl(this.invoiceDetail["Discount Amount"]),
      "Item Tax Amount": new FormControl(this.invoiceDetail["Item Tax Amount"]),
      "Item Total": new FormControl(this.invoiceDetail["Item Total"]),
      // "Account": new FormControl(this.invoiceDetail.Account),
      //  "SKU": new FormControl(this.invoiceDetail.SKU),
      "Usage unit": new FormControl(this.invoiceDetail["Usage unit"]),
      "Item Price": new FormControl(this.invoiceDetail["Item Price"]),
      "Tax ID": new FormControl(this.invoiceDetail["Tax ID"]),
      "Item Tax": new FormControl(this.invoiceDetail["Item Total"]),
      "Item Tax %": new FormControl(this.invoiceDetail["Item Tax %"]),
      "Item Tax Type": new FormControl(this.invoiceDetail["Item Tax Type"]),
      // this one would be the first item in the group array
      salesList: this.formBuilder.array(this.invoiceDetail.salesList.map(contact => this.createSalesList(contact)))

      // salesList: this.formBuilder.array([
      //   this.formBuilder.group({
      //     quantity: this.formBuilder.control(null),
      //     Rate: this.formBuilder.control(null),
      //     amount: this.formBuilder.control(null),
      //     "Description": this.formBuilder.control(null),
      //     "Item Name": this.formBuilder.control(null),
      //     }),
      // ]),

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

    //   this.totalPrice = this.returnSum();
    this.invoiceDetail.Total = this.returnSum();

    // try this.totalPrice => this.invoiceDetail.Total in the morning
    console.log(this.invoiceDetail.Total);

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

    // this.totalPrice = this.returnSum();
    this.invoiceDetail.Total = this.returnSum();
    console.log(this.invoiceDetail.Total);

  }

  returnProduct(a: number, b: number) {
    return a * b
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
  // returnSum(a: number, b: number) {
  //   return a + b
  // }

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

        //   console.log(parsedData);
        //  console.log(parsedData.data.splice(0, 1)[0]);

        this.headerRow = parsedData.data.splice(0, 1)[0];

        console.log(this.headerRow);

      }
    })

    // console.log(res, this.csvData);

  }

  exportCSV() {
    let csv = this.papa.unparse({
      fields: this.headerRow,
      data: this.csvData
    });
    this.csv = csv;
    //  console.log('header row: ', this.headerRow);

    //  console.log('csv: ', this.csvData);
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

    // console.log(this.csv);

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
    // console.log(this.csv, csv.data);
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
    // let formGroup: FormGroup = this.formBuilder.group({

    //   //   itemName: this.formBuilder.control(null),
    //   //   itemDetail: this.formBuilder.control(null),
    //   quantity: this.formBuilder.control(1),
    //   Rate: this.formBuilder.control(value['Rate']),
    //   // tax: this.formBuilder.control(null),
    //   amount: this.formBuilder.control(1 * value['Rate']),

    //   "Description": this.formBuilder.control(value['Description']),
    //   // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
    //   "Item Name": this.formBuilder.control(value['Item Name']),
    //   // "Last Sync Time": this.formBuilder.control(this.itemSelected["Last Sync Time"]),
    //   // "Product Type": this.formBuilder.control(this.itemSelected["Product Type"]),
    //   // "Rate": this.formBuilder.control(this.itemSelected.Rate),
    //   // "Reference ID": this.formBuilder.control(this.itemSelected["Reference ID"]),
    //   // "Source": this.formBuilder.control(this.itemSelected.Source),
    //   // "Status": this.formBuilder.control(this.itemSelected.Status),
    //   // "Tax1 Name": this.formBuilder.control(this.itemSelected["Tax1 Name"]),
    //   // "Tax1 Percentage": this.formBuilder.control(this.itemSelected["Tax1 Percentage"]),
    //   // "Tax1 Type": this.formBuilder.control(this.itemSelected["Tax1 Type"]),
    //   // "Usage unit": this.formBuilder.control(this.itemSelected["Usage unit"]),
    //   // "id": this.formBuilder.control(this.itemSelected['id']),
    // });

    // this.arr.push(formGroup.value);

    // this.arr = this.reimburshForm.get('salesList') as FormArray;
    this.value = value;
    console.log(this.salesListArray.value, value);
    this.addSalesListItem();
  }

  addSalesListItem() {

    console.log(this.value, this.salesListArray.value);
    let formGroup: FormGroup = this.formBuilder.group({
      //   itemName: this.formBuilder.control(null),
      //   itemDetail: this.formBuilder.control(null),
      quantity: this.formBuilder.control(1),
      Rate: this.formBuilder.control(this.value['Rate']),
      // tax: this.formBuilder.control(null),
      amount: this.formBuilder.control(null),
      "Description": this.formBuilder.control(null),
      // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
      "Item Name": this.formBuilder.control(this.value['Item Name']),
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

    this.salesListArray.push(formGroup);
    this.salesListArray = this.reimburshForm.get('salesList') as FormArray;
    console.log(this.salesListArray.value);
  }

  onCreateInventoryItemPage() {

  }

  removeSalesListItem(index, value) {
    console.log(index, value, value.amount);

    //  this.reimburshForm.value.salesList.splice(index, 1);

    console.log(this.reimburshForm.value.salesList);

    this.salesListArray.controls.forEach(element => {
      console.log(element.value);
      if (element.value === value) {
        console.log(element.value);
        this.salesListArray.controls.splice(index, 1);

      }

    });

    this.invoiceDetail.Total -= value.amount;
    console.log(this.invoiceDetail.Total);

  }



}


 // onReset() {
  //   this.createSupplierForm = new FormGroup({
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

