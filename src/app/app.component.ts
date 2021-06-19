import { Component, OnInit } from "@angular/core";
import { Plugins } from "@capacitor/core";
const { SplashScreen } = Plugins;
import { TranslateService } from "@ngx-translate/core";
import {
  MenuController,
  NavController,
  Platform,
} from "@ionic/angular";
import * as firebase from "firebase";
import * as firebaseui from "firebaseui";

import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { Storage } from "@ionic/storage";
import dataInvoice from '../assets/ionInvoiceList.json';
import data from '../assets/categories.json';
import { FormGroup } from '@angular/forms';
import { map } from "rxjs/operators";
// import { FirebaseService } from "./firebase/firebase-integration.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: [
    "./side-menu/styles/side-menu.scss",
    "./side-menu/styles/side-menu.shell.scss",
    "./side-menu/styles/side-menu.responsive.scss"
  ]
})

export class AppComponent implements OnInit {
  private ionInvoice = dataInvoice;
  private categories = data;
  collapseCard: boolean;
  collapseCardA: boolean;
  collapseCardB: boolean;
  collapseCardC: boolean;
  collapseCardD: boolean;
  collapseCardE: boolean;
  collapseCardF: boolean;
  collapseCardG: boolean;
  collapseAboutUs: boolean;
  collapseJoinUs: boolean;

  // accountPages = [
  //   {
  //     title: "Log In",
  //     url: "/auth/login",
  //     icon: "./assets/sample-icons/side-menu/login.svg"
  //   },
  //   {
  //     title: "Sign Up",
  //     url: "/auth/signup",
  //     icon: "./assets/sample-icons/side-menu/signup.svg"
  //   },
  //   {
  //     title: "About Us",
  //     url: "/pages/about-us",
  //     icon: "./assets/sample-icons/side-menu/tutorial.svg"
  //   },
  //   {
  //     title: "Join Us",
  //     url: "/pages/join-us",
  //     icon: "./assets/sample-icons/side-menu/getting-started.svg"
  //   },
  //   {
  //     title: "Contact Us",
  //     url: "/pages/contact-us",
  //     icon: "./assets/sample-icons/side-menu/warning.svg"
  //   },
  //   {
  //     title: "Tutorial",
  //     url: "/walkthrough",
  //     icon: "./assets/sample-icons/side-menu/tutorial.svg"
  //   },
  //   {
  //     title: "Getting Started",
  //     url: "/getting-started",
  //     icon: "./assets/sample-icons/side-menu/getting-started.svg"
  //   },
  //   {
  //     title: "404 page",
  //     url: "/page-not-found",
  //     icon: "./assets/sample-icons/side-menu/warning.svg"
  //   }
  // ];

  textDir = "ltr";
  photoURL: string;
  displayName: string;
  signin: string;
  ui: firebaseui.auth.AuthUI;
  uid: string;
  email: string;
  isAnonymous: boolean;
  FilterForm: FormGroup;
  // contactsList: any;
  // companyProfile: any;
  // itemsList: any;

  constructor(
    // private firebaseService: FirebaseService,
    private authService: AuthService,
    private platform: Platform,
    public translate: TranslateService,
    private menu: MenuController,
    public router: Router,
    public navCtrl: NavController,
    private storage: Storage
  ) {
    this.ionInvoice = dataInvoice;
    this.categories = data;
    console.log(this.categories, this.ionInvoice);

    // Initialize the FirebaseUI Widget using Firebase.
    // this.ui =
    //   firebaseui.auth.AuthUI.getInstance() ||
    //   new firebaseui.auth.AuthUI(firebase.auth());
    //    this.ui = new firebaseui.auth.AuthUI(firebase.auth());

    this.initializeApp();
    this.checkUserStatus();

    this.setLanguage();
  }

