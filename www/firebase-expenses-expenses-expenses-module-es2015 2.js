(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-expenses-expenses-expenses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/expenses/expenses/expenses.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/expenses/expenses/expenses.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content class=\"user-profile-content\">\n\n  <ion-item-divider class=\"sticky_header\" sticky>\n    <ion-title>All Expenses</ion-title>\n    <ion-button size=\"large\" color='theme' class=\"new_button\" (click)=\"onCreateContact()\"> + New</ion-button>\n    <!-- <ion-button class=\"new_button\" color=\"premium\" fill=\"solid\" slot=\"end\"\n      (click)=\"showCreditNotesToggle = !showCreditNotesToggle\">\n      <ion-icon name=\"menu-outline\"></ion-icon>\n    </ion-button> -->\n\n    <!-- <div class=\"menu_toggle\" *ngIf=\"showCreditNotesToggle\">\n      <ul>\n        <li>\n          <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"show = !show\">\n            <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-upload-sharp\"></ion-icon>\n            <span>\n              Upload contact import\n            </span>\n          </ion-button>\n        </li>\n        <li>\n          <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"getTestCsv()\">\n            <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"\"></ion-icon>\n            <span>\n              Get CSV\n            </span>\n          </ion-button>\n        </li>\n        <li>\n          <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"loadCSV()\">\n            <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-upload-sharp\"></ion-icon>\n            <span>\n              Bulk import\n            </span>\n          </ion-button>\n        </li>\n        <li>\n          <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"exportCSV()\">\n            <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-download-sharp\"></ion-icon>\n            <span>\n              Bulk export\n            </span>\n          </ion-button>\n        </li>\n\n      </ul>\n    </div> -->\n  </ion-item-divider>\n\n  <ion-progress-bar *ngIf=\"!estimatesList\" color=\"theme\" type=\"indeterminate\"></ion-progress-bar>\n\n  <div style=\"background: var(--ion-color-dark)\">\n    <ion-card style=\"box-shadow: none; margin: 0px\">\n      <ion-card-header style=\"text-align: center; color: var(--ion-color-theme); font-size: larger;\">Professional\n        Estimates and Proposals that Streamline Your Invoicing\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"left\" style=\"text-align: center;\">\n            <div>\n\n              <img class=\"img\" style=\"margin-left: auto; margin-right: auto; display: block;\"\n                src=\"../../../../assets/images/home_categories/one_click_invocies.png\" alt=\"\">\n            </div>\n\n            <ion-title>One-Click Invoices\n            </ion-title>\n\n            <p>Easily turn Estimates into Invoices with just a single click.</p>\n\n          </ion-col>\n          <ion-col style=\"text-align: center;\">\n            <div>\n              <img class=\"img\" style=\"margin-left: auto; margin-right: auto; display: block;\"\n                src=\"../../../../assets/images/home_categories/get_going_with_estimates.png\" alt=\"\">\n            </div>\n\n            <ion-title>Get Going with Estimates\n            </ion-title>\n\n            <p>Learn how Estimates and fast approvals get you paid.</p>\n\n          </ion-col>\n          <ion-col style=\"text-align: center;\">\n            <div>\n              <img class=\"img\" style=\"margin-left: auto; margin-right: auto; display: block;\"\n                src=\"../../../../assets/images/home_categories/client_winning_proposals.png\" alt=\"\">\n            </div>\n\n            <ion-title>Client-Winning Proposals\n            </ion-title>\n\n            <p>Showcase your unique value to help win the work you deserve\n              <span>Create now</span></p>\n\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"!grid\">\n    <ion-row class=\"new\">\n      <ion-col class=\"col-left\" style=\"padding: 0px;\" size=\"12\">\n\n        <!-- ngx - table -->\n        <ngx-datatable [rows]=\"estimatesList\" [ngClass]=\"tableStyle\" [rowHeight]=\"auto\" [headerHeight]=\"50\"\n          [columnMode]=\"'force'\" [rowClass]=\"getRowClass.bind(this)\" [limit]=\"20\" [footerHeight]=\"50\">\n          <ngx-datatable-column sortable=\"true\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              DATE\n            </ng-template>\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              <!-- <ion-button fill=\"clear\" color=\"theme\" (click)=\"onDetailPage(row)\">\n                    {{row['Display Name']}}               \n                  </ion-button> -->\n              <div class=\"_button\"> {{row['Expense Date'].substring(0, 10)}}\n              </div>\n            </ng-template>\n          </ngx-datatable-column>\n\n          <ngx-datatable-column sortable=\"true\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              Expense Category\n            </ng-template>\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              <div class=\"button\" (click)=\"onDetailPage(row, estimatesList)\">\n                {{row['Expense Category']}}\n              </div>\n            </ng-template>\n          </ngx-datatable-column>\n\n          <ngx-datatable-column sortable=\"true\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              REFERENCE NUMBER\n            </ng-template>\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              {{row['id']}}\n            </ng-template>\n          </ngx-datatable-column>\n\n          <ngx-datatable-column sortable=\"true\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              CUSTOMER NAME\n            </ng-template>\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              {{row['Customer Name']}}\n            </ng-template>\n          </ngx-datatable-column>\n\n\n          <!-- <ngx-datatable-column sortable=\"true\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              STATUS\n            </ng-template>\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n\n              <div class=\"text-success\" *ngIf=\"row['Estimate Status'] == 'invoiced'\">{{row['Estimate Status']}}\n              </div>\n              <div class=\"text-draft\" *ngIf=\"row['Estimate Status'] == 'draft'\">{{row['Estimate Status']}}\n              </div>\n              <div class=\"text-sent\" *ngIf=\"row['Estimate Status'] == 'sent'\">{{row['Estimate Status']}}\n              </div>\n              <div class=\"text-expired\" *ngIf=\"row['Estimate Status'] == 'revised'\">{{row['Estimate Status']}}\n              </div>\n              <div class=\"text-expired\" *ngIf=\"row['Estimate Status'] == 'expired'\">{{row['Estimate Status']}}\n              </div>\n            </ng-template>\n          </ngx-datatable-column> -->\n\n\n          <ngx-datatable-column sortable=\"true\">\n            <ng-template let-column=\"column\" ngx-datatable-header-template>\n              AMOUNT\n            </ng-template>\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n              HKD {{row['Expense Amount']}}\n            </ng-template>\n          </ngx-datatable-column>\n\n\n\n\n\n\n        </ngx-datatable>\n        <!-- ngx - table -->\n\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"name === 'Dan Soong'\">\n    Dan Soong\n    <div id=\"sign-in-status\"></div>\n    <div id=\"sign-in\"></div>\n    <pre id=\"account-details\"></pre>\n  </div>\n\n  <app-global-banner></app-global-banner>\n</ion-content>\n<app-global-footer></app-global-footer>"

/***/ }),

