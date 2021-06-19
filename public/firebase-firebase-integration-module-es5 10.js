(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-firebase-integration-module"],{

/***/ "./node_modules/@angular/fire/auth/auth.js":
/*!*************************************************!*\
  !*** ./node_modules/@angular/fire/auth/auth.js ***!
  \*************************************************/
/*! exports provided: AngularFireAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuth", function() { return AngularFireAuth; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AngularFireAuth = (function () {
    function AngularFireAuth(options, nameOrConfig, platformId, zone) {
        var _this = this;
        this.zone = zone;
        var scheduler = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["FirebaseZoneScheduler"](zone, platformId);
        this.auth = zone.runOutsideAngular(function () {
            var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["_firebaseAppFactory"])(options, zone, nameOrConfig);
            return app.auth();
        });
        this.authState = scheduler.keepUnstableUntilFirst(scheduler.runOutsideAngular(new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
            var unsubscribe = _this.auth.onAuthStateChanged(subscriber);
            return { unsubscribe: unsubscribe };
        })));
        this.user = scheduler.keepUnstableUntilFirst(scheduler.runOutsideAngular(new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
            var unsubscribe = _this.auth.onIdTokenChanged(subscriber);
            return { unsubscribe: unsubscribe };
        })));
        this.idToken = this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (user) {
            return user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user.getIdToken()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
        this.idTokenResult = this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (user) {
            return user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user.getIdTokenResult()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
    AngularFireAuth = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object, Object, Object,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AngularFireAuth);
    return AngularFireAuth;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/auth/auth.module.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/fire/auth/auth.module.js ***!
  \********************************************************/
/*! exports provided: AngularFireAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthModule", function() { return AngularFireAuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./node_modules/@angular/fire/auth/auth.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularFireAuthModule = (function () {
    function AngularFireAuthModule() {
    }
    AngularFireAuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]]
        })
    ], AngularFireAuthModule);
    return AngularFireAuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/auth/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/fire/auth/index.js ***!
  \**************************************************/
/*! exports provided: AngularFireAuth, AngularFireAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./node_modules/@angular/fire/auth/public_api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuth", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuthModule"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/auth/public_api.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/fire/auth/public_api.js ***!
  \*******************************************************/
/*! exports provided: AngularFireAuth, AngularFireAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./node_modules/@angular/fire/auth/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuth", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"]; });

/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.module */ "./node_modules/@angular/fire/auth/auth.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthModule", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthModule"]; });



//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/alerts/form-alert/form-alert.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/alerts/form-alert/form-alert.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"theme\">\n    <!-- <ion-buttons slot=\"start\">\n    </ion-buttons> -->\n    <!-- <ion-title style=\"color: white; font-size: x-large; font-weight: bold; text-align: center;\">購入課程\n      <ion-progress-bar id=\"progress-bar\" color=\"secondary\" value=\"{{progress}}\"></ion-progress-bar>\n    </ion-title> -->\n    <ion-title>\n      <ion-progress-bar id=\"progress-bar\" style=\"height: 8px; border-radius: 10px\" color=\"secondary\"\n        value=\"{{progress}}\"></ion-progress-bar>\n    </ion-title>\n    <ion-button icon-only style=\"color: white\" color=\"none\" slot=\"end\" class=\"ionbutton\" outline=\"clear\"\n      (click)=\"onDismiss()\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background: transparent;\">\n\n  <ion-card no-padding style=\"margin: 0px; border-radius: 0px; height: 100%;\">\n    <ion-card-content style=\"background: var(--ion-color-theme); color: white;\" class=\"filters-content\">\n      <ion-item-group class=\"filters-group\">\n        <form [formGroup]=\"FilterForm\" class=\"range-list\" (ngSubmit)=\"submitFilterForm()\">\n          <!-- B1 -->\n          <ion-card *ngIf=\"!this.cate_1_checked\" style=\"height: 90%\">\n            <ion-item-divider tappable (click)=\"collapseA = !collapseA\">\n              <ion-label style=\"font-size: large;\">到校課程類別 (請選擇一個)</ion-label>\n            </ion-item-divider>\n            <ion-list class=\"radio-list\" lines=\"full\">\n              <ion-radio-group class=\"radio-group\" formControlName=\"cate_1\">\n                <ion-item-divider>{{cate_1.name[0]}}</ion-item-divider>\n                <ion-item style=\"display: inline-block;\" class=\"radio-item\" *ngFor=\"let i of cate_1.list\">\n                  <ion-label class=\"radio-label\">{{i}}</ion-label>\n                  <ion-radio slot=\"start\" color=\"theme\" value=\"{{i}}\"></ion-radio>\n                </ion-item>\n                <br />\n                <br />\n                <ion-item-divider>{{cate_1.name[1]}}</ion-item-divider>\n                <ion-item style=\"display: inline-block;\" class=\"radio-item\" *ngFor=\"let j of cate_1.list2\">\n                  <ion-label style=\"font-size: large;\" class=\"radio-label\">{{j}}</ion-label>\n                  <ion-radio slot=\"start\" color=\"theme\" value=\"{{j}}\"></ion-radio>\n                </ion-item>\n                <br />\n                <br />\n                <ion-item-divider>{{cate_1.name[2]}}</ion-item-divider>\n                <ion-item style=\"display: inline-block;\" class=\"radio-item\" *ngFor=\"let x of cate_1.list3\">\n                  <ion-label class=\"radio-label\">{{x}}</ion-label>\n                  <ion-radio slot=\"start\" color=\"theme\" value=\"{{x}}\"></ion-radio>\n                </ion-item>\n                <br />\n                <br />\n                <ion-item-divider>{{cate_1.name[3]}}</ion-item-divider>\n                <ion-item style=\"display: inline-block;\" class=\"radio-item\" *ngFor=\"let y of cate_1.list4\">\n                  <ion-label class=\"radio-label\">{{y}}</ion-label>\n                  <ion-radio slot=\"start\" color=\"theme\" value=\"{{y}}\"></ion-radio>\n                </ion-item>\n                <br />\n                <br />\n              </ion-radio-group>\n            </ion-list>\n\n            <ion-button color=\"theme\" (click)=\"this.cate_1_checked == true\">Continue</ion-button>\n          </ion-card>\n\n          <!-- <div *ngIf=\"this.cate_1_checked\">\n            cate 1 is checked\n          </div> -->\n\n          <!-- B2 -->\n          <ion-card class=\"card\" style=\"height: 90%\"\n            *ngIf=\"this.target_user_age_checked == false && this.hideTargetUserAge == false\">\n            <ion-item-divider>\n              <ion-label style=\"font-size: large;\">\n                <!-- 到校課程對象 -->\n                1. 請選擇到校課程對象範圍（從最低到最高）\n              </ion-label>\n            </ion-item-divider>\n\n            <ion-row class=\"range-item\">\n              <ion-col size=\"12\">\n                <div class=\"range-header\">\n                  <span class=\"range-value\">\n                    {{\n                    changeTargetValue(FilterForm.controls.target_user_age.value.lower)\n                    }}\n                  </span>\n                  <!-- <span class=\"range-label\">課程人數</span> -->\n                  <span class=\"range-value\">\n                    {{\n                    changeTargetValue(FilterForm.controls.target_user_age.value.upper)\n                    }}\n                  </span>\n                </div>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-range class=\"range-control\" formControlName=\"target_user_age\" color=\"primary\" dualKnobs=\"true\"\n                  (ionChange)=\"rangeChangeSecond($event)\" min=\"1\" max=\"16\" step=\"1\">\n                </ion-range>\n              </ion-col>\n            </ion-row>\n\n            <!-- <div class=\"backbutton\">\n              <ion-button color=\"primary\" expand=\"full\" fill=\"clear\"\n                (click)=\"onAddTargetUserAgeDetail(this.FilterForm.controls.target_user_age.value, this.target_user_age_checked)\">\n                上一步\n              </ion-button>\n            </div> -->\n\n            <div class=\"nextbutton\">\n              <ion-button color=\"primary\" expand=\"full\" fill=\"clear\"\n                (click)=\"onAddTargetUserAgeDetail(this.FilterForm.controls.target_user_age.value, this.target_user_age_checked)\">\n                下一步\n              </ion-button>\n            </div>\n          </ion-card>\n\n          <!-- <div *ngIf=\"this.target_user_age_checked\">\n            target user age is checked\n          </div> -->\n\n          <!-- B3 -->\n          <ion-card class=\"card\" style=\"height: 90%\"\n            *ngIf=\"this.class_length_checked == false && this.hideClassLength == false\">\n            <ion-item-divider>\n              <ion-label style=\"font-size: large;\">\n                2. 請問你到校課程嘅時數範圍係\n              </ion-label>\n            </ion-item-divider>\n            <ion-row class=\"range-item\">\n              <ion-col size=\"12\">\n                <div class=\"range-header\">\n                  <span class=\"range-value\">{{ FilterForm.controls.class_length.value.lower }}</span>\n                  <!-- <span class=\"range-label\">時數</span> -->\n                  <div *ngIf=\"FilterForm.controls.class_length.value.upper < 41\">\n                    <span class=\"range-value\">{{ FilterForm.controls.class_length.value.upper }}</span>\n                  </div>\n                  <div *ngIf=\"FilterForm.controls.class_length.value.upper == 41\">\n                    <span class=\"range-value\"> 超過40</span>\n                  </div>\n                  <div *ngIf=\"FilterForm.controls.class_length.value.upper == 42\">\n                    <span class=\"range-value\">任何</span>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-range class=\"range-control\" formControlName=\"class_length\" color=\"primary\" dualKnobs=\"true\"\n                  (ionChange)=\"rangeChange($event)\" min=\"1\" max=\"42\" step=\"1\"></ion-range>\n              </ion-col>\n            </ion-row>\n\n            <div class=\"backbutton\">\n              <ion-button color=\"primary\" expand=\"full\" fill=\"clear\" (click)=\"onB2()\">\n                上一步\n              </ion-button>\n            </div>\n\n            <div class=\"nextbutton\">\n              <ion-button color=\"primary\" expand=\"full\" fill=\"clear\"\n                (click)=\"onAddClassLengthDetail(this.FilterForm.controls.class_length.value, this.class_length_checked)\">\n                下一步\n              </ion-button>\n            </div>\n          </ion-card>\n          <!-- <div *ngIf=\"this.class_length_checked\">\n            class length is checked\n          </div> -->\n\n          <!-- B4 -->\n          <ion-card class=\"card\" style=\"height: 90%\"\n            *ngIf=\"this.class_size_checked == false && this.hideClassSize == false\">\n            <ion-item-divider>\n              <ion-label style=\"font-size: large;\">3. 請問你到校課程嘅人數係</ion-label>\n            </ion-item-divider>\n            <ion-row class=\"range-item\">\n              <ion-col size=\"12\">\n                <div class=\"range-header\">\n                  <span class=\"range-value\">{{ FilterForm.controls.class_size.value.lower }}</span>\n                  <!-- <span class=\"range-label\">課程人數</span> -->\n                  <div *ngIf=\"FilterForm.controls.class_size.value.upper < 41\">\n                    <span class=\"range-value\">{{ FilterForm.controls.class_size.value.upper }}</span>\n                  </div>\n                  <div *ngIf=\"FilterForm.controls.class_size.value.upper == 41\">\n                    <span class=\"range-value\"> 超過40</span>\n                  </div>\n                  <div *ngIf=\"FilterForm.controls.class_size.value.upper == 42\">\n                    <span class=\"range-value\">任何</span>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-range class=\"range-control\" formControlName=\"class_size\" color=\"primary\" dualKnobs=\"true\"\n                  (ionChange)=\"rangeChange($event)\" min=\"1\" max=\"42\" step=\"1\"></ion-range>\n              </ion-col>\n            </ion-row>\n\n            <div class=\"backbutton\">\n              <ion-button color=\"primary\" expand=\"full\" fill=\"clear\" (click)=\"onAddTargetUserAgeDetail()\">\n                上一步\n              </ion-button>\n            </div>\n\n            <div class=\"nextbutton\">\n              <ion-button color=\"primary\" expand=\"full\" fill=\"clear\"\n                (click)=\"onAddClassSizeDetail(this.FilterForm.controls.class_size.value, this.class_size_checked)\">\n                下一步\n              </ion-button>\n            </div>\n          </ion-card>\n\n          <!-- B5 -->\n          <ion-card class=\"card\" style=\"height: 90%\"\n            *ngIf=\"this.teaching_materials_checked == false && this.hideTeachingMaterial == false\">\n            <ion-item-divider>\n              <ion-label style=\"font-size: large;\">4. 到校課程教材</ion-label>\n            </ion-item-divider>\n            <ion-list class=\"radio-list\" lines=\"none\">\n              <ion-radio-group class=\"radio-group\" formControlName=\"teaching_materials\">\n                <ion-item class=\"radio-item\" style=\"\">\n                  <ion-label class=\"radio-label\">出租</ion-label>\n                  <ion-radio slot=\"start\" color=\"primary\" value=\"rental\" (click)=\"show(true)\"></ion-radio>\n                </ion-item>\n                <ion-item class=\"radio-item\" style=\"\">\n                  <ion-label class=\"radio-label\">出售</ion-label>\n                  <ion-radio slot=\"start\" color=\"primary\" value=\"sale\" (click)=\"show(true)\"></ion-radio>\n                </ion-item>\n                <ion-item class=\"radio-item\" style=\"\">\n                  <ion-label class=\"radio-label\">不需要</ion-label>\n                  <ion-radio slot=\"start\" color=\"primary\" value=\"null\" (click)=\"show(false)\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n            <br />\n            <div *ngIf=\"showMessageTeachingMaterial\" class=\"message-tm-section animated slideInRight\">\n              <ion-textarea class=\"message-tm\" rows=\"2\" cols=\"40\" maxLength=\"300\" placeholder=\"你想要多少? 您想擁有哪種教材?\"\n                formControlName=\"message_teaching_materials\">\n              </ion-textarea>\n            </div>\n\n            <div class=\"backbutton\">\n              <ion-button color=\"primary\" expand=\"full\" fill=\"clear\" (click)=\"onAddClassLengthDetail()\">\n                上一步\n              </ion-button>\n            </div>\n\n            <div class=\"nextbutton\">\n              <ion-button color=\"primary\" expand=\"full\" fill=\"clear\"\n                (click)=\"onAddTeachingMaterialsDetail(this.FilterForm.controls.teaching_materials.value)\">\n                下一步\n              </ion-button>\n            </div>\n          </ion-card>\n\n          <!-- B6 -->\n          <ion-card class=\"card\" style=\"height: 90%;\" *ngIf=\"this.hidesqtimelimit == false\">\n            <ion-item-divider>\n              <ion-label style=\"font-size: large;\">5. 我希望在 ... 天內收到報價</ion-label>\n            </ion-item-divider>\n            <ion-list class=\"radio-list\" lines=\"none\">\n              <ion-radio-group class=\"radio-group\" formControlName=\"sq_timelimit\">\n                <ion-item class=\"radio-item\" style=\"display: inline-block;\" *ngFor=\"let i of [1,2,3,4,5,6,7]\">\n                  <ion-label class=\"radio-label\">{{i}}</ion-label>\n                  <ion-radio slot=\"start\" color=\"primary\" value=\"{{i}}\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n\n            <br>\n            <div class=\"message-tm-section\">\n              <ion-textarea class=\"message-tm\" rows=\"2\" cols=\"40\" maxLength=\"300\" placeholder=\"給供應商的訊息\"\n                formControlName=\"message\">\n              </ion-textarea>\n            </div>\n\n            <div class=\"backbutton\">\n              <ion-button color=\"primary\" expand=\"full\" fill=\"clear\" (click)=\"onAddClassSizeDetail()\">\n                上一步\n              </ion-button>\n            </div>\n\n            <div class=\"nextbutton\">\n              <ion-button color=\"primary\" expand=\"full\" fill=\"clear\"\n                (click)=\"onAddSQTimelimitDetail(this.FilterForm.controls.sq_timelimit.value)\">\n                下一步\n              </ion-button>\n            </div>\n          </ion-card>\n\n          <!-- B7 -->\n          <ion-card class=\"card\" *ngIf=\"this.submitNow == true\" style=\"height: 90%\">\n            <ion-card-header style=\"color: var(--ion-color-primary);font-size: large; font-weight: bold;\">\n              到校課程類別: {{FilterForm.value.cate_1 || \"\"}}\n            </ion-card-header>\n\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: left;\">\n                    到校課程時數:\n                  </ion-label>\n                  <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: right;\">\n                    {{FilterForm.value.class_length.lower.toString().concat('小時')\n                    || '0'}} ~\n                    {{FilterForm.value.class_length.upper.toString().concat('小時')\n                    || '0'}}\n                  </ion-label>\n                </ion-col>\n\n                <ion-col size=\"12\">\n                  <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: left\">\n                    到校課程人數:\n                  </ion-label>\n                  <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: right;\">\n                    {{FilterForm.value.class_size.lower.toString().concat('人')}}\n                    ~\n                    {{FilterForm.value.class_size.upper.toString().concat('人')}}\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: left;\">\n                    到校課程對象:\n                  </ion-label>\n                  <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: right;\">\n                    {{changeTargetValue(FilterForm.value.target_user_age.lower)\n                    || '0'}} ~\n                    {{changeTargetValue(FilterForm.value.target_user_age.upper)\n                    || '0'}}\n                  </ion-label>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <div *ngIf=\"FilterForm.value.teaching_materials == 'sale'\">\n                    <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: left;\">\n                      到校課程教材:\n                    </ion-label>\n                    <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: right;\">\n                      出售 , {{FilterForm.value.message_teaching_materials}}\n                    </ion-label>\n                  </div>\n                  <div *ngIf=\"FilterForm.value.teaching_materials == 'rental'\">\n                    <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: left;\">\n                      到校課程教材:\n                    </ion-label>\n                    <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: right;\">\n                      出租 , {{FilterForm.value.message_teaching_materials}}\n                    </ion-label>\n                  </div>\n                  <div *ngIf=\"FilterForm.value.teaching_materials == 'null'\">\n                    <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: left;\">\n                      到校課程教材:\n                    </ion-label>\n                    <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: right;\">\n                      不需要\n                    </ion-label>\n                  </div>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: left;\">\n                    給供應商的訊息:\n                  </ion-label>\n                  <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: right;\">\n                    {{FilterForm.value.message}}\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label style=\"color: var(--ion-color-primary);font-size:small; float: right;\">\n                    我想在 {{FilterForm.value.sq_timelimit}} 天內收到報價\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n\n            <br />\n\n            <div class=\"backbutton\">\n              <ion-button color=\"primary\" expand=\"full\" fill=\"clear\" (click)=\"onAddTeachingMaterialsDetail()\">\n                上一步\n              </ion-button>\n            </div>\n\n            <div class=\"middlebutton\" id=\"firebaseui-auth-container\"></div>\n\n            <div class=\"nextbutton\">\n              <ion-button type=\"submit\" color=\"primary\" expand=\"block\" fill=\"outline\">\n                立即獲取報價\n              </ion-button>\n            </div>\n\n            <!-- <ion-button expand=\"block\" color=\"secondary\" fill=\"outline\" (click)=\"save()\">Save</ion-button> -->\n          </ion-card>\n        </form>\n      </ion-item-group>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/user/create/firebase-create-user.modal.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/user/create/firebase-create-user.modal.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This is the proper way if you have submit button outside your ion-content form (typically in the ion-header or ion-footer) -->\n<!-- (ref: https://github.com/ionic-team/ionic/issues/16661) -->\n\n<form class=\"create-user-form ion-page\" [formGroup]=\"createSupplierForm\" (ngSubmit)=\"createSupplier()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>\n        供應商資料表格\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content padding class=\"create-user-content\">\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <!-- 公司名稱 name -->\n        <!-- 聯絡電話 phone -->\n        <!-- 電郵 email -->\n        <section class=\"user-details-fields fields-section\">\n          <h5 class=\"section-header\">供應商資料</h5>\n          <ion-list class=\"inputs-list\" lines=\"full\">\n            <ion-item class=\"input-item\">\n              <ion-label color=\"dark\" position=\"floating\">公司名稱</ion-label>\n              <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n            </ion-item>\n            <ion-item class=\"input-item\">\n              <ion-label color=\"dark\" position=\"floating\">聯絡電話</ion-label>\n              <ion-input type=\"tel\" formControlName=\"phone\" required></ion-input>\n            </ion-item>\n            <ion-item class=\"input-item\">\n              <ion-label color=\"dark\" position=\"floating\">電郵</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>編輯選擇</ion-label>\n              <ion-select formControlName=\"editor_choice\" interface=\"alert\">\n                <ion-select-option value=\"true\">對</ion-select-option>\n                <ion-select-option value=\"false\">不</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n\n        </section>\n\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <!-- 提供課程類別 cate_1, cate_2, cate_3, cate_4 -->\n        <section class=\"user-languages-fields fields-section\">\n          <h5 class=\"section-header\">提供課程類別</h5>\n          <ion-row class=\"range-item\">\n            <ion-col size=\"12\">\n              <ion-item line=\"none\">\n                <ion-label>{{cate_1.name[0]}}</ion-label>\n                <ion-select formControlName=\"cate_1\" placeholder=\"\" multiple=\"true\" cancelText=\"Cancel\"\n                  okText=\"Confirm\">\n                  <ion-select-option *ngFor=\"let i of cate_1.list\" value=\"{{i}}\">{{i}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item line=\"none\">\n                <ion-label>{{cate_1.name[1]}}</ion-label>\n                <ion-select formControlName=\"cate_2\" placeholder=\"\" multiple=\"true\" cancelText=\"Cancel\"\n                  okText=\"Confirm\">\n                  <ion-select-option *ngFor=\"let j of cate_1.list2\" value=\"{{j}}\">{{j}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item line=\"none\">\n                <ion-label>{{cate_1.name[2]}}</ion-label>\n                <ion-select formControlName=\"cate_3\" placeholder=\"\" multiple=\"true\" cancelText=\"Cancel\"\n                  okText=\"Confirm\">\n                  <ion-select-option *ngFor=\"let x of cate_1.list3\" value=\"{{x}}\">{{x}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item line=\"none\">\n                <ion-label>{{cate_1.name[3]}}</ion-label>\n                <ion-select formControlName=\"cate_4\" placeholder=\"\" multiple=\"true\" cancelText=\"Cancel\"\n                  okText=\"Confirm\">\n                  <ion-select-option *ngFor=\"let y of cate_1.list4\" value=\"{{y}}\">{{y}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </section>\n\n      </ion-col>\n      <ion-col size=\"12\">\n        <!-- 服務對象年齡 target_user_age -->\n        <!-- 課程可容人數 class_size -->\n        <!-- 可提供課時長度 class_length -->\n        <!-- 公司簡介（100字）company_intro -->\n        <!-- 導師資歷（50字）tutor_qual -->\n        <!-- 比賽經驗（50字）competition_exp -->\n        <section class=\"user-languages-fields fields-section\">\n          <h5 class=\"section-header\">提供服務</h5>\n          <ion-row class=\"range-item-row\">\n            <ion-col size=\"12\">\n              <div class=\"range-header\">\n                <ion-label class=\"range-label\">服務對象年齡</ion-label>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-row class=\"range-item\">\n                <ion-col size=\"12\">\n                  <div class=\"range-header\">\n                    <span class=\"range-value\">\n                      {{ changeTargetValue(createSupplierForm.controls.target_user_age.value.lower) }}\n                    </span>\n                    <span class=\"range-value\">\n                      {{ changeTargetValue(createSupplierForm.controls.target_user_age.value.upper) }}\n                    </span>\n                  </div>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-range class=\"range-control\" formControlName=\"target_user_age\" color=\"theme\" dualKnobs=\"true\"\n                    (ionChange)=\"rangeChangeSecond($event)\" min=\"1\" max=\"18\" step=\"1\"></ion-range>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"range-item-row\">\n            <ion-col size=\"12\">\n              <div class=\"range-header\">\n                <ion-label class=\"range-label\">課程可容人數</ion-label>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-row class=\"range-item\">\n                <ion-col size=\"12\">\n                  <div class=\"range-header\">\n                    <span class=\"range-value\">{{ createSupplierForm.controls.class_size.value.lower }}</span>\n                    <div *ngIf=\"createSupplierForm.controls.class_size.value.upper < 40\">\n                      <span class=\"range-value\">{{ createSupplierForm.controls.class_size.value.upper }}</span>\n                    </div>\n                    <div *ngIf=\"createSupplierForm.controls.class_size.value.upper == 41\">\n                      <span class=\"range-value\"> Over 40</span>\n                    </div>\n                    <div *ngIf=\"createSupplierForm.controls.class_size.value.upper == 42\">\n                      <span class=\"range-value\">Any</span>\n                    </div>\n                  </div>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-range class=\"range-control\" formControlName=\"class_size\" color=\"theme\" dualKnobs=\"true\"\n                    (ionChange)=\"rangeChange($event)\" min=\"1\" max=\"42\" step=\"1\"></ion-range>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"range-item-row\">\n            <ion-col size=\"12\">\n              <div class=\"range-header\">\n                <span class=\"range-label\">可提供課時長度</span>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-row class=\"range-item\">\n                <ion-col size=\"12\">\n                  <div class=\"range-header\">\n                    <span class=\"range-value\">{{ createSupplierForm.controls.class_length.value.lower }}</span>\n\n                    <div *ngIf=\"createSupplierForm.controls.class_length.value.upper < 40\">\n                      <span class=\"range-value\">{{ createSupplierForm.controls.class_length.value.upper }}</span>\n                    </div>\n                    <div *ngIf=\"createSupplierForm.controls.class_length.value.upper == 41\">\n                      <span class=\"range-value\"> Over 40</span>\n                    </div>\n                    <div *ngIf=\"createSupplierForm.controls.class_length.value.upper == 42\">\n                      <span class=\"range-value\"> Any</span>\n                    </div>\n\n                  </div>\n                </ion-col>\n                <ion-col size=\"12\">\n                  <ion-range class=\"range-control\" formControlName=\"class_length\" color=\"theme\" dualKnobs=\"true\"\n                    (ionChange)=\"rangeChange($event)\" min=\"1\" max=\"42\" step=\"1\"></ion-range>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"range-item-row\">\n            <ion-col size=\"12\">\n              <div class=\"range-header\">\n                <span class=\"range-label\">公司簡介（100字）</span>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-textarea rows=\"8\" cols=\"40\" maxLength=\"100\" formControlName=\"company_intro\"></ion-textarea>\n              <!-- <ion-input formControlName=\"company_intro\" color=\"secondary\"></ion-input> -->\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"range-item-row\">\n            <ion-col size=\"12\">\n              <div class=\"range-header\">\n                <span class=\"range-label\">導師資歷（50字）</span>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-textarea rows=\"6\" cols=\"20\" maxLength=\"50\" formControlName=\"tutor_qual\"></ion-textarea>\n              <!-- <ion-input formControlName=\"tutor_qual\" color=\"secondary\"></ion-input> -->\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"range-item-row\">\n            <ion-col size=\"12\">\n              <div class=\"range-header\">\n                <span class=\"range-label\">比賽經驗（50字）</span>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-textarea rows=\"6\" cols=\"20\" maxLength=\"50\" formControlName=\"competition_exp\"></ion-textarea>\n            </ion-col>\n          </ion-row>\n\n        </section>\n\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <!-- B2 -->\n    <!-- <ion-item-divider>\n        <ion-label>對象</ion-label>\n      </ion-item-divider>\n      <ion-row class=\"range-item\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-value\">\n              {{ changeTargetValue(createSupplierForm.controls.second.value.lower) }}\n            </span>\n            <span class=\"range-value\">\n              {{ changeTargetValue(createSupplierForm.controls.second.value.upper) }}\n            </span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"second\" color=\"theme\" dualKnobs=\"true\"\n            (ionChange)=\"rangeChangeSecond($event)\" min=\"1\" max=\"18\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row> -->\n\n    <!-- <ion-item-divider>\n        <ion-label>課程人數</ion-label>\n      </ion-item-divider>\n      <ion-row class=\"range-item\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-value\">{{ createSupplierForm.controls.first.value.lower }}</span>\n            <span class=\"range-value\">{{ createSupplierForm.controls.first.value.upper }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"first\" color=\"theme\" dualKnobs=\"true\"\n            (ionChange)=\"rangeChange($event)\" min=\"1\" max=\"40\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row> -->\n\n    <!-- <ion-item-divider>\n        <ion-label>時數</ion-label>\n      </ion-item-divider>\n      <ion-row class=\"range-item\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-value\">{{ createSupplierForm.controls.dual.value.lower }}</span>\n            <span class=\"range-value\">{{ createSupplierForm.controls.dual.value.upper }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"dual\" color=\"theme\" dualKnobs=\"true\"\n            (ionChange)=\"rangeChange($event)\" min=\"1\" max=\"40\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row> -->\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button color=\"danger\" expand=\"block\" fill=\"outline\" (click)=\"onReset()\">\n          重置\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"theme\" type=\"submit\" fill=\"solid\">提交\n        </ion-button>\n        <!-- // <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\"\n          [disabled]=\"!createUserForm.valid\">CREATE</ion-button> -->\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n\n\n\n<!-- <form class=\"create-user-form ion-page\" [formGroup]=\"createUserForm\" (ngSubmit)=\"createUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>\n        供應商資料表格\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"create-user-content\">\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"5\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [mode]=\"'cover'\" class=\"user-image\" animation=\"spinner\" [src]=\"userData.avatar\"\n            [alt]=\"'user image'\"></app-image-shell>\n        </app-aspect-ratio>\n        <ion-button class=\"change-image-btn\" color=\"secondary\" (click)=\"changeUserImage()\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"camera\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    公司名稱\n    \n    <section class=\"user-details-fields fields-section\">\n      \n      <ion-list class=\"inputs-list\" lines=\"full\">\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Last name</ion-label>\n          <ion-input type=\"text\" formControlName=\"lastname\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Date of Birth</ion-label>\n          <ion-datetime display-format=\"DD/MM/YYYY\" picker-format=\"DD MMMM YYYY\" formControlName=\"birthdate\" required>\n          </ion-datetime>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Phone number</ion-label>\n          <ion-input type=\"tel\" formControlName=\"phone\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\n        </ion-item>\n      </ion-list>\n    </section>\n編輯選擇\n    <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\">Experience in</h5>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"skills\" lines=\"none\" class=\"checkbox-tag rounded-tag\"\n          *ngFor=\"let skill of skillsFormArray.controls; let i = index;\">\n          <ion-label class=\"tag-label\">{{skills[i].name}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section>\n\n    <section class=\"user-languages-fields fields-section\">\n      <h5 class=\"section-header\">Languages</h5>\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\">English</span>\n            <span class=\"range-value\">{{ changeLangValue(createUserForm.controls.english.value) }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"english\" color=\"secondary\" min=\"1\" max=\"10\" step=\"1\">\n          </ion-range>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\">Spanish</span>\n            <span class=\"range-value\">{{ changeLangValue(createUserForm.controls.spanish.value) }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"spanish\" color=\"secondary\" min=\"1\" max=\"10\" step=\"1\">\n          </ion-range>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\">French</span>\n            <span class=\"range-value\">{{ changeLangValue(createUserForm.controls.french.value) }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"french\" color=\"secondary\" min=\"1\" max=\"10\" step=\"1\">\n          </ion-range>\n        </ion-col>\n      </ion-row>\n    </section>\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\">CREATE</ion-button>\n   //     <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!createUserForm.valid\">CREATE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/user/select-image/select-user-image.modal.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/user/select-image/select-user-image.modal.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content></ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/user/update/firebase-update-user.modal.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/user/update/firebase-update-user.modal.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This is the proper way if you have submit button outside your ion-content form (typically in the ion-header or ion-footer) -->\n<!-- (ref: https://github.com/ionic-team/ionic/issues/16661) -->\n\n<form class=\"update-user-form ion-page\" [formGroup]=\"updateUserForm\" (ngSubmit)=\"updateUser()\">\n\n\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Update User</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"update-user-content\">\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"12\">\n        <app-uploader [id]=\"res.id\"></app-uploader>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"3\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [mode]=\"'cover'\" class=\"user-image\" animation=\"spinner\" [src]=\"downloadURL\"\n            [alt]=\"'user image'\"></app-image-shell>\n        </app-aspect-ratio>\n        <!-- <ion-button class=\"change-image-btn\" color=\"secondary\" (click)=\"changeUserImage()\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"camera\"></ion-icon>\n        </ion-button> -->\n      </ion-col>\n    </ion-row>\n\n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Phone number</ion-label>\n          <ion-input type=\"tel\" formControlName=\"phone\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\n        </ion-item>\n      </ion-list>\n    </section>\n\n    <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\">STEM</h5>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"skills\" lines=\"none\" class=\"checkbox-tag rounded-tag\"\n          *ngFor=\"let skill of cate_1; let i = index;\">\n          <ion-label class=\"tag-label\">{{skill}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section>\n\n    <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\">STEM</h5>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"skills\" lines=\"none\" class=\"checkbox-tag rounded-tag\"\n          *ngFor=\"let skill of cate_2; let i = index;\">\n          <ion-label class=\"tag-label\">{{skill}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section>\n\n    <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\">STEM</h5>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"skills\" lines=\"none\" class=\"checkbox-tag rounded-tag\"\n          *ngFor=\"let skill of cate_3; let i = index;\">\n          <ion-label class=\"tag-label\">{{skill}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section>\n\n    <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\">STEM</h5>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"skills\" lines=\"none\" class=\"checkbox-tag rounded-tag\"\n          *ngFor=\"let skill of cate_4; let i = index;\">\n          <ion-label class=\"tag-label\">{{skill}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section>\n\n    <!-- <section class=\"user-languages-fields fields-section\">\n      <h5 class=\"section-header\">Languages</h5>\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\">English</span>\n            <span class=\"range-value\">{{ changeLangValue(updateUserForm.controls.english.value) }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"english\" color=\"secondary\" min=\"1\" max=\"10\" step=\"1\">\n          </ion-range>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\">Spanish</span>\n            <span class=\"range-value\">{{ changeLangValue(updateUserForm.controls.spanish.value) }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"spanish\" color=\"secondary\" min=\"1\" max=\"10\" step=\"1\">\n          </ion-range>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\">French</span>\n            <span class=\"range-value\">{{ changeLangValue(updateUserForm.controls.french.value) }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"french\" color=\"secondary\" min=\"1\" max=\"10\" step=\"1\">\n          </ion-range>\n        </ion-col>\n      </ion-row>\n    </section> -->\n  </ion-content>\n\n  <ion-footer>\n    <!-- <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"delete-btn\" expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"deleteUser()\">DELETE\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\"\n          [disabled]=\"!updateUserForm.valid\">UPDATE</ion-button>\n      </ion-col>\n    </ion-row> -->\n  </ion-footer>\n</form>"

/***/ }),

