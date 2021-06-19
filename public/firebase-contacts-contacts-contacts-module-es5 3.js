(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-contacts-contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/contacts/contacts/contacts.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/contacts/contacts/contacts.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content class=\"user-profile-content\">\n    <ion-item-divider class=\"sticky_header\" sticky>\n        <ion-title>All Customers </ion-title>\n\n        <!-- <ion-button class=\"new_button\" color=\"theme\" fill=\"clear\" (click)=\"refresh()\">\n            <ion-icon name=\"refresh-circle-outline\"></ion-icon>\n        </ion-button> -->\n        <!-- \n        <ion-button color=\"\" fill=\"clear \" (click)=\"loadDemoCSV()\">\n            load Demo CSV\n        </ion-button> -->\n\n        <ion-button color=\"\" fill=\"clear \" (click)=\"exportDemoCSV()\">\n            Step 1: Demo file\n        </ion-button>\n\n        <!-- <ion-button class=\"new_button\" color=\"theme\" fill=\"solid\" slot=\"end\" (click)=\"convertCSVtoJSON()\">\n            convertCSVtoJSON\n        </ion-button> -->\n\n        <!-- <ion-button class=\"new_button\" color=\"theme\" fill=\"solid\" slot=\"end\" (click)=\"onCreateContact()\">\n            + New\n        </ion-button> -->\n\n        <!-- <ion-button fill=\"clear\" color=\"theme\" (click)=\"readContact()\">\n           Get\n          </ion-button> -->\n\n        <!-- <ion-button class=\"new_button\" color=\"premium\" fill=\"solid\" slot=\"end\"\n            (click)=\"showCreditNotesToggle = !showCreditNotesToggle\">\n            <ion-icon name=\"menu-outline\"></ion-icon>\n        </ion-button> -->\n\n        <!-- <div class=\"menu_toggle\" *ngIf=\"showCreditNotesToggle\">\n            <ul>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"show = !show\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-upload-sharp\"></ion-icon>\n                        <span>\n                            Upload contact\n                        </span>\n                    </ion-button>\n                </li>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"getCsvData()\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"\"></ion-icon>\n                        <span>\n                            One click bulk import\n                        </span>\n                    </ion-button>\n                </li>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"loadCSV()\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-upload-sharp\"></ion-icon>\n                        <span>\n                            Bulk import\n                        </span>\n                    </ion-button>\n                </li>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"realDownLoadCSV()\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-download-sharp\"></ion-icon>\n                        <span>\n                            Bulk export\n                        </span>\n                    </ion-button>\n                </li>\n            </ul>\n        </div> -->\n    </ion-item-divider>\n\n    <!-- The Modal -->\n    <div id=\"myModal\" class=\"modal \">\n\n        <!-- Modal content -->\n        <div class=\"modal-content animated fadeInDownBig\">\n            <span class=\"close\" id=\"close\">&times;</span>\n            <div style=\"padding: 20px;\">\n                <app-uploader-bulk-import [id]=\"uid\"></app-uploader-bulk-import>\n            </div>\n\n        </div>\n\n    </div>\n\n    <!-- <ion-progress-bar *ngIf=\"!contacts\" color=\"theme\" type=\"indeterminate\"></ion-progress-bar> -->\n\n    <!-- <button (click)=\"secondFunction()\">secondFunction</button> -->\n    <div style=\"background: #1b1e27\">\n        <ion-card style=\"box-shadow: none; margin: 0px;\">\n            <ion-card-header style=\"text-align: center; color: var(--ion-color-theme); font-size: larger;\">Make Billing\n                a Breeze with Client Info at Your Fingertips\n            </ion-card-header>\n            <ion-card-content>\n                <ion-row>\n                    <ion-col class=\"left\" style=\"text-align: center;\">\n                        <div>\n                            <img class=\"img\" style=\"margin-left: auto; margin-right: auto; display: block;\"\n                                src=\"../../../../assets/images/home_categories/it_all_starts_with_clients.png\" alt=\"\">\n                        </div>\n\n                        <ion-title>It All\n                            Starts with Clients\n                        </ion-title>\n\n                        <p>Get yourself up and running with organized clients. Learn more</p>\n\n                    </ion-col>\n                    <ion-col style=\"text-align: center;\">\n                        <div>\n                            <img class=\"img\" style=\"margin-left: auto; margin-right: auto; display: block;\"\n                                src=\"../../../../assets/images/home_categories/outstanding_client_revenus.png\" alt=\"\">\n                        </div>\n\n                        <ion-title>Outstanding Client Revenue\n                        </ion-title>\n\n                        <p>Know exactly where your client stands with any outstanding invoices.</p>\n\n                    </ion-col>\n                    <ion-col style=\"text-align: center;\">\n                        <div>\n                            <img class=\"img\" style=\"margin-left: auto; margin-right: auto; display: block;\"\n                                src=\"../../../../assets/images/home_categories/have_lots_of_clients.png\" alt=\"\">\n                        </div>\n\n                        <ion-title>Have Lots of Clients?\n                        </ion-title>\n\n                        <p>Automatically import your clients from</p>\n                        <p>a .csv file. <button style=\"color: var(--ion-color-theme); padding: 5px; border-radius: 5px\"\n                                class=\"animated infinite heartBeat slower\" id=\"myBtn\">Step 2. Import\n                                now</button></p>\n\n                    </ion-col>\n                </ion-row>\n            </ion-card-content>\n\n        </ion-card>\n    </div>\n\n    <app-nodata *ngIf=\"!downloadURL\"></app-nodata>\n    <app-rating-input *ngIf=\"!contacts && downloadURL\"></app-rating-input>\n\n    <div *ngIf=\"contacts\">\n        <ion-row class=\"new\">\n            <ion-col class=\"col-left\" style=\"padding: 0px;\" size=\"12\">\n                <ngx-datatable [rows]=\"contacts\" [ngClass]=\"tableStyle\" [rowHeight]=\"auto\" [headerHeight]=\"50\"\n                    [columnMode]=\"'force'\" [rowClass]=\"getRowClass.bind(this)\" [limit]=\"10\" [footerHeight]=\"50\">\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            CUSTOMER ID\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <div class=\"button\" (click)=\"onDetailPage(row, contacts)\"> {{row['Customer ID']}}\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            COMPANY NAME\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <!-- {{row['CF.Company Name']}} -->\n                            {{row['Company Name']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            EMAIL\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['EmailID']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            WORK PHONE\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <!-- {{row['CF.Phone']}} -->\n                            {{row['Phone']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <!-- <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            RECEIVABLE\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            HKD 0.00\n                        </ng-template>\n                    </ngx-datatable-column> -->\n\n                    <!-- <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            UNUSED CREDITS\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            HKD 0.00\n                        </ng-template>\n                    </ngx-datatable-column> -->\n                </ngx-datatable>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <!-- <div class=\"animated fadeIn\">\n        <table border=\"0\" class=\"rwd-table\">\n            <tr class=\"header_\">\n                <td *ngFor=\"let header of headerRowDemo\">\n                    <b>\n                        {{header}}\n                    </b>\n                </td>\n            </tr>\n            <tr *ngFor=\"let row of csvDemoData; let i = index\">\n                <td *ngFor=\"let data of row; let j = index; trackBy: trackByFn\" class=\"data-col\">\n                    {{csvDemoData[i][j]}}\n                </td>\n            </tr>\n        </table>\n    </div> -->\n\n    <app-global-banner></app-global-banner>\n</ion-content>\n<app-global-footer></app-global-footer>"

/***/ }),

