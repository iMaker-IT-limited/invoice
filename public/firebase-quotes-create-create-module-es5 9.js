(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-quotes-create-create-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/quotes/create/create.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/quotes/create/create.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n    <ion-item-divider>\n        <img class=\"avator\" src=\"./../../../../assets/images/home_categories/estimate.svg\" alt=\"\" />\n        <ion-title>New Estimate</ion-title>\n        <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n\n    </ion-item-divider>\n\n    <!-- if contacts list does not show data -->\n    <!-- <app-rating-input *ngIf=\"!contacts\"></app-rating-input> -->\n\n\n    <div class=\"testbox\">\n        <form [formGroup]=\"reimburshForm\" (ngSubmit)=\"createEstimate()\" class=\"form-validate form-horizontal\"\n            novalidate=\"\">\n            <!-- START panel-->\n            <div class=\"panel-body\">\n                <legend>New Estimates</legend>\n                <fieldset>\n                    <!-- <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Customer Name:</label>\n                        <div class=\"col-sm-6\">\n                            <input class=\"form-control\" type=\"text\" formControlName=\"Customer Name\"\n                                placeholder=\"Enter Customer name\" />\n                        </div>\n                    </div> -->\n\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Customer Name:</label>\n                        <div class=\"col-sm-6\">\n                            <ion-skeleton-text *ngIf=\"!contacts\" animated style=\"width: 100%; height: 25px;\">\n                            </ion-skeleton-text>\n\n                            <select *ngIf=\"contacts\" class=\"form-control\" formControlName=\"Customer Name\">\n                                <option *ngFor=\"let i of contacts\" value=\"{{i['Customer Name']}}\">{{i['Customer Name']}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Invoice number -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Estimate Number:</label>\n                        <div class=\"col-sm-6\">\n                            <input class=\"form-control\" type=\"text\" formControlName=\"Estimate Number\"\n                                placeholder=\"Estimate Number\" />\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Order number -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Order Number(Project ID):</label>\n                        <div class=\"col-sm-6\">\n                            <input class=\"form-control\" type=\"text\" formControlName=\"Project ID\"\n                                placeholder=\"Order Number\" />\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Invoice Date -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Estimate Date: </label>\n                        <div class=\"col-sm-6\">\n                            <ion-datetime (ionChange)=\"onEstimateDate($event)\" class=\"datetime-text\" mode=\"ios\"\n                                value=\"es_d\" formControlName=\"Estimate Date\">\n                            </ion-datetime>\n                            <!-- <input type=\"date\" formControlName=\"Estimate Date\" value=\"2018-07-22\" /> -->\n                        </div>\n\n                    </div>\n                </fieldset>\n                <!-- Termis -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Terms:</label>\n                        <div class=\"col-sm-6\">\n                            <input (ngModelChange)=\"onEstimateTerms($event)\" type=\"number\" formControlName=\"Terms\">\n                            <!-- <select class=\"form-control\" formControlName=\"Terms\">\n                                <option value=\"Net 30\">Net 30</option>\n                                <option value=\"Net 45\">Net 45</option>\n                                <option value=\"Net 60\">Net 60</option>\n                            </select> -->\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Due Date -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Due Date/ Expiry Date: </label>\n                        <div class=\"col-sm-6\">\n                            <!-- <input class=\"form-control\" type=\"date\" formControlName=\"Expiry Date\"\n                                placeholder=\"Due Date\" /> -->\n\n                            <ion-datetime class=\"datetime-text\" mode=\"ios\" value=\"{{e_d}}\"\n                                formControlName=\"Expiry Date\">\n                            </ion-datetime>\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Sales Person -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Salesperson:</label>\n                        <div class=\"col-sm-6\">\n                            <input type=\"text\" formControlName=\"Sales person\">\n                            <!-- <select class=\"form-control\" formControlName=\"Sales person\">\n                                <option value=\"Aaron\">Aaron</option>\n                                <option value=\"Baron\">Baron</option>\n                                <option value=\"Candy\">Candy</option>\n                                <option value=\"Derek\">Derek</option>\n                            </select> -->\n                        </div>\n                    </div>\n                </fieldset>\n                <!--Item List -->\n\n                <fieldset>\n                    <!-- <ion-button class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\"\n                        (click)=\"onPush(iList)\">\n                        {{iList['Item Name']}} {{iList['Rate']}}\n                    </ion-button> -->\n\n                    <ion-chip color=\"secondary\" *ngIf=\"customeditemsList?.length === 0\"\n                        (click)=\"onCreateInventoryItemPage()\">No Items Yet Go and\n                        Add One Now!\n                    </ion-chip>\n\n                    <ion-chip class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\"\n                        (click)=\"onPush(iList)\">\n                        {{iList['Item Name']}} {{iList['Rate']}}\n                    </ion-chip>\n                </fieldset>\n\n                <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"inputEnabled = !inputEnabled\">\n                    <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>\n                    Add another line\n                </ion-button> -->\n\n                <!-- Sales List -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <table formArrayName=\"salesList\">\n                            <tr>\n                                <th>Item Name</th>\n                                <th>Item Detail</th>\n                                <th>Quantity</th>\n                                <th>Rate</th>\n                                <!-- <th>Tax</th> -->\n                                <th>Amount</th>\n                                <th></th>\n                            </tr>\n\n                            <!--Input controls/ NOT TO EDIT ITEM IN THIS PAGE -->\n\n\n                            <tr *ngFor=\"let saleList of salesListArray.controls;let i = index\" [formGroupName]=\"i\">\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"Item Name\"\n                                            formControlName=\"Item Name\" />\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <ion-textarea class=\"form-control\" row=\"6\" height=\"1\" placeholder=\"Item Detail\"\n                                            formControlName=\"Description\"></ion-textarea>\n                                        <!-- <input class=\"form-control\" type=\"text\" placeholder=\"Item Detail\"\n                                            formControlName=\"Description\" /> -->\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\" placeholder=\"0\"\n                                            (input)=\"onQtyChange($event, saleList)\" formControlName=\"quantity\" />\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\" placeholder=\"0.00\"\n                                            (input)=\"onPriceChange($event, saleList)\" formControlName=\"Rate\" />\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\"\n                                            placeholder=\"{{returnProduct(saleList.value.Rate, saleList.value.quantity)}}\"\n                                            formControlName=\"amount\" />\n                                    </div>\n                                </td>\n\n                                <!-- <td>\n                                    <div class=\"col-sm-6\">\n                                        <span style=\"color: black; font-weight: bold;\">\n                                            {{returnProduct(saleList.value.Rate, saleList.value.quantity)}}</span>\n                                    </div>\n                                </td> -->\n\n                                <td *ngIf=\"i > 0\">\n                                    <!-- <ion-button color=\"theme\" fill=\"\" (click)=\"addSalesListItem()\">\n                                        <ion-icon name=\"copy-outline\"></ion-icon>\n                                    </ion-button> -->\n                                    <ion-button color=\"secondary\" fill=\"clear\" (click)=\"removeSalesListItem(i)\">\n                                        <ion-icon name=\"trash-outline\"></ion-icon>\n                                    </ion-button>\n                                </td>\n                            </tr>\n\n                        </table>\n                    </div>\n\n                    <div style=\"padding-top: 20px;float: right;\">\n                        <ion-chip>Total: {{totalPrice || 0}}</ion-chip>\n                    </div>\n                </fieldset>\n\n                <!-- Notes -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Customer Notes:</label>\n                        <div class=\"col-sm-6\">\n                            <ion-textarea rows=\"2\" class=\"form-control\" formControlName=\"Notes\"\n                                value=\"{{customernotes}}\" placeholder=\"Will be displayed on the estimate\">\n                            </ion-textarea>\n\n                            <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Notes\"\n                                placeholder=\"Will be displayed on the estimate\" /> -->\n                        </div>\n                    </div>\n                </fieldset>\n                <!-- Terms and conditions -->\n\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Terms & Conditions:</label>\n                        <div class=\"col-sm-6\">\n                            <ion-textarea rows=\"6\" class=\"form-control\" formControlName=\"Terms & Conditions\"\n                                value=\"{{termsandconditions}}\" placeholder=\"Enter the terms and conditions of your business\n                              that will displayed in your transaction\">\n                            </ion-textarea>\n                            <!-- <input class=\"form-control\" type=\"text\"\n                                formControlName=\"Terms & Conditions\"\n                                placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\" /> -->\n                        </div>\n                    </div>\n                </fieldset>\n\n            </div>\n            <!-- \n            {{reimburshForm.value['Customer Name']}} -->\n            <!-- <ion-button (click)=\"returnSum()\">Calculate sum</ion-button> -->\n            <ion-button [disabled]=\"!reimburshForm.value['Customer Name']\" type=\"submit\" color=\"theme\">Save</ion-button>\n            <!-- <br />\n            <ion-button color=\"dark\" (click)=\"submitForm(reimburshForm.value)\">Save and Send</ion-button> -->\n        </form>\n    </div>\n</ion-content>\n<!-- <form [formGroup]=\"createEstimateForm\" (ngSubmit)=\"createEstimate()\">\n   <h4>Customer Name<span>*</span></h4>\n   <select formControlName=\"Customer Name\">\n      <option value=\"Type\" selected>Select or Type to add</option>\n      <option value=\"Banma\">Banma</option>\n      <option value=\"Kokui\">Kokui</option>\n      <option value=\"Aaron\">Aaron</option>\n      <option value=\"Claire\">Claire</option>\n      <option value=\"Elaine\">Elaine</option>\n      <option value=\"Fred\">Fred</option>\n   </select>\n   <h4>Estimate# <span>*</span></h4>\n   <div class=\"title-block\">\n      <input type=\"text\" name=\"estimate\" formControlName=\"Estimate Number\" />\n   </div>\n   <h4>Reference#</h4>\n   <div class=\"title-block\">\n      <input type=\"text\" name=\"reference\" formControlName=\"Reference ID\" />\n   </div>\n   <h4>Estimate Date<span>*</span></h4>\n   <div class=\"title-block\">\n      <input type=\"date\" name=\"estimate_date\" formControlName=\"Estimate Date\" />\n   </div>\n   <h4>Expiry Date<span>*</span></h4>\n   <div class=\"title-block\">\n      <input type=\"date\" name=\"expiry_date\" formControlName=\"Expiry Date\" />\n   </div>\n   <h4>Salesperson<span>*</span></h4>\n   <div class=\"title-block\">\n      <select formControlName=\"Sales person\">\n         <option value=\"Type\" selected>Select or Type to add</option>\n         <option value=\"Phyllis\">Phyllis</option>\n         <option value=\"Staffen\">Staffen</option>\n         <option value=\"Phoebe\">Phoebe</option>\n         <option value=\"Richard\">Richard</option>\n         <option value=\"Dan\">Dan</option>\n         <option value=\"Jack\">Jack</option>\n         <option value=\"Koi\">Koi</option>\n      </select>\n   </div>\n   <h4>Subject / Project Name</h4>\n   <div class=\"title-block\">\n      <textarea rows=\"1\" placeholder=\"Let your customer know what this Estimate is for\" formControlName=\"Project Name\"></textarea>\n   </div>\n   \n   <h4>Notes</h4>\n   <div class=\"title-block\">\n      <textarea rows=\"1\" placeholder=\"Will be displayed on the estimate\" formControlName=\"Notes\"></textarea>\n   </div>\n   <h4>Terms & Conditions</h4>\n   <div class=\"title-block\">\n      <textarea rows=\"4\" placeholder=\"Will be displayed on the estimate\" formControlName=\"Terms & Conditions\"></textarea>\n   </div>\n   <div class=\"btn-block\">\n      <button type=\"submit\">Save</button>\n   </div>\n   </form> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "./src/app/firebase/quotes/create/create.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]
    }
];
var CreatePageModule = /** @class */ (function () {
    function CreatePageModule() {
    }
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
    return CreatePageModule;
}());



