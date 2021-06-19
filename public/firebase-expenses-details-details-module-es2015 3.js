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

module.exports = "#invoice {\n  padding: 30px;\n}\n\n.invoice {\n  position: relative;\n  background-color: #FFF;\n  min-height: 680px;\n  padding: 15px;\n}\n\n.invoice header {\n  padding: 10px 0;\n  margin-bottom: 20px;\n  border-bottom: 1px solid var(--ion-color-theme);\n}\n\n.invoice .company-details {\n  text-align: right;\n}\n\n.invoice .company-details .name {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.invoice .contacts {\n  margin-bottom: 20px;\n}\n\n.invoice .invoice-to {\n  text-align: left;\n}\n\n.invoice .invoice-to .to {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.invoice .invoice-details {\n  text-align: right;\n}\n\n.invoice .invoice-details .invoice-id {\n  margin-top: 0;\n  color: white;\n}\n\n.invoice main {\n  padding-bottom: 50px;\n}\n\n.invoice main .notices {\n  padding-left: 6px;\n  border-left: 6px solid var(--ion-color-theme);\n}\n\n.invoice main .notices .notice {\n  font-size: 0.8em;\n}\n\n.invoice table {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin-bottom: 20px;\n}\n\n.invoice table td {\n  padding: 10px;\n  color: gray;\n  background: white;\n  border-bottom: 1px solid #fff;\n  white-space: break-spaces;\n}\n\n.invoice table th {\n  white-space: nowrap;\n  text-align: left;\n  font-weight: 400;\n  padding: 15px;\n  font-size: 9pt;\n  background: var(--ion-color-theme);\n  color: white;\n}\n\n.invoice table td h3 {\n  margin: 0;\n  font-weight: 400;\n  color: var(--ion-color-theme);\n  font-size: 9pt;\n}\n\n.invoice table .qty,\n.invoice table .total,\n.invoice table .unit {\n  text-align: left;\n  font-size: 9pt;\n}\n\n.invoice table .no {\n  color: darkgray;\n  font-size: 9pt;\n  background: white;\n  vertical-align: top;\n}\n\npre {\n  font-size: 8pt;\n  white-space: pre-line !important;\n}\n\n.invoice table .qty {\n  z-index: 999;\n  vertical-align: top;\n}\n\n.invoice table .unit {\n  background: white;\n  vertical-align: top;\n}\n\n.invoice table .total {\n  background: white;\n  color: darkgray;\n  vertical-align: top;\n}\n\n.invoice table tbody tr:last-child td {\n  border: none;\n}\n\n.invoice table tfoot td {\n  background: 0 0;\n  border-bottom: none;\n  white-space: nowrap;\n  text-align: right;\n  padding: 10px 20px;\n  font-size: 1.2em;\n  border-top: 1px solid #aaa;\n}\n\n.invoice table tfoot tr:first-child td {\n  border-top: none;\n}\n\n.invoice table tfoot tr:last-child td {\n  color: #3989c6;\n  font-size: 1.4em;\n  border-top: 1px solid #3989c6;\n}\n\n.invoice table tfoot tr td:first-child {\n  border: none;\n}\n\n.invoice footer {\n  width: 100%;\n  text-align: center;\n  color: #777;\n  border-top: 1px solid #aaa;\n  padding: 8px 0;\n}\n\n@media print {\n  .invoice {\n    font-size: 11px !important;\n    overflow: hidden !important;\n  }\n\n  .invoice footer {\n    position: absolute;\n    bottom: 10px;\n    page-break-after: always;\n  }\n\n  .invoice > div:last-child {\n    page-break-before: always;\n  }\n}\n\n.invoice_logo {\n  width: 150px !important;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\nsection {\n  margin: 0 auto;\n  max-width: 660px;\n  padding: 0 20px;\n}\n\nh1 {\n  font-weight: normal;\n  position: relative;\n  background: #F4F9FA;\n  width: 50%;\n  color: #F8463F;\n  text-align: center;\n  padding: 10px 20px;\n  margin: 20px auto 40px;\n  text-transform: uppercase;\n  border-radius: 2px;\n}\n\nh1:before,\nh1:after {\n  content: \"\";\n  position: absolute;\n  top: -6px;\n  border: 18px solid #DCF4F4;\n}\n\nh1:before {\n  left: -36px;\n  border-right-width: 18px;\n  border-left-color: transparent;\n}\n\nh1:after {\n  right: -36px;\n  border-left-width: 18px;\n  border-right-color: transparent;\n}\n\nh1 span:before,\nh1 span:after {\n  content: \"\";\n  position: absolute;\n  border-style: solid;\n  border-color: #A7CECC transparent transparent transparent;\n  top: -6px;\n  transform: rotate(180deg);\n}\n\nh1 span:before {\n  left: 0;\n  border-width: 6px 0 0 6px;\n}\n\nh1 span:after {\n  right: 0;\n  border-width: 6px 6px 0 0;\n}\n\n.ribbon {\n  position: relative;\n  margin-bottom: 30px;\n  color: white;\n}\n\n.ribbon1 {\n  position: absolute;\n  top: -6.1px;\n  right: 10px;\n}\n\n.ribbon1:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-left: 53px solid transparent;\n  border-right: 53px solid transparent;\n  border-top: 10px solid #F8463F;\n}\n\n.ribbon1 span {\n  position: relative;\n  display: block;\n  text-align: center;\n  background: #F8463F;\n  font-size: 14px;\n  line-height: 1;\n  padding: 12px 8px 10px;\n  border-top-right-radius: 8px;\n  width: 90px;\n}\n\n.ribbon1 span:before,\n.ribbon1 span:after {\n  position: absolute;\n  content: \"\";\n}\n\n.ribbon1 span:before {\n  height: 6px;\n  width: 6px;\n  left: -6px;\n  top: 0;\n  background: #F8463F;\n}\n\n.ribbon1 span:after {\n  height: 6px;\n  width: 8px;\n  left: -8px;\n  top: 0;\n  border-radius: 8px 8px 0 0;\n  background: #C02031;\n}\n\n.ribbon2 {\n  width: 60px;\n  padding: 10px 0;\n  position: absolute;\n  top: -6px;\n  left: 25px;\n  text-align: center;\n  border-top-left-radius: 3px;\n  background: #F47530;\n}\n\n.ribbon2:before {\n  height: 0;\n  width: 0;\n  right: -5.5px;\n  top: 0.1px;\n  border-bottom: 6px solid #8D5A20;\n  border-right: 6px solid transparent;\n}\n\n.ribbon2:before,\n.ribbon2:after {\n  content: \"\";\n  position: absolute;\n}\n\n.ribbon2:after {\n  height: 0;\n  width: 0;\n  bottom: -29.5px;\n  left: 0;\n  border-left: 30px solid #F47530;\n  border-right: 30px solid #F47530;\n  border-bottom: 30px solid transparent;\n}\n\n.ribbon3 {\n  width: 150px;\n  height: 50px;\n  line-height: 50px;\n  padding-left: 15px;\n  position: absolute;\n  left: -8px;\n  top: 20px;\n  background: #59324C;\n}\n\n.ribbon3:before,\n.ribbon3:after {\n  content: \"\";\n  position: absolute;\n}\n\n.ribbon3:before {\n  height: 0;\n  width: 0;\n  top: -8.5px;\n  left: 0.1px;\n  border-bottom: 9px solid black;\n  border-left: 9px solid transparent;\n}\n\n.ribbon3:after {\n  height: 0;\n  width: 0;\n  right: -14.5px;\n  border-top: 25px solid transparent;\n  border-bottom: 25px solid transparent;\n  border-left: 15px solid #59324C;\n}\n\n.ribbon4 {\n  position: absolute;\n  top: 15px;\n  padding: 8px 10px;\n  background: #00B3ED;\n  box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.3);\n}\n\n.ribbon4:before,\n.ribbon4:after {\n  content: \"\";\n  position: absolute;\n}\n\n.ribbon4:before {\n  width: 7px;\n  height: 100%;\n  top: 0;\n  left: -6.5px;\n  padding: 0 0 7px;\n  background: inherit;\n  border-radius: 5px 0 0 5px;\n}\n\n.ribbon4:after {\n  width: 5px;\n  height: 5px;\n  bottom: -5px;\n  left: -4.5px;\n  background: lightblue;\n  border-radius: 5px 0 0 5px;\n}\n\n.ribbon5 {\n  display: block;\n  width: calc(100% + 20px);\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  margin-left: -10px;\n  margin-right: -10px;\n  background: #EDBA19;\n  position: relative;\n  top: 20px;\n}\n\n.ribbon5:before,\n.ribbon5:after {\n  content: \"\";\n  position: absolute;\n}\n\n.ribbon5:before {\n  height: 0;\n  width: 0;\n  bottom: -10px;\n  left: 0;\n  border-top: 10px solid #cd8d11;\n  border-left: 10px solid transparent;\n}\n\n.ribbon5:after {\n  height: 0;\n  width: 0;\n  right: 0;\n  bottom: -10px;\n  border-top: 10px solid #cd8d11;\n  border-right: 10px solid transparent;\n}\n\n.wrap {\n  width: 100%;\n  position: absolute;\n  overflow: hidden;\n}\n\n.wrap:before,\n.wrap:after {\n  content: \"\";\n  position: absolute;\n}\n\n.wrap:before {\n  width: 40px;\n  height: 8px;\n  right: 100px;\n  background: #4D6530;\n  border-radius: 8px 8px 0px 0px;\n}\n\n.wrap:after {\n  width: 8px;\n  height: 40px;\n  right: 0px;\n  top: 100px;\n  background: #4D6530;\n  border-radius: 0px 8px 8px 0px;\n}\n\n.ribbon6 {\n  width: 200px;\n  height: 40px;\n  line-height: 40px;\n  position: absolute;\n  top: 30px;\n  right: -50px;\n  z-index: 2;\n  overflow: hidden;\n  transform: rotate(45deg);\n  border: 1px dashed;\n  box-shadow: 0 0 0 3px #57DD43, 0px 21px 5px -18px rgba(0, 0, 0, 0.6);\n  background: #57DD43;\n  text-align: center;\n}\n\n@media (min-width: 500px) {\n  .ribbons-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  color: #fff;\n  box-sizing: border-box;\n}\n\n/* Assign grid instructions to our parent grid container, mobile-first (hide the sidenav) */\n\n.grid-container {\n  display: grid;\n  grid-template-columns: auto 50% 50% auto;\n  grid-template-rows: 50px 1fr 50px;\n  grid-template-areas: \"header\" \"sidenav\" \"main\" \"footer\";\n  height: 100%;\n}\n\n.menu-icon {\n  position: fixed;\n  /* Needs to stay visible for all mobile scrolling */\n  display: flex;\n  top: 5px;\n  left: 10px;\n  align-items: center;\n  justify-content: center;\n  background-color: #DADAE3;\n  border-radius: 50%;\n  z-index: 1;\n  cursor: pointer;\n  padding: 12px;\n}\n\n/* Give every child element its grid name */\n\n.header {\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  border-bottom-style: solid;\n  border-color: lightgray;\n  border: 1px;\n}\n\n/* Make room for the menu icon on mobile */\n\n.header__search {\n  margin-left: 42px;\n}\n\n.sidenav {\n  grid-area: sidenav;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  overflow-y: auto;\n  transition: all 0.6s ease-in-out;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\n  z-index: 2;\n  /* Needs to sit above the hamburger menu icon */\n}\n\n.sidenav.active {\n  transform: translateX(0);\n}\n\n.sidenav__close-icon {\n  position: absolute;\n  visibility: visible;\n  top: 8px;\n  right: 12px;\n  cursor: pointer;\n  font-size: 20px;\n  color: var(--ion-color-theme);\n}\n\n.sidenav__list {\n  padding: 0;\n  margin: 0px;\n  list-style-type: none;\n}\n\n.sidenav__list-item {\n  padding: 18px 10px;\n  color: darkgray;\n  font-size: 14px;\n  border-bottom: 1px;\n  border-color: lightgray;\n  border-bottom-style: solid;\n}\n\n.sidenav__list-item .estimatenumber {\n  color: var(--ion-color-theme);\n  float: left;\n  font-size: 12px;\n}\n\n.sidenav__list-item .estimatenumber:hover {\n  color: white;\n}\n\n.sidenav__list-item .estimatedate {\n  float: left;\n  font-size: 12px;\n}\n\n.sidenav__list-item .status {\n  float: right;\n  font-size: 12px;\n}\n\n.sidenav__list-item:hover {\n  color: var(--ion-color-theme);\n  background: #e8e8e8 !important;\n  cursor: pointer;\n}\n\n.main {\n  grid-area: main;\n  width: 100%;\n  background: white;\n  overflow-y: scroll;\n}\n\n.main-header {\n  display: flex;\n  justify-content: space-between;\n  background-color: #fbfafa;\n  font-size: 13px;\n}\n\n.main-overview {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));\n  grid-auto-rows: 94px;\n  grid-gap: 20px;\n  margin: 20px;\n}\n\n.overviewcard {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  height: 100%;\n}\n\n.main-cards {\n  -moz-column-count: 1;\n       column-count: 1;\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n  margin: 20px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background-color: #82bef6;\n  margin-bottom: 20px;\n  -webkit-column-break-inside: avoid;\n  padding: 24px;\n  box-sizing: border-box;\n}\n\n/* Force varying heights to simulate dynamic content */\n\n.card:first-child {\n  height: 485px;\n}\n\n.card:nth-child(2) {\n  height: 200px;\n}\n\n.card:nth-child(3) {\n  height: 265px;\n}\n\n.footer {\n  grid-area: footer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  background-color: #648ca6;\n}\n\n/* Non-mobile styles, 750px breakpoint */\n\n@media only screen and (min-width: 46.875em) {\n  /* Show the sidenav */\n  .grid-container {\n    grid-template-columns: 0% 100%;\n    grid-template-areas: \"sidenav header\" \"sidenav main\" \"sidenav footer\";\n    animation: fadeIn 2s;\n  }\n\n  .header__search {\n    margin-left: 0;\n  }\n\n  .sidenav {\n    position: relative;\n    transform: translateX(0);\n  }\n\n  .sidenav__close-icon {\n    visibility: hidden;\n  }\n}\n\n/* Medium screens breakpoint (1050px) */\n\n@media only screen and (min-width: 65.625em) {\n  /* Break out main cards into two columns */\n  .main-cards {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n}\n\n.title:hover {\n  cursor: pointer;\n  color: var(--ion-color-theme);\n}\n\n.seperator {\n  background: var(--ion-color-theme);\n  height: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9leHBlbnNlcy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9maXJlYmFzZS9leHBlbnNlcy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUNDRDs7QURFQTtFQUNDLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLG9CQUFBO0FDQ0Q7O0FEUUE7RUFDQyxpQkFBQTtFQUNBLDZDQUFBO0FDTEQ7O0FEUUE7RUFDQyxnQkFBQTtBQ0xEOztBRFFBO0VBQ0MsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0xEOztBRFFBO0VBQ0MsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0cseUJBQUE7QUNMSjs7QURRQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FDTEQ7O0FEUUE7RUFDQyxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNMRDs7QURRQTs7O0VBR0MsZ0JBQUE7RUFDQSxjQUFBO0FDTEQ7O0FEUUE7RUFDQyxlQUFB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QTtFQUNBLHlCQUFBO0FDM0NEOztBRCtDQSx3Q0FBQTs7QUFFQTtFQUNDLHFCQUFBO0VBQ0E7SUFHQyw4QkFBQTtJQUNBLHFFQUFBO0lBQ0Esb0JBQUE7RUMvQ0E7O0VEaUREO0lBQ0MsY0FBQTtFQzlDQTs7RURnREQ7SUFDQyxrQkFBQTtJQUNBLHdCQUFBO0VDN0NBOztFRCtDRDtJQUNDLGtCQUFBO0VDNUNBO0FBQ0Y7O0FEZ0RBLHVDQUFBOztBQUVBO0VBQ0MsMENBQUE7RUFDQTtJQUNDLG9CQUFBO1NBQUEsZUFBQTtFQy9DQTtBQUNGOztBRGtEQTtFQUNDLGVBQUE7RUFDQSw2QkFBQTtBQ2hERDs7QURtREE7RUFDQyxrQ0FBQTtFQUNBLFdBQUE7QUNoREQiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9leHBlbnNlcy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ludm9pY2Uge1xuXHRwYWRkaW5nOiAzMHB4O1xufVxuXG4uaW52b2ljZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcblx0bWluLWhlaWdodDogNjgwcHg7XG5cdHBhZGRpbmc6IDE1cHhcbn1cblxuLmludm9pY2UgaGVhZGVyIHtcblx0cGFkZGluZzogMTBweCAwO1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbn1cblxuLmludm9pY2UgLmNvbXBhbnktZGV0YWlscyB7XG5cdHRleHQtYWxpZ246IHJpZ2h0XG59XG5cbi5pbnZvaWNlIC5jb21wYW55LWRldGFpbHMgLm5hbWUge1xuXHRtYXJnaW4tdG9wOiAwO1xuXHRtYXJnaW4tYm90dG9tOiAwXG59XG5cbi5pbnZvaWNlIC5jb250YWN0cyB7XG5cdG1hcmdpbi1ib3R0b206IDIwcHhcbn1cblxuLmludm9pY2UgLmludm9pY2UtdG8ge1xuXHR0ZXh0LWFsaWduOiBsZWZ0XG59XG5cbi5pbnZvaWNlIC5pbnZvaWNlLXRvIC50byB7XG5cdG1hcmdpbi10b3A6IDA7XG5cdG1hcmdpbi1ib3R0b206IDBcbn1cblxuLmludm9pY2UgLmludm9pY2UtZGV0YWlscyB7XG5cdHRleHQtYWxpZ246IHJpZ2h0XG59XG5cbi5pbnZvaWNlIC5pbnZvaWNlLWRldGFpbHMgLmludm9pY2UtaWQge1xuXHRtYXJnaW4tdG9wOiAwO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5pbnZvaWNlIG1haW4ge1xuXHRwYWRkaW5nLWJvdHRvbTogNTBweFxufVxuXG4uaW52b2ljZSBtYWluIC50aGFua3Mge1xuXHQvLyBtYXJnaW4tdG9wOiAtMTAwcHg7XG5cdC8vIGZvbnQtc2l6ZTogMmVtO1xuXHQvLyBtYXJnaW4tYm90dG9tOiA1MHB4XG59XG5cbi5pbnZvaWNlIG1haW4gLm5vdGljZXMge1xuXHRwYWRkaW5nLWxlZnQ6IDZweDtcblx0Ym9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufVxuXG4uaW52b2ljZSBtYWluIC5ub3RpY2VzIC5ub3RpY2Uge1xuXHRmb250LXNpemU6IDAuOGVtXG59XG5cbi5pbnZvaWNlIHRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4XG59XG5cbi5pbnZvaWNlIHRhYmxlIHRkIHtcblx0cGFkZGluZzogMTBweDtcblx0Y29sb3I6IGdyYXk7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuXG4uaW52b2ljZSB0YWJsZSB0aCB7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdGZvbnQtc2l6ZTogOXB0O1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5pbnZvaWNlIHRhYmxlIHRkIGgzIHtcblx0bWFyZ2luOiAwO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcblx0Zm9udC1zaXplOiA5cHQ7XG59XG5cbi5pbnZvaWNlIHRhYmxlIC5xdHksXG4uaW52b2ljZSB0YWJsZSAudG90YWwsXG4uaW52b2ljZSB0YWJsZSAudW5pdCB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdGZvbnQtc2l6ZTogOXB0O1xufVxuXG4uaW52b2ljZSB0YWJsZSAubm8ge1xuXHRjb2xvcjogZGFya2dyYXk7XG5cdGZvbnQtc2l6ZTogOXB0O1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0Ly8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbnByZSB7XG5cdGZvbnQtc2l6ZTogOHB0O1xuXHR3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbn1cblxuLmludm9pY2UgdGFibGUgLnF0eSB7XG5cdC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogOTk5O1xuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uaW52b2ljZSB0YWJsZSAudW5pdCB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHQvLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5pbnZvaWNlIHRhYmxlIC50b3RhbCB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRjb2xvcjogZGFya2dyYXk7XG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdC8vICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmludm9pY2UgdGFibGUgdGJvZHkgdHI6bGFzdC1jaGlsZCB0ZCB7XG5cdGJvcmRlcjogbm9uZVxufVxuXG4uaW52b2ljZSB0YWJsZSB0Zm9vdCB0ZCB7XG5cdGJhY2tncm91bmQ6IDAgMDtcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdHBhZGRpbmc6IDEwcHggMjBweDtcblx0Zm9udC1zaXplOiAxLjJlbTtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWFcbn1cblxuLmludm9pY2UgdGFibGUgdGZvb3QgdHI6Zmlyc3QtY2hpbGQgdGQge1xuXHRib3JkZXItdG9wOiBub25lXG59XG5cbi5pbnZvaWNlIHRhYmxlIHRmb290IHRyOmxhc3QtY2hpbGQgdGQge1xuXHRjb2xvcjogIzM5ODljNjtcblx0Zm9udC1zaXplOiAxLjRlbTtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICMzOTg5YzZcbn1cblxuLmludm9pY2UgdGFibGUgdGZvb3QgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuXHRib3JkZXI6IG5vbmVcbn1cblxuLmludm9pY2UgZm9vdGVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICM3Nzc7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhO1xuXHRwYWRkaW5nOiA4cHggMFxufVxuXG5AbWVkaWEgcHJpbnQge1xuXHQuaW52b2ljZSB7XG5cdFx0Zm9udC1zaXplOiAxMXB4IWltcG9ydGFudDtcblx0XHRvdmVyZmxvdzogaGlkZGVuIWltcG9ydGFudFxuXHR9XG5cdC5pbnZvaWNlIGZvb3RlciB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogMTBweDtcblx0XHRwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXNcblx0fVxuXHQuaW52b2ljZT5kaXY6bGFzdC1jaGlsZCB7XG5cdFx0cGFnZS1icmVhay1iZWZvcmU6IGFsd2F5c1xuXHR9XG59XG5cbi5pbnZvaWNlX2xvZ28ge1xuXHR3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG5cdG1hcmdpbjogMDtcblx0Zm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xufVxuXG5zZWN0aW9uIHtcblx0bWFyZ2luOiAwIGF1dG87XG5cdG1heC13aWR0aDogNjYwcHg7XG5cdHBhZGRpbmc6IDAgMjBweDtcbn1cblxuaDEge1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJhY2tncm91bmQ6ICNGNEY5RkE7XG5cdHdpZHRoOiA1MCU7XG5cdGNvbG9yOiAjRjg0NjNGO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDEwcHggMjBweDtcblx0bWFyZ2luOiAyMHB4IGF1dG8gNDBweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5oMTpiZWZvcmUsXG5oMTphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtNnB4O1xuXHRib3JkZXI6IDE4cHggc29saWQgI0RDRjRGNDtcbn1cblxuaDE6YmVmb3JlIHtcblx0bGVmdDogLTM2cHg7XG5cdGJvcmRlci1yaWdodC13aWR0aDogMThweDtcblx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5oMTphZnRlciB7XG5cdHJpZ2h0OiAtMzZweDtcblx0Ym9yZGVyLWxlZnQtd2lkdGg6IDE4cHg7XG5cdGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmgxIHNwYW46YmVmb3JlLFxuaDEgc3BhbjphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0Ym9yZGVyLWNvbG9yOiAjQTdDRUNDIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuXHR0b3A6IC02cHg7XG5cdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbmgxIHNwYW46YmVmb3JlIHtcblx0bGVmdDogMDtcblx0Ym9yZGVyLXdpZHRoOiA2cHggMCAwIDZweDtcbn1cblxuaDEgc3BhbjphZnRlciB7XG5cdHJpZ2h0OiAwO1xuXHRib3JkZXItd2lkdGg6IDZweCA2cHggMCAwO1xufVxuXG4ucmliYm9uIHtcblx0Ly8gaGVpZ2h0OiAxODhweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHQvLyBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9odG1sNWJvb2sucnUvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMTAvc25vdy1yb2FkLmpwZyk7XG5cdC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJpYmJvbjEge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTYuMXB4O1xuXHRyaWdodDogMTBweDtcbn1cblxuLnJpYmJvbjE6YWZ0ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHdpZHRoOiAwO1xuXHRoZWlnaHQ6IDA7XG5cdGJvcmRlci1sZWZ0OiA1M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmlnaHQ6IDUzcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci10b3A6IDEwcHggc29saWQgI0Y4NDYzRjtcbn1cblxuLnJpYmJvbjEgc3BhbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZDogI0Y4NDYzRjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMTtcblx0cGFkZGluZzogMTJweCA4cHggMTBweDtcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcblx0d2lkdGg6IDkwcHg7XG59XG5cbi5yaWJib24xIHNwYW46YmVmb3JlLFxuLnJpYmJvbjEgc3BhbjphZnRlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29udGVudDogXCJcIjtcbn1cblxuLnJpYmJvbjEgc3BhbjpiZWZvcmUge1xuXHRoZWlnaHQ6IDZweDtcblx0d2lkdGg6IDZweDtcblx0bGVmdDogLTZweDtcblx0dG9wOiAwO1xuXHRiYWNrZ3JvdW5kOiAjRjg0NjNGO1xufVxuXG4ucmliYm9uMSBzcGFuOmFmdGVyIHtcblx0aGVpZ2h0OiA2cHg7XG5cdHdpZHRoOiA4cHg7XG5cdGxlZnQ6IC04cHg7XG5cdHRvcDogMDtcblx0Ym9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG5cdGJhY2tncm91bmQ6ICNDMDIwMzE7XG59XG5cbi5yaWJib24yIHtcblx0d2lkdGg6IDYwcHg7XG5cdHBhZGRpbmc6IDEwcHggMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IC02cHg7XG5cdGxlZnQ6IDI1cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuXHRiYWNrZ3JvdW5kOiAjRjQ3NTMwO1xufVxuXG4ucmliYm9uMjpiZWZvcmUge1xuXHRoZWlnaHQ6IDA7XG5cdHdpZHRoOiAwO1xuXHRyaWdodDogLTUuNXB4O1xuXHR0b3A6IDAuMXB4O1xuXHRib3JkZXItYm90dG9tOiA2cHggc29saWQgIzhENUEyMDtcblx0Ym9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5yaWJib24yOmJlZm9yZSxcbi5yaWJib24yOmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmliYm9uMjphZnRlciB7XG5cdGhlaWdodDogMDtcblx0d2lkdGg6IDA7XG5cdGJvdHRvbTogLTI5LjVweDtcblx0bGVmdDogMDtcblx0Ym9yZGVyLWxlZnQ6IDMwcHggc29saWQgI0Y0NzUzMDtcblx0Ym9yZGVyLXJpZ2h0OiAzMHB4IHNvbGlkICNGNDc1MzA7XG5cdGJvcmRlci1ib3R0b206IDMwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5yaWJib24zIHtcblx0d2lkdGg6IDE1MHB4O1xuXHRoZWlnaHQ6IDUwcHg7XG5cdGxpbmUtaGVpZ2h0OiA1MHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogLThweDtcblx0dG9wOiAyMHB4O1xuXHRiYWNrZ3JvdW5kOiAjNTkzMjRDO1xufVxuXG4ucmliYm9uMzpiZWZvcmUsXG4ucmliYm9uMzphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnJpYmJvbjM6YmVmb3JlIHtcblx0aGVpZ2h0OiAwO1xuXHR3aWR0aDogMDtcblx0dG9wOiAtOC41cHg7XG5cdGxlZnQ6IDAuMXB4O1xuXHRib3JkZXItYm90dG9tOiA5cHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1sZWZ0OiA5cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5yaWJib24zOmFmdGVyIHtcblx0aGVpZ2h0OiAwO1xuXHR3aWR0aDogMDtcblx0cmlnaHQ6IC0xNC41cHg7XG5cdGJvcmRlci10b3A6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1ib3R0b206IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICM1OTMyNEM7XG59XG5cbi5yaWJib240IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDE1cHg7XG5cdHBhZGRpbmc6IDhweCAxMHB4O1xuXHRiYWNrZ3JvdW5kOiAjMDBCM0VEO1xuXHRib3gtc2hhZG93OiAtMXB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAuMyk7XG59XG5cbi5yaWJib240OmJlZm9yZSxcbi5yaWJib240OmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmliYm9uNDpiZWZvcmUge1xuXHR3aWR0aDogN3B4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRvcDogMDtcblx0bGVmdDogLTYuNXB4O1xuXHRwYWRkaW5nOiAwIDAgN3B4O1xuXHRiYWNrZ3JvdW5kOiBpbmhlcml0O1xuXHRib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbn1cblxuLnJpYmJvbjQ6YWZ0ZXIge1xuXHR3aWR0aDogNXB4O1xuXHRoZWlnaHQ6IDVweDtcblx0Ym90dG9tOiAtNXB4O1xuXHRsZWZ0OiAtNC41cHg7XG5cdGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG59XG5cbi5yaWJib241IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcblx0aGVpZ2h0OiA1MHB4O1xuXHRsaW5lLWhlaWdodDogNTBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tbGVmdDogLTEwcHg7XG5cdG1hcmdpbi1yaWdodDogLTEwcHg7XG5cdGJhY2tncm91bmQ6ICNFREJBMTk7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAyMHB4O1xufVxuXG4ucmliYm9uNTpiZWZvcmUsXG4ucmliYm9uNTphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnJpYmJvbjU6YmVmb3JlIHtcblx0aGVpZ2h0OiAwO1xuXHR3aWR0aDogMDtcblx0Ym90dG9tOiAtMTBweDtcblx0bGVmdDogMDtcblx0Ym9yZGVyLXRvcDogMTBweCBzb2xpZCAjY2Q4ZDExO1xuXHRib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnJpYmJvbjU6YWZ0ZXIge1xuXHRoZWlnaHQ6IDA7XG5cdHdpZHRoOiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAtMTBweDtcblx0Ym9yZGVyLXRvcDogMTBweCBzb2xpZCAjY2Q4ZDExO1xuXHRib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi53cmFwIHtcblx0d2lkdGg6IDEwMCU7XG5cdC8vIGhlaWdodDogMTg4cHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ly8gdG9wOiAtOHB4O1xuXHQvLyBsZWZ0OiA4cHg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53cmFwOmJlZm9yZSxcbi53cmFwOmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ud3JhcDpiZWZvcmUge1xuXHR3aWR0aDogNDBweDtcblx0aGVpZ2h0OiA4cHg7XG5cdHJpZ2h0OiAxMDBweDtcblx0YmFja2dyb3VuZDogIzRENjUzMDtcblx0Ym9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xufVxuXG4ud3JhcDphZnRlciB7XG5cdHdpZHRoOiA4cHg7XG5cdGhlaWdodDogNDBweDtcblx0cmlnaHQ6IDBweDtcblx0dG9wOiAxMDBweDtcblx0YmFja2dyb3VuZDogIzRENjUzMDtcblx0Ym9yZGVyLXJhZGl1czogMHB4IDhweCA4cHggMHB4O1xufVxuXG4ucmliYm9uNiB7XG5cdHdpZHRoOiAyMDBweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHRsaW5lLWhlaWdodDogNDBweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDMwcHg7XG5cdHJpZ2h0OiAtNTBweDtcblx0ei1pbmRleDogMjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0Ym9yZGVyOiAxcHggZGFzaGVkO1xuXHRib3gtc2hhZG93OiAwIDAgMCAzcHggIzU3REQ0MywgMHB4IDIxcHggNXB4IC0xOHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcblx0YmFja2dyb3VuZDogIzU3REQ0Mztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcblx0LnJpYmJvbnMtd3JhcHBlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdC8vICAgLnJpYmJvbiB7XG5cdC8vICAgICB3aWR0aDogNDglO1xuXHQvLyAgIH1cbn1cblxuYm9keSB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Y29sb3I6ICNmZmY7XG5cdC8vICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG4vKiBBc3NpZ24gZ3JpZCBpbnN0cnVjdGlvbnMgdG8gb3VyIHBhcmVudCBncmlkIGNvbnRhaW5lciwgbW9iaWxlLWZpcnN0IChoaWRlIHRoZSBzaWRlbmF2KSAqL1xuXG4uZ3JpZC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNTAlIDUwJSBhdXRvO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyIDUwcHg7XG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdoZWFkZXInICdzaWRlbmF2JyAnbWFpbicgJ2Zvb3Rlcic7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuLm1lbnUtaWNvbiB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0LyogTmVlZHMgdG8gc3RheSB2aXNpYmxlIGZvciBhbGwgbW9iaWxlIHNjcm9sbGluZyAqL1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR0b3A6IDVweDtcblx0bGVmdDogMTBweDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6ICNEQURBRTM7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0ei1pbmRleDogMTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRwYWRkaW5nOiAxMnB4O1xufVxuXG5cbi8qIEdpdmUgZXZlcnkgY2hpbGQgZWxlbWVudCBpdHMgZ3JpZCBuYW1lICovXG5cbi5oZWFkZXIge1xuXHRncmlkLWFyZWE6IGhlYWRlcjtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRwYWRkaW5nOiAwIDE2cHg7XG5cdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuXHRib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcblx0Ym9yZGVyOiAxcHg7XG5cdC8vIGJhY2tncm91bmQtY29sb3I6ICM2NDhjYTY7XG59XG5cblxuLyogTWFrZSByb29tIGZvciB0aGUgbWVudSBpY29uIG9uIG1vYmlsZSAqL1xuXG4uaGVhZGVyX19zZWFyY2gge1xuXHRtYXJnaW4tbGVmdDogNDJweDtcbn1cblxuLnNpZGVuYXYge1xuXHRncmlkLWFyZWE6IHNpZGVuYXY7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdC8vIGhlaWdodDogMTUwMHB4O1xuXHQvLyB3aWR0aDogMTAwJTtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXHQvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTBweCkgIWltcG9ydGFudDtcblx0dHJhbnNpdGlvbjogYWxsIC42cyBlYXNlLWluLW91dDtcblx0Ym94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG5cdHotaW5kZXg6IDI7XG5cdC8qIE5lZWRzIHRvIHNpdCBhYm92ZSB0aGUgaGFtYnVyZ2VyIG1lbnUgaWNvbiAqL1xuXHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNpZGVuYXYuYWN0aXZlIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4uc2lkZW5hdl9fY2xvc2UtaWNvbiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0dG9wOiA4cHg7XG5cdHJpZ2h0OiAxMnB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59XG5cbi5zaWRlbmF2X19saXN0IHtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwcHg7XG5cdC8vICBtYXJnaW4tdG9wOiA4NXB4O1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5zaWRlbmF2X19saXN0LWl0ZW0ge1xuXHQvLyAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNDBweDtcblx0cGFkZGluZzogMThweCAxMHB4O1xuXHRjb2xvcjogZGFya2dyYXk7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4O1xuXHRib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcblx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cdC5lc3RpbWF0ZW51bWJlciB7XG5cdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHR9XG5cdC5lc3RpbWF0ZW51bWJlcjpob3ZlciB7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHR9XG5cdC5lc3RpbWF0ZWRhdGUge1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0fVxuXHQuc3RhdHVzIHtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHR9XG59XG5cbi5zaWRlbmF2X19saXN0LWl0ZW06aG92ZXIge1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcblx0YmFja2dyb3VuZDogI2U4ZThlOCAhaW1wb3J0YW50O1xuXHQvLyBjb2xvcjogd2hpdGU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW4ge1xuXHRncmlkLWFyZWE6IG1haW47XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXHQvLyAgYmFja2dyb3VuZC1jb2xvcjogIzhmZDRkOTtcblx0Ly8gIGhlaWdodDogMTIwMHB4O1xufVxuXG4ubWFpbi1oZWFkZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdC8vIG1hcmdpbjogMjBweDtcblx0Ly8gcGFkZGluZzogMjBweDtcblx0Ly8gaGVpZ2h0OiAxNTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZiZmFmYTtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHQvLyBjb2xvcjogc2xhdGVncmF5O1xufVxuXG4ubWFpbi1vdmVydmlldyB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjY1cHgsIDFmcikpO1xuXHRncmlkLWF1dG8tcm93czogOTRweDtcblx0Z3JpZC1nYXA6IDIwcHg7XG5cdG1hcmdpbjogMjBweDtcbn1cblxuLm92ZXJ2aWV3Y2FyZCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0cGFkZGluZzogMjBweDtcblx0aGVpZ2h0OiAxMDAlO1xuXHQvLyAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDM7XG59XG5cbi5tYWluLWNhcmRzIHtcblx0Y29sdW1uLWNvdW50OiAxO1xuXHRjb2x1bW4tZ2FwOiAyMHB4O1xuXHRtYXJnaW46IDIwcHg7XG59XG5cbi5jYXJkIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICM4MmJlZjY7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdC13ZWJraXQtY29sdW1uLWJyZWFrLWluc2lkZTogYXZvaWQ7XG5cdHBhZGRpbmc6IDI0cHg7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuLyogRm9yY2UgdmFyeWluZyBoZWlnaHRzIHRvIHNpbXVsYXRlIGR5bmFtaWMgY29udGVudCAqL1xuXG4uY2FyZDpmaXJzdC1jaGlsZCB7XG5cdGhlaWdodDogNDg1cHg7XG59XG5cbi5jYXJkOm50aC1jaGlsZCgyKSB7XG5cdGhlaWdodDogMjAwcHg7XG59XG5cbi5jYXJkOm50aC1jaGlsZCgzKSB7XG5cdGhlaWdodDogMjY1cHg7XG59XG5cbi5mb290ZXIge1xuXHRncmlkLWFyZWE6IGZvb3Rlcjtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRwYWRkaW5nOiAwIDE2cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICM2NDhjYTY7XG59XG5cblxuLyogTm9uLW1vYmlsZSBzdHlsZXMsIDc1MHB4IGJyZWFrcG9pbnQgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0Ni44NzVlbSkge1xuXHQvKiBTaG93IHRoZSBzaWRlbmF2ICovXG5cdC5ncmlkLWNvbnRhaW5lciB7XG5cdFx0Ly8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzODlweCAxZnI7XG5cdFx0Ly8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNzAlO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCUgMTAwJTtcblx0XHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcInNpZGVuYXYgaGVhZGVyXCIgXCJzaWRlbmF2IG1haW5cIiBcInNpZGVuYXYgZm9vdGVyXCI7XG5cdFx0YW5pbWF0aW9uOiBmYWRlSW4gMnM7XG5cdH1cblx0LmhlYWRlcl9fc2VhcmNoIHtcblx0XHRtYXJnaW4tbGVmdDogMDtcblx0fVxuXHQuc2lkZW5hdiB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0fVxuXHQuc2lkZW5hdl9fY2xvc2UtaWNvbiB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG59XG5cblxuLyogTWVkaXVtIHNjcmVlbnMgYnJlYWtwb2ludCAoMTA1MHB4KSAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1LjYyNWVtKSB7XG5cdC8qIEJyZWFrIG91dCBtYWluIGNhcmRzIGludG8gdHdvIGNvbHVtbnMgKi9cblx0Lm1haW4tY2FyZHMge1xuXHRcdGNvbHVtbi1jb3VudDogMjtcblx0fVxufVxuXG4udGl0bGU6aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufVxuXG4uc2VwZXJhdG9yIHtcblx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcblx0aGVpZ2h0OiAycHg7XG59IiwiI2ludm9pY2Uge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uaW52b2ljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgbWluLWhlaWdodDogNjgwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5pbnZvaWNlIGhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59XG5cbi5pbnZvaWNlIC5jb21wYW55LWRldGFpbHMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmludm9pY2UgLmNvbXBhbnktZGV0YWlscyAubmFtZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pbnZvaWNlIC5jb250YWN0cyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbnZvaWNlIC5pbnZvaWNlLXRvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmludm9pY2UgLmludm9pY2UtdG8gLnRvIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmludm9pY2UgLmludm9pY2UtZGV0YWlscyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaW52b2ljZSAuaW52b2ljZS1kZXRhaWxzIC5pbnZvaWNlLWlkIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW52b2ljZSBtYWluIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5pbnZvaWNlIG1haW4gLm5vdGljZXMge1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufVxuXG4uaW52b2ljZSBtYWluIC5ub3RpY2VzIC5ub3RpY2Uge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uaW52b2ljZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmludm9pY2UgdGFibGUgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuXG4uaW52b2ljZSB0YWJsZSB0aCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnZvaWNlIHRhYmxlIHRkIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgZm9udC1zaXplOiA5cHQ7XG59XG5cbi5pbnZvaWNlIHRhYmxlIC5xdHksXG4uaW52b2ljZSB0YWJsZSAudG90YWwsXG4uaW52b2ljZSB0YWJsZSAudW5pdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogOXB0O1xufVxuXG4uaW52b2ljZSB0YWJsZSAubm8ge1xuICBjb2xvcjogZGFya2dyYXk7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxucHJlIHtcbiAgZm9udC1zaXplOiA4cHQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufVxuXG4uaW52b2ljZSB0YWJsZSAucXR5IHtcbiAgei1pbmRleDogOTk5O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uaW52b2ljZSB0YWJsZSAudW5pdCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uaW52b2ljZSB0YWJsZSAudG90YWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGRhcmtncmF5O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uaW52b2ljZSB0YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaW52b2ljZSB0YWJsZSB0Zm9vdCB0ZCB7XG4gIGJhY2tncm91bmQ6IDAgMDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWE7XG59XG5cbi5pbnZvaWNlIHRhYmxlIHRmb290IHRyOmZpcnN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmludm9pY2UgdGFibGUgdGZvb3QgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGNvbG9yOiAjMzk4OWM2O1xuICBmb250LXNpemU6IDEuNGVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzM5ODljNjtcbn1cblxuLmludm9pY2UgdGFibGUgdGZvb3QgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbnZvaWNlIGZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzc3O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYTtcbiAgcGFkZGluZzogOHB4IDA7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5pbnZvaWNlIHtcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW52b2ljZSBmb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xuICB9XG5cbiAgLmludm9pY2UgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgcGFnZS1icmVhay1iZWZvcmU6IGFsd2F5cztcbiAgfVxufVxuLmludm9pY2VfbG9nbyB7XG4gIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbn1cblxuc2VjdGlvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDY2MHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjRjRGOUZBO1xuICB3aWR0aDogNTAlO1xuICBjb2xvcjogI0Y4NDYzRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuaDE6YmVmb3JlLFxuaDE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgYm9yZGVyOiAxOHB4IHNvbGlkICNEQ0Y0RjQ7XG59XG5cbmgxOmJlZm9yZSB7XG4gIGxlZnQ6IC0zNnB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDE4cHg7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaDE6YWZ0ZXIge1xuICByaWdodDogLTM2cHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxOHB4O1xuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5oMSBzcGFuOmJlZm9yZSxcbmgxIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI0E3Q0VDQyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgdG9wOiAtNnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5oMSBzcGFuOmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci13aWR0aDogNnB4IDAgMCA2cHg7XG59XG5cbmgxIHNwYW46YWZ0ZXIge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXdpZHRoOiA2cHggNnB4IDAgMDtcbn1cblxuLnJpYmJvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmliYm9uMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNi4xcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ucmliYm9uMTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDUzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjRjg0NjNGO1xufVxuXG4ucmliYm9uMSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRjg0NjNGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwYWRkaW5nOiAxMnB4IDhweCAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICB3aWR0aDogOTBweDtcbn1cblxuLnJpYmJvbjEgc3BhbjpiZWZvcmUsXG4ucmliYm9uMSBzcGFuOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4ucmliYm9uMSBzcGFuOmJlZm9yZSB7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogNnB4O1xuICBsZWZ0OiAtNnB4O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICNGODQ2M0Y7XG59XG5cbi5yaWJib24xIHNwYW46YWZ0ZXIge1xuICBoZWlnaHQ6IDZweDtcbiAgd2lkdGg6IDhweDtcbiAgbGVmdDogLThweDtcbiAgdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgYmFja2dyb3VuZDogI0MwMjAzMTtcbn1cblxuLnJpYmJvbjIge1xuICB3aWR0aDogNjBweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNGNDc1MzA7XG59XG5cbi5yaWJib24yOmJlZm9yZSB7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHJpZ2h0OiAtNS41cHg7XG4gIHRvcDogMC4xcHg7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjOEQ1QTIwO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnJpYmJvbjI6YmVmb3JlLFxuLnJpYmJvbjI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5yaWJib24yOmFmdGVyIHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgYm90dG9tOiAtMjkuNXB4O1xuICBsZWZ0OiAwO1xuICBib3JkZXItbGVmdDogMzBweCBzb2xpZCAjRjQ3NTMwO1xuICBib3JkZXItcmlnaHQ6IDMwcHggc29saWQgI0Y0NzUzMDtcbiAgYm9yZGVyLWJvdHRvbTogMzBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnJpYmJvbjMge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOHB4O1xuICB0b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM1OTMyNEM7XG59XG5cbi5yaWJib24zOmJlZm9yZSxcbi5yaWJib24zOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmliYm9uMzpiZWZvcmUge1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICB0b3A6IC04LjVweDtcbiAgbGVmdDogMC4xcHg7XG4gIGJvcmRlci1ib3R0b206IDlweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWxlZnQ6IDlweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnJpYmJvbjM6YWZ0ZXIge1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICByaWdodDogLTE0LjVweDtcbiAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgIzU5MzI0Qztcbn1cblxuLnJpYmJvbjQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwMEIzRUQ7XG4gIGJveC1zaGFkb3c6IC0xcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5yaWJib240OmJlZm9yZSxcbi5yaWJib240OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmliYm9uNDpiZWZvcmUge1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTYuNXB4O1xuICBwYWRkaW5nOiAwIDAgN3B4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbn1cblxuLnJpYmJvbjQ6YWZ0ZXIge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm90dG9tOiAtNXB4O1xuICBsZWZ0OiAtNC41cHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG59XG5cbi5yaWJib241IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIGJhY2tncm91bmQ6ICNFREJBMTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xufVxuXG4ucmliYm9uNTpiZWZvcmUsXG4ucmliYm9uNTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnJpYmJvbjU6YmVmb3JlIHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgYm90dG9tOiAtMTBweDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjY2Q4ZDExO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnJpYmJvbjU6YWZ0ZXIge1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAtMTBweDtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjY2Q4ZDExO1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi53cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndyYXA6YmVmb3JlLFxuLndyYXA6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi53cmFwOmJlZm9yZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgcmlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNEQ2NTMwO1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XG59XG5cbi53cmFwOmFmdGVyIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICByaWdodDogMHB4O1xuICB0b3A6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNEQ2NTMwO1xuICBib3JkZXItcmFkaXVzOiAwcHggOHB4IDhweCAwcHg7XG59XG5cbi5yaWJib242IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IC01MHB4O1xuICB6LWluZGV4OiAyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXI6IDFweCBkYXNoZWQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjNTdERDQzLCAwcHggMjFweCA1cHggLTE4cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZ3JvdW5kOiAjNTdERDQzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAucmliYm9ucy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBBc3NpZ24gZ3JpZCBpbnN0cnVjdGlvbnMgdG8gb3VyIHBhcmVudCBncmlkIGNvbnRhaW5lciwgbW9iaWxlLWZpcnN0IChoaWRlIHRoZSBzaWRlbmF2KSAqL1xuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDUwJSA1MCUgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmciA1MHB4O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlclwiIFwic2lkZW5hdlwiIFwibWFpblwiIFwiZm9vdGVyXCI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1lbnUtaWNvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogTmVlZHMgdG8gc3RheSB2aXNpYmxlIGZvciBhbGwgbW9iaWxlIHNjcm9sbGluZyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICB0b3A6IDVweDtcbiAgbGVmdDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQURBRTM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4vKiBHaXZlIGV2ZXJ5IGNoaWxkIGVsZW1lbnQgaXRzIGdyaWQgbmFtZSAqL1xuLmhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xuICBib3JkZXI6IDFweDtcbn1cblxuLyogTWFrZSByb29tIGZvciB0aGUgbWVudSBpY29uIG9uIG1vYmlsZSAqL1xuLmhlYWRlcl9fc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XG59XG5cbi5zaWRlbmF2IHtcbiAgZ3JpZC1hcmVhOiBzaWRlbmF2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgei1pbmRleDogMjtcbiAgLyogTmVlZHMgdG8gc2l0IGFib3ZlIHRoZSBoYW1idXJnZXIgbWVudSBpY29uICovXG59XG5cbi5zaWRlbmF2LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLnNpZGVuYXZfX2Nsb3NlLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufVxuXG4uc2lkZW5hdl9fbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5zaWRlbmF2X19saXN0LWl0ZW0ge1xuICBwYWRkaW5nOiAxOHB4IDEwcHg7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbn1cbi5zaWRlbmF2X19saXN0LWl0ZW0gLmVzdGltYXRlbnVtYmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uc2lkZW5hdl9fbGlzdC1pdGVtIC5lc3RpbWF0ZW51bWJlcjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zaWRlbmF2X19saXN0LWl0ZW0gLmVzdGltYXRlZGF0ZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uc2lkZW5hdl9fbGlzdC1pdGVtIC5zdGF0dXMge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnNpZGVuYXZfX2xpc3QtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubWFpbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZhZmE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm1haW4tb3ZlcnZpZXcge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI2NXB4LCAxZnIpKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IDk0cHg7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5vdmVydmlld2NhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1haW4tY2FyZHMge1xuICBjb2x1bW4tY291bnQ6IDE7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyYmVmNjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLXdlYmtpdC1jb2x1bW4tYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogRm9yY2UgdmFyeWluZyBoZWlnaHRzIHRvIHNpbXVsYXRlIGR5bmFtaWMgY29udGVudCAqL1xuLmNhcmQ6Zmlyc3QtY2hpbGQge1xuICBoZWlnaHQ6IDQ4NXB4O1xufVxuXG4uY2FyZDpudGgtY2hpbGQoMikge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uY2FyZDpudGgtY2hpbGQoMykge1xuICBoZWlnaHQ6IDI2NXB4O1xufVxuXG4uZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ4Y2E2O1xufVxuXG4vKiBOb24tbW9iaWxlIHN0eWxlcywgNzUwcHggYnJlYWtwb2ludCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0Ni44NzVlbSkge1xuICAvKiBTaG93IHRoZSBzaWRlbmF2ICovXG4gIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJSAxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2lkZW5hdiBoZWFkZXJcIiBcInNpZGVuYXYgbWFpblwiIFwic2lkZW5hdiBmb290ZXJcIjtcbiAgICBhbmltYXRpb246IGZhZGVJbiAycztcbiAgfVxuXG4gIC5oZWFkZXJfX3NlYXJjaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAuc2lkZW5hdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuXG4gIC5zaWRlbmF2X19jbG9zZS1pY29uIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cbi8qIE1lZGl1bSBzY3JlZW5zIGJyZWFrcG9pbnQgKDEwNTBweCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUuNjI1ZW0pIHtcbiAgLyogQnJlYWsgb3V0IG1haW4gY2FyZHMgaW50byB0d28gY29sdW1ucyAqL1xuICAubWFpbi1jYXJkcyB7XG4gICAgY29sdW1uLWNvdW50OiAyO1xuICB9XG59XG4udGl0bGU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufVxuXG4uc2VwZXJhdG9yIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgaGVpZ2h0OiAycHg7XG59Il19 */"

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
        // 添加并设置字体
        doc.addFont('SourceHanSans-Normal.ttf', 'SourceHanSans-Normal', 'normal');
        doc.setFont('SourceHanSans-Normal');
        doc.text(20, 20, '简体中文、繁體体中文、English、ジャパン、한국어');
        doc.save('my.pdf');
    }
    testtablePDF(value) {
        console.log(value);
        //   var doc = new jsPDF('p', 'pt');
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__();
        // 添加并设置字体
        doc.addFont('SourceHanSans-Normal.ttf', 'SourceHanSans-Normal', 'normal');
        doc.setFont('SourceHanSans-Normal');
        // doc.text(20, 20, '简体中文、繁體体中文、English、ジャパン、한국어');
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