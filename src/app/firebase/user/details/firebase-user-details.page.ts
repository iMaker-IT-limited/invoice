import { Component, OnInit, HostBinding } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";

import { FirebaseService } from "../../firebase-integration.service";
import { FirebaseCombinedUserModel } from "../firebase-user.model";
import { FirebaseListingItemModel } from "../../listing/firebase-listing.model";
import { FirebaseUpdateUserModal } from "../update/firebase-update-user.modal";

import { DataStore, ShellModel } from "../../../shell/data-store";

@Component({
  selector: "app-firebase-user-details",
  templateUrl: "./firebase-user-details.page.html",
  styleUrls: [
    "./styles/firebase-user-details.page.scss",
    "./styles/firebase-user-details.shell.scss"
  ]
})
export class FirebaseUserDetailsPage implements OnInit {
  user: FirebaseCombinedUserModel;
  // Use Typescript intersection types to enable docorating the Array of firebase models with a shell model
  // (ref: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types)
  relatedUsers: Array<FirebaseListingItemModel> & ShellModel;

  userId: any;
  name: string;
  email: string;
  phone: number;
  company_intro: string;
  competition_exp: string;
  tutor_qual: string;
  downloadURL: any;
  cate_1: any;
  cate_2: any;
  cate_3: any;
  cate_4: any;
  target_user_age_lower: number;
  target_user_age_upper: number;
  class_size_lower: number;
  class_size_upper: number;
  class_length_upper: number;
  class_length_lower: number;
  reply_rate: number;
  average_speed: number;
  // @HostBinding("class.is-shell") get isShell() {
  //   return (this.user && this.user.isShell) ||
  //     (this.relatedUsers && this.relatedUsers.isShell)
  //     ? true
  //     : false;
  // }
  // @HostBinding("class.is-shell") get isShell() {
  //   return (this.user && this.user.isShell) ||
  //     (this.relatedUsers && this.relatedUsers.isShell)
  //     ? true
  //     : false;
  // }

  constructor(
    public firebaseService: FirebaseService,
    public modalController: ModalController,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(resolvedRouteData => {
      const resolvedDataStores = resolvedRouteData["data"];
      const userId = resolvedDataStores.userId;
      this.userId = userId;
      console.log(this.userId);

      // const combinedDataStore: DataStore<FirebaseCombinedUserModel> =
      //   resolvedDataStores.user;
      // const relatedUsersDataStore: DataStore<Array<FirebaseListingItemModel>> =
      //   resolvedDataStores.relatedUsers;
      // combinedDataStore.state.subscribe(state => {
      //   this.user = state;
      // });
      // console.log(userId, resolvedRouteData, combinedDataStore);
      // relatedUsersDataStore.state.subscribe(state => {
      //   this.relatedUsers = state;
      // });
    });
  }

  ionViewDidEnter() {
    // this.navParams.get("data").subscribe(res => {
    //   console.log(res);
    // });
  }

  updateSupplier() {
    // this.firebaseService.updateSupplier(this.userId);
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
      case value >= 16:
        return "大專";
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
}