/***/ }),

/***/ "./src/app/firebase/quotes/create/create.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/firebase/quotes/create/create.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\ndiv,\nform,\ninput,\nselect {\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 12px;\n  color: #666;\n  line-height: 22px;\n}\n\nh1,\nh4 {\n  margin: 15px 0 4px;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 13px;\n  margin: 20px 0 4px;\n  font-weight: 400;\n}\n\nspan {\n  color: red;\n}\n\n.small {\n  font-size: 10px;\n  line-height: 18px;\n}\n\n.testbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 2px 5px #ccc;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 30%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 31%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.picker-opt {\n  color: var(--ion-color-theme) !important;\n}\n\n.datetime-text {\n  padding: 5px !important;\n  border: 1px solid #ccc !important;\n  border-radius: 3px !important;\n  vertical-align: middle !important;\n}\n\ntextarea {\n  width: 200px !important;\n  height: 36px !important;\n}\n\nion-chip:hover {\n  box-shadow: 1px 1px 17px 2px var(--ion-color-theme-tint);\n  color: lightskyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9xdW90ZXMvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL3F1b3Rlcy9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTs7RUFFQyxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNDRDs7QURFQTtFQUNDLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NEOztBREVBOzs7RUFHQyxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVBOztFQUVDLG1CQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsV0FBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTs7RUFFQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0Msb0JBQUE7QUNDRDs7QURFQTs7O0VBR0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0NEOztBREVBOztFQUVDLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBOztFQUVDLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0Q7O0FERUE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLHVCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7RUFDQyx5QkFBQTtBQ0NEOztBREVBO0VBQ0M7SUFDQyxvQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUNDQTs7RURFRDtJQUNDLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsOEJBQUE7RUNDQTs7RURDRDtJQUNDLFVBQUE7SUFDQSxnQkFBQTtFQ0VBOztFREFEO0lBQ0MsVUFBQTtJQUNBLGdCQUFBO0VDR0E7O0VEREQ7O0lBRUMsb0JBQUE7RUNJQTtBQUNGOztBRERBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDR0Q7O0FEQUE7RUFDQyx3Q0FBQTtBQ0dEOztBREFBO0VBQ0ksdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7QUNHSjs7QUR5QkE7RUFDQyx1QkFBQTtFQUNBLHVCQUFBO0FDdEJEOztBRHlCQTtFQUNFLHdEQUFBO0VBQ0EsbUJBQUE7QUN0QkYiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9xdW90ZXMvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LFxuZGl2LFxuZm9ybSxcbmlucHV0LFxuc2VsZWN0IHtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHRvdXRsaW5lOiBub25lO1xuXHRmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRjb2xvcjogIzY2Njtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbmgxLFxuaDQge1xuXHRtYXJnaW46IDE1cHggMCA0cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg0IHtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRtYXJnaW46IDIwcHggMCA0cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbnNwYW4ge1xuXHRjb2xvcjogcmVkO1xufVxuXG4uc21hbGwge1xuXHRmb250LXNpemU6IDEwcHg7XG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4udGVzdGJveCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IGluaGVyaXQ7XG5cdHBhZGRpbmc6IDBweDtcbn1cblxuZm9ybSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRib3gtc2hhZG93OiAwIDJweCA1cHggI2NjYztcbn1cblxuaW5wdXQge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG5cdHBhZGRpbmc6IDVweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dDpob3ZlcixcbnRleHRhcmVhOmhvdmVyLFxuc2VsZWN0OmhvdmVyIHtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgIzA5NTQ4NDtcblx0YmFja2dyb3VuZDogI2U2ZWVmNztcbn1cblxuLnRpdGxlLWJsb2NrIHNlbGVjdCxcbi50aXRsZS1ibG9jayBpbnB1dCB7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnNlbGVjdCB7XG5cdHBhZGRpbmc6IDdweCAwO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5zZWxlY3QsXG50YWJsZSB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG5vcHRpb24ge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGF5LXZpc2l0ZWQsXG4udGltZS12aXNpdGVkIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9XCJ0aW1lXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcblx0bWFyZ2luOiAycHggMjJweCAwIDA7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpLFxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA4cHg7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGkge1xuXHRyaWdodDogNXB4O1xuXHR6LWluZGV4OiAxO1xuXHRjb2xvcjogI2E5YTlhOTtcbn1cblxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuXHRyaWdodDogMDtcblx0ei1pbmRleDogMjtcblx0b3BhY2l0eTogMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBsYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiAwIDIwcHggMTBweCAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGlucHV0IHtcblx0d2lkdGg6IGF1dG87XG5cdG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbnRoLFxudGQge1xuXHR3aWR0aDogMTglO1xuXHRwYWRkaW5nOiAxNXB4IDA7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHZlcnRpY2FsLWFsaWduOiB1bnNldDtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmZpcnN0LWNvbCB7XG5cdHdpZHRoOiAyNSU7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRleHRhcmVhIHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5idG4tYmxvY2sge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG5cdHdpZHRoOiAxNTBweDtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyOiBub25lO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA5NTQ4NDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogI2ZmZjtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDY2NmEzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHtcblx0LnRpdGxlLXJhZGlvIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRwYWRkaW5nLXRvcDogMTVweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcblx0fVxuXHQudGl0bGUtdXBsb2FkZXIge31cblx0LnRpdGxlLWJsb2NrIHtcblx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXHQudGl0bGUtYmxvY2sgc2VsZWN0IHtcblx0XHR3aWR0aDogMzAlO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0LnRpdGxlLWJsb2NrIGlucHV0IHtcblx0XHR3aWR0aDogMzElO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0dGgsXG5cdHRkIHtcblx0XHR3b3JkLWJyZWFrOiBrZWVwLWFsbDtcblx0fVxufVxuXG4uc2VydmljZSB7XG5cdHBvc2l0aW9uOiBzdGF0aWM7XG5cdG1hcmdpbi10b3A6IDA7XG5cdG1hcmdpbi1yaWdodDogLjMxMjVyZW07XG5cdG1hcmdpbi1sZWZ0OiAwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG5cdG1hcmdpbi1yaWdodDogLjc1cmVtO1xufVxuXG4ucGlja2VyLW9wdCB7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpICFpbXBvcnRhbnQ7XHRcbn1cblxuLmRhdGV0aW1lLXRleHQge1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7IFxufVxuLy8gLmJhZGdlIHtcbi8vIFx0cGFkZGluZzogMTBweDtcbi8vIH1cblxuLy8gLmlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4vLyAgICAgYm9yZGVyOiBub25lO1xuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgICAgb3V0bGluZTogMDtcbi8vICAgICBwYWRkaW5nOiAuNzVyZW07XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbi8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICBib3R0b206IDA7XG4vLyAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICBoZWlnaHQ6IGF1dG87XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIHdpZHRoOiBhdXRvO1xuLy8gfVxuXG50ZXh0YXJlYSB7XG5cdHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuXHRoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNoaXA6aG92ZXIge1xuXHQgYm94LXNoYWRvdzogMXB4IDFweCAxN3B4IDJweCB2YXIoLS1pb24tY29sb3ItdGhlbWUtdGludCk7XG5cdCBjb2xvcjogbGlnaHRza3libHVlO1xufSIsImJvZHksXG5kaXYsXG5mb3JtLFxuaW5wdXQsXG5zZWxlY3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuaDEsXG5oNCB7XG4gIG1hcmdpbjogMTVweCAwIDRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMjBweCAwIDRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi50ZXN0Ym94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAjY2NjO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6aG92ZXIsXG5zZWxlY3Q6aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDk1NDg0O1xuICBiYWNrZ3JvdW5kOiAjZTZlZWY3O1xufVxuXG4udGl0bGUtYmxvY2sgc2VsZWN0LFxuLnRpdGxlLWJsb2NrIGlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuc2VsZWN0IHtcbiAgcGFkZGluZzogN3B4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbnNlbGVjdCxcbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm9wdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kYXktdmlzaXRlZCxcbi50aW1lLXZpc2l0ZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPXRpbWVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgbWFyZ2luOiAycHggMjJweCAwIDA7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpLFxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSB7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjYTlhOWE5O1xufVxuXG5bdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAyMHB4IDEwcHggMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBpbnB1dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG50aCxcbnRkIHtcbiAgd2lkdGg6IDE4JTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdW5zZXQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5maXJzdC1jb2wge1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xufVxuXG4uYnRuLWJsb2NrIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTU0ODQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NjZhMztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSB7XG4gIC50aXRsZS1yYWRpbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIH1cblxuICAudGl0bGUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnRpdGxlLWJsb2NrIHNlbGVjdCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLnRpdGxlLWJsb2NrIGlucHV0IHtcbiAgICB3aWR0aDogMzElO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICB0aCxcbnRkIHtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgfVxufVxuLnNlcnZpY2Uge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuMzEyNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xufVxuXG4ucGlja2VyLW9wdCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jaGlwOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxN3B4IDJweCB2YXIoLS1pb24tY29sb3ItdGhlbWUtdGludCk7XG4gIGNvbG9yOiBsaWdodHNreWJsdWU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _invoice_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../invoice.model */ "./src/app/firebase/invoice.model.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");











