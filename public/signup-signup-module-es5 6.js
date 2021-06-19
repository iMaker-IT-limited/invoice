(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\t<h2>iMaker invoice</h2>\n\t<div class=\"container\" id=\"container\">\n\t\t<div class=\"form-container sign-up-container\">\n\t\t\t<form action=\"#\">\n\t\t\t\t<h1>Create Account</h1>\n\t\t\t\t<div class=\"social-container\">\n\t\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n\t\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n\t\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n\t\t\t\t</div>\n\t\t\t\t<span>or use your email for registration</span>\n\t\t\t\t<input type=\"text\" placeholder=\"Name\" />\n\t\t\t\t<input type=\"email\" placeholder=\"Email\" />\n\t\t\t\t<input type=\"password\" placeholder=\"Password\" />\n\t\t\t\t<button>Sign Up</button>\n\t\t\t</form>\n\t\t</div>\n\t\t<div class=\"form-container sign-in-container\">\n\t\t\t<form action=\"#\">\n\t\t\t\t<h1>Sign in</h1>\n\t\t\t\t<div id=\"firebaseui-auth-container\"></div>\n\t\t\t\t<!-- <div class=\"social-container\">\n\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n\t\t\t\t<a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n\t\t\t</div> -->\n\t\t\t\t<!-- <span>or use your account</span>\n\t\t\t\t<input type=\"email\" placeholder=\"Email\" />\n\t\t\t\t<input type=\"password\" placeholder=\"Password\" />\n\t\t\t\t<a href=\"#\">Forgot your password?</a>\n\t\t\t\t<button>Sign In</button> -->\n\t\t\t</form>\n\t\t</div>\n\t\t<div class=\"overlay-container\">\n\t\t\t<div class=\"overlay\">\n\t\t\t\t<div class=\"overlay-panel overlay-left\">\n\t\t\t\t\t<h1>Welcome Back!</h1>\n\t\t\t\t\t<p>To keep connected with us please login with your personal info</p>\n\t\t\t\t\t<button class=\"ghost\" id=\"signIn\">Sign In</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"overlay-panel overlay-right\">\n\t\t\t\t\t<h1>Hello, Friend!</h1>\n\t\t\t\t\t<p>Enter your personal details and start journey with us</p>\n\t\t\t\t\t<button style=\"display: none\" class=\"ghost\" id=\"signUp\">Sign Up</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");
/* harmony import */ var _terms_of_service_terms_of_service_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../terms-of-service/terms-of-service.page */ "./src/app/terms-of-service/terms-of-service.page.ts");
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.page */ "./src/app/privacy-policy/privacy-policy.page.ts");










