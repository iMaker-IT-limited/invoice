(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-inventory-items-items-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/inventory/items/items.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/inventory/items/items.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content class=\"user-profile-content\">\n    <ion-item-divider sticky>\n        <ion-title>Active Items</ion-title>\n        <ion-button color=\"theme\" class=\"new_button\" (click)=\"onCreateContact()\"> + New</ion-button>\n        <ion-button class=\"new_button\" color=\"premium\" fill=\"solid\" slot=\"end\" (click)=\"showCreditNotesToggle = !showCreditNotesToggle\">\n            <ion-icon name=\"menu-outline\"></ion-icon>\n        </ion-button>\n\n        <!-- <a class=\"menu_toggle\" id=\"toggle\"><span></span></a> -->\n        <div class=\"menu_toggle\" *ngIf=\"showCreditNotesToggle\">\n            <ul>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"show = !show\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-upload-sharp\"></ion-icon>\n                        <span>\n                            Upload contact import\n                        </span>\n                    </ion-button>\n                </li>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"getTestCsv()\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"\"></ion-icon>\n                        <span>\n                            Get CSV\n                        </span>\n                    </ion-button>\n                </li>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"loadCSV()\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-upload-sharp\"></ion-icon>\n                        <span>\n                            Bulk import\n                        </span>\n                    </ion-button>\n                </li>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"exportCSV()\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-download-sharp\"></ion-icon>\n                        <span>\n                            Bulk export\n                        </span>\n                    </ion-button>\n                </li>\n            </ul>\n        </div>\n    </ion-item-divider>\n    <ion-progress-bar *ngIf=\"!itemsList\" color=\"theme\" type=\"indeterminate\"></ion-progress-bar>\n\n        <ion-row class=\"new\">\n            <ion-col class=\"col-left\" style=\"padding: 0px;\" size=\"12\">\n                <!-- ngx - table -->\n                <ngx-datatable [rows]=\"itemsList\" [ngClass]=\"tableStyle\" [rowHeight]=\"auto\" [headerHeight]=\"50\" [columnMode]=\"'force'\" [rowClass]=\"getRowClass.bind(this)\" [limit]=\"10\" [footerHeight]=\"50\">\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            NAME\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <!-- <ion-button fill=\"clear\" color=\"theme\" (click)=\"onDetailPage(row)\">\n                    {{row['Display Name']}}               \n                  </ion-button> -->\n                            <div class=\"button\" (click)=\"onDetailPage(row, itemsList)\">{{row['Item Name']}}</div>\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            Description\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <div class=\"description\">\n                                {{row['Description']}}\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            Rate\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['Rate']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            Usage unit\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['Usage unit']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n                </ngx-datatable>\n                <!-- ngx - table -->\n            </ion-col>\n        </ion-row>\n\n    <div *ngIf=\"name === 'Dan Soong'\">\n        Dan Soong\n        <div id=\"sign-in-status\"></div>\n        <div id=\"sign-in\"></div>\n        <pre id=\"account-details\"></pre>\n    </div>\n\n    <app-global-banner></app-global-banner>\n</ion-content>\n<app-global-footer></app-global-footer>\n"

/***/ }),

/***/ "./src/app/firebase/inventory/items/items.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/firebase/inventory/items/items.module.ts ***!
  \**********************************************************/
/*! exports provided: ItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
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
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./items.page */ "./src/app/firebase/inventory/items/items.page.ts");











const routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_10__["ItemsPage"]
    }
];
let ItemsPageModule = class ItemsPageModule {
};
ItemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_items_page__WEBPACK_IMPORTED_MODULE_10__["ItemsPage"]],
        providers: [
            //  UserProfileResolver,
            //  UserService,
            _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"],
            _app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        ]
    })
], ItemsPageModule);



/***/ }),