/***/ "./src/app/alerts/form-alert/form-alert.module.ts":
/*!********************************************************!*\
  !*** ./src/app/alerts/form-alert/form-alert.module.ts ***!
  \********************************************************/
/*! exports provided: FormAlertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAlertPageModule", function() { return FormAlertPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _form_alert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-alert.page */ "./src/app/alerts/form-alert/form-alert.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../app/firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");










var routes = [
    {
        path: "",
        component: _form_alert_page__WEBPACK_IMPORTED_MODULE_6__["FormAlertPage"]
    }
];
var FormAlertPageModule = /** @class */ (function () {
    function FormAlertPageModule() {
    }
    FormAlertPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_form_alert_page__WEBPACK_IMPORTED_MODULE_6__["FormAlertPage"]],
            providers: [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseService"]]
        })
    ], FormAlertPageModule);
    return FormAlertPageModule;
}());



/***/ }),

/***/ "./src/app/alerts/form-alert/form-alert.page.scss":
/*!********************************************************!*\
  !*** ./src/app/alerts/form-alert/form-alert.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n  --page-color-radio-items-per-row: 5;\n  --page-color-radio-gutter: 2%;\n  --page-color-radio-width: calc((100% - (2 * var(--page-color-radio-gutter) * var(--page-color-radio-items-per-row))) / var(--page-color-radio-items-per-row));\n}\n\n.sc-ion-card-md-h {\n  box-shadow: none;\n}\n\n.ionbutton {\n  --box-shadow: none;\n}\n\n.filters-group {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.filters-content {\n  --background: var(--page-background);\n  height: 100%;\n  padding: 0px;\n}\n\n.filters-content ion-item-divider {\n  --background: var(--ion-color-theme);\n  --color: white;\n  --padding-bottom: calc(var(--page-margin) / 2);\n  --padding-top: calc(var(--page-margin) / 2);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  border: none;\n}\n\n.filters-content .range-list {\n  background-color: var(--ion-color-theme);\n  height: 100%;\n}\n\n.filters-content .range-list .range-item {\n  width: 92%;\n  margin-left: auto;\n  margin-right: auto;\n  --ion-grid-column-padding: 0px;\n  background: var(--ion-color-theme-tint);\n  border-radius: 9px;\n  padding-bottom: var(--page-margin);\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-content .range-list .range-item .range-header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-content .range-list .range-item .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-primary);\n}\n\n.filters-content .range-list .range-item .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-primary);\n}\n\n.filters-content .range-list .range-item .range-control {\n  --ion-text-color: var(--ion-color-primary);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n@supports (-webkit-touch-callout: none) {\n  .filters-content .range-list {\n    /* CSS specific to iOS devices */\n  }\n}\n\n@supports not (-webkit-touch-callout: none) {\n  .filters-content .range-list {\n    /* CSS for other than iOS devices */\n  }\n  .filters-content .range-list .card-tm {\n    height: 90%;\n  }\n  .filters-content .range-list .card-tm .nextbutton {\n    display: block;\n    position: fixed;\n    bottom: 0;\n    right: 0px;\n  }\n  .filters-content .range-list .card-tm .backbutton {\n    display: block;\n    position: fixed;\n    bottom: 0;\n    left: 0px;\n  }\n}\n\n.filters-content .range-list .card .nextbutton {\n  display: block;\n  position: fixed;\n  bottom: 0;\n  right: 0px;\n}\n\n.filters-content .range-list .card .backbutton {\n  display: block;\n  position: fixed;\n  bottom: 0;\n  left: 0px;\n}\n\n.filters-content .range-list .card .middlebutton {\n  display: block;\n  bottom: 0;\n}\n\n.filters-content .checkbox-list {\n  background-color: var(--ion-color-theme);\n}\n\n.filters-content .checkbox-list .checkbox-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n  --background: #089a97;\n}\n\n.filters-content .checkbox-list .checkbox-item .checkbox-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-primary);\n}\n\n.filters-content .checkbox-list .checkbox-item ion-checkbox {\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.filters-content .message-tm-section {\n  width: 99%;\n  float: left;\n  background: transparent;\n}\n\n.filters-content .message-tm-section .message-tm {\n  margin-top: 24px;\n  background: var(--ion-color-theme-tint);\n  color: white;\n  border-radius: 8px;\n}\n\n.filters-content .radio-list {\n  background-color: var(--ion-color-theme-tint);\n  border-radius: 9px;\n}\n\n.filters-content .radio-list .radio-group {\n  display: block;\n}\n\n.filters-content .radio-list .radio-item {\n  display: inline-block;\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n  --background: var(--ion-color-theme-tint);\n  --border-width: 0px;\n}\n\n.filters-content .radio-list .radio-item .radio-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-primary);\n}\n\n.filters-content .radio-list .radio-item ion-radio {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  color: var(--ion-color-primary);\n}\n\n.filters-content .checkbox-tags {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags {\n  background-color: var(--page-background);\n}\n\n.filters-content .checkbox-tags.square-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-medium);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.filters-content .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --checkbox-tag-color: var(--ion-color-lightest);\n  --checkbox-tag-background: var(--ion-color-theme);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-secondary);\n}\n\n.filters-content .radio-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  background-color: var(--page-background);\n  justify-content: space-between;\n  --radio-tag-color: #000;\n  --radio-tag-background: #FFF;\n  --radio-tag-active-color: #FFF;\n  --radio-tag-active-background: #000;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --min-height: 38px;\n  --border-radius: 8px;\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--radio-tag-color);\n  --ion-item-background: var(--radio-tag-background);\n  --ion-item-color: var(--radio-tag-color);\n  flex: 1;\n}\n\n.filters-content .radio-tags .radio-tag.item-radio-checked {\n  --ion-item-background: var(--radio-tag-active-background);\n  --ion-item-color: var(--radio-tag-active-color);\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .radio-tags .radio-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.filters-content .radio-tags .radio-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.filters-content .radio-tags .radio-tag ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.filters-content .radio-tags .radio-tag {\n  --radio-tag-color: var(--ion-color-secondary);\n  --radio-tag-background: var(--ion-color-lightest);\n  --radio-tag-active-color: var(--ion-color-lightest);\n  --radio-tag-active-background: var(--ion-color-secondary);\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.filters-content .toggle-list .toggle-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .toggle-list .toggle-item .toggle-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .toggle-list .toggle-item ion-toggle {\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.filters-content .counter-list .counter-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .counter-list .counter-item .counter-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .counter-list .counter-item .counter-value {\n  text-align: center;\n  color: var(--ion-color-secondary);\n}\n\n.filters-content .counter-list .counter-item app-counter-input {\n  --counter-background: transparent;\n  --counter-color: var(--ion-color-secondary);\n  --counter-border-color: var(--ion-color-secondary);\n}\n\n.filters-content .ratings-list .rating-item {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --inner-padding-end: 0px;\n}\n\n.filters-content .ratings-list .rating-item .rating-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-content .ratings-list .rating-item app-rating-input {\n  --rating-color: var(--ion-color-secondary);\n}\n\n.filters-content .color-radio-group {\n  padding: var(--page-margin) calc(var(--page-margin) - var(--page-color-radio-gutter));\n  background-color: var(--ion-color-lightest);\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: 255,255,255;\n  --color-radio-border-radius: 50%;\n}\n\n.filters-content .color-radio-group .color-radio {\n  --color-radio-color: #FFF;\n  --color-radio-background: #CCC;\n  --color-radio-active-border-rgb: var(--ion-color-darkest-rgb);\n  --color-radio-border-radius: 40%;\n  flex: 0 0 var(--page-color-radio-width);\n  max-width: var(--page-color-radio-width);\n  margin: var(--page-color-radio-gutter);\n}\n\n.filters-content .color-radio-group .color-radio .color-radio-inner-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.filters-content .color-radio-group ion-item.color-radio {\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-start: 0px;\n  --border-width: 4px;\n  --border-style: solid;\n  --border-color: var(--color-radio-background);\n  --background: var(--color-radio-background);\n  --inner-padding-end: 0px;\n  --inner-border-width: 0px;\n  --min-height: initial;\n  --border-radius: var(--color-radio-border-radius);\n  border-radius: var(--color-radio-border-radius);\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked {\n  --border-color: rgba(var(--color-radio-active-border-rgb), .3) !important;\n  --box-shadow: none;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-radio-checked .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.filters-content .color-radio-group ion-item.color-radio.item-interactive-disabled .color-label {\n  opacity: 1;\n}\n\n.filters-content .color-radio-group ion-item.color-radio .color-label {\n  --color: var(--color-radio-color);\n  font-size: 12px;\n  opacity: 0.7;\n}\n\n.filters-content .color-radio-group ion-item.color-radio ion-radio {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n:host-context(.md) .ratings-list,\n:host-context(.md) .counter-list,\n:host-context(.md) .toggle-list,\n:host-context(.md) .radio-list,\n:host-context(.md) .checkbox-list,\n:host-context(.md) .range-list {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n:host-context(.ios) .radio-tags,\n:host-context(.ios) .checkbox-tags {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9hbGVydHMvZm9ybS1hbGVydC9mb3JtLWFsZXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWxlcnRzL2Zvcm0tYWxlcnQvZm9ybS1hbGVydC5wYWdlLnNjc3MiLCIvVXNlcnMvaW1ha2VyL0Rlc2t0b3AvSU1BS0VSL0FBQV9pbWFrZXJfc3Vic2NyaXB0aW9uL2lvblZvaWNlL3NyYy90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZy5zY3NzIiwiL1VzZXJzL2ltYWtlci9EZXNrdG9wL0lNQUtFUi9BQUFfaW1ha2VyX3N1YnNjcmlwdGlvbi9pb25Wb2ljZS9zcmMvdGhlbWUvbWl4aW5zL2lucHV0cy9yYWRpby10YWcuc2NzcyIsIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL3RoZW1lL21peGlucy9pbnB1dHMvY29sb3ItcmFkaW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLHFDQUFBO0VBQ0EsOENBQUE7RUFFQSx1QkFBQTtFQUVBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSw2SkFBQTtBQ1RKOztBRFlBO0VBQ0ksZ0JBQUE7QUNUSjs7QURhQTtFQUNJLGtCQUFBO0FDVko7O0FEY0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWEo7O0FEY0E7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDWEo7O0FEYUk7RUFFSSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUVBLFlBQUE7QUNiUjs7QURnQkk7RUFFSSx3Q0FBQTtFQU1BLFlBQUE7QUNwQlI7O0FEc0JRO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EseUNBQUE7VUFBQSx3Q0FBQTtFQUNBLHVDQUFBO1VBQUEsc0NBQUE7RUFFQSx5REFBQTtBQ3JCWjs7QUR1Qlk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtBQ3JCaEI7O0FEdUJnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUNyQnBCOztBRHdCZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FDdEJwQjs7QUQwQlk7RUFFSSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUN6QmhCOztBRDZCUTtFQXBESjtJQXFEUSxnQ0FBQTtFQzFCVjtBQUNGOztBRGlDUTtFQTdESjtJQThEUSxtQ0FBQTtFQzlCVjtFRGdDVTtJQUNJLFdBQUE7RUM5QmQ7RURnQ2M7SUFDSSxjQUFBO0lBRUEsZUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VDL0JsQjtFRGtDYztJQUNJLGNBQUE7SUFFQSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7RUNqQ2xCO0FBQ0Y7O0FEd0NZO0VBQ0ksY0FBQTtFQUVBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ3ZDaEI7O0FEMENZO0VBQ0ksY0FBQTtFQUVBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ3pDaEI7O0FENENZO0VBQ0ksY0FBQTtFQUdBLFNBQUE7QUM1Q2hCOztBRG9ESTtFQUNJLHdDQUFBO0FDbERSOztBRG9EUTtFQUNJLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDbERaOztBRG9EWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUNsRGhCOztBRHFEWTtFQUNJLHVCQUFBO1VBQUEsc0JBQUE7QUNuRGhCOztBRHdESTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUN0RFI7O0FEd0RRO0VBQ0ksZ0JBQUE7RUFDQSx1Q0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtBQ3ZEWjs7QUQyREk7RUFDSSw2Q0FBQTtFQUNBLGtCQUFBO0FDekRSOztBRDZEUTtFQUNJLGNBQUE7QUMzRFo7O0FEOERRO0VBQ0kscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0FDNURaOztBRCtEWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUM3RGhCOztBRGdFWTtFQUNJLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSwrQkFBQTtBQzlEaEI7O0FEb0VJO0VBQ0ksd0ZBQUE7RUU3T04sMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7QUQ0S0Y7O0FDMUtDO0VBRUMsb0JBQUE7RUFDRSx3QkFBQTtFQUNGLDBCQUFBO0VBQ0EscURBQUE7RUFDRSwyQ0FBQTtBRDJLSjs7QUN6S0k7RUFDRCx1QkFBQTtBRDJLSDs7QUN4S0U7RUFDSSw0REFBQTtFQUNBLGtEQUFBO0FEMEtOOztBQ3ZLSTtFQUNFLFlBQUE7QUR5S047O0FDdktNO0VBRUUsVUFBQTtBRHdLUjs7QUNwS0U7RUFDQyxXQUFBO0VBQ0csZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRHNLTjs7QUNuS0U7RUFDQyxXQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDRCQUFBO0FEbUtIOztBRGdDUTtFQUNJLG9DQUFBO0VBQ0EsbUNBQUE7QUM5Qlo7O0FEa0NRO0VBQ0ksd0NBQUE7QUNoQ1o7O0FEa0NZO0VBQ0ksNkNBQUE7RUFDQSxvREFBQTtFQUNBLHNEQUFBO0VBQ0EsNERBQUE7QUNoQ2hCOztBRHFDUTtFQUNJLDJDQUFBO0FDbkNaOztBRHFDWTtFQUNJLCtDQUFBO0VBQ0EsaURBQUE7RUFDQSxzREFBQTtFQUNBLDREQUFBO0FDbkNoQjs7QUR3Q0k7RUFDSSwrREFBQTtFQUNBLHdDQUFBO0VBQ0EsOEJBQUE7RUdsUk4sdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7QUY2T0Y7O0FFM09DO0VBRUcsb0JBQUE7RUFDQSx3QkFBQTtFQUNGLDBCQUFBO0VBQ0Usa0JBQUE7RUFFRixvQkFBQTtFQUNFLG1CQUFBO0VBQ0YscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esd0NBQUE7RUFFRSxPQUFBO0FGME9KOztBRXhPRTtFQUNJLHlEQUFBO0VBQ0EsK0NBQUE7QUYwT047O0FFdk9JO0VBQ0UsWUFBQTtBRnlPTjs7QUV2T007RUFFRSxVQUFBO0FGd09SOztBRXBPSTtFQUNELFdBQUE7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FGc09OOztBRW5PRTtFQUNDLFdBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUZtT0g7O0FERVE7RUFDSSw2Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsbURBQUE7RUFDQSx5REFBQTtFQUVBLG9DQUFBO0VBQ0EsbUNBQUE7QUNEWjs7QURNUTtFQUNJLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQ0paOztBRE1ZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ0poQjs7QURPWTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QUNMaEI7O0FEV1E7RUFDSSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QUNUWjs7QURXWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNUaEI7O0FEWVk7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0FDVmhCOztBRGFZO0VBQ0ksaUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGtEQUFBO0FDWGhCOztBRGlCUTtFQUNJLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQ2ZaOztBRGlCWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNmaEI7O0FEa0JZO0VBQ0ksMENBQUE7QUNoQmhCOztBRHFCSTtFQUVJLHFGQUFBO0VBQ0EsMkNBQUE7RUlyV04seUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0NBQUE7QUhrVkY7O0FEbUJRO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDZEQUFBO0VBQ0EsZ0NBQUE7RUFFQSx1Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esc0NBQUE7QUNsQlo7O0FEb0JZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2xCaEI7O0FHaFdDO0VBRUcscUJBQUE7RUFDRixrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSwyQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUdFLGlEQUFBO0VBRUYsK0NBQUE7QUg4VkY7O0FHNVZFO0VBQ0MseUVBQUE7RUFDQSxrQkFBQTtBSDhWSDs7QUc1Vkc7RUFDSyxVQUFBO0FIOFZSOztBRzFWRTtFQUNDLFlBQUE7QUg0Vkg7O0FHMVZNO0VBRUUsVUFBQTtBSDJWUjs7QUd2Vkk7RUFDRSxpQ0FBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0FId1ZOOztBR3JWSTtFQUNFLFdBQUE7RUFFSCxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7QUhxVkg7O0FEWkk7Ozs7OztFQU1JLGdCQUFBO0VBQ0EsbUJBQUE7QUNlUjs7QURSSTs7RUFFSSwyQ0FBQTtBQ1dSIiwiZmlsZSI6InNyYy9hcHAvYWxlcnRzL2Zvcm0tYWxlcnQvZm9ybS1hbGVydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9jaGVja2JveC10YWdcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvcmFkaW8tdGFnXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL2NvbG9yLXJhZGlvXCI7XHJcblxyXG4vLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG5cclxuXHJcbjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cclxuICAgIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xyXG5cclxuICAgIC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93OiA1O1xyXG4gICAgLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcjogMiU7XHJcbiAgICAtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGg6IGNhbGMoKDEwMCUgLSAoMiAqIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKSAqIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8taXRlbXMtcGVyLXJvdykpKSAvIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8taXRlbXMtcGVyLXJvdykpO1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtbWQtaCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLy8gYm94LXNoYWRvdzogNnB4IDdweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIC4yKVxyXG59XHJcblxyXG4uaW9uYnV0dG9uIHtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbi5maWx0ZXJzLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZmlsdGVycy1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAucmFuZ2UtbGlzdCB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIC4yKSxcclxuICAgICAgICAvLyAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLFxyXG4gICAgICAgIC8vICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIC5yYW5nZS1pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGhlbWUtdGludCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XHJcblxyXG4gICAgICAgICAgICAucmFuZ2UtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAucmFuZ2UtdmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yYW5nZS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5yYW5nZS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgIC8vIG92ZXJyaWRlIHRoZSBwaW4gY29sb3JcclxuICAgICAgICAgICAgICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAc3VwcG9ydHMgKC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZSkge1xyXG4gICAgICAgICAgICAvKiBDU1Mgc3BlY2lmaWMgdG8gaU9TIGRldmljZXMgKi9cclxuXHJcbiAgICAgICAgICAgIC5jYXJkLXRtIHtcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNSU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAc3VwcG9ydHMgbm90ICgtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmUpIHtcclxuICAgICAgICAgICAgLyogQ1NTIGZvciBvdGhlciB0aGFuIGlPUyBkZXZpY2VzICovXHJcblxyXG4gICAgICAgICAgICAuY2FyZC10bSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAubmV4dGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYmFja2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgLm5leHRidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvLyAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmFja2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIC8vICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1pZGRsZWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIC8vICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIC8vIGxlZnQ6IDBweDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja2JveC1saXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xyXG5cclxuICAgICAgICAuY2hlY2tib3gtaXRlbSB7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDg5YTk3O1xyXG5cclxuICAgICAgICAgICAgLmNoZWNrYm94LWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tY2hlY2tib3gge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZS10bS1zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogOTklO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAubWVzc2FnZS10bSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10aGVtZS10aW50KTtcclxuICAgICAgICAgICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJhZGlvLWxpc3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZS10aW50KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLnJhZGlvLWdyb3VwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmFkaW8taXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10aGVtZS10aW50KTtcclxuICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xyXG5cclxuICAgICAgICAgICAgLnJhZGlvLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tcmFkaW8ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrYm94LXRhZ3Mge1xyXG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGNoZWNrYm94LXRhZygpO1xyXG5cclxuICAgICAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpO1xyXG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICAgICAgICYuc3F1YXJlLWNoZWNrYm94LXRhZ3Mge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICAgICAgICAgICAgLmNoZWNrYm94LXRhZyB7XHJcbiAgICAgICAgICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgYSBkZWVwZXIgc2VsZWN0b3IgdG8gb3ZlcnJpZGUgZGVmYXVsdCBjb2xvcnNcclxuICAgICAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcblxyXG4gICAgICAgICAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcclxuICAgICAgICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmFkaW8tdGFncyB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSByYWRpby10YWcoKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAgICAgLnJhZGlvLXRhZyB7XHJcbiAgICAgICAgICAgIC0tcmFkaW8tdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgLS1yYWRpby10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAgICAgLS1yYWRpby10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgICAgICAtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudG9nZ2xlLWxpc3Qge1xyXG4gICAgICAgIC50b2dnbGUtaXRlbSB7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuXHJcbiAgICAgICAgICAgIC50b2dnbGUtbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY291bnRlci1saXN0IHtcclxuICAgICAgICAuY291bnRlci1pdGVtIHtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cclxuICAgICAgICAgICAgLmNvdW50ZXItbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvdW50ZXItdmFsdWUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhcHAtY291bnRlci1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAtLWNvdW50ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAtLWNvdW50ZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJhdGluZ3MtbGlzdCB7XHJcbiAgICAgICAgLnJhdGluZy1pdGVtIHtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cclxuICAgICAgICAgICAgLnJhdGluZy1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhcHAtcmF0aW5nLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIC0tcmF0aW5nLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sb3ItcmFkaW8tZ3JvdXAge1xyXG4gICAgICAgIC8vIEFjY291bnQgZm9yIDIlIHN0YXJ0IGFuZCBlbmQgbWFyZ2luIHNldCBieSAuY29sb3ItdGFnIGNoaWxkc1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGEgZGVlcGVyIHNlbGVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgY29sb3JzXHJcbiAgICAgICAgLmNvbG9yLXJhZGlvIHtcclxuICAgICAgICAgICAgLS1jb2xvci1yYWRpby1jb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kOiAjQ0NDO1xyXG4gICAgICAgICAgICAtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpO1xyXG4gICAgICAgICAgICAtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXM6IDQwJTtcclxuXHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoKTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoKTtcclxuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcik7XHJcblxyXG4gICAgICAgICAgICAuY29sb3ItcmFkaW8taW5uZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGNvbG9yLXJhZGlvKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLm1kKSB7XHJcblxyXG4gICAgLnJhdGluZ3MtbGlzdCxcclxuICAgIC5jb3VudGVyLWxpc3QsXHJcbiAgICAudG9nZ2xlLWxpc3QsXHJcbiAgICAucmFkaW8tbGlzdCxcclxuICAgIC5jaGVja2JveC1saXN0LFxyXG4gICAgLnJhbmdlLWxpc3Qge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICAvLyAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QtY29udGV4dCguaW9zKSB7XHJcblxyXG4gICAgLnJhZGlvLXRhZ3MsXHJcbiAgICAuY2hlY2tib3gtdGFncyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcclxuICAgIH1cclxufSIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG4gIC0tcGFnZS1jb2xvci1yYWRpby1pdGVtcy1wZXItcm93OiA1O1xuICAtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyOiAyJTtcbiAgLS1wYWdlLWNvbG9yLXJhZGlvLXdpZHRoOiBjYWxjKCgxMDAlIC0gKDIgKiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWd1dHRlcikgKiB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3cpKSkgLyB2YXIoLS1wYWdlLWNvbG9yLXJhZGlvLWl0ZW1zLXBlci1yb3cpKTtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uaW9uYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uZmlsdGVycy1ncm91cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZpbHRlcnMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLXBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXI6IG5vbmU7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSB7XG4gIHdpZHRoOiA5MiU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRoZW1lLXRpbnQpO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5yYW5nZS1pdGVtIC5yYW5nZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSAucmFuZ2UtaGVhZGVyIC5yYW5nZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSAucmFuZ2UtaGVhZGVyIC5yYW5nZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAucmFuZ2UtaXRlbSAucmFuZ2UtY29udHJvbCB7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbkBzdXBwb3J0cyAoLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lKSB7XG4gIC5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3Qge1xuICAgIC8qIENTUyBzcGVjaWZpYyB0byBpT1MgZGV2aWNlcyAqL1xuICB9XG59XG5Ac3VwcG9ydHMgbm90ICgtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmUpIHtcbiAgLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCB7XG4gICAgLyogQ1NTIGZvciBvdGhlciB0aGFuIGlPUyBkZXZpY2VzICovXG4gIH1cbiAgLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAuY2FyZC10bSB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gIH1cbiAgLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAuY2FyZC10bSAubmV4dGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMHB4O1xuICB9XG4gIC5maWx0ZXJzLWNvbnRlbnQgLnJhbmdlLWxpc3QgLmNhcmQtdG0gLmJhY2tidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMHB4O1xuICB9XG59XG4uZmlsdGVycy1jb250ZW50IC5yYW5nZS1saXN0IC5jYXJkIC5uZXh0YnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAuY2FyZCAuYmFja2J1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAucmFuZ2UtbGlzdCAuY2FyZCAubWlkZGxlYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvdHRvbTogMDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtbGlzdCAuY2hlY2tib3gtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMDg5YTk3O1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtbGlzdCAuY2hlY2tib3gtaXRlbSAuY2hlY2tib3gtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LWxpc3QgLmNoZWNrYm94LWl0ZW0gaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLm1lc3NhZ2UtdG0tc2VjdGlvbiB7XG4gIHdpZHRoOiA5OSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLm1lc3NhZ2UtdG0tc2VjdGlvbiAubWVzc2FnZS10bSB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10aGVtZS10aW50KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lLXRpbnQpO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby1saXN0IC5yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tbGlzdCAucmFkaW8taXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10aGVtZS10aW50KTtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLWxpc3QgLnJhZGlvLWl0ZW0gLnJhZGlvLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby1saXN0IC5yYWRpby1pdGVtIGlvbi1yYWRpbyB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3Mge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWNvbG9yKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5yb3VuZGVkLXRhZyB7XG4gIC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgLS1pb24taXRlbS1jb2xvcjogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcik7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIC50YWctbGFiZWwge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyBpb24tY2hlY2tib3gge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncy5zcXVhcmUtY2hlY2tib3gtdGFncyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jaGVja2JveC10YWdzLnNxdWFyZS1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY2hlY2tib3gtdGFncy5yb3VuZGVkLWNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyB7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3Mge1xuICBwYWRkaW5nOiAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLS1yYWRpby10YWctY29sb3I6ICMwMDA7XG4gIC0tcmFkaW8tdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tcmFkaW8tdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1yYWRpby10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1taW4taGVpZ2h0OiAzOHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWNvbG9yKTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1yYWRpby10YWctYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLXJhZGlvLXRhZy1jb2xvcik7XG4gIGZsZXg6IDE7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcuaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1yYWRpby10YWctYWN0aXZlLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1yYWRpby10YWctYWN0aXZlLWNvbG9yKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgLnRhZy1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYWRpby10YWdzIC5yYWRpby10YWcgLnRhZy1sYWJlbCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZpbHRlcnMtY29udGVudCAucmFkaW8tdGFncyAucmFkaW8tdGFnIGlvbi1yYWRpbyB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhZGlvLXRhZ3MgLnJhZGlvLXRhZyB7XG4gIC0tcmFkaW8tdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1yYWRpby10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1yYWRpby10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC50b2dnbGUtbGlzdCAudG9nZ2xlLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC50b2dnbGUtbGlzdCAudG9nZ2xlLWl0ZW0gLnRvZ2dsZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC50b2dnbGUtbGlzdCAudG9nZ2xlLWl0ZW0gaW9uLXRvZ2dsZSB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xufVxuLmZpbHRlcnMtY29udGVudCAuY291bnRlci1saXN0IC5jb3VudGVyLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb3VudGVyLWxpc3QgLmNvdW50ZXItaXRlbSAuY291bnRlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb3VudGVyLWxpc3QgLmNvdW50ZXItaXRlbSAuY291bnRlci12YWx1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmZpbHRlcnMtY29udGVudCAuY291bnRlci1saXN0IC5jb3VudGVyLWl0ZW0gYXBwLWNvdW50ZXItaW5wdXQge1xuICAtLWNvdW50ZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY291bnRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY291bnRlci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmZpbHRlcnMtY29udGVudCAucmF0aW5ncy1saXN0IC5yYXRpbmctaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLnJhdGluZ3MtbGlzdCAucmF0aW5nLWl0ZW0gLnJhdGluZy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5yYXRpbmdzLWxpc3QgLnJhdGluZy1pdGVtIGFwcC1yYXRpbmctaW5wdXQge1xuICAtLXJhdGluZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY29sb3ItcmFkaW8tY29sb3I6ICNGRkY7XG4gIC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZDogI0NDQztcbiAgLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgLmNvbG9yLXJhZGlvIHtcbiAgLS1jb2xvci1yYWRpby1jb2xvcjogI0ZGRjtcbiAgLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kOiAjQ0NDO1xuICAtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpO1xuICAtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXM6IDQwJTtcbiAgZmxleDogMCAwIHZhcigtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGgpO1xuICBtYXgtd2lkdGg6IHZhcigtLXBhZ2UtY29sb3ItcmFkaW8td2lkdGgpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtY29sb3ItcmFkaW8tZ3V0dGVyKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIC5jb2xvci1yYWRpbyAuY29sb3ItcmFkaW8taW5uZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8ge1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDRweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZCk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZCk7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1taW4taGVpZ2h0OiBpbml0aWFsO1xuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvbG9yLXJhZGlvLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzKTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvLml0ZW0tcmFkaW8tY2hlY2tlZCB7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKHZhcigtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiKSwgLjMpICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvLml0ZW0tcmFkaW8tY2hlY2tlZCAuY29sb3ItbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmZpbHRlcnMtY29udGVudCAuY29sb3ItcmFkaW8tZ3JvdXAgaW9uLWl0ZW0uY29sb3ItcmFkaW8uaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgLmNvbG9yLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5maWx0ZXJzLWNvbnRlbnQgLmNvbG9yLXJhZGlvLWdyb3VwIGlvbi1pdGVtLmNvbG9yLXJhZGlvIC5jb2xvci1sYWJlbCB7XG4gIC0tY29sb3I6IHZhcigtLWNvbG9yLXJhZGlvLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG4uZmlsdGVycy1jb250ZW50IC5jb2xvci1yYWRpby1ncm91cCBpb24taXRlbS5jb2xvci1yYWRpbyBpb24tcmFkaW8ge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG59XG5cbjpob3N0LWNvbnRleHQoLm1kKSAucmF0aW5ncy1saXN0LFxuOmhvc3QtY29udGV4dCgubWQpIC5jb3VudGVyLWxpc3QsXG46aG9zdC1jb250ZXh0KC5tZCkgLnRvZ2dsZS1saXN0LFxuOmhvc3QtY29udGV4dCgubWQpIC5yYWRpby1saXN0LFxuOmhvc3QtY29udGV4dCgubWQpIC5jaGVja2JveC1saXN0LFxuOmhvc3QtY29udGV4dCgubWQpIC5yYW5nZS1saXN0IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuOmhvc3QtY29udGV4dCguaW9zKSAucmFkaW8tdGFncyxcbjpob3N0LWNvbnRleHQoLmlvcykgLmNoZWNrYm94LXRhZ3Mge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufSIsIkBtaXhpbiBjaGVja2JveC10YWcoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xuXG5cdC5jaGVja2JveC10YWcge1xuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuXHRcdC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG5cbiAgICAmLnJvdW5kZWQtdGFnIHtcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xuXHRcdH1cblxuXHRcdCYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xuXHRcdH1cblxuICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgIC50YWctbGFiZWwge1xuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG5cdFx0LnRhZy1sYWJlbCB7XG5cdFx0XHRtYXJnaW46IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0aW9uLWNoZWNrYm94IHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLmNoZWNrYm94LWljb25cblx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAuY2hlY2tib3gtaWNvbiAuY2hlY2tib3gtaW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3Jcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXHR9XG59XG4iLCJAbWl4aW4gcmFkaW8tdGFnKCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICAtLXJhZGlvLXRhZy1jb2xvcjogIzAwMDtcbiAgLS1yYWRpby10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1yYWRpby10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLXJhZGlvLXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcblxuXHQucmFkaW8tdGFnIHtcbiAgICAvLyBSZXNldCB2YWx1ZXMgZnJvbSBJb25pYyAoaW9uLWl0ZW0pIHN0eWxlc1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcblx0XHQtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDM4cHg7XG5cblx0XHQtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuXHRcdC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcblx0XHQtLWJvcmRlci1jb2xvcjogdmFyKC0tcmFkaW8tdGFnLWNvbG9yKTtcblx0XHQtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXJhZGlvLXRhZy1iYWNrZ3JvdW5kKTtcblx0XHQtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1yYWRpby10YWctY29sb3IpO1xuXG4gICAgZmxleDogMTtcblxuXHRcdCYuaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcmFkaW8tdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLXJhZGlvLXRhZy1hY3RpdmUtY29sb3IpO1xuXHRcdH1cblxuICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgIC50YWctbGFiZWwge1xuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhZy1sYWJlbCB7XG5cdFx0XHRtYXJnaW46IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0aW9uLXJhZGlvIHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLnJhZGlvLWljb25cblx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAucmFkaW8taWNvbiAucmFkaW8taW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3Jcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXHR9XG59XG4iLCJAbWl4aW4gY29sb3ItcmFkaW8oKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tY29sb3ItcmFkaW8tY29sb3I6ICNGRkY7XG4gIC0tY29sb3ItcmFkaW8tYmFja2dyb3VuZDogI0NDQztcbiAgLS1jb2xvci1yYWRpby1hY3RpdmUtYm9yZGVyLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1czogNTAlO1xuXG5cdGlvbi1pdGVtLmNvbG9yLXJhZGlvIHtcbiAgICAvLyBSZXNldCB2YWx1ZXMgZnJvbSBJb25pYyAoaW9uLWl0ZW0pIHN0eWxlc1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcblx0XHQtLXBhZGRpbmctZW5kOiAwcHg7XG5cdFx0LS1wYWRkaW5nLXRvcDogMHB4O1xuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xuXHRcdC0tYm9yZGVyLXdpZHRoOiA0cHg7XG5cdFx0LS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yYWRpby1iYWNrZ3JvdW5kKTtcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXJhZGlvLWJhY2tncm91bmQpO1xuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHQtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdC0tbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICAvLyBCb3RoIHRoZSBpb24taXRlbSBhbmQgaXQncyBzaGFkb3cgZG9tIGlubmVycyBoYXZlIGJvcmRlci1yYWRpdXMgcHJvcGVydGllcyBhcHBsaWVkXG4gICAgLy8gVGhpcyBpcyBmb3IgdGhlIC5pdGVtLWlubmVyIC5pbnB1dC13cmFwcGVyIGVsZW1lbnQgaW5zaWRlIHRoZSBpb24taXRlbSBzaGFkb3cgcm9vdFxuICAgIC0tYm9yZGVyLXJhZGl1czogdmFyKC0tY29sb3ItcmFkaW8tYm9yZGVyLXJhZGl1cyk7XG4gICAgLy8gVGhpcyBpcyBmb3IgdGhlIGlvbi1pdGVtIGVsZW1lbnRcblx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1jb2xvci1yYWRpby1ib3JkZXItcmFkaXVzKTtcblxuXHRcdCYuaXRlbS1yYWRpby1jaGVja2VkIHtcblx0XHRcdC0tYm9yZGVyLWNvbG9yOiByZ2JhKHZhcigtLWNvbG9yLXJhZGlvLWFjdGl2ZS1ib3JkZXItcmdiKSwgLjMpICFpbXBvcnRhbnQ7XG5cdFx0XHQtLWJveC1zaGFkb3c6IG5vbmU7XG5cblx0XHRcdC5jb2xvci1sYWJlbCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ji5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcblx0XHRcdG9wYWNpdHk6IDAuNTtcblxuICAgICAgLmNvbG9yLWxhYmVsIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXHRcdH1cblxuICAgIC5jb2xvci1sYWJlbCB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1jb2xvci1yYWRpby1jb2xvcik7XG5cbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG5cbiAgICBpb24tcmFkaW8ge1xuICAgICAgbWFyZ2luOiAwcHg7XG5cdFx0XHQvLyBUbyBoaWRlIHRoZSAucmFkaW8taWNvblxuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDBweDtcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5yYWRpby1pY29uIC5yYWRpby1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/alerts/form-alert/form-alert.page.ts":
