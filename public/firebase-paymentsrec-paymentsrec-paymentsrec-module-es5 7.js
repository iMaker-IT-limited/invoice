(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-paymentsrec-paymentsrec-paymentsrec-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/paymentsrec/paymentsrec/paymentsrec.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/paymentsrec/paymentsrec/paymentsrec.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<ion-content>\n    <ion-item-divider class=\"sticky_header\" sticky>\n        <ion-title>All Received Payments</ion-title>\n        <ion-button color=\"theme\" class=\"new_button\" (click)=\"onCreateReceivedPayments()\"> + New</ion-button>\n\n        <!-- <ion-button class=\"new_button\" color=\"premium\" fill=\"solid\" slot=\"end\"\n            (click)=\"showCreditNotesToggle = !showCreditNotesToggle\">\n            <ion-icon name=\"menu-outline\"></ion-icon>\n        </ion-button> -->\n\n        <!-- <div class=\"menu_toggle\" *ngIf=\"showCreditNotesToggle\">\n            <ul>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"show = !show\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-upload-sharp\"></ion-icon>\n                        <span>\n                            Upload contact import\n                        </span>\n                    </ion-button>\n                </li>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"getTestCsv()\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"\"></ion-icon>\n                        <span>\n                            Get CSV\n                        </span>\n                    </ion-button>\n                </li>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"loadCSV()\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-upload-sharp\"></ion-icon>\n                        <span>\n                            Bulk import\n                        </span>\n                    </ion-button>\n                </li>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"exportCSV()\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-download-sharp\"></ion-icon>\n                        <span>\n                            Bulk export\n                        </span>\n                    </ion-button>\n                </li>\n            </ul>\n        </div> -->\n    </ion-item-divider>\n    <!-- <ion-progress-bar color=\"theme\" type=\"indeterminate\"></ion-progress-bar> -->\n\n    <!-- <app-rating-input *ngIf=\"!estimateDetail\"></app-rating-input> -->\n\n    <div *ngIf=\"!grid\">\n        <ion-row class=\"new\">\n            <ion-col class=\"col-left\" style=\"padding: 0px;\" size=\"12\">\n                <!-- ngx - table -->\n                <ngx-datatable [rows]=\"paymentreceivedList\" [ngClass]=\"tableStyle\" [rowHeight]=\"auto\"\n                    [headerHeight]=\"50\" [columnMode]=\"'force'\" [rowClass]=\"getRowClass.bind(this)\" [limit]=\"10\"\n                    [footerHeight]=\"50\">\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            DATE\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <!-- <ion-button fill=\"clear\" color=\"theme\" (click)=\"onDetailPage(row)\">\n                    {{row['Display Name']}}               \n                  </ion-button> -->\n                            <div>{{row['payment_date']}}</div>\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            CUSTOMER NAME\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['Customer Name']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            INVOICE NUMBER\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <div class=\"invoiced\"></div>\n                            {{row['Invoice Number']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            Payment method\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['payment']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            Total AMOUNT\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            HKD$ {{row['Total']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n                </ngx-datatable>\n                <!-- ngx - table -->\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <app-global-banner></app-global-banner>\n</ion-content>\n<app-global-footer></app-global-footer>"

/***/ }),

/***/ "./src/app/firebase/paymentsrec/paymentsrec/paymentsrec.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/firebase/paymentsrec/paymentsrec/paymentsrec.module.ts ***!
  \************************************************************************/
/*! exports provided: PaymentsrecPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsrecPageModule", function() { return PaymentsrecPageModule; });
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
/* harmony import */ var _paymentsrec_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paymentsrec.page */ "./src/app/firebase/paymentsrec/paymentsrec/paymentsrec.page.ts");











var routes = [
    {
        path: '',
        component: _paymentsrec_page__WEBPACK_IMPORTED_MODULE_10__["PaymentsrecPage"]
    }
];
var PaymentsrecPageModule = /** @class */ (function () {
    function PaymentsrecPageModule() {
    }
    PaymentsrecPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_paymentsrec_page__WEBPACK_IMPORTED_MODULE_10__["PaymentsrecPage"]],
            providers: [
                //  UserProfileResolver,
                //  UserService,
                _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"],
                _app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            ]
        })
    ], PaymentsrecPageModule);
    return PaymentsrecPageModule;
}());



/***/ }),

