(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-quotes-create-create-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/quotes/create/create.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/quotes/create/create.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n    <ion-item-divider>\n        <img class=\"avator\" src=\"./../../../../assets/images/home_categories/estimate.svg\" alt=\"\" />\n        <ion-title>New Estimate</ion-title>\n        <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n\n    </ion-item-divider>\n\n    <app-rating-input *ngIf=\"!contacts\"></app-rating-input>\n\n    <div class=\"testbox\">\n        <form [formGroup]=\"reimburshForm\" (ngSubmit)=\"createEstimate()\" class=\"form-validate form-horizontal\"\n            novalidate=\"\">\n            <!-- START panel-->\n            <div class=\"panel-body\">\n                <legend>New Estimates</legend>\n                <fieldset>\n                    <!-- <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Customer Name:</label>\n                        <div class=\"col-sm-6\">\n                            <input class=\"form-control\" type=\"text\" formControlName=\"Customer Name\"\n                                placeholder=\"Enter Customer name\" />\n                        </div>\n                    </div> -->\n\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Customer Name:</label>\n                        <div class=\"col-sm-6\">\n                            <select class=\"form-control\" formControlName=\"Customer Name\">\n                                <option *ngFor=\"let i of contacts\" value=\"{{i['Customer Name']}}\">{{i['Customer Name']}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Invoice number -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Estimate Number:</label>\n                        <div class=\"col-sm-6\">\n                            <input class=\"form-control\" type=\"text\" formControlName=\"Estimate Number\"\n                                placeholder=\"Estimate Number\" />\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Order number -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Order Number(Project ID):</label>\n                        <div class=\"col-sm-6\">\n                            <input class=\"form-control\" type=\"text\" formControlName=\"Project ID\"\n                                placeholder=\"Order Number\" />\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Invoice Date -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Estimate Date:</label>\n                        <div class=\"col-sm-6\">\n                            <ion-datetime class=\"datetime-text\" mode=\"ios\" value=\"\" formControlName=\"Estimate Date\">\n                            </ion-datetime>\n                            <!-- <input type=\"date\" formControlName=\"Estimate Date\" value=\"2018-07-22\" /> -->\n                        </div>\n\n                    </div>\n                </fieldset>\n                <!-- Termis -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Terms:</label>\n                        <div class=\"col-sm-6\">\n                            <select class=\"form-control\" formControlName=\"Terms\">\n                                <option value=\"Net 30\">Net 30</option>\n                                <option value=\"Net 45\">Net 45</option>\n                                <option value=\"Net 60\">Net 60</option>\n                            </select>\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Due Date -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Due Date/ Expiry Date:</label>\n                        <div class=\"col-sm-6\">\n                            <!-- <input class=\"form-control\" type=\"date\" formControlName=\"Expiry Date\"\n                                placeholder=\"Due Date\" /> -->\n\n                            <ion-datetime class=\"datetime-text\" mode=\"ios\" value=\"\" formControlName=\"Expiry Date\">\n                            </ion-datetime>\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Sales Person -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Salesperson:</label>\n                        <div class=\"col-sm-6\">\n                            <select class=\"form-control\" formControlName=\"Sales person\">\n                                <option value=\"Aaron\">Aaron</option>\n                                <option value=\"Baron\">Baron</option>\n                                <option value=\"Candy\">Candy</option>\n                                <option value=\"Derek\">Derek</option>\n                            </select>\n                        </div>\n                    </div>\n                </fieldset>\n                <!--Item List -->\n\n                <fieldset>\n                    <!-- <ion-button class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\"\n                        (click)=\"onPush(iList)\">\n                        {{iList['Item Name']}} {{iList['Rate']}}\n                    </ion-button> -->\n\n                    <ion-chip color=\"secondary\" *ngIf=\"customeditemsList?.length === 0\"\n                        (click)=\"onCreateInventoryItemPage()\">No Items Yet Go and\n                        Add One Now!\n                    </ion-chip>\n\n                    <ion-chip class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\"\n                        (click)=\"onPush(iList)\">\n                        {{iList['Item Name']}} {{iList['Rate']}}\n                    </ion-chip>\n                </fieldset>\n\n                <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"inputEnabled = !inputEnabled\">\n                    <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>\n                    Add another line\n                </ion-button> -->\n\n                <!-- Sales List -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <table formArrayName=\"salesList\">\n                            <tr>\n                                <th>Item Name</th>\n                                <th>Item Detail</th>\n                                <th>Quantity</th>\n                                <th>Rate</th>\n                                <!-- <th>Tax</th> -->\n                                <th>Amount</th>\n                                <th></th>\n                            </tr>\n                            <!--Input controls/ NOT TO EDIT ITEM IN THIS PAGE -->\n                            <tr *ngFor=\"let saleList of salesListArray.controls;let i = index\" [formGroupName]=\"i\">\n\n                                <td>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"Item Name\"\n                                            formControlName=\"Item Name\" />\n                                    </div>\n                                </td>\n\n                                <td>\n                                    <div class=\"col-sm-6\">\n                                        <ion-textarea class=\"form-control\" row=\"6\" placeholder=\"Item Detail\"\n                                            formControlName=\"Description\"></ion-textarea>\n                                        <!-- <input class=\"form-control\" type=\"text\" placeholder=\"Item Detail\"\n                                            formControlName=\"Description\" /> -->\n                                    </div>\n                                </td>\n\n                                <td>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\" placeholder=\"\"\n                                            (input)=\"onQtyChange($event, saleList)\" formControlName=\"quantity\" />\n                                    </div>\n                                </td>\n\n                                <td>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\" placeholder=\"0.00\"\n                                            (input)=\"onPriceChange($event, saleList)\" formControlName=\"Rate\" />\n                                    </div>\n                                </td>\n\n                                <td>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\"\n                                            placeholder=\"{{returnProduct(saleList.value.Rate, saleList.value.quantity)}}\"\n                                            formControlName=\"amount\" />\n                                    </div>\n                                </td>\n\n                                <!-- <td>\n                                    <div class=\"col-sm-6\">\n                                        <span style=\"color: black; font-weight: bold;\">\n                                            {{returnProduct(saleList.value.Rate, saleList.value.quantity)}}</span>\n                                    </div>\n                                </td> -->\n\n                                <td>\n                                    <ion-button color=\"theme\" fill=\"clear\" (click)=\"addSalesListItem()\">\n                                        <ion-icon name=\"copy-outline\"></ion-icon>\n                                    </ion-button>\n                                    <ion-button color=\"secondary\" fill=\"clear\" (click)=\"removeSalesListItem(i)\">\n                                        <ion-icon name=\"close-circle\"></ion-icon>\n                                    </ion-button>\n                                </td>\n                            </tr>\n\n                        </table>\n                    </div>\n                </fieldset>\n                <fieldset>\n\n                    <!-- <strong>Total:</strong>\n                            <input class=\"form-control\" readonly placeholder=\"{{totalPrice || 0}}\" type=\"number\"\n                                formControlName=\"Total\" /> -->\n                    <div style=\"float: right;\">\n                        <ion-chip>Total: {{totalPrice || 0}}</ion-chip>\n                    </div>\n\n                </fieldset>\n                <!-- Notes -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Customer Notes:</label>\n                        <div class=\"col-sm-6\">\n                            <ion-textarea rows=\"2\" class=\"form-control\" formControlName=\"Notes\"\n                                placeholder=\"Will be displayed on the estimate\"></ion-textarea>\n\n                            <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Notes\"\n                                placeholder=\"Will be displayed on the estimate\" /> -->\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Terms and conditions -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Terms & Conditions:</label>\n                        <div class=\"col-sm-6\">\n                            <ion-textarea rows=\"6\" class=\"form-control\" formControlName=\"Terms & Conditions\"\n                                placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\">\n                            </ion-textarea>\n                            <!-- <input class=\"form-control\" type=\"text\"\n                                formControlName=\"Terms & Conditions\"\n                                placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\" /> -->\n                        </div>\n                    </div>\n                </fieldset>\n            </div>\n            <!-- <ion-button (click)=\"returnSum()\">Calculate sum</ion-button> -->\n            <ion-button type=\"submit\" color=\"theme\">Save and Send</ion-button>\n            <!-- <br />\n            <ion-button color=\"dark\" (click)=\"submitForm(reimburshForm.value)\">Save and Send</ion-button> -->\n        </form>\n    </div>\n</ion-content>\n<!-- <form [formGroup]=\"createEstimateForm\" (ngSubmit)=\"createEstimate()\">\n   <h4>Customer Name<span>*</span></h4>\n   <select formControlName=\"Customer Name\">\n      <option value=\"Type\" selected>Select or Type to add</option>\n      <option value=\"Banma\">Banma</option>\n      <option value=\"Kokui\">Kokui</option>\n      <option value=\"Aaron\">Aaron</option>\n      <option value=\"Claire\">Claire</option>\n      <option value=\"Elaine\">Elaine</option>\n      <option value=\"Fred\">Fred</option>\n   </select>\n   <h4>Estimate# <span>*</span></h4>\n   <div class=\"title-block\">\n      <input type=\"text\" name=\"estimate\" formControlName=\"Estimate Number\" />\n   </div>\n   <h4>Reference#</h4>\n   <div class=\"title-block\">\n      <input type=\"text\" name=\"reference\" formControlName=\"Reference ID\" />\n   </div>\n   <h4>Estimate Date<span>*</span></h4>\n   <div class=\"title-block\">\n      <input type=\"date\" name=\"estimate_date\" formControlName=\"Estimate Date\" />\n   </div>\n   <h4>Expiry Date<span>*</span></h4>\n   <div class=\"title-block\">\n      <input type=\"date\" name=\"expiry_date\" formControlName=\"Expiry Date\" />\n   </div>\n   <h4>Salesperson<span>*</span></h4>\n   <div class=\"title-block\">\n      <select formControlName=\"Sales person\">\n         <option value=\"Type\" selected>Select or Type to add</option>\n         <option value=\"Phyllis\">Phyllis</option>\n         <option value=\"Staffen\">Staffen</option>\n         <option value=\"Phoebe\">Phoebe</option>\n         <option value=\"Richard\">Richard</option>\n         <option value=\"Dan\">Dan</option>\n         <option value=\"Jack\">Jack</option>\n         <option value=\"Koi\">Koi</option>\n      </select>\n   </div>\n   <h4>Subject / Project Name</h4>\n   <div class=\"title-block\">\n      <textarea rows=\"1\" placeholder=\"Let your customer know what this Estimate is for\" formControlName=\"Project Name\"></textarea>\n   </div>\n   \n   <h4>Notes</h4>\n   <div class=\"title-block\">\n      <textarea rows=\"1\" placeholder=\"Will be displayed on the estimate\" formControlName=\"Notes\"></textarea>\n   </div>\n   <h4>Terms & Conditions</h4>\n   <div class=\"title-block\">\n      <textarea rows=\"4\" placeholder=\"Will be displayed on the estimate\" formControlName=\"Terms & Conditions\"></textarea>\n   </div>\n   <div class=\"btn-block\">\n      <button type=\"submit\">Save</button>\n   </div>\n   </form> -->"

/***/ }),

