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
// paymentsreceived
import paymentsreceiveddata from './../../../../assets/paymentsrec.json';

import data from './../../../../assets/company.json';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-paymentsrec',
  templateUrl: './paymentsrec.page.html',
  styleUrls: ['./paymentsrec.page.scss'],
})
export class PaymentsrecPage implements OnInit {

  @ViewChild(IonReorderGroup, { static: false }) reorderGroup: IonReorderGroup;

  // ngx-table start
  private paymentsrec = paymentsreceiveddata;
  private companies = data;
  tableStyle = 'dark';
  customRowClass = false;
  companiesArr: any[];

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
  paymentreceivedList: any;

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private route: ActivatedRoute,
    public translate: TranslateService,
    //  public languageService: LanguageService,
    public alertController: AlertController,
    private storage: Storage
  ) {
    this.uid = this.authService.uid();
    this.email = this.authService.email();

    console.log(this.companies, this.paymentsrec);
    const arr = [];
    for (var i = 0; i < 10; i++) {
      console.log(this.companies[i]);
      arr.push(this.companies[i]);
    }
    this.companiesArr = arr;

    this.checkboxForm = new FormGroup({
      role: new FormControl(""),
      provider_name: new FormControl(""),
      provider_email: new FormControl(""),
      provider_phone: new FormControl(""),
      name: new FormControl("")
    });
  }

  ngOnInit() { }

  getTranslations() {
    // get translations for this page to use in the Language Chooser Alert
    this.translate
      .getTranslation(this.translate.currentLang)
      .subscribe(translations => {
        this.translations = translations;
      });
  }

  // async openLanguageChooser() {
  //   this.available_languages = this.languageService
  //     .getLanguages()
  //     .map(item => ({
  //       name: item.name,
  //       type: "radio",
  //       label: item.name,
  //       value: item.code,
  //       checked: item.code === this.translate.currentLang
  //     }));

  //   const alert = await this.alertController.create({
  //     header: this.translations.SELECT_LANGUAGE,
  //     inputs: this.available_languages,
  //     cssClass: "language-alert",
  //     buttons: [
  //       {
  //         text: this.translations.CANCEL,
  //         role: "cancel",
  //         cssClass: "secondary",
  //         handler: () => { }
  //       },
  //       {
  //         text: this.translations.OK,
  //         handler: data => {
  //           if (data) {
  //             this.translate.use(data);
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  ionViewWillEnter() {
    // case when non first timer user(ie. teacher) fill in the form when logged out, submit quotation enquiry
    // this.save();
    this.readPaymentReceived();

  }

  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log(
      ev.detail.complete(),
      "Dragged from index",
      ev.detail.from,
      "to",
      ev.detail.to
    );

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

  selectedEnquiry(value) {
    console.log(value, value.id);

    this.selectedID = "check";
  }

  changeTargetValue(value): string {
    switch (true) {
      case value === 1:
        return "K1";
      case value === 2:
        return "K2";
      case value === 3:
        return "K3";
      case value === 4:
        return "P1";
      case value === 5:
        return "P2";
      case value === 6:
        return "P3";
      case value === 7:
        return "P4";
      case value === 8:
        return "P5";
      case value === 9:
        return "P6";
      case value === 10:
        return "S1";
      case value === 11:
        return "S2";
      case value === 12:
        return "S3";
      case value === 13:
        return "S4";
      case value === 14:
        return "S5";
      case value === 15:
        return "S6";
      case value === 16:
        return "大專";
      case value >= 17:
        return "";
      // case value <= 3:
      //   return "K1 - K3";
      // case value > 3 && value <= 6:
      //   return "P1 - P3";
      // case value > 6 && value <= 9:
      //   return "P4 - P6";
      // case value > 9 && value <= 12:
      //   return "S1 - S3";
      // case value > 12 && value <= 15:
      //   return "S4 - S6";
      // case value > 15:
      //   return "大專";
    }
  }

  checkUserStatus() {
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          // User is signed in.

          // this.uid = user.uid;
          // this.displayName = user.displayName;
          // this.photoURL = user.photoURL;
          const displayName = user.displayName;
          const email = user.email;
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const uid = user.uid;
          const phoneNumber = user.phoneNumber;
          const providerData = user.providerData;
          user.getIdToken().then(accessToken => {
            console.log("accessToken: ", accessToken);

            document.getElementById("sign-in-status").textContent = "Signed in";
            document.getElementById("sign-in").textContent = "Sign out";
            this.signin = "Sign out";
            this.displayName = displayName;
            this.uid = uid;
            //  this.email = email;
            this.photoURL = photoURL;
            document.getElementById(
              "account-details"
            ).textContent = JSON.stringify(
              {
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData
              },
              null,
              "  "
            );
          });
        } else {
          // User is signed out.
          document.getElementById("sign-in-status").textContent = "Signed out";
          document.getElementById("sign-in").textContent = "Sign in";
          this.signin = "Sign in";
          document.getElementById("account-details").textContent = "null";
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }

  number(value: number, numDay: number) {
    //   console.log(value, numDay + 1, Number(numDay) + 1);

    const getcountday = Number(numDay) + 1;
    const limit = 1000 * 60 * 60 * 24 * getcountday + Number(value);
    this.countdownDate = new Date("Feb 13 2020").getTime();
    //     // console.log(this.countdownDate);
    const v = new Date(limit);
    const w = v.toString().substr(4, 11);
    const countdownDate = new Date(w.toString()).getTime();
    //   console.log(countdownDate, w, v, value);
    return countdownDate;
  }

  hideDropZone() {
    setTimeout(() => {
      console.log("hi");
    }, 3000);
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
  onCreateReceivedPayments() {
    this.navCtrl.navigateRoot(["/firebase/paymentsrec#create"]);
  }

  onDetailPage(value) {
    console.log(value);
    const data = JSON.stringify(value);
    console.log(data);

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: data
      }
    };
    this.navCtrl.navigateRoot(["/firebase/paymentsrec#details"], navigationExtras);
  }

  readPaymentReceived(): void {
    console.log(this.email, this.uid);
    this.firebaseService.readPaymentReceived(this.uid, this.email).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.paymentreceivedList = data;
      console.log(this.paymentreceivedList);

    });
  }
}