var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"], _terms_of_service_terms_of_service_page__WEBPACK_IMPORTED_MODULE_8__["TermsOfServicePage"], _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_9__["PrivacyPolicyPage"]],
            entryComponents: [_terms_of_service_terms_of_service_page__WEBPACK_IMPORTED_MODULE_8__["TermsOfServicePage"], _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_9__["PrivacyPolicyPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _terms_of_service_terms_of_service_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terms-of-service/terms-of-service.page */ "./src/app/terms-of-service/terms-of-service.page.ts");
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.page */ "./src/app/privacy-policy/privacy-policy.page.ts");
/* harmony import */ var _validators_password_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validators/password.validator */ "./src/app/validators/password.validator.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebaseui */ "./node_modules/firebaseui/dist/esm.js");










var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, router, modalController, menu) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.modalController = modalController;
        this.menu = menu;
        this.slideOpts = {
            slidesPerView: 1,
            initialSlide: 0,
            spaceBetween: 0,
            slidesPerColumn: 1,
            autoplay: false,
            autoplayDisableOnInteraction: false,
            zoom: false,
            speed: 200
        };
        // 電子郵件;
        // 電子郵件為必填項;
        // 註冊;
        // 需要註冊;
        // 密碼;
        // 密碼是必需的;
        // 確認密碼;
        // 確認密碼為必填項;
        this.validation_messages = {
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
        // Initialize the FirebaseUI Widget using Firebase.
        this.ui =
            firebaseui__WEBPACK_IMPORTED_MODULE_9__["auth"].AuthUI.getInstance() ||
                new firebaseui__WEBPACK_IMPORTED_MODULE_9__["auth"].AuthUI(firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]());
        //    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, function (formGroup) {
            return _validators_password_validator__WEBPACK_IMPORTED_MODULE_7__["PasswordValidator"].areNotEqual(formGroup);
        });
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](
            // "supplier@supplier.com",
            "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            matching_passwords: this.matching_passwords_group
        });
    }
    SignupPage.prototype.ionViewWillEnter = function () {
        var signUpButton = document.getElementById('signUp');
        var signInButton = document.getElementById('signIn');
        var container = document.getElementById('container');
        signUpButton.addEventListener('click', function () {
            container.classList.add("right-panel-active");
        });
        signInButton.addEventListener('click', function () {
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
                firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].EmailAuthProvider.PROVIDER_ID,
                firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].GoogleAuthProvider.PROVIDER_ID,
                firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].FacebookAuthProvider.PROVIDER_ID,
            ]
            // Terms of service url.
            // tosUrl: "<your-tos-url>",
            // Privacy policy url.
            // privacyPolicyUrl: "<your-privacy-policy-url>"
            // Other config options...
        });
        //    this.router.navigate(["app/categories"]);
    };
    SignupPage.prototype.ngOnInit = function () {
        this.menu.enable(false);
    };
    SignupPage.prototype.onRole = function (value) {
        console.log(value);
        this.slides.slideTo(value).then(function (data) {
            console.log(data);
        });
    };
    SignupPage.prototype.getTap = function () {
        // this.slides.startAutoplay();
        this.slides.getActiveIndex().then(function (data) {
            console.log(data);
        });
        // this.slides.slideNext().then(data => {
        //   // this.slides.startAutoplay();
        // });
    };
    SignupPage.prototype.showTermsModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _terms_of_service_terms_of_service_page__WEBPACK_IMPORTED_MODULE_5__["TermsOfServicePage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SignupPage.prototype.showPrivacyModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SignupPage.prototype.doSignup = function () {
        console.log("do sign up");
        // this.router.navigate(["app/categories"]);
        this.router.navigate(["app/categories"]);
    };
    SignupPage.prototype.doFacebookSignup = function () {
        console.log("facebook signup");
        this.router.navigate(["app/categories"]);
    };
    // sign up anonymously
    SignupPage.prototype.doGoogleSignup = function () {
        var _this = this;
        console.log("firebase google sign up");
        firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]()
            .signInAnonymously()
            .then(function (res) {
            console.log("Anonymous User: ", res);
            // this.router.navigate(["firebase/categories"]);
            _this.navCtrl.navigateForward("/firebase/categories");
        })
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    };
    SignupPage.prototype.doTwitterSignup = function () {
        console.log("twitter signup");
        this.router.navigate(["app/categories"]);
    };
    SignupPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slides", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignupPage.prototype, "slides", void 0);
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./styles/signup.page.scss */ "./src/app/signup/styles/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ }),