/***/ "./src/app/firebase/quotes/create/create.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/firebase/quotes/create/create.module.ts ***!
  \*********************************************************/
/*! exports provided: CreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageModule", function() { return CreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "./src/app/firebase/quotes/create/create.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app/components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]
    }
];
let CreatePageModule = class CreatePageModule {
};
CreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]]
    })
], CreatePageModule);



/***/ }),

/***/ "./src/app/firebase/quotes/create/create.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/firebase/quotes/create/create.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\ndiv,\nform,\ninput,\nselect {\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 12px;\n  color: #666;\n  line-height: 22px;\n}\n\nh1,\nh4 {\n  margin: 15px 0 4px;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 13px;\n  margin: 20px 0 4px;\n  font-weight: 400;\n}\n\nspan {\n  color: red;\n}\n\n.small {\n  font-size: 10px;\n  line-height: 18px;\n}\n\n.testbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 2px 5px #ccc;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 30%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 31%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.picker-opt {\n  color: var(--ion-color-theme) !important;\n}\n\n.datetime-text {\n  padding: 5px !important;\n  border: 1px solid #ccc !important;\n  border-radius: 3px !important;\n  vertical-align: middle !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9xdW90ZXMvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL3F1b3Rlcy9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTs7RUFFQyxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNDRDs7QURFQTtFQUNDLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NEOztBREVBOzs7RUFHQyxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVBOztFQUVDLG1CQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsV0FBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTs7RUFFQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0Msb0JBQUE7QUNDRDs7QURFQTs7O0VBR0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0NEOztBREVBOztFQUVDLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBOztFQUVDLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0Q7O0FERUE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLHVCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7RUFDQyx5QkFBQTtBQ0NEOztBREVBO0VBQ0M7SUFDQyxvQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUNDQTs7RURFRDtJQUNDLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsOEJBQUE7RUNDQTs7RURDRDtJQUNDLFVBQUE7SUFDQSxnQkFBQTtFQ0VBOztFREFEO0lBQ0MsVUFBQTtJQUNBLGdCQUFBO0VDR0E7O0VEREQ7O0lBRUMsb0JBQUE7RUNJQTtBQUNGOztBRERBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDR0Q7O0FEQUE7RUFDQyx3Q0FBQTtBQ0dEOztBREFBO0VBQ0ksdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL3F1b3Rlcy9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksXG5kaXYsXG5mb3JtLFxuaW5wdXQsXG5zZWxlY3Qge1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDEycHg7XG5cdGNvbG9yOiAjNjY2O1xuXHRsaW5lLWhlaWdodDogMjJweDtcbn1cblxuaDEsXG5oNCB7XG5cdG1hcmdpbjogMTVweCAwIDRweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDQge1xuXHRmb250LXNpemU6IDEzcHg7XG5cdG1hcmdpbjogMjBweCAwIDRweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuc3BhbiB7XG5cdGNvbG9yOiByZWQ7XG59XG5cbi5zbWFsbCB7XG5cdGZvbnQtc2l6ZTogMTBweDtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi50ZXN0Ym94IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGhlaWdodDogaW5oZXJpdDtcblx0cGFkZGluZzogMHB4O1xufVxuXG5mb3JtIHtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDVweCAjY2NjO1xufVxuXG5pbnB1dCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcblx0cGFkZGluZzogNXB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6aG92ZXIsXG5zZWxlY3Q6aG92ZXIge1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDk1NDg0O1xuXHRiYWNrZ3JvdW5kOiAjZTZlZWY3O1xufVxuXG4udGl0bGUtYmxvY2sgc2VsZWN0LFxuLnRpdGxlLWJsb2NrIGlucHV0IHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuc2VsZWN0IHtcblx0cGFkZGluZzogN3B4IDA7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbnNlbGVjdCxcbnRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbm9wdGlvbiB7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kYXktdmlzaXRlZCxcbi50aW1lLXZpc2l0ZWQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInRpbWVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuXHRtYXJnaW46IDJweCAyMnB4IDAgMDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGksXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDhweDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSB7XG5cdHJpZ2h0OiA1cHg7XG5cdHotaW5kZXg6IDE7XG5cdGNvbG9yOiAjYTlhOWE5O1xufVxuXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG5cdHJpZ2h0OiAwO1xuXHR6LWluZGV4OiAyO1xuXHRvcGFjaXR5OiAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGxhYmVsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAgMjBweCAxMHB4IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgaW5wdXQge1xuXHR3aWR0aDogYXV0bztcblx0bWFyZ2luLXRvcDogLTJweDtcbn1cblxudGgsXG50ZCB7XG5cdHdpZHRoOiAxOCU7XG5cdHBhZGRpbmc6IDE1cHggMDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dmVydGljYWwtYWxpZ246IHVuc2V0O1xuXHRsaW5lLWhlaWdodDogMThweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uZmlyc3QtY29sIHtcblx0d2lkdGg6IDI1JTtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGV4dGFyZWEge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcbn1cblxuLmJ0bi1ibG9jayB7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcblx0d2lkdGg6IDE1MHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXI6IG5vbmU7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1NDg0O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNjY2YTM7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NjhweCkge1xuXHQudGl0bGUtcmFkaW8ge1xuXHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdHBhZGRpbmctdG9wOiAxNXB4O1xuXHRcdGp1c3RpZnktY29udGVudDogZW5kO1xuXHR9XG5cdC50aXRsZS11cGxvYWRlciB7fVxuXHQudGl0bGUtYmxvY2sge1xuXHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRtYXJnaW4tbGVmdDogMTVweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdC50aXRsZS1ibG9jayBzZWxlY3Qge1xuXHRcdHdpZHRoOiAzMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHQudGl0bGUtYmxvY2sgaW5wdXQge1xuXHRcdHdpZHRoOiAzMSU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHR0aCxcblx0dGQge1xuXHRcdHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuXHR9XG59XG5cbi5zZXJ2aWNlIHtcblx0cG9zaXRpb246IHN0YXRpYztcblx0bWFyZ2luLXRvcDogMDtcblx0bWFyZ2luLXJpZ2h0OiAuMzEyNXJlbTtcblx0bWFyZ2luLWxlZnQ6IDA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctbGVmdDogMDtcblx0bWFyZ2luLXJpZ2h0OiAuNzVyZW07XG59XG5cbi5waWNrZXItb3B0IHtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSkgIWltcG9ydGFudDtcdFxufVxuXG4uZGF0ZXRpbWUtdGV4dCB7XG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDsgXG59XG4vLyAuYmFkZ2Uge1xuLy8gXHRwYWRkaW5nOiAxMHB4O1xuLy8gfVxuXG4vLyAuaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbi8vICAgICBib3JkZXI6IG5vbmU7XG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgICBvdXRsaW5lOiAwO1xuLy8gICAgIHBhZGRpbmc6IC43NXJlbTtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyB9XG5cbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgIGJvdHRvbTogMDtcbi8vICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIGhlaWdodDogYXV0bztcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICByaWdodDogMDtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgd2lkdGg6IGF1dG87XG4vLyB9IiwiYm9keSxcbmRpdixcbmZvcm0sXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG5oMSxcbmg0IHtcbiAgbWFyZ2luOiAxNXB4IDAgNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAyMHB4IDAgNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnRlc3Rib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4ICNjY2M7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW5wdXQ6aG92ZXIsXG50ZXh0YXJlYTpob3ZlcixcbnNlbGVjdDpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOTU0ODQ7XG4gIGJhY2tncm91bmQ6ICNlNmVlZjc7XG59XG5cbi50aXRsZS1ibG9jayBzZWxlY3QsXG4udGl0bGUtYmxvY2sgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5zZWxlY3Qge1xuICBwYWRkaW5nOiA3cHggMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuc2VsZWN0LFxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxub3B0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRheS12aXNpdGVkLFxuLnRpbWUtdmlzaXRlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9dGltZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBtYXJnaW46IDJweCAyMnB4IDAgMDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGksXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpIHtcbiAgcmlnaHQ6IDVweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNhOWE5YTk7XG59XG5cblt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwIDIwcHggMTBweCAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGlucHV0IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbnRoLFxudGQge1xuICB3aWR0aDogMTglO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB1bnNldDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmZpcnN0LWNvbCB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5idG4tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NTQ4NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY2NmEzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHtcbiAgLnRpdGxlLXJhZGlvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAudGl0bGUtYmxvY2sgc2VsZWN0IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAudGl0bGUtYmxvY2sgaW5wdXQge1xuICAgIHdpZHRoOiAzMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIHRoLFxudGQge1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICB9XG59XG4uc2VydmljZSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1yaWdodDogMC4zMTI1cmVtO1xuICBtYXJnaW4tbGVmdDogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG59XG5cbi5waWNrZXItb3B0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSkgIWltcG9ydGFudDtcbn1cblxuLmRhdGV0aW1lLXRleHQge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/firebase/quotes/create/create.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/firebase/quotes/create/create.page.ts ***!
  \*******************************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _invoice_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../invoice.model */ "./src/app/firebase/invoice.model.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm2015/ngx-papaparse.js");