/***/ "./src/app/firebase/paymentsrec/paymentsrec/paymentsrec.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/firebase/paymentsrec/paymentsrec/paymentsrec.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Montserrat:300,400,700\";\n.button {\n  color: var(--ion-color-theme);\n  font-weight: bold;\n}\n.button:hover {\n  cursor: pointer;\n  color: var(--ion-color-theme);\n  font-weight: bold;\n}\n.rwd-table {\n  margin: 1em 0;\n  min-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n  font-size: 0.8rem;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 9.5em;\n  display: inline-block;\n}\n@media (min-width: 480px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n@media (min-width: 480px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.25em 0.5em;\n  }\n\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\nh1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n.rwd-table {\n  margin-top: 0px;\n  background: white;\n  color: var(--ion-color-theme);\n  border-radius: 0.4em;\n  overflow: hidden;\n  width: 100%;\n}\n.rwd-table .header_ {\n  background: white;\n  color: black;\n}\n.rwd-table tr {\n  border-color: lightgray;\n}\n.rwd-table tr:hover:not(.header_) {\n  cursor: pointer;\n  background-color: #f2f2f2;\n}\n.rwd-table th,\n.rwd-table td {\n  margin: 0.5em 1em;\n}\n@media (min-width: 480px) {\n  .rwd-table th,\n.rwd-table td {\n    padding: 1em !important;\n  }\n}\n.rwd-table th,\n.rwd-table td:before {\n  color: #dd5;\n}\n/* Important styles */\n#toggle {\n  display: block;\n  width: 30px;\n  height: 20px;\n  margin: 15px auto 5px;\n}\n#toggle span:after,\n#toggle span:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: -6px;\n}\n#toggle span:after {\n  top: 6px;\n}\n#toggle span {\n  position: relative;\n  display: block;\n}\n#toggle span,\n#toggle span:after,\n#toggle span:before {\n  width: 20px;\n  height: 3px;\n  right: 15px;\n  background-color: #888;\n  transition: all 0.3s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-radius: 2px;\n}\n/* on activation */\n#toggle.on span {\n  background-color: transparent;\n}\n#toggle.on span:before {\n  transform: rotate(45deg) translate(5px, 5px);\n}\n#toggle.on span:after {\n  transform: rotate(-45deg) translate(7px, -8px);\n}\n#toggle.on + #menu {\n  opacity: 1;\n  visibility: visible;\n}\n/* menu appearance*/\n#menu {\n  position: fixed;\n  top: 100px;\n  right: 3px;\n  color: #999;\n  margin: auto;\n  text-align: center;\n  background: white;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);\n  /* just for this demo */\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.4s;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n#menu:before {\n  position: absolute;\n  top: -20px;\n  left: 210px;\n  content: \"\";\n  display: block;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 20px solid white;\n}\nul,\nli,\nli a {\n  list-style: none;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\nli a {\n  padding: 10px 20px;\n  color: #888;\n  text-decoration: none;\n  text-align: left;\n  transition: all 0.2s;\n  width: 250px;\n}\nli a:hover,\nli a:focus {\n  background: #2485e8;\n  color: #fff;\n  cursor: pointer;\n  width: 100%;\n}\n.new_button {\n  padding-right: 38px;\n  padding-bottom: 4px;\n}\n.listbutton {\n  padding-left: 10px;\n  width: 100%;\n  top: 5px;\n  margin-left: 0px;\n}\n.listbutton span {\n  color: #212529;\n  padding: 8px 20px;\n  text-align: left;\n  width: 100%;\n  text-transform: capitalize;\n}\n.listbutton:hover {\n  padding-left: 10px;\n  color: white;\n  background: #2485e8;\n  margin-left: 0px;\n}\n.listbutton:hover span {\n  color: white;\n  text-transform: capitalize;\n  padding: 8px 20px;\n  text-align: left;\n  width: 100%;\n}\n/* demo styles */\nbody {\n  margin-top: 3em;\n  background: #eee;\n  color: #555;\n  font-family: \"Open Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif;\n}\np,\np a {\n  font-size: 12px;\n  text-align: center;\n  color: #888;\n}\n.menu_toggle {\n  position: fixed;\n  z-index: 99999999;\n  right: 10px;\n  top: 100px;\n  background: white;\n  border-radius: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9wYXltZW50c3JlYy9wYXltZW50c3JlYy9wYXltZW50c3JlYy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL3BheW1lbnRzcmVjL3BheW1lbnRzcmVjL3BheW1lbnRzcmVjLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXUSx3RUFBQTtBQVhSO0VBQ0MsNkJBQUE7RUFDQSxpQkFBQTtBQ0VEO0FEQ0E7RUFDQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ0VEO0FERUE7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7QURFQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7QUNDRDtBREVBO0VBQ0MsYUFBQTtBQ0NEO0FERUE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7QUNDRDtBREVBO0VBQ0Msa0JBQUE7QUNDRDtBREVBO0VBQ0MscUJBQUE7QUNDRDtBREVBO0VBQ0MsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0NEO0FERUE7RUFDQztJQUNDLGFBQUE7RUNDQTtBQUNGO0FERUE7O0VBRUMsZ0JBQUE7QUNBRDtBREdBO0VBQ0M7O0lBRUMsbUJBQUE7SUFDQSxxQkFBQTtFQ0FBOztFREVEOztJQUVDLGVBQUE7RUNDQTs7RURDRDs7SUFFQyxnQkFBQTtFQ0VBO0FBQ0Y7QURTQTtFQUNDLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDUEQ7QURVQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNQRDtBRFVBO0VBQ0MsaUJBQUE7RUFDQSxZQUFBO0FDUEQ7QURVQTtFQUNDLHVCQUFBO0FDUEQ7QURXQTtFQUNDLGVBQUE7RUFDQSx5QkFBQTtBQ1JEO0FEV0E7O0VBRUMsaUJBQUE7QUNSRDtBRFdBO0VBQ0M7O0lBRUMsdUJBQUE7RUNSQTtBQUNGO0FEV0E7O0VBRUMsV0FBQTtBQ1REO0FEYUEscUJBQUE7QUFFQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDWEQ7QURjQTs7RUFFQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ1hEO0FEY0E7RUFDQyxRQUFBO0FDWEQ7QURjQTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtBQ1hEO0FEY0E7OztFQUdDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7QUNYRDtBRGVBLGtCQUFBO0FBRUE7RUFDQyw2QkFBQTtBQ2JEO0FEZ0JBO0VBQ0MsNENBQUE7QUNiRDtBRGdCQTtFQUNDLDhDQUFBO0FDYkQ7QURnQkE7RUFDQyxVQUFBO0VBQ0EsbUJBQUE7QUNiRDtBRGlCQSxtQkFBQTtBQUVBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUdBLFlBQUE7RUFFQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtBQ25CRDtBRHNCQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtBQ25CRDtBRHNCQTs7O0VBR0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNuQkQ7QURzQkE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDcEJEO0FEdUJBOztFQUVDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDcEJEO0FEdUJBO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtBQ3BCRDtBRHVCQTtFQUVDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ3JCRDtBRHNCQztFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDcEJGO0FEd0JBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3JCRDtBRHNCQztFQUNDLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDcEJGO0FEeUJBLGdCQUFBO0FBRUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0VBQUE7QUN2QkQ7QUQwQkE7O0VBRUMsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3ZCRDtBRDBCQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FDdkJEIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvcGF5bWVudHNyZWMvcGF5bWVudHNyZWMvcGF5bWVudHNyZWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw3MDBcIjtcbi5yd2QtdGFibGUge1xuXHRtYXJnaW46IDFlbSAwO1xuXHRtaW4td2lkdGg6IDkwMHB4O1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucndkLXRhYmxlIHRyIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ucndkLXRhYmxlIHRoIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnJ3ZC10YWJsZSB0ZCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG5cdHBhZGRpbmctdG9wOiAuNWVtO1xufVxuXG4ucndkLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuXHRwYWRkaW5nLWJvdHRvbTogLjVlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuXHRjb250ZW50OiBhdHRyKGRhdGEtdGgpIFwiOiBcIjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHdpZHRoOiA5LjVlbTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0LnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0LnJ3ZC10YWJsZSB0aCxcblx0LnJ3ZC10YWJsZSB0ZCB7XG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRwYWRkaW5nOiAuMjVlbSAuNWVtO1xuXHR9XG5cdC5yd2QtdGFibGUgdGg6Zmlyc3QtY2hpbGQsXG5cdC5yd2QtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuXHRcdHBhZGRpbmctbGVmdDogMDtcblx0fVxuXHQucndkLXRhYmxlIHRoOmxhc3QtY2hpbGQsXG5cdC5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG5cdFx0cGFkZGluZy1yaWdodDogMDtcblx0fVxufVxuXG4vLyBib2R5IHtcbi8vICAgcGFkZGluZzogMCAyZW07XG4vLyAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuLy8gICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbi8vICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbi8vICAgY29sb3I6ICM0NDQ7XG4vLyAgIGJhY2tncm91bmQ6ICNlZWU7XG4vLyB9XG5oMSB7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGxldHRlci1zcGFjaW5nOiAtMXB4O1xuXHRjb2xvcjogIzM0NDk1RTtcbn1cblxuLnJ3ZC10YWJsZSB7XG5cdG1hcmdpbi10b3A6IDBweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRib3JkZXItcmFkaXVzOiAuNGVtO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLnJ3ZC10YWJsZSAuaGVhZGVyXyB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbi5yd2QtdGFibGUgdHIge1xuXHRib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLy8gLnJ3ZC10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxuLnJ3ZC10YWJsZSB0cjpob3Zlcjpub3QoLmhlYWRlcl8pIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG5cdG1hcmdpbjogLjVlbSAxZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHQucndkLXRhYmxlIHRoLFxuXHQucndkLXRhYmxlIHRkIHtcblx0XHRwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcblx0fVxufVxuXG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuXHRjb2xvcjogI2RkNTtcbn1cblxuXG4vKiBJbXBvcnRhbnQgc3R5bGVzICovXG5cbiN0b2dnbGUge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDMwcHg7XG5cdGhlaWdodDogMjBweDtcblx0bWFyZ2luOiAxNXB4IGF1dG8gNXB4O1xufVxuXG4jdG9nZ2xlIHNwYW46YWZ0ZXIsXG4jdG9nZ2xlIHNwYW46YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IC02cHg7XG59XG5cbiN0b2dnbGUgc3BhbjphZnRlciB7XG5cdHRvcDogNnB4O1xufVxuXG4jdG9nZ2xlIHNwYW4ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jdG9nZ2xlIHNwYW4sXG4jdG9nZ2xlIHNwYW46YWZ0ZXIsXG4jdG9nZ2xlIHNwYW46YmVmb3JlIHtcblx0d2lkdGg6IDIwcHg7XG5cdGhlaWdodDogM3B4O1xuXHRyaWdodDogMTVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzg4ODtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5cbi8qIG9uIGFjdGl2YXRpb24gKi9cblxuI3RvZ2dsZS5vbiBzcGFuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiN0b2dnbGUub24gc3BhbjpiZWZvcmUge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCwgNXB4KTtcbn1cblxuI3RvZ2dsZS5vbiBzcGFuOmFmdGVyIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoN3B4LCAtOHB4KTtcbn1cblxuI3RvZ2dsZS5vbisjbWVudSB7XG5cdG9wYWNpdHk6IDE7XG5cdHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cblxuLyogbWVudSBhcHBlYXJhbmNlKi9cblxuI21lbnUge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMTAwcHg7XG5cdHJpZ2h0OiAzcHg7XG5cdGNvbG9yOiAjOTk5O1xuXHQvLyB3aWR0aDogMjAwcHg7XG5cdC8vICBwYWRkaW5nOiA1cHggMjBweDtcblx0bWFyZ2luOiBhdXRvO1xuXHQvLyBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBDYW5kYXJhLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnNcIiwgXCJEZWphVnUgU2Fuc1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnNcIiwgXCJUcmVidWNoZXQgTVNcIiwgVmVyZGFuYSwgXCJWZXJkYW5hIFJlZlwiLCBzYW5zLXNlcmlmO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdC8vIGJvcmRlci1yYWRpdXM6IDRweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXHQvKiBqdXN0IGZvciB0aGlzIGRlbW8gKi9cblx0b3BhY2l0eTogMDtcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC40cztcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xuXHRib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG5cbiNtZW51OmJlZm9yZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtMjBweDtcblx0bGVmdDogMjEwcHg7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHdoaXRlO1xufVxuXG51bCxcbmxpLFxubGkgYSB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbmxpIGEge1xuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdGNvbG9yOiAjODg4O1xuXHQvLyBkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR0cmFuc2l0aW9uOiBhbGwgLjJzO1xuXHR3aWR0aDogMjUwcHg7XG59XG5cbmxpIGE6aG92ZXIsXG5saSBhOmZvY3VzIHtcblx0YmFja2dyb3VuZDogIzI0ODVlODtcblx0Y29sb3I6ICNmZmY7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0d2lkdGg6IDEwMCVcbn1cblxuLm5ld19idXR0b24ge1xuXHRwYWRkaW5nLXJpZ2h0OiAzOHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4ubGlzdGJ1dHRvbiB7XG5cdC8vIGNvbG9yOiAjMjQ4NWU4O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHR0b3A6IDVweDtcblx0bWFyZ2luLWxlZnQ6IDBweDtcblx0c3BhbiB7XG5cdFx0Y29sb3I6ICMyMTI1Mjk7XG5cdFx0cGFkZGluZzogOHB4IDIwcHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0fVxufVxuXG4ubGlzdGJ1dHRvbjpob3ZlciB7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kOiAjMjQ4NWU4O1xuXHRtYXJnaW4tbGVmdDogMHB4O1xuXHRzcGFuIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdFx0cGFkZGluZzogOHB4IDIwcHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufVxuXG5cbi8qIGRlbW8gc3R5bGVzICovXG5cbmJvZHkge1xuXHRtYXJnaW4tdG9wOiAzZW07XG5cdGJhY2tncm91bmQ6ICNlZWU7XG5cdGNvbG9yOiAjNTU1O1xuXHRmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5wLFxucCBhIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiAjODg4O1xufVxuXG4ubWVudV90b2dnbGUge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDk5OTk5OTk5O1xuXHRyaWdodDogMTBweDtcblx0dG9wOiAxMDBweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xufSIsIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMFwiO1xuLmJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucndkLXRhYmxlIHtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgbWluLXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnJ3ZC10YWJsZSB0ciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnJ3ZC10YWJsZSB0aCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yd2QtdGFibGUgdGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5yd2QtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG59XG5cbi5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGgpIFwiOiBcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA5LjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcbiAgfVxuXG4gIC5yd2QtdGFibGUgdGg6Zmlyc3QtY2hpbGQsXG4ucndkLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAucndkLXRhYmxlIHRoOmxhc3QtY2hpbGQsXG4ucndkLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGNvbG9yOiAjMzQ0OTVFO1xufVxuXG4ucndkLXRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJ3ZC10YWJsZSAuaGVhZGVyXyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5yd2QtdGFibGUgdHIge1xuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLnJ3ZC10YWJsZSB0cjpob3Zlcjpub3QoLmhlYWRlcl8pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG4gIG1hcmdpbjogMC41ZW0gMWVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDFlbSAhaW1wb3J0YW50O1xuICB9XG59XG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuICBjb2xvcjogI2RkNTtcbn1cblxuLyogSW1wb3J0YW50IHN0eWxlcyAqL1xuI3RvZ2dsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDE1cHggYXV0byA1cHg7XG59XG5cbiN0b2dnbGUgc3BhbjphZnRlcixcbiN0b2dnbGUgc3BhbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLTZweDtcbn1cblxuI3RvZ2dsZSBzcGFuOmFmdGVyIHtcbiAgdG9wOiA2cHg7XG59XG5cbiN0b2dnbGUgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiN0b2dnbGUgc3BhbixcbiN0b2dnbGUgc3BhbjphZnRlcixcbiN0b2dnbGUgc3BhbjpiZWZvcmUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi8qIG9uIGFjdGl2YXRpb24gKi9cbiN0b2dnbGUub24gc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jdG9nZ2xlLm9uIHNwYW46YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIDVweCk7XG59XG5cbiN0b2dnbGUub24gc3BhbjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDdweCwgLThweCk7XG59XG5cbiN0b2dnbGUub24gKyAjbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8qIG1lbnUgYXBwZWFyYW5jZSovXG4jbWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMDBweDtcbiAgcmlnaHQ6IDNweDtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC8qIGp1c3QgZm9yIHRoaXMgZGVtbyAqL1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuI21lbnU6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAyMTBweDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgd2hpdGU7XG59XG5cbnVsLFxubGksXG5saSBhIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGkgYSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxubGkgYTpob3ZlcixcbmxpIGE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMjQ4NWU4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5ld19idXR0b24ge1xuICBwYWRkaW5nLXJpZ2h0OiAzOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4ubGlzdGJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmxpc3RidXR0b24gc3BhbiB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubGlzdGJ1dHRvbjpob3ZlciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMjQ4NWU4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmxpc3RidXR0b246aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogZGVtbyBzdHlsZXMgKi9cbmJvZHkge1xuICBtYXJnaW4tdG9wOiAzZW07XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5wLFxucCBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4ubWVudV90b2dnbGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk5OTk5O1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/firebase/paymentsrec/paymentsrec/paymentsrec.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/firebase/paymentsrec/paymentsrec/paymentsrec.page.ts ***!
  \**********************************************************************/
