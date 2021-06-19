// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";

import { counterRangeValidator } from "../../components/counter-input/counter-input.component";
import {
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController
} from "@ionic/angular";
import { AuthService } from "../../../app/services/auth.service";
import { FirebaseService } from "../../../app/firebase/firebase-integration.service";
import { NavigationExtras } from "@angular/router";
import * as firebaseui from "firebaseui";
import * as firebase from "firebase";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-form-alert",
  templateUrl: "./form-alert.page.html",
  styleUrls: ["./form-alert.page.scss"]
})
export class FormAlertPage implements OnInit {
  @Input() res: any;
  @Input() user: any;
  @Input() result: any;
  @Input() data: any;
  rangeForm: any;
  FilterForm: FormGroup;
  radioForm: FormGroup;
  checkboxTagsForm: FormGroup;
  radioTagsForm: FormGroup;
  switchersForm: FormGroup;
  counterForm: any;
  ratingForm: FormGroup;
  radioColorForm: FormGroup;

  cate_1 = {
    name: { 0: "STEM", 1: "學術", 2: "運動", 3: "舞蹈" },
    list: [
      "Lego Education",
      "Micro：bit",
      "mBot",
      "Scratch",
      "Arduino",
      "3D print",
      "Dash and Dot",
      "VR",
      "種植項目"
    ],
    list2: [
      "中文",
      "英文",
      "數學",
      "phonics",
      "劍橋英語",
      "奧數",
      "珠心算",
      "普通話",
      "朗誦",
      "辯論",
      "書法",
      "新來港學童廣東話班",
      "日語",
      "韓語",
      "西班牙語",
      "法語"
    ],
    list3: [
      "手球隊",
      "足球隊",
      "籃球隊",
      "排球隊",
      "乒乓球",
      "羽毛球",
      "田徑隊",
      "跆拳道",
      "空手道",
      "柔道",
      "足毽",
      "游泳",
      "水上活動",
      "壁球",
      "欖球",
      "射箭",
      "武術",
      "閃避球",
      "跳繩",
      "武術",
      "網球",
      "體適能",
      "其他"
    ],
    list4: [
      "芭蕾舞",
      "社交舞",
      "街舞",
      "K-Pop舞",
      "現代舞",
      "中國舞",
      "爵士舞",
      "Hip-Hop舞"
    ]
  };
  class_length_checked: boolean;
  class_size_checked: boolean;
  target_user_age_checked: boolean;
  cate_1_checked: boolean;
  teaching_materials_checked: boolean;
  progress = 0;
  hideTargetUserAge = false;
  hideClassLength = true;
  hideClassSize = true;
  hideTeachingMaterial = true;
  hidesqtimelimit = true;
  submitNow = false;
  value: any;
  uid: string;
  now: number;
  displayName: string;
  ui: firebaseui.auth.AuthUI;
  signin: string;
  photoURL: string;
  roleDetail: unknown;
  role: any;
  showMessageTeachingMaterial: boolean;
  COURSE_LIST: any;
  teacher_clu: any;
  teacher_cll: any;
  teacher_tuau: any;
  teacher_tual: any;
  teacher_csl: any;

  constructor(
    private toastCtrl: ToastController,
    private navParams: NavParams,
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private modalCtrl: ModalController,
    private storage: Storage,
    private alertCtrl: AlertController
  ) {
    this.checkUserStatus();
    this.data = this.navParams.get("data");
    this.user = this.navParams.get("user");
    this.result = this.navParams.get("result");
    this.res = this.navParams.get("res");
    console.log(this.data, this.res, this.user, this.result);

    if (this.user === undefined) {
      console.log("No logged in user");
      // Initialize the FirebaseUI Widget using Firebase.
      this.ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth());
    }

    // cate_1 => user has submitted a complete form ie subcate => cate_1
    console.log(this.result.cate_1);