/***/ "./src/app/firebase/inventory/items/items.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/firebase/inventory/items/items.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Montserrat:300,400,700\";\n.description {\n  overflow: hidden;\n  white-space: break-spaces !important;\n  text-overflow: ellipsis;\n}\n.button {\n  color: var(--ion-color-theme);\n  font-weight: bold;\n}\n.button:hover {\n  cursor: pointer;\n  color: var(--ion-color-theme);\n  font-weight: bold;\n}\n.rwd-table {\n  margin: 1em 0;\n  min-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n  font-size: 0.8rem;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 9.5em;\n  display: inline-block;\n}\n@media (min-width: 480px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n@media (min-width: 480px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.25em 0.5em;\n  }\n\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\nh1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n.rwd-table {\n  margin-top: 0px;\n  background: white;\n  color: var(--ion-color-theme);\n  border-radius: 0.4em;\n  overflow: hidden;\n  width: 100%;\n}\n.rwd-table .header_ {\n  background: white;\n  color: black;\n}\n.rwd-table tr {\n  border-color: lightgray;\n}\n.rwd-table tr:hover:not(.header_) {\n  cursor: pointer;\n  background-color: #f2f2f2;\n}\n.rwd-table th,\n.rwd-table td {\n  margin: 0.5em 1em;\n}\n@media (min-width: 480px) {\n  .rwd-table th,\n.rwd-table td {\n    padding: 1em !important;\n  }\n}\n.rwd-table th,\n.rwd-table td:before {\n  color: #dd5;\n}\n/* Important styles */\n#toggle {\n  display: block;\n  width: 30px;\n  height: 20px;\n  margin: 15px auto 5px;\n}\n#toggle span:after,\n#toggle span:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: -6px;\n}\n#toggle span:after {\n  top: 6px;\n}\n#toggle span {\n  position: relative;\n  display: block;\n}\n#toggle span,\n#toggle span:after,\n#toggle span:before {\n  width: 20px;\n  height: 3px;\n  right: 15px;\n  background-color: #888;\n  transition: all 0.3s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-radius: 2px;\n}\n/* on activation */\n#toggle.on span {\n  background-color: transparent;\n}\n#toggle.on span:before {\n  transform: rotate(45deg) translate(5px, 5px);\n}\n#toggle.on span:after {\n  transform: rotate(-45deg) translate(7px, -8px);\n}\n#toggle.on + #menu {\n  opacity: 1;\n  visibility: visible;\n}\n/* menu appearance*/\n#menu {\n  position: fixed;\n  top: 100px;\n  right: 3px;\n  color: #999;\n  margin: auto;\n  text-align: center;\n  background: white;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);\n  /* just for this demo */\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.4s;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n#menu:before {\n  position: absolute;\n  top: -20px;\n  left: 210px;\n  content: \"\";\n  display: block;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 20px solid white;\n}\nul,\nli,\nli a {\n  list-style: none;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\nli a {\n  padding: 10px 20px;\n  color: #888;\n  text-decoration: none;\n  text-align: left;\n  transition: all 0.2s;\n  width: 250px;\n}\nli a:hover,\nli a:focus {\n  background: #2485e8;\n  color: #fff;\n  cursor: pointer;\n  width: 100%;\n}\n.new_button {\n  padding-right: 38px;\n  padding-bottom: 4px;\n}\n.listbutton {\n  padding-left: 10px;\n  width: 100%;\n  top: 5px;\n  margin-left: 0px;\n}\n.listbutton span {\n  color: #212529;\n  padding: 8px 20px;\n  text-align: left;\n  width: 100%;\n  text-transform: capitalize;\n}\n.listbutton:hover {\n  padding-left: 10px;\n  color: white;\n  background: #2485e8;\n  margin-left: 0px;\n}\n.listbutton:hover span {\n  color: white;\n  text-transform: capitalize;\n  padding: 8px 20px;\n  text-align: left;\n  width: 100%;\n}\n/* demo styles */\nbody {\n  margin-top: 3em;\n  background: #eee;\n  color: #555;\n  font-family: \"Open Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif;\n}\np,\np a {\n  font-size: 12px;\n  text-align: center;\n  color: #888;\n}\n.menu_toggle {\n  position: fixed;\n  z-index: 99999999;\n  right: 10px;\n  top: 100px;\n  background: white;\n  border-radius: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9pbnZlbnRvcnkvaXRlbXMvaXRlbXMucGFnZS5zY3NzIiwic3JjL2FwcC9maXJlYmFzZS9pbnZlbnRvcnkvaXRlbXMvaXRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCUSx3RUFBQTtBQWpCUjtFQUNDLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtBQ0VEO0FEQ0E7RUFDQyw2QkFBQTtFQUNBLGlCQUFBO0FDRUQ7QURDQTtFQUNDLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FDRUQ7QURFQTtFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRDtBREVBO0VBQ0MsMEJBQUE7RUFDQSw2QkFBQTtBQ0NEO0FERUE7RUFDQyxhQUFBO0FDQ0Q7QURFQTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtBQ0NEO0FERUE7RUFDQyxrQkFBQTtBQ0NEO0FERUE7RUFDQyxxQkFBQTtBQ0NEO0FERUE7RUFDQywyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0Q7QURFQTtFQUNDO0lBQ0MsYUFBQTtFQ0NBO0FBQ0Y7QURFQTs7RUFFQyxnQkFBQTtBQ0FEO0FER0E7RUFDQzs7SUFFQyxtQkFBQTtJQUNBLHFCQUFBO0VDQUE7O0VERUQ7O0lBRUMsZUFBQTtFQ0NBOztFRENEOztJQUVDLGdCQUFBO0VDRUE7QUFDRjtBRFNBO0VBQ0MsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNQRDtBRFVBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1BEO0FEVUE7RUFDQyxpQkFBQTtFQUNBLFlBQUE7QUNQRDtBRFVBO0VBQ0MsdUJBQUE7QUNQRDtBRFdBO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0FDUkQ7QURXQTs7RUFFQyxpQkFBQTtBQ1JEO0FEV0E7RUFDQzs7SUFFQyx1QkFBQTtFQ1JBO0FBQ0Y7QURXQTs7RUFFQyxXQUFBO0FDVEQ7QURhQSxxQkFBQTtBQUVBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNYRDtBRGNBOztFQUVDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FDWEQ7QURjQTtFQUNDLFFBQUE7QUNYRDtBRGNBO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0FDWEQ7QURjQTs7O0VBR0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrQkFBQTtBQ1hEO0FEZUEsa0JBQUE7QUFFQTtFQUNDLDZCQUFBO0FDYkQ7QURnQkE7RUFDQyw0Q0FBQTtBQ2JEO0FEZ0JBO0VBQ0MsOENBQUE7QUNiRDtBRGdCQTtFQUNDLFVBQUE7RUFDQSxtQkFBQTtBQ2JEO0FEaUJBLG1CQUFBO0FBRUE7RUFDQyxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBR0EsWUFBQTtFQUVBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0FDbkJEO0FEc0JBO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCQUFBO0FDbkJEO0FEc0JBOzs7RUFHQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ25CRDtBRHNCQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNwQkQ7QUR1QkE7O0VBRUMsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNwQkQ7QUR1QkE7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0FDcEJEO0FEdUJBO0VBRUMsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDckJEO0FEc0JDO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNwQkY7QUR3QkE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDckJEO0FEc0JDO0VBQ0MsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNwQkY7QUR5QkEsZ0JBQUE7QUFFQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrRUFBQTtBQ3ZCRDtBRDBCQTs7RUFFQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDdkJEO0FEMEJBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUN2QkQiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9pbnZlbnRvcnkvaXRlbXMvaXRlbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0d2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1dHRvbiB7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw3MDBcIjtcbi5yd2QtdGFibGUge1xuXHRtYXJnaW46IDFlbSAwO1xuXHRtaW4td2lkdGg6IDkwMHB4O1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucndkLXRhYmxlIHRyIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ucndkLXRhYmxlIHRoIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnJ3ZC10YWJsZSB0ZCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG5cdHBhZGRpbmctdG9wOiAuNWVtO1xufVxuXG4ucndkLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuXHRwYWRkaW5nLWJvdHRvbTogLjVlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuXHRjb250ZW50OiBhdHRyKGRhdGEtdGgpIFwiOiBcIjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHdpZHRoOiA5LjVlbTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0LnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0LnJ3ZC10YWJsZSB0aCxcblx0LnJ3ZC10YWJsZSB0ZCB7XG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRwYWRkaW5nOiAuMjVlbSAuNWVtO1xuXHR9XG5cdC5yd2QtdGFibGUgdGg6Zmlyc3QtY2hpbGQsXG5cdC5yd2QtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuXHRcdHBhZGRpbmctbGVmdDogMDtcblx0fVxuXHQucndkLXRhYmxlIHRoOmxhc3QtY2hpbGQsXG5cdC5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG5cdFx0cGFkZGluZy1yaWdodDogMDtcblx0fVxufVxuXG4vLyBib2R5IHtcbi8vICAgcGFkZGluZzogMCAyZW07XG4vLyAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuLy8gICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbi8vICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbi8vICAgY29sb3I6ICM0NDQ7XG4vLyAgIGJhY2tncm91bmQ6ICNlZWU7XG4vLyB9XG5oMSB7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGxldHRlci1zcGFjaW5nOiAtMXB4O1xuXHRjb2xvcjogIzM0NDk1RTtcbn1cblxuLnJ3ZC10YWJsZSB7XG5cdG1hcmdpbi10b3A6IDBweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRib3JkZXItcmFkaXVzOiAuNGVtO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLnJ3ZC10YWJsZSAuaGVhZGVyXyB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbi5yd2QtdGFibGUgdHIge1xuXHRib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLy8gLnJ3ZC10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxuLnJ3ZC10YWJsZSB0cjpob3Zlcjpub3QoLmhlYWRlcl8pIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG5cdG1hcmdpbjogLjVlbSAxZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHQucndkLXRhYmxlIHRoLFxuXHQucndkLXRhYmxlIHRkIHtcblx0XHRwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcblx0fVxufVxuXG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuXHRjb2xvcjogI2RkNTtcbn1cblxuXG4vKiBJbXBvcnRhbnQgc3R5bGVzICovXG5cbiN0b2dnbGUge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDMwcHg7XG5cdGhlaWdodDogMjBweDtcblx0bWFyZ2luOiAxNXB4IGF1dG8gNXB4O1xufVxuXG4jdG9nZ2xlIHNwYW46YWZ0ZXIsXG4jdG9nZ2xlIHNwYW46YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IC02cHg7XG59XG5cbiN0b2dnbGUgc3BhbjphZnRlciB7XG5cdHRvcDogNnB4O1xufVxuXG4jdG9nZ2xlIHNwYW4ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jdG9nZ2xlIHNwYW4sXG4jdG9nZ2xlIHNwYW46YWZ0ZXIsXG4jdG9nZ2xlIHNwYW46YmVmb3JlIHtcblx0d2lkdGg6IDIwcHg7XG5cdGhlaWdodDogM3B4O1xuXHRyaWdodDogMTVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzg4ODtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5cbi8qIG9uIGFjdGl2YXRpb24gKi9cblxuI3RvZ2dsZS5vbiBzcGFuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiN0b2dnbGUub24gc3BhbjpiZWZvcmUge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCwgNXB4KTtcbn1cblxuI3RvZ2dsZS5vbiBzcGFuOmFmdGVyIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoN3B4LCAtOHB4KTtcbn1cblxuI3RvZ2dsZS5vbisjbWVudSB7XG5cdG9wYWNpdHk6IDE7XG5cdHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cblxuLyogbWVudSBhcHBlYXJhbmNlKi9cblxuI21lbnUge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMTAwcHg7XG5cdHJpZ2h0OiAzcHg7XG5cdGNvbG9yOiAjOTk5O1xuXHQvLyB3aWR0aDogMjAwcHg7XG5cdC8vICBwYWRkaW5nOiA1cHggMjBweDtcblx0bWFyZ2luOiBhdXRvO1xuXHQvLyBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBDYW5kYXJhLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnNcIiwgXCJEZWphVnUgU2Fuc1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnNcIiwgXCJUcmVidWNoZXQgTVNcIiwgVmVyZGFuYSwgXCJWZXJkYW5hIFJlZlwiLCBzYW5zLXNlcmlmO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdC8vIGJvcmRlci1yYWRpdXM6IDRweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXHQvKiBqdXN0IGZvciB0aGlzIGRlbW8gKi9cblx0b3BhY2l0eTogMDtcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC40cztcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xuXHRib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG5cbiNtZW51OmJlZm9yZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtMjBweDtcblx0bGVmdDogMjEwcHg7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHdoaXRlO1xufVxuXG51bCxcbmxpLFxubGkgYSB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbmxpIGEge1xuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdGNvbG9yOiAjODg4O1xuXHQvLyBkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR0cmFuc2l0aW9uOiBhbGwgLjJzO1xuXHR3aWR0aDogMjUwcHg7XG59XG5cbmxpIGE6aG92ZXIsXG5saSBhOmZvY3VzIHtcblx0YmFja2dyb3VuZDogIzI0ODVlODtcblx0Y29sb3I6ICNmZmY7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0d2lkdGg6IDEwMCVcbn1cblxuLm5ld19idXR0b24ge1xuXHRwYWRkaW5nLXJpZ2h0OiAzOHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4ubGlzdGJ1dHRvbiB7XG5cdC8vIGNvbG9yOiAjMjQ4NWU4O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHR0b3A6IDVweDtcblx0bWFyZ2luLWxlZnQ6IDBweDtcblx0c3BhbiB7XG5cdFx0Y29sb3I6ICMyMTI1Mjk7XG5cdFx0cGFkZGluZzogOHB4IDIwcHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0fVxufVxuXG4ubGlzdGJ1dHRvbjpob3ZlciB7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kOiAjMjQ4NWU4O1xuXHRtYXJnaW4tbGVmdDogMHB4O1xuXHRzcGFuIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdFx0cGFkZGluZzogOHB4IDIwcHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufVxuXG5cbi8qIGRlbW8gc3R5bGVzICovXG5cbmJvZHkge1xuXHRtYXJnaW4tdG9wOiAzZW07XG5cdGJhY2tncm91bmQ6ICNlZWU7XG5cdGNvbG9yOiAjNTU1O1xuXHRmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5wLFxucCBhIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiAjODg4O1xufVxuXG4ubWVudV90b2dnbGUge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDk5OTk5OTk5O1xuXHRyaWdodDogMTBweDtcblx0dG9wOiAxMDBweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xufSIsIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMFwiO1xuLmRlc2NyaXB0aW9uIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcyAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucndkLXRhYmxlIHtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgbWluLXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnJ3ZC10YWJsZSB0ciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnJ3ZC10YWJsZSB0aCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yd2QtdGFibGUgdGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5yd2QtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG59XG5cbi5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGgpIFwiOiBcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA5LjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcbiAgfVxuXG4gIC5yd2QtdGFibGUgdGg6Zmlyc3QtY2hpbGQsXG4ucndkLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAucndkLXRhYmxlIHRoOmxhc3QtY2hpbGQsXG4ucndkLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGNvbG9yOiAjMzQ0OTVFO1xufVxuXG4ucndkLXRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJ3ZC10YWJsZSAuaGVhZGVyXyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5yd2QtdGFibGUgdHIge1xuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLnJ3ZC10YWJsZSB0cjpob3Zlcjpub3QoLmhlYWRlcl8pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG4gIG1hcmdpbjogMC41ZW0gMWVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDFlbSAhaW1wb3J0YW50O1xuICB9XG59XG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZDpiZWZvcmUge1xuICBjb2xvcjogI2RkNTtcbn1cblxuLyogSW1wb3J0YW50IHN0eWxlcyAqL1xuI3RvZ2dsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDE1cHggYXV0byA1cHg7XG59XG5cbiN0b2dnbGUgc3BhbjphZnRlcixcbiN0b2dnbGUgc3BhbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLTZweDtcbn1cblxuI3RvZ2dsZSBzcGFuOmFmdGVyIHtcbiAgdG9wOiA2cHg7XG59XG5cbiN0b2dnbGUgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiN0b2dnbGUgc3BhbixcbiN0b2dnbGUgc3BhbjphZnRlcixcbiN0b2dnbGUgc3BhbjpiZWZvcmUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi8qIG9uIGFjdGl2YXRpb24gKi9cbiN0b2dnbGUub24gc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jdG9nZ2xlLm9uIHNwYW46YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIDVweCk7XG59XG5cbiN0b2dnbGUub24gc3BhbjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDdweCwgLThweCk7XG59XG5cbiN0b2dnbGUub24gKyAjbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8qIG1lbnUgYXBwZWFyYW5jZSovXG4jbWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMDBweDtcbiAgcmlnaHQ6IDNweDtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC8qIGp1c3QgZm9yIHRoaXMgZGVtbyAqL1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuI21lbnU6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAyMTBweDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgd2hpdGU7XG59XG5cbnVsLFxubGksXG5saSBhIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGkgYSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxubGkgYTpob3ZlcixcbmxpIGE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMjQ4NWU4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5ld19idXR0b24ge1xuICBwYWRkaW5nLXJpZ2h0OiAzOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4ubGlzdGJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmxpc3RidXR0b24gc3BhbiB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubGlzdGJ1dHRvbjpob3ZlciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMjQ4NWU4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmxpc3RidXR0b246aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogZGVtbyBzdHlsZXMgKi9cbmJvZHkge1xuICBtYXJnaW4tdG9wOiAzZW07XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5wLFxucCBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4ubWVudV90b2dnbGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk5OTk5O1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/firebase/inventory/items/items.page.ts":
/*!********************************************************!*\
  !*** ./src/app/firebase/inventory/items/items.page.ts ***!
  \********************************************************/
