import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Validators, FormGroup, FormControl, FormArray } from "@angular/forms";

import { FirebaseService } from "../../firebase-integration.service";
import { ItemModel } from "./../../invoice.model";
import { AuthService } from "./../../../../app/services/auth.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  createItemForm: FormGroup;
  itemData: ItemModel = new ItemModel();
  uid: string;
  email: string;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    public firebaseService: FirebaseService
  ) {
    this.uid = this.authService.uid();
    this.email = this.authService.email();
  }

  ngOnInit() {
    this.createItemForm = new FormGroup({
      "Item ID": new FormControl(Date.now()),
      "Item Name": new FormControl(""),
      "Description": new FormControl(""),
      "Rate": new FormControl(""),
      "Tax1 Name": new FormControl(""),
      "Tax1 Percentage": new FormControl(""),
      "Tax1 Type": new FormControl(""),
      "Product Type": new FormControl(""),
      "Source": new FormControl(1),
      "Reference ID": new FormControl(""),
      "Last Sync Time": new FormControl(""),
      "Status": new FormControl(""),
      "Usage unit": new FormControl(""),
      // set to 0 so that to hide the bug of update total price in create estimate items
      "quantity": new FormControl(0),
      "amount": new FormControl(),
    })

  }

  createItem() {
    this.itemData["Item ID"] = this.createItemForm.value["Item ID"];
    this.itemData["Item Name"] = this.createItemForm.value["Item Name"];
    this.itemData.Description = this.createItemForm.value.Description;
    this.itemData.Rate = this.createItemForm.value.Rate;
    this.itemData["Tax1 Name"] = this.createItemForm.value["Tax1 Name"];
    this.itemData["Tax1 Percentage"] = this.createItemForm.value["Tax1 Percentage"];
    this.itemData["Tax1 Type"] = this.createItemForm.value["Tax1 Type"];
    this.itemData["Product Type"] = this.createItemForm.value["Product Type"];
    this.itemData["Source"] = this.createItemForm.value["Source"];
    this.itemData["Reference ID"] = this.createItemForm.value["Reference ID"];
    this.itemData["Last Sync Time"] = this.createItemForm.value["Last Sync Time"];
    this.itemData.Status = this.createItemForm.value.Status;
    this.itemData["Usage unit"] = this.createItemForm.value["Usage unit"];

    this.itemData.quantity = this.createItemForm.value['quantity'];
    // amount => rate * quantity => Rate * 1
    // this.itemData.amount = this.createItemForm.value["amount"];
    this.itemData.amount = this.createItemForm.value["Rate"];

    console.log(this.uid, this.email, this.createItemForm.value);
    this.firebaseService.createItems(this.uid, this.email, this.createItemForm.value).then(() => {
      this.dismissModal();
    });
  }

  dismissModal() {
    this.navCtrl.navigateBack('/firebase/inventory/items');
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
  //     company_intro: new FormControl(),
  //     tutor_qual: new FormControl(),
  //     competition_exp: new FormControl()
  //   });
  // }

/*

    "Customer Name": "Joan",
    "Estimate Number": "SQ 19101740-B",
    "Reference ID": "",
    "Estimate Date": "2017-10-19",
    "Expiry Date": "",
    "Sales person": "Catrina Cheng",
    "Project Name": "",
    "Notes": "",
    "Terms & Conditions": "Delivery time: 14 working days (5-7 working days for urgent orders)\nFrom the confirmation of the manuscript and the approved version\nAll design changes need to be notified before six o'clock in each working day\n#Minor changes will be After receiving the notice, the revised manuscript will be delivered to the guest at three o'clock on the next working day\n#big revision will be handed over to the guest after three o’clock on the two working days after receiving the notice",


    "Estimate ID": 962254000000087000,
    "Estimate Status": "sent",
    "Customer ID": 962254000000087000,
    "PurchaseOrder": "",
    "Currency Code": "HKD",
    "Exchange Rate": 1,
    "Discount Type": "item_level",
    "Is Discount Before Tax": true,
    "Entity Discount Percent": 0,
    "Is Inclusive Tax": false,
    "SubTotal": 3888,
    "Total": 3888,
    "Adjustment": 0,
    "Project ID": "",
    "Billing Address": "",
    "Billing City": "",
    "Billing State": "",
    "Billing Country": "",
    "Billing Code": "",
    "Billing Fax": "",
    "Template Name": "SQ",
    "Adjustment Description": "",
    "Shipping Address": "",
    "Shipping City": "",
    "Shipping State": "",
    "Shipping Country": "",
    "Shipping Code": "",
    "Shipping Fax": "",
    "Source": 1,
    "Last Sync Time": "",
    "Shipping Charge": 0,
    "Shipping Charge Tax ID": "",
    "Shipping Charge Tax Amount": "",
    "Shipping Charge Tax Name": "",
    "Shipping Charge Tax %": "",
    "Shipping Charge Tax Type": "",
    "Item Name": "Uniform-Fluorescent vest jacket",
    "Item Desc": "Background color: fluorescent green\nmaterial: windbreaker\nprinting method: silk screen\nprinting content: 2 A4 monochrome logo",
    "Quantity": 36,
    "Discount": 0,
    "Discount Amount": 0,
    "Item Tax Amount": 0,
    "Item Total": 3888,
    "Account": "",
    "SKU": "",
    "Usage unit": "piece",
    "Item Price": 108,
    "Tax ID": "",
    "Item Tax": "",
    "Item Tax %": "",
    "Item Tax Type": ""

*/

/*
   "Customer Name": "Mr. Wai Kwok Mok",
   "Invoice Number": "PA-6112051-A",
   "Invoice ID": 2401730000000078091,
   "Invoice Date": "2020-11-06",
   "Payment Terms": 3,
   "Sales person": "Phyllis",
   "Project Name": "",
   "Notes": "",

   "Estimate Number": "",
   "Company Name": "SHARISM LIMITED",
   "Customer ID": 2401730000000078021,
   "Branch ID": "",
   "Branch Name": "",
   "Due Date": "2020-11-09",
   "Expected Payment Date": "",
   "PurchaseOrder": "",
   "Invoice Status": "Overdue",
   "Template Name": "Invoice",
   "Currency Code": "HKD",
   "Exchange Rate": 1,
   "Discount Type": "item_level",
   "Is Discount Before Tax": true,
   "Entity Discount Percent": 0,
   "Entity Discount Amount": 0,
   "Item Name": "D-Biz -E-Shop Deposit",
   "Item Desc": "Responsive design -- mobile and desktop version\n3 - 5 Banner design\n1 Logo design\n30 Icon design\nLanguage versions : Traditional Chinese\nUnlimited Product display\nPayment gateway -- stripe, paypal, bank transfer, cash on delivery\nCopywriting will be provided by the client\nShopping cart\nContent management system backend -- able to create/\n/read/update/delete product information(individual \nor in bulk)\nCustomer Login System -- customer can login their account \nand check the wishlist, purchase history \n\n*First Year Hosting and Server maintenance will be included.",
   "Quantity": 1,
   "Usage unit": "",
   "Item Price": 30000,
   "Discount": 0,
   "Discount Amount": 0,
   "Expense Reference ID": "",
   "Project ID": "",
   "Is Inclusive Tax": false,
   "Tax1 ID": "",
   "Item Tax1": "",
   "Item Tax1 %": "",
   "Item Tax1 Amount": "",
   "Item Tax1 Type": "",
   "Item Total": 30000,
   "SubTotal": 30000,
   "Total": 30000,
   "Balance": 30000,
   "Shipping Charge": 0,
   "Shipping Charge Tax ID": "",
   "Shipping Charge Tax Amount": "",
   "Shipping Charge Tax Name": "",
   "Shipping Charge Tax %": "",
   "Shipping Charge Tax Type": "",
   "Adjustment": 0,
   "Adjustment Description": "Adjustment",
   "Round Off": 0,
   "Payment Terms Label": "Custom",
   "Last Payment Date": "",
   "Terms & Conditions": "Remarks: Server and maintenance will be started after the project is finished.\n* 五萬元以下訂單，需全數繳付。\t\t\n 銀行入帳資料：\t\t\n1. 入帳-大眾銀行（IMAKER IT LIMITED) account no. 726-186583-031\t\t\n2. Credit Card (Please notice us if you would like to pay in Paypal.)\t\t\n\t\t\n\"顧客請於付款後以下列方法通知我們確認, 確認付款後,我們會盡\n快處理閣下之訂單\"\t\t\n\"1. 拍下入數收據並把照片以 Whatsapp等手機程式發送到\n    +852 9697 9157, 並提供發單編號.\"\t\t\n\"2.回覆電郵並提供入數收據副本,或付款金額, 付款日期、時間及\n    交易備考編號\"\t\t\n   我們會在收實款額後向客人發。電郵確定,並開始安排製造/設計。\t\t\n  ＊請保留閣下之入數收據直至交易完成,如過戶入脹出現問題,\t\t\n   本公司將要求顧客電郵該收據給我們以作參考\t\t\n\t\t\n備註：\t\t\n1.除非特別註明, 否則所列出之金額一律以港幣(HKD)計算\t\t\n\"2.如使用支票,電匯,跨行轉賬等非即時結算方式付款, 本公司   \n會在收實款額後才進行確認程序，敬請客人注意·\"\t\t\n\"3.星期一至五18：00後(星期六12:00後)收到之付款將於\n下一個工作天跟進\"\t\t",
   "Subject": "",
   "LateFee Name": "",
   "LateFee Type": "% of Invoice",
   "LateFee Rate": 0,
   "LateFee Amount": 0,
   "LateFee Frequency": "Every Month",
   "WriteOff Date": "",
   "WriteOff Exchange Rate": 1,
   "WriteOff Amount": 0,
   "Recurrence Name": "",
   "PayPal": false,
   "Authorize.Net": false,
   "Google Checkout": false,
   "Payflow Pro": false,
   "Stripe": false,
   "2Checkout": false,
   "Braintree": false,
   "Forte": false,
   "WorldPay": false,
   "Payments Pro": false,
   "Square": false,
   "WePay": false,
   "Razorpay": false,
   "GoCardless": false,
   "Partial Payments": false,
   "Billing Address": "",
   "Billing City": "",
   "Billing State": "",
   "Billing Country": "",
   "Billing Code": "",
   "Billing Fax": "",
   "Billing Phone": "",
   "Shipping Address": "",
   "Shipping City": "",
   "Shipping State": "",
   "Shipping Country": "",
   "Shipping Code": "",
   "Shipping Fax": "",
   "Shipping Phone Number": ""

   */