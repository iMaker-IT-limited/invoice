import { Component, OnInit, HostBinding, ViewChild } from "@angular/core";
import { ActivatedRoute, NavigationExtras } from "@angular/router";

// import { UserProfileModel } from "./user-profile.model";
import {
  AlertController,
  IonReorderGroup,
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";

// import { LanguageService } from "../../language/language.service";
import { TranslateService } from "@ngx-translate/core";
import * as firebase from "firebase";
import { AuthService } from "./../../../../app/services/auth.service";
import { FirebaseService } from "./../../../../app/firebase/firebase-integration.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Storage } from "@ionic/storage";

// contacts
import contactsdata from './../../../../assets/contacts.json';
// items
import itemsdata from './../../../../assets/items.json';
// estimates
import estimatesdata from './../../../../assets/estimates.json';
// invoices
import invoicesdata from './../../../../assets/invoices.json';

import data from './../../../../assets/company.json';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {

  @ViewChild(IonReorderGroup, { static: false }) reorderGroup: IonReorderGroup;

  // ngx-table start
  private invoices = invoicesdata;
  private companies = data;
  tableStyle = 'dark';
  customRowClass = false;
  companiesArr: any[];

  invoicesList: any;
  // ngx-table end

  grid = false;
  myNumber = 5;
  collapse: boolean;
  // profile: UserProfileModel;
  available_languages = [];
  translations;
  displayName: string;
  email: string;
  providerData: firebase.UserInfo;
  providerDataDisplayName: string;
  name: string;
  photoURL: string;
  uid: string;
  checkboxForm: FormGroup;
  role: any;
  enquiryToPS: unknown[];
  enquiryToT: unknown[];
  selectedID: string;
  salesquotation: unknown[];
  phoneNumber: string;
  enquiryToTLength: number;
  enquiryToPSLength: number;
  salesquotationLength: number;
  signin: string;
  countdownDate: number;
  countdownDbte: number;
  isRead: boolean;
  thatSQ: unknown;
  isAccepted: boolean;
  now: number;
  showMore: boolean;
  //  companiesArr: any[];
  // @HostBinding("class.is-shell") get isShell() {
  //   return this.profile && this.profile.isShell ? true : false;
  // }

  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    slidesPerView: 5,

  }

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private route: ActivatedRoute,
    public translate: TranslateService,
    //  public languageService: LanguageService,
    public alertController: AlertController
  ) {
    this.uid = this.authService.uid();
    this.email = this.authService.email();

  }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.name = user.displayName;
        this.photoURL = user.photoURL;
        this.uid = user.uid;
        this.email = user.email;
        this.phoneNumber = user.phoneNumber;
        console.log(
          this.uid,
          this.email,
          this.phoneNumber,
          this.name,
          this.photoURL
        );

        console.log(this.uid);
      } else {
        console.log("Not authenticated");
        // No user is signed in.
      }
    });

  }

  ionViewWillEnter() {
    this.readInvoices();
  }

  // 1 check accepted and reject function done
  // 2 go to profile page and send sq as a first timer

  // 3 send email with on delete

  // async onGetEnquiryToTeacher() {
  //   this.myNumber += 1;
  //   console.log(this.myNumber);
  //   console.log(this.uid);
  //   this.firebaseService.getEnquiryToTeacher(this.uid).subscribe(res => {
  //     console.log(res);
  //     this.enquiryToT = res;
  //     this.enquiryToTLength = res.length;
  //   });
  // }

  onReadQE(value) {
    console.log(value);
  }

  // ngx - table start
  switchStyle() {
    if (this.tableStyle == 'dark') {
      this.tableStyle = 'bootstrap';
    } else {
      this.tableStyle = 'dark';
    }
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

  // onDetailPage(value, timestamp) {
  //   console.log(value, timestamp);

  //   const data = JSON.stringify(value);
  //   console.log(data);

  //   const navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       data: data
  //     }
  //   };
  //   this.navCtrl.navigateForward(["/firebase/form-results"], navigationExtras);
  // }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    console.log(event, val);

    // filter our data
    // const temp = this.temp.filter(function (d) {
    //   return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    // });

    // // update the rows
    // this.rows = temp;
    // // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  changeDateFormat(date) {
    const dateFormat = new Date(date).toString().substring(0, 15);
    return dateFormat;
  }

  // ngx - table end
  onCreateContact() {
    this.navCtrl.navigateForward(["/firebase/create#invoices"]);
  }

  onDetailPage(value, values) {
    console.log(value, values);
    const data = JSON.stringify(value);
    const datas = JSON.stringify(values);

    console.log(data);

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        datas: datas
      }
    };
    this.navCtrl.navigateRoot(["/firebase/invoices#details"], navigationExtras);
  }

  // CRUD 
  readInvoices(): void {
    console.log(this.email, this.uid);
    this.firebaseService.readInvoices(this.uid, this.email).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.invoicesList = data;
      console.log(this.invoicesList);

    });
  }
}