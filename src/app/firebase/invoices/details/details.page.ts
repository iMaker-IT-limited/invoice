import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable'
import { Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseService } from '../../firebase-integration.service';
import { AuthService } from './../../../../app/services/auth.service';

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
  invoiceDetail: any;
  uid: string;
  email: string;
  invoiceList: any;
  myimage: Observable<any>;
  base64Image: any;
  companyprofile: unknown;
  companyemail: any;
  companyaddress: any;
  company_name: any;
  website: any;
  logo_base64Image: any;
  downloadURL: any;
  Signaturebase64Image: any;
  mySignatureimage: Observable<any>;
  reimburshForm: any;
  color_theme: any;
  statusList: unknown;
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

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private firebaseService: FirebaseService
  ) {
    this.uid = this.authService.uid();
    this.email = this.authService.email();
    this.color_theme = [70, 130, 180];
    console.log('quotes data: ', this.quotesData);
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

  onSignatureChange($event: Event) {
    const file = ($event.target as HTMLElement)['files'][0];
    console.log('file is: ', file);
    this.convertToSignatureBase64(file);
  }

  convertToSignatureBase64(file: File) {
    this.mySignatureimage = new Observable((subscriber: Subscriber<any>) => {
      this.readSignatureFile(file, subscriber);
    })

    this.mySignatureimage.subscribe(res => {
      console.log(res);
      this.Signaturebase64Image = res;
    })
  }

  readSignatureFile(file: File, subscriber: Subscriber<any>) {
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
      const result = JSON.parse(data.data);
      const results = JSON.parse(data.datas);
      this.invoiceList = results;
      this.invoiceDetail = result;
      console.log(result, results);
    })

    this.getCompanyProfile();
    this.getLogisticCompanyProfile();
    this.buildForm();
    // this.getCustomerNotes();
    // this.getTermsandConditions();
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

  ionViewWillEnter() {
    this.onStatus();
  }

  selectTheme(colors) {
    var color_theme;

    switch (colors) {
      case "black":
        color_theme = [0, 0, 0];
        break;
      case "blue":
        color_theme = [0, 94, 177];
        break;
      case "cyan":
        color_theme = [244, 255, 255];
        break;
      case "teal":
        color_theme = [0, 128, 128];
        break;
      case "steelblue":
        color_theme = [70, 130, 180];
        break;
      case "orange":
        color_theme = [255, 69, 0];
        break;
      default:
        // color_theme = [0, 46, 87];
        color_theme = [0, 117, 221];
    }

    console.log(color_theme);
    this.color_theme = color_theme;

  }
  selectcolortheme() {
    var color_theme;
    var colors = document.getElementById("color")['value'];

    switch (colors) {
      case "black":
        color_theme = [0, 0, 0];
        break;
      case "blue":
        color_theme = [0, 94, 177];
        break;
      case "cyan":
        color_theme = [244, 255, 255];
        break;
      case "teal":
        color_theme = [0, 128, 128];
        break;
      case "steelblue":
        color_theme = [70, 130, 180];
        break;
      case "orange":
        color_theme = [255, 69, 0];
        break;
      default:
        // color_theme = [0, 46, 87];
        color_theme = [0, 117, 221];
    }

    console.log(color_theme);
    this.color_theme = color_theme;

  }
  testtablePDFfordeliverynote(value) {

    console.log('delivery note', value, value.salesList, value.salesList.length);

    //   var doc = new jsPDF('p', 'pt');
    var doc = new jsPDF();
    console.log(doc.getFontList());
    doc.getFontList();
    // 添加并设置字体
    doc.addFont('SourceHanSans-Normal.ttf', 'SourceHanSans-Normal', 'normal');
    doc.setFont('SourceHanSans-Normal');
    doc.setFontSize(13);
    doc.text(120, 20, 'Delivery note')

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
        cellPadding: 1,
        //  fillColor: [255, 0, 0]
      },
      theme: 'plain',
      html: '#billto',
      margin: {
        top: 40
      }
    })

    // A4 297mm x 210mm

    // body
    // for logistic 
    doc.autoTable({
      theme: 'grid',
      styles: {
        font: 'SourceHanSans-Normal',
        fontSize: 6,
        //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
        overflow: 'linebreak',
        halign: 'left',
        //  cellPadding: 4
        //   fillColor: [255, 0, 0]
      },
      columnStyles: {  // total width 196 - 14 = 182 => 12, 
        // 0: { cellWidth: 60 },
        // 1: { cellWidth: 30 },
        // 2: { cellWidth: 30 },
        // 3: { cellWidth: 30 },
        // 4: { cellWidth: 30 },
        // 5: { cellWidth: 30 },
      },
      html: '#logistic_one'
    })

    doc.autoTable({
      theme: 'grid',
      styles: {
        font: 'SourceHanSans-Normal',
        fontSize: 6,
        //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
        overflow: 'linebreak',
        halign: 'left',
        //  cellPadding: 4
        //   fillColor: [255, 0, 0]
      },
      columnStyles: {  // total width 196 - 14 = 182 => 12, 
        // 0: { cellWidth: 60 },
        // 1: { cellWidth: 30 },
        // 2: { cellWidth: 30 },
        // 3: { cellWidth: 30 },
        // 4: { cellWidth: 30 },
        // 5: { cellWidth: 30 },
      },
      html: '#logistic_two'
    })

    var res = doc.autoTableHtmlToJson(document.getElementById("my-table"));
    console.log(res);

    var columns = [res.columns[0], res.columns[1], res.columns[2], res.columns[3]];
    res.data.splice(0, 1);
    doc.autoTable(columns, res.data, {
      headStyles: {
        fillColor: this.color_theme,
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
        0: { cellWidth: 15 },
        1: { cellWidth: 52 },
        2: { cellWidth: 95 },
        3: { cellWidth: 20 },
        // 4: { cellWidth: 22 },
        // 5: { cellWidth: 30 },
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
      headStyles: {
        fillColor: this.color_theme,
        //  fontSize: 11
      },
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
      headStyles: {
        fillColor: this.color_theme,
        //  fontSize: 11
      },
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

    var width = (doc.internal.pageSize.getWidth()) / 6.2;
    var height = (doc.internal.pageSize.getHeight()) / 10.5;
    if (this.Signaturebase64Image) {
      //      doc.addImage(this.Signaturebase64Image, 'JPEG', 10, 240, width, height);

      doc.addImage(this.Signaturebase64Image, 'JPEG', 160, 240, width, height);

    } else {
      console.log('no e signature');

    }

    doc.save(`${value["Estimate ID"]}.pdf`);

  }

  testtablePDF(value) {
    console.log(value);

    //   var doc = new jsPDF('p', 'pt');
    var doc = new jsPDF();
    // 添加并设置字体
    doc.addFont('SourceHanSans-Normal.ttf', 'SourceHanSans-Normal', 'normal');
    doc.setFont('SourceHanSans-Normal');

    // doc.text(20, 20, '简体中文、繁體体中文、English、ジャパン、한국어');
    doc.setFontSize(12);
    doc.text(120, 20, 'Invoice');
    doc.setFontSize(10);
    doc.text(120, 24, value["Invoice Number"].toString());

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
        font: 'SourceHanSans',
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

    // A4 297mm x 210mm
    // body
    // doc.autoTable({
    //   columnStyles: { font: 'SourceHanSans-Normal' },
    //   styles: { font: 'SourceHanSans-Normal', fontSize: 8 },
    //   theme: 'striped',
    //   head: [['名字', 'Email', 'Country']],
    //   body: [
    //     ['David', 'david@example.com', 'Sweden'],
    //     ['Castille', 'castille@example.com', 'Spain'],
    //   ]
    // })
    // for logistic 
    doc.autoTable({
      theme: 'grid',
      styles: {
        font: 'SourceHanSans-Normal',
        fontSize: 6,
        //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
        overflow: 'linebreak',
        halign: 'left',
        //  cellPadding: 4
        //   fillColor: [255, 0, 0]
      },
      columnStyles: {  // total width 196 - 14 = 182 => 12, 
        // 0: { cellWidth: 60 },
        // 1: { cellWidth: 30 },
        // 2: { cellWidth: 30 },
        // 3: { cellWidth: 30 },
        // 4: { cellWidth: 30 },
        // 5: { cellWidth: 30 },
      },
      html: '#logistic_one'
    })

    doc.autoTable({
      theme: 'grid',
      styles: {
        font: 'SourceHanSans-Normal',
        fontSize: 6,
        //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
        overflow: 'linebreak',
        halign: 'left',
        //  cellPadding: 4
        //   fillColor: [255, 0, 0]
      },
      columnStyles: {  // total width 196 - 14 = 182 => 12, 
        // 0: { cellWidth: 60 },
        // 1: { cellWidth: 30 },
        // 2: { cellWidth: 30 },
        // 3: { cellWidth: 30 },
        // 4: { cellWidth: 30 },
        // 5: { cellWidth: 30 },
      },
      html: '#logistic_two'
    })
    var res = doc.autoTableHtmlToJson(document.getElementById("my-table"));
    console.log(res);

    var columns = [res.columns[0], res.columns[1], res.columns[2], res.columns[3], res.columns[4], res.columns[5]];
    res.data.splice(0, 1);
    doc.autoTable(columns, res.data, {
      headStyles: {
        //  fillColor: [0, 0, 0],
        fillColor: this.color_theme

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
        font: 'SourceHanSans',
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
      headStyles: {
        //  fillColor: [0, 0, 0],
        fillColor: this.color_theme

        //  fontSize: 11
      },
      styles: {
        font: 'SourceHanSans',
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
      headStyles: {
        //  fillColor: [0, 0, 0],
        fillColor: this.color_theme

        //  fontSize: 11
      },
      styles: {
        font: 'SourceHanSans',
        fontSize: 7,
        //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
        overflow: 'linebreak',
        halign: 'left',
        cellPadding: 4
        //   fillColor: [255, 0, 0]
      },
      columnStyles: { europe: { font: 'SourceHanSans' } }, // European countries centered
      body: [{ europe: `${value['Terms & Conditions']}` }],
      columns: [
        { header: 'Terms & Conditions', dataKey: 'europe' },
      ],
    })
    var width = (doc.internal.pageSize.getWidth()) / 6.2;
    var height = (doc.internal.pageSize.getHeight()) / 10.5;
    if (this.Signaturebase64Image) {
      doc.addImage(this.Signaturebase64Image, 'JPEG', 10, 240, width, height);
    } else {
      console.log('no e signature');
    }
    //    doc.addImage(this.Signaturebase64Image, 'JPEG', 10, 240, width, height);
    doc.save(`${value["Estimate ID"]}.pdf`);

  }

  showSideNav(value) {
    if (value == true) {
      document.getElementById("grid-container2").style.gridTemplateColumns = "30% auto";
    } else {
      document.getElementById("grid-container2").style.gridTemplateColumns = "0% 100%";
    }

  }

  updateInvoices(): void {
    console.log(this.email, this.uid, this.invoiceDetail);

    const data = JSON.stringify(this.invoiceDetail);
    console.log(data);

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        email: this.email,
        uid: this.uid
      }
    };
    this.navCtrl.navigateRoot(["/firebase/update#invoices"], navigationExtras);
  }

  deleteInvoice(value) {
    console.log(this.invoiceDetail, this.email, this.uid, value);
    this.firebaseService.deleteInvoices(this.invoiceDetail.id, this.uid, this.email).then(() => {
      this.onDismiss();
    });
  }

  returnProduct(x, y) {
    return x * y;
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

  buildForm() {

    this.reimburshForm = this.formBuilder.group({
      "payment": new FormControl(),
      "payment_date": new FormControl(new Date()),
      "payment_amount": new FormControl()
    })
  }

  onVoid(value) {
    value['Estimate Status'] = 'void';
    console.log(this.email, this.uid, value, this.reimburshForm.value);

    this.firebaseService.updateInvoices(value.id, this.uid, this.email, value);
    const data = JSON.stringify(value);
    console.log(data);

    this.firebaseService.createStatus(value.id, this.uid, this.email, value);

  }

  onMarkAsSent(value) {
    const today = new Date();
    const today_getTime = new Date().getTime();
    const expiry_date = new Date(value['Expiry Date']);
    const expiry_date_getTime = expiry_date.getTime();
    console.log(today_getTime, expiry_date_getTime);

    console.log(today, expiry_date);

    if (today_getTime < expiry_date_getTime) {
      console.log('before expired date');
      value['Estimate Status'] = 'sent';
    } else if (today_getTime > expiry_date_getTime) {
      console.log('after expired date');
      value['Estimate Status'] = 'overdue';
    } else {
      console.log('not expired');

    }
    //  value['Estimate Status'] = 'sent';
    console.log(this.email, this.uid, value, this.reimburshForm.value);

    this.firebaseService.updateInvoices(value.id, this.uid, this.email, value);
    // const data = JSON.stringify(value);
    // console.log(data);

    this.firebaseService.createStatus(value.id, this.uid, this.email, value);
  }

  onPaymentReceived(value) {
    value['Estimate Status'] = 'paid';

    // payment received 
    // status becomes paid
    // 
    console.log(this.email, this.uid, value, this.reimburshForm.value['payment']);

    value['payment'] = this.reimburshForm.value['payment'];
    value['payment_date'] = this.reimburshForm.value['payment_date'];
    value['payment_amount'] = this.reimburshForm.value['payment_amount'];
    console.log('payment status: ', value, value['payment'], value['payment_date']);
    // value['Payment method'] = this.reimburshForm.value
    this.firebaseService.updateInvoices(value.id, this.uid, this.email, value);
    const invoice_data = JSON.stringify(value);
    console.log(invoice_data);

    this.firebaseService.createPaymentReceived(this.uid, this.email, value);
    const payment_received_data = JSON.stringify(value);
    console.log(payment_received_data);

    this.firebaseService.createStatus(value.id, this.uid, this.email, value);

    // const navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     data: data,
    //     email: this.email,
    //     uid: this.uid
    //   }
    // };
    // this.navCtrl.navigateRoot(["/firebase/paymentsrec#create"], navigationExtras);

  }

  onStatus() {
    console.log(this.invoiceDetail.id, this.email, this.uid);

    this.firebaseService.readStatus(this.invoiceDetail.id, this.uid, this.email).subscribe(res => {
      console.log(res);
      this.statusList = res;
    })
    //   .subscribe(data => {
    //   this.statusList = data;
    //   console.log(data);

    // });

    //    this.firebaseService.readStatus(this.invoiceDetail.id, this.uid, this.email).snapshotChanges()
  }
}