/*!******************************************************!*\
  !*** ./src/app/alerts/form-alert/form-alert.page.ts ***!
  \******************************************************/
/*! exports provided: FormAlertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAlertPage", function() { return FormAlertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app/firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebaseui */ "./node_modules/firebaseui/dist/esm.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");

// import { Component, OnInit } from '@angular/core';








var FormAlertPage = /** @class */ (function () {
    function FormAlertPage(toastCtrl, navParams, navCtrl, firebaseService, authService, modalCtrl, storage, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.cate_1 = {
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
        this.progress = 0;
        this.hideTargetUserAge = false;
        this.hideClassLength = true;
        this.hideClassSize = true;
        this.hideTeachingMaterial = true;
        this.hidesqtimelimit = true;
        this.submitNow = false;
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
                firebaseui__WEBPACK_IMPORTED_MODULE_6__["auth"].AuthUI.getInstance() ||
                    new firebaseui__WEBPACK_IMPORTED_MODULE_6__["auth"].AuthUI(firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]());
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
        }
        else if (this.result.cate || this.result.keyword || this.result.subcate) {
            this.cate_1_checked = true;
        }
        else {
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
        }
        else if (this.result.keyword) {
            this.cate_1 = this.result.keyword;
        }
        else if (this.result.subcate) {
            this.cate_1 = this.result.subcate;
        }
        // uncomment this if data passed to this page is not just cate_1
        if (!this.result.class_length) {
            this.class_length_checked = false;
        }
        else {
            this.class_length_checked = true;
        }
        if (!this.result.class_size) {
            this.class_size_checked = false;
        }
        else {
            this.class_size_checked = true;
        }
        if (!this.result.target_user_age) {
            this.target_user_age_checked = false;
        }
        else {
            this.target_user_age_checked = true;
        }
        if (!this.result.teaching_materials) {
            this.teaching_materials_checked = false;
        }
        else {
            this.teaching_materials_checked = true;
        }
        // if (!this.result.sq_timelimit) {
        //   this.sq_time_limit_checked = false;
        // } else {
        //   this.sq_time_limit_checked = false;
        // }
        console.log(this.cate_1_checked, this.class_length_checked, this.class_size_checked, this.target_user_age_checked);
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
            this.FilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                cate_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.result.cate_1),
                class_size: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                    lower: this.result.class_size.lower,
                    upper: this.result.class_size.upper
                }),
                target_user_age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                    lower: this.result.target_user_age.lower,
                    upper: this.result.target_user_age.upper
                }),
                class_length: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                    lower: this.result.class_length.lower,
                    upper: this.result.class_length.upper
                }),
                teaching_materials: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.result.teaching_materials),
                message_teaching_materials: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.result.message_teaching_materials),
                sq_timelimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.result.sq_timelimit),
                message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.result.message)
            });
        }
        else {
            this.FilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                cate_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.cate_1),
                class_size: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ lower: 1, upper: 42 }),
                target_user_age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ lower: 1, upper: 16 }),
                class_length: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ lower: 1, upper: 42 }),
                teaching_materials: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
                message_teaching_materials: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
                sq_timelimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
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
    FormAlertPage.prototype.ionViewWillEnter = function () {
        var userDetail = this.authService.userDetails();
        console.log(userDetail);
        // this.firebaseService.searchUsers().subscribe(data => {
        //   console.log(data);
        // });
    };
    FormAlertPage.prototype.rangeChange = function (range) {
        console.log("range change", range);
    };
    FormAlertPage.prototype.rangeChangeSecond = function (range) { };
    FormAlertPage.prototype.changeTargetValue = function (value) {
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
    };
    FormAlertPage.prototype.onDismiss = function () {
        this.modalCtrl.dismiss();
    };
    // to B2
    FormAlertPage.prototype.onB2 = function () {
        // this.class_length_checked = true;
        this.target_user_age_checked = false;
        this.hideTargetUserAge = false;
        this.hideClassLength = true;
        this.hideClassSize = true;
        this.hideTeachingMaterial = true;
        this.hidesqtimelimit = true;
        this.submitNow = false;
        this.progress = 0;
    };
    // to B3
    FormAlertPage.prototype.onAddTargetUserAgeDetail = function (value, checked) {
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
    };
    // to B4
    FormAlertPage.prototype.onAddClassLengthDetail = function (value, checked) {
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
    };
    // to B5
    FormAlertPage.prototype.onAddClassSizeDetail = function (value, checked) {
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
    };
    // to B6
    FormAlertPage.prototype.onAddTeachingMaterialsDetail = function (value) {
        console.log(this.FilterForm.value, value);
        this.teaching_materials_checked = true;
        this.hideTargetUserAge = true;
        this.hideClassLength = true;
        this.hideClassSize = true;
        this.hideTeachingMaterial = true;
        this.hidesqtimelimit = false;
        this.progress = 0.8;
        this.submitNow = false;
    };
    // to B7
    FormAlertPage.prototype.onAddSQTimelimitDetail = function (value) {
        console.log(this.FilterForm.value, value);
        this.teaching_materials_checked = true;
        this.hideTargetUserAge = true;
        this.hideClassLength = true;
        this.hideClassSize = true;
        this.hideTeachingMaterial = true;
        this.hidesqtimelimit = true;
        this.progress = 1;
        this.submitNow = true;
    };
    // onAddTargetUserAgeDetail(value, checked) {
    //   console.log(value, checked);
    //   this.target_user_age_checked = true;
    // }
    FormAlertPage.prototype.submitFilterForm = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                _this.uid = user.uid;
                _this.displayName = user.displayName;
                _this.photoURL = user.photoURL;
                // const displayName = user.displayName;
                // const email = user.email;
                // const emailVerified = user.emailVerified;
                // const photoURL = user.photoURL;
                // const uid = user.uid;
                // const phoneNumber = user.phoneNumber;
                // const providerData = user.providerData;
                console.log("user logged in: ", _this.uid);
                // const cate_1 = this.FilterForm.value.cate_1;
                if (_this.result.cate_1) {
                    var value = _this.result;
                    _this.value = value;
                }
                else {
                    var value = _this.FilterForm.value;
                    _this.value = value;
                }
                console.log(_this.value, _this.data);
                var arr_1 = [];
                _this.teacher_clu = _this.value["class_length"].upper || 0;
                _this.teacher_cll = _this.value["class_length"].lower || 0;
                _this.teacher_tuau = _this.value["target_user_age"].upper || 0;
                _this.teacher_tual = _this.value["target_user_age"].lower || 0;
                _this.data.forEach(function (resp) {
                    console.log(resp);
                    // const csu = resp["class_size_upper"];
                    var clu = resp["class_length_upper"];
                    var tuau = resp["target_user_age_upper"];
                    var tual = resp["target_user_age_lower"];
                    console.log(clu, tuau, _this.teacher_cll, _this.teacher_tual);
                    if (_this.teacher_cll <= clu && _this.teacher_tual <= tuau) {
                        arr_1.push(resp);
                    }
                    else if (!_this.teacher_csl) {
                        console.log("no csl input");
                        arr_1.push(resp);
                    }
                });
                console.log(arr_1);
                // this.Supplier_list = arr;
                //          this.COURSE_LIST = this.data;
                _this.COURSE_LIST = arr_1;
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
            }
            else {
                console.log("user not logged in:", _this.uid, _this.data, _this.FilterForm.value);
                var arr_2 = [];
                _this.teacher_clu = _this.FilterForm.value["class_length"].upper || 0;
                _this.teacher_cll = _this.FilterForm.value["class_length"].lower || 0;
                _this.teacher_tuau =
                    _this.FilterForm.value["target_user_age"].upper || 0;
                _this.teacher_tual =
                    _this.FilterForm.value["target_user_age"].lower || 0;
                _this.data.forEach(function (resp) {
                    console.log(resp);
                    // const csu = resp["class_size_upper"];
                    var clu = resp["class_length_upper"];
                    var tuau = resp["target_user_age_upper"];
                    var tual = resp["target_user_age_lower"];
                    console.log(clu, tuau, _this.teacher_cll, _this.teacher_tual);
                    if (_this.teacher_cll <= clu && _this.teacher_tual <= tuau) {
                        arr_2.push(resp);
                    }
                    else if (!_this.teacher_csl) {
                        console.log("no csl input");
                        arr_2.push(resp);
                    }
                });
                console.log(arr_2);
                _this.COURSE_LIST = arr_2;
                _this.signup();
                _this.save();
            }
        }, function (error) {
            console.log(error);
        });
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
    };
    FormAlertPage.prototype.onReset = function () {
        this.FilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            cate_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            class_size: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ lower: 1, upper: 42 }),
            target_user_age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ lower: 1, upper: 16 }),
            class_length: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ lower: 1, upper: 42 }),
            teaching_materials: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            sq_timelimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    FormAlertPage.prototype.ngOnInit = function () { };
    FormAlertPage.prototype.signup = function () {
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
                firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].GoogleAuthProvider.PROVIDER_ID
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
    };
    FormAlertPage.prototype.checkUserStatus = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                // this.uid = user.uid;
                // this.displayName = user.displayName;
                // this.photoURL = user.photoURL;
                var displayName_1 = user.displayName;
                var email_1 = user.email;
                var emailVerified_1 = user.emailVerified;
                var photoURL_1 = user.photoURL;
                var uid_1 = user.uid;
                var phoneNumber_1 = user.phoneNumber;
                var providerData_1 = user.providerData;
                user.getIdToken().then(function (accessToken) {
                    console.log("accessToken: ", accessToken);
                    document.getElementById("sign-in-status").textContent = "Signed in";
                    document.getElementById("sign-in").textContent = "Sign out";
                    _this.signin = "Sign out";
                    _this.displayName = displayName_1;
                    _this.uid = uid_1;
                    //  this.email = email;
                    _this.photoURL = photoURL_1;
                    document.getElementById("account-details").textContent = JSON.stringify({
                        displayName: displayName_1,
                        email: email_1,
                        emailVerified: emailVerified_1,
                        phoneNumber: phoneNumber_1,
                        photoURL: photoURL_1,
                        uid: uid_1,
                        accessToken: accessToken,
                        providerData: providerData_1
                    }, null, "  ");
                });
                // this.navCtrl.navigateForward("/firebase/categories");
                //   this.navCtrl.navigateForward("/");
            }
            else {
                // User is signed out.
                document.getElementById("sign-in-status").textContent = "Signed out";
                document.getElementById("sign-in").textContent = "Sign in";
                _this.signin = "Sign in";
                document.getElementById("account-details").textContent = "null";
                //    this.navCtrl.navigateForward("/auth/signup");
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormAlertPage.prototype.save = function () {
        // pass sq enquiry, potential supplier list data  for first timer
        var value = this.FilterForm.value;
        var valueStr = JSON.stringify(value);
        console.log(value);
        var data = this.COURSE_LIST;
        //    const data = this.data;
        var dataStr = JSON.stringify(data);
        this.storage.set("data", dataStr);
        this.storage.set("value", valueStr);
        // Or to get a key/value pair
        this.storage.get("value").then(function (val) {
            var valuePar = JSON.parse(val);
            console.log("Value is", valuePar);
        });
        // Or to get a key/value pair
        this.storage.get("data").then(function (val) {
            var dataPar = JSON.parse(val);
            console.log("Data is", dataPar);
        });
    };
    FormAlertPage.prototype.presentToastWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
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
                                    handler: function () {
                                        console.log("Favorite clicked");
                                        _this.navCtrl.navigateForward("firebase/user-profile");
                                    }
                                },
                                {
                                    text: "留在目前頁面",
                                    role: "cancel",
                                    handler: function () {
                                        console.log("Cancel clicked");
                                        // this.navCtrl.navigateForward("firebase/user-profile");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormAlertPage.prototype.show = function (value) {
        this.showMessageTeachingMaterial = value;
    };
    FormAlertPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormAlertPage.prototype, "res", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormAlertPage.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormAlertPage.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormAlertPage.prototype, "data", void 0);
    FormAlertPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-alert",
            template: __webpack_require__(/*! raw-loader!./form-alert.page.html */ "./node_modules/raw-loader/index.js!./src/app/alerts/form-alert/form-alert.page.html"),
            styles: [__webpack_require__(/*! ./form-alert.page.scss */ "./src/app/alerts/form-alert/form-alert.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
            _app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], FormAlertPage);
    return FormAlertPage;
}());