let CreatePage = class CreatePage {
    /////////////////////////
    constructor(formBuilder, authService, navCtrl, firebaseService, http, papa) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.http = http;
        this.papa = papa;
        this.estimateData = new _invoice_model__WEBPACK_IMPORTED_MODULE_6__["EstimateModel"]();
        this.itemSelected = new _invoice_model__WEBPACK_IMPORTED_MODULE_6__["ItemModel"]();
        this.arr = [];
        this.showItem = false;
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    ngOnInit() {
        this.readItems();
        this.buildForm();
    }
    ionViewWillEnter() {
        this.getCsvData();
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
    submitForm(value) {
        console.log(value);
    }
    createEstimate() {
        //  console.log(this.uid, this.email, this.createEstimateForm.);
        console.log(this.totalPrice);
        this.reimburshForm.value['Total'] = this.totalPrice;
        console.log(this.reimburshForm.value);
        this.firebaseService.createEstimates(this.uid, this.email, this.reimburshForm.value).then(() => {
            this.dismissModal();
        });
    }
    dismissModal() {
        this.navCtrl.navigateBack('/firebase/quotes');
    }
    // testTablePDF() {
    //   var columns = [
    //     { title: "ID", dataKey: "id" },
    //     { title: "Name", dataKey: "name" },
    //     { title: "Country", dataKey: "country" },
    //   ];
    //   var rows = [
    //     { "id": 1, "name": "Shaw", "country": "Tanzania" },
    //     { "id": 2, "name": "Nelson", "country": "Kazakhstan" },
    //     { "id": 3, "name": "Garcia", "country": "Madagascar" },
    //   ];
    //   var doc = new jsPDF('p', 'pt');
    //   doc.autoTable(columns, rows, {
    //     // theme: 'striped' | 'grid' | 'plain' | 'css' = 'striped'
    //     theme: 'striped',
    //     styles: { fillColor: [129, 216, 208] },
    //     columnStyles: {
    //       id: { fillColor: 255 }
    //     },
    //     margin: { top: 160 },
    //     beforePageContent: function (data) {
    //       doc.text("Header", 40, 30);
    //     }
    //   });
    //   doc.save('table.pdf');
    // }
    ////////////////////////////////
    buildForm() {
        this.reimburshForm = this.formBuilder.group({
            "Estimate Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date().toISOString()),
            "Estimate ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Date.now()),
            "Estimate Number": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](`SQ-${Date.now()}`),
            "Estimate Status": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('draft'),
            "Customer ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Date.now()),
            "Expiry Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "PurchaseOrder": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Currency Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Exchange Rate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Discount Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Is Discount Before Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Entity Discount Percent": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Is Inclusive Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "SubTotal": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Total": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.totalPrice),
            "Adjustment": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Notes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Terms": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Terms & Conditions": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Customer Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Project Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            // orderNumber: this.formBuilder.control(null),
            // same as estimate number
            "Project ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](`SQ-${Date.now()}`),
            // salesPerson: this.formBuilder.control(null),
            "Sales person": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Billing Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Billing City": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Billing State": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Billing Country": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Billing Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Billing Fax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Template Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Adjustment Description": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Shipping Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Shipping City": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Shipping State": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Shipping Country": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Shipping Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Shipping Fax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Source": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Reference ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Last Sync Time": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Shipping Charge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Shipping Charge Tax ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Shipping Charge Tax Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Shipping Charge Tax Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Shipping Charge Tax %": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Shipping Charge Tax Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Item Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Item Desc": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Quantity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Discount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Discount Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Item Tax Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Item Total": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Account": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "SKU": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Usage unit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Item Price": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Tax ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Item Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Item Tax %": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Item Tax Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            // this one would be the first item in the group array
            salesList: this.formBuilder.array([
                this.formBuilder.group({
                    //   itemName: this.formBuilder.control(null),
                    //   itemDetail: this.formBuilder.control(null),
                    quantity: this.formBuilder.control(null),
                    Rate: this.formBuilder.control(null),
                    // tax: this.formBuilder.control(null),
                    amount: this.formBuilder.control(null),
                    "Description": this.formBuilder.control(null),
                    // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
                    "Item Name": this.formBuilder.control(null),
                }),
            ]),
        });
        this.salesListArray = this.reimburshForm.get('salesList');
    }
    returnProduct(a, b) {
        return a * b;
    }
    // returnSum(a: number, b: number) {
    //   return a + b
    // }
    jsonstringify(value) {
        return JSON.stringify(value);
    }
    // call items list data
    readItems() {
        console.log(this.email, this.uid);
        this.firebaseService.readItems(this.uid, this.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(changes => changes.map(c => (Object.assign({ id: c.payload.doc.id }, c.payload.doc.data()))))).subscribe(data => {
            this.customeditemsList = data;
            console.log(this.customeditemsList, this.customeditemsList.length);
        });
    }
    // call contact list data
    readContacts() {
        console.log(this.email, this.uid);
        this.firebaseService.readContactsinCSV(this.uid, this.email).subscribe((res) => {
            console.log(res);
        });
        // this.firebaseService.readContacts(this.uid, this.email).snapshotChanges().pipe(
        //   map(changes =>
        //     changes.map(c =>
        //       ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        //     )
        //   )
        // ).subscribe(data => {
        //   this.customeditemsList = data;
        //   console.log(this.customeditemsList);
        // });
    }
    removeSalesListItem(index) {
        let salesListArray = this.salesListArray.value;
        salesListArray.splice(index, 1);
        // console.log(index);
        console.log(this.salesListArray.value);
    }
    //
    onPush(value) {
        console.log(this.totalPrice);
        console.log(value);
        this.value = value;
        console.log(this.salesListArray.value, value);
        this.addSalesListItem();
    }
    addSalesListItem() {
        console.log(this.value, this.salesListArray.value);
        let formGroup = this.formBuilder.group({
            //   itemName: this.formBuilder.control(null),
            //   itemDetail: this.formBuilder.control(null),
            quantity: this.formBuilder.control(this.value['quantity']),
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
    onQtyChange(e, f) {
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
        console.log(this.returnSum());
        this.totalPrice = this.returnSum();
    }
    onPriceChange(e, f) {
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
        console.log(this.returnSum());
        this.totalPrice = this.returnSum();
    }
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
    // handleInputChange() {
    //   this.totalPrice = this.returnSum();
    //   console.log(this.totalPrice);
    // }
    onCreateInventoryItemPage() {
    }
};
CreatePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_10__["Papa"] }
];
CreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: __webpack_require__(/*! raw-loader!./create.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/quotes/create/create.page.html"),
        styles: [__webpack_require__(/*! ./create.page.scss */ "./src/app/firebase/quotes/create/create.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
        ngx_papaparse__WEBPACK_IMPORTED_MODULE_10__["Papa"]])
], CreatePage);

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
//# sourceMappingURL=firebase-quotes-create-create-module-es2015.js.map