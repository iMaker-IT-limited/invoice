(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-us-submenu1-contact-us-submenu1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us-submenu1/contact-us-submenu1.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact-us-submenu1/contact-us-submenu1.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>contact-us-submenu1</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<app-header></app-header>\n<ion-content>\n  <ion-slides>\n    <ion-slide>\n      <!-- 500*130 *  -->\n      <!-- C:\\Users\\hf\\Desktop\\ionic4-full-starter-app-pro-version-1.2.1\\src\\assets\\images\\join-us\\submenu1\\supplier.png -->\n      <img style=\"width: 100%;\" src=\"../../../assets/images/join-us/submenu1/supplier.png\" alt=\"\">\n      <!-- <h1>Slide 1</h1> -->\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"7\">\n        <ion-card style=\"text-align: left; box-shadow: none;\">\n          <ion-card-header style=\"font-size: larger; font-weight: bold;\">供應商</ion-card-header>\n          <ion-card-content>\n\n            <br>\n            <br>\n            按點擊收費計劃(每次成功報價) -價格為港幣 $ 80 / $ （優惠價）\n            # 5個hashtag， 3個產品欄， Backlink\n\n            <br>\n            <br>\n            基本月費年費計劃：$680 （E-mail通知標書資料）\n            # 9個免費點擊，9個以上以每額外一個$80 收費，6個hashtag， 10個產品欄， 於課程類別置頂，Facebook及Google廣告， Backlink\n\n            <br>\n            <br>\n            高級年費年費計劃：$7800（E-mail通知標書資料，廣告置頂）\n\n            # 120個免費點擊，120個以上以每額外一個$80 收費，7個hashtag， 10個產品欄， 於課程類別置頂，Banner廣告，Facebook及Google廣告，一次訪問，星級介紹，Backlink\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-card style=\"text-align: center;\">\n          <!-- src\\assets\\sample-images\\user\\理念背景_1.jpg -->\n          <img src=\"../../../assets/sample-images/user/理念背景_1.jpg\" alt=\"\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card style=\"text-align: left; box-shadow: none;\">\n          <!-- <ion-card-header style=\"font-size: larger; font-weight: bold;\"> 免費試用：一個月</ion-card-header> -->\n          <ion-card-content>\n            <ion-button color=\"theme\" fill=\"outline\" [routerLink]=\"['/app/auth/signup']\">\n              立即註冊</ion-button>\n            <!-- # the image for the plans is missing -->\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <app-global-banner></app-global-banner>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/contact-us-submenu1/contact-us-submenu1.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/contact-us-submenu1/contact-us-submenu1.module.ts ***!
  \*************************************************************************/
/*! exports provided: ContactUsSubmenu1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsSubmenu1PageModule", function() { return ContactUsSubmenu1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_us_submenu1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us-submenu1.page */ "./src/app/pages/contact-us-submenu1/contact-us-submenu1.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: "",
        component: _contact_us_submenu1_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsSubmenu1Page"]
    }
];
var ContactUsSubmenu1PageModule = /** @class */ (function () {
    function ContactUsSubmenu1PageModule() {
    }
    ContactUsSubmenu1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_us_submenu1_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsSubmenu1Page"]]
        })
    ], ContactUsSubmenu1PageModule);
    return ContactUsSubmenu1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/contact-us-submenu1/contact-us-submenu1.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/contact-us-submenu1/contact-us-submenu1.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtdXMtc3VibWVudTEvY29udGFjdC11cy1zdWJtZW51MS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/contact-us-submenu1/contact-us-submenu1.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/contact-us-submenu1/contact-us-submenu1.page.ts ***!
  \***********************************************************************/
/*! exports provided: ContactUsSubmenu1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsSubmenu1Page", function() { return ContactUsSubmenu1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsSubmenu1Page = /** @class */ (function () {
    function ContactUsSubmenu1Page() {
    }
    ContactUsSubmenu1Page.prototype.ngOnInit = function () { };
    ContactUsSubmenu1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-contact-us-submenu1",
            template: __webpack_require__(/*! raw-loader!./contact-us-submenu1.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us-submenu1/contact-us-submenu1.page.html"),
            styles: [__webpack_require__(/*! ./contact-us-submenu1.page.scss */ "./src/app/pages/contact-us-submenu1/contact-us-submenu1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsSubmenu1Page);
    return ContactUsSubmenu1Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contact-us-submenu1-contact-us-submenu1-module-es5.js.map