var CreatePage = /** @class */ (function () {
    /////////////////////////
    function CreatePage(formBuilder, authService, navCtrl, firebaseService, http, papa) {
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
    CreatePage.prototype.ngOnInit = function () {
        this.readItems();
        this.buildForm();
        this.es_d = new Date().toISOString();
    };
    CreatePage.prototype.ionViewWillEnter = function () {
        this.getCsvData();
        this.getTermsandConditions();
        this.getCustomerNotes();
    };
    CreatePage.prototype.getCustomerNotes = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.readCustomerNote(this.uid).subscribe(function (res) {
            console.log(res['userData']);
            _this.customernotes = res['userData']['customernotes'];
        });
    };
    CreatePage.prototype.getTermsandConditions = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.readTermsandConditions(this.uid).subscribe(function (res) {
            console.log(res['userData']);
            _this.termsandconditions = res['userData']['termsandconditions'];
        });
    };
    // get preset customer list 
    CreatePage.prototype.getCsvData = function () {
        var _this = this;
        this.firebaseService.readContactsinCSV(this.uid, this.email).subscribe(function (res) {
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
        });
    };
    CreatePage.prototype.loadCSV = function () {
        var _this = this;
        console.log('load CSV');
        this.http.get(this.downloadURL, {
            responseType: 'text'
        }).subscribe(function (data) { return _this.extractData(data); }, function (err) { return console.log('error', err); });
    };
    CreatePage.prototype.extractData = function (res) {
        var _this = this;
        var csvData = res || '';
        this.papa.parse(csvData, {
            complete: function (parsedData) {
                _this.csvData = parsedData.data;
                console.log(parsedData);
                //  console.log(parsedData.data.splice(0, 1)[0]);
                _this.headerRow = parsedData.data.splice(0, 1)[0];
                console.log(_this.headerRow);
            }
        });
        console.log(res, this.csvData);
    };
    CreatePage.prototype.exportCSV = function () {
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
    CreatePage.prototype.convertCSVtoJSON = function () {
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
        console.log(this.csv, csv.data);
        this.contacts = csv.data;
    };
    // end of get preset customer list
    CreatePage.prototype.submitForm = function (value) {
        console.log(value);
    };
    CreatePage.prototype.createEstimate = function () {
        var _this = this;
        //  console.log(this.uid, this.email, this.createEstimateForm.);
        console.log(this.totalPrice);
        this.reimburshForm.value['Total'] = this.totalPrice;
        console.log(this.reimburshForm.value);
        this.firebaseService.createEstimates(this.uid, this.email, this.reimburshForm.value).then(function () {
            _this.dismissModal();
        });
    };
    CreatePage.prototype.dismissModal = function () {
        this.navCtrl.navigateBack('/firebase/quotes');
    };
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
    CreatePage.prototype.onEstimateDate = function (event) {
        console.log(event.detail.value);
        this.estimate_date = event.detail.value;
    };
    CreatePage.prototype.onEstimateTerms = function (event) {
        console.log(50, event, this.reimburshForm.value);
        var d = new Date();
        d.setDate(d.getDate() + 50);
        var date = new Date(this.estimate_date);
        var expiry_date = date.setDate(date.getDate() + Number(event));
        console.log(expiry_date);
        var e_d = new Date(expiry_date);
        console.log(e_d);
        this.e_d = e_d;
    };
    ////////////////////////////////
    CreatePage.prototype.buildForm = function () {
        console.log(this.e_d, this.customernotes, this.termsandconditions);
        this.reimburshForm = this.formBuilder.group({
            "Estimate Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.es_d),
            "Estimate ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Date.now()),
            "Estimate Number": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("SQ-" + Date.now()),
            "Estimate Status": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('draft'),
            "Customer ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Date.now()),
            "Expiry Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.e_d),
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
            "Notes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.customernotes),
            // d.setDate(d.getDate() + 50);
            "Terms": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Terms & Conditions": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.termsandconditions),
            "Customer Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Project Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            // orderNumber: this.formBuilder.control(null),
            // same as estimate number
            "Project ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("SQ-" + Date.now()),
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
    };
    CreatePage.prototype.returnProduct = function (a, b) {
        return a * b;
    };
    // returnSum(a: number, b: number) {
    //   return a + b
    // }
    CreatePage.prototype.jsonstringify = function (value) {
        return JSON.stringify(value);
    };
    // call items list data
    CreatePage.prototype.readItems = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.readItems(this.uid, this.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (changes) {
            return changes.map(function (c) {
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: c.payload.doc.id }, c.payload.doc.data()));
            });
        })).subscribe(function (data) {
            _this.customeditemsList = data;
            console.log(_this.customeditemsList, _this.customeditemsList.length);
        });
    };
    // call contact list data
    CreatePage.prototype.readContacts = function () {
        console.log(this.email, this.uid);
        this.firebaseService.readContactsinCSV(this.uid, this.email).subscribe(function (res) {
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
    };
    // update items in estimate
    CreatePage.prototype.onPush = function (value) {
        // const qty = (e.target as HTMLInputElement).value;
        // const price = f.get('Rate').value;
        // const product = Number(qty) * price;
        // console.log(f, product);
        // f.get('amount').setValue(Number(qty) * price);
        // console.log(this.returnSum());
        // this.totalPrice = this.returnSum();
        console.log(this.totalPrice);
        console.log(value);
        this.value = value;
        console.log(this.salesListArray.value, value);
        this.addSalesListItem();
    };
    CreatePage.prototype.addSalesListItem = function () {
        console.log(this.value, this.salesListArray.value);
        var formGroup = this.formBuilder.group({
            quantity: this.formBuilder.control(this.value['quantity']),
            Rate: this.formBuilder.control(this.value['Rate']),
            amount: this.formBuilder.control(this.value['amount']),
            "Description": this.formBuilder.control(this.value['Description']),
            "Item Name": this.formBuilder.control(this.value['Item Name']),
        });
        this.salesListArray.push(formGroup);
        this.salesListArray = this.reimburshForm.get('salesList');
        console.log(this.salesListArray.value);
    };
    // addItem(item) {
    //   this.arrayItems.push(item);
    //   this.demoArray.push(this._formBuilder.control(false));
    // }
    CreatePage.prototype.removeSalesListItem = function (index) {
        console.log(index);
        //    this.salesListArray.removeAt(this.salesListArray.length - 1);
        this.salesListArray.removeAt(index);
        this.salesListArray = this.reimburshForm.get('salesList');
        console.log(this.salesListArray.value);
        this.totalPrice = this.returnSum();
        console.log(this.totalPrice);
    };
    //   removeSalesListItem(index) {
    //     // let salesListArray = this.salesListArray.value;
    //     //  salesListArray.splice(index, 1);
    // //    this.item.splice(index, 1);
    //     //    this.item = this.salesListArray.value.splice(index, 1);
    //   //  console.log(this.item);
    //   }
    CreatePage.prototype.onQtyChange = function (e, f) {
        // const qty = (e.target as HTMLInputElement).value;
        // console.log(qty, Rate);
        // const product = Number(qty) * Rate
        // console.log(product);
        // f.get('amount').setValue(qty * price);
        var qty = e.target.value;
        var price = f.get('Rate').value;
        var product = Number(qty) * price;
        console.log(f, product);
        f.get('amount').setValue(Number(qty) * price);
        console.log(this.returnSum());
        this.totalPrice = this.returnSum();
    };
    CreatePage.prototype.onPriceChange = function (e, f) {
        // const price = (e.target as HTMLInputElement).value;
        // console.log(quantity, price);
        // const product = Number(price) * quantity;
        // console.log(product);
        //  f.get('amount').setValue(qty * price);
        var qty = f.get('quantity').value;
        var price = e.target.value;
        var product = qty * Number(price);
        console.log(f, product);
        f.get('amount').setValue(qty * Number(price));
        console.log(this.returnSum());
        this.totalPrice = this.returnSum();
    };
    CreatePage.prototype.returnSum = function () {
        var totalPrice = 0;
        //   console.log(this.reimburshForm.value.salesList);
        this.reimburshForm.value.salesList.forEach(function (element) {
            if (element.amount) {
                //   console.log(element.amount);
                totalPrice += element.amount;
            }
        });
        console.log(totalPrice);
        return totalPrice;
    };
    // handleInputChange() {
    //   this.totalPrice = this.returnSum();
    //   console.log(this.totalPrice);
    // }
    CreatePage.prototype.onCreateInventoryItemPage = function () {
        this.navCtrl.navigateForward('/firebase/create%23inventory');
    };
    CreatePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
        { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_10__["Papa"] }
    ]; };
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
    return CreatePage;
}());

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
//# sourceMappingURL=firebase-quotes-create-create-module-es5.js.map