/*! exports provided: PaymentsrecPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsrecPage", function() { return PaymentsrecPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../app/firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _assets_paymentsrec_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../assets/paymentsrec.json */ "./src/assets/paymentsrec.json");
var _assets_paymentsrec_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../../assets/paymentsrec.json */ "./src/assets/paymentsrec.json", 1);
/* harmony import */ var _assets_company_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../assets/company.json */ "./src/assets/company.json");
var _assets_company_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../../assets/company.json */ "./src/assets/company.json", 1);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



// import { UserProfileModel } from "./user-profile.model";

// import { LanguageService } from "../../language/language.service";






// paymentsreceived



var PaymentsrecPage = /** @class */ (function () {
    function PaymentsrecPage(navCtrl, toastCtrl, loadingCtrl, firebaseService, authService, route, translate, 
    //  public languageService: LanguageService,
    alertController, storage) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.route = route;
        this.translate = translate;
        this.alertController = alertController;
        this.storage = storage;
        // ngx-table start
        this.paymentsrec = _assets_paymentsrec_json__WEBPACK_IMPORTED_MODULE_10__;
        this.companies = _assets_company_json__WEBPACK_IMPORTED_MODULE_11__;
        this.tableStyle = 'dark';
        this.customRowClass = false;
        // ngx-table end
        this.grid = false;
        this.myNumber = 5;
        // profile: UserProfileModel;
        this.available_languages = [];
        //  companiesArr: any[];
        // @HostBinding("class.is-shell") get isShell() {
        //   return this.profile && this.profile.isShell ? true : false;
        // }
        // Optional parameters to pass to the swiper instance.
        // See http://idangero.us/swiper/api/ for valid options.
        this.slideOpts = {
            slidesPerView: 5,
        };
        this.uid = this.authService.uid();
        this.email = this.authService.email();
        console.log(this.companies, this.paymentsrec);
        var arr = [];
        for (var i = 0; i < 10; i++) {
            console.log(this.companies[i]);
            arr.push(this.companies[i]);
        }
        this.companiesArr = arr;
        this.checkboxForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](""),
            provider_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](""),
            provider_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](""),
            provider_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](""),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("")
        });
    }
    PaymentsrecPage.prototype.ngOnInit = function () { };
    PaymentsrecPage.prototype.getTranslations = function () {
        var _this = this;
        // get translations for this page to use in the Language Chooser Alert
        this.translate
            .getTranslation(this.translate.currentLang)
            .subscribe(function (translations) {
            _this.translations = translations;
        });
    };
    // async openLanguageChooser() {
    //   this.available_languages = this.languageService
    //     .getLanguages()
    //     .map(item => ({
    //       name: item.name,
    //       type: "radio",
    //       label: item.name,
    //       value: item.code,
    //       checked: item.code === this.translate.currentLang
    //     }));
    //   const alert = await this.alertController.create({
    //     header: this.translations.SELECT_LANGUAGE,
    //     inputs: this.available_languages,
    //     cssClass: "language-alert",
    //     buttons: [
    //       {
    //         text: this.translations.CANCEL,
    //         role: "cancel",
    //         cssClass: "secondary",
    //         handler: () => { }
    //       },
    //       {
    //         text: this.translations.OK,
    //         handler: data => {
    //           if (data) {
    //             this.translate.use(data);
    //           }
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present();
    // }
    PaymentsrecPage.prototype.ionViewWillEnter = function () {
        // case when non first timer user(ie. teacher) fill in the form when logged out, submit quotation enquiry
        // this.save();
        this.readPaymentReceived();
    };
    PaymentsrecPage.prototype.doReorder = function (ev) {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log(ev.detail.complete(), "Dragged from index", ev.detail.from, "to", ev.detail.to);
        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        ev.detail.complete();
    };
    PaymentsrecPage.prototype.toggleReorderGroup = function () {
        this.reorderGroup.disabled = !this.reorderGroup.disabled;
    };
    PaymentsrecPage.prototype.selectedEnquiry = function (value) {
        console.log(value, value.id);
        this.selectedID = "check";
    };
    PaymentsrecPage.prototype.changeTargetValue = function (value) {
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
                return "??????";
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
            //   return "??????";
        }
    };
    PaymentsrecPage.prototype.checkUserStatus = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
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
            }
            else {
                // User is signed out.
                document.getElementById("sign-in-status").textContent = "Signed out";
                document.getElementById("sign-in").textContent = "Sign in";
                _this.signin = "Sign in";
                document.getElementById("account-details").textContent = "null";
            }
        }, function (error) {
            console.log(error);
        });
    };
    PaymentsrecPage.prototype.number = function (value, numDay) {
        //   console.log(value, numDay + 1, Number(numDay) + 1);
        var getcountday = Number(numDay) + 1;
        var limit = 1000 * 60 * 60 * 24 * getcountday + Number(value);
        this.countdownDate = new Date("Feb 13 2020").getTime();
        //     // console.log(this.countdownDate);
        var v = new Date(limit);
        var w = v.toString().substr(4, 11);
        var countdownDate = new Date(w.toString()).getTime();
        //   console.log(countdownDate, w, v, value);
        return countdownDate;
    };
    PaymentsrecPage.prototype.hideDropZone = function () {
        setTimeout(function () {
            console.log("hi");
        }, 3000);
    };
    // 1 check accepted and reject function done
    // 2 go to profile page and send sq as a first timer
    // 3 send email with on delete
    // async onGetEnquiryToTeacher() {
    //   this.myNumber += 1;
    //   console.log(this.myNumber);
    //   console.log(this.uid);
    //   this.firebaseService.getEnquiryToTeacher(this.uid).subscribe(res => {
    //     console.log(res);
    //     this.enquiryToT = res;
    //     this.enquiryToTLength = res.length;
    //   });
    // }
    PaymentsrecPage.prototype.onReadQE = function (value) {
        console.log(value);
    };
    // ngx - table start
    PaymentsrecPage.prototype.switchStyle = function () {
        if (this.tableStyle == 'dark') {
            this.tableStyle = 'bootstrap';
        }
        else {
            this.tableStyle = 'dark';
        }
    };
    PaymentsrecPage.prototype.getRowClass = function (row) {
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
    // onDetailPage(value, timestamp) {
    //   console.log(value, timestamp);
    //   const data = JSON.stringify(value);
    //   console.log(data);
    //   const navigationExtras: NavigationExtras = {
    //     queryParams: {
    //       data: data
    //     }
    //   };
    //   this.navCtrl.navigateForward(["/firebase/form-results"], navigationExtras);
    // }
    PaymentsrecPage.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log(event, val);
        // filter our data
        // const temp = this.temp.filter(function (d) {
        //   return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        // });
        // // update the rows
        // this.rows = temp;
        // // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
    };
    PaymentsrecPage.prototype.changeDateFormat = function (date) {
        var dateFormat = new Date(date).toString().substring(0, 15);
        return dateFormat;
    };
    // ngx - table end
    PaymentsrecPage.prototype.onCreateReceivedPayments = function () {
        this.navCtrl.navigateRoot(["/firebase/paymentsrec#create"]);
    };
    PaymentsrecPage.prototype.onDetailPage = function (value) {
        console.log(value);
        var data = JSON.stringify(value);
        console.log(data);
        var navigationExtras = {
            queryParams: {
                data: data
            }
        };
        this.navCtrl.navigateRoot(["/firebase/paymentsrec#details"], navigationExtras);
    };
    PaymentsrecPage.prototype.readPaymentReceived = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.readPaymentReceived(this.uid, this.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (changes) {
            return changes.map(function (c) {
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: c.payload.doc.id }, c.payload.doc.data()));
            });
        })).subscribe(function (data) {
            _this.paymentreceivedList = data;
            console.log(_this.paymentreceivedList);
        });
    };
    PaymentsrecPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"] },
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonReorderGroup"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonReorderGroup"])
    ], PaymentsrecPage.prototype, "reorderGroup", void 0);
    PaymentsrecPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paymentsrec',
            template: __webpack_require__(/*! raw-loader!./paymentsrec.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/paymentsrec/paymentsrec/paymentsrec.page.html"),
            styles: [__webpack_require__(/*! ./paymentsrec.page.scss */ "./src/app/firebase/paymentsrec/paymentsrec/paymentsrec.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"],
            _app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]])
    ], PaymentsrecPage);
    return PaymentsrecPage;
}());



