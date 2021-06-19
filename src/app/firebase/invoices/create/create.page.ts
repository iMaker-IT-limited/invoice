import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Validators, FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";

import { FirebaseService } from "../../firebase-integration.service";

import { AuthService } from "./../../../../app/services/auth.service";
import { EstimateModel, InvoiceModel } from "../../invoice.model";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Papa } from "ngx-papaparse";
// import { SelectUserImageModal } from "../select-image/select-user-image.modal";

interface Contact {
  quantity: number;
  Rate: number;
  amount: number;
  Description: string;
  "Item Name": string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  createInvoiceForm: FormGroup;
  invoiceData: InvoiceModel = new InvoiceModel();
  uid: string;
  email: string;
  estimateInfo: EstimateModel = new EstimateModel();
  reimburshForm: FormGroup;
  salesListArray: FormArray;
  customeditemsList: any;
  value: any;
  downloadURL: any;
  csvData: any;
  headerRow: any;
  csv: string;
  contacts: any;

  quantity: number;
  Rate: number;
  amount: number;
  Description: string;
  "Item Name": string;

  contactstest: Contact[] = [
    {
      quantity: 2,
      Rate: 12000,
      amount: 24000,
      Description: "string",
      "Item Name": "string",
    },
    {
      quantity: 3,
      Rate: 12000,
      amount: 36000,
      Description: "stttdfggdfring",
      "Item Name": "strdgdgdging",
    }];
  contactForm: FormGroup;
  totalPrice: any;
  customernotes: any;
  termsandconditions: any;
  estimate_date: any;
  e_d: Date;
  first_salesList: {
    "Item Name": string; Description: string;
    //  this.modalController.dismiss();
    quantity: number; Rate: number; amount: number;
  }[];


  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    public firebaseService: FirebaseService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private papa: Papa
  ) {
    this.uid = this.authService.uid();
    this.email = this.authService.email();
  }

  ngOnInit() {
    this.readItems();

    // pull data from estimate 
    this.route.queryParams.subscribe(data => {
      // if there is data from estimate
      if (data.data) {
        const result = JSON.parse(data.data);
        this.estimateInfo = result;
        this.buildForm();
        //   this.estimateInfo = this.createInvoiceForm.value;
        //   console.log('estimate: ', this.estimateInfo, this.estimateInfo.salesList);
        this.salesListArray = this.reimburshForm.get('salesList') as FormArray;
        this.salesListArray.removeAt(0);
        console.log(this.salesListArray);

      } else if (!data.data) {
        this.buildForm();
        this.salesListArray = this.reimburshForm.get('salesList') as FormArray;
        console.log('no estimate convert');

        console.log(this.salesListArray);
        this.getTermsandConditions();
        this.getCustomerNotes();
      }
    })





    // this.contactForm = this.formBuilder.group({
    //   contacts: this.formBuilder.array(this.estimateInfo.salesList.map(contact => this.createSalesList(contact)))
    // });

    //    console.log(this.contactForm.value);

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

  ionViewWillEnter() {
    this.getCsvData();


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
  createInvoice() {
    console.log(this.estimateInfo, this.reimburshForm.value);
    this.reimburshForm.value['Total'] = this.totalPrice;
    this.reimburshForm.value['Estimate Status'] = 'invoiced';
    this.reimburshForm.value['Invoicer Id'] = this.uid;
    this.reimburshForm.value['Invoice email'] = this.email;

    if (this.estimateInfo['id']) {
      console.log("convert to invoice and estimate status set to 'invoice'");
      // update status => estimate id == invoice id
      this.firebaseService.updateEstimates(this.estimateInfo['id'], this.uid, this.email, this.reimburshForm.value).then(() => {

      });

    } else {
      console.log('create a new invoice');
    }

    this.firebaseService.createInvoices(this.uid, this.email, this.reimburshForm.value).then(() => {
      this.dismissModal();
    });
  }

  dismissModal() {
    //  this.modalController.dismiss();
    this.navCtrl.navigateBack('/firebase/invoices');
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
  ////////////
  buildForm() {
    console.log('build form: ', this.estimateInfo, this.estimateInfo.salesList);

    this.reimburshForm = this.formBuilder.group({
      "Estimate Date": new FormControl(this.estimateInfo["Estimate Date"]),
      "Estimate ID": new FormControl(Date.now()),
      "Estimate Number": new FormControl(this.estimateInfo["Estimate Number"]),
      "Invoice Date": new FormControl(new Date().toISOString()),
      "Invoice ID": new FormControl(this.estimateInfo["Estimate ID"]),
      "Invoice Number": new FormControl(this.estimateInfo["Estimate Number"]),
      "Estimate Status": new FormControl('invoice'),
      "Customer ID": new FormControl(Date.now()),
      "Expiry Date": new FormControl(this.estimateInfo["Expiry Date"]),
      "PurchaseOrder": new FormControl(this.estimateInfo.PurchaseOrder),
      "Currency Code": new FormControl(this.estimateInfo["Currency Code"]),
      "Exchange Rate": new FormControl(this.estimateInfo["Exchange Rate"]),
      "Discount Type": new FormControl(this.estimateInfo["Discount Type"]),
      "Is Discount Before Tax": new FormControl(this.estimateInfo["Is Discount Before Tax"]),
      "Entity Discount Percent": new FormControl(this.estimateInfo["Entity Discount Percent"]),
      "Is Inclusive Tax": new FormControl(this.estimateInfo["Is Inclusive Tax"]),
      "SubTotal": new FormControl(this.estimateInfo.SubTotal),
      "Total": new FormControl(this.estimateInfo.Total),
      "Adjustment": new FormControl(this.estimateInfo.Adjustment),
      "Notes": new FormControl(this.estimateInfo.Notes),
      "Terms": new FormControl(this.estimateInfo.Terms),
      "Terms & Conditions": new FormControl(this.estimateInfo["Terms & Conditions"]),
      "Customer Name": new FormControl(this.estimateInfo["Customer Name"]),
      "Project Name": new FormControl(this.estimateInfo["Project Name"]),
      // orderNumber: this.formBuilder.control(null),
      "Project ID": new FormControl(this.estimateInfo["Project ID"]),
      // salesPerson: this.formBuilder.control(null),
      "Sales person": new FormControl(this.estimateInfo["Sales person"]),
      "Billing Address": new FormControl(this.estimateInfo["Billing Address"]),
      "Billing City": new FormControl(this.estimateInfo["Billing City"]),
      "Billing State": new FormControl(this.estimateInfo["Billing State"]),
      "Billing Country": new FormControl(this.estimateInfo["Billing Country"]),
      "Billing Code": new FormControl(this.estimateInfo["Currency Code"]),
      "Billing Fax": new FormControl(this.estimateInfo["Billing Fax"]),
      "Template Name": new FormControl(this.estimateInfo["Template Name"]),
      "Adjustment Description": new FormControl(this.estimateInfo["Adjustment Description"]),
      "Shipping Address": new FormControl(this.estimateInfo["Shipping Address"]),
      "Shipping City": new FormControl(this.estimateInfo["Shipping City"]),
      "Shipping State": new FormControl(this.estimateInfo["Shipping State"]),
      "Shipping Country": new FormControl(this.estimateInfo["Shipping Country"]),
      "Shipping Code": new FormControl(this.estimateInfo["Shipping Code"]),
      "Shipping Fax": new FormControl(this.estimateInfo["Shipping Fax"]),
      "Source": new FormControl(this.estimateInfo.Source),
      "Reference ID": new FormControl(this.estimateInfo["Reference ID"]),
      "Last Sync Time": new FormControl(this.estimateInfo["Last Sync Time"]),
      "Shipping Charge": new FormControl(this.estimateInfo["Shipping Charge"]),
      "Shipping Charge Tax ID": new FormControl(this.estimateInfo["Shipping Charge Tax ID"]),
      "Shipping Charge Tax Amount": new FormControl(this.estimateInfo["Shipping Charge Tax Amount"]),
      "Shipping Charge Tax Name": new FormControl(this.estimateInfo["Shipping Charge Tax Name"]),
      "Shipping Charge Tax %": new FormControl(this.estimateInfo["Shipping Charge Tax %"]),
      "Shipping Charge Tax Type": new FormControl(this.estimateInfo["Shipping Charge Tax Type"]),
      "Item Name": new FormControl(this.estimateInfo["Item Name"]),
      "Item Desc": new FormControl(this.estimateInfo["Item Desc"]),
      "Quantity": new FormControl(this.estimateInfo.Quantity),
      "Discount": new FormControl(this.estimateInfo.Discount),
      "Discount Amount": new FormControl(this.estimateInfo["Discount Amount"]),
      "Item Tax Amount": new FormControl(this.estimateInfo["Item Tax Amount"]),
      "Item Total": new FormControl(this.estimateInfo["Item Total"]),
      "Account": new FormControl(this.estimateInfo.Account),
      "SKU": new FormControl(this.estimateInfo.SKU),
      "Usage unit": new FormControl(this.estimateInfo["Usage unit"]),
      "Item Price": new FormControl(this.estimateInfo["Item Price"]),
      "Tax ID": new FormControl(this.estimateInfo["Tax ID"]),
      "Item Tax": new FormControl(this.estimateInfo["Item Tax"]),
      "Item Tax %": new FormControl(this.estimateInfo["Item Tax %"]),
      "Item Tax Type": new FormControl(this.estimateInfo["Item Tax Type"]),

      // this one would be the first item in the group array
      // this one would be the first item in the group array
      // salesList: this.formBuilder.array([
      //   this.formBuilder.group({
      //      quantity: this.formBuilder.control(null),
      //     Rate: this.formBuilder.control(null),
      //     amount: this.formBuilder.control(null),
      //     "Description": this.formBuilder.control(null),
      //     "Item Name": this.formBuilder.control(null),
      //   }),
      // ]),
      salesList: this.formBuilder.array(this.estimateInfo.salesList.map(data => this.createSalesList(data)))
    });

    this.salesListArray = this.reimburshForm.get('salesList') as FormArray;
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
      console.log(this.customeditemsList);
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

  removeSalesListItem(index) {
    console.log(index);

    this.salesListArray.removeAt(index);
    this.salesListArray = this.reimburshForm.get('salesList') as FormArray;
    console.log(this.salesListArray.value);
    this.totalPrice = this.returnSum();
    console.log(this.totalPrice);

  }

  //
  onPush(value) {
    console.log(this.totalPrice);
    this.value = value;
    console.log(this.salesListArray.value, value);
    this.addSalesListItem();
  }

  addSalesListItem() {

    //   console.log(this.value, this.salesListArray.value);
    console.log(this.value, this.value['Rate']);

    let formGroup: FormGroup = this.formBuilder.group({
      //   itemName: this.formBuilder.control(null),
      //   itemDetail: this.formBuilder.control(null),
      quantity: this.formBuilder.control(this.value['quantity']),
      Rate: this.formBuilder.control(this.value['Rate']),
      // tax: this.formBuilder.control(null),
      // amount: this.formBuilder.control(null),
      amount: this.formBuilder.control(this.value['Rate']),
      "Description": this.formBuilder.control(this.value['Description']),
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

