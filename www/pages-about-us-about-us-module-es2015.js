(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-us-about-us-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about-us/about-us.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>about-us</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<app-header></app-header>\n<ion-content>\n\n  <ion-slides pager=\"true\">\n    <ion-slide>\n      <!-- 500*130 *  -->\n      <img style=\"width: 100%;\" src=\"../../../assets/images/about-us/about-us-banner.png\" alt=\"\">\n      <!-- C:\\Users\\hf\\Desktop\\ionic4-full-starter-app-pro-version-1.2.1\\src\\assets\\sample-images\\user\\about-us.png -->\n      <!-- <h1>Slide 1</h1> -->\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"7\">\n        <ion-card style=\"text-align: left; box-shadow: none;\">\n          <ion-card-header style=\"font-size: larger; font-weight: bold;\">理念背景</ion-card-header>\n          <ion-card-content>\n            e-SchoolLand 專為學校教職員而設的快速報價平台，為學校與到校課外活動供應商進行配對，從而讓學校有效地揀選合適的供應商，節省進行報價程序的時間及工序，減輕教職員的工作量 。\n            <br>\n            <br>\n            教職員只需按一個按鈕鍵“Get a Quote\", 便能獲得充足的合適報價。 供應商方面， 亦能因此而獲得商機。\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-card style=\"text-align: center;\">\n          <!-- src\\assets\\sample-images\\user\\理念背景_1.jpg -->\n          <img src=\"../../../assets/sample-images/user/理念背景_1.jpg\" alt=\"\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <app-global-banner></app-global-banner>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.module.ts ***!
  \***************************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: "",
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]
    }
];
let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
    })
], AboutUsPageModule);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.ts ***!
  \*************************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsPage = class AboutUsPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.page.html"),
        styles: [__webpack_require__(/*! ./about-us.page.scss */ "./src/app/pages/about-us/about-us.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutUsPage);



/***/ })

}]);
//# sourceMappingURL=pages-about-us-about-us-module-es2015.js.map