/***/ "./src/app/firebase/expenses/expenses/expenses.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/firebase/expenses/expenses/expenses.module.ts ***!
  \***************************************************************/
/*! exports provided: ExpensesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesPageModule", function() { return ExpensesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _expenses_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./expenses.page */ "./src/app/firebase/expenses/expenses/expenses.page.ts");











const routes = [
    {
        path: '',
        component: _expenses_page__WEBPACK_IMPORTED_MODULE_10__["ExpensesPage"]
    }
];
let ExpensesPageModule = class ExpensesPageModule {
};
ExpensesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            // FormAlertPageModule,
            // NotificationsPageModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"]
        ],
        declarations: [_expenses_page__WEBPACK_IMPORTED_MODULE_10__["ExpensesPage"]],
        providers: [
            //  UserProfileResolver,
            //  UserService,
            _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"],
            _app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        ]
    })
], ExpensesPageModule);



/***/ }),

/***/ "./src/app/firebase/expenses/expenses/expenses.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/firebase/expenses/expenses/expenses.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Montserrat:300,400,700\";\n.button {\n  color: var(--ion-color-theme);\n  font-weight: bold;\n}\n.button:hover {\n  cursor: pointer;\n  color: var(--ion-color-theme);\n  font-weight: bold;\n}\n.rwd-table {\n  margin: 1em 0;\n  min-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n  font-size: 0.8rem;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 9.5em;\n  display: inline-block;\n}\n@media (min-width: 480px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n@media (min-width: 480px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.25em 0.5em;\n  }\n\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\nh1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n.rwd-table {\n  margin-top: 0px;\n  background: white;\n  color: var(--ion-color-theme);\n  border-radius: 0.4em;\n  overflow: hidden;\n  width: 100%;\n}\n.rwd-table .header_ {\n  background: white;\n  color: black;\n}\n.rwd-table tr {\n  border-color: lightgray;\n}\n.rwd-table tr:hover:not(.header_) {\n  cursor: pointer;\n  background-color: #f2f2f2;\n}\n.rwd-table th,\n.rwd-table td {\n  margin: 0.5em 1em;\n}\n@media (min-width: 480px) {\n  .rwd-table th,\n.rwd-table td {\n    padding: 1em !important;\n  }\n}\n.rwd-table th,\n.rwd-table td:before {\n  color: #dd5;\n}\n/* Important styles */\n#toggle {\n  display: block;\n  width: 30px;\n  height: 20px;\n  margin: 15px auto 5px;\n}\n#toggle span:after,\n#toggle span:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: -6px;\n}\n#toggle span:after {\n  top: 6px;\n}\n#toggle span {\n  position: relative;\n  display: block;\n}\n#toggle span,\n#toggle span:after,\n#toggle span:before {\n  width: 20px;\n  height: 3px;\n  right: 15px;\n  background-color: #888;\n  transition: all 0.3s;\n  backface-visibility: hidden;\n  border-radius: 2px;\n}\n/* on activation */\n#toggle.on span {\n  background-color: transparent;\n}\n#toggle.on span:before {\n  transform: rotate(45deg) translate(5px, 5px);\n}\n#toggle.on span:after {\n  transform: rotate(-45deg) translate(7px, -8px);\n}\n#toggle.on + #menu {\n  opacity: 1;\n  visibility: visible;\n}\n/* menu appearance*/\n#menu {\n  position: fixed;\n  top: 100px;\n  right: 3px;\n  color: #999;\n  margin: auto;\n  text-align: center;\n  background: white;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);\n  /* just for this demo */\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.4s;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n#menu:before {\n  position: absolute;\n  top: -20px;\n  left: 210px;\n  content: \"\";\n  display: block;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 20px solid white;\n}\nul,\nli,\nli a {\n  list-style: none;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\nli a {\n  padding: 10px 20px;\n  color: #888;\n  text-decoration: none;\n  text-align: left;\n  transition: all 0.2s;\n  width: 250px;\n}\nli a:hover,\nli a:focus {\n  background: #2485e8;\n  color: #fff;\n  cursor: pointer;\n  width: 100%;\n}\n.new_button {\n  padding-right: 38px;\n  padding-bottom: 4px;\n}\n.listbutton {\n  padding-left: 10px;\n  width: 100%;\n  top: 5px;\n  margin-left: 0px;\n}\n.listbutton span {\n  color: #212529;\n  padding: 8px 20px;\n  text-align: left;\n  width: 100%;\n  text-transform: capitalize;\n}\n.listbutton:hover {\n  padding-left: 10px;\n  color: white;\n  background: #2485e8;\n  margin-left: 0px;\n}\n.listbutton:hover span {\n  color: white;\n  text-transform: capitalize;\n  padding: 8px 20px;\n  text-align: left;\n  width: 100%;\n}\n/* demo styles */\nbody {\n  margin-top: 3em;\n  background: #eee;\n  color: #555;\n  font-family: \"Open Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif;\n}\np,\np a {\n  font-size: 12px;\n  text-align: center;\n  color: #888;\n}\n.menu_toggle {\n  position: fixed;\n  z-index: 99999999;\n  right: 10px;\n  top: 100px;\n  background: white;\n  border-radius: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n}\n.img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  cursor: pointer;\n  width: 70px !important;\n  margin-bottom: 20px;\n  transition: transform 0.5s ease;\n}\n.img:hover {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  cursor: pointer;\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9leHBlbnNlcy9leHBlbnNlcy9leHBlbnNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2V4cGVuc2VzL2V4cGVuc2VzL2V4cGVuc2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXUSx3RUFBQTtBQVhSO0VBQ0MsNkJBQUE7RUFDQSxpQkFBQTtBQ0VEO0FEQ0E7RUFDQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ0VEO0FERUE7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7QURFQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7QUNDRDtBREVBO0VBQ0MsYUFBQTtBQ0NEO0FERUE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7QUNDRDtBREVBO0VBQ0Msa0JBQUE7QUNDRDtBREVBO0VBQ0MscUJBQUE7QUNDRDtBREVBO0VBQ0MsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0NEO0FERUE7RUFDQztJQUNDLGFBQUE7RUNDQTtBQUNGO0FERUE7O0VBRUMsZ0JBQUE7QUNBRDtBREdBO0VBQ0M7O0lBRUMsbUJBQUE7SUFDQSxxQkFBQTtFQ0FBOztFREVEOztJQUVDLGVBQUE7RUNDQTs7RURDRDs7SUFFQyxnQkFBQTtFQ0VBO0FBQ0Y7QURTQTtFQUNDLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDUEQ7QURVQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNQRDtBRFVBO0VBQ0MsaUJBQUE7RUFDQSxZQUFBO0FDUEQ7QURVQTtFQUNDLHVCQUFBO0FDUEQ7QURXQTtFQUNDLGVBQUE7RUFDQSx5QkFBQTtBQ1JEO0FEV0E7O0VBRUMsaUJBQUE7QUNSRDtBRFdBO0VBQ0M7O0lBRUMsdUJBQUE7RUNSQTtBQUNGO0FEV0E7O0VBRUMsV0FBQTtBQ1REO0FEYUEscUJBQUE7QUFFQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDWEQ7QURjQTs7RUFFQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ1hEO0FEY0E7RUFDQyxRQUFBO0FDWEQ7QURjQTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtBQ1hEO0FEY0E7OztFQUdDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDWEQ7QURlQSxrQkFBQTtBQUVBO0VBQ0MsNkJBQUE7QUNiRDtBRGdCQTtFQUNDLDRDQUFBO0FDYkQ7QURnQkE7RUFDQyw4Q0FBQTtBQ2JEO0FEZ0JBO0VBQ0MsVUFBQTtFQUNBLG1CQUFBO0FDYkQ7QURpQkEsbUJBQUE7QUFFQTtFQUNDLGVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFHQSxZQUFBO0VBRUEsa0JBQUE7RUFFQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7QUNuQkQ7QURzQkE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7QUNuQkQ7QURzQkE7OztFQUdDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDbkJEO0FEc0JBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ3BCRDtBRHVCQTs7RUFFQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ3BCRDtBRHVCQTtFQUNDLG1CQUFBO0VBQ0EsbUJBQUE7QUNwQkQ7QUR1QkE7RUFFQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNyQkQ7QURzQkM7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ3BCRjtBRHdCQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNyQkQ7QURzQkM7RUFDQyxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ3BCRjtBRHlCQSxnQkFBQTtBQUVBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtFQUFBO0FDdkJEO0FEMEJBOztFQUVDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUN2QkQ7QUQwQkE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQ3ZCRDtBRDJCQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQywrQkFBQTtBQ3hCRjtBRDJCQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0QsZUFBQTtFQUVDLHFCQUFBO0FDekJEIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvZXhwZW5zZXMvZXhwZW5zZXMvZXhwZW5zZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw3MDBcIjtcbi5yd2QtdGFibGUge1xuXHRtYXJnaW46IDFlbSAwO1xuXHRtaW4td2lkdGg6IDkwMHB4O1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucndkLXRhYmxlIHRyIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ucndkLXRhYmxlIHRoIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnJ3ZC10YWJsZSB0ZCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG5cdHBhZGRpbmctdG9wOiAuNWVtO1xufVxuXG4ucndkLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuXHRwYWRkaW5nLWJvdHRvbTogLjVlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuXHRjb250ZW50OiBhdHRyKGRhdGEtdGgpIFwiOiBcIjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHdpZHRoOiA5LjVlbTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0LnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0LnJ3ZC10YWJsZSB0aCxcblx0LnJ3ZC10YWJsZSB0ZCB7XG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRwYWRkaW5nOiAuMjVlbSAuNWVtO1xuXHR9XG5cdC5yd2QtdGFibGUgdGg6Zmlyc3QtY2hpbGQsXG5cdC5yd2QtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuXHRcdHBhZGRpbmctbGVmdDogMDtcblx0fVxuXHQucndkLXRhYmxlIHRoOmxhc3QtY2hpbGQsXG5cdC5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG5cdFx0cGFkZGluZy1yaWdodDogMDtcblx0fVxufVxuXG4vLyBib2R5IHtcbi8vICAgcGFkZGluZzogMCAyZW07XG4vLyAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuLy8gICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbi8vICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbi8vICAgY29sb3I6ICM0NDQ7XG4vLyAgIGJhY2tncm91bmQ6ICNlZWU7XG4vLyB9XG5oMSB7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGxldHRlci1zcGFjaW5nOiAtMXB4O1xuXHRjb2xvcjogIzM0NDk1RTtcbn1cblxuLnJ3ZC10YWJsZSB7XG5cdG1hcmdpbi10b3A6IDBweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRib3JkZXItcmFkaXVzOiAuNGVtO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLnJ3ZC10YWJsZSAuaGVhZGVyXyB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbi5yd2QtdGFibGUgdHIge1xuXHRib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLy8gLnJ3ZC10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxuLnJ3ZC10YWJsZSB0cjpob3Zlcjpub3QoLmhlYWRlcl8pIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG5cdG1hcmdpbjogLjVlbSAxZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHQucndkLXRhYmxlIHRoLFxuXHQucndkLXRhYmxlIHRkIHtcblx0XHRwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcblx0fVxufVxuXG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuXHRjb2xvcjogI2RkNTtcbn1cblxuXG4vKiBJbXBvcnRhbnQgc3R5bGVzICovXG5cbiN0b2dnbGUge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDMwcHg7XG5cdGhlaWdodDogMjBweDtcblx0bWFyZ2luOiAxNXB4IGF1dG8gNXB4O1xufVxuXG4jdG9nZ2xlIHNwYW46YWZ0ZXIsXG4jdG9nZ2xlIHNwYW46YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IC02cHg7XG59XG5cbiN0b2dnbGUgc3BhbjphZnRlciB7XG5cdHRvcDogNnB4O1xufVxuXG4jdG9nZ2xlIHNwYW4ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jdG9nZ2xlIHNwYW4sXG4jdG9nZ2xlIHNwYW46YWZ0ZXIsXG4jdG9nZ2xlIHNwYW46YmVmb3JlIHtcblx0d2lkdGg6IDIwcHg7XG5cdGhlaWdodDogM3B4O1xuXHRyaWdodDogMTVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzg4ODtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5cbi8qIG9uIGFjdGl2YXRpb24gKi9cblxuI3RvZ2dsZS5vbiBzcGFuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiN0b2dnbGUub24gc3BhbjpiZWZvcmUge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCwgNXB4KTtcbn1cblxuI3RvZ2dsZS5vbiBzcGFuOmFmdGVyIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoN3B4LCAtOHB4KTtcbn1cblxuI3RvZ2dsZS5vbisjbWVudSB7XG5cdG9wYWNpdHk6IDE7XG5cdHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cblxuLyogbWVudSBhcHBlYXJhbmNlKi9cblxuI21lbnUge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMTAwcHg7XG5cdHJpZ2h0OiAzcHg7XG5cdGNvbG9yOiAjOTk5O1xuXHQvLyB3aWR0aDogMjAwcHg7XG5cdC8vICBwYWRkaW5nOiA1cHggMjBweDtcblx0bWFyZ2luOiBhdXRvO1xuXHQvLyBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBDYW5kYXJhLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnNcIiwgXCJEZWphVnUgU2Fuc1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnNcIiwgXCJUcmVidWNoZXQgTVNcIiwgVmVyZGFuYSwgXCJWZXJkYW5hIFJlZlwiLCBzYW5zLXNlcmlmO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdC8vIGJvcmRlci1yYWRpdXM6IDRweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXHQvKiBqdXN0IGZvciB0aGlzIGRlbW8gKi9cblx0b3BhY2l0eTogMDtcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC40cztcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xuXHRib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG5cbiNtZW51OmJlZm9yZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtMjBweDtcblx0bGVmdDogMjEwcHg7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHdoaXRlO1xufVxuXG51bCxcbmxpLFxubGkgYSB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbmxpIGEge1xuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdGNvbG9yOiAjODg4O1xuXHQvLyBkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR0cmFuc2l0aW9uOiBhbGwgLjJzO1xuXHR3aWR0aDogMjUwcHg7XG59XG5cbmxpIGE6aG92ZXIsXG5saSBhOmZvY3VzIHtcblx0YmFja2dyb3VuZDogIzI0ODVlODtcblx0Y29sb3I6ICNmZmY7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0d2lkdGg6IDEwMCVcbn1cblxuLm5ld19idXR0b24ge1xuXHRwYWRkaW5nLXJpZ2h0OiAzOHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4ubGlzdGJ1dHRvbiB7XG5cdC8vIGNvbG9yOiAjMjQ4NWU4O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHR0b3A6IDVweDtcblx0bWFyZ2luLWxlZnQ6IDBweDtcblx0c3BhbiB7XG5cdFx0Y29sb3I6ICMyMTI1Mjk7XG5cdFx0cGFkZGluZzogOHB4IDIwcHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0fVxufVxuXG4ubGlzdGJ1dHRvbjpob3ZlciB7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kOiAjMjQ4NWU4O1xuXHRtYXJnaW4tbGVmdDogMHB4O1xuXHRzcGFuIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdFx0cGFkZGluZzogOHB4IDIwcHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufVxuXG5cbi8qIGRlbW8gc3R5bGVzICovXG5cbmJvZHkge1xuXHRtYXJnaW4tdG9wOiAzZW07XG5cdGJhY2tncm91bmQ6ICNlZWU7XG5cdGNvbG9yOiAjNTU1O1xuXHRmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5wLFxucCBhIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiAjODg4O1xufVxuXG4ubWVudV90b2dnbGUge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDk5OTk5OTk5O1xuXHRyaWdodDogMTBweDtcblx0dG9wOiAxMDBweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xufVxuXG5cbi5pbWcge1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRkaXNwbGF5OiBibG9jaztcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHQgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlO1xufVxuXG4uaW1nOmhvdmVyIHtcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdG1hcmdpbi1yaWdodDogYXV0bztcblx0ZGlzcGxheTogYmxvY2s7XG5jdXJzb3I6IHBvaW50ZXI7XG4vLyB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn0iLCJAaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw3MDBcIjtcbi5idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJ3ZC10YWJsZSB7XG4gIG1hcmdpbjogMWVtIDA7XG4gIG1pbi13aWR0aDogOTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5yd2QtdGFibGUgdHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5yd2QtdGFibGUgdGgge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucndkLXRhYmxlIHRkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucndkLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xufVxuXG4ucndkLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG59XG5cbi5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRoKSBcIjogXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogOS41ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG4gIH1cblxuICAucndkLXRhYmxlIHRoOmZpcnN0LWNoaWxkLFxuLnJ3ZC10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cbiAgLnJ3ZC10YWJsZSB0aDpsYXN0LWNoaWxkLFxuLnJ3ZC10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBjb2xvcjogIzM0NDk1RTtcbn1cblxuLnJ3ZC10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yd2QtdGFibGUgLmhlYWRlcl8ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucndkLXRhYmxlIHRyIHtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5yd2QtdGFibGUgdHI6aG92ZXI6bm90KC5oZWFkZXJfKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQge1xuICBtYXJnaW46IDAuNWVtIDFlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcbiAgfVxufVxuLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcbiAgY29sb3I6ICNkZDU7XG59XG5cbi8qIEltcG9ydGFudCBzdHlsZXMgKi9cbiN0b2dnbGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAxNXB4IGF1dG8gNXB4O1xufVxuXG4jdG9nZ2xlIHNwYW46YWZ0ZXIsXG4jdG9nZ2xlIHNwYW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IC02cHg7XG59XG5cbiN0b2dnbGUgc3BhbjphZnRlciB7XG4gIHRvcDogNnB4O1xufVxuXG4jdG9nZ2xlIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jdG9nZ2xlIHNwYW4sXG4jdG9nZ2xlIHNwYW46YWZ0ZXIsXG4jdG9nZ2xlIHNwYW46YmVmb3JlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogM3B4O1xuICByaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4vKiBvbiBhY3RpdmF0aW9uICovXG4jdG9nZ2xlLm9uIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI3RvZ2dsZS5vbiBzcGFuOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoNXB4LCA1cHgpO1xufVxuXG4jdG9nZ2xlLm9uIHNwYW46YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSg3cHgsIC04cHgpO1xufVxuXG4jdG9nZ2xlLm9uICsgI21lbnUge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vKiBtZW51IGFwcGVhcmFuY2UqL1xuI21lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAzcHg7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAvKiBqdXN0IGZvciB0aGlzIGRlbW8gKi9cbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbiNtZW51OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogMjEwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHdoaXRlO1xufVxuXG51bCxcbmxpLFxubGkgYSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIGEge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbmxpIGE6aG92ZXIsXG5saSBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzI0ODVlODtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXdfYnV0dG9uIHtcbiAgcGFkZGluZy1yaWdodDogMzhweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLmxpc3RidXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5saXN0YnV0dG9uIHNwYW4ge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmxpc3RidXR0b246aG92ZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzI0ODVlODtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5saXN0YnV0dG9uOmhvdmVyIHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIGRlbW8gc3R5bGVzICovXG5ib2R5IHtcbiAgbWFyZ2luLXRvcDogM2VtO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiU2Vnb2UgVUlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxucCxcbnAgYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzg4ODtcbn1cblxuLm1lbnVfdG9nZ2xlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5OTk5OTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5pbWcge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xufVxuXG4uaW1nOmhvdmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/firebase/expenses/expenses/expenses.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/firebase/expenses/expenses/expenses.page.ts ***!
  \*************************************************************/