/***/ }),

/***/ "./src/assets/paymentsrec.json":
/*!*************************************!*\
  !*** ./src/assets/paymentsrec.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"Payment Number\":1,\"CustomerPayment ID\":2401730000000081400,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000081000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":27780,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":1,\"Customer Name\":\"Tang kwok wai (Kokui)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-11-11\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000081400,\"Invoice Amount\":27780,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-11112033-A-1\"},{\"Payment Number\":2,\"CustomerPayment ID\":2401730000000087000,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000080000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":30000,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":2,\"Customer Name\":\"Raymond Law(JP)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-11-16\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000087000,\"Invoice Amount\":30000,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA 6112052-A\"},{\"Payment Number\":5,\"CustomerPayment ID\":2401730000000090600,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000080000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":30000,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":5,\"Customer Name\":\"Raymond Law(JP)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-11-19\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000090600,\"Invoice Amount\":30000,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-6112052-A-1\"},{\"Payment Number\":7,\"CustomerPayment ID\":2401730000000100000,\"Mode\":\"Check\",\"CustomerID\":2401730000000086000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":25860,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":7,\"Customer Name\":\"Chung Chi Ho (DiRoy)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-11-30\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000100000,\"Invoice Amount\":25860,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA16112013-A-1\"},{\"Payment Number\":8,\"CustomerPayment ID\":2401730000000103000,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000087000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":14100,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":8,\"Customer Name\":\"Ms. Cheung Wai Ching(CHING HOI )\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-11-30\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000103000,\"Invoice Amount\":14100,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-16112017-A-2\"},{\"Payment Number\":9,\"CustomerPayment ID\":2401730000000103000,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000087000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":14100,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":9,\"Customer Name\":\"Ms. Cheung(Seaport)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-11-30\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000103000,\"Invoice Amount\":14100,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-16112016-A-2\"},{\"Payment Number\":10,\"CustomerPayment ID\":2401730000000103400,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000099000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":32880,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":10,\"Customer Name\":\"Yeung Wai Tong (Sun Ping)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-11-30\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000103400,\"Invoice Amount\":32880,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-27112052-A-1\"},{\"Payment Number\":11,\"CustomerPayment ID\":2401730000000104400,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000089000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":20000,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":11,\"Customer Name\":\"DENNIS CHEUNG (OVVIO STUDIO)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-12-01\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000104400,\"Invoice Amount\":20000,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-18112031-A\"},{\"Payment Number\":12,\"CustomerPayment ID\":2401730000000104400,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000099300,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":35220,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":12,\"Customer Name\":\"Mr. Tang (Hong Fang )\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-12-02\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000104400,\"Invoice Amount\":35220,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-27112053-A-1\"},{\"Payment Number\":13,\"CustomerPayment ID\":2401730000000104400,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000103400,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":10000,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":13,\"Customer Name\":\"Henry Mak (Co Wealth)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-12-02\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000104400,\"Invoice Amount\":10000,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-30112014-A\"},{\"Payment Number\":14,\"CustomerPayment ID\":2401730000000108000,\"Mode\":\"Cash\",\"CustomerID\":2401730000000094000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":25860,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":14,\"Customer Name\":\"Sunny (Kong Orange)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-12-03\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000108000,\"Invoice Amount\":25860,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-24112021-A-1\"},{\"Payment Number\":15,\"CustomerPayment ID\":2401730000000109000,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000081000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":27780,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":15,\"Customer Name\":\"Tang kwok wai (Kokui)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-12-03\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000109000,\"Invoice Amount\":27780,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-11112033-A-2\"},{\"Payment Number\":16,\"CustomerPayment ID\":2401730000000114000,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000096000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":32880,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":16,\"Customer Name\":\"Mr. Mung (Double O)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-12-07\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000114000,\"Invoice Amount\":32880,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-25112031-A-1\"},{\"Payment Number\":17,\"CustomerPayment ID\":2401730000000116000,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000103400,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":10000,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":17,\"Customer Name\":\"Henry Mak (Co Wealth)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-12-08\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000116000,\"Invoice Amount\":10000,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-7122011-A\"},{\"Payment Number\":18,\"CustomerPayment ID\":2401730000000118000,\"Mode\":\"Cheque\",\"CustomerID\":2401730000000086000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":25860,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":18,\"Customer Name\":\"WONG LAP KAN(Immediately Cargo )\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-12-10\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000118300,\"Invoice Amount\":25860,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-16112014-A-1\"},{\"Payment Number\":19,\"CustomerPayment ID\":2401730000000126000,\"Mode\":\"Bank Transfer\",\"CustomerID\":2401730000000084000,\"Description\":\"\",\"Exchange Rate\":1,\"Amount\":1500,\"Unused Amount\":0,\"Bank Charges\":0,\"Reference Number\":\"\",\"Currency Code\":\"HKD\",\"Payment Number Prefix\":\"\",\"Payment Number Suffix\":19,\"Customer Name\":\"Helena( INCREDIBLE FITNESS LIMITED)\",\"Payment Type\":\"Invoice Payment\",\"Date\":\"2020-12-15\",\"Template Name\":\"Elite Template\",\"InvoicePayment ID\":2401730000000126000,\"Invoice Amount\":1500,\"Withholding Tax Amount\":0,\"Invoice Number\":\"PA-27112051-A\"}]");

/***/ })

}]);
//# sourceMappingURL=firebase-paymentsrec-paymentsrec-paymentsrec-module-es5.js.map