  async initializeApp() {
    // try {
    //   await SplashScreen.hide();
    // } catch (err) {
    //   console.log("This is normal in a browser", err);
    // }

    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      SplashScreen.hide();
    });
  }

  setLanguage() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang("en");

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use("en");

    // this is to determine the text direction depending on the selected language
    // for the purpose of this example we determine that only arabic and hebrew are RTL.
    // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    //   this.textDir = (event.lang === 'ar' || event.lang === 'iw') ? 'rtl' : 'ltr';
    // });
  }

  ionViewOnEnter() {
    console.log("app on enter");

    const userDetails = this.authService.userDetails();
    console.log(userDetails);

    this.checkUserStatus();
  }

  async onUserPage() { }
  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //    component: PopOverComponent,
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }

  ionViewDidLoad() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.uid = user.uid;
      } else {
        console.log("Not authenticated");
        // No user is signed in.
      }
    });
  }

  checkUserStatus() {
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          // User is signed in.
          const isAnonymous = user.isAnonymous;
          this.uid = user.uid;
          this.displayName = user.displayName;
          this.photoURL = user.photoURL;
          console.log(user, this.photoURL, this.displayName);
          const displayName = user.displayName;
          const email = user.email;
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const uid = user.uid;
          const phoneNumber = user.phoneNumber;
          const providerData = user.providerData;
          user.getIdToken().then(accessToken => {
            console.log("accessToken: ", accessToken);

            // document.getElementById("sign-in-status").textContent = "Signed in";
            // document.getElementById("sign-in").textContent = "Sign out";
            this.signin = "Sign out";
            this.isAnonymous = isAnonymous;
            this.displayName = displayName;
            this.uid = uid;
            this.email = email;
            this.photoURL = photoURL;
          });

          // this.navCtrl.navigateForward("/firebase/categories");
          // this.navCtrl.navigateForward("/firebase/categories");
          this.navCtrl.navigateForward("/firebase/user-profile");

        } else {
          // User is signed out.
          // document.getElementById("sign-in-status").textContent = "Signed out";
          // document.getElementById("sign-in").textContent = "Sign in";
          this.signin = "Sign in";
          // document.getElementById("account-details").textContent = "null";
          //    this.navCtrl.navigateForward("/auth/signup");
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }

  onDismiss() {
    this.menu.close();
    console.log("menu clicked");
  }

  onSignOut() {
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          // User is signed in.
          const isAnonymous = user.isAnonymous;
          this.uid = user.uid;
          this.displayName = user.displayName;
          this.photoURL = user.photoURL;
          console.log(user, isAnonymous);
          const displayName = user.displayName;
          const email = user.email;
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const uid = user.uid;
          const phoneNumber = user.phoneNumber;
          const providerData = user.providerData;
          user.getIdToken().then(accessToken => {
            console.log("accessToken: ", accessToken);

            // document.getElementById("sign-in-status").textContent = "Signed in";
            // document.getElementById("sign-in").textContent = "Sign out";
            this.signin = "Sign out";
            this.isAnonymous = isAnonymous;
            this.displayName = displayName;
            this.uid = uid;
            this.email = email;
            this.photoURL = photoURL;
          });

          firebase
            .auth()
            .signOut()
            .then(() => {
              this.storage.remove("firebaseui::rememberedAccounts");
              console.log("signed out");
              // User is signed out.
              // document.getElementById("sign-in-status").textContent =
              // "Signed out";
              // document.getElementById("sign-in").textContent = "Sign in";
              this.signin = "Sign in";
              // document.getElementById("account-details").textContent = "null";

              //      this.navCtrl.navigateForward("/app/auth/signup");
            })
            .catch(error => { });
        } else {
          // User is signed out.
          // document.getElementById("sign-in-status").textContent = "Signed out";
          // document.getElementById("sign-in").textContent = "Sign in";
          this.signin = "Sign in";
          // document.getElementById("account-details").textContent = "null";
          //    this.navCtrl.navigateForward("/auth/signup");
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }


  // hideTooltipbar() {
  //   console.log("hi");
  //   document.getElementById("tooltipbar").style.display = "none";
  // }

  onCloseMenu() {
    this.menu.close();
  }

  // onSubCatePage(key, keyvalue) {
  //   console.log(key, keyvalue);

  //   this.FilterForm = new FormGroup({
  //     cate: new FormControl(key),
  //     subcate: new FormControl(keyvalue),
  //     class_size: new FormControl({ lower: "", upper: "" }),
  //     target_user_age: new FormControl({ lower: "", upper: "" }),
  //     class_length: new FormControl({ lower: "", upper: "" }),
  //     teaching_materials: new FormControl(""),
  //     message_teaching_materials: new FormControl(""),
  //     sq_timelimit: new FormControl(""),
  //     message: new FormControl("")
  //   });

  //   const value = this.FilterForm.value;
  //   const data = JSON.stringify(value);

  //   const navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       data: data
  //     }
  //   }
  //   console.log('subcate', value);
  //   this.navCtrl.navigateForward(['/firebase/real-estate'], navigationExtras);
  // }

  onDashboardPage() {
    document.getElementById("Dashboard").style.borderLeftColor = "var(--ion-color-theme)";
    document.getElementById("Dashboard").style.background = "var(--ion-color-theme-tint)";

    document.getElementById("Contact").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Contact").style.background = "var(--ion-color-dark)";

    document.getElementById("Item").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Item").style.background = "var(--ion-color-dark)";

    document.getElementById("Invoices").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Invoices").style.background = "var(--ion-color-dark)";

    document.getElementById("estimates").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("estimates").style.background = "var(--ion-color-dark)";

    document.getElementById("PaymentsReceived").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("PaymentsReceived").style.background = "var(--ion-color-dark)";

    document.getElementById("Expenses").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Expenses").style.background = "var(--ion-color-dark)";

    // 
    this.navCtrl.navigateRoot(["/firebase/user-profile"]);
  }

  onContactPage() {
    document.getElementById("Contact").style.borderLeftColor = "var(--ion-color-theme)";
    document.getElementById("Contact").style.background = "var(--ion-color-theme-tint)";

    document.getElementById("Dashboard").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Dashboard").style.background = "var(--ion-color-dark)";

    document.getElementById("Item").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Item").style.background = "var(--ion-color-dark)";

    document.getElementById("Invoices").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Invoices").style.background = "var(--ion-color-dark)";

    document.getElementById("estimates").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("estimates").style.background = "var(--ion-color-dark)";

    document.getElementById("PaymentsReceived").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("PaymentsReceived").style.background = "var(--ion-color-dark)";

    document.getElementById("Expenses").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Expenses").style.background = "var(--ion-color-dark)";
    //
    this.navCtrl.navigateRoot(["/firebase/contacts"]);
  }

  onItemPage() {
    document.getElementById("Item").style.borderLeftColor = "var(--ion-color-theme)";
    document.getElementById("Item").style.background = "var(--ion-color-theme-tint)";

    document.getElementById("Dashboard").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Dashboard").style.background = "var(--ion-color-dark)";

    document.getElementById("Contact").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Contact").style.background = "var(--ion-color-dark)";

    document.getElementById("Invoices").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Invoices").style.background = "var(--ion-color-dark)";

    document.getElementById("estimates").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("estimates").style.background = "var(--ion-color-dark)";

    document.getElementById("PaymentsReceived").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("PaymentsReceived").style.background = "var(--ion-color-dark)";

    document.getElementById("Expenses").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Expenses").style.background = "var(--ion-color-dark)";

    this.navCtrl.navigateRoot(["/firebase/inventory/items"]);
  }

  onEstimatesPage() {
    //  document.getElementById("estimates-label").style.background = "var(--ion-color-theme)";
    document.getElementById("estimates").style.borderLeftColor = "var(--ion-color-theme)";
    document.getElementById("estimates").style.background = "var(--ion-color-theme-tint)";

    document.getElementById("Dashboard").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Dashboard").style.background = "var(--ion-color-dark)";

    document.getElementById("Contact").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Contact").style.background = "var(--ion-color-dark)";

    document.getElementById("Item").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Item").style.background = "var(--ion-color-dark)";

    document.getElementById("Invoices").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Invoices").style.background = "var(--ion-color-dark)";

    document.getElementById("PaymentsReceived").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("PaymentsReceived").style.background = "var(--ion-color-dark)";

    document.getElementById("Expenses").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Expenses").style.background = "var(--ion-color-dark)";

    //   document.getElementById("estimates").style.font = "calibri";
    this.navCtrl.navigateRoot(["/firebase/quotes"]);
  }

  onInvoicesPage() {
    document.getElementById("Invoices").style.borderLeftColor = "var(--ion-color-theme)";
    document.getElementById("Invoices").style.background = "var(--ion-color-theme-tint)";

    document.getElementById("Dashboard").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Dashboard").style.background = "var(--ion-color-dark)";

    document.getElementById("Contact").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Contact").style.background = "var(--ion-color-dark)";

    document.getElementById("Item").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Item").style.background = "var(--ion-color-dark)";

    document.getElementById("estimates").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("estimates").style.background = "var(--ion-color-dark)";

    document.getElementById("PaymentsReceived").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("PaymentsReceived").style.background = "var(--ion-color-dark)";

    document.getElementById("Expenses").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Expenses").style.background = "var(--ion-color-dark)";

    this.navCtrl.navigateRoot(["/firebase/invoices"]);
  }

  onPaymentsReceivedPage() {
    document.getElementById("PaymentsReceived").style.borderLeftColor = "var(--ion-color-theme)";
    document.getElementById("PaymentsReceived").style.background = "var(--ion-color-theme-tint)";

    document.getElementById("Contact").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Contact").style.background = "var(--ion-color-dark)";

    document.getElementById("Item").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Item").style.background = "var(--ion-color-dark)";

    document.getElementById("Invoices").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Invoices").style.background = "var(--ion-color-dark)";

    document.getElementById("estimates").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("estimates").style.background = "var(--ion-color-dark)";

    document.getElementById("Dashboard").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Dashboard").style.background = "var(--ion-color-dark)";

    document.getElementById("Expenses").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Expenses").style.background = "var(--ion-color-dark)";

    this.navCtrl.navigateRoot(["/firebase/paymentsrec"]);
  }

  onExpensesPage() {

    document.getElementById("Expenses").style.borderLeftColor = "var(--ion-color-theme)";
    document.getElementById("Expenses").style.background = "var(--ion-color-theme-tint)";

    document.getElementById("Contact").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Contact").style.background = "var(--ion-color-dark)";

    document.getElementById("Item").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Item").style.background = "var(--ion-color-dark)";

    document.getElementById("Invoices").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Invoices").style.background = "var(--ion-color-dark)";

    document.getElementById("estimates").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("estimates").style.background = "var(--ion-color-dark)";

    document.getElementById("Dashboard").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Dashboard").style.background = "var(--ion-color-dark)";

    document.getElementById("PaymentsReceived").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("PaymentsReceived").style.background = "var(--ion-color-dark)";

    this.navCtrl.navigateRoot(["/firebase/expenses"]);

  }
  onCreditNotesPage() {

    document.getElementById("Contact").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Contact").style.background = "var(--ion-color-dark)";

    document.getElementById("Item").style.borderLeftColor = "var(--ion-color-dark)";
    document.getElementById("Item").style.background = "var(--ion-color-dark)";

    this.navCtrl.navigateRoot(["/firebase/creditnotes"]);
  }

  // *ngIf="companyProfile"
  // getCompanyProfile() {
  //   console.log(this.email, this.uid);
  //   this.firebaseService.readCompanyProfile(this.uid).subscribe(res => {
  //     this.companyProfile = res['userData'];
  //     console.log(res, this.companyProfile);
  //   })
  // }

  // *ngIf="contactsList"
  // getCustomerList() {
  //   console.log(this.email, this.uid);
  //   //  this.firebaseService.readEstimates(this.uid, this.email).
  //   this.firebaseService.readContactsinCSV(this.uid, this.email).subscribe(res => {
  //     this.contactsList = res.userData;
  //     console.log(this.contactsList);

  //   })
  // }
  // *ngIf="itemsList?.length > 0"
  // getItemsnServices(): void {
  //   console.log(this.email, this.uid);
  //   this.firebaseService.readItems(this.uid, this.email).snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ id: c.payload.doc.id, ...c.payload.doc.data() })
  //       )
  //     )
  //   ).subscribe(data => {
  //     this.itemsList = data;
  //     console.log('items data:', this.itemsList);

  //   });
  // }
  // *ngIf="estimateList?.length > 0"
}