/***/ "./src/app/firebase/contacts/contacts/contacts.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/firebase/contacts/contacts/contacts.module.ts ***!
  \***************************************************************/
/*! exports provided: ContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.page */ "./src/app/firebase/contacts/contacts/contacts.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");











var routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]
    }
];
var ContactsPageModule = /** @class */ (function () {
    function ContactsPageModule() {
    }
    ContactsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // TranslateModule,
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"]
            ],
            declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]],
            providers: [
                //  UserProfileResolver,
                //  UserService,
                _firebase_integration_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseService"],
                _app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            ]
        })
    ], ContactsPageModule);
    return ContactsPageModule;
}());



/***/ }),

/***/ "./src/app/firebase/contacts/contacts/contacts.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/firebase/contacts/contacts/contacts.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Montserrat:300,400,700\";\n.button {\n  color: var(--ion-color-theme);\n  font-weight: bold;\n}\n.button:hover {\n  cursor: pointer;\n  color: var(--ion-color-theme);\n  font-weight: bold;\n}\n.rwd-table {\n  margin: 1em 0;\n  min-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n  font-size: 0.8rem;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 9.5em;\n  display: inline-block;\n}\n@media (min-width: 480px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n@media (min-width: 480px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.25em 0.5em;\n  }\n\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\nh1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n.rwd-table {\n  margin-top: 0px;\n  background: white;\n  color: var(--ion-color-theme);\n  border-radius: 0.4em;\n  overflow: hidden;\n  width: 100%;\n}\n.rwd-table .header_ {\n  background: white;\n  color: black;\n}\n.rwd-table tr {\n  border-color: lightgray;\n}\n.rwd-table tr:hover:not(.header_) {\n  cursor: pointer;\n  background-color: #f2f2f2;\n}\n.rwd-table th,\n.rwd-table td {\n  margin: 0.5em 1em;\n}\n@media (min-width: 480px) {\n  .rwd-table th,\n.rwd-table td {\n    padding: 1em !important;\n  }\n}\n.rwd-table th,\n.rwd-table td:before {\n  color: #dd5;\n}\n/* Important styles */\n#toggle {\n  display: block;\n  width: 30px;\n  height: 20px;\n  margin: 15px auto 5px;\n}\n#toggle span:after,\n#toggle span:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: -6px;\n}\n#toggle span:after {\n  top: 6px;\n}\n#toggle span {\n  position: relative;\n  display: block;\n}\n#toggle span,\n#toggle span:after,\n#toggle span:before {\n  width: 20px;\n  height: 3px;\n  right: 15px;\n  background-color: #888;\n  transition: all 0.3s;\n  backface-visibility: hidden;\n  border-radius: 2px;\n}\n/* on activation */\n#toggle.on span {\n  background-color: transparent;\n}\n#toggle.on span:before {\n  transform: rotate(45deg) translate(5px, 5px);\n}\n#toggle.on span:after {\n  transform: rotate(-45deg) translate(7px, -8px);\n}\n#toggle.on + #menu {\n  opacity: 1;\n  visibility: visible;\n}\n/* menu appearance*/\n#menu {\n  position: fixed;\n  top: 100px;\n  right: 3px;\n  color: #999;\n  margin: auto;\n  text-align: center;\n  background: white;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);\n  /* just for this demo */\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.4s;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n#menu:before {\n  position: absolute;\n  top: -20px;\n  left: 210px;\n  content: \"\";\n  display: block;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 20px solid white;\n}\nul,\nli,\nli a {\n  list-style: none;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\nli a {\n  padding: 10px 20px;\n  color: #888;\n  text-decoration: none;\n  text-align: left;\n  transition: all 0.2s;\n  width: 250px;\n}\nli a:hover,\nli a:focus {\n  background: #2485e8;\n  color: #fff;\n  cursor: pointer;\n  width: 100%;\n}\n.new_button {\n  padding-right: 38px;\n  padding-bottom: 4px;\n}\n.listbutton {\n  padding-left: 10px;\n  width: 100%;\n  top: 5px;\n  margin-left: 0px;\n}\n.listbutton span {\n  color: #212529;\n  padding: 8px 20px;\n  text-align: left;\n  width: 100%;\n  text-transform: capitalize;\n}\n.listbutton:hover {\n  padding-left: 10px;\n  color: white;\n  background: #2485e8;\n  margin-left: 0px;\n}\n.listbutton:hover span {\n  color: white;\n  text-transform: capitalize;\n  padding: 8px 20px;\n  text-align: left;\n  width: 100%;\n}\n/* demo styles */\nbody {\n  margin-top: 3em;\n  background: #eee;\n  color: #555;\n  font-family: \"Open Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif;\n}\np,\np a {\n  font-size: 12px;\n  text-align: center;\n  color: #888;\n}\n.menu_toggle {\n  position: fixed;\n  z-index: 99999999;\n  right: 10px;\n  top: 100px;\n  background: white;\n  border-radius: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n}\n.hide {\n  display: none;\n}\n.myDIV:hover + .hide {\n  display: block;\n  color: red;\n}\n.img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  cursor: pointer;\n  width: 70px !important;\n  margin-bottom: 20px;\n  transition: transform 0.5s ease;\n}\n.img:hover {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  cursor: pointer;\n  transform: scale(1.1);\n}\n/* The Modal (background) */\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  border-radius: 8px;\n}\n/* Modal Content */\n.modal-content {\n  background-color: var(--ion-color-dark-tint);\n  margin: auto;\n  padding: 20px;\n  margin-top: 10%;\n  border: 1px solid var(--ion-color-theme);\n  width: 80%;\n}\n/* The Close Button */\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9jb250YWN0cy9jb250YWN0cy9jb250YWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2NvbnRhY3RzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXUSx3RUFBQTtBQVhSO0VBQ0MsNkJBQUE7RUFDQSxpQkFBQTtBQ0VEO0FEQ0E7RUFDQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ0VEO0FERUE7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7QURFQTtFQUNDLDBCQUFBO0VBQ0EsNkJBQUE7QUNDRDtBREVBO0VBQ0MsYUFBQTtBQ0NEO0FERUE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7QUNDRDtBREVBO0VBQ0Msa0JBQUE7QUNDRDtBREVBO0VBQ0MscUJBQUE7QUNDRDtBREVBO0VBQ0MsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0NEO0FERUE7RUFDQztJQUNDLGFBQUE7RUNDQTtBQUNGO0FERUE7O0VBRUMsZ0JBQUE7QUNBRDtBREdBO0VBQ0M7O0lBRUMsbUJBQUE7SUFDQSxxQkFBQTtFQ0FBOztFREVEOztJQUVDLGVBQUE7RUNDQTs7RURDRDs7SUFFQyxnQkFBQTtFQ0VBO0FBQ0Y7QURTQTtFQUNDLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDUEQ7QURVQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNQRDtBRFVBO0VBQ0MsaUJBQUE7RUFDQSxZQUFBO0FDUEQ7QURVQTtFQUNDLHVCQUFBO0FDUEQ7QURXQTtFQUNDLGVBQUE7RUFDQSx5QkFBQTtBQ1JEO0FEV0E7O0VBRUMsaUJBQUE7QUNSRDtBRFdBO0VBQ0M7O0lBRUMsdUJBQUE7RUNSQTtBQUNGO0FEV0E7O0VBRUMsV0FBQTtBQ1REO0FEYUEscUJBQUE7QUFFQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDWEQ7QURjQTs7RUFFQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ1hEO0FEY0E7RUFDQyxRQUFBO0FDWEQ7QURjQTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtBQ1hEO0FEY0E7OztFQUdDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDWEQ7QURlQSxrQkFBQTtBQUVBO0VBQ0MsNkJBQUE7QUNiRDtBRGdCQTtFQUNDLDRDQUFBO0FDYkQ7QURnQkE7RUFDQyw4Q0FBQTtBQ2JEO0FEZ0JBO0VBQ0MsVUFBQTtFQUNBLG1CQUFBO0FDYkQ7QURpQkEsbUJBQUE7QUFFQTtFQUNDLGVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFHQSxZQUFBO0VBRUEsa0JBQUE7RUFFQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7QUNuQkQ7QURzQkE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7QUNuQkQ7QURzQkE7OztFQUdDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDbkJEO0FEc0JBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBRUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ3BCRDtBRHVCQTs7RUFFQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ3BCRDtBRHVCQTtFQUNDLG1CQUFBO0VBQ0EsbUJBQUE7QUNwQkQ7QUR1QkE7RUFFQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNyQkQ7QURzQkM7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ3BCRjtBRHdCQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNyQkQ7QURzQkM7RUFDQyxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ3BCRjtBRHlCQSxnQkFBQTtBQUVBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtFQUFBO0FDdkJEO0FEMEJBOztFQUVDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUN2QkQ7QUQwQkE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQ3ZCRDtBRDBCQTtFQUNDLGFBQUE7QUN2QkQ7QUQwQkE7RUFDQyxjQUFBO0VBQ0EsVUFBQTtBQ3ZCRDtBRDhCQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQywrQkFBQTtBQzNCRjtBRDhCQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0QsZUFBQTtFQUVDLHFCQUFBO0FDNUJEO0FEK0JBLDJCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQWUsc0JBQUE7RUFDZixlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLFVBQUE7RUFBWSxlQUFBO0VBQ1osa0JBQUE7RUFBb0Isd0JBQUE7RUFDcEIsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQWEsZUFBQTtFQUNiLFlBQUE7RUFBYyxnQkFBQTtFQUNkLGNBQUE7RUFBZ0IsNEJBQUE7RUFDaEIsdUJBQUE7RUFBOEIsbUJBQUE7RUFDOUIsb0NBQUE7RUFBbUMscUJBQUE7RUFDbkMsa0JBQUE7QUNuQkY7QURzQkEsa0JBQUE7QUFDQTtFQUNFLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxVQUFBO0FDbkJGO0FEdUJBLHFCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3BCRjtBRHVCQTs7RUFFRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDcEJGIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvY29udGFjdHMvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw3MDBcIjtcbi5yd2QtdGFibGUge1xuXHRtYXJnaW46IDFlbSAwO1xuXHRtaW4td2lkdGg6IDkwMHB4O1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucndkLXRhYmxlIHRyIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ucndkLXRhYmxlIHRoIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnJ3ZC10YWJsZSB0ZCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG5cdHBhZGRpbmctdG9wOiAuNWVtO1xufVxuXG4ucndkLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuXHRwYWRkaW5nLWJvdHRvbTogLjVlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuXHRjb250ZW50OiBhdHRyKGRhdGEtdGgpIFwiOiBcIjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHdpZHRoOiA5LjVlbTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0LnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0LnJ3ZC10YWJsZSB0aCxcblx0LnJ3ZC10YWJsZSB0ZCB7XG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRwYWRkaW5nOiAuMjVlbSAuNWVtO1xuXHR9XG5cdC5yd2QtdGFibGUgdGg6Zmlyc3QtY2hpbGQsXG5cdC5yd2QtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuXHRcdHBhZGRpbmctbGVmdDogMDtcblx0fVxuXHQucndkLXRhYmxlIHRoOmxhc3QtY2hpbGQsXG5cdC5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG5cdFx0cGFkZGluZy1yaWdodDogMDtcblx0fVxufVxuXG4vLyBib2R5IHtcbi8vICAgcGFkZGluZzogMCAyZW07XG4vLyAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuLy8gICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbi8vICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbi8vICAgY29sb3I6ICM0NDQ7XG4vLyAgIGJhY2tncm91bmQ6ICNlZWU7XG4vLyB9XG5oMSB7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGxldHRlci1zcGFjaW5nOiAtMXB4O1xuXHRjb2xvcjogIzM0NDk1RTtcbn1cblxuLnJ3ZC10YWJsZSB7XG5cdG1hcmdpbi10b3A6IDBweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRib3JkZXItcmFkaXVzOiAuNGVtO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLnJ3ZC10YWJsZSAuaGVhZGVyXyB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbi5yd2QtdGFibGUgdHIge1xuXHRib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLy8gLnJ3ZC10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxuLnJ3ZC10YWJsZSB0cjpob3Zlcjpub3QoLmhlYWRlcl8pIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG5cdG1hcmdpbjogLjVlbSAxZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHQucndkLXRhYmxlIHRoLFxuXHQucndkLXRhYmxlIHRkIHtcblx0XHRwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcblx0fVxufVxuXG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuXHRjb2xvcjogI2RkNTtcbn1cblxuXG4vKiBJbXBvcnRhbnQgc3R5bGVzICovXG5cbiN0b2dnbGUge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDMwcHg7XG5cdGhlaWdodDogMjBweDtcblx0bWFyZ2luOiAxNXB4IGF1dG8gNXB4O1xufVxuXG4jdG9nZ2xlIHNwYW46YWZ0ZXIsXG4jdG9nZ2xlIHNwYW46YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IC02cHg7XG59XG5cbiN0b2dnbGUgc3BhbjphZnRlciB7XG5cdHRvcDogNnB4O1xufVxuXG4jdG9nZ2xlIHNwYW4ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jdG9nZ2xlIHNwYW4sXG4jdG9nZ2xlIHNwYW46YWZ0ZXIsXG4jdG9nZ2xlIHNwYW46YmVmb3JlIHtcblx0d2lkdGg6IDIwcHg7XG5cdGhlaWdodDogM3B4O1xuXHRyaWdodDogMTVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzg4ODtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5cbi8qIG9uIGFjdGl2YXRpb24gKi9cblxuI3RvZ2dsZS5vbiBzcGFuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiN0b2dnbGUub24gc3BhbjpiZWZvcmUge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCwgNXB4KTtcbn1cblxuI3RvZ2dsZS5vbiBzcGFuOmFmdGVyIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoN3B4LCAtOHB4KTtcbn1cblxuI3RvZ2dsZS5vbisjbWVudSB7XG5cdG9wYWNpdHk6IDE7XG5cdHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cblxuLyogbWVudSBhcHBlYXJhbmNlKi9cblxuI21lbnUge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMTAwcHg7XG5cdHJpZ2h0OiAzcHg7XG5cdGNvbG9yOiAjOTk5O1xuXHQvLyB3aWR0aDogMjAwcHg7XG5cdC8vICBwYWRkaW5nOiA1cHggMjBweDtcblx0bWFyZ2luOiBhdXRvO1xuXHQvLyBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBDYW5kYXJhLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnNcIiwgXCJEZWphVnUgU2Fuc1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnNcIiwgXCJUcmVidWNoZXQgTVNcIiwgVmVyZGFuYSwgXCJWZXJkYW5hIFJlZlwiLCBzYW5zLXNlcmlmO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdC8vIGJvcmRlci1yYWRpdXM6IDRweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXHQvKiBqdXN0IGZvciB0aGlzIGRlbW8gKi9cblx0b3BhY2l0eTogMDtcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC40cztcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xuXHRib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG5cbiNtZW51OmJlZm9yZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtMjBweDtcblx0bGVmdDogMjEwcHg7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHdoaXRlO1xufVxuXG51bCxcbmxpLFxubGkgYSB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbmxpIGEge1xuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdGNvbG9yOiAjODg4O1xuXHQvLyBkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR0cmFuc2l0aW9uOiBhbGwgLjJzO1xuXHR3aWR0aDogMjUwcHg7XG59XG5cbmxpIGE6aG92ZXIsXG5saSBhOmZvY3VzIHtcblx0YmFja2dyb3VuZDogIzI0ODVlODtcblx0Y29sb3I6ICNmZmY7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0d2lkdGg6IDEwMCVcbn1cblxuLm5ld19idXR0b24ge1xuXHRwYWRkaW5nLXJpZ2h0OiAzOHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4ubGlzdGJ1dHRvbiB7XG5cdC8vIGNvbG9yOiAjMjQ4NWU4O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHR0b3A6IDVweDtcblx0bWFyZ2luLWxlZnQ6IDBweDtcblx0c3BhbiB7XG5cdFx0Y29sb3I6ICMyMTI1Mjk7XG5cdFx0cGFkZGluZzogOHB4IDIwcHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0fVxufVxuXG4ubGlzdGJ1dHRvbjpob3ZlciB7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kOiAjMjQ4NWU4O1xuXHRtYXJnaW4tbGVmdDogMHB4O1xuXHRzcGFuIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdFx0cGFkZGluZzogOHB4IDIwcHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufVxuXG5cbi8qIGRlbW8gc3R5bGVzICovXG5cbmJvZHkge1xuXHRtYXJnaW4tdG9wOiAzZW07XG5cdGJhY2tncm91bmQ6ICNlZWU7XG5cdGNvbG9yOiAjNTU1O1xuXHRmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5wLFxucCBhIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiAjODg4O1xufVxuXG4ubWVudV90b2dnbGUge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDk5OTk5OTk5O1xuXHRyaWdodDogMTBweDtcblx0dG9wOiAxMDBweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xufVxuXG4uaGlkZSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5teURJVjpob3ZlcisuaGlkZSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjb2xvcjogcmVkO1xufVxuXG4ubGVmdCB7XG5cbn1cblxuLmltZyB7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdCB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XG59XG5cbi5pbWc6aG92ZXIge1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRkaXNwbGF5OiBibG9jaztcbmN1cnNvcjogcG9pbnRlcjtcbi8vIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4vKiBNb2RhbCBDb250ZW50ICovXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgd2lkdGg6IDgwJTtcblxufVxuXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXG4uY2xvc2Uge1xuICBjb2xvcjogI2FhYWFhYTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwXCI7XG4uYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yd2QtdGFibGUge1xuICBtYXJnaW46IDFlbSAwO1xuICBtaW4td2lkdGg6IDkwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucndkLXRhYmxlIHRyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ucndkLXRhYmxlIHRoIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJ3ZC10YWJsZSB0ZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xufVxuXG4ucndkLXRhYmxlIHRkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aCkgXCI6IFwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDkuNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAucndkLXRhYmxlIHRkOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xuICB9XG5cbiAgLnJ3ZC10YWJsZSB0aDpmaXJzdC1jaGlsZCxcbi5yd2QtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuXG4gIC5yd2QtdGFibGUgdGg6bGFzdC1jaGlsZCxcbi5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuaDEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgY29sb3I6ICMzNDQ5NUU7XG59XG5cbi5yd2QtdGFibGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucndkLXRhYmxlIC5oZWFkZXJfIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnJ3ZC10YWJsZSB0ciB7XG4gIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4ucndkLXRhYmxlIHRyOmhvdmVyOm5vdCguaGVhZGVyXykge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkIHtcbiAgbWFyZ2luOiAwLjVlbSAxZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkOmJlZm9yZSB7XG4gIGNvbG9yOiAjZGQ1O1xufVxuXG4vKiBJbXBvcnRhbnQgc3R5bGVzICovXG4jdG9nZ2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMTVweCBhdXRvIDVweDtcbn1cblxuI3RvZ2dsZSBzcGFuOmFmdGVyLFxuI3RvZ2dsZSBzcGFuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAtNnB4O1xufVxuXG4jdG9nZ2xlIHNwYW46YWZ0ZXIge1xuICB0b3A6IDZweDtcbn1cblxuI3RvZ2dsZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI3RvZ2dsZSBzcGFuLFxuI3RvZ2dsZSBzcGFuOmFmdGVyLFxuI3RvZ2dsZSBzcGFuOmJlZm9yZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLyogb24gYWN0aXZhdGlvbiAqL1xuI3RvZ2dsZS5vbiBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiN0b2dnbGUub24gc3BhbjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCwgNXB4KTtcbn1cblxuI3RvZ2dsZS5vbiBzcGFuOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoN3B4LCAtOHB4KTtcbn1cblxuI3RvZ2dsZS5vbiArICNtZW51IHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLyogbWVudSBhcHBlYXJhbmNlKi9cbiNtZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwMHB4O1xuICByaWdodDogM3B4O1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgLyoganVzdCBmb3IgdGhpcyBkZW1vICovXG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4jbWVudTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IDIxMHB4O1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB3aGl0ZTtcbn1cblxudWwsXG5saSxcbmxpIGEge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5saSBhIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBjb2xvcjogIzg4ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG5saSBhOmhvdmVyLFxubGkgYTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMyNDg1ZTg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmV3X2J1dHRvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDM4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG5cbi5saXN0YnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ubGlzdGJ1dHRvbiBzcGFuIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5saXN0YnV0dG9uOmhvdmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMyNDg1ZTg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ubGlzdGJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBkZW1vIHN0eWxlcyAqL1xuYm9keSB7XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbnAsXG5wIGEge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4ODg7XG59XG5cbi5tZW51X3RvZ2dsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTk5OTk7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5teURJVjpob3ZlciArIC5oaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbWcge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xufVxuXG4uaW1nOmhvdmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTtcbiAgLyogU2l0IG9uIHRvcCAqL1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLyogTW9kYWwgQ29udGVudCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cbi5jbG9zZSB7XG4gIGNvbG9yOiAjYWFhYWFhO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/firebase/contacts/contacts/contacts.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/firebase/contacts/contacts/contacts.page.ts ***!
  \*************************************************************/