/***/ }),

/***/ "./src/app/firebase/firebase-integration.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/firebase/firebase-integration.module.ts ***!
  \*********************************************************/
/*! exports provided: FirebaseIntegrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseIntegrationModule", function() { return FirebaseIntegrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/create/firebase-create-user.modal */ "./src/app/firebase/user/create/firebase-create-user.modal.ts");
/* harmony import */ var _user_update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/update/firebase-update-user.modal */ "./src/app/firebase/user/update/firebase-update-user.modal.ts");
/* harmony import */ var _user_select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/select-image/select-user-image.modal */ "./src/app/firebase/user/select-image/select-user-image.modal.ts");
/* harmony import */ var _alerts_form_alert_form_alert_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../alerts/form-alert/form-alert.module */ "./src/app/alerts/form-alert/form-alert.module.ts");
/* harmony import */ var _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../notifications/notifications.module */ "./src/app/notifications/notifications.module.ts");






// 1. Import the libs you need











// form - results;
// C:\Users\hf\Desktop\ionic4-full-starter-app-pro-version-1.2.1\src\app\real-estate\listing\real-estate-listing.module.ts
var firebaseRoutes = [
    //  { path: 'create', loadChildren: './firebase/creditnotes/create/create.module#CreatePageModule' },
    {
        path: "creditnotes#create",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | firebase-creditnotes-create-create-module */ "firebase-creditnotes-create-create-module").then(__webpack_require__.bind(null, /*! ./../firebase/creditnotes/create/create.module */ "./src/app/firebase/creditnotes/create/create.module.ts")).then(function (m) { return m.CreatePageModule; });
        }
    },
    // { path: 'details', loadChildren: './firebase/creditnotes/details/details.module#DetailsPageModule' },
    {
        path: "creditnotes#details",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-creditnotes-details-details-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("default~firebase-creditnotes-details-details-module~firebase-inventory-details-details-module~fireba~4977f5c6"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-contacts-details-details-module~firebase~eb811a10"), __webpack_require__.e("firebase-creditnotes-details-details-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/creditnotes/details/details.module */ "./src/app/firebase/creditnotes/details/details.module.ts")).then(function (m) { return m.DetailsPageModule; });
        }
    },
    // { path: 'creditnotes', loadChildren: './firebase/creditnotes/creditnotes/creditnotes.module#CreditnotesPageModule' },
    {
        path: "creditnotes",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-creditnotes-creditnotes-creditnotes-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("firebase-creditnotes-creditnotes-creditnotes-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/creditnotes/creditnotes/creditnotes.module */ "./src/app/firebase/creditnotes/creditnotes/creditnotes.module.ts")).then(function (m) { return m.CreditnotesPageModule; });
        }
    },
    // { path: 'update', loadChildren: './firebase/creditnotes/update/update.module#UpdatePageModule' },
    {
        path: "creditnotes#update",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | firebase-creditnotes-update-update-module */ "firebase-creditnotes-update-update-module").then(__webpack_require__.bind(null, /*! ./../firebase/creditnotes/update/update.module */ "./src/app/firebase/creditnotes/update/update.module.ts")).then(function (m) { return m.UpdatePageModule; });
        }
    },
    // { path: 'create', loadChildren: './firebase/paymentsrec/create/create.module#CreatePageModule' },
    {
        path: "paymentsrec#create",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | firebase-paymentsrec-create-create-module */ "firebase-paymentsrec-create-create-module").then(__webpack_require__.bind(null, /*! ./../firebase/paymentsrec/create/create.module */ "./src/app/firebase/paymentsrec/create/create.module.ts")).then(function (m) { return m.CreatePageModule; });
        }
    },
    // { path: 'details', loadChildren: './firebase/paymentsrec/details/details.module#DetailsPageModule' },
    {
        path: "paymentsrec#details",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-paymentsrec-details-details-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("default~firebase-creditnotes-details-details-module~firebase-inventory-details-details-module~fireba~4977f5c6"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-contacts-details-details-module~firebase~eb811a10"), __webpack_require__.e("firebase-paymentsrec-details-details-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/paymentsrec/details/details.module */ "./src/app/firebase/paymentsrec/details/details.module.ts")).then(function (m) { return m.DetailsPageModule; });
        }
    },
    // { path: 'paymentsrec', loadChildren: './firebase/paymentsrec/paymentsrec/paymentsrec.module#PaymentsrecPageModule' },
    {
        path: "paymentsrec",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-paymentsrec-paymentsrec-paymentsrec-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-inventory-items-items-module~firebase-in~98ea33f5"), __webpack_require__.e("firebase-paymentsrec-paymentsrec-paymentsrec-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/paymentsrec/paymentsrec/paymentsrec.module */ "./src/app/firebase/paymentsrec/paymentsrec/paymentsrec.module.ts")).then(function (m) { return m.PaymentsrecPageModule; });
        }
    },
    // { path: 'update', loadChildren: './firebase/paymentsrec/update/update.module#UpdatePageModule' },
    {
        path: "paymentsrec#update",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | firebase-paymentsrec-update-update-module */ "firebase-paymentsrec-update-update-module").then(__webpack_require__.bind(null, /*! ./../firebase/paymentsrec/update/update.module */ "./src/app/firebase/paymentsrec/update/update.module.ts")).then(function (m) { return m.UpdatePageModule; });
        }
    },
    // { path: 'details', loadChildren: './firebase/contacts/details/details.module#DetailsPageModule' },
    {
        path: "contacts#details",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-contacts-details-details-module */[__webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-contacts-details-details-module~firebase~eb811a10"), __webpack_require__.e("default~firebase-contacts-details-details-module~user-profile-user-profile-module"), __webpack_require__.e("firebase-contacts-details-details-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/contacts/details/details.module */ "./src/app/firebase/contacts/details/details.module.ts")).then(function (m) { return m.DetailsPageModule; });
        }
    },
    // { path: 'details', loadChildren: './firebase/inventory/details/details.module#DetailsPageModule' },
    {
        path: "inventory#details",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-inventory-details-details-module */[__webpack_require__.e("default~firebase-creditnotes-details-details-module~firebase-inventory-details-details-module~fireba~4977f5c6"), __webpack_require__.e("default~firebase-inventory-details-details-module~firebase-inventory-items-items-module"), __webpack_require__.e("firebase-inventory-details-details-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/inventory/details/details.module */ "./src/app/firebase/inventory/details/details.module.ts")).then(function (m) { return m.DetailsPageModule; });
        }
    },
    //  { path: 'quotes#details', loadChildren: './firebase/quotes/details/details.module#DetailsPageModule' },
    {
        path: "quotes#details",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-quotes-details-details-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("default~firebase-creditnotes-details-details-module~firebase-inventory-details-details-module~fireba~4977f5c6"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-contacts-details-details-module~firebase~eb811a10"), __webpack_require__.e("firebase-quotes-details-details-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/quotes/details/details.module */ "./src/app/firebase/quotes/details/details.module.ts")).then(function (m) { return m.DetailsPageModule; });
        }
    },
    //  { path: 'invoices#details', loadChildren: './firebase/invoices/details/details.module#DetailsPageModule' },
    {
        path: "invoices#details",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-invoices-details-details-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("default~firebase-creditnotes-details-details-module~firebase-inventory-details-details-module~fireba~4977f5c6"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-contacts-details-details-module~firebase~eb811a10"), __webpack_require__.e("firebase-invoices-details-details-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/invoices/details/details.module */ "./src/app/firebase/invoices/details/details.module.ts")).then(function (m) { return m.DetailsPageModule; });
        }
    },
    // copy user-profile
    {
        path: "contacts",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-contacts-contacts-contacts-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-contacts-details-details-module~firebase~eb811a10"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-invoices-create-create-module~firebase-i~71db5b2d"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-inventory-items-items-module~firebase-in~98ea33f5"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-invoices-invoices-invoices-module~user-p~00f521db"), __webpack_require__.e("firebase-contacts-contacts-contacts-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/contacts/contacts/contacts.module */ "./src/app/firebase/contacts/contacts/contacts.module.ts")).then(function (m) { return m.ContactsPageModule; });
        }
    },
    //  { path: 'contacts', loadChildren: './../firebase/contacts/contacts/contacts.module#ContactsPageModule' },
    {
        path: "quotes",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-quotes-quotes-quotes-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("firebase-quotes-quotes-quotes-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/quotes/quotes/quotes.module */ "./src/app/firebase/quotes/quotes/quotes.module.ts")).then(function (m) { return m.QuotesPageModule; });
        }
    },
    // { path: 'quotes', loadChildren: './../firebase/quotes/quotes/quotes.module#QuotesPageModule' },
    {
        path: "invoices",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-invoices-invoices-invoices-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-inventory-items-items-module~firebase-in~98ea33f5"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-invoices-invoices-invoices-module~user-p~00f521db"), __webpack_require__.e("firebase-invoices-invoices-invoices-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/invoices/invoices/invoices.module */ "./src/app/firebase/invoices/invoices/invoices.module.ts")).then(function (m) { return m.InvoicesPageModule; });
        }
    },
    // { path: 'invoices', loadChildren: './../firebase/invoices/invoices/invoices.module#InvoicesPageModule' },
    {
        path: "inventory/items",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-inventory-items-items-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-inventory-items-items-module~firebase-in~98ea33f5"), __webpack_require__.e("default~firebase-inventory-details-details-module~firebase-inventory-items-items-module"), __webpack_require__.e("firebase-inventory-items-items-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/inventory/items/items.module */ "./src/app/firebase/inventory/items/items.module.ts")).then(function (m) { return m.ItemsPageModule; });
        }
    },
    //  { path: 'inventory/items', loadChildren: './../firebase/inventory/items/items.module#ItemsPageModule' },
    {
        path: "update#contacts",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | firebase-contacts-update-update-module */ "firebase-contacts-update-update-module").then(__webpack_require__.bind(null, /*! ./../firebase/contacts/update/update.module */ "./src/app/firebase/contacts/update/update.module.ts")).then(function (m) { return m.UpdatePageModule; });
        }
    },
    // { path: 'update#contacts', loadChildren: './../firebase/contacts/update/update.module#UpdatePageModule' },
    {
        path: "create#contacts",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-contacts-create-create-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("firebase-contacts-create-create-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/contacts/create/create.module */ "./src/app/firebase/contacts/create/create.module.ts")).then(function (m) { return m.CreatePageModule; });
        }
    },
    { path: 'create#contacts', loadChildren: './../firebase/contacts/create/create.module#CreatePageModule' },
    {
        path: "create#inventory",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-inventory-create-create-module */[__webpack_require__.e("common"), __webpack_require__.e("firebase-inventory-create-create-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/inventory/create/create.module */ "./src/app/firebase/inventory/create/create.module.ts")).then(function (m) { return m.CreatePageModule; });
        }
    },
    // { path: 'create#inventory', loadChildren: './../firebase/inventory/create/create.module#CreatePageModule' },
    {
        path: "update#inventory",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-inventory-update-update-module */[__webpack_require__.e("common"), __webpack_require__.e("firebase-inventory-update-update-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/inventory/update/update.module */ "./src/app/firebase/inventory/update/update.module.ts")).then(function (m) { return m.UpdatePageModule; });
        }
    },
    // { path: 'update#inventory', loadChildren: './../firebase/inventory/update/update.module#UpdatePageModule' },
    {
        path: "create#invoices",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-invoices-create-create-module */[__webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-invoices-create-create-module~firebase-i~71db5b2d"), __webpack_require__.e("common"), __webpack_require__.e("firebase-invoices-create-create-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/invoices/create/create.module */ "./src/app/firebase/invoices/create/create.module.ts")).then(function (m) { return m.CreatePageModule; });
        }
    },
    // { path: 'create#invoices', loadChildren: './../firebase/invoices/create/create.module#CreatePageModule' },
    {
        path: "update#invoices",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-invoices-update-update-module */[__webpack_require__.e("default~firebase-creditnotes-details-details-module~firebase-inventory-details-details-module~fireba~4977f5c6"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-invoices-create-create-module~firebase-i~71db5b2d"), __webpack_require__.e("common"), __webpack_require__.e("firebase-invoices-update-update-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/invoices/update/update.module */ "./src/app/firebase/invoices/update/update.module.ts")).then(function (m) { return m.UpdatePageModule; });
        }
    },
    // { path: 'update#invoices', loadChildren: './../firebase/invoices/update/update.module#UpdatePageModule' },
    {
        path: "create#quotes",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-quotes-create-create-module */[__webpack_require__.e("default~firebase-creditnotes-details-details-module~firebase-inventory-details-details-module~fireba~4977f5c6"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-invoices-create-create-module~firebase-i~71db5b2d"), __webpack_require__.e("common"), __webpack_require__.e("firebase-quotes-create-create-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/quotes/create/create.module */ "./src/app/firebase/quotes/create/create.module.ts")).then(function (m) { return m.CreatePageModule; });
        }
    },
    // { path: 'create#quotes', loadChildren: './../firebase/quotes/create/create.module#CreatePageModule' },
    {
        path: "update#quotes",
        loadChildren: function () {
            return Promise.all(/*! import() | firebase-quotes-update-update-module */[__webpack_require__.e("default~firebase-creditnotes-details-details-module~firebase-inventory-details-details-module~fireba~4977f5c6"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-invoices-create-create-module~firebase-i~71db5b2d"), __webpack_require__.e("common"), __webpack_require__.e("firebase-quotes-update-update-module")]).then(__webpack_require__.bind(null, /*! ./../firebase/quotes/update/update.module */ "./src/app/firebase/quotes/update/update.module.ts")).then(function (m) { return m.UpdatePageModule; });
        }
    },
    // { path: 'update#quotes', loadChildren: './../firebase/quotes/update/update.module#UpdatePageModule' },
    {
        path: "user-profile",
        loadChildren: function () {
            return Promise.all(/*! import() | user-profile-user-profile-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("default~firebase-contacts-contacts-contacts-module~firebase-invoices-invoices-invoices-module~user-p~00f521db"), __webpack_require__.e("default~firebase-contacts-details-details-module~user-profile-user-profile-module"), __webpack_require__.e("user-profile-user-profile-module")]).then(__webpack_require__.bind(null, /*! ./../user/profile/user-profile.module */ "./src/app/user/profile/user-profile.module.ts")).then(function (m) { return m.UserProfilePageModule; });
        }
    }, {
        path: "categories",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | categories-categories-module */ "categories-categories-module").then(__webpack_require__.bind(null, /*! ./../categories/categories.module */ "./src/app/categories/categories.module.ts")).then(function (m) { return m.CategoriesPageModule; });
        }
    },
    {
        path: "real-estate",
        loadChildren: function () {
            return Promise.all(/*! import() | real-estate-listing-real-estate-listing-module */[__webpack_require__.e("common"), __webpack_require__.e("real-estate-listing-real-estate-listing-module")]).then(__webpack_require__.bind(null, /*! ./../real-estate/listing/real-estate-listing.module */ "./src/app/real-estate/listing/real-estate-listing.module.ts")).then(function (m) { return m.RealEstateListingPageModule; });
        }
    },
    {
        path: "real-estate/details",
        loadChildren: function () {
            return Promise.all(/*! import() | real-estate-details-real-estate-details-module */[__webpack_require__.e("common"), __webpack_require__.e("real-estate-details-real-estate-details-module")]).then(__webpack_require__.bind(null, /*! ./../real-estate/details/real-estate-details.module */ "./src/app/real-estate/details/real-estate-details.module.ts")).then(function (m) { return m.RealEstateDetailsPageModule; });
        }
    },
    {
        path: "listing",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | listing-firebase-listing-module */ "listing-firebase-listing-module").then(__webpack_require__.bind(null, /*! ./listing/firebase-listing.module */ "./src/app/firebase/listing/firebase-listing.module.ts")).then(function (m) { return m.FirebaseListingPageModule; });
        }
    },
    {
        path: "details/:id",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | user-details-firebase-user-details-module */ "user-details-firebase-user-details-module").then(__webpack_require__.bind(null, /*! ./user/details/firebase-user-details.module */ "./src/app/firebase/user/details/firebase-user-details.module.ts")).then(function (m) { return m.FirebaseUserDetailsPageModule; });
        }
    },
    {
        path: "form",
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./../alerts/form/form.module */ "./src/app/alerts/form/form.module.ts")).then(function (m) { return m.FormPageModule; });
        }
    },
    {
        path: "form-results",
        loadChildren: function () {
            return Promise.all(/*! import() | alerts-form-results-form-results-module */[__webpack_require__.e("default~alerts-form-results-form-results-module~firebase-contacts-contacts-contacts-module~firebase-~2eefff02"), __webpack_require__.e("alerts-form-results-form-results-module")]).then(__webpack_require__.bind(null, /*! ./../alerts/form-results/form-results.module */ "./src/app/alerts/form-results/form-results.module.ts")).then(function (m) { return m.FormResultsPageModule; });
        }
    },
    {
        path: "getting-started",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | getting-started-getting-started-module */ "getting-started-getting-started-module").then(__webpack_require__.bind(null, /*! ./../getting-started/getting-started.module */ "./src/app/getting-started/getting-started.module.ts")).then(function (m) { return m.GettingStartedPageModule; });
        }
    },
    {
        path: "user-friends",
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./../user/friends/user-friends.module */ "./src/app/user/friends/user-friends.module.ts")).then(function (m) { return m.UserFriendsPageModule; });
        }
    },
    {
        path: "notifications",
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./../notifications/notifications.module */ "./src/app/notifications/notifications.module.ts")).then(function (m) { return m.NotificationsPageModule; });
        }
    }
];
var FirebaseIntegrationModule = /** @class */ (function () {
    function FirebaseIntegrationModule() {
    }
    FirebaseIntegrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _alerts_form_alert_form_alert_module__WEBPACK_IMPORTED_MODULE_15__["FormAlertPageModule"],
                _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_16__["NotificationsPageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(firebaseRoutes),
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"]
            ],
            entryComponents: [
                _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_12__["FirebaseCreateUserModal"],
                _user_update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_13__["FirebaseUpdateUserModal"],
                _user_select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_14__["SelectUserImageModal"]
            ],
            declarations: [
                _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_12__["FirebaseCreateUserModal"],
                _user_update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_13__["FirebaseUpdateUserModal"],
                _user_select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_14__["SelectUserImageModal"]
            ]
        })
    ], FirebaseIntegrationModule);
    return FirebaseIntegrationModule;
}());



