(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-expenses-details-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/expenses/details/details.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/expenses/details/details.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-item-divider sticky>\n    <ion-title class=\"title\" (click)=\"showSideNav(sideNav = !sideNav)\">\n      All Expenses\n\n    </ion-title>\n\n    <ion-button slot=\"end\" fill=\"clear\" color=\"dark\" (click)=\"onDismiss()\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-button>\n  </ion-item-divider>\n\n  <app-rating-input *ngIf=\"!estimateDetail\"></app-rating-input>\n\n  <div class=\"grid-container\" id=\"grid-container\">\n    <aside class=\"sidenav\" id=\"sidenav\">\n      <!-- <ul *ngFor=\"let i of estimateList\" class=\"sidenav__list\">\n        <li class=\"sidenav__list-item\">\n          <input type=\"checkbox\" style=\"padding-right: 10px;\" />\n          <ion-label style=\"margin-bottom: 10px; color: black;\">\n            {{i['Customer Name']}}\n          </ion-label>\n          <br />\n          <div class=\"estimatenumber\">\n            {{i['Estimate Number']}}\n          </div>\n          <div class=\"estimatedate\">\n            | {{i['Estimate Date']}}\n          </div>\n          <div class=\"status\">\n            {{i['Estimate Status']}}\n          </div>\n        </li>\n      </ul> -->\n    </aside>\n    <header class=\"header\">\n      <ion-title>\n        <!-- | {{estimateDetail.id}} -->\n      </ion-title>\n      <ion-button slot=\"end\" fill=\"clear\" color=\"theme\" icon-only id=\"printInvoice\" (click)=\"updateEstimate()\">\n        <ion-icon src=\"assets/icon/edit.svg\"></ion-icon>\n      </ion-button>\n\n      <ion-button slot=\"end\" fill=\"clear\" color=\"theme\" (click)=\"testtablePDF(estimateDetail, myimage)\">\n        <ion-icon src=\"assets/icon/pdf.svg\"></ion-icon>\n      </ion-button>\n\n\n      <ion-button slot=\"end\" fill=\"solid\" color=\"theme\" (click)=\"convertToInvoice(estimateDetail)\">Convert to\n        Invoice\n      </ion-button>\n\n      <ion-button slot=\"end\" fill=\"solid\" color=\"theme\" (click)=\"deleteItem()\">Delete </ion-button>\n    </header>\n    <main class=\"main\">\n\n      <div id=\"invoice\">\n        <div class=\"ribbon\">\n          <div class=\"wrap\">\n            <span class=\"ribbon6\">Expense</span>\n            <ion-card class=\"invoice overflow-auto\">\n\n\n\n\n              {{estimateDetail | json}}\n\n\n              <footer>\n                Powered by i-Maker IT Limited\n              </footer>\n            </ion-card>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/firebase/expenses/details/details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/firebase/expenses/details/details.module.ts ***!
  \*************************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/firebase/expenses/details/details.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");











const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]
    }
];
let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]],
        providers: [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _firebase_integration_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseService"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/firebase/expenses/details/details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/firebase/expenses/details/details.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#invoice {\n  padding: 30px;\n}\n\n.invoice {\n  position: relative;\n  background-color: #FFF;\n  min-height: 680px;\n  padding: 15px;\n}\n\n.invoice header {\n  padding: 10px 0;\n  margin-bottom: 20px;\n  border-bottom: 1px solid var(--ion-color-theme);\n}\n\n.invoice .company-details {\n  text-align: right;\n}\n\n.invoice .company-details .name {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.invoice .contacts {\n  margin-bottom: 20px;\n}\n\n.invoice .invoice-to {\n  text-align: left;\n}\n\n.invoice .invoice-to .to {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.invoice .invoice-details {\n  text-align: right;\n}\n\n.invoice .invoice-details .invoice-id {\n  margin-top: 0;\n  color: white;\n}\n\n.invoice main {\n  padding-bottom: 50px;\n}\n\n.invoice main .notices {\n  padding-left: 6px;\n  border-left: 6px solid var(--ion-color-theme);\n}\n\n.invoice main .notices .notice {\n  font-size: 0.8em;\n}\n\n.invoice table {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin-bottom: 20px;\n}\n\n.invoice table td {\n  padding: 10px;\n  color: gray;\n  background: white;\n  border-bottom: 1px solid #fff;\n  white-space: break-spaces;\n}\n\n.invoice table th {\n  white-space: nowrap;\n  text-align: left;\n  font-weight: 400;\n  padding: 15px;\n  font-size: 9pt;\n  background: var(--ion-color-theme);\n  color: white;\n}\n\n.invoice table td h3 {\n  margin: 0;\n  font-weight: 400;\n  color: var(--ion-color-theme);\n  font-size: 9pt;\n}\n\n.invoice table .qty,\n.invoice table .total,\n.invoice table .unit {\n  text-align: left;\n  font-size: 9pt;\n}\n\n.invoice table .no {\n  color: darkgray;\n  font-size: 9pt;\n  background: white;\n  vertical-align: top;\n}\n\npre {\n  font-size: 8pt;\n  white-space: pre-line !important;\n}\n\n.invoice table .qty {\n  z-index: 999;\n  vertical-align: top;\n}\n\n.invoice table .unit {\n  background: white;\n  vertical-align: top;\n}\n\n.invoice table .total {\n  background: white;\n  color: darkgray;\n  vertical-align: top;\n}\n\n.invoice table tbody tr:last-child td {\n  border: none;\n}\n\n.invoice table tfoot td {\n  background: 0 0;\n  border-bottom: none;\n  white-space: nowrap;\n  text-align: right;\n  padding: 10px 20px;\n  font-size: 1.2em;\n  border-top: 1px solid #aaa;\n}\n\n.invoice table tfoot tr:first-child td {\n  border-top: none;\n}\n\n.invoice table tfoot tr:last-child td {\n  color: #3989c6;\n  font-size: 1.4em;\n  border-top: 1px solid #3989c6;\n}\n\n.invoice table tfoot tr td:first-child {\n  border: none;\n}\n\n.invoice footer {\n  width: 100%;\n  text-align: center;\n  color: #777;\n  border-top: 1px solid #aaa;\n  padding: 8px 0;\n}\n\n@media print {\n  .invoice {\n    font-size: 11px !important;\n    overflow: hidden !important;\n  }\n\n  .invoice footer {\n    position: absolute;\n    bottom: 10px;\n    page-break-after: always;\n  }\n\n  .invoice > div:last-child {\n    page-break-before: always;\n  }\n}\n\n.invoice_logo {\n  width: 150px !important;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\nsection {\n  margin: 0 auto;\n  max-width: 660px;\n  padding: 0 20px;\n}\n\nh1 {\n  font-weight: normal;\n  position: relative;\n  background: #F4F9FA;\n  width: 50%;\n  color: #F8463F;\n  text-align: center;\n  padding: 10px 20px;\n  margin: 20px auto 40px;\n  text-transform: uppercase;\n  border-radius: 2px;\n}\n\nh1:before,\nh1:after {\n  content: \"\";\n  position: absolute;\n  top: -6px;\n  border: 18px solid #DCF4F4;\n}\n\nh1:before {\n  left: -36px;\n  border-right-width: 18px;\n  border-left-color: transparent;\n}\n\nh1:after {\n  right: -36px;\n  border-left-width: 18px;\n  border-right-color: transparent;\n}\n\nh1 span:before,\nh1 span:after {\n  content: \"\";\n  position: absolute;\n  border-style: solid;\n  border-color: #A7CECC transparent transparent transparent;\n  top: -6px;\n  transform: rotate(180deg);\n}\n\nh1 span:before {\n  left: 0;\n  border-width: 6px 0 0 6px;\n}\n\nh1 span:after {\n  right: 0;\n  border-width: 6px 6px 0 0;\n}\n\n.ribbon {\n  position: relative;\n  margin-bottom: 30px;\n  color: white;\n}\n\n.ribbon1 {\n  position: absolute;\n  top: -6.1px;\n  right: 10px;\n}\n\n.ribbon1:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-left: 53px solid transparent;\n  border-right: 53px solid transparent;\n  border-top: 10px solid #F8463F;\n}\n\n.ribbon1 span {\n  position: relative;\n  display: block;\n  text-align: center;\n  background: #F8463F;\n  font-size: 14px;\n  line-height: 1;\n  padding: 12px 8px 10px;\n  border-top-right-radius: 8px;\n  width: 90px;\n}\n\n.ribbon1 span:before,\n.ribbon1 span:after {\n  position: absolute;\n  content: \"\";\n}\n\n.ribbon1 span:before {\n  height: 6px;\n  width: 6px;\n  left: -6px;\n  top: 0;\n  background: #F8463F;\n}\n\n.ribbon1 span:after {\n  height: 6px;\n  width: 8px;\n  left: -8px;\n  top: 0;\n  border-radius: 8px 8px 0 0;\n  background: #C02031;\n}\n\n.ribbon2 {\n  width: 60px;\n  padding: 10px 0;\n  position: absolute;\n  top: -6px;\n  left: 25px;\n  text-align: center;\n  border-top-left-radius: 3px;\n  background: #F47530;\n}\n\n.ribbon2:before {\n  height: 0;\n  width: 0;\n  right: -5.5px;\n  top: 0.1px;\n  border-bottom: 6px solid #8D5A20;\n  border-right: 6px solid transparent;\n}\n\n.ribbon2:before,\n.ribbon2:after {\n  content: \"\";\n  position: absolute;\n}\n\n.ribbon2:after {\n  height: 0;\n  width: 0;\n  bottom: -29.5px;\n  left: 0;\n  border-left: 30px solid #F47530;\n  border-right: 30px solid #F47530;\n  border-bottom: 30px solid transparent;\n}\n\n.ribbon3 {\n  width: 150px;\n  height: 50px;\n  line-height: 50px;\n  padding-left: 15px;\n  position: absolute;\n  left: -8px;\n  top: 20px;\n  background: #59324C;\n}\n\n.ribbon3:before,\n.ribbon3:after {\n  content: \"\";\n  position: absolute;\n}\n\n.ribbon3:before {\n  height: 0;\n  width: 0;\n  top: -8.5px;\n  left: 0.1px;\n  border-bottom: 9px solid black;\n  border-left: 9px solid transparent;\n}\n\n.ribbon3:after {\n  height: 0;\n  width: 0;\n  right: -14.5px;\n  border-top: 25px solid transparent;\n  border-bottom: 25px solid transparent;\n  border-left: 15px solid #59324C;\n}\n\n.ribbon4 {\n  position: absolute;\n  top: 15px;\n  padding: 8px 10px;\n  background: #00B3ED;\n  box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.3);\n}\n\n.ribbon4:before,\n.ribbon4:after {\n  content: \"\";\n  position: absolute;\n}\n\n.ribbon4:before {\n  width: 7px;\n  height: 100%;\n  top: 0;\n  left: -6.5px;\n  padding: 0 0 7px;\n  background: inherit;\n  border-radius: 5px 0 0 5px;\n}\n\n.ribbon4:after {\n  width: 5px;\n  height: 5px;\n  bottom: -5px;\n  left: -4.5px;\n  background: lightblue;\n  border-radius: 5px 0 0 5px;\n}\n\n.ribbon5 {\n  display: block;\n  width: calc(100% + 20px);\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  margin-left: -10px;\n  margin-right: -10px;\n  background: #EDBA19;\n  position: relative;\n  top: 20px;\n}\n\n.ribbon5:before,\n.ribbon5:after {\n  content: \"\";\n  position: absolute;\n}\n\n.ribbon5:before {\n  height: 0;\n  width: 0;\n  bottom: -10px;\n  left: 0;\n  border-top: 10px solid #cd8d11;\n  border-left: 10px solid transparent;\n}\n\n.ribbon5:after {\n  height: 0;\n  width: 0;\n  right: 0;\n  bottom: -10px;\n  border-top: 10px solid #cd8d11;\n  border-right: 10px solid transparent;\n}\n\n.wrap {\n  width: 100%;\n  position: absolute;\n  overflow: hidden;\n}\n\n.wrap:before,\n.wrap:after {\n  content: \"\";\n  position: absolute;\n}\n\n.wrap:before {\n  width: 40px;\n  height: 8px;\n  right: 100px;\n  background: #4D6530;\n  border-radius: 8px 8px 0px 0px;\n}\n\n.wrap:after {\n  width: 8px;\n  height: 40px;\n  right: 0px;\n  top: 100px;\n  background: #4D6530;\n  border-radius: 0px 8px 8px 0px;\n}\n\n.ribbon6 {\n  width: 200px;\n  height: 40px;\n  line-height: 40px;\n  position: absolute;\n  top: 30px;\n  right: -50px;\n  z-index: 2;\n  overflow: hidden;\n  transform: rotate(45deg);\n  border: 1px dashed;\n  box-shadow: 0 0 0 3px #57DD43, 0px 21px 5px -18px rgba(0, 0, 0, 0.6);\n  background: #57DD43;\n  text-align: center;\n}\n\n@media (min-width: 500px) {\n  .ribbons-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n  box-sizing: border-box;\n}\n\n/* Assign grid instructions to our parent grid container, mobile-first (hide the sidenav) */\n\n.grid-container {\n  display: grid;\n  grid-template-columns: auto 50% 50% auto;\n  grid-template-rows: 50px 1fr 50px;\n  grid-template-areas: \"header\" \"sidenav\" \"main\" \"footer\";\n  height: 100%;\n}\n\n.menu-icon {\n  position: fixed;\n  /* Needs to stay visible for all mobile scrolling */\n  display: flex;\n  top: 5px;\n  left: 10px;\n  align-items: center;\n  justify-content: center;\n  background-color: #DADAE3;\n  border-radius: 50%;\n  z-index: 1;\n  cursor: pointer;\n  padding: 12px;\n}\n\n/* Give every child element its grid name */\n\n.header {\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  border-bottom-style: solid;\n  border-color: lightgray;\n  border: 1px;\n}\n\n/* Make room for the menu icon on mobile */\n\n.header__search {\n  margin-left: 42px;\n}\n\n.sidenav {\n  grid-area: sidenav;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  overflow-y: auto;\n  transition: all 0.6s ease-in-out;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\n  z-index: 2;\n  /* Needs to sit above the hamburger menu icon */\n}\n\n.sidenav.active {\n  transform: translateX(0);\n}\n\n.sidenav__close-icon {\n  position: absolute;\n  visibility: visible;\n  top: 8px;\n  right: 12px;\n  cursor: pointer;\n  font-size: 20px;\n  color: var(--ion-color-theme);\n}\n\n.sidenav__list {\n  padding: 0;\n  margin: 0px;\n  list-style-type: none;\n}\n\n.sidenav__list-item {\n  padding: 18px 10px;\n  color: darkgray;\n  font-size: 14px;\n  border-bottom: 1px;\n  border-color: lightgray;\n  border-bottom-style: solid;\n}\n\n.sidenav__list-item .estimatenumber {\n  color: var(--ion-color-theme);\n  float: left;\n  font-size: 12px;\n}\n\n.sidenav__list-item .estimatenumber:hover {\n  color: white;\n}\n\n.sidenav__list-item .estimatedate {\n  float: left;\n  font-size: 12px;\n}\n\n.sidenav__list-item .status {\n  float: right;\n  font-size: 12px;\n}\n\n.sidenav__list-item:hover {\n  color: var(--ion-color-theme);\n  background: #e8e8e8 !important;\n  cursor: pointer;\n}\n\n.main {\n  grid-area: main;\n  width: 100%;\n  background: white;\n  overflow-y: scroll;\n}\n\n.main-header {\n  display: flex;\n  justify-content: space-between;\n  background-color: #fbfafa;\n  font-size: 13px;\n}\n\n.main-overview {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));\n  grid-auto-rows: 94px;\n  grid-gap: 20px;\n  margin: 20px;\n}\n\n.overviewcard {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  height: 100%;\n}\n\n.main-cards {\n  -moz-column-count: 1;\n       column-count: 1;\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n  margin: 20px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background-color: #82bef6;\n  margin-bottom: 20px;\n  -webkit-column-break-inside: avoid;\n  padding: 24px;\n  box-sizing: border-box;\n}\n\n/* Force varying heights to simulate dynamic content */\n\n.card:first-child {\n  height: 485px;\n}\n\n.card:nth-child(2) {\n  height: 200px;\n}\n\n.card:nth-child(3) {\n  height: 265px;\n}\n\n.footer {\n  grid-area: footer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  background-color: #648ca6;\n}\n\n/* Non-mobile styles, 750px breakpoint */\n\n@media only screen and (min-width: 46.875em) {\n  /* Show the sidenav */\n  .grid-container {\n    grid-template-columns: 0% 100%;\n    grid-template-areas: \"sidenav header\" \"sidenav main\" \"sidenav footer\";\n    -webkit-animation: fadeIn 2s;\n            animation: fadeIn 2s;\n  }\n\n  .header__search {\n    margin-left: 0;\n  }\n\n  .sidenav {\n    position: relative;\n    transform: translateX(0);\n  }\n\n  .sidenav__close-icon {\n    visibility: hidden;\n  }\n}\n\n/* Medium screens breakpoint (1050px) */\n\n@media only screen and (min-width: 65.625em) {\n  /* Break out main cards into two columns */\n  .main-cards {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n}\n\n.title:hover {\n  cursor: pointer;\n  color: var(--ion-color-theme);\n}\n\n.seperator {\n  background: var(--ion-color-theme);\n  height: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9leHBlbnNlcy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9maXJlYmFzZS9leHBlbnNlcy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUNDRDs7QURFQTtFQUNDLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLG9CQUFBO0FDQ0Q7O0FEUUE7RUFDQyxpQkFBQTtFQUNBLDZDQUFBO0FDTEQ7O0FEUUE7RUFDQyxnQkFBQTtBQ0xEOztBRFFBO0VBQ0MsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0xEOztBRFFBO0VBQ0MsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0cseUJBQUE7QUNMSjs7QURRQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FDTEQ7O0FEUUE7RUFDQyxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNMRDs7QURRQTs7O0VBR0MsZ0JBQUE7RUFDQSxjQUFBO0FDTEQ7O0FEUUE7RUFDQyxlQUFB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QTtFQUNBLHlCQUFBO0FDM0NEOztBRCtDQSx3Q0FBQTs7QUFFQTtFQUNDLHFCQUFBO0VBQ0E7SUFHQyw4QkFBQTtJQUNBLHFFQUFBO0lBQ0EsNEJBQUE7WUFBQSxvQkFBQTtFQy9DQTs7RURpREQ7SUFDQyxjQUFBO0VDOUNBOztFRGdERDtJQUNDLGtCQUFBO0lBQ0Esd0JBQUE7RUM3Q0E7O0VEK0NEO0lBQ0Msa0JBQUE7RUM1Q0E7QUFDRjs7QURnREEsdUNBQUE7O0FBRUE7RUFDQywwQ0FBQTtFQUNBO0lBQ0Msb0JBQUE7U0FBQSxlQUFBO0VDL0NBO0FBQ0Y7O0FEa0RBO0VBQ0MsZUFBQTtFQUNBLDZCQUFBO0FDaEREOztBRG1EQTtFQUNDLGtDQUFBO0VBQ0EsV0FBQTtBQ2hERCIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL2V4cGVuc2VzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW52b2ljZSB7XG5cdHBhZGRpbmc6IDMwcHg7XG59XG5cbi5pbnZvaWNlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuXHRtaW4taGVpZ2h0OiA2ODBweDtcblx0cGFkZGluZzogMTVweFxufVxuXG4uaW52b2ljZSBoZWFkZXIge1xuXHRwYWRkaW5nOiAxMHB4IDA7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufVxuXG4uaW52b2ljZSAuY29tcGFueS1kZXRhaWxzIHtcblx0dGV4dC1hbGlnbjogcmlnaHRcbn1cblxuLmludm9pY2UgLmNvbXBhbnktZGV0YWlscyAubmFtZSB7XG5cdG1hcmdpbi10b3A6IDA7XG5cdG1hcmdpbi1ib3R0b206IDBcbn1cblxuLmludm9pY2UgLmNvbnRhY3RzIHtcblx0bWFyZ2luLWJvdHRvbTogMjBweFxufVxuXG4uaW52b2ljZSAuaW52b2ljZS10byB7XG5cdHRleHQtYWxpZ246IGxlZnRcbn1cblxuLmludm9pY2UgLmludm9pY2UtdG8gLnRvIHtcblx0bWFyZ2luLXRvcDogMDtcblx0bWFyZ2luLWJvdHRvbTogMFxufVxuXG4uaW52b2ljZSAuaW52b2ljZS1kZXRhaWxzIHtcblx0dGV4dC1hbGlnbjogcmlnaHRcbn1cblxuLmludm9pY2UgLmludm9pY2UtZGV0YWlscyAuaW52b2ljZS1pZCB7XG5cdG1hcmdpbi10b3A6IDA7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLmludm9pY2UgbWFpbiB7XG5cdHBhZGRpbmctYm90dG9tOiA1MHB4XG59XG5cbi5pbnZvaWNlIG1haW4gLnRoYW5rcyB7XG5cdC8vIG1hcmdpbi10b3A6IC0xMDBweDtcblx0Ly8gZm9udC1zaXplOiAyZW07XG5cdC8vIG1hcmdpbi1ib3R0b206IDUwcHhcbn1cblxuLmludm9pY2UgbWFpbiAubm90aWNlcyB7XG5cdHBhZGRpbmctbGVmdDogNnB4O1xuXHRib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59XG5cbi5pbnZvaWNlIG1haW4gLm5vdGljZXMgLm5vdGljZSB7XG5cdGZvbnQtc2l6ZTogMC44ZW1cbn1cblxuLmludm9pY2UgdGFibGUge1xuXHR3aWR0aDogMTAwJTtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG5cdG1hcmdpbi1ib3R0b206IDIwcHhcbn1cblxuLmludm9pY2UgdGFibGUgdGQge1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRjb2xvcjogZ3JheTtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG59XG5cbi5pbnZvaWNlIHRhYmxlIHRoIHtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0cGFkZGluZzogMTVweDtcblx0Zm9udC1zaXplOiA5cHQ7XG5cdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLmludm9pY2UgdGFibGUgdGQgaDMge1xuXHRtYXJnaW46IDA7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRmb250LXNpemU6IDlwdDtcbn1cblxuLmludm9pY2UgdGFibGUgLnF0eSxcbi5pbnZvaWNlIHRhYmxlIC50b3RhbCxcbi5pbnZvaWNlIHRhYmxlIC51bml0IHtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0Zm9udC1zaXplOiA5cHQ7XG59XG5cbi5pbnZvaWNlIHRhYmxlIC5ubyB7XG5cdGNvbG9yOiBkYXJrZ3JheTtcblx0Zm9udC1zaXplOiA5cHQ7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHQvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxucHJlIHtcblx0Zm9udC1zaXplOiA4cHQ7XG5cdHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufVxuXG4uaW52b2ljZSB0YWJsZSAucXR5IHtcblx0Ly8gcG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiA5OTk7XG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5pbnZvaWNlIHRhYmxlIC51bml0IHtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdC8vICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmludm9pY2UgdGFibGUgLnRvdGFsIHtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOiBkYXJrZ3JheTtcblx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0Ly8gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaW52b2ljZSB0YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkIHtcblx0Ym9yZGVyOiBub25lXG59XG5cbi5pbnZvaWNlIHRhYmxlIHRmb290IHRkIHtcblx0YmFja2dyb3VuZDogMCAwO1xuXHRib3JkZXItYm90dG9tOiBub25lO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0cGFkZGluZzogMTBweCAyMHB4O1xuXHRmb250LXNpemU6IDEuMmVtO1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2FhYVxufVxuXG4uaW52b2ljZSB0YWJsZSB0Zm9vdCB0cjpmaXJzdC1jaGlsZCB0ZCB7XG5cdGJvcmRlci10b3A6IG5vbmVcbn1cblxuLmludm9pY2UgdGFibGUgdGZvb3QgdHI6bGFzdC1jaGlsZCB0ZCB7XG5cdGNvbG9yOiAjMzk4OWM2O1xuXHRmb250LXNpemU6IDEuNGVtO1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgIzM5ODljNlxufVxuXG4uaW52b2ljZSB0YWJsZSB0Zm9vdCB0ciB0ZDpmaXJzdC1jaGlsZCB7XG5cdGJvcmRlcjogbm9uZVxufVxuXG4uaW52b2ljZSBmb290ZXIge1xuXHR3aWR0aDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogIzc3Nztcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWE7XG5cdHBhZGRpbmc6IDhweCAwXG59XG5cbkBtZWRpYSBwcmludCB7XG5cdC5pbnZvaWNlIHtcblx0XHRmb250LXNpemU6IDExcHghaW1wb3J0YW50O1xuXHRcdG92ZXJmbG93OiBoaWRkZW4haW1wb3J0YW50XG5cdH1cblx0Lmludm9pY2UgZm9vdGVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAxMHB4O1xuXHRcdHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5c1xuXHR9XG5cdC5pbnZvaWNlPmRpdjpsYXN0LWNoaWxkIHtcblx0XHRwYWdlLWJyZWFrLWJlZm9yZTogYWx3YXlzXG5cdH1cbn1cblxuLmludm9pY2VfbG9nbyB7XG5cdHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xufVxuXG5ib2R5IHtcblx0bWFyZ2luOiAwO1xuXHRmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG59XG5cbnNlY3Rpb24ge1xuXHRtYXJnaW46IDAgYXV0bztcblx0bWF4LXdpZHRoOiA2NjBweDtcblx0cGFkZGluZzogMCAyMHB4O1xufVxuXG5oMSB7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0YmFja2dyb3VuZDogI0Y0RjlGQTtcblx0d2lkdGg6IDUwJTtcblx0Y29sb3I6ICNGODQ2M0Y7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZzogMTBweCAyMHB4O1xuXHRtYXJnaW46IDIwcHggYXV0byA0MHB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbmgxOmJlZm9yZSxcbmgxOmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IC02cHg7XG5cdGJvcmRlcjogMThweCBzb2xpZCAjRENGNEY0O1xufVxuXG5oMTpiZWZvcmUge1xuXHRsZWZ0OiAtMzZweDtcblx0Ym9yZGVyLXJpZ2h0LXdpZHRoOiAxOHB4O1xuXHRib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmgxOmFmdGVyIHtcblx0cmlnaHQ6IC0zNnB4O1xuXHRib3JkZXItbGVmdC13aWR0aDogMThweDtcblx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaDEgc3BhbjpiZWZvcmUsXG5oMSBzcGFuOmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRib3JkZXItY29sb3I6ICNBN0NFQ0MgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG5cdHRvcDogLTZweDtcblx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuaDEgc3BhbjpiZWZvcmUge1xuXHRsZWZ0OiAwO1xuXHRib3JkZXItd2lkdGg6IDZweCAwIDAgNnB4O1xufVxuXG5oMSBzcGFuOmFmdGVyIHtcblx0cmlnaHQ6IDA7XG5cdGJvcmRlci13aWR0aDogNnB4IDZweCAwIDA7XG59XG5cbi5yaWJib24ge1xuXHQvLyBoZWlnaHQ6IDE4OHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdC8vIGJhY2tncm91bmQ6IHVybChodHRwczovL2h0bWw1Ym9vay5ydS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMC9zbm93LXJvYWQuanBnKTtcblx0Ly8gYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0Ly8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4ucmliYm9uMSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtNi4xcHg7XG5cdHJpZ2h0OiAxMHB4O1xufVxuXG4ucmliYm9uMTphZnRlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29udGVudDogXCJcIjtcblx0d2lkdGg6IDA7XG5cdGhlaWdodDogMDtcblx0Ym9yZGVyLWxlZnQ6IDUzcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yaWdodDogNTNweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXRvcDogMTBweCBzb2xpZCAjRjg0NjNGO1xufVxuXG4ucmliYm9uMSBzcGFuIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kOiAjRjg0NjNGO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGxpbmUtaGVpZ2h0OiAxO1xuXHRwYWRkaW5nOiAxMnB4IDhweCAxMHB4O1xuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuXHR3aWR0aDogOTBweDtcbn1cblxuLnJpYmJvbjEgc3BhbjpiZWZvcmUsXG4ucmliYm9uMSBzcGFuOmFmdGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRjb250ZW50OiBcIlwiO1xufVxuXG4ucmliYm9uMSBzcGFuOmJlZm9yZSB7XG5cdGhlaWdodDogNnB4O1xuXHR3aWR0aDogNnB4O1xuXHRsZWZ0OiAtNnB4O1xuXHR0b3A6IDA7XG5cdGJhY2tncm91bmQ6ICNGODQ2M0Y7XG59XG5cbi5yaWJib24xIHNwYW46YWZ0ZXIge1xuXHRoZWlnaHQ6IDZweDtcblx0d2lkdGg6IDhweDtcblx0bGVmdDogLThweDtcblx0dG9wOiAwO1xuXHRib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcblx0YmFja2dyb3VuZDogI0MwMjAzMTtcbn1cblxuLnJpYmJvbjIge1xuXHR3aWR0aDogNjBweDtcblx0cGFkZGluZzogMTBweCAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTZweDtcblx0bGVmdDogMjVweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG5cdGJhY2tncm91bmQ6ICNGNDc1MzA7XG59XG5cbi5yaWJib24yOmJlZm9yZSB7XG5cdGhlaWdodDogMDtcblx0d2lkdGg6IDA7XG5cdHJpZ2h0OiAtNS41cHg7XG5cdHRvcDogMC4xcHg7XG5cdGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjOEQ1QTIwO1xuXHRib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnJpYmJvbjI6YmVmb3JlLFxuLnJpYmJvbjI6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5yaWJib24yOmFmdGVyIHtcblx0aGVpZ2h0OiAwO1xuXHR3aWR0aDogMDtcblx0Ym90dG9tOiAtMjkuNXB4O1xuXHRsZWZ0OiAwO1xuXHRib3JkZXItbGVmdDogMzBweCBzb2xpZCAjRjQ3NTMwO1xuXHRib3JkZXItcmlnaHQ6IDMwcHggc29saWQgI0Y0NzUzMDtcblx0Ym9yZGVyLWJvdHRvbTogMzBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnJpYmJvbjMge1xuXHR3aWR0aDogMTUwcHg7XG5cdGhlaWdodDogNTBweDtcblx0bGluZS1oZWlnaHQ6IDUwcHg7XG5cdHBhZGRpbmctbGVmdDogMTVweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAtOHB4O1xuXHR0b3A6IDIwcHg7XG5cdGJhY2tncm91bmQ6ICM1OTMyNEM7XG59XG5cbi5yaWJib24zOmJlZm9yZSxcbi5yaWJib24zOmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmliYm9uMzpiZWZvcmUge1xuXHRoZWlnaHQ6IDA7XG5cdHdpZHRoOiAwO1xuXHR0b3A6IC04LjVweDtcblx0bGVmdDogMC4xcHg7XG5cdGJvcmRlci1ib3R0b206IDlweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLWxlZnQ6IDlweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnJpYmJvbjM6YWZ0ZXIge1xuXHRoZWlnaHQ6IDA7XG5cdHdpZHRoOiAwO1xuXHRyaWdodDogLTE0LjVweDtcblx0Ym9yZGVyLXRvcDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLWxlZnQ6IDE1cHggc29saWQgIzU5MzI0Qztcbn1cblxuLnJpYmJvbjQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTVweDtcblx0cGFkZGluZzogOHB4IDEwcHg7XG5cdGJhY2tncm91bmQ6ICMwMEIzRUQ7XG5cdGJveC1zaGFkb3c6IC0xcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIC4zKTtcbn1cblxuLnJpYmJvbjQ6YmVmb3JlLFxuLnJpYmJvbjQ6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5yaWJib240OmJlZm9yZSB7XG5cdHdpZHRoOiA3cHg7XG5cdGhlaWdodDogMTAwJTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAtNi41cHg7XG5cdHBhZGRpbmc6IDAgMCA3cHg7XG5cdGJhY2tncm91bmQ6IGluaGVyaXQ7XG5cdGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xufVxuXG4ucmliYm9uNDphZnRlciB7XG5cdHdpZHRoOiA1cHg7XG5cdGhlaWdodDogNXB4O1xuXHRib3R0b206IC01cHg7XG5cdGxlZnQ6IC00LjVweDtcblx0YmFja2dyb3VuZDogbGlnaHRibHVlO1xuXHRib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbn1cblxuLnJpYmJvbjUge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IGNhbGMoMTAwJSArIDIwcHgpO1xuXHRoZWlnaHQ6IDUwcHg7XG5cdGxpbmUtaGVpZ2h0OiA1MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbi1sZWZ0OiAtMTBweDtcblx0bWFyZ2luLXJpZ2h0OiAtMTBweDtcblx0YmFja2dyb3VuZDogI0VEQkExOTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDIwcHg7XG59XG5cbi5yaWJib241OmJlZm9yZSxcbi5yaWJib241OmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmliYm9uNTpiZWZvcmUge1xuXHRoZWlnaHQ6IDA7XG5cdHdpZHRoOiAwO1xuXHRib3R0b206IC0xMHB4O1xuXHRsZWZ0OiAwO1xuXHRib3JkZXItdG9wOiAxMHB4IHNvbGlkICNjZDhkMTE7XG5cdGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucmliYm9uNTphZnRlciB7XG5cdGhlaWdodDogMDtcblx0d2lkdGg6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IC0xMHB4O1xuXHRib3JkZXItdG9wOiAxMHB4IHNvbGlkICNjZDhkMTE7XG5cdGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLndyYXAge1xuXHR3aWR0aDogMTAwJTtcblx0Ly8gaGVpZ2h0OiAxODhweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHQvLyB0b3A6IC04cHg7XG5cdC8vIGxlZnQ6IDhweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndyYXA6YmVmb3JlLFxuLndyYXA6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi53cmFwOmJlZm9yZSB7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDhweDtcblx0cmlnaHQ6IDEwMHB4O1xuXHRiYWNrZ3JvdW5kOiAjNEQ2NTMwO1xuXHRib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XG59XG5cbi53cmFwOmFmdGVyIHtcblx0d2lkdGg6IDhweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHRyaWdodDogMHB4O1xuXHR0b3A6IDEwMHB4O1xuXHRiYWNrZ3JvdW5kOiAjNEQ2NTMwO1xuXHRib3JkZXItcmFkaXVzOiAwcHggOHB4IDhweCAwcHg7XG59XG5cbi5yaWJib242IHtcblx0d2lkdGg6IDIwMHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMzBweDtcblx0cmlnaHQ6IC01MHB4O1xuXHR6LWluZGV4OiAyO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHRib3JkZXI6IDFweCBkYXNoZWQ7XG5cdGJveC1zaGFkb3c6IDAgMCAwIDNweCAjNTdERDQzLCAwcHggMjFweCA1cHggLTE4cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuXHRiYWNrZ3JvdW5kOiAjNTdERDQzO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuXHQucmliYm9ucy13cmFwcGVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblx0Ly8gICAucmliYm9uIHtcblx0Ly8gICAgIHdpZHRoOiA0OCU7XG5cdC8vICAgfVxufVxuXG5ib2R5IHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRjb2xvcjogI2ZmZjtcblx0Ly8gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbi8qIEFzc2lnbiBncmlkIGluc3RydWN0aW9ucyB0byBvdXIgcGFyZW50IGdyaWQgY29udGFpbmVyLCBtb2JpbGUtZmlyc3QgKGhpZGUgdGhlIHNpZGVuYXYpICovXG5cbi5ncmlkLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA1MCUgNTAlIGF1dG87XG5cdGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnIgNTBweDtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlcicgJ3NpZGVuYXYnICdtYWluJyAnZm9vdGVyJztcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4ubWVudS1pY29uIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHQvKiBOZWVkcyB0byBzdGF5IHZpc2libGUgZm9yIGFsbCBtb2JpbGUgc2Nyb2xsaW5nICovXG5cdGRpc3BsYXk6IGZsZXg7XG5cdHRvcDogNXB4O1xuXHRsZWZ0OiAxMHB4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogI0RBREFFMztcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR6LWluZGV4OiAxO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHBhZGRpbmc6IDEycHg7XG59XG5cblxuLyogR2l2ZSBldmVyeSBjaGlsZCBlbGVtZW50IGl0cyBncmlkIG5hbWUgKi9cblxuLmhlYWRlciB7XG5cdGdyaWQtYXJlYTogaGVhZGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHBhZGRpbmc6IDAgMTZweDtcblx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cdGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xuXHRib3JkZXI6IDFweDtcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogIzY0OGNhNjtcbn1cblxuXG4vKiBNYWtlIHJvb20gZm9yIHRoZSBtZW51IGljb24gb24gbW9iaWxlICovXG5cbi5oZWFkZXJfX3NlYXJjaCB7XG5cdG1hcmdpbi1sZWZ0OiA0MnB4O1xufVxuXG4uc2lkZW5hdiB7XG5cdGdyaWQtYXJlYTogc2lkZW5hdjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Ly8gaGVpZ2h0OiAxNTAwcHg7XG5cdC8vIHdpZHRoOiAxMDAlO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cdC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMHB4KSAhaW1wb3J0YW50O1xuXHR0cmFuc2l0aW9uOiBhbGwgLjZzIGVhc2UtaW4tb3V0O1xuXHRib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcblx0ei1pbmRleDogMjtcblx0LyogTmVlZHMgdG8gc2l0IGFib3ZlIHRoZSBoYW1idXJnZXIgbWVudSBpY29uICovXG5cdC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2lkZW5hdi5hY3RpdmUge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5zaWRlbmF2X19jbG9zZS1pY29uIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHR0b3A6IDhweDtcblx0cmlnaHQ6IDEycHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbn1cblxuLnNpZGVuYXZfX2xpc3Qge1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDBweDtcblx0Ly8gIG1hcmdpbi10b3A6IDg1cHg7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnNpZGVuYXZfX2xpc3QtaXRlbSB7XG5cdC8vICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA0MHB4O1xuXHRwYWRkaW5nOiAxOHB4IDEwcHg7XG5cdGNvbG9yOiBkYXJrZ3JheTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRib3JkZXItYm90dG9tOiAxcHg7XG5cdGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xuXHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcblx0LmVzdGltYXRlbnVtYmVyIHtcblx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcblx0XHRmbG9hdDogbGVmdDtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdH1cblx0LmVzdGltYXRlbnVtYmVyOmhvdmVyIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdH1cblx0LmVzdGltYXRlZGF0ZSB7XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHR9XG5cdC5zdGF0dXMge1xuXHRcdGZsb2F0OiByaWdodDtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdH1cbn1cblxuLnNpZGVuYXZfX2xpc3QtaXRlbTpob3ZlciB7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRiYWNrZ3JvdW5kOiAjZThlOGU4ICFpbXBvcnRhbnQ7XG5cdC8vIGNvbG9yOiB3aGl0ZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFpbiB7XG5cdGdyaWQtYXJlYTogbWFpbjtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRvdmVyZmxvdy15OiBzY3JvbGw7XG5cdC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGZkNGQ5O1xuXHQvLyAgaGVpZ2h0OiAxMjAwcHg7XG59XG5cbi5tYWluLWhlYWRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Ly8gbWFyZ2luOiAyMHB4O1xuXHQvLyBwYWRkaW5nOiAyMHB4O1xuXHQvLyBoZWlnaHQ6IDE1MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYWZhO1xuXHRmb250LXNpemU6IDEzcHg7XG5cdC8vIGNvbG9yOiBzbGF0ZWdyYXk7XG59XG5cbi5tYWluLW92ZXJ2aWV3IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNjVweCwgMWZyKSk7XG5cdGdyaWQtYXV0by1yb3dzOiA5NHB4O1xuXHRncmlkLWdhcDogMjBweDtcblx0bWFyZ2luOiAyMHB4O1xufVxuXG4ub3ZlcnZpZXdjYXJkIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkMztcbn1cblxuLm1haW4tY2FyZHMge1xuXHRjb2x1bW4tY291bnQ6IDE7XG5cdGNvbHVtbi1nYXA6IDIwcHg7XG5cdG1hcmdpbjogMjBweDtcbn1cblxuLmNhcmQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzgyYmVmNjtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0LXdlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlOiBhdm9pZDtcblx0cGFkZGluZzogMjRweDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG4vKiBGb3JjZSB2YXJ5aW5nIGhlaWdodHMgdG8gc2ltdWxhdGUgZHluYW1pYyBjb250ZW50ICovXG5cbi5jYXJkOmZpcnN0LWNoaWxkIHtcblx0aGVpZ2h0OiA0ODVweDtcbn1cblxuLmNhcmQ6bnRoLWNoaWxkKDIpIHtcblx0aGVpZ2h0OiAyMDBweDtcbn1cblxuLmNhcmQ6bnRoLWNoaWxkKDMpIHtcblx0aGVpZ2h0OiAyNjVweDtcbn1cblxuLmZvb3RlciB7XG5cdGdyaWQtYXJlYTogZm9vdGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHBhZGRpbmc6IDAgMTZweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzY0OGNhNjtcbn1cblxuXG4vKiBOb24tbW9iaWxlIHN0eWxlcywgNzUwcHggYnJlYWtwb2ludCAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ2Ljg3NWVtKSB7XG5cdC8qIFNob3cgdGhlIHNpZGVuYXYgKi9cblx0LmdyaWQtY29udGFpbmVyIHtcblx0XHQvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM4OXB4IDFmcjtcblx0XHQvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA3MCU7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJSAxMDAlO1xuXHRcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2lkZW5hdiBoZWFkZXJcIiBcInNpZGVuYXYgbWFpblwiIFwic2lkZW5hdiBmb290ZXJcIjtcblx0XHRhbmltYXRpb246IGZhZGVJbiAycztcblx0fVxuXHQuaGVhZGVyX19zZWFyY2gge1xuXHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHR9XG5cdC5zaWRlbmF2IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXHR9XG5cdC5zaWRlbmF2X19jbG9zZS1pY29uIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cbn1cblxuXG4vKiBNZWRpdW0gc2NyZWVucyBicmVha3BvaW50ICgxMDUwcHgpICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUuNjI1ZW0pIHtcblx0LyogQnJlYWsgb3V0IG1haW4gY2FyZHMgaW50byB0d28gY29sdW1ucyAqL1xuXHQubWFpbi1jYXJkcyB7XG5cdFx0Y29sdW1uLWNvdW50OiAyO1xuXHR9XG59XG5cbi50aXRsZTpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59XG5cbi5zZXBlcmF0b3Ige1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRoZWlnaHQ6IDJweDtcbn0iLCIjaW52b2ljZSB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5pbnZvaWNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBtaW4taGVpZ2h0OiA2ODBweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmludm9pY2UgaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbn1cblxuLmludm9pY2UgLmNvbXBhbnktZGV0YWlscyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaW52b2ljZSAuY29tcGFueS1kZXRhaWxzIC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmludm9pY2UgLmNvbnRhY3RzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmludm9pY2UgLmludm9pY2UtdG8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaW52b2ljZSAuaW52b2ljZS10byAudG8ge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaW52b2ljZSAuaW52b2ljZS1kZXRhaWxzIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pbnZvaWNlIC5pbnZvaWNlLWRldGFpbHMgLmludm9pY2UtaWQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnZvaWNlIG1haW4ge1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLmludm9pY2UgbWFpbiAubm90aWNlcyB7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59XG5cbi5pbnZvaWNlIG1haW4gLm5vdGljZXMgLm5vdGljZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5pbnZvaWNlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW52b2ljZSB0YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBncmF5O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG59XG5cbi5pbnZvaWNlIHRhYmxlIHRoIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiA5cHQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmludm9pY2UgdGFibGUgdGQgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICBmb250LXNpemU6IDlwdDtcbn1cblxuLmludm9pY2UgdGFibGUgLnF0eSxcbi5pbnZvaWNlIHRhYmxlIC50b3RhbCxcbi5pbnZvaWNlIHRhYmxlIC51bml0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiA5cHQ7XG59XG5cbi5pbnZvaWNlIHRhYmxlIC5ubyB7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbiAgZm9udC1zaXplOiA5cHQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5wcmUge1xuICBmb250LXNpemU6IDhwdDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cbi5pbnZvaWNlIHRhYmxlIC5xdHkge1xuICB6LWluZGV4OiA5OTk7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5pbnZvaWNlIHRhYmxlIC51bml0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5pbnZvaWNlIHRhYmxlIC50b3RhbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogZGFya2dyYXk7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5pbnZvaWNlIHRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbnZvaWNlIHRhYmxlIHRmb290IHRkIHtcbiAgYmFja2dyb3VuZDogMCAwO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYTtcbn1cblxuLmludm9pY2UgdGFibGUgdGZvb3QgdHI6Zmlyc3QtY2hpbGQgdGQge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uaW52b2ljZSB0YWJsZSB0Zm9vdCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgY29sb3I6ICMzOTg5YzY7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzk4OWM2O1xufVxuXG4uaW52b2ljZSB0YWJsZSB0Zm9vdCB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmludm9pY2UgZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3Nzc7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhO1xuICBwYWRkaW5nOiA4cHggMDtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgLmludm9pY2Uge1xuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbnZvaWNlIGZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7XG4gIH1cblxuICAuaW52b2ljZSA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgICBwYWdlLWJyZWFrLWJlZm9yZTogYWx3YXlzO1xuICB9XG59XG4uaW52b2ljZV9sb2dvIHtcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNjYwcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNGNEY5RkE7XG4gIHdpZHRoOiA1MCU7XG4gIGNvbG9yOiAjRjg0NjNGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gNDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5oMTpiZWZvcmUsXG5oMTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICBib3JkZXI6IDE4cHggc29saWQgI0RDRjRGNDtcbn1cblxuaDE6YmVmb3JlIHtcbiAgbGVmdDogLTM2cHg7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMThweDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5oMTphZnRlciB7XG4gIHJpZ2h0OiAtMzZweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDE4cHg7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmgxIHNwYW46YmVmb3JlLFxuaDEgc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjQTdDRUNDIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICB0b3A6IC02cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbmgxIHNwYW46YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXdpZHRoOiA2cHggMCAwIDZweDtcbn1cblxuaDEgc3BhbjphZnRlciB7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItd2lkdGg6IDZweCA2cHggMCAwO1xufVxuXG4ucmliYm9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yaWJib24xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02LjFweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5yaWJib24xOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNGODQ2M0Y7XG59XG5cbi5yaWJib24xIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNGODQ2M0Y7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBhZGRpbmc6IDEycHggOHB4IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4ucmliYm9uMSBzcGFuOmJlZm9yZSxcbi5yaWJib24xIHNwYW46YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5yaWJib24xIHNwYW46YmVmb3JlIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiA2cHg7XG4gIGxlZnQ6IC02cHg7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogI0Y4NDYzRjtcbn1cblxuLnJpYmJvbjEgc3BhbjphZnRlciB7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogOHB4O1xuICBsZWZ0OiAtOHB4O1xuICB0b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xuICBiYWNrZ3JvdW5kOiAjQzAyMDMxO1xufVxuXG4ucmliYm9uMiB7XG4gIHdpZHRoOiA2MHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICBsZWZ0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI0Y0NzUzMDtcbn1cblxuLnJpYmJvbjI6YmVmb3JlIHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgcmlnaHQ6IC01LjVweDtcbiAgdG9wOiAwLjFweDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICM4RDVBMjA7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucmliYm9uMjpiZWZvcmUsXG4ucmliYm9uMjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnJpYmJvbjI6YWZ0ZXIge1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBib3R0b206IC0yOS41cHg7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkICNGNDc1MzA7XG4gIGJvcmRlci1yaWdodDogMzBweCBzb2xpZCAjRjQ3NTMwO1xuICBib3JkZXItYm90dG9tOiAzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucmliYm9uMyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC04cHg7XG4gIHRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogIzU5MzI0Qztcbn1cblxuLnJpYmJvbjM6YmVmb3JlLFxuLnJpYmJvbjM6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5yaWJib24zOmJlZm9yZSB7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHRvcDogLTguNXB4O1xuICBsZWZ0OiAwLjFweDtcbiAgYm9yZGVyLWJvdHRvbTogOXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItbGVmdDogOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucmliYm9uMzphZnRlciB7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHJpZ2h0OiAtMTQuNXB4O1xuICBib3JkZXItdG9wOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjNTkzMjRDO1xufVxuXG4ucmliYm9uNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYmFja2dyb3VuZDogIzAwQjNFRDtcbiAgYm94LXNoYWRvdzogLTFweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnJpYmJvbjQ6YmVmb3JlLFxuLnJpYmJvbjQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5yaWJib240OmJlZm9yZSB7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtNi41cHg7XG4gIHBhZGRpbmc6IDAgMCA3cHg7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xufVxuXG4ucmliYm9uNDphZnRlciB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBib3R0b206IC01cHg7XG4gIGxlZnQ6IC00LjVweDtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbn1cblxuLnJpYmJvbjUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDIwcHgpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgYmFja2dyb3VuZDogI0VEQkExOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG59XG5cbi5yaWJib241OmJlZm9yZSxcbi5yaWJib241OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmliYm9uNTpiZWZvcmUge1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBib3R0b206IC0xMHB4O1xuICBsZWZ0OiAwO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNjZDhkMTE7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucmliYm9uNTphZnRlciB7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC0xMHB4O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNjZDhkMTE7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLndyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud3JhcDpiZWZvcmUsXG4ud3JhcDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLndyYXA6YmVmb3JlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogOHB4O1xuICByaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICM0RDY1MzA7XG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbn1cblxuLndyYXA6YWZ0ZXIge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICM0RDY1MzA7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA4cHggOHB4IDBweDtcbn1cblxuLnJpYmJvbjYge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogLTUwcHg7XG4gIHotaW5kZXg6IDI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlcjogMXB4IGRhc2hlZDtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICM1N0RENDMsIDBweCAyMXB4IDVweCAtMThweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tncm91bmQ6ICM1N0RENDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5yaWJib25zLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIEFzc2lnbiBncmlkIGluc3RydWN0aW9ucyB0byBvdXIgcGFyZW50IGdyaWQgY29udGFpbmVyLCBtb2JpbGUtZmlyc3QgKGhpZGUgdGhlIHNpZGVuYXYpICovXG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNTAlIDUwJSBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyIDUwcHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyXCIgXCJzaWRlbmF2XCIgXCJtYWluXCIgXCJmb290ZXJcIjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWVudS1pY29uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBOZWVkcyB0byBzdGF5IHZpc2libGUgZm9yIGFsbCBtb2JpbGUgc2Nyb2xsaW5nICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBREFFMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi8qIEdpdmUgZXZlcnkgY2hpbGQgZWxlbWVudCBpdHMgZ3JpZCBuYW1lICovXG4uaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlcjogMXB4O1xufVxuXG4vKiBNYWtlIHJvb20gZm9yIHRoZSBtZW51IGljb24gb24gbW9iaWxlICovXG4uaGVhZGVyX19zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNDJweDtcbn1cblxuLnNpZGVuYXYge1xuICBncmlkLWFyZWE6IHNpZGVuYXY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB6LWluZGV4OiAyO1xuICAvKiBOZWVkcyB0byBzaXQgYWJvdmUgdGhlIGhhbWJ1cmdlciBtZW51IGljb24gKi9cbn1cblxuLnNpZGVuYXYuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4uc2lkZW5hdl9fY2xvc2UtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59XG5cbi5zaWRlbmF2X19saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnNpZGVuYXZfX2xpc3QtaXRlbSB7XG4gIHBhZGRpbmc6IDE4cHggMTBweDtcbiAgY29sb3I6IGRhcmtncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xufVxuLnNpZGVuYXZfX2xpc3QtaXRlbSAuZXN0aW1hdGVudW1iZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zaWRlbmF2X19saXN0LWl0ZW0gLmVzdGltYXRlbnVtYmVyOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNpZGVuYXZfX2xpc3QtaXRlbSAuZXN0aW1hdGVkYXRlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zaWRlbmF2X19saXN0LWl0ZW0gLnN0YXR1cyB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc2lkZW5hdl9fbGlzdC1pdGVtOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFpbiB7XG4gIGdyaWQtYXJlYTogbWFpbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5tYWluLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmFmYTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubWFpbi1vdmVydmlldyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjY1cHgsIDFmcikpO1xuICBncmlkLWF1dG8tcm93czogOTRweDtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLm92ZXJ2aWV3Y2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFpbi1jYXJkcyB7XG4gIGNvbHVtbi1jb3VudDogMTtcbiAgY29sdW1uLWdhcDogMjBweDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJiZWY2O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAtd2Via2l0LWNvbHVtbi1icmVhay1pbnNpZGU6IGF2b2lkO1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBGb3JjZSB2YXJ5aW5nIGhlaWdodHMgdG8gc2ltdWxhdGUgZHluYW1pYyBjb250ZW50ICovXG4uY2FyZDpmaXJzdC1jaGlsZCB7XG4gIGhlaWdodDogNDg1cHg7XG59XG5cbi5jYXJkOm50aC1jaGlsZCgyKSB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jYXJkOm50aC1jaGlsZCgzKSB7XG4gIGhlaWdodDogMjY1cHg7XG59XG5cbi5mb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDhjYTY7XG59XG5cbi8qIE5vbi1tb2JpbGUgc3R5bGVzLCA3NTBweCBicmVha3BvaW50ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ2Ljg3NWVtKSB7XG4gIC8qIFNob3cgdGhlIHNpZGVuYXYgKi9cbiAgLmdyaWQtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAlIDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlbmF2IGhlYWRlclwiIFwic2lkZW5hdiBtYWluXCIgXCJzaWRlbmF2IGZvb3RlclwiO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDJzO1xuICB9XG5cbiAgLmhlYWRlcl9fc2VhcmNoIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5zaWRlbmF2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG5cbiAgLnNpZGVuYXZfX2Nsb3NlLWljb24ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuLyogTWVkaXVtIHNjcmVlbnMgYnJlYWtwb2ludCAoMTA1MHB4KSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NS42MjVlbSkge1xuICAvKiBCcmVhayBvdXQgbWFpbiBjYXJkcyBpbnRvIHR3byBjb2x1bW5zICovXG4gIC5tYWluLWNhcmRzIHtcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gIH1cbn1cbi50aXRsZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59XG5cbi5zZXBlcmF0b3Ige1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICBoZWlnaHQ6IDJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/firebase/expenses/details/details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/firebase/expenses/details/details.page.ts ***!
  \***********************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../app/firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assets_estimatelist_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../assets/estimatelist.json */ "./src/assets/estimatelist.json");
