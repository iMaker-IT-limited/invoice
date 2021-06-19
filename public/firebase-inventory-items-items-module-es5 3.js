(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-inventory-items-items-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/inventory/items/items.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/inventory/items/items.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content class=\"user-profile-content\">\n    <ion-item-divider class=\"sticky_header\" sticky>\n        <ion-title>Active Items</ion-title>\n        <ion-button size=\"large\" color=\"theme\" class=\"new_button\" (click)=\"onCreateContact()\"> + New</ion-button>\n        <!-- <ion-button class=\"new_button\" color=\"premium\" fill=\"solid\" slot=\"end\"\n            (click)=\"showCreditNotesToggle = !showCreditNotesToggle\">\n            <ion-icon name=\"menu-outline\"></ion-icon>\n        </ion-button> -->\n\n        <!-- <div class=\"menu_toggle\" *ngIf=\"showCreditNotesToggle\">\n            <ul>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"show = !show\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-upload-sharp\"></ion-icon>\n                        <span>\n                            Upload contact import\n                        </span>\n                    </ion-button>\n                </li>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"getTestCsv()\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"\"></ion-icon>\n                        <span>\n                            Get CSV\n                        </span>\n                    </ion-button>\n                </li>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"loadCSV()\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-upload-sharp\"></ion-icon>\n                        <span>\n                            Bulk import\n                        </span>\n                    </ion-button>\n                </li>\n                <li>\n                    <ion-button class=\"listbutton\" expand=\"full\" fill=\"clear\" (click)=\"exportCSV()\">\n                        <ion-icon slot=\"start\" size=\"medium\" icon-only name=\"cloud-download-sharp\"></ion-icon>\n                        <span>\n                            Bulk export\n                        </span>\n                    </ion-button>\n                </li>\n            </ul>\n        </div> -->\n    </ion-item-divider>\n    <ion-progress-bar *ngIf=\"!itemsList\" color=\"theme\" type=\"indeterminate\"></ion-progress-bar>\n\n\n    <ion-row class=\"new\">\n        <ion-col class=\"col-left\" style=\"padding: 0px;\" size=\"12\">\n            <!-- ngx - table -->\n            <ngx-datatable [rows]=\"itemsList\" [ngClass]=\"tableStyle\" [rowHeight]=\"auto\" [headerHeight]=\"50\"\n                [columnMode]=\"'force'\" [rowClass]=\"getRowClass.bind(this)\" [limit]=\"10\" [footerHeight]=\"50\">\n                <ngx-datatable-column sortable=\"true\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>\n                        NAME\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <!-- <ion-button fill=\"clear\" color=\"theme\" (click)=\"onDetailPage(row)\">\n                    {{row['Display Name']}}               \n                  </ion-button> -->\n                        <div class=\"button\" (click)=\"onDetailPage(row, itemsList)\">{{row['Item Name']}}</div>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column sortable=\"true\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>\n                        Description\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <div class=\"description\">\n                            {{row['Description']}}\n                        </div>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column sortable=\"true\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>\n                        Rate\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        {{row['Rate']}}\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column sortable=\"true\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>\n                        Usage unit\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        {{row['Usage unit']}}\n                    </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n            <!-- ngx - table -->\n        </ion-col>\n    </ion-row>\n\n    <div *ngIf=\"name === 'Dan Soong'\">\n        Dan Soong\n        <div id=\"sign-in-status\"></div>\n        <div id=\"sign-in\"></div>\n        <pre id=\"account-details\"></pre>\n    </div>\n\n    <app-global-banner></app-global-banner>\n</ion-content>\n<app-global-footer></app-global-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./items.page */ "./src/app/firebase/inventory/items/items.page.ts");











var routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_10__["ItemsPage"]
    }
];
var ItemsPageModule = /** @class */ (function () {
    function ItemsPageModule() {
    }
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
    return ItemsPageModule;
}());



/***/ }),