/***/ }),

/***/ "./src/app/firebase/user/create/firebase-create-user.modal.ts":
/*!********************************************************************!*\
  !*** ./src/app/firebase/user/create/firebase-create-user.modal.ts ***!
  \********************************************************************/
/*! exports provided: FirebaseCreateUserModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseCreateUserModal", function() { return FirebaseCreateUserModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _firebase_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase-user.model */ "./src/app/firebase/user/firebase-user.model.ts");






var FirebaseCreateUserModal = /** @class */ (function () {
    function FirebaseCreateUserModal(modalController, firebaseService) {
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.supplierData = new _firebase_user_model__WEBPACK_IMPORTED_MODULE_5__["FirebaseSupplierModel"]();
        this.userData = new _firebase_user_model__WEBPACK_IMPORTED_MODULE_5__["FirebaseUserModel"]();
        this.skills = [];
        this.cate_1 = {
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
    }
    FirebaseCreateUserModal.prototype.ngOnInit = function () {
        // default image
        // this.downloadURL =
        //   "https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png";
        // this.FilterForm = new FormGroup({
        //   cate_1: new FormControl(""),
        //   cate_2: new FormControl(""),
        //   cate_3: new FormControl(""),
        //   cate_4: new FormControl(""),
        //   first: new FormControl({ lower: 1, upper: 40 }),
        //   second: new FormControl({ lower: 1, upper: 18 }),
        //   dual: new FormControl({ lower: 1, upper: 40 }),
        //   teaching_materials: new FormControl("rental")
        // });
        this.createSupplierForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            cate_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cate_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cate_3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cate_4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            average_speed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            reply_rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            editor_choice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            class_size: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ lower: 1, upper: 42 }),
            target_user_age: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ lower: 1, upper: 16 }),
            class_length: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ lower: 1, upper: 42 }),
            // teaching_materials: new FormControl("rental"),
            company_intro: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            tutor_qual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            competition_exp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        // this.createUserForm = new FormGroup({
        //   name: new FormControl('', Validators.required),
        //   lastname: new FormControl('', Validators.required),
        //   email: new FormControl('', Validators.compose([
        //     Validators.required,
        //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        //   ])),
        //   phone: new FormControl('', Validators.required),
        //   birthdate: new FormControl(Validators.required),
        //   skills: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1)),
        //   spanish: new FormControl(),
        //   english: new FormControl(),
        //   french: new FormControl()
        // });
        // this.firebaseService.getSkills().subscribe(skills => {
        //   this.skills = skills;
        //   // create skill checkboxes
        //   this.skills.map(() => {
        //     (this.createUserForm.controls.skills as FormArray).push(new FormControl());
        //   });
        // });
    };
    // get skillsFormArray() { return <FormArray>this.createUserForm.get('skills'); }
    FirebaseCreateUserModal.prototype.changeLangValue = function (value) {
        switch (true) {
            case value <= 3:
                return "Novice";
            case value > 3 && value <= 6:
                return "Competent";
            case value > 6:
                return "Expert";
        }
    };
    FirebaseCreateUserModal.prototype.submitFilterForm = function () {
        console.log(this.FilterForm.value);
        // this.firebaseService.getAllSupplier().subscribe(res => {
        //   console.log(res);
        // });
    };
    FirebaseCreateUserModal.prototype.rangeChange = function (range) {
        console.log("range change", range);
    };
    FirebaseCreateUserModal.prototype.rangeChangeSecond = function (range) { };
    FirebaseCreateUserModal.prototype.changeTargetValue = function (value) {
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
    };
    FirebaseCreateUserModal.prototype.onReset = function () {
        this.createSupplierForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            cate_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cate_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cate_3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cate_4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            average_speed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            reply_rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            editor_choice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            class_size: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ lower: 10, upper: 42 }),
            target_user_age: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ lower: 10, upper: 16 }),
            class_length: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ lower: 10, upper: 42 }),
            // teaching_materials: new FormControl("rental"),
            company_intro: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            tutor_qual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            competition_exp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    };
    FirebaseCreateUserModal.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    FirebaseCreateUserModal.prototype.createSupplier = function () {
        // this.supplierData.cate_1 = this.createSupplierForm.value.cate_1;
        // this.supplierData.cate_2 = this.createSupplierForm.value.cate_2;
        // this.supplierData.cate_3 = this.createSupplierForm.value.cate_3;
        // this.supplierData.cate_4 = this.createSupplierForm.value.cate_4;
        this.supplierData.name = this.createSupplierForm.value.name;
        this.supplierData.email = this.createSupplierForm.value.email;
        this.supplierData.phone = this.createSupplierForm.value.phone;
        this.supplierData.editor_choice = this.createSupplierForm.value.editor_choice;
        this.supplierData.average_speed = this.createSupplierForm.value.average_speed;
        this.supplierData.reply_rate = this.createSupplierForm.value.reply_rate;
        this.supplierData.company_intro = this.createSupplierForm.value.company_intro;
        this.supplierData.tutor_qual = this.createSupplierForm.value.tutor_qual;
        this.supplierData.competition_exp = this.createSupplierForm.value.competition_exp;
        console.log(this.createSupplierForm.value);
        console.log(this.supplierData);
    };
    FirebaseCreateUserModal.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    FirebaseCreateUserModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-firebase-create-user",
            template: __webpack_require__(/*! raw-loader!./firebase-create-user.modal.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/user/create/firebase-create-user.modal.html"),
            styles: [__webpack_require__(/*! ./styles/firebase-create-user.modal.scss */ "./src/app/firebase/user/create/styles/firebase-create-user.modal.scss"), __webpack_require__(/*! ./styles/firebase-create-user.shell.scss */ "./src/app/firebase/user/create/styles/firebase-create-user.shell.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
    ], FirebaseCreateUserModal);
    return FirebaseCreateUserModal;
}());



