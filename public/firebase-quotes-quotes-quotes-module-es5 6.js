(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-quotes-quotes-quotes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/quotes/quotes/quotes.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/quotes/quotes/quotes.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content class=\"user-profile-content\">\n\n  <ion-item-divider sticky>\n    <ion-title>All Estimates</ion-title>\n    <ion-button color='theme' class=\"new_button\" (click)=\"onCreateContact()\"> + New</ion-button>\n    <!-- <ion-button class=\"new_button\" color=\"premium\" fill=\"solid\" slot=\"end\"\n      (click)=\"showCreditNotesToggle = !showCreditNotesToggle\">\n      <ion-icon name=\"menu-outline\"></ion-icon>\n    </ion-button> -->\n\n    <!-- <div class=\"menu_toggle\" *ngIf=\"showCreditNotesToggle\">\n      <ul>\n        <li>\n          <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"show = !show\">\n            <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-upload-sharp\"></ion-icon>\n            <span>\n              Upload contact import\n            </span>\n          </ion-button>\n        </li>\n        <li>\n          <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"getTestCsv()\">\n            <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"\"></ion-icon>\n            <span>\n              Get CSV\n            </span>\n          </ion-button>\n        </li>\n        <li>\n          <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"loadCSV()\">\n            <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-upload-sharp\"></ion-icon>\n            <span>\n              Bulk import\n            </span>\n          </ion-button>\n        </li>\n        <li>\n          <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"exportCSV()\">\n            <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-download-sharp\"></ion-icon>\n            <span>\n              Bulk export\n            </span>\n          </ion-button>\n        </li>\n\n      </ul>\n    </div> -->\n  </ion-item-divider>\n\n  <ion-progress-bar *ngIf=\"!estimatesList\" color=\"theme\" type=\"indeterminate\"></ion-progress-bar>\n\n  <div>\n    <ion-card>\n      <ion-card-header style=\"text-align: center; color: var(--ion-color-theme); font-size: larger;\">Professional\n        Estimates and Proposals that Streamline Your Invoicing\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"left\" style=\"text-align: center;\">\n            <div>\n\n              <img class=\"img\" style=\"margin-left: auto; margin-right: auto; display: block;\"\n                src=\"../../../../assets/images/home_categories/one_click_invocies.png\" alt=\"\">\n            </div>\n\n            <ion-title>One-Click Invoices\n            </ion-title>\n\n            <p>Easily turn Estimates into Invoices with just a single click.</p>\n\n          </ion-col>\n          <ion-col style=\"text-align: center;\">\n            <div>\n              <img class=\"img\" style=\"margin-left: auto; margin-right: auto; display: block;\"\n                src=\"../../../../assets/images/home_categories/get_going_with_estimates.png\" alt=\"\">\n            </div>\n\n            <ion-title>Get Going with Estimates\n            </ion-title>\n\n            <p>Learn how Estimates and fast approvals get you paid.</p>\n\n          </ion-col>\n          <ion-col style=\"text-align: center;\">\n            <div>\n              <img class=\"img\" style=\"margin-left: auto; margin-right: auto; display: block;\"\n                src=\"../../../../assets/images/home_categories/client_winning_proposals.png\" alt=\"\">\n            </div>\n\n            <ion-title>Client-Winning Proposals\n            </ion-title>\n\n            <p>Showcase your unique value to help win the work you deserve\n              <span>Create now</span></p>\n\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"!grid\">\n    <ion-row class=\"new\">\n      <ion-col class=\"col-left\" style=\"padding: 0px;\" size=\"12\">\n\n        <!-- ngx - table -->\n        <ngx-datatable [rows]=\"estimatesList\" [ngClass]=\"tableStyle\" [rowHeight]=\"auto\" [headerHeight]=\"50\"\n          [columnMode]=\"'force'\" [rowClass]=\"getRowClass.bind(this)\" [limit]=\"20\" [footerHeight]=\"50\">\n          <ngx-datatable-column sortable=\"true\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              DATE\n            </ng-template>\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              <!-- <ion-button fill=\"clear\" color=\"theme\" (click)=\"onDetailPage(row)\">\n                    {{row['Display Name']}}               \n                  </ion-button> -->\n              <div class=\"_button\"> {{row['Estimate Date'].substring(0, 10)}}\n              </div>\n            </ng-template>\n          </ngx-datatable-column>\n\n          <ngx-datatable-column sortable=\"true\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              ESTIMATE NUMBER\n            </ng-template>\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              <div class=\"button\" (click)=\"onDetailPage(row, estimatesList)\">\n                {{row['Estimate Number']}}\n              </div>\n            </ng-template>\n          </ngx-datatable-column>\n\n          <ngx-datatable-column sortable=\"true\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              REFERENCE NUMBER\n            </ng-template>\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              {{row['Estimate ID']}}\n            </ng-template>\n          </ngx-datatable-column>\n\n          <ngx-datatable-column sortable=\"true\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              CUSTOMER NAME\n            </ng-template>\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              {{row['Customer Name']}}\n            </ng-template>\n          </ngx-datatable-column>\n\n\n          <ngx-datatable-column sortable=\"true\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              STATUS\n              <!-- (invoiced/ draft/ sent/ expired) -->\n            </ng-template>\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              <!-- draft/ sent / invoiced / expired -->\n\n              <div class=\"text-success\" *ngIf=\"row['Estimate Status'] == 'invoiced'\">{{row['Estimate Status']}}\n              </div>\n              <div class=\"text-draft\" *ngIf=\"row['Estimate Status'] == 'draft'\">{{row['Estimate Status']}}\n              </div>\n              <div class=\"text-sent\" *ngIf=\"row['Estimate Status'] == 'sent'\">{{row['Estimate Status']}}\n              </div>\n              <div class=\"text-expired\" *ngIf=\"row['Estimate Status'] == 'revised'\">{{row['Estimate Status']}}\n              </div>\n              <div class=\"text-expired\" *ngIf=\"row['Estimate Status'] == 'expired'\">{{row['Estimate Status']}}\n              </div>\n            </ng-template>\n          </ngx-datatable-column>\n\n\n          <ngx-datatable-column sortable=\"true\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              AMOUNT\n            </ng-template>\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              HKD {{row['Total']}}\n            </ng-template>\n          </ngx-datatable-column>\n\n\n\n\n\n\n        </ngx-datatable>\n        <!-- ngx - table -->\n\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"name === 'Dan Soong'\">\n    Dan Soong\n    <div id=\"sign-in-status\"></div>\n    <div id=\"sign-in\"></div>\n    <pre id=\"account-details\"></pre>\n  </div>\n\n  <app-global-banner></app-global-banner>\n</ion-content>\n<app-global-footer></app-global-footer>"

/***/ }),