/***/ "./src/app/firebase/inventory/items/items.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/firebase/inventory/items/items.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Montserrat:300,400,700\";\n.description {\n  overflow: hidden;\n  white-space: break-spaces !important;\n  text-overflow: ellipsis;\n}\n.button {\n  color: var(--ion-color-theme);\n  font-weight: bold;\n}\n.button:hover {\n  cursor: pointer;\n  color: var(--ion-color-theme);\n  font-weight: bold;\n}\n.rwd-table {\n  margin: 1em 0;\n  min-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n  font-size: 0.8rem;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 9.5em;\n  display: inline-block;\n}\n@media (min-width: 480px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n@media (min-width: 480px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.25em 0.5em;\n  }\n\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\nh1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n.rwd-table {\n  margin-top: 0px;\n  background: white;\n  color: var(--ion-color-theme);\n  border-radius: 0.4em;\n  overflow: hidden;\n  width: 100%;\n}\n.rwd-table .header_ {\n  background: white;\n  color: black;\n}\n.rwd-table tr {\n  border-color: lightgray;\n}\n.rwd-table tr:hover:not(.header_) {\n  cursor: pointer;\n  background-color: #f2f2f2;\n}\n.rwd-table th,\n.rwd-table td {\n  margin: 0.5em 1em;\n}\n@media (min-width: 480px) {\n  .rwd-table th,\n.rwd-table td {\n    padding: 1em !important;\n  }\n}\n.rwd-table th,\n.rwd-table td:before {\n  color: #dd5;\n}\n/* Important styles */\n#toggle {\n  display: block;\n  width: 30px;\n  height: 20px;\n  margin: 15px auto 5px;\n}\n#toggle span:after,\n#toggle span:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: -6px;\n}\n#toggle span:after {\n  top: 6px;\n}\n#toggle span {\n  position: relative;\n  display: block;\n}\n#toggle span,\n#toggle span:after,\n#toggle span:before {\n  width: 20px;\n  height: 3px;\n  right: 15px;\n  background-color: #888;\n  transition: all 0.3s;\n  backface-visibility: hidden;\n  border-radius: 2px;\n}\n/* on activation */\n#toggle.on span {\n  background-color: transparent;\n}\n#toggle.on span:before {\n  transform: rotate(45deg) translate(5px, 5px);\n}\n#toggle.on span:after {\n  transform: rotate(-45deg) translate(7px, -8px);\n}\n#toggle.on + #menu {\n  opacity: 1;\n  visibility: visible;\n}\n/* menu appearance*/\n#menu {\n  position: fixed;\n  top: 100px;\n  right: 3px;\n  color: #999;\n  margin: auto;\n  text-align: center;\n  background: white;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);\n  /* just for this demo */\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.4s;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n#menu:before {\n  position: absolute;\n  top: -20px;\n  left: 210px;\n  content: \"\";\n  display: block;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 20px solid white;\n}\nul,\nli,\nli a {\n  list-style: none;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\nli a {\n  padding: 10px 20px;\n  color: #888;\n  text-decoration: none;\n  text-align: left;\n  transition: all 0.2s;\n  width: 250px;\n}\nli a:hover,\nli a:focus {\n  background: #2485e8;\n  color: #fff;\n  cursor: pointer;\n  width: 100%;\n}\n.new_button {\n  padding-right: 38px;\n  padding-bottom: 4px;\n}\n.listbutton {\n  padding-left: 10px;\n  width: 100%;\n  top: 5px;\n  margin-left: 0px;\n}\n.listbutton span {\n  color: #212529;\n  padding: 8px 20px;\n  text-align: left;\n  width: 100%;\n  text-transform: capitalize;\n}\n.listbutton:hover {\n  padding-left: 10px;\n  color: white;\n  background: #2485e8;\n  margin-left: 0px;\n}\n.listbutton:hover span {\n  color: white;\n  text-transform: capitalize;\n  padding: 8px 20px;\n  text-align: left;\n  width: 100%;\n}\n/* demo styles */\nbody {\n  margin-top: 3em;\n  background: #eee;\n  color: #555;\n  font-family: \"Open Sans\", \"Segoe UI\", Helvetica, Arial, sans-serif;\n}\np,\np a {\n  font-size: 12px;\n  text-align: center;\n  color: #888;\n}\n.menu_toggle {\n  position: fixed;\n  z-index: 99999999;\n  right: 10px;\n  top: 100px;\n  background: white;\n  border-radius: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9pbnZlbnRvcnkvaXRlbXMvaXRlbXMucGFnZS5zY3NzIiwic3JjL2FwcC9maXJlYmFzZS9pbnZlbnRvcnkvaXRlbXMvaXRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCUSx3RUFBQTtBQWpCUjtFQUNDLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtBQ0VEO0FEQ0E7RUFDQyw2QkFBQTtFQUNBLGlCQUFBO0FDRUQ7QURDQTtFQUNDLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FDRUQ7QURFQTtFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRDtBREVBO0VBQ0MsMEJBQUE7RUFDQSw2QkFBQTtBQ0NEO0FERUE7RUFDQyxhQUFBO0FDQ0Q7QURFQTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtBQ0NEO0FERUE7RUFDQyxrQkFBQTtBQ0NEO0FERUE7RUFDQyxxQkFBQTtBQ0NEO0FERUE7RUFDQywyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ0Q7QURFQTtFQUNDO0lBQ0MsYUFBQTtFQ0NBO0FBQ0Y7QURFQTs7RUFFQyxnQkFBQTtBQ0FEO0FER0E7RUFDQzs7SUFFQyxtQkFBQTtJQUNBLHFCQUFBO0VDQUE7O0VERUQ7O0lBRUMsZUFBQTtFQ0NBOztFRENEOztJQUVDLGdCQUFBO0VDRUE7QUFDRjtBRFNBO0VBQ0MsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNQRDtBRFVBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1BEO0FEVUE7RUFDQyxpQkFBQTtFQUNBLFlBQUE7QUNQRDtBRFVBO0VBQ0MsdUJBQUE7QUNQRDtBRFdBO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0FDUkQ7QURXQTs7RUFFQyxpQkFBQTtBQ1JEO0FEV0E7RUFDQzs7SUFFQyx1QkFBQTtFQ1JBO0FBQ0Y7QURXQTs7RUFFQyxXQUFBO0FDVEQ7QURhQSxxQkFBQTtBQUVBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNYRDtBRGNBOztFQUVDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FDWEQ7QURjQTtFQUNDLFFBQUE7QUNYRDtBRGNBO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0FDWEQ7QURjQTs7O0VBR0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNYRDtBRGVBLGtCQUFBO0FBRUE7RUFDQyw2QkFBQTtBQ2JEO0FEZ0JBO0VBQ0MsNENBQUE7QUNiRDtBRGdCQTtFQUNDLDhDQUFBO0FDYkQ7QURnQkE7RUFDQyxVQUFBO0VBQ0EsbUJBQUE7QUNiRDtBRGlCQSxtQkFBQTtBQUVBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUdBLFlBQUE7RUFFQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtBQ25CRDtBRHNCQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtBQ25CRDtBRHNCQTs7O0VBR0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNuQkQ7QURzQkE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDcEJEO0FEdUJBOztFQUVDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDcEJEO0FEdUJBO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtBQ3BCRDtBRHVCQTtFQUVDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ3JCRDtBRHNCQztFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDcEJGO0FEd0JBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3JCRDtBRHNCQztFQUNDLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDcEJGO0FEeUJBLGdCQUFBO0FBRUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0VBQUE7QUN2QkQ7QUQwQkE7O0VBRUMsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3ZCRDtBRDBCQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FDdkJEIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvaW52ZW50b3J5L2l0ZW1zL2l0ZW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjcmlwdGlvbiB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXMgIWltcG9ydGFudDtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5idXR0b24ge1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b246aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwXCI7XG4ucndkLXRhYmxlIHtcblx0bWFyZ2luOiAxZW0gMDtcblx0bWluLXdpZHRoOiA5MDBweDtcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnJ3ZC10YWJsZSB0ciB7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnJ3ZC10YWJsZSB0aCB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yd2QtdGFibGUgdGQge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5yd2QtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuXHRwYWRkaW5nLXRvcDogLjVlbTtcbn1cblxuLnJ3ZC10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcblx0cGFkZGluZy1ib3R0b206IC41ZW07XG59XG5cbi5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcblx0Y29udGVudDogYXR0cihkYXRhLXRoKSBcIjogXCI7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR3aWR0aDogOS41ZW07XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdC5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbi5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkIHtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdC5yd2QtdGFibGUgdGgsXG5cdC5yd2QtdGFibGUgdGQge1xuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0cGFkZGluZzogLjI1ZW0gLjVlbTtcblx0fVxuXHQucndkLXRhYmxlIHRoOmZpcnN0LWNoaWxkLFxuXHQucndkLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdH1cblx0LnJ3ZC10YWJsZSB0aDpsYXN0LWNoaWxkLFxuXHQucndkLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuXHRcdHBhZGRpbmctcmlnaHQ6IDA7XG5cdH1cbn1cblxuLy8gYm9keSB7XG4vLyAgIHBhZGRpbmc6IDAgMmVtO1xuLy8gICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbi8vICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4vLyAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4vLyAgIGNvbG9yOiAjNDQ0O1xuLy8gICBiYWNrZ3JvdW5kOiAjZWVlO1xuLy8gfVxuaDEge1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRsZXR0ZXItc3BhY2luZzogLTFweDtcblx0Y29sb3I6ICMzNDQ5NUU7XG59XG5cbi5yd2QtdGFibGUge1xuXHRtYXJnaW4tdG9wOiAwcHg7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcblx0Ym9yZGVyLXJhZGl1czogLjRlbTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5yd2QtdGFibGUgLmhlYWRlcl8ge1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0Y29sb3I6IGJsYWNrO1xufVxuXG4ucndkLXRhYmxlIHRyIHtcblx0Ym9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi8vIC5yd2QtdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cbi5yd2QtdGFibGUgdHI6aG92ZXI6bm90KC5oZWFkZXJfKSB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQge1xuXHRtYXJnaW46IC41ZW0gMWVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0LnJ3ZC10YWJsZSB0aCxcblx0LnJ3ZC10YWJsZSB0ZCB7XG5cdFx0cGFkZGluZzogMWVtICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcblx0Y29sb3I6ICNkZDU7XG59XG5cblxuLyogSW1wb3J0YW50IHN0eWxlcyAqL1xuXG4jdG9nZ2xlIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAzMHB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdG1hcmdpbjogMTVweCBhdXRvIDVweDtcbn1cblxuI3RvZ2dsZSBzcGFuOmFmdGVyLFxuI3RvZ2dsZSBzcGFuOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0dG9wOiAtNnB4O1xufVxuXG4jdG9nZ2xlIHNwYW46YWZ0ZXIge1xuXHR0b3A6IDZweDtcbn1cblxuI3RvZ2dsZSBzcGFuIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuI3RvZ2dsZSBzcGFuLFxuI3RvZ2dsZSBzcGFuOmFmdGVyLFxuI3RvZ2dsZSBzcGFuOmJlZm9yZSB7XG5cdHdpZHRoOiAyMHB4O1xuXHRoZWlnaHQ6IDNweDtcblx0cmlnaHQ6IDE1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuXG4vKiBvbiBhY3RpdmF0aW9uICovXG5cbiN0b2dnbGUub24gc3BhbiB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jdG9nZ2xlLm9uIHNwYW46YmVmb3JlIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIDVweCk7XG59XG5cbiN0b2dnbGUub24gc3BhbjphZnRlciB7XG5cdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDdweCwgLThweCk7XG59XG5cbiN0b2dnbGUub24rI21lbnUge1xuXHRvcGFjaXR5OiAxO1xuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG5cbi8qIG1lbnUgYXBwZWFyYW5jZSovXG5cbiNtZW51IHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDEwMHB4O1xuXHRyaWdodDogM3B4O1xuXHRjb2xvcjogIzk5OTtcblx0Ly8gd2lkdGg6IDIwMHB4O1xuXHQvLyAgcGFkZGluZzogNXB4IDIwcHg7XG5cdG1hcmdpbjogYXV0bztcblx0Ly8gZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgQ2FuZGFyYSwgXCJCaXRzdHJlYW0gVmVyYSBTYW5zXCIsIFwiRGVqYVZ1IFNhbnNcIiwgXCJCaXRzdHJlYW0gVmVyYSBTYW5zXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFZlcmRhbmEsIFwiVmVyZGFuYSBSZWZcIiwgc2Fucy1zZXJpZjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQvLyBib3JkZXItcmFkaXVzOiA0cHg7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcblx0LyoganVzdCBmb3IgdGhpcyBkZW1vICovXG5cdG9wYWNpdHk6IDA7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuNHM7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjE1KTtcblx0Ym9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuXG4jbWVudTpiZWZvcmUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTIwcHg7XG5cdGxlZnQ6IDIxMHB4O1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiBibG9jaztcblx0Ym9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB3aGl0ZTtcbn1cblxudWwsXG5saSxcbmxpIGEge1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRkaXNwbGF5OiBibG9jaztcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuXG5saSBhIHtcblx0cGFkZGluZzogMTBweCAyMHB4O1xuXHRjb2xvcjogIzg4ODtcblx0Ly8gZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0dHJhbnNpdGlvbjogYWxsIC4ycztcblx0d2lkdGg6IDI1MHB4O1xufVxuXG5saSBhOmhvdmVyLFxubGkgYTpmb2N1cyB7XG5cdGJhY2tncm91bmQ6ICMyNDg1ZTg7XG5cdGNvbG9yOiAjZmZmO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHdpZHRoOiAxMDAlXG59XG5cbi5uZXdfYnV0dG9uIHtcblx0cGFkZGluZy1yaWdodDogMzhweDtcblx0cGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLmxpc3RidXR0b24ge1xuXHQvLyBjb2xvcjogIzI0ODVlODtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHR3aWR0aDogMTAwJTtcblx0dG9wOiA1cHg7XG5cdG1hcmdpbi1sZWZ0OiAwcHg7XG5cdHNwYW4ge1xuXHRcdGNvbG9yOiAjMjEyNTI5O1xuXHRcdHBhZGRpbmc6IDhweCAyMHB4O1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdH1cbn1cblxuLmxpc3RidXR0b246aG92ZXIge1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZDogIzI0ODVlODtcblx0bWFyZ2luLWxlZnQ6IDBweDtcblx0c3BhbiB7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRcdHBhZGRpbmc6IDhweCAyMHB4O1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbn1cblxuXG4vKiBkZW1vIHN0eWxlcyAqL1xuXG5ib2R5IHtcblx0bWFyZ2luLXRvcDogM2VtO1xuXHRiYWNrZ3JvdW5kOiAjZWVlO1xuXHRjb2xvcjogIzU1NTtcblx0Zm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiU2Vnb2UgVUlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxucCxcbnAgYSB7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogIzg4ODtcbn1cblxuLm1lbnVfdG9nZ2xlIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiA5OTk5OTk5OTtcblx0cmlnaHQ6IDEwcHg7XG5cdHRvcDogMTAwcHg7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjE1KTtcbn0iLCJAaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw3MDBcIjtcbi5kZXNjcmlwdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXMgIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJ3ZC10YWJsZSB7XG4gIG1hcmdpbjogMWVtIDA7XG4gIG1pbi13aWR0aDogOTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5yd2QtdGFibGUgdHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5yd2QtdGFibGUgdGgge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucndkLXRhYmxlIHRkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucndkLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xufVxuXG4ucndkLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG59XG5cbi5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRoKSBcIjogXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogOS41ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAucndkLXRhYmxlIHRoLFxuLnJ3ZC10YWJsZSB0ZCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG4gIH1cblxuICAucndkLXRhYmxlIHRoOmZpcnN0LWNoaWxkLFxuLnJ3ZC10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cbiAgLnJ3ZC10YWJsZSB0aDpsYXN0LWNoaWxkLFxuLnJ3ZC10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBjb2xvcjogIzM0NDk1RTtcbn1cblxuLnJ3ZC10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yd2QtdGFibGUgLmhlYWRlcl8ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucndkLXRhYmxlIHRyIHtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5yd2QtdGFibGUgdHI6aG92ZXI6bm90KC5oZWFkZXJfKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQge1xuICBtYXJnaW46IDAuNWVtIDFlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcbiAgfVxufVxuLnJ3ZC10YWJsZSB0aCxcbi5yd2QtdGFibGUgdGQ6YmVmb3JlIHtcbiAgY29sb3I6ICNkZDU7XG59XG5cbi8qIEltcG9ydGFudCBzdHlsZXMgKi9cbiN0b2dnbGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAxNXB4IGF1dG8gNXB4O1xufVxuXG4jdG9nZ2xlIHNwYW46YWZ0ZXIsXG4jdG9nZ2xlIHNwYW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IC02cHg7XG59XG5cbiN0b2dnbGUgc3BhbjphZnRlciB7XG4gIHRvcDogNnB4O1xufVxuXG4jdG9nZ2xlIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jdG9nZ2xlIHNwYW4sXG4jdG9nZ2xlIHNwYW46YWZ0ZXIsXG4jdG9nZ2xlIHNwYW46YmVmb3JlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogM3B4O1xuICByaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4vKiBvbiBhY3RpdmF0aW9uICovXG4jdG9nZ2xlLm9uIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI3RvZ2dsZS5vbiBzcGFuOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoNXB4LCA1cHgpO1xufVxuXG4jdG9nZ2xlLm9uIHNwYW46YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSg3cHgsIC04cHgpO1xufVxuXG4jdG9nZ2xlLm9uICsgI21lbnUge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vKiBtZW51IGFwcGVhcmFuY2UqL1xuI21lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiAzcHg7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAvKiBqdXN0IGZvciB0aGlzIGRlbW8gKi9cbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbiNtZW51OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogMjEwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHdoaXRlO1xufVxuXG51bCxcbmxpLFxubGkgYSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIGEge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbmxpIGE6aG92ZXIsXG5saSBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzI0ODVlODtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXdfYnV0dG9uIHtcbiAgcGFkZGluZy1yaWdodDogMzhweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLmxpc3RidXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5saXN0YnV0dG9uIHNwYW4ge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmxpc3RidXR0b246aG92ZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzI0ODVlODtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5saXN0YnV0dG9uOmhvdmVyIHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIGRlbW8gc3R5bGVzICovXG5ib2R5IHtcbiAgbWFyZ2luLXRvcDogM2VtO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiU2Vnb2UgVUlcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxucCxcbnAgYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzg4ODtcbn1cblxuLm1lbnVfdG9nZ2xlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5OTk5OTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../app/firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _assets_items_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../assets/items.json */ "./src/assets/items.json");
var _assets_items_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../../assets/items.json */ "./src/assets/items.json", 1);
/* harmony import */ var _assets_company_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../assets/company.json */ "./src/assets/company.json");
var _assets_company_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../../assets/company.json */ "./src/assets/company.json", 1);




