(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-quotes-update-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/quotes/update/update.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/quotes/update/update.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<ion-content>\n    <ion-item-divider sticky>\n        <img class=\"avator\" src=\"./../../../../assets/images/home_categories/estimate.svg\" alt=\"\" />\n        <ion-title>Update Estimate {{estimatesDetail.id}} </ion-title>\n        <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n    </ion-item-divider>\n\n    <!-- <app-rating-input *ngIf=\"!contacts\"></app-rating-input> -->\n\n    <div class=\"testbox\">\n        <form [formGroup]=\"reimburshForm\" (ngSubmit)=\"updateEstimate()\" class=\"form-validate form-horizontal\"\n            novalidate=\"\">\n            <!-- START panel-->\n            <div class=\"panel-body\">\n                <legend>Update Estimates</legend>\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Customer Name:</label>\n                        <div class=\"col-sm-6\">\n                            <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Customer Name\"\n                                placeholder=\"Enter Customer name\" /> -->\n                            <ion-skeleton-text *ngIf=\"!contacts\" animated style=\"width: 100%; height: 25px;\">\n                            </ion-skeleton-text>\n\n                            <select *ngIf=\"contacts\" class=\"form-control\" formControlName=\"Customer Name\">\n                                <option *ngFor=\"let i of contacts\" value=\"{{i['Customer Name']}}\">\n                                    {{i['Customer Name']}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Invoice number -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Estimate Number:</label>\n                        <div class=\"col-sm-6\">\n                            <input class=\"form-control\" type=\"text\" formControlName=\"Estimate Number\"\n                                placeholder=\"Estimate Number\" />\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Order number -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Order Number:</label>\n                        <div class=\"col-sm-6\">\n                            <input class=\"form-control\" type=\"text\" formControlName=\"Project ID\"\n                                placeholder=\"Order Number\" />\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Invoice Date -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Estimate Date:</label>\n                        <div class=\"col-sm-6\">\n                            <ion-datetime class=\"datetime-text\" mode=\"ios\" value=\"\" formControlName=\"Estimate Date\">\n                            </ion-datetime>\n                            <!-- <input class=\"form-control\" type=\"date\" formControlName=\"Estimate Date\"\n                                placeholder=\"Estimates Date\" /> -->\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Termis -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Terms:</label>\n                        <div class=\"col-sm-6\">\n                            <input type=\"text\" formControlName=\"Terms\">\n                            <!-- <select class=\"form-control\" formControlName=\"Terms\">\n                                <option value=\"Net 30\">Net 30</option>\n                                <option value=\"Net 45\">Net 45</option>\n                                <option value=\"Net 60\">Net 60</option>\n                            </select> -->\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Due Date -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Due Date/ Expiry Date:</label>\n                        <div class=\"col-sm-6\">\n                            <!-- <input class=\"form-control\" type=\"date\" formControlName=\"Expiry Date\"\n                                placeholder=\"Due Date\" /> -->\n\n                            <ion-datetime class=\"datetime-text\" mode=\"ios\" value=\"\" formControlName=\"Expiry Date\">\n                            </ion-datetime>\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Sales Person -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Salesperson:</label>\n                        <div class=\"col-sm-6\">\n                            <input type=\"text\" formControlName=\"Sales person\">\n                            <!-- <select class=\"form-control\" formControlName=\"Sales person\">\n                                <option value=\"Aaron\">Aaron</option>\n                                <option value=\"Baron\">Baron</option>\n                                <option value=\"Candy\">Candy</option>\n                                <option value=\"Derek\">Derek</option>\n                            </select> -->\n                        </div>\n                    </div>\n                </fieldset>\n                <!--Item List -->\n\n                <fieldset>\n                    <!-- <ion-button class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\"\n                        (click)=\"onPush(iList)\">\n                        {{iList['Item Name']}} {{iList['Rate']}}\n                    </ion-button> -->\n\n                    <ion-chip color=\"secondary\" *ngIf=\"customeditemsList?.length === 0\"\n                        (click)=\"onCreateInventoryItemPage()\">No Items Yet Go and\n                        Add One Now!\n                    </ion-chip>\n\n                    <ion-chip class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\"\n                        (click)=\"onPush(iList)\">\n                        {{iList['Item Name']}} {{iList['Rate']}}\n                    </ion-chip>\n                </fieldset>\n\n                <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"inputEnabled = !inputEnabled\">\n                    <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>\n                    Add another line\n                </ion-button> -->\n\n                <!--Sales List -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <table formArrayName=\"salesList\">\n                            <tr>\n                                <th>Item Name</th>\n                                <th>Item Detail</th>\n                                <th>Quantity</th>\n                                <th>Rate</th>\n                                <!-- <th>Tax</th> -->\n                                <th>Amount</th>\n                            </tr>\n                            <!--Input controls -->\n                            <!-- {{estimatesDetail | json}} -->\n                            <!-- <tr *ngFor=\"let y of estimatesDetail.salesList | slice: 1; let j = index\">\n\n                                <td>\n                                    <div class=\"col-sm-6\">{{y['Item Name']}}\n                                    </div>\n                                </td>\n\n                                <td>\n                                    <div class=\"col-sm-6\">{{y.Description}}\n                                    </div>\n                                </td>\n\n                                <td>\n                                    <div class=\"col-sm-6\">{{y.Rate}}\n                                    </div>\n                                </td>\n\n                                <td>\n                                    <div class=\"col-sm-6\">{{y.quantity}}\n                                    </div>\n                                </td>\n\n                                <td>\n                                    <div class=\"col-sm-6\">{{returnProduct(y.quantity, y.Rate)}}\n                                    </div>\n                                </td>\n                            </tr> -->\n\n                            <tr *ngFor=\"let saleList of salesListArray.controls;let i = index\" [formGroupName]=\"i\">\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"Item Name\"\n                                            formControlName=\"Item Name\" />\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <ion-textarea class=\"form-control\" placeholder=\"Item Detail\"\n                                            formControlName=\"Description\"></ion-textarea>\n                                        <!-- <input class=\"form-control\" type=\"text\" placeholder=\"Item Detail\"\n                                            formControlName=\"Description\" /> -->\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\" placeholder=\"\"\n                                            formControlName=\"quantity\"\n                                            (input)=\"onQtyChange($event, saleList.value.Rate, saleList)\" />\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\" placeholder=\"0.00\"\n                                            formControlName=\"Rate\"\n                                            (input)=\"onPriceChange($event, saleList.value.quantity, saleList)\" />\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <span style=\"color: black; font-weight: bold;\">\n                                            {{returnProduct(saleList.value.Rate, saleList.value.quantity)}}</span>\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"addSalesListItem()\">\n                                        <ion-icon name=\"copy-outline\"></ion-icon>\n                                    </ion-button> -->\n\n                                    <ion-button color=\"secondary\" fill=\"\" (click)=\"removeSalesListItem(i)\">\n                                        <ion-icon name=\"trash-outline\"></ion-icon>\n                                    </ion-button>\n                                </td>\n\n                            </tr>\n                        </table>\n                    </div>\n\n                    <div style=\"float: right;\">\n\n                        <ion-chip style=\"font-size: larger; color: var(--ion-color-theme);\">\n\n                            Total ($): &nbsp;&nbsp;&nbsp;\n                            <span style=\"color: var(--ion-color-theme);\" *ngIf=\"!totalPrice\">\n                                {{estimatesDetail.Total}}\n                            </span>\n\n                            <span style=\"color: var(--ion-color-theme);\" *ngIf=\"totalPrice != 0\">\n                                {{totalPrice}}\n                            </span>\n\n                            <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Total\" placeholder=\"{{totalPrice}}\" />\n               Total: {{totalPrice || 0}} -->\n                        </ion-chip>\n                    </div>\n                </fieldset>\n\n\n                <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"addSalesListItem()\">Add another line</ion-button> -->\n                <!-- Notes -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Customer Notes:</label>\n                        <div class=\"col-sm-6\">\n                            <ion-textarea rows=\"2\" class=\"form-control\" formControlName=\"Notes\"\n                                placeholder=\"Will be displayed on the estimate\"></ion-textarea>\n\n                            <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Notes\"\n                                placeholder=\"Will be displayed on the estimate\" /> -->\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Terms and conditions -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Terms & Conditions:</label>\n                        <div class=\"col-sm-6\">\n                            <ion-textarea rows=\"6\" class=\"form-control\" formControlName=\"Terms & Conditions\"\n                                placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\">\n                            </ion-textarea>\n                            <!-- <input class=\"form-control\" type=\"text\"\n                                formControlName=\"Terms & Conditions\"\n                                placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\" /> -->\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n\n            <ion-button type=\"submit\" [disabled]=\"!totalPrice\" color=\"theme\">Save</ion-button>\n            <br />\n            <!-- <ion-button color=\"dark\" (click)='submitForm(reimburshForm.value)'>Save and Send</ion-button> -->\n        </form>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/firebase/quotes/update/update.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/firebase/quotes/update/update.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageModule", function() { return UpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update.page */ "./src/app/firebase/quotes/update/update.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../app/components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _update_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePage"]
    }
];
let UpdatePageModule = class UpdatePageModule {
};
UpdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            // FormAlertPageModule,
            // NotificationsPageModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_update_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePage"]]
    })
], UpdatePageModule);