/*! exports provided: ExpensesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesPage", function() { return ExpensesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../app/firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


// import { UserProfileModel } from "./user-profile.model";

// import { LanguageService } from "../../language/language.service";



// estimates
// import estimatesdata from './../../../../assets/estimates.json';
// import data from './../../../../assets/company.json';

let ExpensesPage = class ExpensesPage {
    // ngx-table end
    constructor(navCtrl, firebaseService, authService, translate, alertController) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.translate = translate;
        this.alertController = alertController;
        this.tableStyle = 'dark';
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    ngOnInit() {
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
    }
    ionViewWillEnter() {
        this.readEstimates();
    }
    // ngx - table start
    switchStyle() {
        if (this.tableStyle == 'dark') {
            this.tableStyle = 'bootstrap';
        }
        else {
            this.tableStyle = 'dark';
        }
    }
    getRowClass(row) {
        // console.log('class: ', row);
        const isMale = row.gender == 'male';
        if (!this.customRowClass) {
            return {};
        }
        return {
            'male-row': isMale,
            'female-row': !isMale
        };
    }
    // ngx - table end
    onCreateContact() {
        // this.navCtrl.navigateForward(["/firebase/create#quotes"]);
        this.navCtrl.navigateForward(["/firebase/create#expenses"]);
    }
    onDetailPage(value, values) {
        console.log(value, values);
        const data = JSON.stringify(value);
        const datas = JSON.stringify(values);
        const navigationExtras = {
            queryParams: {
                data: data,
                datas: datas
            }
        };
        this.navCtrl.navigateRoot(["/firebase/details#expenses"], navigationExtras);
    }
    // CRUD
    readEstimates() {
        console.log(this.email, this.uid);
        this.firebaseService.readExpense(this.uid, this.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(changes => changes.map(c => (Object.assign({ id: c.payload.doc.id }, c.payload.doc.data()))))).subscribe(data => {
            this.estimatesList = data;
            console.log(this.estimatesList);
        });
    }
};
ExpensesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ExpensesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expenses',
        template: __webpack_require__(/*! raw-loader!./expenses.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/expenses/expenses/expenses.page.html"),
        styles: [__webpack_require__(/*! ./expenses.page.scss */ "./src/app/firebase/expenses/expenses/expenses.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
        _app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], ExpensesPage);



/***/ })

}]);
//# sourceMappingURL=firebase-expenses-expenses-expenses-module-es2015.js.map