/***/ "./src/app/firebase/quotes/quotes/quotes.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/firebase/quotes/quotes/quotes.module.ts ***!
  \*********************************************************/
/*! exports provided: QuotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPageModule", function() { return QuotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _quotes_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quotes.page */ "./src/app/firebase/quotes/quotes/quotes.page.ts");











var routes = [
    {
        path: '',
        component: _quotes_page__WEBPACK_IMPORTED_MODULE_10__["QuotesPage"]
    }
];
var QuotesPageModule = /** @class */ (function () {
    function QuotesPageModule() {
    }
    QuotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // TranslateModule,
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"]
            ],
            declarations: [_quotes_page__WEBPACK_IMPORTED_MODULE_10__["QuotesPage"]],
            providers: [
                //  UserProfileResolver,
                //  UserService,
                _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"],
                _app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            ]
        })
    ], QuotesPageModule);
    return QuotesPageModule;
}());



/***/ }),

/***/ "./src/app/firebase/quotes/quotes/quotes.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/firebase/quotes/quotes/quotes.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Montserrat:300,400,700\";\n.button {\n  color: var(--ion-color-theme);\n  font-weight: bold;\n}\n.button:hover {\n  cursor: pointer;\n  color: var(--ion-color-theme);\n  font-weight: bold;\n}\n.rwd-table {\n  margin: 1em 0;\n  min-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n  font-size: 0.8rem;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 9.5em;\n  display: inline-block;\n}\n@media (min-width: 480px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n@media (min-width: 480px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.25em 0.5em;\n  }\n\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\nh1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n.rwd-table {\n  margin-top: 0px;\n  background: white;\n  color: var(--ion-color-theme);\n  border-radius: 0.4em;\n  overflow: hidden;\n  width: 100%;\n}\n.rwd-table .header_ {\n  background: white;\n  color: black;\n}\n.rwd-table tr {\n  border-color: lightgray;\n}\n.rwd-table tr:hover:not(.header_) {\n  cursor: pointer;\n  background-color: #f2f2f2;\n}\n.rwd-table th,\n.rwd-table td {\n  margin: 0.5em 1em;\n}\n@media (min-width: 480px) {\n  .rwd-table th,\n.rwd-table td {\n    padding: 1em !important;\n  }\n}\n.rwd-table th,\n.rwd-table td:before {\n  color: #dd5;\n}\n/* Important styles */\n#toggle {\n  display: block;\n  width: 30px;\n  height: 20px;\n  margin: 15px auto 5px;\n}\n#toggle span:after,\n#toggle span:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: -6px;\n}\n#toggle span:after {\n  top: 6px;\n}\n#toggle span {\n  position: relative;\n  display: block;\n}\n#toggle span,\n#toggle span:after,\n#toggle span:before {\n  width: 20px;\n  height: 3px;\n  right: 15px;\n  background-color: #888;\n  transition: all 0.3s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-radius: 2px;\n}\n/* on activation */\n#toggle.on span {\n  background-color: transparent;\n}\n#toggle.on span:before {\n  transform: rotate(45deg) translate(5px, 5px);\n}\n#toggle.on span:after {\n  transform: rotate(-45deg) translate(7px, -8px);\n}\n#toggle.on + #menu {\n  opacity: 1;\n  visibility: visible;\n}\n/* menu appearance*/\n#menu {\n  position: fixed;\n  top: 100px;\n  right: 3px;\n  color: #999;\n  margin: auto;\n  text-align: center;\n  background: white;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);\n  /* just for this demo */\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.4s;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n#menu:before {\n  position: absolute;\n  top: -20px;\n  left: 210px;\n  content: \"\";\n  display: block;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 20px solid white;\n}\nul,\nli,\nli a {\n  list-style: none;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\nli a {\n  padding: 10px 20px;\n  color: #888;\n  text-decoration: none;\n  text-align: left;\n  transition: all 0.2s;\n  width: 250px;\n}\nli a:hover,\nli a:focus {\n  background: #2485e8;\n  color: #fff;\n  cursor: pointer;\n  width: 100%;\n}\n.new_button {\n  padding-right: 38px;\n  padding-bottom: 4px;\n}\n.listbutton {\n  padding-left: 10px;\n  width: 100%;\n  top: 5px;\n  margin-left: 0px;\n}\n.listbutton span {\n  color: #212529;\n  padding: 8px 20px;\n  text-align: left;\n  width: 100%;\n  text-transform: capitalize;\n}\n.listbutton:hover {\n  padding-left: 10px;\n  color: white;\n  background: #2485e8;\n  margin-left: 0px;\n}\n.listbutton:hover span {\n  color: white;\n  text-transform: capitalize;\n  padding: 8px 20px;\n  text-align: left;\n  width: 100%;\n}\n/* demo styles */\nbody {\n  margin-top: 3em;\n  background: #eee;\n  color: #555;\n  font-family: \"Open Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif;\n}\np,\np a {\n  font-size: 12px;\n  text-align: center;\n  color: #888;\n}\n.menu_toggle {\n  position: fixed;\n  z-index: 99999999;\n  right: 10px;\n  top: 100px;\n  background: white;\n  border-radius: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n}\n.img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  cursor: pointer;\n  width: 70px !important;\n  margin-bottom: 20px;\n  transition: transform 0.5s ease;\n}\n.img:hover {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  cursor: pointer;\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9xdW90ZXMvcXVvdGVzL3F1b3Rlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL3F1b3Rlcy9xdW90ZXMvcXVvdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXUSx3RUFBQTtBQVhSO0VBQ0MsNkJBQUE7RUFDQSxpQkFBQTtBQ0VEO0FEQ0E7RUFDQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ0VEO0FERUE7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7QURFQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7QUNDRDtBREVBO0VBQ0MsYUFBQTtBQ0NEO0FERUE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7QUNDRDtBREVBO0VBQ0Msa0JBQUE7QUNDRDtBREVBO0VBQ0MscUJBQUE7QUNDRDtBREVBO0VBQ0MsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0NEO0FERUE7RUFDQztJQUNDLGFBQUE7RUNDQTtBQUNGO0FERUE7O0VBRUMsZ0JBQUE7QUNBRDtBREdBO0VBQ0M7O0lBRUMsbUJBQUE7SUFDQSxxQkFBQTtFQ0FBOztFREVEOztJQUVDLGVBQUE7RUNDQTs7RURDRDs7SUFFQyxnQkFBQTtFQ0VBO0FBQ0Y7QURTQTtFQUNDLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDUEQ7QURVQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNQRDtBRFVBO0VBQ0MsaUJBQUE7RUFDQSxZQUFBO0FDUEQ7QURVQTtFQUNDLHVCQUFBO0FDUEQ7QURXQTtFQUNDLGVBQUE7RUFDQSx5QkFBQTtBQ1JEO0FEV0E7O0VBRUMsaUJBQUE7QUNSRDtBRFdBO0VBQ0M7O0lBRUMsdUJBQUE7RUNSQTtBQUNGO0FEV0E7O0VBRUMsV0FBQTtBQ1REO0FEYUEscUJBQUE7QUFFQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDWEQ7QURjQTs7RUFFQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ1hEO0FEY0E7RUFDQyxRQUFBO0FDWEQ7QURjQTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtBQ1hEO0FEY0E7OztFQUdDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7QUNYRDtBRGVBLGtCQUFBO0FBRUE7RUFDQyw2QkFBQTtBQ2JEO0FEZ0JBO0VBQ0MsNENBQUE7QUNiRDtBRGdCQTtFQUNDLDhDQUFBO0FDYkQ7QURnQkE7RUFDQyxVQUFBO0VBQ0EsbUJBQUE7QUNiRDtBRGlCQSxtQkFBQTtBQUVBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUdBLFlBQUE7RUFFQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtBQ25CRDtBRHNCQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtBQ25CRDtBRHNCQTs7O0VBR0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNuQkQ7QURzQkE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDcEJEO0FEdUJBOztFQUVDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDcEJEO0FEdUJBO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtBQ3BCRDtBRHVCQTtFQUVDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ3JCRDtBRHNCQztFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDcEJGO0FEd0JBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3JCRDtBRHNCQztFQUNDLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDcEJGO0FEeUJBLGdCQUFBO0FBRUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0VBQUE7QUN2QkQ7QUQwQkE7O0VBRUMsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3ZCRDtBRDBCQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FDdkJEO0FEMkJBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNDLCtCQUFBO0FDeEJGO0FEMkJBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDRCxlQUFBO0VBRUMscUJBQUE7QUN6QkQiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9xdW90ZXMvcXVvdGVzL3F1b3Rlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMFwiO1xuLnJ3ZC10YWJsZSB7XG5cdG1hcmdpbjogMWVtIDA7XG5cdG1pbi13aWR0aDogOTAwcHg7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5yd2QtdGFibGUgdHIge1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5yd2QtdGFibGUgdGgge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4ucndkLXRhYmxlIHRkIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucndkLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcblx0cGFkZGluZy10b3A6IC41ZW07XG59XG5cbi5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG5cdHBhZGRpbmctYm90dG9tOiAuNWVtO1xufVxuXG4ucndkLXRhYmxlIHRkOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IGF0dHIoZGF0YS10aCkgXCI6IFwiO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0d2lkdGg6IDkuNWVtO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHQucndkLXRhYmxlIHRkOmJlZm9yZSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHQucndkLXRhYmxlIHRoLFxuXHQucndkLXRhYmxlIHRkIHtcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRcdHBhZGRpbmc6IC4yNWVtIC41ZW07XG5cdH1cblx0LnJ3ZC10YWJsZSB0aDpmaXJzdC1jaGlsZCxcblx0LnJ3ZC10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG5cdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHR9XG5cdC5yd2QtdGFibGUgdGg6bGFzdC1jaGlsZCxcblx0LnJ3ZC10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcblx0XHRwYWRkaW5nLXJpZ2h0OiAwO1xuXHR9XG59XG5cbi8vIGJvZHkge1xuLy8gICBwYWRkaW5nOiAwIDJlbTtcbi8vICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4vLyAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuLy8gICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuLy8gICBjb2xvcjogIzQ0NDtcbi8vICAgYmFja2dyb3VuZDogI2VlZTtcbi8vIH1cbmgxIHtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0bGV0dGVyLXNwYWNpbmc6IC0xcHg7XG5cdGNvbG9yOiAjMzQ0OTVFO1xufVxuXG4ucndkLXRhYmxlIHtcblx0bWFyZ2luLXRvcDogMHB4O1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5cdGJvcmRlci1yYWRpdXM6IC40ZW07XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ucndkLXRhYmxlIC5oZWFkZXJfIHtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOiBibGFjaztcbn1cblxuLnJ3ZC10YWJsZSB0ciB7XG5cdGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4vLyAucndkLXRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XG4ucndkLXRhYmxlIHRyOmhvdmVyOm5vdCguaGVhZGVyXykge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkIHtcblx0bWFyZ2luOiAuNWVtIDFlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdC5yd2QtdGFibGUgdGgsXG5cdC5yd2QtdGFibGUgdGQge1xuXHRcdHBhZGRpbmc6IDFlbSAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkOmJlZm9yZSB7XG5cdGNvbG9yOiAjZGQ1O1xufVxuXG5cbi8qIEltcG9ydGFudCBzdHlsZXMgKi9cblxuI3RvZ2dsZSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMzBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRtYXJnaW46IDE1cHggYXV0byA1cHg7XG59XG5cbiN0b2dnbGUgc3BhbjphZnRlcixcbiN0b2dnbGUgc3BhbjpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHRvcDogLTZweDtcbn1cblxuI3RvZ2dsZSBzcGFuOmFmdGVyIHtcblx0dG9wOiA2cHg7XG59XG5cbiN0b2dnbGUgc3BhbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbiN0b2dnbGUgc3BhbixcbiN0b2dnbGUgc3BhbjphZnRlcixcbiN0b2dnbGUgc3BhbjpiZWZvcmUge1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAzcHg7XG5cdHJpZ2h0OiAxNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcblx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG59XG5cblxuLyogb24gYWN0aXZhdGlvbiAqL1xuXG4jdG9nZ2xlLm9uIHNwYW4ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI3RvZ2dsZS5vbiBzcGFuOmJlZm9yZSB7XG5cdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoNXB4LCA1cHgpO1xufVxuXG4jdG9nZ2xlLm9uIHNwYW46YWZ0ZXIge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSg3cHgsIC04cHgpO1xufVxuXG4jdG9nZ2xlLm9uKyNtZW51IHtcblx0b3BhY2l0eTogMTtcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuXG4vKiBtZW51IGFwcGVhcmFuY2UqL1xuXG4jbWVudSB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAxMDBweDtcblx0cmlnaHQ6IDNweDtcblx0Y29sb3I6ICM5OTk7XG5cdC8vIHdpZHRoOiAyMDBweDtcblx0Ly8gIHBhZGRpbmc6IDVweCAyMHB4O1xuXHRtYXJnaW46IGF1dG87XG5cdC8vIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIENhbmRhcmEsIFwiQml0c3RyZWFtIFZlcmEgU2Fuc1wiLCBcIkRlamFWdSBTYW5zXCIsIFwiQml0c3RyZWFtIFZlcmEgU2Fuc1wiLCBcIlRyZWJ1Y2hldCBNU1wiLCBWZXJkYW5hLCBcIlZlcmRhbmEgUmVmXCIsIHNhbnMtc2VyaWY7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ly8gYm9yZGVyLXJhZGl1czogNHB4O1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0Ym94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG5cdC8qIGp1c3QgZm9yIHRoaXMgZGVtbyAqL1xuXHRvcGFjaXR5OiAwO1xuXHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgLjRzO1xuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xNSk7XG5cdGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cblxuI21lbnU6YmVmb3JlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IC0yMHB4O1xuXHRsZWZ0OiAyMTBweDtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1ib3R0b206IDIwcHggc29saWQgd2hpdGU7XG59XG5cbnVsLFxubGksXG5saSBhIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcbn1cblxubGkgYSB7XG5cdHBhZGRpbmc6IDEwcHggMjBweDtcblx0Y29sb3I6ICM4ODg7XG5cdC8vIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHRyYW5zaXRpb246IGFsbCAuMnM7XG5cdHdpZHRoOiAyNTBweDtcbn1cblxubGkgYTpob3ZlcixcbmxpIGE6Zm9jdXMge1xuXHRiYWNrZ3JvdW5kOiAjMjQ4NWU4O1xuXHRjb2xvcjogI2ZmZjtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR3aWR0aDogMTAwJVxufVxuXG4ubmV3X2J1dHRvbiB7XG5cdHBhZGRpbmctcmlnaHQ6IDM4cHg7XG5cdHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG5cbi5saXN0YnV0dG9uIHtcblx0Ly8gY29sb3I6ICMyNDg1ZTg7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcblx0d2lkdGg6IDEwMCU7XG5cdHRvcDogNXB4O1xuXHRtYXJnaW4tbGVmdDogMHB4O1xuXHRzcGFuIHtcblx0XHRjb2xvcjogIzIxMjUyOTtcblx0XHRwYWRkaW5nOiA4cHggMjBweDtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHR9XG59XG5cbi5saXN0YnV0dG9uOmhvdmVyIHtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQ6ICMyNDg1ZTg7XG5cdG1hcmdpbi1sZWZ0OiAwcHg7XG5cdHNwYW4ge1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0XHRwYWRkaW5nOiA4cHggMjBweDtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG59XG5cblxuLyogZGVtbyBzdHlsZXMgKi9cblxuYm9keSB7XG5cdG1hcmdpbi10b3A6IDNlbTtcblx0YmFja2dyb3VuZDogI2VlZTtcblx0Y29sb3I6ICM1NTU7XG5cdGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbnAsXG5wIGEge1xuXHRmb250LXNpemU6IDEycHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICM4ODg7XG59XG5cbi5tZW51X3RvZ2dsZSB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ei1pbmRleDogOTk5OTk5OTk7XG5cdHJpZ2h0OiAxMHB4O1xuXHR0b3A6IDEwMHB4O1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xNSk7XG59XG5cblxuLmltZyB7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdCB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XG59XG5cbi5pbWc6aG92ZXIge1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRkaXNwbGF5OiBibG9jaztcbmN1cnNvcjogcG9pbnRlcjtcbi8vIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufSIsIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMFwiO1xuLmJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucndkLXRhYmxlIHtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgbWluLXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnJ3ZC10YWJsZSB0ciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnJ3ZC10YWJsZSB0aCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yd2QtdGFibGUgdGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5yd2QtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG59XG5cbi5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGgpIFwiOiBcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA5LjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcbiAgfVxuXG4gIC5yd2QtdGFibGUgdGg6Zmlyc3QtY2hpbGQsXG4ucndkLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAucndkLXRhYmxlIHRoOmxhc3QtY2hpbGQsXG4ucndkLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGNvbG9yOiAjMzQ0OTVFO1xufVxuXG4ucndkLXRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJ3ZC10YWJsZSAuaGVhZGVyXyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5yd2QtdGFibGUgdHIge1xuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLnJ3ZC10YWJsZSB0cjpob3Zlcjpub3QoLmhlYWRlcl8pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG4gIG1hcmdpbjogMC41ZW0gMWVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDFlbSAhaW1wb3J0YW50O1xuICB9XG59XG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuICBjb2xvcjogI2RkNTtcbn1cblxuLyogSW1wb3J0YW50IHN0eWxlcyAqL1xuI3RvZ2dsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDE1cHggYXV0byA1cHg7XG59XG5cbiN0b2dnbGUgc3BhbjphZnRlcixcbiN0b2dnbGUgc3BhbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLTZweDtcbn1cblxuI3RvZ2dsZSBzcGFuOmFmdGVyIHtcbiAgdG9wOiA2cHg7XG59XG5cbiN0b2dnbGUgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiN0b2dnbGUgc3BhbixcbiN0b2dnbGUgc3BhbjphZnRlcixcbiN0b2dnbGUgc3BhbjpiZWZvcmUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi8qIG9uIGFjdGl2YXRpb24gKi9cbiN0b2dnbGUub24gc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jdG9nZ2xlLm9uIHNwYW46YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIDVweCk7XG59XG5cbiN0b2dnbGUub24gc3BhbjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDdweCwgLThweCk7XG59XG5cbiN0b2dnbGUub24gKyAjbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8qIG1lbnUgYXBwZWFyYW5jZSovXG4jbWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMDBweDtcbiAgcmlnaHQ6IDNweDtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC8qIGp1c3QgZm9yIHRoaXMgZGVtbyAqL1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuI21lbnU6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAyMTBweDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgd2hpdGU7XG59XG5cbnVsLFxubGksXG5saSBhIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGkgYSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxubGkgYTpob3ZlcixcbmxpIGE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMjQ4NWU4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5ld19idXR0b24ge1xuICBwYWRkaW5nLXJpZ2h0OiAzOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4ubGlzdGJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmxpc3RidXR0b24gc3BhbiB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubGlzdGJ1dHRvbjpob3ZlciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMjQ4NWU4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmxpc3RidXR0b246aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogZGVtbyBzdHlsZXMgKi9cbmJvZHkge1xuICBtYXJnaW4tdG9wOiAzZW07XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5wLFxucCBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4ubWVudV90b2dnbGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk5OTk5O1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmltZyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG59XG5cbi5pbWc6aG92ZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/firebase/quotes/quotes/quotes.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/firebase/quotes/quotes/quotes.page.ts ***!
  \*******************************************************/
