import { Component, OnInit, HostBinding, ViewChild } from "@angular/core";
import { ActivatedRoute, NavigationExtras } from "@angular/router";

// import { UserProfileModel } from "./user-profile.model";
import {
  AlertController,
  IonReorderGroup,
  NavController
} from "@ionic/angular";

// import { LanguageService } from "../../language/language.service";
import { TranslateService } from "@ngx-translate/core";
import * as firebase from "firebase";
import { AuthService } from "./../../../../app/services/auth.service";
import { FirebaseService } from "./../../../../app/firebase/firebase-integration.service";
import { FormGroup, FormControl } from "@angular/forms";

// estimates
// import estimatesdata from './../../../../assets/estimates.json';

// import data from './../../../../assets/company.json';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {


  // ngx-table start
  uid: string;
  email: string;
  customRowClass: any;
  estimatesList: any;
  tableStyle = 'dark';
  // ngx-table end

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private authService: AuthService,
    public translate: TranslateService,
    public alertController: AlertController,
  ) {
    this.uid = this.authService.uid();
    this.email = this.authService.email();
  }

  ngOnInit(): void {
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     console.log(user);
    //     this.name = user.displayName;
    //     this.photoURL = user.photoURL;
    //     this.uid = user.uid;
    //     this.email = user.email;
    //     this.phoneNumber = user.phoneNumber;
    //     console.log(
    //       this.uid,
    //       this.email,
    //       this.phoneNumber,
    //       this.name,
    //       this.photoURL
    //     );

    //     console.log(this.uid);
    //   } else {
    //     console.log("Not authenticated");
    //     // No user is signed in.
    //   }
    // });

  }

  ionViewWillEnter() {
    this.readEstimates();
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

  // ngx - table end
  onCreateContact() {
    // this.navCtrl.navigateForward(["/firebase/create#quotes"]);
    this.navCtrl.navigateForward(["/firebase/create#expenses"]);
  }

  onDetailPage(value, values) {
    console.log(value, values);
    const data = JSON.stringify(value);
    const datas = JSON.stringify(values);

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: data,
        datas: datas
      }
    };
    this.navCtrl.navigateRoot(["/firebase/details#expenses"], navigationExtras);
  }

  // CRUD
  readEstimates(): void {
    console.log(this.email, this.uid);
    this.firebaseService.readExpense(this.uid, this.email).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.estimatesList = data;
      console.log(this.estimatesList);

    });
  }
}

