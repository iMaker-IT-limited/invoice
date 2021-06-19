import { Component, OnInit, ViewChild } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ModalController, MenuController, NavController } from "@ionic/angular";

import { TermsOfServicePage } from "../terms-of-service/terms-of-service.page";
import { PrivacyPolicyPage } from "../privacy-policy/privacy-policy.page";
import { PasswordValidator } from "../validators/password.validator";

import * as firebase from "firebase";
import * as firebaseui from "firebaseui";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./styles/signup.page.scss"]
})
export class SignupPage implements OnInit {
  @ViewChild("slides", { static: true }) slides;

  slideOpts = {
    slidesPerView: 1,
    initialSlide: 0,
    spaceBetween: 0,
    slidesPerColumn: 1,
    autoplay: false,
    autoplayDisableOnInteraction: false,
    zoom: false,
    speed: 200
  };

  signupForm: FormGroup;
  matching_passwords_group: FormGroup;

  // 電子郵件;
  // 電子郵件為必填項;

  // 註冊;
  // 需要註冊;

  // 密碼;
  // 密碼是必需的;

  // 確認密碼;
  // 確認密碼為必填項;

  validation_messages = {
    email: [
      { type: "required", message: "電子郵件為必填項." },
      { type: "pattern", message: "輸入有效的電子郵件." }
    ],
    password: [
      { type: "required", message: "密碼是必需的." },
      {
        type: "minlength",
        message: "密碼必須至少5個字符長."
      }
    ],
    confirm_password: [{ type: "required", message: "確認密碼為必填項" }],
    matching_passwords: [{ type: "areNotEqual", message: "密碼不匹配" }]
  };
  ui: firebaseui.auth.AuthUI;

  constructor(
    private navCtrl: NavController,
    public router: Router,
    public modalController: ModalController,
    public menu: MenuController
  ) {

    // Initialize the FirebaseUI Widget using Firebase.
    this.ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    //    this.ui = new firebaseui.auth.AuthUI(firebase.auth());

    this.matching_passwords_group = new FormGroup(
      {
        password: new FormControl(
          "",
          Validators.compose([Validators.minLength(6), Validators.required])
        ),
        confirm_password: new FormControl("", Validators.required)
      },
      (formGroup: FormGroup) => {
        return PasswordValidator.areNotEqual(formGroup);
      }
    );

    this.signupForm = new FormGroup({
      email: new FormControl(
        // "supplier@supplier.com",
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      matching_passwords: this.matching_passwords_group
    });
  }

  ionViewWillEnter() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });


    console.log("sign up");

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
          document.getElementById("loader").style.display = "none";
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      signInSuccessUrl: "firebase/user-profile",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ]
      // Terms of service url.
      // tosUrl: "<your-tos-url>",
      // Privacy policy url.
      // privacyPolicyUrl: "<your-privacy-policy-url>"
      // Other config options...
    });

    //    this.router.navigate(["app/categories"]);
  }
  ngOnInit(): void {
    this.menu.enable(false);
  }

  onRole(value) {
    console.log(value);
    this.slides.slideTo(value).then(data => {
      console.log(data);
    });
  }
  getTap() {
    // this.slides.startAutoplay();
    this.slides.getActiveIndex().then(data => {
      console.log(data);
    });

    // this.slides.slideNext().then(data => {
    //   // this.slides.startAutoplay();
    // });
  }
  async showTermsModal() {
    const modal = await this.modalController.create({
      component: TermsOfServicePage
    });
    return await modal.present();
  }

  async showPrivacyModal() {
    const modal = await this.modalController.create({
      component: PrivacyPolicyPage
    });
    return await modal.present();
  }

  doSignup(): void {
    console.log("do sign up");
    // this.router.navigate(["app/categories"]);
    this.router.navigate(["app/categories"]);
  }

  doFacebookSignup(): void {
    console.log("facebook signup");
    this.router.navigate(["app/categories"]);
  }

  // sign up anonymously
  doGoogleSignup(): void {
    console.log("firebase google sign up");

    firebase
      .auth()
      .signInAnonymously()
      .then(res => {
        console.log("Anonymous User: ", res);
        // this.router.navigate(["firebase/categories"]);
        this.navCtrl.navigateForward("/firebase/categories");
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  }

  doTwitterSignup(): void {
    console.log("twitter signup");
    this.router.navigate(["app/categories"]);
  }
}