/***/ "./src/app/signup/styles/signup.page.scss":
/*!************************************************!*\
  !*** ./src/app/signup/styles/signup.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,800\");\n* {\n  box-sizing: border-box;\n}\nbody {\n  background: lightblue url(\"https://css.zohostatic.com/iam/M_3578894/components/images/bg.svg\") no-repeat fixed center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: \"Montserrat\", sans-serif;\n  height: 100vh;\n  margin: -20px 0 50px;\n}\nh1 {\n  font-weight: bold;\n  margin: 0;\n}\nh2 {\n  text-align: center;\n}\np {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px;\n}\nspan {\n  font-size: 12px;\n}\na {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\nbutton {\n  border-radius: 20px;\n  border: 1px solid var(--ion-color-theme);\n  background-color: var(--ion-color-theme);\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\nbutton:active {\n  transform: scale(0.95);\n}\nbutton:focus {\n  outline: none;\n}\nbutton.ghost {\n  background-color: transparent;\n  border-color: #FFFFFF;\n}\nform {\n  background-color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 50px;\n  height: 100%;\n  text-align: center;\n}\ninput {\n  background-color: #eee;\n  border: none;\n  padding: 12px 15px;\n  margin: 8px 0;\n  width: 100%;\n}\n.container {\n  top: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  overflow: hidden;\n  width: 768px;\n  max-width: 100%;\n  min-height: 480px;\n}\n.form-container {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out;\n}\n.sign-in-container {\n  left: 0;\n  width: 50%;\n  z-index: 2;\n}\n.container.right-panel-active .sign-in-container {\n  transform: translateX(100%);\n}\n.sign-up-container {\n  left: 0;\n  width: 50%;\n  opacity: 0;\n  z-index: 1;\n}\n.container.right-panel-active .sign-up-container {\n  transform: translateX(100%);\n  opacity: 1;\n  z-index: 5;\n  -webkit-animation: show 0.6s;\n          animation: show 0.6s;\n}\n@-webkit-keyframes show {\n  0%, 49.99% {\n    opacity: 0;\n    z-index: 1;\n  }\n  50%, 100% {\n    opacity: 1;\n    z-index: 5;\n  }\n}\n@keyframes show {\n  0%, 49.99% {\n    opacity: 0;\n    z-index: 1;\n  }\n  50%, 100% {\n    opacity: 1;\n    z-index: 5;\n  }\n}\n.overlay-container {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.6s ease-in-out;\n  z-index: 100;\n}\n.container.right-panel-active .overlay-container {\n  transform: translateX(-100%);\n}\n.overlay {\n  background: var(--ion-color-theme);\n  background: linear-gradient(to right, var(--ion-color-theme-tint), var(--ion-color-theme));\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 0;\n  color: #FFFFFF;\n  position: relative;\n  left: -100%;\n  height: 100%;\n  width: 200%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.container.right-panel-active .overlay {\n  transform: translateX(50%);\n}\n.overlay-panel {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 40px;\n  text-align: center;\n  top: 0;\n  height: 100%;\n  width: 50%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-left {\n  transform: translateX(-20%);\n}\n.container.right-panel-active .overlay-left {\n  transform: translateX(0);\n}\n.overlay-right {\n  right: 0;\n  transform: translateX(0);\n}\n.container.right-panel-active .overlay-right {\n  transform: translateX(20%);\n}\n.social-container {\n  margin: 20px 0;\n}\n.social-container a {\n  border: 1px solid #DDDDDD;\n  border-radius: 50%;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 5px;\n  height: 40px;\n  width: 40px;\n}\nfooter {\n  background-color: #222;\n  color: #fff;\n  font-size: 14px;\n  bottom: 0;\n  position: fixed;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 999;\n}\nfooter p {\n  margin: 10px 0;\n}\nfooter i {\n  color: var(--ion-color-theme);\n}\nfooter a {\n  color: #3c97bf;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaWdudXAvc3R5bGVzL3NpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zdHlsZXMvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0Msc0JBQUE7QUNERDtBRElBO0VBQ0UscUhBQUE7RUFFRCxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNGRDtBREtBO0VBQ0MsaUJBQUE7RUFDQSxTQUFBO0FDRkQ7QURLQTtFQUNDLGtCQUFBO0FDRkQ7QURLQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0ZEO0FES0E7RUFDQyxlQUFBO0FDRkQ7QURLQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDRkQ7QURLQTtFQUNDLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBQ0ZEO0FES0E7RUFDQyxzQkFBQTtBQ0ZEO0FES0E7RUFDQyxhQUFBO0FDRkQ7QURLQTtFQUNDLDZCQUFBO0VBQ0EscUJBQUE7QUNGRDtBREtBO0VBQ0MseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZEO0FES0E7RUFDQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDRkQ7QURLQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Qsc0JBQUE7RUFDQSxtQkFBQTtFQUNFLDRFQUFBO0VBRUYsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNIRDtBRE1BO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDSEQ7QURNQTtFQUNDLE9BQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0hEO0FETUE7RUFDQywyQkFBQTtBQ0hEO0FETUE7RUFDQyxPQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDSEQ7QURNQTtFQUNDLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDSEQ7QURNQTtFQUNDO0lBQ0MsVUFBQTtJQUNBLFVBQUE7RUNIQTtFRE1EO0lBQ0MsVUFBQTtJQUNBLFVBQUE7RUNKQTtBQUNGO0FETEE7RUFDQztJQUNDLFVBQUE7SUFDQSxVQUFBO0VDSEE7RURNRDtJQUNDLFVBQUE7SUFDQSxVQUFBO0VDSkE7QUFDRjtBRE9BO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUNMRDtBRFFBO0VBQ0MsNEJBQUE7QUNMRDtBRFFBO0VBQ0Msa0NBQUE7RUFFQSwwRkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNFLHdCQUFBO0VBQ0Ysc0NBQUE7QUNMRDtBRFFBO0VBQ0csMEJBQUE7QUNMSDtBRFFBO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtBQ0xEO0FEUUE7RUFDQywyQkFBQTtBQ0xEO0FEUUE7RUFDQyx3QkFBQTtBQ0xEO0FEUUE7RUFDQyxRQUFBO0VBQ0Esd0JBQUE7QUNMRDtBRFFBO0VBQ0MsMEJBQUE7QUNMRDtBRFFBO0VBQ0MsY0FBQTtBQ0xEO0FEUUE7RUFDQyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTEQ7QURRQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDTEo7QURRQTtFQUNJLGNBQUE7QUNMSjtBRFFBO0VBQ0ksNkJBQUE7QUNMSjtBRFFBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc3R5bGVzL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsODAwJyk7XG5cbioge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlIHVybChcImh0dHBzOi8vY3NzLnpvaG9zdGF0aWMuY29tL2lhbS9NXzM1Nzg4OTQvY29tcG9uZW50cy9pbWFnZXMvYmcuc3ZnXCIpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7ICAgXG5cdC8vIGJhY2tncm91bmQ6ICNmNmY1Zjc7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRtYXJnaW46IC0yMHB4IDAgNTBweDtcbn1cblxuaDEge1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luOiAwO1xufVxuXG5oMiB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCB7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0bWFyZ2luOiAyMHB4IDAgMzBweDtcbn1cblxuc3BhbiB7XG5cdGZvbnQtc2l6ZTogMTJweDtcbn1cblxuYSB7XG5cdGNvbG9yOiAjMzMzO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0bWFyZ2luOiAxNXB4IDA7XG59XG5cbmJ1dHRvbiB7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRmb250LXNpemU6IDEycHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRwYWRkaW5nOiAxMnB4IDQ1cHg7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG5idXR0b246Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG5idXR0b24uZ2hvc3Qge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuXG5mb3JtIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdHBhZGRpbmc6IDAgNTBweDtcblx0aGVpZ2h0OiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0Ym9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiAxMnB4IDE1cHg7XG5cdG1hcmdpbjogOHB4IDA7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuICBcdGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIFxuXHRcdFx0MCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR3aWR0aDogNzY4cHg7XG5cdG1heC13aWR0aDogMTAwJTtcblx0bWluLWhlaWdodDogNDgwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2lnbi1pbi1jb250YWluZXIge1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogNTAlO1xuXHR6LWluZGV4OiAyO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi1pbi1jb250YWluZXIge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG5cbi5zaWduLXVwLWNvbnRhaW5lciB7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiA1MCU7XG5cdG9wYWNpdHk6IDA7XG5cdHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLXVwLWNvbnRhaW5lciB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcblx0b3BhY2l0eTogMTtcblx0ei1pbmRleDogNTtcblx0YW5pbWF0aW9uOiBzaG93IDAuNnM7XG59XG5cbkBrZXlmcmFtZXMgc2hvdyB7XG5cdDAlLCA0OS45OSUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0ei1pbmRleDogMTtcblx0fVxuXHRcblx0NTAlLCAxMDAlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHotaW5kZXg6IDU7XG5cdH1cbn1cblxuLm92ZXJsYXktY29udGFpbmVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDUwJTtcblx0d2lkdGg6IDUwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcblx0ei1pbmRleDogMTAwO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXJ7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5vdmVybGF5IHtcblx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWlvbi1jb2xvci10aGVtZS10aW50KSwgdmFyKC0taW9uLWNvbG9yLXRoZW1lKSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCx2YXIoLS1pb24tY29sb3ItdGhlbWUtdGludCksIHZhcigtLWlvbi1jb2xvci10aGVtZSkpO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGxlZnQ6IC0xMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAyMDAlO1xuICBcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5IHtcbiAgXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuLm92ZXJsYXktcGFuZWwge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiAwIDQwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dG9wOiAwO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LWxlZnQge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5vdmVybGF5LXJpZ2h0IHtcblx0cmlnaHQ6IDA7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmlnaHQge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcbn1cblxuLnNvY2lhbC1jb250YWluZXIge1xuXHRtYXJnaW46IDIwcHggMDtcbn1cblxuLnNvY2lhbC1jb250YWluZXIgYSB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNEREREREQ7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW46IDAgNXB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdHdpZHRoOiA0MHB4O1xufVxuXG5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG5mb290ZXIgcCB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbmZvb3RlciBpIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbn1cblxuZm9vdGVyIGEge1xuICAgIGNvbG9yOiAjM2M5N2JmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw4MDBcIik7XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZSB1cmwoXCJodHRwczovL2Nzcy56b2hvc3RhdGljLmNvbS9pYW0vTV8zNTc4ODk0L2NvbXBvbmVudHMvaW1hZ2VzL2JnLnN2Z1wiKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IC0yMHB4IDAgNTBweDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luOiAyMHB4IDAgMzBweDtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMnB4IDQ1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5idXR0b24uZ2hvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xufVxuXG5mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA3NjhweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0ODBweDtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zaWduLWluLWNvbnRhaW5lciB7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLWluLWNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuLnNpZ24tdXAtY29udGFpbmVyIHtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwJTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24tdXAtY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiA1O1xuICBhbmltYXRpb246IHNob3cgMC42cztcbn1cblxuQGtleWZyYW1lcyBzaG93IHtcbiAgMCUsIDQ5Ljk5JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIDUwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiA1O1xuICB9XG59XG4ub3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWlvbi1jb2xvci10aGVtZS10aW50KSwgdmFyKC0taW9uLWNvbG9yLXRoZW1lKSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0taW9uLWNvbG9yLXRoZW1lLXRpbnQpLCB2YXIoLS1pb24tY29sb3ItdGhlbWUpKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuLm92ZXJsYXktcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LWxlZnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5vdmVybGF5LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmlnaHQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcbn1cblxuLnNvY2lhbC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLnNvY2lhbC1jb250YWluZXIgYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEREREREQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogOTk5O1xufVxuXG5mb290ZXIgcCB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5mb290ZXIgaSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufVxuXG5mb290ZXIgYSB7XG4gIGNvbG9yOiAjM2M5N2JmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"

/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es5.js.map