// import { UserProfileModel } from "./user-profile.model";

// import { LanguageService } from "../../language/language.service";






// items


var ItemsPage = /** @class */ (function () {
    //  companiesArr: any[];
    // @HostBinding("class.is-shell") get isShell() {
    //   return this.profile && this.profile.isShell ? true : false;
    // }
    function ItemsPage(navCtrl, toastCtrl, loadingCtrl, firebaseService, authService, route, translate, 
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
        this.tableStyle = 'dark';
        this.customRowClass = false;
        // ngx-table end
        // grid = false;
        this.myNumber = 5;
        // profile: UserProfileModel;
        this.available_languages = [];
        this.uid = this.authService.uid();
        this.email = this.authService.email();
        console.log(this.companies, this.items);
        var arr = [];
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
    ItemsPage.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                _this.name = user.displayName;
                _this.photoURL = user.photoURL;
                _this.uid = user.uid;
                _this.email = user.email;
                _this.phoneNumber = user.phoneNumber;
                console.log(_this.uid, _this.email, _this.phoneNumber, _this.name, _this.photoURL);
                console.log(_this.uid);
            }
            else {
                console.log("Not authenticated");
                // No user is signed in.
            }
        });
        this.route.data.subscribe(function (resolvedRouteData) {
            var profileDataStore = resolvedRouteData["data"];
            profileDataStore.state.subscribe(function (state) {
                //      this.profile = state;
                // get translations for this page to use in the Language Chooser Alert
                _this.getTranslations();
                _this.translate.onLangChange.subscribe(function () {
                    _this.getTranslations();
                });
            }, function (error) { });
        }, function (error) { });
    };
    ItemsPage.prototype.getTranslations = function () {
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
    ItemsPage.prototype.ionViewWillEnter = function () {
        // case when non first timer user(ie. teacher) fill in the form when logged out, submit quotation enquiry
        // this.save();
        this.readItems();
    };
    ItemsPage.prototype.doReorder = function (ev) {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log(ev.detail.complete(), "Dragged from index", ev.detail.from, "to", ev.detail.to);
        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        ev.detail.complete();
    };
    ItemsPage.prototype.toggleReorderGroup = function () {
        this.reorderGroup.disabled = !this.reorderGroup.disabled;
    };
    ItemsPage.prototype.selectedEnquiry = function (value) {
        console.log(value, value.id);
        this.selectedID = "check";
    };
    ItemsPage.prototype.changeTargetValue = function (value) {
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
                return "大專";
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
            //   return "大專";
        }
    };
    ItemsPage.prototype.checkUserStatus = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().onAuthStateChanged(function (user) {
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
    ItemsPage.prototype.number = function (value, numDay) {
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
    ItemsPage.prototype.hideDropZone = function () {
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
    ItemsPage.prototype.onReadQE = function (value) {
        console.log(value);
    };
    // ngx - table start
    ItemsPage.prototype.switchStyle = function () {
        if (this.tableStyle == 'dark') {
            this.tableStyle = 'bootstrap';
        }
        else {
            this.tableStyle = 'dark';
        }
    };
    ItemsPage.prototype.getRowClass = function (row) {
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
    ItemsPage.prototype.updateFilter = function (event) {
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
    ItemsPage.prototype.changeDateFormat = function (date) {
        var dateFormat = new Date(date).toString().substring(0, 15);
        return dateFormat;
    };
    // ngx - table end
    ItemsPage.prototype.onCreateContact = function () {
        this.navCtrl.navigateForward(["/firebase/create#inventory"]);
    };
    ItemsPage.prototype.onDetailPage = function (value, values) {
        console.log(value, values);
        var data = JSON.stringify(value);
        var datas = JSON.stringify(values);
        console.log(data);
        var navigationExtras = {
            queryParams: {
                data: data,
                datas: datas
            }
        };
        this.navCtrl.navigateRoot(["/firebase/inventory#details"], navigationExtras);
    };
    // CRUD
    ItemsPage.prototype.readItems = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.readItems(this.uid, this.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) {
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: c.payload.doc.id }, c.payload.doc.data()));
            });
        })).subscribe(function (data) {
            _this.itemsList = data;
        });
    };
    ItemsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"] },
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] }
    ]; };
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
    return ItemsPage;
}());



/***/ })

}]);
//# sourceMappingURL=firebase-inventory-items-items-module-es5.js.map