/*! exports provided: ContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPage", function() { return ContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../app/firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _assets_invoices_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../assets/invoices.json */ "./src/assets/invoices.json");
var _assets_invoices_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../../assets/invoices.json */ "./src/assets/invoices.json", 1);
/* harmony import */ var _assets_company_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../assets/company.json */ "./src/assets/company.json");
var _assets_company_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../../assets/company.json */ "./src/assets/company.json", 1);
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _assets_estimatelist_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../assets/estimatelist.json */ "./src/assets/estimatelist.json");
var _assets_estimatelist_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../../assets/estimatelist.json */ "./src/assets/estimatelist.json", 1);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


// import { UserProfileModel } from "./user-profile.model";

// import { LanguageService } from "../../language/language.service";




// invoices






var ContactsPage = /** @class */ (function () {
    // ngx-table end
    function ContactsPage(authService, plt, http, navCtrl, toastCtrl, firebaseService, translate, alertController, storage, papa) {
        this.authService = authService;
        this.plt = plt;
        this.http = http;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.firebaseService = firebaseService;
        this.translate = translate;
        this.alertController = alertController;
        this.storage = storage;
        this.papa = papa;
        // ngx-table start
        // private contacts = contactsdata;
        this.invoices = _assets_invoices_json__WEBPACK_IMPORTED_MODULE_7__;
        this.sideNavInvoice = true;
        this.quotesData = _assets_estimatelist_json__WEBPACK_IMPORTED_MODULE_11__;
        this.companies = _assets_company_json__WEBPACK_IMPORTED_MODULE_8__;
        this.tableStyle = 'dark';
        this.customRowClass = false;
        this.csvData = [];
        this.headerRow = [];
        this.headerRowDemo = [];
        this.csvDemoData = [];
        this.email = this.authService.email();
        this.uid = this.authService.uid();
        console.log(this.companies, this.invoices);
        console.log('quotes data: ', this.quotesData);
        this.loadDemoCSV();
    }
    ContactsPage.prototype.ngOnInit = function () { };
    ContactsPage.prototype.ionViewWillEnter = function () {
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        var close = document.getElementById("close");
        // When the user clicks the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        };
        // When the user clicks on <span> (x), close the modal
        close.onclick = function () {
            modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
        this.getCsvData();
        //  this.readContact();
        // this.http.get(this.downloadURL, {
        //   responseType: 'text'
        // }).subscribe(
        //   data => this.extractData(data),
        //   err => console.log('error', err)
        // )
    };
    ContactsPage.prototype.refresh = function () {
        var _this = this;
        this.firebaseService.readContactsinCSV(this.uid, this.email).subscribe(function (res) {
            //  this.downloadURL = res[0]['downloadURL'];
            _this.downloadURL = res.userData['downloadURL'];
            console.log('csv import value: ', res, _this.downloadURL);
        });
        this.http.get(this.downloadURL, {
            responseType: 'text'
        }).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }
        // this.extractData(data),
        );
    };
    ContactsPage.prototype.onCreateContact = function () {
        this.navCtrl.navigateRoot(["/firebase/create#contacts"]);
    };
    ContactsPage.prototype.onDetailPage = function (value, values) {
        console.log(value);
        var data = JSON.stringify(value);
        console.log(data);
        var datas = JSON.stringify(values);
        var navigationExtras = {
            queryParams: {
                data: data,
                datas: datas
            }
        };
        this.navCtrl.navigateRoot(["/firebase/contacts#details"], navigationExtras);
    };
    ContactsPage.prototype.trackByFn = function (index, item) {
        return index;
    };
    // Step 1: bulk import data from the csv file contact list
    //  <app-uploader-bulk-import [id]="uid"></app-uploader-bulk-import>
    // Step 2: convert the data from csv to json and to be shown on the  
    ContactsPage.prototype.getCsvData = function () {
        var _this = this;
        this.firebaseService.readContactsinCSV(this.uid, this.email).subscribe(function (res) {
            _this.contact = res.userData;
            if (res.userData) {
                console.log('res');
                console.log(res.userData);
                _this.downloadURL = res.userData['downloadURL'];
                console.log('csv import value: ', res, _this.downloadURL);
                _this.loadCSV();
                setTimeout(function () {
                    _this.exportCSV();
                    console.log('export CSV');
                }, 2000);
                setTimeout(function () {
                    _this.convertCSVtoJSON();
                }, 4000);
            }
            else if (!res.userData) {
                console.log('res');
                console.log(res.userData);
            }
            else {
                console.error(res);
            }
        });
    };
    // try out the async await funciton
    ContactsPage.prototype.firstFunction = function () {
        return new Promise(function (resolve, reject) {
            var y = 0;
            setTimeout(function () {
                for (var i = 0; i < 10; i++) {
                    y++;
                }
                console.log('loop completed');
                resolve(y);
            }, 2000);
        });
    };
    ContactsPage.prototype.secondFunction = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('before promise call');
                        return [4 /*yield*/, this.firstFunction()];
                    case 1:
                        result = _a.sent();
                        console.log('promise resolved: ' + result);
                        console.log('next step');
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    ContactsPage.prototype.loadCSV = function () {
        var _this = this;
        console.log('load CSV', this.downloadURL);
        function readBody(xhr) {
            var data;
            if (!xhr.responseType || xhr.responseType === "text") {
                data = xhr.responseText;
            }
            else if (xhr.responseType === "document") {
                data = xhr.responseXML;
            }
            else {
                data = xhr.response;
            }
            return data;
        }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.downloadURL, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                console.log(readBody(xhr));
                _this.readyBody = readBody(xhr);
                _this.extractData(_this.readyBody);
            }
        };
        // xhr.setRequestHeader("Content-Type", "text/html; charset=UTF-8");
        // xhr.setRequestHeader('Content-type', 'application/json');
        // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        //  xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Allow');
        //   xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET,POST');
        // xhr.setRequestHeader('Allow', "GET");
        xhr.send();
        // this.http.get(this.downloadURL, { responseType: 'text' })
        //   .pipe(
        //     tap( // Log the result or error
        //       data => this.extractData(data),
        //       //  data => console.log(data),
        //       error => error.log(this.downloadURL, error)
        //     )
        //   );
    };
    ContactsPage.prototype.extractData = function (res) {
        var _this = this;
        console.log('res is => ', res);
        var csvData = res || '';
        this.papa.parse(csvData, {
            complete: function (parsedData) {
                console.log(parsedData);
                //  console.log(parsedData.data.splice(0, 1)[0]);
                _this.headerRow = parsedData.data.splice(0, 1)[0];
                _this.csvData = parsedData.data;
                console.log(_this.headerRow);
            }
        });
        console.log(res, this.csvData);
    };
    ContactsPage.prototype.exportCSV = function () {
        var csv = this.papa.unparse({
            fields: this.headerRow,
            data: this.csvData
        });
        this.csv = csv;
        console.log('header row: ', this.headerRow);
        console.log('csv: ', this.csvData);
        //    console.log('contacts: ', this.contacts);
        // if (this.plt.is('cordova')) {
        //   console.log('cordova');
        // } else {
        //   console.log('not cordova');
        //   var blob = new Blob([csv]);
        //   var a = window.document.createElement('a');
        //   a.href = window.URL.createObjectURL(blob);
        //   a.download = 'contacts.csv';
        //   document.body.appendChild(a);
        //   a.click();
        //   document.body.removeChild(a);
        // }
    };
    ContactsPage.prototype.realDownLoadCSV = function () {
        if (this.plt.is('cordova')) {
            console.log('cordova');
        }
        else {
            console.log('not cordova');
            var blob = new Blob([this.csv]);
            var a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'contacts.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    ContactsPage.prototype.convertCSVtoJSON = function () {
        console.log(this.csv);
        // our dummy CSV let csvStr = `ONE,TWO,THREE,FOUR,FIVE "escape""quote","escape,comma",no quotes,"double""""quote","quote"",comma" true,123,null,undefined,"[false,456,null]" true,123,null,undefined,{"one":"two"}`; 
        // running Papa Parse, you just pass it your csv. 
        // our dummy CSV 
        // let csvStr = `ONE,TWO,THREE,FOUR,FIVE "escape""quote","escape,comma",no quotes,"double""""quote","quote"",comma" true,123,null,undefined,"[false,456,null]" true,123,null,undefined,{"one":"two"}`;
        // running Papa Parse, you just pass it your csv. 
        var csv = this.papa.parse(this.csv, {
            delimiter: "",
            newline: "",
            quoteChar: '"Name"',
            escapeChar: '"',
            header: true,
            dynamicTyping: false,
            skipEmptyLines: true
        });
        // the arrays of csv fields are in the data property 
        this.contacts = csv.data;
        console.log('contacts: ', this.contacts);
    };
    ContactsPage.prototype.readContact = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.readContacts(this.uid, this.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (changes) {
            return changes.map(function (c) {
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: c.payload.doc.id }, c.payload.doc.data()));
            });
        })).subscribe(function (data) {
            _this.contactsList = data;
        });
    };
    ContactsPage.prototype.getRowClass = function (row) {
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
    ContactsPage.prototype.loadDemoCSV = function () {
        var _this = this;
        this.http.get('./assets/demo.csv', {
            responseType: 'text'
        }).subscribe(function (data) {
            return _this.extractDemoData(data);
        }, function (err) { return console.log('error', err); });
    };
    ContactsPage.prototype.extractDemoData = function (res) {
        var _this = this;
        var csvData = res || '';
        console.log(csvData);
        this.papa.parse(csvData, {
            complete: function (parsedData) {
                console.log(parsedData);
                //  console.log(parsedData.data.splice(0, 1)[0]);
                _this.headerRowDemo = parsedData.data.splice(0, 1)[0];
                _this.csvDemoData = parsedData.data;
                console.log(_this.headerRowDemo);
            }
        });
    };
    ContactsPage.prototype.exportDemoCSV = function () {
        var democsv = this.papa.unparse({
            fields: this.headerRowDemo,
            data: this.csvDemoData
        });
        this.democsv = democsv;
        console.log('demo header row: ', this.headerRowDemo);
        console.log('csv: ', this.csvDemoData);
        // console.log('contacts: ', this.contacts);
        if (this.plt.is('cordova')) {
            console.log('cordova');
        }
        else {
            console.log('not cordova');
            var blob = new Blob([democsv]);
            var a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'contacts.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    ContactsPage.ctorParameters = function () { return [
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_9__["Papa"] }
    ]; };
    ContactsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! raw-loader!./contacts.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/contacts/contacts/contacts.page.html"),
            styles: [__webpack_require__(/*! ./contacts.page.scss */ "./src/app/firebase/contacts/contacts/contacts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_9__["Papa"]])
    ], ContactsPage);
    return ContactsPage;
}());



/***/ })

}]);
//# sourceMappingURL=firebase-contacts-contacts-contacts-module-es5.js.map