/*! exports provided: ItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPage", function() { return ItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../app/firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _assets_items_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../assets/items.json */ "./src/assets/items.json");
var _assets_items_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../../assets/items.json */ "./src/assets/items.json", 1);
/* harmony import */ var _assets_company_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../assets/company.json */ "./src/assets/company.json");
var _assets_company_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../../assets/company.json */ "./src/assets/company.json", 1);




// import { UserProfileModel } from "./user-profile.model";

// import { LanguageService } from "../../language/language.service";






// items


let ItemsPage = class ItemsPage {
    //  companiesArr: any[];
    // @HostBinding("class.is-shell") get isShell() {
    //   return this.profile && this.profile.isShell ? true : false;
    // }
    constructor(navCtrl, toastCtrl, loadingCtrl, firebaseService, authService, route, translate, 
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
        this.companies = _assets_company_json__WEBPACK_IMPORTED_MODULE_12__;
        this.items = _assets_items_json__WEBPACK_IMPORTED_MODULE_11__;
        this.tableStyle = 'bootstrap';
        this.customRowClass = false;
        // ngx-table end
        // grid = false;
        this.myNumber = 5;
        // profile: UserProfileModel;
        this.available_languages = [];
        this.uid = this.authService.uid();
        this.email = this.authService.email();
        console.log(this.companies, this.items);
        const arr = [];
        for (var i = 0; i < 10; i++) {
            console.log(this.companies[i]);
            arr.push(this.companies[i]);
        }
        this.companiesArr = arr;
        this.checkboxForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](""),
            provider_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](""),
            provider_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](""),
            provider_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](""),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]("")
        });
    }
    ngOnInit() {
        firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().onAuthStateChanged(user => {
            if (user) {
                console.log(user);
                this.name = user.displayName;
                this.photoURL = user.photoURL;
                this.uid = user.uid;
                this.email = user.email;
                this.phoneNumber = user.phoneNumber;
                console.log(this.uid, this.email, this.phoneNumber, this.name, this.photoURL);
                console.log(this.uid);
            }
            else {
                console.log("Not authenticated");
                // No user is signed in.
            }
        });
        this.route.data.subscribe(resolvedRouteData => {
            const profileDataStore = resolvedRouteData["data"];
            profileDataStore.state.subscribe(state => {
                //      this.profile = state;
                // get translations for this page to use in the Language Chooser Alert
                this.getTranslations();
                this.translate.onLangChange.subscribe(() => {
                    this.getTranslations();
                });
            }, error => { });
        }, error => { });
    }
    getTranslations() {
        // get translations for this page to use in the Language Chooser Alert
        this.translate
            .getTranslation(this.translate.currentLang)
            .subscribe(translations => {
            this.translations = translations;
        });
    }
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
    ionViewWillEnter() {
        // case when non first timer user(ie. teacher) fill in the form when logged out, submit quotation enquiry
        // this.save();
        this.readItems();
    }
    doReorder(ev) {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log(ev.detail.complete(), "Dragged from index", ev.detail.from, "to", ev.detail.to);
        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        ev.detail.complete();
    }
    toggleReorderGroup() {
        this.reorderGroup.disabled = !this.reorderGroup.disabled;
    }
    selectedEnquiry(value) {
        console.log(value, value.id);
        this.selectedID = "check";
    }
    changeTargetValue(value) {
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
    }
    checkUserStatus() {
        firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().onAuthStateChanged(user => {
            if (user) {
                // User is signed in.
                // this.uid = user.uid;
                // this.displayName = user.displayName;
                // this.photoURL = user.photoURL;
                const displayName = user.displayName;
                const email = user.email;
                const emailVerified = user.emailVerified;
                const photoURL = user.photoURL;
                const uid = user.uid;
                const phoneNumber = user.phoneNumber;
                const providerData = user.providerData;
                user.getIdToken().then(accessToken => {
                    console.log("accessToken: ", accessToken);
                    document.getElementById("sign-in-status").textContent = "Signed in";
                    document.getElementById("sign-in").textContent = "Sign out";
                    this.signin = "Sign out";
                    this.displayName = displayName;
                    this.uid = uid;
                    //  this.email = email;
                    this.photoURL = photoURL;
                    document.getElementById("account-details").textContent = JSON.stringify({
                        displayName: displayName,
                        email: email,
                        emailVerified: emailVerified,
                        phoneNumber: phoneNumber,
                        photoURL: photoURL,
                        uid: uid,
                        accessToken: accessToken,
                        providerData: providerData
                    }, null, "  ");
                });
            }
            else {
                // User is signed out.
                document.getElementById("sign-in-status").textContent = "Signed out";
                document.getElementById("sign-in").textContent = "Sign in";
                this.signin = "Sign in";
                document.getElementById("account-details").textContent = "null";
            }
        }, function (error) {
            console.log(error);
        });
    }
    number(value, numDay) {
        //   console.log(value, numDay + 1, Number(numDay) + 1);
        const getcountday = Number(numDay) + 1;
        const limit = 1000 * 60 * 60 * 24 * getcountday + Number(value);
        this.countdownDate = new Date("Feb 13 2020").getTime();
        //     // console.log(this.countdownDate);
        const v = new Date(limit);
        const w = v.toString().substr(4, 11);
        const countdownDate = new Date(w.toString()).getTime();
        //   console.log(countdownDate, w, v, value);
        return countdownDate;
    }
    hideDropZone() {
        setTimeout(() => {
            console.log("hi");
        }, 3000);
    }
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
    onReadQE(value) {
        console.log(value);
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
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        console.log(event, val);
        // filter our data
        // const temp = this.temp.filter(function (d) {
        //   return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        // });
        // // update the rows
        // this.rows = temp;
        // // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
    }
    changeDateFormat(date) {
        const dateFormat = new Date(date).toString().substring(0, 15);
        return dateFormat;
    }
    // ngx - table end
    onCreateContact() {
        this.navCtrl.navigateForward(["/firebase/create#inventory"]);
    }
    onDetailPage(value, values) {
        console.log(value, values);
        const data = JSON.stringify(value);
        const datas = JSON.stringify(values);
        console.log(data);
        const navigationExtras = {
            queryParams: {
                data: data,
                datas: datas
            }
        };
        this.navCtrl.navigateRoot(["/firebase/inventory#details"], navigationExtras);
    }
    // CRUD
    readItems() {
        console.log(this.email, this.uid);
        this.firebaseService.readItems(this.uid, this.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(c => (Object.assign({ id: c.payload.doc.id }, c.payload.doc.data()))))).subscribe(data => {
            this.itemsList = data;
        });
    }
};
ItemsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"] },
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonReorderGroup"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonReorderGroup"])
], ItemsPage.prototype, "reorderGroup", void 0);
ItemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-items',
        template: __webpack_require__(/*! raw-loader!./items.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/inventory/items/items.page.html"),
        styles: [__webpack_require__(/*! ./items.page.scss */ "./src/app/firebase/inventory/items/items.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"],
        _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]])
], ItemsPage);



/***/ })

}]);
//# sourceMappingURL=firebase-inventory-items-items-module-es2015.js.map