    if (this.result.cate_1) {
      console.log("cate_1 is ok");

      this.cate_1_checked = true;
      this.teaching_materials_checked = true;
      this.hideTargetUserAge = true;
      this.hideClassLength = true;
      this.hideClassSize = true;
      this.hideTeachingMaterial = true;
      this.hidesqtimelimit = true;

      this.progress = 1;
      this.submitNow = true;
    } else if (this.result.cate || this.result.keyword || this.result.subcate) {
      this.cate_1_checked = true;
    } else {
      this.cate_1_checked = false;
    }

    // filter by searchbar => .keyword
    // filter by banner cate => .cate
    // filter by form => .keyword or .subcate

    // if (this.result.cate || this.result.keyword || this.result.subcate) {
    //   this.cate_1_checked = true;
    // } else {
    //   this.cate_1_checked = false;
    // }

    if (this.result.cate) {
      this.cate_1 = this.result.cate;
    } else if (this.result.keyword) {
      this.cate_1 = this.result.keyword;
    } else if (this.result.subcate) {
      this.cate_1 = this.result.subcate;
    }

    // uncomment this if data passed to this page is not just cate_1
    if (!this.result.class_length) {
      this.class_length_checked = false;
    } else {
      this.class_length_checked = true;
    }
    if (!this.result.class_size) {
      this.class_size_checked = false;
    } else {
      this.class_size_checked = true;
    }
    if (!this.result.target_user_age) {
      this.target_user_age_checked = false;
    } else {
      this.target_user_age_checked = true;
    }
    if (!this.result.teaching_materials) {
      this.teaching_materials_checked = false;
    } else {
      this.teaching_materials_checked = true;
    }
    // if (!this.result.sq_timelimit) {
    //   this.sq_time_limit_checked = false;
    // } else {
    //   this.sq_time_limit_checked = false;
    // }

    console.log(
      this.cate_1_checked,
      this.class_length_checked,
      this.class_size_checked,
      this.target_user_age_checked
    );

    /*
class_size_upper: 42
class_size_lower: 1
class_length_upper: 42
class_length_lower: 1
target_user_age_upper: 16
target_user_age_lower: 1
teaching_materials: "sale"
sq_timelimit: "2"
message_teaching_materials: "dgcdhd"
message: "ffffffffffffffffffff"
*/
    if (this.result.cate_1) {
      this.FilterForm = new FormGroup({
        cate_1: new FormControl(this.result.cate_1),
        class_size: new FormControl({
          lower: this.result.class_size.lower,
          upper: this.result.class_size.upper
        }),
        target_user_age: new FormControl({
          lower: this.result.target_user_age.lower,
          upper: this.result.target_user_age.upper
        }),
        class_length: new FormControl({
          lower: this.result.class_length.lower,
          upper: this.result.class_length.upper
        }),
        teaching_materials: new FormControl(this.result.teaching_materials),
        message_teaching_materials: new FormControl(
          this.result.message_teaching_materials
        ),
        sq_timelimit: new FormControl(this.result.sq_timelimit),
        message: new FormControl(this.result.message)
      });
    } else {
      this.FilterForm = new FormGroup({
        cate_1: new FormControl(this.cate_1),
        class_size: new FormControl({ lower: 1, upper: 42 }),
        target_user_age: new FormControl({ lower: 1, upper: 16 }),
        class_length: new FormControl({ lower: 1, upper: 42 }),
        teaching_materials: new FormControl(""),
        message_teaching_materials: new FormControl(""),
        sq_timelimit: new FormControl(),
        message: new FormControl("")
      });
    }
    // this.rangeForm = new FormGroup({
    //   single: new FormControl(25),
    //   dual: new FormControl({ lower: 12, upper: 23 })
    // });

    // this.radioTagsForm = new FormGroup({
    //   selected_option: new FormControl("any")
    // });

    // this.switchersForm = new FormGroup({
    //   notifications: new FormControl(true),
    //   email_notifications: new FormControl(false)
    // });

    // this.counterForm = new FormGroup({
    //   counter: new FormControl(5, counterRangeValidator(1, 7)),
    //   counter2: new FormControl(2, counterRangeValidator(1, 5))
    // });