/*! exports provided: QuotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPage", function() { return QuotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../app/firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


// import { UserProfileModel } from "./user-profile.model";

// import { LanguageService } from "../../language/language.service";



// estimates
// import estimatesdata from './../../../../assets/estimates.json';
// import data from './../../../../assets/company.json';

var QuotesPage = /** @class */ (function () {
    // ngx-table end
    function QuotesPage(navCtrl, firebaseService, authService, translate, alertController) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.translate = translate;
        this.alertController = alertController;
        this.tableStyle = 'bootstrap';
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    QuotesPage.prototype.ngOnInit = function () {
        // firebase.auth().onAuthStateChanged(user => {
        //   if (user) {
        //     console.log(user);
        //     this.name = user.displayName;
        //     this.photoURL = user.photoURL;
        //     this.uid = user.uid;
        //     this.email = user.email;
        //     this.phoneNumber = user.phoneNumber;
        //     console.log(
        //       this.uid,
        //       this.email,
        //       this.phoneNumber,
        //       this.name,
        //       this.photoURL
        //     );
        //     console.log(this.uid);
        //   } else {
        //     console.log("Not authenticated");
        //     // No user is signed in.
        //   }
        // });
    };
    QuotesPage.prototype.ionViewWillEnter = function () {
        this.readEstimates();
    };
    // ngx - table start
    QuotesPage.prototype.switchStyle = function () {
        if (this.tableStyle == 'dark') {
            this.tableStyle = 'bootstrap';
        }
        else {
            this.tableStyle = 'dark';
        }
    };
    QuotesPage.prototype.getRowClass = function (row) {
        // console.log('class: ', row);
        var isMale = row.gender == 'male';
        if (!this.customRowClass) {
            return {};
        }
        return {
            'male-row': isMale,
            'female-row': !isMale
        };
    };
    // ngx - table end
    QuotesPage.prototype.onCreateContact = function () {
        this.navCtrl.navigateForward(["/firebase/create#quotes"]);
    };
    QuotesPage.prototype.onDetailPage = function (value, values) {
        console.log(value, values);
        var data = JSON.stringify(value);
        var datas = JSON.stringify(values);
        var navigationExtras = {
            queryParams: {
                data: data,
                datas: datas
            }
        };
        this.navCtrl.navigateRoot(["/firebase/quotes#details"], navigationExtras);
    };
    // CRUD
    QuotesPage.prototype.readEstimates = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.readEstimates(this.uid, this.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) {
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: c.payload.doc.id }, c.payload.doc.data()));
            });
        })).subscribe(function (data) {
            _this.estimatesList = data;
            console.log(_this.estimatesList);
        });
    };
    QuotesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    QuotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quotes',
            template: __webpack_require__(/*! raw-loader!./quotes.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/quotes/quotes/quotes.page.html"),
            styles: [__webpack_require__(/*! ./quotes.page.scss */ "./src/app/firebase/quotes/quotes/quotes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
            _app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], QuotesPage);
    return QuotesPage;
}());



/***/ })

}]);
//# sourceMappingURL=firebase-quotes-quotes-quotes-module-es5.js.map