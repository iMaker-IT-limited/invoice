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
import quotes from './../../../../assets/estimatelist.json';
import { AuthService } from "./../../../../app/services/auth.service";
import { Observable, Subscriber } from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  result: any;
  private sideNav: boolean = false;
  private quotesData = quotes;
  estimateDetail: any;
  uid: string;
  email: string;
  estimateList: any;
  totalPrice: any;
  downloadURL: any;
  myimage: Observable<any>;
  base64Image: any;
  companyprofile: unknown;
  companyemail: any;
  companyaddress: any;
  company_name: any;
  website: any;
  logo_base64Image: any;
  customernotes: any;
  termsandconditions: any;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private firebaseService: FirebaseService
  ) {
    this.uid = this.authService.uid();
    this.email = this.authService.email();
    //    console.log('quotes data: ', this.quotesData);
  }

  onChange($event: Event) {
    const file = ($event.target as HTMLElement)['files'][0];

    console.log('file is: ', file);

    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    this.myimage = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    })

    this.myimage.subscribe(res => {
      console.log(res);
      this.base64Image = res;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };

    filereader.onerror = (error) => {
      subscriber.error(error);
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log(data);

      const result = JSON.parse(data.data);
      const results = JSON.parse(data.datas)
      this.estimateList = results;
      this.estimateDetail = result;
      console.log(this.estimateDetail);
    })

    this.getCompanyProfile();

    // this.getCustomerNotes();

    // this.getTermsandConditions();
  }

  returnSum() {
    console.log(this.estimateDetail, this.estimateDetail.salesList);

    return this.estimateDetail.salesList.reduce((sum, i) => {
      console.log(i.get('amount').value);
      if (i.get('amount').value) {
        console.log(i);

      }

      sum += parseFloat(i.get('amount').value)
      return sum;
    }, 0);

  }

  handleInputChange() {
    this.totalPrice = this.returnSum();
    console.log(this.totalPrice);

  }

  createPDF() {
    var doc = new jsPDF();
    // 添加并设置字体
    doc.addFont('SourceHanSans-Normal.ttf', 'SourceHanSans-Normal', 'normal');
    doc.setFont('SourceHanSans-Normal');
    doc.text(20, 20, '简体中文、繁體体中文、English、ジャパン、한국어');
    doc.save('my.pdf');

  }

  testtablePDF(value) {
    console.log(value);

    //   var doc = new jsPDF('p', 'pt');
    var doc = new jsPDF();
    // 添加并设置字体
    doc.addFont('SourceHanSans-Normal.ttf', 'SourceHanSans-Normal', 'normal');
    doc.setFont('SourceHanSans-Normal');
    // doc.text(20, 20, '简体中文、繁體体中文、English、ジャパン、한국어');

    // A4 297mm x 210mm
    doc.setFontSize(12);
    doc.text(120, 20, 'Quotation');
    doc.setFontSize(10);
    doc.text(120, 24, value["Estimate Number"].toString());

    doc.setFontSize(10);
    doc.text(120, 30, 'Total');
    doc.setFontSize(13);
    doc.text(120, 35, 'HKD'.concat(value['Total'].toString()));
    // logo

    var width = (doc.internal.pageSize.getWidth()) / 6;
    var height = (doc.internal.pageSize.getHeight()) / 9;
    doc.addImage(this.base64Image, 'JPEG', 15, 10, width, height);
    // doc.addImage(base64Img, 'JPEG', 10, 10, 60, 20);
    // before body
    doc.autoTable({
      styles: {
        font: 'SourceHanSans-Normal',
        fontSize: 8,
        //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
        overflow: 'ellipsize',
        halign: 'left',
        cellPadding: 1
        //   fillColor: [255, 0, 0]
      },
      theme: 'plain',
      html: '#billto',
      margin: {
        top: 40
      }
    })

    // doc.autoTable({
    //   styles: {
    //     font: 'SourceHanSans-Normal',
    //     fontSize: 8,
    //     //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
    //     overflow: 'ellipsize',
    //     halign: 'left',
    //     cellPadding: 3
    //     //   fillColor: [255, 0, 0]
    //   },
    //   theme: 'plain',
    //   html: '#companyprofile',
    //   margin: {
    //     top: 40
    //   }
    // })

    // A4 297mm x 210mm

    // body

    var res = doc.autoTableHtmlToJson(document.getElementById("my-table"));
    console.log(res);

    var columns = [res.columns[0], res.columns[1], res.columns[2], res.columns[3], res.columns[4], res.columns[5]];
    res.data.splice(0, 1);
    doc.autoTable(columns, res.data, {
      headStyles: {
        //  fillColor: [0, 0, 0],
        //  fontSize: 11
      },
      bodyStyles: {
        //  fillColor: [216, 216, 216],
        //  textColor: 50
      },
      alternateRowStyles: {
        //  fillColor: [250, 250, 250]
      },
      //    startY: 60,
      styles: {
        font: 'SourceHanSans-Normal',
        fontSize: 8,
        //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
        overflow: 'linebreak',
        halign: 'left',
        cellPadding: 3,
        // lineColor: [44, 62, 80],
        // lineWidth: 0.55
        //   fillColor: [255, 0, 0]
      },
      columnStyles: {  // total width 196 - 14 = 182 => 12, 
        0: { cellWidth: 10 },
        1: { cellWidth: 30 },
        2: { cellWidth: 65 },
        3: { cellWidth: 17 },
        4: { cellWidth: 30 },
        5: { cellWidth: 30 },
      },
      drawRow: function (row, data) {

        doc.setFontStyle('bold');
        doc.setFontSize(10);
        if ((row.raw[0]).hasClass("innerHeader")) {
          doc.setTextColor(200, 0, 0);
          doc.setFillColor(110, 214, 84);
          doc.rect(data.settings.margin.left, row.y, data.table.width, 20, 'F');
          doc.autoTableText("", data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
            halign: 'center',
            valign: 'middle'
          });
        };

        if (row.index % 5 === 0) {
          var posY = row.y + row.height * 6 + data.settings.margin.bottom;
          if (posY > doc.internal.pageSize.height) {
            data.addPage();
          }
        }
      },
      drawCell: function (cell, data) {
        // Rowspan
        console.log(cell);
        if ((cell.raw).hasClass("innerHeader")) {
          doc.setTextColor(200, 0, 0);
          doc.autoTableText(cell.text + '', data.settings.margin.left + data.table.width / 2, data.row.y + data.row.height / 2, {
            halign: 'center',
            valign: 'middle'
          });

          return false;
        }
      }
    });

    //    notes
    doc.autoTable({
      styles: {
        font: 'SourceHanSans-Normal',
        fontSize: 7,
        //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
        overflow: 'linebreak',
        halign: 'left',
        cellPadding: 4
        //   fillColor: [255, 0, 0]
      },
      columnStyles: {  // total width 196 - 14 = 182 => 12, 
        0: { cellWidth: 60 },
        // 1: { cellWidth: 30 },
        // 2: { cellWidth: 30 },
        // 3: { cellWidth: 30 },
        // 4: { cellWidth: 30 },
        // 5: { cellWidth: 30 },
      },
      html: '#notes'
    })


    doc.autoTable({
      styles: {
        font: 'SourceHanSans-Normal',
        fontSize: 7,
        //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
        overflow: 'linebreak',
        halign: 'left',
        cellPadding: 4
        //   fillColor: [255, 0, 0]
      },
      columnStyles: { europe: { font: 'SourceHanSans-Normal' } }, // European countries centered
      body: [{ europe: `${value['Terms & Conditions']}` }],
      columns: [
        { header: 'Terms & Conditions', dataKey: 'europe' },
      ],
    })


    doc.save(`${value["Estimate ID"]}.pdf`);

  }

  showSideNav(value) {
    console.log(value);
    if (value == true) {
      document.getElementById("grid-container").style.gridTemplateColumns = "0% 100%";
    } else {
      document.getElementById("grid-container").style.gridTemplateColumns = "30% auto";
    }
  }

  onDismiss() {
    this.navCtrl.back();
  }

  getCompanyProfile() {
    console.log(this.email, this.uid);

    this.firebaseService.readCompanyProfile(this.uid).subscribe(res => {
      console.log(res['userData']);
      this.companyprofile = res['userData'];
      this.companyemail = res['userData']['company_email'];
      this.companyaddress = res['userData']['address'];
      this.company_name = res['userData']['company_name'];
      this.website = res['userData']['website'];
      this.logo_base64Image = res['userData']['logo_base64Image'];
      this.base64Image = this.logo_base64Image;
      console.log(this.base64Image);

    })

  }

  // getCustomerNotes() {
  //   console.log(this.email, this.uid);

  //   this.firebaseService.readCustomerNote(this.uid).subscribe(res => {
  //     console.log(res['userData']);
  //     this.customernotes = res['userData']['customernotes'];
  //   })

  // }

  // getTermsandConditions() {
  //   console.log(this.email, this.uid);

  //   this.firebaseService.readTermsandConditions(this.uid).subscribe(res => {
  //     console.log(res['userData']);
  //     this.termsandconditions = res['userData']['termsandconditions'];
  //   })

  // }

  updateEstimate() {
    console.log(this.email, this.uid, this.estimateDetail);

    const data = JSON.stringify(this.estimateDetail);
    console.log(data);

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        email: this.email,
        uid: this.uid
      }
    };
    this.navCtrl.navigateRoot(["/firebase/update#expenses"], navigationExtras);

  }

  deleteItem() {
    console.log(this.estimateDetail, this.email, this.uid);
    this.firebaseService.deleteEstimates(this.estimateDetail.id, this.uid, this.email).then(() => {
      this.onDismiss();
    });
  }

  returnProduct(x, y) {
    return x * y;
  }

  convertToInvoice(value) {
    console.log('my id :', this.email, this.uid);

    console.log(value);
    //   this.navCtrl.navigateForward(["/firebase/create#invoices"]);

    const data = JSON.stringify(value);

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: data
      }
    };
    this.navCtrl.navigateRoot(["/firebase/create#invoices"], navigationExtras);

  }
  // }

  // generate() {

  //   var doc = new jsPDF('p', 'pt');

  //   var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
  //   doc.autoTable(res.columns, res.data, { margin: { top: 80 } });

  //   var header = function (data) {
  //     doc.setFontSize(18);
  //     doc.setTextColor(40);
  //     doc.setFontStyle('normal');
  //     //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
  //     doc.text("Testing Report", data.settings.margin.center, 50);
  //   };

  //   var options = {
  //     didDrawPage: header,
  //     margin: {
  //       top: 80
  //     },
  //     startY: doc.autoTableEndPosY() + 20
  //   };

  //   doc.autoTable(res.columns, res.data, options);

  //   doc.save("table.pdf");
  // }


  // generate_cutomPDF() {

  //   var doc = new jsPDF('p', 'pt');

  //   var rightStartCol1 = 400;
  //   var rightStartCol2 = 480;


  //   var InitialstartX = 40;
  //   var startX = 40;
  //   var InitialstartY = 50;
  //   var startY = 0;

  //   var lineHeights = 12;

  //   var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
  //   res = doc.autoTableHtmlToJson(document.getElementById("tblInvoiceItemsList"));

  //   doc.setFontSize(fontSizes.SubTitleFontSize);
  //   doc.setFont('times');
  //   doc.setFontType('bold');

  //   //pdf.addImage(agency_logo.src, 'PNG', logo_sizes.centered_x, _y, logo_sizes.w, logo_sizes.h);
  //   doc.addImage(company_logo.src, 'PNG', startX, startY += 50, company_logo.w, company_logo.h);

  //   doc.textAlign(comapnyJSON.CompanyName, { align: "left" }, startX, startY += 15 + company_logo.h);
  //   doc.setFontSize(fontSizes.NormalFontSize);
  //   doc.textAlign("GSTIN", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(comapnyJSON.CompanyGSTIN, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("STATE", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(comapnyJSON.CompanyState, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("PAN", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(comapnyJSON.CompanyPAN, { align: "left" }, 80, startY);

  //   // doc.setFontType('bold');
  //   // doc.textAlign("Address", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
  //   // doc.setFontType('normal');
  //   // doc.textAlign(comapnyJSON.CompanyAddressLine1, {align: "left"}, 80, startY);
  //   // doc.textAlign(comapnyJSON.CompanyAddressLine2, {align: "left"}, 80, startY+=lineSpacing.NormalSpacing);
  //   // doc.textAlign(comapnyJSON.CompanyAddressLine3, {align: "left"}, 80, startY+=lineSpacing.NormalSpacing);

  //   doc.setFontType('bold');
  //   doc.textAlign("PIN", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(comapnyJSON.PIN, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("EMAIL", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(comapnyJSON.companyEmail, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Phone: ", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(comapnyJSON.companyPhno, { align: "left" }, 80, startY);

  //   var tempY = InitialstartY;


  //   doc.setFontType('bold');
  //   doc.textAlign("INVOICE NO: ", { align: "left" }, rightStartCol1, tempY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(invoiceJSON.InvoiceNo, { align: "left" }, rightStartCol2, tempY);


  //   doc.setFontType('bold');
  //   doc.textAlign("INVOICE Date: ", { align: "left" }, rightStartCol1, tempY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(invoiceJSON.InvoiceDate, { align: "left" }, rightStartCol2, tempY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Reference No: ", { align: "left" }, rightStartCol1, tempY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(invoiceJSON.RefNo, { align: "left" }, rightStartCol2, tempY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Total: ", { align: "left" }, rightStartCol1, tempY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(invoiceJSON.TotalAmnt, { align: "left" }, rightStartCol2, tempY);
  //   // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"INVOICE No  :  "+invoiceJSON.InvoiceNo + '     ', { align: 'right' });
  //   // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"INVOICE Date: "+invoiceJSON.InvoiceDate + '     ', { align: 'right' });
  //   // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"Reference No: "+invoiceJSON.RefNo + '     ', { align: 'right' });
  //   // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"Total       :  Rs. "+invoiceJSON.TotalAmnt + '     ', { align: 'right' });

  //   doc.setFontType('normal');

  //   doc.setLineWidth(1);
  //   // doc.line(20, startY+lineSpacing.NormalSpacing, 580, startY+=lineSpacing.NormalSpacing);
  //   doc.line(20, startY + lineSpacing.NormalSpacing, 220, startY + lineSpacing.NormalSpacing);
  //   doc.line(380, startY + lineSpacing.NormalSpacing, 580, startY + lineSpacing.NormalSpacing);

  //   doc.setFontSize(fontSizes.Head2TitleFontSize);
  //   doc.setFontType('bold');
  //   doc.textAlign("TAX INVOICE", { align: "center" }, startX, startY += lineSpacing.NormalSpacing + 2);

  //   doc.setFontSize(fontSizes.NormalFontSize);
  //   doc.setFontType('bold');

  //   //-------Customer Info Billing---------------------
  //   var startBilling = startY;

  //   doc.textAlign("Billing Address,", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.textAlign(customer_BillingInfoJSON.CustomerName, { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontSize(fontSizes.NormalFontSize);
  //   doc.textAlign("GSTIN", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(customer_BillingInfoJSON.CustomerGSTIN, { align: "left" }, 80, startY);


  //   // doc.setFontType('bold');
  //   // doc.textAlign("PAN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
  //   // doc.setFontType('normal');
  //   // doc.textAlign(customer_BillingInfoJSON.CustomerPAN, {align: "left"}, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Address", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine1, { align: "left" }, 80, startY);
  //   doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine2, { align: "left" }, 80, startY += lineSpacing.NormalSpacing);
  //   doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine3, { align: "left" }, 80, startY += lineSpacing.NormalSpacing);

  //   doc.setFontType('bold');
  //   doc.textAlign("STATE", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerState, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("PIN", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.PIN, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("EMAIL", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerEmail, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Phone: ", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerPhno, { align: "left" }, 80, startY);



  //   //-------Customer Info Shipping---------------------
  //   var rightcol1 = 340;
  //   var rightcol2 = 400;

  //   startY = startBilling;
  //   doc.setFontType('bold');
  //   doc.textAlign("Shipping Address,", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.textAlign(customer_BillingInfoJSON.CustomerName, { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontSize(fontSizes.NormalFontSize);
  //   doc.setFontType('bold');
  //   doc.textAlign("GSTIN", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(customer_BillingInfoJSON.CustomerGSTIN, { align: "left" }, rightcol2, startY);


  //   // doc.setFontType('bold');
  //   // doc.textAlign("PAN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
  //   // doc.setFontType('normal');
  //   // doc.textAlign(customer_BillingInfoJSON.CustomerPAN, {align: "left"}, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Address", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine1, { align: "left" }, rightcol2, startY);
  //   doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine2, { align: "left" }, rightcol2, startY += lineSpacing.NormalSpacing);
  //   doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine3, { align: "left" }, rightcol2, startY += lineSpacing.NormalSpacing);

  //   doc.setFontType('bold');
  //   doc.textAlign("STATE", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerState, { align: "left" }, rightcol2, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("PIN", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.PIN, { align: "left" }, rightcol2, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("EMAIL", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerEmail, { align: "left" }, rightcol2, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Phone: ", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerPhno, { align: "left" }, rightcol2, startY);




  //   var header = function (data) {
  //     doc.setFontSize(8);
  //     doc.setTextColor(40);
  //     doc.setFontStyle('normal');
  //     // doc.textAlign("TAX INVOICE", {align: "center"}, data.settings.margin.left, 50);

  //     //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
  //     // doc.text("Testing Report", 110, 50);
  //   };
  //   // doc.autoTable(res.columns, res.data, {margin: {top:  startY+=30}});
  //   doc.setFontSize(8);
  //   doc.setFontStyle('normal');

  //   var options = {
  //     beforePageContent: header,
  //     margin: {
  //       top: 50
  //     },
  //     styles: {
  //       overflow: 'linebreak',
  //       fontSize: 8,
  //       rowHeight: 'auto',
  //       columnWidth: 'wrap'
  //     },
  //     columnStyles: {
  //       1: { columnWidth: 'auto' },
  //       2: { columnWidth: 'auto' },
  //       3: { columnWidth: 'auto' },
  //       4: { columnWidth: 'auto' },
  //       5: { columnWidth: 'auto' },
  //       6: { columnWidth: 'auto' },
  //     },
  //     startY: startY += 50
  //   };

  //   var columns = [
  //     { title: "ID", dataKey: "id", width: 90 },
  //     { title: "Product", dataKey: "Product", width: 40 },
  //     { title: "Rate/Item", dataKey: "Rate/Item", width: 40 },
  //     { title: "Qty", dataKey: "Qty", width: 40 },
  //     { title: "Dsnt", dataKey: "Dsnt", width: 40 },
  //     { title: "S.Total", dataKey: "STotal", width: 40 },
  //     { title: "CGST", dataKey: "CGST", width: 40 },
  //     { title: "SGST", dataKey: "SGST", width: 40 },
  //     { title: "IGST", dataKey: "IGST", width: 40 },
  //     { title: "CESS", dataKey: "CESS", width: 40 },
  //     { title: "Total", dataKey: "Total", width: 40 },
  //   ];
  //   var rows = [
  //     { "id": 1, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10", "Qty": "12", "Dsnt": "0", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 2, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10", "Qty": "12", "Dsnt": "0", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 3, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": '', "Product": "", "Rate/Item": "Total", "Qty": "", "Dsnt": "20", "STotal": "360", "CGST": 60, "SGST": 60, "IGST": 0, "CESS": 60, "Total": 680 },

  //   ];

  //   // columnStyles: {
  //   //   id: {fillColor: 255}
  //   // },

  //   doc.autoTable(columns, rows, options);   //From dynamic data.
  //   // doc.autoTable(res.columns, res.data, options); //From htmlTable



  //   //-------Invoice Footer---------------------
  //   var rightcol1 = 340;
  //   var rightcol2 = 430;

  //   startY = doc.autoTableEndPosY() + 30;
  //   doc.setFontSize(fontSizes.NormalFontSize);

  //   doc.setFontType('bold');
  //   doc.textAlign("Sub Total,", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.textAlign(invoiceJSON.SubTotalAmnt, { align: "left" }, rightcol2, startY);
  //   doc.setFontSize(fontSizes.NormalFontSize);
  //   doc.setFontType('bold');
  //   doc.textAlign("CGST Rs.", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(invoiceJSON.TotalCGST, { align: "left" }, rightcol2, startY);


  //   doc.setFontType('bold');
  //   doc.textAlign("SGST Rs.", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(invoiceJSON.TotalSGST, { align: "left" }, rightcol2, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("IGST Rs.", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(invoiceJSON.TotalIGST, { align: "left" }, rightcol2, startY);


  //   doc.setFontType('bold');
  //   doc.textAlign("CESS Rs.", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(invoiceJSON.TotalCESS, { align: "left" }, rightcol2, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Total GST Rs.", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(invoiceJSON.TotalGST, { align: "left" }, rightcol2, startY);


  //   doc.setFontType('bold');
  //   doc.textAlign("Grand Total Rs.", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(invoiceJSON.TotalAmnt, { align: "left" }, rightcol2, startY);
  //   doc.setFontType('bold');
  //   doc.textAlign('For ' + comapnyJSON.CompanyName + ',', { align: "center" }, rightcol2, startY += lineSpacing.NormalSpacing + 50);
  //   doc.textAlign('Authorised Signatory', { align: "center" }, rightcol2, startY += lineSpacing.NormalSpacing + 50);

  //   doc.save("invoice.pdf");
  // }

  // generate_cutomPDF_landscape() {

  //   var doc = new jsPDF('landscape', 'pt', 'a4');

  //   //var rightStartCol1=400;
  //   //var rightStartCol2=480;
  //   var rightStartCol1 = doc.internal.pageSize.width - 195;
  //   var rightStartCol2 = doc.internal.pageSize.width - 115;

  //   var InitialstartX = 40;
  //   var startX = 40;
  //   var InitialstartY = 50;
  //   var startY = 0;

  //   var lineHeights = 12;

  //   var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
  //   res = doc.autoTableHtmlToJson(document.getElementById("tblInvoiceItemsList"));

  //   doc.setFontSize(fontSizes.SubTitleFontSize);
  //   doc.setFont('times');
  //   doc.setFontType('bold');

  //   //pdf.addImage(agency_logo.src, 'PNG', logo_sizes.centered_x, _y, logo_sizes.w, logo_sizes.h);
  //   doc.addImage(company_logo.src, 'PNG', startX, startY += 50, company_logo.w, company_logo.h);

  //   doc.textAlign(comapnyJSON.CompanyName, { align: "left" }, startX, startY += 15 + company_logo.h);
  //   doc.setFontSize(fontSizes.NormalFontSize);
  //   doc.textAlign("GSTIN", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(comapnyJSON.CompanyGSTIN, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("STATE", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(comapnyJSON.CompanyState, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("PAN", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(comapnyJSON.CompanyPAN, { align: "left" }, 80, startY);

  //   // doc.setFontType('bold');
  //   // doc.textAlign("Address", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
  //   // doc.setFontType('normal');
  //   // doc.textAlign(comapnyJSON.CompanyAddressLine1, {align: "left"}, 80, startY);
  //   // doc.textAlign(comapnyJSON.CompanyAddressLine2, {align: "left"}, 80, startY+=lineSpacing.NormalSpacing);
  //   // doc.textAlign(comapnyJSON.CompanyAddressLine3, {align: "left"}, 80, startY+=lineSpacing.NormalSpacing);

  //   doc.setFontType('bold');
  //   doc.textAlign("PIN", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(comapnyJSON.PIN, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("EMAIL", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(comapnyJSON.companyEmail, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Phone: ", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(comapnyJSON.companyPhno, { align: "left" }, 80, startY);

  //   var tempY = InitialstartY;


  //   doc.setFontType('bold');
  //   doc.textAlign("INVOICE NO: ", { align: "left" }, rightStartCol1, tempY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(invoiceJSON.InvoiceNo, { align: "left" }, rightStartCol2, tempY);


  //   doc.setFontType('bold');
  //   doc.textAlign("INVOICE Date: ", { align: "left" }, rightStartCol1, tempY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(invoiceJSON.InvoiceDate, { align: "left" }, rightStartCol2, tempY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Reference No: ", { align: "left" }, rightStartCol1, tempY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(invoiceJSON.RefNo, { align: "left" }, rightStartCol2, tempY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Total: ", { align: "left" }, rightStartCol1, tempY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(invoiceJSON.TotalAmnt, { align: "left" }, rightStartCol2, tempY);
  //   // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"INVOICE No  :  "+invoiceJSON.InvoiceNo + '     ', { align: 'right' });
  //   // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"INVOICE Date: "+invoiceJSON.InvoiceDate + '     ', { align: 'right' });
  //   // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"Reference No: "+invoiceJSON.RefNo + '     ', { align: 'right' });
  //   // doc.writeText(0, tempY+=lineSpacing.NormalSpacing ,"Total       :  Rs. "+invoiceJSON.TotalAmnt + '     ', { align: 'right' });

  //   doc.setFontType('normal');

  //   doc.setLineWidth(1);
  //   var lineEnd1 = (doc.internal.pageSize.width / 2) - 70;
  //   var lineEnd2 = doc.internal.pageSize.width - 10;
  //   // doc.line(20, startY+lineSpacing.NormalSpacing, 580, startY+=lineSpacing.NormalSpacing);
  //   doc.line(20, startY + lineSpacing.NormalSpacing, lineEnd1, startY + lineSpacing.NormalSpacing);
  //   doc.line(lineEnd1 + 140, startY + lineSpacing.NormalSpacing, lineEnd2, startY + lineSpacing.NormalSpacing);

  //   doc.setFontSize(fontSizes.Head2TitleFontSize);
  //   doc.setFontType('bold');
  //   doc.textAlign("TAX INVOICE", { align: "center" }, startX, startY += lineSpacing.NormalSpacing + 2);

  //   doc.setFontSize(fontSizes.NormalFontSize);
  //   doc.setFontType('bold');

  //   //-------Customer Info Billing---------------------
  //   var startBilling = startY;

  //   doc.textAlign("Billing Address,", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.textAlign(customer_BillingInfoJSON.CustomerName, { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontSize(fontSizes.NormalFontSize);
  //   doc.textAlign("GSTIN", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(customer_BillingInfoJSON.CustomerGSTIN, { align: "left" }, 80, startY);


  //   // doc.setFontType('bold');
  //   // doc.textAlign("PAN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
  //   // doc.setFontType('normal');
  //   // doc.textAlign(customer_BillingInfoJSON.CustomerPAN, {align: "left"}, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Address", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine1, { align: "left" }, 80, startY);
  //   doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine2, { align: "left" }, 80, startY += lineSpacing.NormalSpacing);
  //   doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine3, { align: "left" }, 80, startY += lineSpacing.NormalSpacing);

  //   doc.setFontType('bold');
  //   doc.textAlign("STATE", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerState, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("PIN", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.PIN, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("EMAIL", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerEmail, { align: "left" }, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Phone: ", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerPhno, { align: "left" }, 80, startY);



  //   //-------Customer Info Shipping---------------------
  //   // var rightcol1=340;
  //   // var rightcol2=400;
  //   var rightcol1 = doc.internal.pageSize.width - 255;
  //   var rightcol2 = doc.internal.pageSize.width - 195;

  //   startY = startBilling;
  //   doc.setFontType('bold');
  //   doc.textAlign("Shipping Address,", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.textAlign(customer_BillingInfoJSON.CustomerName, { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontSize(fontSizes.NormalFontSize);
  //   doc.setFontType('bold');
  //   doc.textAlign("GSTIN", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(customer_BillingInfoJSON.CustomerGSTIN, { align: "left" }, rightcol2, startY);


  //   // doc.setFontType('bold');
  //   // doc.textAlign("PAN", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);
  //   // doc.setFontType('normal');
  //   // doc.textAlign(customer_BillingInfoJSON.CustomerPAN, {align: "left"}, 80, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Address", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine1, { align: "left" }, rightcol2, startY);
  //   doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine2, { align: "left" }, rightcol2, startY += lineSpacing.NormalSpacing);
  //   doc.textAlign(customer_BillingInfoJSON.CustomerAddressLine3, { align: "left" }, rightcol2, startY += lineSpacing.NormalSpacing);

  //   doc.setFontType('bold');
  //   doc.textAlign("STATE", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerState, { align: "left" }, rightcol2, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("PIN", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.PIN, { align: "left" }, rightcol2, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("EMAIL", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerEmail, { align: "left" }, rightcol2, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Phone: ", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   doc.textAlign(customer_BillingInfoJSON.CustomerPhno, { align: "left" }, rightcol2, startY);




  //   var header = function (data) {
  //     doc.setFontSize(8);
  //     doc.setTextColor(40);
  //     doc.setFontStyle('normal');
  //     // doc.textAlign("TAX INVOICE", {align: "center"}, data.settings.margin.left, 50);

  //     //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
  //     // doc.text("Testing Report", 110, 50);
  //   };
  //   // doc.autoTable(res.columns, res.data, {margin: {top:  startY+=30}});
  //   doc.setFontSize(8);
  //   doc.setFontStyle('normal');

  //   var options = {
  //     beforePageContent: header,
  //     margin: {
  //       top: 50
  //     },
  //     styles: {
  //       overflow: 'linebreak',
  //       fontSize: 8,
  //       rowHeight: 'auto',
  //       columnWidth: 'wrap'
  //     },
  //     columnStyles: {
  //       1: { columnWidth: 'auto' },
  //       2: { columnWidth: 'auto' },
  //       3: { columnWidth: 'auto' },
  //       4: { columnWidth: 'auto' },
  //       5: { columnWidth: 'auto' },
  //       6: { columnWidth: 'auto' },
  //     },
  //     startY: startY += 50
  //   };

  //   var columns = [
  //     { title: "ID", dataKey: "id", width: 90 },
  //     { title: "Product", dataKey: "Product", width: 40 },
  //     { title: "Rate/Item", dataKey: "Rate/Item", width: 40 },
  //     { title: "Qty", dataKey: "Qty", width: 40 },
  //     { title: "Dsnt", dataKey: "Dsnt", width: 40 },
  //     { title: "S.Total", dataKey: "STotal", width: 40 },
  //     { title: "CGST", dataKey: "CGST", width: 40 },
  //     { title: "SGST", dataKey: "SGST", width: 40 },
  //     { title: "IGST", dataKey: "IGST", width: 40 },
  //     { title: "CESS", dataKey: "CESS", width: 40 },
  //     { title: "Total", dataKey: "Total" },
  //   ];
  //   var rows = [
  //     { "id": 1, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10", "Qty": "12", "Dsnt": "0", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 2, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10", "Qty": "12", "Dsnt": "0", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 3, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": 4, "Product": "Shaw", "Rate/Item": "10", "Qty": "12", "Dsnt": "10", "STotal": "120", "CGST": 20, "SGST": 20, "IGST": 0, "CESS": 20, "Total": 180 },
  //     { "id": '', "Product": "", "Rate/Item": "Total", "Qty": "", "Dsnt": "20", "STotal": "360", "CGST": 60, "SGST": 60, "IGST": 0, "CESS": 60, "Total": 680 },

  //   ];

  //   // columnStyles: {
  //   //   id: {fillColor: 255}
  //   // },

  //   doc.autoTable(columns, rows, options);   //From dynamic data.
  //   // doc.autoTable(res.columns, res.data, options); //From htmlTable



  //   //-------Invoice Footer---------------------

  //   var rightcol1 = doc.internal.pageSize.width - 255;
  //   var rightcol2 = doc.internal.pageSize.width - 195;

  //   startY = doc.autoTableEndPosY() + 30;
  //   doc.setFontSize(fontSizes.NormalFontSize);

  //   doc.setFontType('bold');
  //   doc.textAlign("Sub Total,", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.textAlign(invoiceJSON.SubTotalAmnt, { align: "left" }, rightcol2, startY);
  //   doc.setFontSize(fontSizes.NormalFontSize);
  //   doc.setFontType('bold');
  //   doc.textAlign("CGST Rs.", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(invoiceJSON.TotalCGST, { align: "left" }, rightcol2, startY);


  //   doc.setFontType('bold');
  //   doc.textAlign("SGST Rs.", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(invoiceJSON.TotalSGST, { align: "left" }, rightcol2, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("IGST Rs.", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(invoiceJSON.TotalIGST, { align: "left" }, rightcol2, startY);


  //   doc.setFontType('bold');
  //   doc.textAlign("CESS Rs.", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(invoiceJSON.TotalCESS, { align: "left" }, rightcol2, startY);

  //   doc.setFontType('bold');
  //   doc.textAlign("Total GST Rs.", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(invoiceJSON.TotalGST, { align: "left" }, rightcol2, startY);


  //   doc.setFontType('bold');
  //   doc.textAlign("Grand Total Rs.", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  //   doc.setFontType('normal');
  //   // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  //   doc.textAlign(invoiceJSON.TotalAmnt, { align: "left" }, rightcol2, startY);
  //   doc.setFontType('bold');
  //   doc.textAlign('For ' + comapnyJSON.CompanyName + ',', { align: "center" }, rightcol2, startY += lineSpacing.NormalSpacing + 50);
  //   doc.textAlign('Authorised Signatory', { align: "center" }, rightcol2, startY += lineSpacing.NormalSpacing + 50);

  //   doc.save("invoice.pdf");
  // }

  //    var columns = [
  //   { title: "#", dataKey: "id" },
  //   { title: "Description", dataKey: "item" },
  //   { title: "Item Price", dataKey: "Item Price" },
  //   { title: "Quantity", dataKey: "Quantity" },
  //   { title: "Total", dataKey: "Total" },
  // ];

  // var rows = [
  //   { "id": 1, "item": value["Item Desc"], "Item Price": value["Item Price"], "Quantity": value["Quantity"], "Total": value["Total"] },
  // ];


  // doc.autoTable(columns, rows, {
  //   //
  //   theme: 'striped',
  //   //      styles: { fillColor: [34, 85, 186] },
  //   columnStyles: {
  //     id: { fillColor: 255 }
  //   },
  //   margin: {
  //     top: 120
  //   },
  //   didDrawPage: function (data) {
  //     // doc.text("Quotation", 40, 40);
  //     // doc.text("a", 40, 40);
  //     // doc.text("b", 550, 40);
  //     // doc.text("c", 40, 800);
  //     // doc.text("d", 550, 800);
  //   }
  // });


}