/***/ }),

/***/ "./src/app/firebase/user/create/styles/firebase-create-user.modal.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/firebase/user/create/styles/firebase-create-user.modal.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.create-user-content {\n  --background: var(--page-background);\n}\n\n.create-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.create-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.create-user-content .select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.create-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.create-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.create-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.create-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.create-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.create-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\n.create-user-content .user-languages-fields {\n  padding-bottom: 0px;\n}\n\n.create-user-content .user-languages-fields .range-item-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium-shade);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS91c2VyL2NyZWF0ZS9zdHlsZXMvZmlyZWJhc2UtY3JlYXRlLXVzZXIubW9kYWwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci9jcmVhdGUvc3R5bGVzL2ZpcmViYXNlLWNyZWF0ZS11c2VyLm1vZGFsLnNjc3MiLCIvVXNlcnMvaW1ha2VyL0Rlc2t0b3AvSU1BS0VSL0FBQV9pbWFrZXJfc3Vic2NyaXB0aW9uL2lvblZvaWNlL3NyYy90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLG9EQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0FDRkY7O0FESUU7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOENBQUE7QUNISjs7QURLSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNITjs7QURLTTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7QUNIUjs7QURPSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ05OOztBRFFNO0VBQ0UsZUFBQTtBQ05SOztBRFdFO0VBQ0UsK0JBQUE7RUFDQSw4RUFBQTtBQ1RKOztBRFdJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNUTjs7QURjSTtFQUNFLCtCQUFBO0FDWk47O0FEZUk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ2JOOztBRGtCSTtFQUNFLCtEQUFBO0VFeEVKLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEeURGOztBQ3ZEQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QUR3REo7O0FDdERJO0VBQ0QsdUJBQUE7QUR3REg7O0FDckRFO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtBRHVETjs7QUNwREk7RUFDRSxZQUFBO0FEc0ROOztBQ3BETTtFQUVFLFVBQUE7QURxRFI7O0FDakRFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURtRE47O0FDaERFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRGdESDs7QURsQk07RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FDb0JSOztBRGhCTTtFQUNFLDJDQUFBO0FDa0JSOztBRGhCUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1EQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLDBEQUFBO0FDa0JWOztBRGhCVTtFQUNFLHdDQUFBO0FDa0JaOztBRFhFO0VBQ0UsbUJBQUE7QUNhSjs7QURYSTtFQUNFLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx5Q0FBQTtVQUFBLHdDQUFBO0VBQ0EsdUNBQUE7VUFBQSxzQ0FBQTtFQUVBLHlEQUFBO0FDV047O0FEVE07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtBQ1dSOztBRFRRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1dWOztBRFJRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1VWOztBRE5NO0VBRUUsK0NBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FDTVI7O0FEQUE7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FDRUY7O0FEQUU7RUFDRSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS91c2VyL2NyZWF0ZS9zdHlsZXMvZmlyZWJhc2UtY3JlYXRlLXVzZXIubW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZ1wiO1xuXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgLS1wYWdlLWJhY2tncm91bmQtc2hhZGU6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG59XG5cbi5jcmVhdGUtdXNlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gICAgLnVzZXItaW1hZ2UtY29sIHtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICB3aWR0aDogNGNoO1xuICAgICAgaGVpZ2h0OiA0Y2g7XG4gICAgICBtYXJnaW46IDBweDtcblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWVsZHMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHNvbGlkIHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuICAudXNlci1kZXRhaWxzLWZpZWxkcyB7XG4gICAgLmlucHV0cy1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuXG4gICAgLmlucHV0LWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cblxuICAudXNlci1leHBlcmllbmNlLWZpZWxkcyB7XG4gICAgLmNoZWNrYm94LXRhZ3Mge1xuICAgICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuXG4gICAgICBAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcblxuICAgICAgLmNoZWNrYm94LXRhZyB7XG4gICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xuICAgICAgJi5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXG4gICAgICAgIC5jaGVja2JveC10YWcge1xuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgICAgICYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgIC5yYW5nZS1pdGVtLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAvLyBib3gtc2hhZG93IGF0IHRoZSB0b3BcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4ICB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG5cbiAgICAgIC5yYW5nZS1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAgIC5yYW5nZS12YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yYW5nZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucmFuZ2UtY29udHJvbCB7XG4gICAgICAgIC8vIG92ZXJyaWRlIHRoZSBwaW4gY29sb3JcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG5cbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIC5zdWJtaXQtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbn1cblxuLmNyZWF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC51c2VyLWltYWdlLWNvbCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAuY2hhbmdlLWltYWdlLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIC5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dHMtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1kZXRhaWxzLWZpZWxkcyAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5yb3VuZGVkLXRhZyB7XG4gIC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1jb250cm9sIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIgLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IDBweDtcbn0iLCJAbWl4aW4gY2hlY2tib3gtdGFnKCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcblxuXHQuY2hlY2tib3gtdGFnIHtcbiAgICAvLyBSZXNldCB2YWx1ZXMgZnJvbSBJb25pYyAoaW9uLWl0ZW0pIHN0eWxlc1xuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcblx0XHQtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcblx0XHQtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xuXG4gICAgJi5yb3VuZGVkLXRhZyB7XG5cdFx0XHQtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcblx0XHR9XG5cblx0XHQmLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcblx0XHR9XG5cbiAgICAmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC41O1xuXG4gICAgICAudGFnLWxhYmVsIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuXHRcdC50YWctbGFiZWwge1xuXHRcdFx0bWFyZ2luOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdH1cblxuXHRcdGlvbi1jaGVja2JveCB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5jaGVja2JveC1pY29uXG5cdFx0XHR3aWR0aDogMHB4O1xuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcblx0XHRcdGhlaWdodDogMHB4O1xuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLmNoZWNrYm94LWljb24gLmNoZWNrYm94LWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuXHRcdH1cblx0fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/firebase/user/create/styles/firebase-create-user.shell.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/firebase/user/create/styles/firebase-create-user.shell.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS91c2VyL2NyZWF0ZS9zdHlsZXMvZmlyZWJhc2UtY3JlYXRlLXVzZXIuc2hlbGwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci9jcmVhdGUvc3R5bGVzL2ZpcmViYXNlLWNyZWF0ZS11c2VyLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvdXNlci9jcmVhdGUvc3R5bGVzL2ZpcmViYXNlLWNyZWF0ZS11c2VyLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/firebase/user/firebase-user.model.ts":
/*!******************************************************!*\
  !*** ./src/app/firebase/user/firebase-user.model.ts ***!
  \******************************************************/