    // this.ratingForm = new FormGroup({
    //   rate: new FormControl(2.5),
    //   rate2: new FormControl(1.5)
    // });

    // this.radioColorForm = new FormGroup({
    //   selected_color: new FormControl("#fc9961")
    // });
  }

  ionViewWillEnter() {
    const userDetail = this.authService.userDetails();
    console.log(userDetail);
    // this.firebaseService.searchUsers().subscribe(data => {
    //   console.log(data);
    // });
  }

  rangeChange(range: Range) {
    console.log("range change", range);
  }

  rangeChangeSecond(range: Range) { }

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

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  // to B2
  onB2() {
    // this.class_length_checked = true;
    this.target_user_age_checked = false;
    this.hideTargetUserAge = false;
    this.hideClassLength = true;
    this.hideClassSize = true;
    this.hideTeachingMaterial = true;
    this.hidesqtimelimit = true;

    this.submitNow = false;
    this.progress = 0;
  }
  // to B3
  onAddTargetUserAgeDetail(value, checked) {
    console.log(value, checked);
    this.class_length_checked = false;
    this.target_user_age_checked = true;
    this.hideTargetUserAge = true;
    this.hideClassLength = false;
    this.hideClassSize = true;
    this.hideTeachingMaterial = true;
    this.hidesqtimelimit = true;
    this.progress = 0.2;
    this.submitNow = false;
  }
  // to B4
  onAddClassLengthDetail(value, checked) {
    console.log(value, checked);
    this.class_size_checked = false;
    this.class_length_checked = true;
    this.hideTargetUserAge = true;
    this.hideClassLength = true;
    this.hideClassSize = false;
    this.hideTeachingMaterial = true;
    this.hidesqtimelimit = true;
    this.progress = 0.4;
    this.submitNow = false;
  }
  // to B5
  onAddClassSizeDetail(value, checked) {
    console.log(value, checked);
    this.class_size_checked = true;
    this.teaching_materials_checked = false;
    this.hideTargetUserAge = true;
    this.hideClassLength = true;
    this.hideClassSize = true;
    this.hideTeachingMaterial = false;
    this.hidesqtimelimit = true;
    this.progress = 0.6;
    this.submitNow = false;
  }
  // to B6
  onAddTeachingMaterialsDetail(value) {
    console.log(this.FilterForm.value, value);
    this.teaching_materials_checked = true;
    this.hideTargetUserAge = true;
    this.hideClassLength = true;
    this.hideClassSize = true;
    this.hideTeachingMaterial = true;
    this.hidesqtimelimit = false;

    this.progress = 0.8;
    this.submitNow = false;
  }
  // to B7
  onAddSQTimelimitDetail(value) {
    console.log(this.FilterForm.value, value);
    this.teaching_materials_checked = true;
    this.hideTargetUserAge = true;
    this.hideClassLength = true;
    this.hideClassSize = true;
    this.hideTeachingMaterial = true;
    this.hidesqtimelimit = true;

    this.progress = 1;
    this.submitNow = true;
  }
  // onAddTargetUserAgeDetail(value, checked) {
  //   console.log(value, checked);
  //   this.target_user_age_checked = true;
  // }

  submitFilterForm() {
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          // User is signed in.

          this.uid = user.uid;
          this.displayName = user.displayName;
          this.photoURL = user.photoURL;
          // const displayName = user.displayName;
          // const email = user.email;
          // const emailVerified = user.emailVerified;
          // const photoURL = user.photoURL;
          // const uid = user.uid;
          // const phoneNumber = user.phoneNumber;
          // const providerData = user.providerData;
          console.log("user logged in: ", this.uid);
          // const cate_1 = this.FilterForm.value.cate_1;
          if (this.result.cate_1) {
            const value = this.result;
            this.value = value;
          } else {
            const value = this.FilterForm.value;
            this.value = value;
          }

          console.log(this.value, this.data);

          const arr = [];
          this.teacher_clu = this.value["class_length"].upper || 0;
          this.teacher_cll = this.value["class_length"].lower || 0;
          this.teacher_tuau = this.value["target_user_age"].upper || 0;
          this.teacher_tual = this.value["target_user_age"].lower || 0;

          this.data.forEach(resp => {
            console.log(resp);
            // const csu = resp["class_size_upper"];
            const clu = resp["class_length_upper"];
            const tuau = resp["target_user_age_upper"];
            const tual = resp["target_user_age_lower"];
            console.log(clu, tuau, this.teacher_cll, this.teacher_tual);

            if (this.teacher_cll <= clu && this.teacher_tual <= tuau) {
              arr.push(resp);
            } else if (!this.teacher_csl) {
              console.log("no csl input");
              arr.push(resp);
            }
          });
          console.log(arr);

          // this.Supplier_list = arr;
          //          this.COURSE_LIST = this.data;

          this.COURSE_LIST = arr;
          // this.firebaseService.getRole(this.uid).subscribe(async (res) => {
          //   this.role = res[0]["role"];
          //   this.roleDetail = res[0];
          //   console.log(res, this.roleDetail);

          //   const alert = await this.alertCtrl.create({
          //     header: '請點擊確認繼續',
          //     buttons: [
          //       {
          //         text: '取消',
          //         role: 'cancel',
          //         cssClass: 'secondary',
          //         handler: (blah) => {
          //           console.log('Confirm Cancel: blah');
          //         }
          //       }, {
          //         text: '確認!',
          //         handler: () => {
          //           console.log('Confirm Okay');
          //           for (const i of this.COURSE_LIST) {
          //             // console.log(i, i["email"]);
          //             // this.now = new Date().getTime().toString();
          //             console.log(this.roleDetail);

          //             this.now = new Date().getTime();
          //             this.value["timestamp"] = this.now;
          //             this.value["id"] = this.uid;
          //             this.value["isShell"] = false;
          //             this.value["potential_supplier"] = i["email"];
          //             this.value["potential_supplier_name"] = i["provider"];
          //             this.value["enquiry_name"] = this.displayName;
          //             this.value["class_size_upper"] = this.value.class_size.upper;
          //             this.value["class_size_lower"] = this.value.class_size.lower;
          //             this.value["class_length_upper"] = this.value.class_length.upper;
          //             this.value["class_length_lower"] = this.value.class_length.lower;
          //             this.value[
          //               "target_user_age_upper"
          //             ] = this.value.target_user_age.upper;
          //             this.value[
          //               "target_user_age_lower"
          //             ] = this.value.target_user_age.lower;
          //             this.value["user_name"] = this.roleDetail["user_name"];
          //             this.value["user_email"] = this.roleDetail["user_email"];
          //             this.value["user_phone"] = this.roleDetail["user_name"];
          //             this.value["isVerified"] = this.roleDetail["isVerified"];
          //             this.value["organization_name"] = this.roleDetail[
          //               "organization_name"
          //             ];
          //             // sq_timelimit: new FormControl(7)

          //             console.log(this.value);
          //             this.firebaseService.createEnquiry(this.value).then(() => { });
          //           }
          //         }
          //       }
          //     ]
          //   });

          //   await alert.present().then(() => {
          //     console.log('on present');
          //   });
          //   alert.onDidDismiss().then(() => {
          //     console.log('did dismiss');
          //     this.presentToastWithOptions();
          //     setTimeout(() => {
          //       this.modalCtrl.dismiss();
          //     }, 200);
          //   })


          // });

          // setTimeout(() => {
          //   this.modalCtrl.dismiss();
          // }, 200);


        } else {
          console.log(
            "user not logged in:",
            this.uid,
            this.data,
            this.FilterForm.value
          );

          const arr = [];
          this.teacher_clu = this.FilterForm.value["class_length"].upper || 0;
          this.teacher_cll = this.FilterForm.value["class_length"].lower || 0;
          this.teacher_tuau =
            this.FilterForm.value["target_user_age"].upper || 0;
          this.teacher_tual =
            this.FilterForm.value["target_user_age"].lower || 0;

          this.data.forEach(resp => {
            console.log(resp);
            // const csu = resp["class_size_upper"];
            const clu = resp["class_length_upper"];
            const tuau = resp["target_user_age_upper"];
            const tual = resp["target_user_age_lower"];
            console.log(clu, tuau, this.teacher_cll, this.teacher_tual);

            if (this.teacher_cll <= clu && this.teacher_tual <= tuau) {
              arr.push(resp);
            } else if (!this.teacher_csl) {
              console.log("no csl input");
              arr.push(resp);
            }
          });
          console.log(arr);

          this.COURSE_LIST = arr;

          this.signup();

          this.save();
        }
      },
      function (error) {
        console.log(error);
      }
    );

    // send quotation enquiry to supplier

    //    const data = JSON.stringify(value);

    // form - results
    // const navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     data: data
    //   }
    // };
    // this.navCtrl.navigateForward(["/firebase/real-estate"], navigationExtras);

    // this.firebaseService.getFilteredSupplierList(cate_1).subscribe(res => {
    //   console.log(res);
    // });

    // this.firebaseService.getAllSupplier().subscribe(res => {
    //   console.log(res);
    // });
  }
  onReset() {
    this.FilterForm = new FormGroup({
      cate_1: new FormControl(""),
      class_size: new FormControl({ lower: 1, upper: 42 }),
      target_user_age: new FormControl({ lower: 1, upper: 16 }),
      class_length: new FormControl({ lower: 1, upper: 42 }),
      teaching_materials: new FormControl(""),
      sq_timelimit: new FormControl()
    });
  }
  ngOnInit() { }

  signup() {
    this.ui.start("#firebaseui-auth-container", {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          // document.getElementById("loader").style.display = "none";
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      signInSuccessUrl: "firebase/categories",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ]
      // Terms of service url.
      // tosUrl: "<your-tos-url>",
      // Privacy policy url.
      // privacyPolicyUrl: "<your-privacy-policy-url>"
      // Other config options...
    });
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

          // this.navCtrl.navigateForward("/firebase/categories");
          //   this.navCtrl.navigateForward("/");
        } else {
          // User is signed out.
          document.getElementById("sign-in-status").textContent = "Signed out";
          document.getElementById("sign-in").textContent = "Sign in";
          this.signin = "Sign in";
          document.getElementById("account-details").textContent = "null";
          //    this.navCtrl.navigateForward("/auth/signup");
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }

  save() {
    // pass sq enquiry, potential supplier list data  for first timer
    const value = this.FilterForm.value;
    const valueStr = JSON.stringify(value);
    console.log(value);

    const data = this.COURSE_LIST;
    //    const data = this.data;
    const dataStr = JSON.stringify(data);
    this.storage.set("data", dataStr);

    this.storage.set("value", valueStr);

    // Or to get a key/value pair
    this.storage.get("value").then(val => {
      const valuePar = JSON.parse(val);
      console.log("Value is", valuePar);
    });

    // Or to get a key/value pair
    this.storage.get("data").then(val => {
      const dataPar = JSON.parse(val);
      console.log("Data is", dataPar);
    });
  }

  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      // header: 'Toast header',
      message: "報價查詢成功提交",
      position: "bottom",
      animated: true,
      mode: "ios",
      cssClass: "profile-toast",
      translucent: false,
      buttons: [
        {
          side: "end",
          // icon: "star",
          text: "進入'我的帳戶'頁面",
          handler: () => {
            console.log("Favorite clicked");
            this.navCtrl.navigateForward("firebase/user-profile");
          }
        },
        {
          text: "留在目前頁面",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
            // this.navCtrl.navigateForward("firebase/user-profile");
          }
        }
      ]
    });
    toast.present();
  }

  show(value: boolean) {
    this.showMessageTeachingMaterial = value;
  }
}