var _assets_estimatelist_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../../assets/estimatelist.json */ "./src/assets/estimatelist.json", 1);
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");










let DetailsPage = class DetailsPage {
    constructor(authService, route, navCtrl, firebaseService) {
        this.authService = authService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.sideNav = false;
        this.quotesData = _assets_estimatelist_json__WEBPACK_IMPORTED_MODULE_7__;
        this.uid = this.authService.uid();
        this.email = this.authService.email();
        //    console.log('quotes data: ', this.quotesData);
    }
    onChange($event) {
        const file = $event.target['files'][0];
        console.log('file is: ', file);
        this.convertToBase64(file);
    }
    convertToBase64(file) {
        this.myimage = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"]((subscriber) => {
            this.readFile(file, subscriber);
        });
        this.myimage.subscribe(res => {
            console.log(res);
            this.base64Image = res;
        });
    }
    readFile(file, subscriber) {
        const filereader = new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload = () => {
            subscriber.next(filereader.result);
            subscriber.complete();
        };
        filereader.onerror = (error) => {
            subscriber.error(error);
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log(data);
            const result = JSON.parse(data.data);
            const results = JSON.parse(data.datas);
            this.estimateList = results;
            this.estimateDetail = result;
            console.log(this.estimateDetail);
        });
        this.getCompanyProfile();
        // this.getCustomerNotes();
        // this.getTermsandConditions();
    }
    returnSum() {
        console.log(this.estimateDetail, this.estimateDetail.salesList);
        return this.estimateDetail.salesList.reduce((sum, i) => {
            console.log(i.get('amount').value);
            if (i.get('amount').value) {
                console.log(i);
            }
            sum += parseFloat(i.get('amount').value);
            return sum;
        }, 0);
    }
    handleInputChange() {
        this.totalPrice = this.returnSum();
        console.log(this.totalPrice);
    }
    createPDF() {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__();
        // ?????????????????????
        doc.addFont('SourceHanSans-Normal.ttf', 'SourceHanSans-Normal', 'normal');
        doc.setFont('SourceHanSans-Normal');
        doc.text(20, 20, '?????????????????????????????????English???????????????????????????');
        doc.save('my.pdf');
    }
    testtablePDF(value) {
        console.log(value);
        //   var doc = new jsPDF('p', 'pt');
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__();
        // ?????????????????????
        doc.addFont('SourceHanSans-Normal.ttf', 'SourceHanSans-Normal', 'normal');
        doc.setFont('SourceHanSans-Normal');
        // doc.text(20, 20, '?????????????????????????????????English???????????????????????????');
        // A4 297mm x 210mm
        doc.setFontSize(12);
        doc.text(120, 20, 'Quotation');
        doc.setFontSize(10);
        doc.text(120, 24, value["Estimate Number"].toString());
        doc.setFontSize(10);
        doc.text(120, 30, 'Total');
        doc.setFontSize(13);
        doc.text(120, 35, 'HKD'.concat(value['Total'].toString()));
        // logo
        var width = (doc.internal.pageSize.getWidth()) / 6;
        var height = (doc.internal.pageSize.getHeight()) / 9;
        doc.addImage(this.base64Image, 'JPEG', 15, 10, width, height);
        // doc.addImage(base64Img, 'JPEG', 10, 10, 60, 20);
        // before body
        doc.autoTable({
            styles: {
                font: 'SourceHanSans-Normal',
                fontSize: 8,
                //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
                overflow: 'ellipsize',
                halign: 'left',
                cellPadding: 1
                //   fillColor: [255, 0, 0]
            },
            theme: 'plain',
            html: '#billto',
            margin: {
                top: 40
            }
        });
        // doc.autoTable({
        //   styles: {
        //     font: 'SourceHanSans-Normal',
        //     fontSize: 8,
        //     //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
        //     overflow: 'ellipsize',
        //     halign: 'left',
        //     cellPadding: 3
        //     //   fillColor: [255, 0, 0]
        //   },
        //   theme: 'plain',
        //   html: '#companyprofile',
        //   margin: {
        //     top: 40
        //   }
        // })
        // A4 297mm x 210mm
        // body
        var res = doc.autoTableHtmlToJson(document.getElementById("my-table"));
        console.log(res);
        var columns = [res.columns[0], res.columns[1], res.columns[2], res.columns[3], res.columns[4], res.columns[5]];
        res.data.splice(0, 1);
        doc.autoTable(columns, res.data, {
            headStyles: {
            //  fillColor: [0, 0, 0],
            //  fontSize: 11
            },
            bodyStyles: {
            //  fillColor: [216, 216, 216],
            //  textColor: 50
            },
            alternateRowStyles: {
            //  fillColor: [250, 250, 250]
            },
            //    startY: 60,
            styles: {
                font: 'SourceHanSans-Normal',
                fontSize: 8,
                //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
                overflow: 'linebreak',
                halign: 'left',
                cellPadding: 3,
            },
            columnStyles: {
                0: { cellWidth: 10 },
                1: { cellWidth: 30 },
                2: { cellWidth: 65 },
                3: { cellWidth: 17 },
                4: { cellWidth: 30 },
                5: { cellWidth: 30 },
            },
            drawRow: function (row, data) {
                doc.setFontStyle('bold');
                doc.setFontSize(10);
                if ((row.raw[0]).hasClass("innerHeader")) {
                    doc.setTextColor(200, 0, 0);
                    doc.setFillColor(110, 214, 84);
                    doc.rect(data.settings.margin.left, row.y, data.table.width, 20, 'F');
                    doc.autoTableText("", data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
                        halign: 'center',
                        valign: 'middle'
                    });
                }
                ;
                if (row.index % 5 === 0) {
                    var posY = row.y + row.height * 6 + data.settings.margin.bottom;
                    if (posY > doc.internal.pageSize.height) {
                        data.addPage();
                    }
                }
            },
            drawCell: function (cell, data) {
                // Rowspan
                console.log(cell);
                if ((cell.raw).hasClass("innerHeader")) {
                    doc.setTextColor(200, 0, 0);
                    doc.autoTableText(cell.text + '', data.settings.margin.left + data.table.width / 2, data.row.y + data.row.height / 2, {
                        halign: 'center',
                        valign: 'middle'
                    });
                    return false;
                }
            }
        });
        //    notes
        doc.autoTable({
            styles: {
                font: 'SourceHanSans-Normal',
                fontSize: 7,
                //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
                overflow: 'linebreak',
                halign: 'left',
                cellPadding: 4
                //   fillColor: [255, 0, 0]
            },
            columnStyles: {
                0: { cellWidth: 60 },
            },
            html: '#notes'
        });
        doc.autoTable({
            styles: {
                font: 'SourceHanSans-Normal',
                fontSize: 7,
                //  overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' = 'normal'
                overflow: 'linebreak',
                halign: 'left',
                cellPadding: 4
                //   fillColor: [255, 0, 0]
            },
            columnStyles: { europe: { font: 'SourceHanSans-Normal' } },
            body: [{ europe: `${value['Terms & Conditions']}` }],
            columns: [
                { header: 'Terms & Conditions', dataKey: 'europe' },
            ],
        });
        doc.save(`${value["Estimate ID"]}.pdf`);
    }
    showSideNav(value) {
        console.log(value);
        if (value == true) {
            document.getElementById("grid-container").style.gridTemplateColumns = "0% 100%";
        }
        else {
            document.getElementById("grid-container").style.gridTemplateColumns = "30% auto";
        }
    }
    onDismiss() {
        this.navCtrl.back();
    }
    getCompanyProfile() {
        console.log(this.email, this.uid);
        this.firebaseService.readCompanyProfile(this.uid).subscribe(res => {
            console.log(res['userData']);
            this.companyprofile = res['userData'];
            this.companyemail = res['userData']['company_email'];
            this.companyaddress = res['userData']['address'];
            this.company_name = res['userData']['company_name'];
            this.website = res['userData']['website'];
            this.logo_base64Image = res['userData']['logo_base64Image'];
            this.base64Image = this.logo_base64Image;
            console.log(this.base64Image);
        });
    }
    // getCustomerNotes() {
    //   console.log(this.email, this.uid);
    //   this.firebaseService.readCustomerNote(this.uid).subscribe(res => {
    //     console.log(res['userData']);
    //     this.customernotes = res['userData']['customernotes'];
    //   })
    // }
    // getTermsandConditions() {
    //   console.log(this.email, this.uid);
    //   this.firebaseService.readTermsandConditions(this.uid).subscribe(res => {
    //     console.log(res['userData']);
    //     this.termsandconditions = res['userData']['termsandconditions'];
    //   })
    // }
    updateEstimate() {
        console.log(this.email, this.uid, this.estimateDetail);
        const data = JSON.stringify(this.estimateDetail);
        console.log(data);
        const navigationExtras = {
            queryParams: {
                data: data,
                email: this.email,
                uid: this.uid
            }
        };
        this.navCtrl.navigateRoot(["/firebase/update#expenses"], navigationExtras);
    }
    deleteItem() {
        console.log(this.estimateDetail, this.email, this.uid);
        this.firebaseService.deleteEstimates(this.estimateDetail.id, this.uid, this.email).then(() => {
            this.onDismiss();
        });
    }
    returnProduct(x, y) {
        return x * y;
    }
    convertToInvoice(value) {
        console.log('my id :', this.email, this.uid);
        console.log(value);
        //   this.navCtrl.navigateForward(["/firebase/create#invoices"]);
        const data = JSON.stringify(value);
        const navigationExtras = {
            queryParams: {
                data: data
            }
        };
        this.navCtrl.navigateRoot(["/firebase/create#invoices"], navigationExtras);
    }
};
DetailsPage.ctorParameters = () => [
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] }
];
DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/expenses/details/details.page.html"),
        styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/firebase/expenses/details/details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=firebase-expenses-details-details-module-es2015.js.map