/*! exports provided: FirebaseSkillModel, FirebaseEnquiryModel, FirebaseSupplierModel, FirebaseRoleModel, FirebaseUserModel, FirebaseCombinedUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseSkillModel", function() { return FirebaseSkillModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseEnquiryModel", function() { return FirebaseEnquiryModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseSupplierModel", function() { return FirebaseSupplierModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseRoleModel", function() { return FirebaseRoleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserModel", function() { return FirebaseUserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseCombinedUserModel", function() { return FirebaseCombinedUserModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


var FirebaseSkillModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FirebaseSkillModel, _super);
    function FirebaseSkillModel() {
        return _super.call(this) || this;
    }
    return FirebaseSkillModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var FirebaseEnquiryModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FirebaseEnquiryModel, _super);
    function FirebaseEnquiryModel() {
        return _super.call(this) || this;
    }
    return FirebaseEnquiryModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var FirebaseSupplierModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FirebaseSupplierModel, _super);
    function FirebaseSupplierModel() {
        return _super.call(this) || this;
    }
    return FirebaseSupplierModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

// assign 'teacher' or 'supplier'
var FirebaseRoleModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FirebaseRoleModel, _super);
    function FirebaseRoleModel() {
        return _super.call(this) || this;
    }
    return FirebaseRoleModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var FirebaseUserModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FirebaseUserModel, _super);
    function FirebaseUserModel() {
        var _this = _super.call(this) || this;
        _this.skills = ["", "", ""];
        _this.languages = {
            spanish: 0,
            english: 0,
            french: 0
        };
        return _this;
    }
    return FirebaseUserModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var FirebaseCombinedUserModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FirebaseCombinedUserModel, _super);
    function FirebaseCombinedUserModel() {
        var _this = _super.call(this) || this;
        _this.skills = [
            new FirebaseSkillModel(),
            new FirebaseSkillModel(),
            new FirebaseSkillModel()
        ];
        return _this;
    }
    return FirebaseCombinedUserModel;
}(FirebaseUserModel));



/***/ }),

