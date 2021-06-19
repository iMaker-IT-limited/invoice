(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-us-submenu1-about-us-submenu1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about-us-submenu1/about-us-submenu1.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about-us-submenu1/about-us-submenu1.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>about-us-submenu1</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<app-header></app-header>\n<ion-content>\n\n  <ion-slides pager=\"true\">\n    <ion-slide>\n      <!-- 500*130 *  -->\n      <!-- src\\assets\\images\\about-us\\submenu1\\報價流程.jpg -->\n      <img style=\"width: 100%;\" src=\"../../../assets/images/about-us/submenu1/報價流程.jpg\" alt=\"\">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"7\">\n        <ion-card style=\"text-align: left; box-shadow: none;\">\n          <ion-card-header style=\"font-size: larger; font-weight: bold;\">報價程序</ion-card-header>\n          <ion-card-content>\n            我們的報價過程十分簡單，學校教職員利用我們的平台輸入欲找尋的課外活動資料，我們會自動配對合適的供應商的資料，教職員可按下「索取報價」向有興趣的供應商索取報價單，供應商會在短時間內以電郵方式回覆。 <br>\n            <br>\n            <!-- 教職員只需按一個按鈕鍵“Get a Quote\", 便能獲得充足的合適報價。 供應商方面， 亦能因此而獲得商機。 -->\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-card style=\"text-align: center;\">\n          <!-- src\\assets\\sample-images\\user\\理念背景_1.jpg -->\n          <img src=\"../../../assets/sample-images/user/理念背景_1.jpg\" alt=\"\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row size=\"12\">\n      <div style=\"display:block; margin-left: auto; margin-right: auto; width: auto;\">\n        <!-- <img src=\"../../../assets/images/about-us/submenu1/step.png\" alt=\"\"> -->\n        <img class=\"STEP_web\" style=\"width: 100%;\" src=\"../../../assets/images/about-us/submenu1/STEP_web.png\" alt=\"\">\n        <img class=\"STEP_mobile\" style=\"width: 100%;\" src=\"../../../assets/images/about-us/submenu1/STEP_mobile.png\">\n      </div>\n    </ion-row>\n  </ion-grid>\n\n  <app-global-banner></app-global-banner>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/about-us-submenu1/about-us-submenu1.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/about-us-submenu1/about-us-submenu1.module.ts ***!
  \*********************************************************************/
/*! exports provided: AboutUsSubmenu1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsSubmenu1PageModule", function() { return AboutUsSubmenu1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_us_submenu1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us-submenu1.page */ "./src/app/pages/about-us-submenu1/about-us-submenu1.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: "",
        component: _about_us_submenu1_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsSubmenu1Page"]
    }
];
let AboutUsSubmenu1PageModule = class AboutUsSubmenu1PageModule {
};
AboutUsSubmenu1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_about_us_submenu1_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsSubmenu1Page"]]
    })
], AboutUsSubmenu1PageModule);



/***/ }),

/***/ "./src/app/pages/about-us-submenu1/about-us-submenu1.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/about-us-submenu1/about-us-submenu1.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* On screens that are 600px or more, set the background color to blue */\n@media screen and (min-width: 600px) {\n  .STEP_web {\n    display: block;\n  }\n\n  .STEP_mobile {\n    display: none;\n  }\n}\n/* On screens that are 600px or less, set the background color to blue */\n@media screen and (max-width: 600px) {\n  .STEP_web {\n    display: none;\n  }\n\n  .STEP_mobile {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9wYWdlcy9hYm91dC11cy1zdWJtZW51MS9hYm91dC11cy1zdWJtZW51MS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzLXN1Ym1lbnUxL2Fib3V0LXVzLXN1Ym1lbnUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RUFBQTtBQUNBO0VBQ0k7SUFDSSxjQUFBO0VDQ047O0VERUU7SUFDSSxhQUFBO0VDQ047QUFDRjtBREdBLHdFQUFBO0FBQ0E7RUFDSTtJQUNJLGFBQUE7RUNETjs7RURJRTtJQUNJLGNBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQtdXMtc3VibWVudTEvYWJvdXQtdXMtc3VibWVudTEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogT24gc2NyZWVucyB0aGF0IGFyZSA2MDBweCBvciBtb3JlLCBzZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gYmx1ZSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLlNURVBfd2ViIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgfVxyXG5cclxuICAgIC5TVEVQX21vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIE9uIHNjcmVlbnMgdGhhdCBhcmUgNjAwcHggb3IgbGVzcywgc2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGJsdWUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5TVEVQX3dlYiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuU1RFUF9tb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59IiwiLyogT24gc2NyZWVucyB0aGF0IGFyZSA2MDBweCBvciBtb3JlLCBzZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gYmx1ZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLlNURVBfd2ViIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5TVEVQX21vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLyogT24gc2NyZWVucyB0aGF0IGFyZSA2MDBweCBvciBsZXNzLCBzZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gYmx1ZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLlNURVBfd2ViIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLlNURVBfbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/about-us-submenu1/about-us-submenu1.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/about-us-submenu1/about-us-submenu1.page.ts ***!
  \*******************************************************************/
/*! exports provided: AboutUsSubmenu1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsSubmenu1Page", function() { return AboutUsSubmenu1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsSubmenu1Page = class AboutUsSubmenu1Page {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsSubmenu1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us-submenu1',
        template: __webpack_require__(/*! raw-loader!./about-us-submenu1.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about-us-submenu1/about-us-submenu1.page.html"),
        styles: [__webpack_require__(/*! ./about-us-submenu1.page.scss */ "./src/app/pages/about-us-submenu1/about-us-submenu1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutUsSubmenu1Page);



/***/ })

}]);
//# sourceMappingURL=pages-about-us-submenu1-about-us-submenu1-module-es2015.js.map