/***/ }),

/***/ "./src/app/firebase/quotes/update/update.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/firebase/quotes/update/update.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\ndiv,\nform,\ninput,\nselect {\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 12px;\n  color: #666;\n  line-height: 22px;\n  text-align: left;\n}\n\nh1,\nh4 {\n  margin: 15px 0 4px;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 13px;\n  margin: 20px 0 4px;\n  font-weight: 400;\n}\n\nspan {\n  color: red;\n}\n\n.small {\n  font-size: 10px;\n  line-height: 18px;\n}\n\n.testbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 2px 5px #ccc;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 600;\n  word-break: break-all;\n  text-align: left;\n  color: black;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 30%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 31%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9xdW90ZXMvdXBkYXRlL3VwZGF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL3F1b3Rlcy91cGRhdGUvdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBOztFQUVDLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxVQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTtFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0NEOztBREVBO0VBQ0Msd0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0Q7O0FERUE7OztFQUdDLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0Q7O0FERUE7O0VBRUMsbUJBQUE7QUNDRDs7QURFQTtFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNDRDs7QURFQTs7RUFFQyxXQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtBQ0NEOztBREVBOztFQUVDLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0FDQ0Q7O0FERUE7RUFDQyxvQkFBQTtBQ0NEOztBREVBOzs7RUFHQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7O0VBRUMsVUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FERUE7RUFDQyxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNDRDs7QURFQTtFQUNDLGNBQUE7RUFDQSxzQkFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsVUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLFVBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsdUJBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUdBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDRDs7QURFQTtFQUNDLHlCQUFBO0FDQ0Q7O0FERUE7RUFDQztJQUNDLG9CQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ0NBOztFRENEO0lBQ0MsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSw4QkFBQTtFQ0VBOztFREFEO0lBQ0MsVUFBQTtJQUNBLGdCQUFBO0VDR0E7O0VEREQ7SUFDQyxVQUFBO0lBQ0EsZ0JBQUE7RUNJQTs7RURGRDs7SUFFQyxvQkFBQTtFQ0tBO0FBQ0Y7O0FERkE7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNJRCIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL3F1b3Rlcy91cGRhdGUvdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksXG5kaXYsXG5mb3JtLFxuaW5wdXQsXG5zZWxlY3Qge1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDEycHg7XG5cdGNvbG9yOiAjNjY2O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaDEsXG5oNCB7XG5cdG1hcmdpbjogMTVweCAwIDRweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDQge1xuXHRmb250LXNpemU6IDEzcHg7XG5cdG1hcmdpbjogMjBweCAwIDRweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuc3BhbiB7XG5cdGNvbG9yOiByZWQ7XG59XG5cbi5zbWFsbCB7XG5cdGZvbnQtc2l6ZTogMTBweDtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi50ZXN0Ym94IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGhlaWdodDogaW5oZXJpdDtcblx0cGFkZGluZzogMHB4O1xufVxuXG5mb3JtIHtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDVweCAjY2NjO1xufVxuXG5pbnB1dCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcblx0cGFkZGluZzogNXB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6aG92ZXIsXG5zZWxlY3Q6aG92ZXIge1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDk1NDg0O1xuXHRiYWNrZ3JvdW5kOiAjZTZlZWY3O1xufVxuXG4udGl0bGUtYmxvY2sgc2VsZWN0LFxuLnRpdGxlLWJsb2NrIGlucHV0IHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuc2VsZWN0IHtcblx0cGFkZGluZzogN3B4IDA7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbnNlbGVjdCxcbnRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbm9wdGlvbiB7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kYXktdmlzaXRlZCxcbi50aW1lLXZpc2l0ZWQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInRpbWVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuXHRtYXJnaW46IDJweCAyMnB4IDAgMDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGksXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDhweDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSB7XG5cdHJpZ2h0OiA1cHg7XG5cdHotaW5kZXg6IDE7XG5cdGNvbG9yOiAjYTlhOWE5O1xufVxuXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG5cdHJpZ2h0OiAwO1xuXHR6LWluZGV4OiAyO1xuXHRvcGFjaXR5OiAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGxhYmVsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAgMjBweCAxMHB4IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgaW5wdXQge1xuXHR3aWR0aDogYXV0bztcblx0bWFyZ2luLXRvcDogLTJweDtcbn1cblxudGgsXG50ZCB7XG5cdHdpZHRoOiAxOCU7XG5cdHBhZGRpbmc6IDE1cHggMDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dmVydGljYWwtYWxpZ246IHVuc2V0O1xuXHRsaW5lLWhlaWdodDogMThweDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbi5maXJzdC1jb2wge1xuXHR3aWR0aDogMjUlO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ZXh0YXJlYSB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xufVxuXG4uYnRuLWJsb2NrIHtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuXHR3aWR0aDogMTUwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlcjogbm9uZTtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwOTU0ODQ7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICNmZmY7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA2NjZhMztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSB7XG5cdC50aXRsZS1yYWRpbyB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0cGFkZGluZy10b3A6IDE1cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBlbmQ7XG5cdH1cblx0LnRpdGxlLWJsb2NrIHtcblx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXHQudGl0bGUtYmxvY2sgc2VsZWN0IHtcblx0XHR3aWR0aDogMzAlO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0LnRpdGxlLWJsb2NrIGlucHV0IHtcblx0XHR3aWR0aDogMzElO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0dGgsXG5cdHRkIHtcblx0XHR3b3JkLWJyZWFrOiBrZWVwLWFsbDtcblx0fVxufVxuXG4uc2VydmljZSB7XG5cdHBvc2l0aW9uOiBzdGF0aWM7XG5cdG1hcmdpbi10b3A6IDA7XG5cdG1hcmdpbi1yaWdodDogLjMxMjVyZW07XG5cdG1hcmdpbi1sZWZ0OiAwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG5cdG1hcmdpbi1yaWdodDogLjc1cmVtO1xufSIsImJvZHksXG5kaXYsXG5mb3JtLFxuaW5wdXQsXG5zZWxlY3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaDEsXG5oNCB7XG4gIG1hcmdpbjogMTVweCAwIDRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMjBweCAwIDRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi50ZXN0Ym94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAjY2NjO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6aG92ZXIsXG5zZWxlY3Q6aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDk1NDg0O1xuICBiYWNrZ3JvdW5kOiAjZTZlZWY3O1xufVxuXG4udGl0bGUtYmxvY2sgc2VsZWN0LFxuLnRpdGxlLWJsb2NrIGlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuc2VsZWN0IHtcbiAgcGFkZGluZzogN3B4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbnNlbGVjdCxcbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm9wdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kYXktdmlzaXRlZCxcbi50aW1lLXZpc2l0ZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPXRpbWVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgbWFyZ2luOiAycHggMjJweCAwIDA7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpLFxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSB7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjYTlhOWE5O1xufVxuXG5bdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAyMHB4IDEwcHggMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBpbnB1dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG50aCxcbnRkIHtcbiAgd2lkdGg6IDE4JTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdW5zZXQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZpcnN0LWNvbCB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5idG4tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NTQ4NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY2NmEzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHtcbiAgLnRpdGxlLXJhZGlvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAudGl0bGUtYmxvY2sgc2VsZWN0IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAudGl0bGUtYmxvY2sgaW5wdXQge1xuICAgIHdpZHRoOiAzMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIHRoLFxudGQge1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICB9XG59XG4uc2VydmljZSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1yaWdodDogMC4zMTI1cmVtO1xuICBtYXJnaW4tbGVmdDogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/firebase/quotes/update/update.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/firebase/quotes/update/update.page.ts ***!
  \*******************************************************/
