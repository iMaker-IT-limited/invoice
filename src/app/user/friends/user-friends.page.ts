import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserFriendsModel } from './user-friends.model';
import { FirebaseService } from '../../../app/firebase/firebase-integration.service';

import * as firebase from 'firebase';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.page.html',
  styleUrls: [
    './styles/user-friends.page.scss',
    './styles/user-friends.shell.scss',
    './styles/user-friends.md.scss'
  ]
})
export class UserFriendsPage implements OnInit {
  data: UserFriendsModel;
  @Input() role: string;
  @Input() roleDetail: any;
  segmentValue = 'friends';
  friendsList: Array<any>;
  followersList: Array<any>;
  followingList: Array<any>;
  searchQuery = '';
  showFilters = false;
  // role: any;
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  name: string;
  phoneNumber: string;
  // roleDetail: any;
  organization_name: any;
  user_email: any;
  user_name: any;
  user_phone: any;
  updateUserForm: FormGroup;
  user: {
    name: 'Danny',
    lastname: 'Soong',
    email: 'a@a.com',
    phone: '9000000',
    birthdate: 123,
    languages: {
      spanish: 'novice',
      english: 'novice',
      french: 'expert'
    }
  };

  @HostBinding('class.is-shell') get isShell() {
    return (this.data && this.data.isShell) ? true : false;
  }

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private firebaseService: FirebaseService,
    private route: ActivatedRoute) {
    this.checkUserStatus();
  }

  ngOnInit(): void {
    this.roleDetail = this.navParams.get('roleDetail');
    console.log(this.navParams.get('roleDetail'));

    console.log(this.navParams.get('role'));

    // this.updateUserForm = new FormGroup({
    //   name: new FormControl(this.user.name, Validators.required),
    //   lastname: new FormControl(this.user.lastname, Validators.required),
    //   email: new FormControl(this.user.email, Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   phone: new FormControl(this.user.phone, Validators.required),
    //   birthdate: new FormControl(dayjs.unix(this.user.birthdate).format('DD/MMMM/YYYY'), Validators.required),
    //   skills: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1)),
    //   spanish: new FormControl(this.user.languages.spanish),
    //   english: new FormControl(this.user.languages.english),
    //   french: new FormControl(this.user.languages.french)
    // });

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
          //    this.phoneNumber,
          //    this.name,
          this.photoURL
        );

        console.log(this.uid);

        //  this.onGetRole(this.uid);

      } else {
        console.log("Not authenticated");
        // No user is signed in.
      }
    });

    this.route.data.subscribe((resolvedRouteData) => {
      const friendsDataStore = resolvedRouteData['data'];

      friendsDataStore.state.subscribe(
        (state) => {
          this.data = state;
          this.friendsList = this.data.friends;
          this.followersList = this.data.followers;
          this.followingList = this.data.following;
        },
        (error) => { }
      );
    },
      (error) => { });
  }

  segmentChanged(ev): void {
    this.segmentValue = ev.detail.value;

    // Check if there's any filter and apply it
    this.searchList();
  }

  searchList(): void {
    const query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';

    if (this.segmentValue === 'friends') {
      this.friendsList = this.filterList(this.data.friends, query);
    } else if (this.segmentValue === 'followers') {
      this.followersList = this.filterList(this.data.followers, query);
    } else if (this.segmentValue === 'following') {
      this.followingList = this.filterList(this.data.following, query);
    }
  }

  filterList(list, query): Array<any> {
    return list.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  }

  // onGetRole(userId: string) {
  //   this.firebaseService.getRole(userId).subscribe(res => {
  //     this.role = res[0]["role"];
  //     this.organization_name = res[0]['organization_name'];
  //     this.user_email = res[0]["user_email"];
  //     this.user_name = res[0]["user_name"];
  //     this.user_phone = res[0]["user_phone"];
  //     this.roleDetail = res[0];

  //     console.log(res, this.role, userId);
  //     if (this.role === "teacher") {
  //         this.onGetEnquiryToTeacher();
  //         this.onGetSalesQuotationToTeacher();

  //        this.save(roleDetail);
  //     } else if (this.role === "supplier") {
  //        this.onGetEnquiryToPotentialSupplier();
  //     }
  //   });
  // }

  checkUserStatus() {
    firebase.auth().onAuthStateChanged(
      user => {
        console.log('header user is: ', user);

        if (user) {
          // User is signed in.
          const isAnonymous = user.isAnonymous;
          this.uid = user.uid;
          this.displayName = user.displayName;
          this.photoURL = user.photoURL;
          this.email = user.email;
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
            //    this.signin = "Sign out";
            //    this.isAnonymous = isAnonymous;
            this.displayName = displayName;
            this.uid = uid;
            this.email = email;
            this.photoURL = photoURL;
          });

          // this.navCtrl.navigateForward("/firebase/categories");
          //   this.navCtrl.navigateForward("/firebase/categories");
        } else {
          // User is signed out.
          // document.getElementById("sign-in-status").textContent = "Signed out";
          // document.getElementById("sign-in").textContent = "Sign in";
          // this.signin = "Sign in";
          // document.getElementById("account-details").textContent = "null";
          //    this.navCtrl.navigateForward("/auth/signup");
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }

  onDismiss() {
    console.log('onDismiss');
    this.modalCtrl.dismiss();
  }
}
