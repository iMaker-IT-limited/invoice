(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-us-submenu2-contact-us-submenu2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us-submenu2/contact-us-submenu2.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact-us-submenu2/contact-us-submenu2.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>contact-us-submenu2</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<app-header></app-header>\n<ion-content>\n  <ion-slides>\n    <ion-slide>\n      <!-- 500*130 *  -->\n      <img style=\"width: 100%;\" src=\"../../../assets/images/join-us/submenu2/staff.png\" alt=\"\">\n      <!-- <h1>Slide 1</h1> -->\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"7\">\n        <ion-card style=\"text-align: left; box-shadow: none;\">\n          <ion-card-header style=\"font-size: larger; font-weight: bold;\">學校教職員</ion-card-header>\n          <ion-card-content>\n            學校教職員只要簡單利用Google帳戶或用其他電郵於本平台登記成為會員，即可使用配對功能，並且能一覽各供應商的資料，費用全免。 <br>\n            <br>\n\n            <ion-button color=\"theme\" fill=\"outline\" [routerLink]=\"['/app/auth/signup']\">\n              立即註冊</ion-button>\n\n            <!-- 教職員只需按一個按鈕鍵“Get a Quote\", 便能獲得充足的合適報價。 供應商方面， 亦能因此而獲得商機。 -->\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-card style=\"text-align: center;\">\n          <!-- src\\assets\\sample-images\\user\\理念背景_1.jpg -->\n          <img src=\"../../../assets/sample-images/user/理念背景_1.jpg\" alt=\"\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <app-global-banner></app-global-banner>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/contact-us-submenu2/contact-us-submenu2.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/contact-us-submenu2/contact-us-submenu2.module.ts ***!
  \*************************************************************************/
/*! exports provided: ContactUsSubmenu2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsSubmenu2PageModule", function() { return ContactUsSubmenu2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_us_submenu2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us-submenu2.page */ "./src/app/pages/contact-us-submenu2/contact-us-submenu2.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: "",
        component: _contact_us_submenu2_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsSubmenu2Page"]
    }
];
var ContactUsSubmenu2PageModule = /** @class */ (function () {
    function ContactUsSubmenu2PageModule() {
    }
    ContactUsSubmenu2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_us_submenu2_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsSubmenu2Page"]]
        })
    ], ContactUsSubmenu2PageModule);
    return ContactUsSubmenu2PageModule;
}());



/***/ }),

/***/ "./src/app/pages/contact-us-submenu2/contact-us-submenu2.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/contact-us-submenu2/contact-us-submenu2.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtdXMtc3VibWVudTIvY29udGFjdC11cy1zdWJtZW51Mi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/contact-us-submenu2/contact-us-submenu2.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/contact-us-submenu2/contact-us-submenu2.page.ts ***!
  \***********************************************************************/
/*! exports provided: ContactUsSubmenu2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsSubmenu2Page", function() { return ContactUsSubmenu2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsSubmenu2Page = /** @class */ (function () {
    function ContactUsSubmenu2Page() {
    }
    ContactUsSubmenu2Page.prototype.ngOnInit = function () {
    };
    ContactUsSubmenu2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us-submenu2',
            template: __webpack_require__(/*! raw-loader!./contact-us-submenu2.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us-submenu2/contact-us-submenu2.page.html"),
            styles: [__webpack_require__(/*! ./contact-us-submenu2.page.scss */ "./src/app/pages/contact-us-submenu2/contact-us-submenu2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsSubmenu2Page);
    return ContactUsSubmenu2Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contact-us-submenu2-contact-us-submenu2-module-es5.js.map