/*! exports provided: UpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePage", function() { return UpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _invoice_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../invoice.model */ "./src/app/firebase/invoice.model.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm2015/ngx-papaparse.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");













let UpdatePage = class UpdatePage {
    //////////////////////////
    constructor(authService, navCtrl, firebaseService, route, formBuilder, http, papa) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.http = http;
        this.papa = papa;
        this.estimateData = new _invoice_model__WEBPACK_IMPORTED_MODULE_7__["EstimateModel"]();
        this.estimatesDetail = new _invoice_model__WEBPACK_IMPORTED_MODULE_7__["EstimateModel"]();
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(res => {
            const value = JSON.parse(res.data);
            console.log(value);
            this.estimatesDetail = value;
        });
        this.readItems();
        this.buildForm();
    }
    ionViewWillEnter() {
        this.getCsvData();
    }
    updateEstimate() {
        // update the salesList array --> need to update
        console.log(this.uid, this.email, this.estimatesDetail, this.reimburshForm.value);
        console.log(this.totalPrice);
        this.reimburshForm.value['Total'] = this.totalPrice;
        this.firebaseService.updateEstimates(this.estimatesDetail['id'], this.uid, this.email, this.reimburshForm.value).then(() => {
            this.dismissModal();
        });
    }
    dismissModal() {
        this.navCtrl.navigateBack('/firebase/quotes');
    }
    testTablePDF() {
        var columns = [
            { title: "ID", dataKey: "id" },
            { title: "Name", dataKey: "name" },
            { title: "Country", dataKey: "country" },
        ];
        var rows = [
            { "id": 1, "name": "Shaw", "country": "Tanzania" },
            { "id": 2, "name": "Nelson", "country": "Kazakhstan" },
            { "id": 3, "name": "Garcia", "country": "Madagascar" },
        ];
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__('p', 'pt');
        doc.autoTable(columns, rows, {
            // theme: 'striped' | 'grid' | 'plain' | 'css' = 'striped'
            theme: 'striped',
            styles: { fillColor: [129, 216, 208] },
            columnStyles: {
                id: { fillColor: 255 }
            },
            margin: { top: 160 },
            beforePageContent: function (data) {
                doc.text("Header", 40, 30);
            }
        });
        doc.save('table.pdf');
    }
    buildForm() {
        this.reimburshForm = this.formBuilder.group({
            "Estimate Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Estimate Date"]),
            "Estimate ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Estimate ID"]),
            "Estimate Number": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Estimate Number"]),
            "Estimate Status": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('revised'),
            "Customer ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Customer ID"]),
            "Expiry Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Expiry Date"]),
            "PurchaseOrder": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.PurchaseOrder),
            "Currency Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Currency Code"]),
            "Exchange Rate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Exchange Rate"]),
            "Discount Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Discount Type"]),
            "Is Discount Before Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Is Discount Before Tax"]),
            "Entity Discount Percent": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Entity Discount Percent"]),
            "Is Inclusive Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Is Inclusive Tax"]),
            "SubTotal": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.SubTotal),
            "Total": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Adjustment": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Adjustment),
            "Notes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Notes),
            'Terms': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Terms),
            "Terms & Conditions": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Terms & Conditions"]),
            "Customer Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Customer Name"]),
            "Project Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Project Name"]),
            // orderNumber: this.formBuilder.control(null),
            "Project ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Project ID"]),
            // salesPerson: this.formBuilder.control(null),
            "Sales person": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Sales person"]),
            "Billing Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Billing Address"]),
            "Billing City": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Billing City"]),
            "Billing State": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Billing State"]),
            "Billing Country": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Billing Country"]),
            "Billing Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Billing Code"]),
            "Billing Fax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Billing Fax"]),
            "Template Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Template Name"]),
            "Adjustment Description": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Adjustment Description"]),
            "Shipping Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Address"]),
            "Shipping City": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping City"]),
            "Shipping State": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping State"]),
            "Shipping Country": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Country"]),
            "Shipping Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Code"]),
            "Shipping Fax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Fax"]),
            "Source": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Source),
            "Reference ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Reference ID"]),
            "Last Sync Time": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Last Sync Time"]),
            "Shipping Charge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Charge"]),
            "Shipping Charge Tax ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Charge Tax ID"]),
            "Shipping Charge Tax Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Charge Tax Amount"]),
            "Shipping Charge Tax Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Charge Tax Name"]),
            "Shipping Charge Tax %": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Charge Tax %"]),
            "Shipping Charge Tax Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Charge Tax Type"]),
            "Item Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Name"]),
            "Item Desc": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Desc"]),
            "Quantity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Quantity),
            "Discount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Discount),
            "Discount Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Discount Amount"]),
            "Item Tax Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Tax Amount"]),
            "Item Total": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Total"]),
            "Account": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Account),
            "SKU": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.SKU),
            "Usage unit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Usage unit"]),
            "Item Price": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Price"]),
            "Tax ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Tax ID"]),
            "Item Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Total"]),
            "Item Tax %": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Tax %"]),
            "Item Tax Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Tax Type"]),
            // this one would be the first item in the group array
            // salesList: this.formBuilder.array([
            //   this.formBuilder.group({
            //     quantity: this.formBuilder.control(null),
            //     Rate: this.formBuilder.control(null),
            //     amount: this.formBuilder.control(null),
            //     "Description": this.formBuilder.control(null),
            //     "Item Name": this.formBuilder.control(null),
            //   }),
            // ]),
            salesList: this.formBuilder.array(this.estimatesDetail.salesList.map(data => this.createSalesList(data)))
        });
        //    this.salesListArray = this.estimatesDetail.salesList as FormArray;
        this.salesListArray = this.reimburshForm.get('salesList');
        console.log(this.salesListArray.value);
    }
    createSalesList(contact) {
        return this.formBuilder.group({
            quantity: [contact.quantity],
            Rate: [contact.Rate],
            amount: [contact.amount],
            Description: [contact.Description],
            "Item Name": [contact['Item Name']],
        });
    }
    onQtyChange(e, Rate, f) {
        // const qty = (e.target as HTMLInputElement).value;
        // console.log(qty, Rate);
        // const product = Number(qty) * Rate
        // console.log(product);
        // f.get('amount').setValue(qty * price);
        const qty = e.target.value;
        const price = f.get('Rate').value;
        const product = Number(qty) * price;
        console.log(f, product);
        f.get('amount').setValue(Number(qty) * price);
        this.totalPrice = this.returnSum();
        console.log(this.totalPrice);
    }
    onPriceChange(e, quantity, f) {
        // const price = (e.target as HTMLInputElement).value;
        // console.log(quantity, price);
        // const product = Number(price) * quantity;
        // console.log(product);
        //  f.get('amount').setValue(qty * price);
        const qty = f.get('quantity').value;
        const price = e.target.value;
        const product = qty * Number(price);
        console.log(f, product);
        f.get('amount').setValue(qty * Number(price));
        this.totalPrice = this.returnSum();
        console.log(this.totalPrice);
    }
    returnProduct(a, b) {
        return a * b;
    }
    // returnSum(a: number, b: number) {
    //   return a + b
    // }
    returnSum() {
        let totalPrice = 0;
        //   console.log(this.reimburshForm.value.salesList);
        this.reimburshForm.value.salesList.forEach(element => {
            if (element.amount) {
                //   console.log(element.amount);
                totalPrice += element.amount;
            }
        });
        console.log(totalPrice);
        return totalPrice;
    }
    jsonstringify(value) {
        return JSON.stringify(value);
    }
    // get preset customer list 
    getCsvData() {
        this.firebaseService.readContactsinCSV(this.uid, this.email).subscribe(res => {
            this.downloadURL = res.userData['downloadURL'];
            console.log('csv import value: ', res, this.downloadURL);
            this.loadCSV();
            setTimeout(() => {
                this.exportCSV();
                console.log('export CSV');
            }, 2000);
            setTimeout(() => {
                this.convertCSVtoJSON();
            }, 4000);
        });
    }
    loadCSV() {
        console.log('load CSV');
        this.http.get(this.downloadURL, {
            responseType: 'text'
        }).subscribe(data => this.extractData(data), err => console.log('error', err));
    }
    extractData(res) {
        let csvData = res || '';
        this.papa.parse(csvData, {
            complete: parsedData => {
                this.csvData = parsedData.data;
                console.log(parsedData);
                //  console.log(parsedData.data.splice(0, 1)[0]);
                this.headerRow = parsedData.data.splice(0, 1)[0];
                console.log(this.headerRow);
            }
        });
        console.log(res, this.csvData);
    }
    exportCSV() {
        let csv = this.papa.unparse({
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
    }
    convertCSVtoJSON() {
        console.log(this.csv);
        // our dummy CSV let csvStr = `ONE,TWO,THREE,FOUR,FIVE "escape""quote","escape,comma",no quotes,"double""""quote","quote"",comma" true,123,null,undefined,"[false,456,null]" true,123,null,undefined,{"one":"two"}`; 
        // running Papa Parse, you just pass it your csv. 
        // our dummy CSV 
        // let csvStr = `ONE,TWO,THREE,FOUR,FIVE "escape""quote","escape,comma",no quotes,"double""""quote","quote"",comma" true,123,null,undefined,"[false,456,null]" true,123,null,undefined,{"one":"two"}`;
        // running Papa Parse, you just pass it your csv. 
        let csv = this.papa.parse(this.csv, {
            delimiter: "",
            newline: "",
            quoteChar: '"Name"',
            escapeChar: '"',
            header: true,
            dynamicTyping: false,
            skipEmptyLines: true
        });
        // the arrays of csv fields are in the data property 
        console.log(this.csv, csv.data);
        this.contacts = csv.data;
    }
    // end of get preset customer list
    // call items list data
    readItems() {
        console.log(this.email, this.uid);
        this.firebaseService.readItems(this.uid, this.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(changes => changes.map(c => (Object.assign({ id: c.payload.doc.id }, c.payload.doc.data()))))).subscribe(data => {
            this.customeditemsList = data;
            console.log(this.customeditemsList, this.customeditemsList.length);
        });
    }
    onPush(value) {
        console.log(value);
        // this.salesListArray.push(value);
        let formGroup = this.formBuilder.group({
            //   itemName: this.formBuilder.control(null),
            //   itemDetail: this.formBuilder.control(null),
            quantity: this.formBuilder.control(0),
            Rate: this.formBuilder.control(value['Rate']),
            // tax: this.formBuilder.control(null),
            amount: this.formBuilder.control(1 * value['Rate']),
            "Description": this.formBuilder.control(value['Description']),
            // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
            "Item Name": this.formBuilder.control(value['Item Name']),
        });
        // this.arr.push(formGroup.value);
        // this.arr = this.reimburshForm.get('salesList') as FormArray;
        this.value = value;
        console.log(this.salesListArray.value, value);
        this.addSalesListItem();
    }
    addSalesListItem() {
        console.log(this.value, this.salesListArray.value);
        let formGroup = this.formBuilder.group({
            //   itemName: this.formBuilder.control(null),
            //   itemDetail: this.formBuilder.control(null),
            quantity: this.formBuilder.control(0),
            Rate: this.formBuilder.control(this.value['Rate']),
            // tax: this.formBuilder.control(null),
            amount: this.formBuilder.control(this.value['amount']),
            "Description": this.formBuilder.control(this.value['Description']),
            // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
            "Item Name": this.formBuilder.control(this.value['Item Name']),
        });
        this.salesListArray.push(formGroup);
        this.salesListArray = this.reimburshForm.get('salesList');
        console.log(this.salesListArray.value);
    }
    onCreateInventoryItemPage() {
        this.navCtrl.navigateForward('/firebase/create%23inventory');
    }
};
UpdatePage.ctorParameters = () => [
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
    { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__["Papa"] }
];
UpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update',
        template: __webpack_require__(/*! raw-loader!./update.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/quotes/update/update.page.html"),
        styles: [__webpack_require__(/*! ./update.page.scss */ "./src/app/firebase/quotes/update/update.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _firebase_integration_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
        ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__["Papa"]])
], UpdatePage);

// onReset() {
//   this.createEstimateForm = new FormGroup({
//     name: new FormControl("", Validators.required),
//     phone: new FormControl("", Validators.required),
//     email: new FormControl(
//       "",
//       Validators.compose([
//         Validators.required,
//         Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
//       ])
//     ),
//     cate_1: new FormControl(""),
//     cate_2: new FormControl(""),
//     cate_3: new FormControl(""),
//     cate_4: new FormControl(""),
//     average_speed: new FormControl(0),
//     reply_rate: new FormControl(0),
//     editor_choice: new FormControl(),
//     class_size: new FormControl({ lower: 10, upper: 42 }),
//     target_user_age: new FormControl({ lower: 10, upper: 16 }),
//     class_length: new FormControl({ lower: 10, upper: 42 }),
//     teaching_materials: new FormControl("rental"),
//     company_intro: new FormControl(),
//     tutor_qual: new FormControl(),
//     competition_exp: new FormControl()
//   });
// }


/***/ })

}]);
//# sourceMappingURL=firebase-quotes-update-update-module-es2015.js.map