/***/ "./src/app/firebase/user/select-image/select-user-image.modal.ts":
/*!***********************************************************************!*\
  !*** ./src/app/firebase/user/select-image/select-user-image.modal.ts ***!
  \***********************************************************************/
/*! exports provided: SelectUserImageModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectUserImageModal", function() { return SelectUserImageModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectUserImageModal = /** @class */ (function () {
    function SelectUserImageModal() {
    }
    SelectUserImageModal.prototype.ngOnInit = function () {
    };
    SelectUserImageModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-select-user-image",
            template: __webpack_require__(/*! raw-loader!./select-user-image.modal.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/user/select-image/select-user-image.modal.html"),
            styles: [__webpack_require__(/*! ./styles/select-user-image.modal.scss */ "./src/app/firebase/user/select-image/styles/select-user-image.modal.scss"), __webpack_require__(/*! ./styles/select-user-image.shell.scss */ "./src/app/firebase/user/select-image/styles/select-user-image.shell.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectUserImageModal);
    return SelectUserImageModal;
}());



/***/ }),

/***/ "./src/app/firebase/user/select-image/styles/select-user-image.modal.scss":
/*!********************************************************************************!*\
  !*** ./src/app/firebase/user/select-image/styles/select-user-image.modal.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.select-image-content {\n  --background: var(--page-background);\n}\n\n.select-image-content .images-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS91c2VyL3NlbGVjdC1pbWFnZS9zdHlsZXMvc2VsZWN0LXVzZXItaW1hZ2UubW9kYWwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci9zZWxlY3QtaW1hZ2Uvc3R5bGVzL3NlbGVjdC11c2VyLWltYWdlLm1vZGFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0FDREY7O0FESUE7RUFDRSxvQ0FBQTtBQ0RGOztBREdFO0VBQ0UsdURBQUE7RUFFQSxxQ0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvdXNlci9zZWxlY3QtaW1hZ2Uvc3R5bGVzL3NlbGVjdC11c2VyLWltYWdlLm1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyBDdXN0b20gdmFyaWFibGVzXG4vLyAvLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cblxuLnNlbGVjdC1pbWFnZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC5pbWFnZXMtd3JhcHBlciB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cblxuLnNlbGVjdC1pbWFnZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLnNlbGVjdC1pbWFnZS1jb250ZW50IC5pbWFnZXMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59Il19 */"

/***/ }),

/***/ "./src/app/firebase/user/select-image/styles/select-user-image.shell.scss":
/*!********************************************************************************!*\
  !*** ./src/app/firebase/user/select-image/styles/select-user-image.shell.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS91c2VyL3NlbGVjdC1pbWFnZS9zdHlsZXMvc2VsZWN0LXVzZXItaW1hZ2Uuc2hlbGwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci9zZWxlY3QtaW1hZ2Uvc3R5bGVzL3NlbGVjdC11c2VyLWltYWdlLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtREFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvdXNlci9zZWxlY3QtaW1hZ2Uvc3R5bGVzL3NlbGVjdC11c2VyLWltYWdlLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/firebase/user/update/firebase-update-user.modal.ts":
/*!********************************************************************!*\
  !*** ./src/app/firebase/user/update/firebase-update-user.modal.ts ***!
  \********************************************************************/
/*! exports provided: FirebaseUpdateUserModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUpdateUserModal", function() { return FirebaseUpdateUserModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");






var FirebaseUpdateUserModal = /** @class */ (function () {
    function FirebaseUpdateUserModal(modalController, alertController, firebaseService, router) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.router = router;
    }
    FirebaseUpdateUserModal.prototype.ngOnInit = function () {
        // id: "email10005"
        // address: "address129"
        // average_speed: 0
        // company_intro: "desc129"
        // competition_exp: "desc130"
        // contact_person: ""
        // tslint:disable-next-line:max-line-length
        // downloadURL: "https://firebasestorage.googleapis.com/v0/b/kun-van-kau.appspot.com/o/test%2F1580897477023_supplierlogo.png?alt=media&token=6c34544e-fd7a-4689-901e-0ebac54ff00a"
        // editor_choice: false
        // email: "email10005"
        // hashtag: "英文"
        // isShell: false
        // phone: "6719 2939"
        // provider: "俊慧智能發展中心"
        // reply_rate: 0
        // timestamp: ""
        // tutor_qual: "description131"
        // url: "http://www.mi-train.com/"
        console.log(this.res, this.userId);
        var supplier = this.res;
        this.name = supplier.name;
        this.email = supplier.email;
        this.phone = supplier.phone;
        this.target_user_age_lower = supplier.target_user_age.lower;
        this.target_user_age_upper = supplier.target_user_age.upper;
        this.class_size_lower = supplier.class_size.lower;
        this.class_size_upper = supplier.class_size.upper;
        this.class_length_lower = supplier.class_length.lower;
        this.class_length_upper = supplier.class_length.upper;
        this.company_intro = supplier.company_intro;
        this.competition_exp = supplier.competition_exp;
        this.tutor_qual = supplier.tutor_qual;
        this.downloadURL = supplier.downloadURL;
        this.cate_1 = supplier.cate_1;
        this.cate_2 = supplier.cate_2;
        this.cate_3 = supplier.cate_3;
        this.cate_4 = supplier.cate_4;
        // this.selectedAvatar = this.user.avatar;
        this.updateUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            //     lastname: new FormControl(this.user.lastname, Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            // birthdate: new FormControl(
            //   dayjs.unix(this.user.birthdate).format("DD/MMMM/YYYY"),
            //   Validators.required
            // ),
            // skills: new FormArray(
            //   [],
            //   CheckboxCheckedValidator.minSelectedCheckboxes(1)
            // ),
            // spanish: new FormControl(this.user.languages.spanish),
            // english: new FormControl(this.user.languages.english),
            // french: new FormControl(this.user.languages.french)
        });
        // this.firebaseService.getSkills().subscribe(skills => {
        //   this.skills = skills;
        //   // create skill checkboxes
        //   this.skills.map(skill => {
        //     let userSkillsIds = [];
        //     if (this.user.skills) {
        //       userSkillsIds = this.user.skills.map(function(skillId) {
        //         return skillId["id"];
        //       });
        //     }
        //     // set the control value to 'true' if the user already has this skill
        //     const control = new FormControl(userSkillsIds.includes(skill.id));
        //     (this.updateUserForm.controls.skills as FormArray).push(control);
        //   });
        // });
    };
    // get skillsFormArray() {
    //   return <FormArray>this.updateUserForm.get("skills");
    // }
    // changeLangValue(value): string {
    //   switch (true) {
    //     case value <= 3:
    //       return "Novice";
    //     case value > 3 && value <= 6:
    //       return "Competent";
    //     case value > 6:
    //       return "Expert";
    //   }
    // }
    FirebaseUpdateUserModal.prototype.dismissModal = function () {
        this.modalController.dismiss();
    };
    // async deleteUser() {
    //   const alert = await this.alertController.create({
    //     header: "Confirm",
    //     message: "Do you want to delete " + this.user.name + "?",
    //     buttons: [
    //       {
    //         text: "No",
    //         role: "cancel",
    //         handler: () => {}
    //       },
    //       {
    //         text: "Yes",
    //         handler: () => {
    //           this.firebaseService.deleteUser(this.user.id).then(
    //             () => {
    //               this.dismissModal();
    //               this.router.navigate(["firebase/listing"]);
    //             },
    //             err => console.log(err)
    //           );
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present();
    // }
    FirebaseUpdateUserModal.prototype.updateUser = function () {
        // this.user.avatar = this.selectedAvatar;
        this.name = this.updateUserForm.value.name;
        // this.user.lastname = this.updateUserForm.value.lastname;
        // this.user.birthdate = dayjs(this.updateUserForm.value.birthdate).unix(); // save it in timestamp
        this.phone = this.updateUserForm.value.phone;
        this.email = this.updateUserForm.value.email;
        // this.user.languages.spanish = this.updateUserForm.value.spanish;
        // this.user.languages.english = this.updateUserForm.value.english;
        // this.user.languages.french = this.updateUserForm.value.french;
        // get the ids of the selected skills
        // const selectedSkills = [];
        // this.updateUserForm.value.skills.map((value: any, index: number) => {
        //   if (value) {
        //     selectedSkills.push(this.skills[index].id);
        //   }
        // });
        // this.user.skills = selectedSkills;
        //    const { age, ...userData } = this.user;
        //   we don't want to save the age in the DB because is something that changes over time
        // this.firebaseService.updateUser(userData).then(
        //   () => this.modalController.dismiss(),
        //   err => console.log(err)
        // );
    };
    // async changeUserImage() {
    //   const modal = await this.modalController.create({
    //     component: SelectUserImageModal
    //   });
    //   modal.onDidDismiss().then(avatar => {
    //     if (avatar.data != null) {
    //       this.selectedAvatar = avatar.data.link;
    //     }
    //   });
    //   await modal.present();
    // }
    FirebaseUpdateUserModal.prototype.changeTargetValue = function (value) {
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
    };
    FirebaseUpdateUserModal.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FirebaseUpdateUserModal.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FirebaseUpdateUserModal.prototype, "res", void 0);
    FirebaseUpdateUserModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-firebase-update-user",
            template: __webpack_require__(/*! raw-loader!./firebase-update-user.modal.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/user/update/firebase-update-user.modal.html"),
            styles: [__webpack_require__(/*! ./styles/firebase-update-user.modal.scss */ "./src/app/firebase/user/update/styles/firebase-update-user.modal.scss"), __webpack_require__(/*! ./styles/firebase-update-user.shell.scss */ "./src/app/firebase/user/update/styles/firebase-update-user.shell.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FirebaseUpdateUserModal);
    return FirebaseUpdateUserModal;
}());



/***/ }),

/***/ "./src/app/firebase/user/update/styles/firebase-update-user.modal.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/firebase/user/update/styles/firebase-update-user.modal.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.update-user-content {\n  --background: var(--page-background);\n}\n\n.update-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.update-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.update-user-content .select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.update-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.update-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.update-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.update-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.update-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.update-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\n.update-user-content .user-languages-fields {\n  padding-bottom: 0px;\n}\n\n.update-user-content .user-languages-fields .range-item-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium-shade);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n\n.form-actions-wrapper .delete-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS91c2VyL3VwZGF0ZS9zdHlsZXMvZmlyZWJhc2UtdXBkYXRlLXVzZXIubW9kYWwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci91cGRhdGUvc3R5bGVzL2ZpcmViYXNlLXVwZGF0ZS11c2VyLm1vZGFsLnNjc3MiLCIvVXNlcnMvaW1ha2VyL0Rlc2t0b3AvSU1BS0VSL0FBQV9pbWFrZXJfc3Vic2NyaXB0aW9uL2lvblZvaWNlL3NyYy90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLG9EQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0FDRkY7O0FESUU7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOENBQUE7QUNISjs7QURLSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNITjs7QURLTTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7QUNIUjs7QURPSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ05OOztBRFFNO0VBQ0UsZUFBQTtBQ05SOztBRFdFO0VBQ0UsK0JBQUE7RUFDQSw4RUFBQTtBQ1RKOztBRFdJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNUTjs7QURjSTtFQUNFLCtCQUFBO0FDWk47O0FEZUk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ2JOOztBRGtCSTtFQUNFLCtEQUFBO0VFeEVKLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEeURGOztBQ3ZEQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QUR3REo7O0FDdERJO0VBQ0QsdUJBQUE7QUR3REg7O0FDckRFO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtBRHVETjs7QUNwREk7RUFDRSxZQUFBO0FEc0ROOztBQ3BETTtFQUVFLFVBQUE7QURxRFI7O0FDakRFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURtRE47O0FDaERFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRGdESDs7QURsQk07RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FDb0JSOztBRGhCTTtFQUNFLDJDQUFBO0FDa0JSOztBRGhCUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1EQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLDBEQUFBO0FDa0JWOztBRGhCVTtFQUNFLHdDQUFBO0FDa0JaOztBRFhFO0VBQ0UsbUJBQUE7QUNhSjs7QURYSTtFQUNFLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx5Q0FBQTtVQUFBLHdDQUFBO0VBQ0EsdUNBQUE7VUFBQSxzQ0FBQTtFQUVBLHlEQUFBO0FDV047O0FEVE07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtBQ1dSOztBRFRRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1dWOztBRFJRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1VWOztBRE5NO0VBRUUsK0NBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FDTVI7O0FEQUE7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FDRUY7O0FEQUU7RUFDRSxXQUFBO0FDRUo7O0FEQ0U7RUFDRSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS91c2VyL3VwZGF0ZS9zdHlsZXMvZmlyZWJhc2UtdXBkYXRlLXVzZXIubW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZ1wiO1xuXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgLS1wYWdlLWJhY2tncm91bmQtc2hhZGU6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG59XG5cbi51cGRhdGUtdXNlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gICAgLnVzZXItaW1hZ2UtY29sIHtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICB3aWR0aDogNGNoO1xuICAgICAgaGVpZ2h0OiA0Y2g7XG4gICAgICBtYXJnaW46IDBweDtcblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWVsZHMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHNvbGlkIHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuICAudXNlci1kZXRhaWxzLWZpZWxkcyB7XG4gICAgLmlucHV0cy1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuXG4gICAgLmlucHV0LWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cblxuICAudXNlci1leHBlcmllbmNlLWZpZWxkcyB7XG4gICAgLmNoZWNrYm94LXRhZ3Mge1xuICAgICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuXG4gICAgICBAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcblxuICAgICAgLmNoZWNrYm94LXRhZyB7XG4gICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xuICAgICAgJi5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXG4gICAgICAgIC5jaGVja2JveC10YWcge1xuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgICAgICYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgIC5yYW5nZS1pdGVtLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAvLyBib3gtc2hhZG93IGF0IHRoZSB0b3BcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4ICB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG5cbiAgICAgIC5yYW5nZS1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAgIC5yYW5nZS12YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yYW5nZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucmFuZ2UtY29udHJvbCB7XG4gICAgICAgIC8vIG92ZXJyaWRlIHRoZSBwaW4gY29sb3JcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG5cbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIC5zdWJtaXQtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIC5kZWxldGUtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbn1cblxuLnVwZGF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC51c2VyLWltYWdlLWNvbCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAuY2hhbmdlLWltYWdlLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbiAgbWFyZ2luOiAwcHg7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIC5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dHMtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1kZXRhaWxzLWZpZWxkcyAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5yb3VuZGVkLXRhZyB7XG4gIC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1jb250cm9sIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIgLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IDBweDtcbn1cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciAuZGVsZXRlLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufSIsIkBtaXhpbiBjaGVja2JveC10YWcoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xuXG5cdC5jaGVja2JveC10YWcge1xuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuXHRcdC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG5cbiAgICAmLnJvdW5kZWQtdGFnIHtcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xuXHRcdH1cblxuXHRcdCYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xuXHRcdH1cblxuICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgIC50YWctbGFiZWwge1xuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG5cdFx0LnRhZy1sYWJlbCB7XG5cdFx0XHRtYXJnaW46IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0aW9uLWNoZWNrYm94IHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLmNoZWNrYm94LWljb25cblx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAuY2hlY2tib3gtaWNvbiAuY2hlY2tib3gtaW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3Jcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/firebase/user/update/styles/firebase-update-user.shell.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/firebase/user/update/styles/firebase-update-user.shell.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS91c2VyL3VwZGF0ZS9zdHlsZXMvZmlyZWJhc2UtdXBkYXRlLXVzZXIuc2hlbGwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci91cGRhdGUvc3R5bGVzL2ZpcmViYXNlLXVwZGF0ZS11c2VyLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvdXNlci91cGRhdGUvc3R5bGVzL2ZpcmViYXNlLXVwZGF0ZS11c2VyLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

/***/ })

}]);
//# sourceMappingURL=firebase-firebase-integration-module-es5.js.map