(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-invoices-create-create-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/invoices/create/create.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/invoices/create/create.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-header></app-header>\n <ion-content>\n   <ion-item-divider sticky>\n     <!-- <ion-thumbnail class=\"\" slot=\"start\"> -->\n     <img class=\"avator\" src=\"./../../../../assets/images/home_categories/invoice.svg\" alt=\"\">\n     <!-- </ion-thumbnail> -->\n     <ion-title>New Invoice</ion-title>\n     <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n       <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n     </ion-button>\n   </ion-item-divider>\n   <!-- <ion-progress-bar color=\"theme\" type=\"indeterminate\"></ion-progress-bar> -->\n\n   <app-rating-input *ngIf=\"!estimateInfo\"></app-rating-input>\n\n   <!-- {{estimateInfo.id}} -->\n   <!-- <app-rating-input *ngIf=\"!contacts\"></app-rating-input> -->\n\n   <div class=\"testbox\">\n     <form [formGroup]=\"reimburshForm\" (ngSubmit)=\"createInvoice()\" class=\"form-validate form-horizontal\" novalidate=\"\">\n       <!-- START panel-->\n       <div class=\"panel-body\">\n         <legend>New Invoices</legend>\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Customer Name:</label>\n             <div class=\"col-sm-6\">\n               <ion-skeleton-text *ngIf=\"!contacts\" animated style=\"width: 100%; height: 25px;\">\n               </ion-skeleton-text>\n\n               <select *ngIf=\"contacts\" class=\"form-control\" formControlName=\"Customer Name\">\n                 <option *ngFor=\"let i of contacts\" value=\"{{i['Customer Name']}}\">{{i['Customer Name']}}\n                 </option>\n               </select>\n               <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Customer Name\"\n                 placeholder=\"Enter Customer name\" /> -->\n             </div>\n           </div>\n         </fieldset>\n         <!-- Invoice number -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Estimate Number: -> Invoice Number</label>\n             <div class=\"col-sm-6\">\n               <input class=\"form-control\" type=\"text\" formControlName=\"Invoice Number\" placeholder=\"Invoice Number\" />\n             </div>\n           </div>\n         </fieldset>\n         <!-- Order number if invoice is converted from estimate, then the order number is the estimate number; else if invoice is created from scratch, the order number is null-->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\">Order Number:</label>\n             <div class=\"col-sm-6\">\n               <input class=\"form-control\" type=\"text\" formControlName=\"Project ID\" placeholder=\"Order Number\" />\n             </div>\n           </div>\n         </fieldset>\n         <!-- Invoice Date -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Estimate Date:</label>\n             <div class=\"col-sm-6\">\n               <!-- <input class=\"form-control\" type=\"date\" formControlName=\"Estimate Date\" placeholder=\"Estimates Date\" /> -->\n               <ion-datetime (ionChange)=\"onEstimateDate($event)\" class=\"datetime-text\" mode=\"ios\" value=\"es_d\"\n                 formControlName=\"Estimate Date\">\n               </ion-datetime>\n             </div>\n           </div>\n         </fieldset>\n         <!-- Termis -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\">Terms:</label>\n             <div class=\"col-sm-6\">\n               <!-- <select class=\"form-control\" formControlName=\"Terms\">\n                 <option value=\"Net 30\">Net 30</option>\n                 <option value=\"Net 45\">Net 45</option>\n                 <option value=\"Net 60\">Net 60</option>\n               </select> -->\n               <input (ngModelChange)=\"onEstimateTerms($event)\" type=\"number\" formControlName=\"Terms\">\n             </div>\n           </div>\n         </fieldset>\n         <!-- Due Date -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\">Due Date/ Expiry Date:</label>\n             <div class=\"col-sm-6\">\n               <!-- <input class=\"form-control\" type=\"date\" formControlName=\"Expiry Date\" placeholder=\"Due Date\" /> -->\n               <ion-datetime class=\"datetime-text\" mode=\"ios\" value=\"{{e_d}}\" formControlName=\"Expiry Date\">\n               </ion-datetime>\n             </div>\n           </div>\n         </fieldset>\n         <!-- Sales Person -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\">Salesperson:</label>\n             <div class=\"col-sm-6\">\n               <!-- <select class=\"form-control\" formControlName=\"Sales person\">\n                 <option value=\"Aaron\">Aaron</option>\n                 <option value=\"Baron\">Baron</option>\n                 <option value=\"Candy\">Candy</option>\n                 <option value=\"Derek\">Derek</option>\n               </select> -->\n               <input type=\"text\" formControlName=\"Sales person\">\n             </div>\n           </div>\n         </fieldset>\n         <!--Item List -->\n\n         <!-- <fieldset>\n           <ion-button class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\" (click)=\"onPush(iList)\">\n             {{iList['Item Name']}} {{iList['Rate']}}\n           </ion-button>\n         </fieldset> -->\n         <fieldset>\n           <!-- <ion-button class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\"\n                        (click)=\"onPush(iList)\">\n                        {{iList['Item Name']}} {{iList['Rate']}}\n                    </ion-button> -->\n\n           <ion-chip color=\"secondary\" *ngIf=\"customeditemsList?.length === 0\" (click)=\"onCreateInventoryItemPage()\">No\n             Items Yet Go and\n             Add One Now!\n           </ion-chip>\n\n           <ion-chip class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\" (click)=\"onPush(iList)\">\n             {{iList['Item Name']}} {{iList['Rate']}}\n           </ion-chip>\n         </fieldset>\n\n         <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"inputEnabled = !inputEnabled\">\n                    <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>\n                    Add another line\n                </ion-button> -->\n\n         <fieldset>\n           <div class=\"form-group\">\n             <table formArrayName=\"salesList\">\n               <tr>\n                 <th>Item Name</th>\n                 <th>Item Detail</th>\n                 <th>Quantity</th>\n                 <th>Rate</th>\n                 <!-- <th>Tax</th> -->\n                 <th>Amount</th>\n                 <th></th>\n               </tr>\n               <!-- Input controls/ NOT TO EDIT ITEM IN THIS PAGE estimateDetail == estimateInfo -->\n               <!-- <tr *ngFor=\"let y of estimateInfo.salesList | slice: 1; let j = index\">\n                 <td>\n                   <div class=\"col-sm-6\">{{y['Item Name']}}\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">{{y.Description}}\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">{{y.Rate}}\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">{{y.quantity}}\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">{{returnProduct(y.quantity, y.Rate)}}\n                   </div>\n                 </td>\n               </tr> -->\n               <tr *ngFor=\"let saleList of salesListArray.controls;let i = index\" [formGroupName]=\"i\">\n                 <td *ngIf=\"i > 0\">\n                   <div class=\"col-sm-6\">\n                     <input class=\"form-control\" type=\"text\" placeholder=\"Item Name\" formControlName=\"Item Name\" />\n                   </div>\n                 </td>\n\n                 <td *ngIf=\"i > 0\">\n                   <div class=\"col-sm-6\">\n                     <ion-textarea class=\"form-control\" type=\"text\" placeholder=\"Item Detail\"\n                       formControlName=\"Description\"></ion-textarea>\n                     <!-- <input class=\"form-control\" type=\"text\" placeholder=\"Item Detail\" formControlName=\"Description\" /> -->\n                   </div>\n                 </td>\n\n                 <td *ngIf=\"i > 0\">\n                   <div class=\"col-sm-6\">\n                     <input class=\"form-control\" type=\"number\" placeholder=\"\" formControlName=\"quantity\"\n                       (input)=\"onQtyChange($event, saleList.value.Rate, saleList)\" />\n                   </div>\n                 </td>\n\n                 <td *ngIf=\"i > 0\">\n                   <div class=\"col-sm-6\">\n                     <input class=\"form-control\" type=\"number\" placeholder=\"0.00\" formControlName=\"Rate\"\n                       (input)=\"onPriceChange($event, saleList.value.quantity, saleList)\" />\n                   </div>\n                 </td>\n\n                 <td *ngIf=\"i > 0\">\n                   <div class=\"col-sm-6\">\n                     <input class=\"form-control\" type=\"number\"\n                       placeholder=\"{{returnProduct(saleList.value.Rate, saleList.value.quantity)}}\"\n                       value=\"{{returnProduct(saleList.value.Rate, saleList.value.quantity)}}\"\n                       formControlName=\"amount\" />\n                   </div>\n                 </td>\n\n                 <!-- <td *ngIf=\"i > 0\">\n                   <div class=\"col-sm-6\">\n                     <span style=\"color: black; font-weight: bold;\">\n                       {{returnProduct(saleList.value.Rate, saleList.value.quantity)}}</span>\n                   </div>\n                 </td> -->\n\n                 <td *ngIf=\"i > 0\">\n                   <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"addSalesListItem()\">\n                     <ion-icon name=\"copy-outline\"></ion-icon>\n                   </ion-button> -->\n\n                   <ion-button color=\"secondary\" fill=\"clear\" (click)=\"removeSalesListItem(i)\">\n                     <ion-icon name=\"trash-outline\"></ion-icon>\n                   </ion-button>\n                 </td>\n\n               </tr>\n             </table>\n           </div>\n           <!-- <div style=\"float: right;\">\n\n             <ion-chip style=\"font-size: larger; color: var(--ion-color-theme);\">\n\n               Total ($): &nbsp;&nbsp;&nbsp;\n               <span style=\"color: var(--ion-color-theme);\" *ngIf=\"!totalPrice\">\n                 {{estimatesDetail.Total}}\n               </span>\n\n               <span style=\"color: var(--ion-color-theme);\" *ngIf=\"totalPrice != 0\">\n                 {{totalPrice}}\n               </span>\n\n             </ion-chip>\n           </div> -->\n           <div style=\"padding-top: 20px; float: right\">\n             <ion-chip>\n               Total: {{totalPrice || 0}}\n             </ion-chip>\n           </div>\n\n         </fieldset>\n         <!-- <fieldset>{{totalPrice || 0}}</fieldset> -->\n         <!-- Notes -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\">Customer Notes:</label>\n             <div class=\"col-sm-6\">\n               <ion-textarea class=\"form-control\" type=\"text\" formControlName=\"Notes\"\n                 placeholder=\"Will be displayed on the estimate\" value=\"{{customernotes}}\"></ion-textarea>\n               <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Notes\"\n                 placeholder=\"Will be displayed on the estimate\" /> -->\n             </div>\n           </div>\n         </fieldset>\n         <!-- Terms and conditions -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\">Terms & Conditions:</label>\n             <div class=\"col-sm-6\">\n               <ion-textarea class=\"form-control\" type=\"text\" formControlName=\"Terms & Conditions\"\n                 value=\"{{termsandconditions}}\" placeholder=\"Enter the terms and conditions of your business that will\n                displayed in your transaction\">\n               </ion-textarea>\n               <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Terms & Conditions\"\n                 placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\" /> -->\n             </div>\n           </div>\n         </fieldset>\n       </div>\n       <ion-button type=\"submit\" [disabled]=\"!totalPrice && !reimburshForm.value['Customer Name']\" color=\"theme\">Save\n       </ion-button>\n       <!-- <br />\n            <ion-button color=\"dark\" (click)=\"submitForm(reimburshForm.value)\">Save and Send</ion-button> -->\n     </form>\n   </div>\n\n </ion-content>"

/***/ }),

/***/ "./src/app/firebase/invoices/create/create.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/firebase/invoices/create/create.module.ts ***!
  \***********************************************************/
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
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create.page */ "./src/app/firebase/invoices/create/create.page.ts");








var routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_7__["CreatePage"]
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
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_page__WEBPACK_IMPORTED_MODULE_7__["CreatePage"]]
        })
    ], CreatePageModule);
    return CreatePageModule;
}());



/***/ }),

/***/ "./src/app/firebase/invoices/create/create.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/firebase/invoices/create/create.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\ndiv,\nform,\ninput,\nselect {\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 12px;\n  color: #666;\n  line-height: 22px;\n}\n\nh1,\nh4 {\n  margin: 15px 0 4px;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 13px;\n  margin: 20px 0 4px;\n  font-weight: 400;\n}\n\nspan {\n  color: red;\n}\n\n.small {\n  font-size: 10px;\n  line-height: 18px;\n}\n\n.testbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 2px 5px #ccc;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 30%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 31%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.native-textarea.sc-ion-textarea-md {\n  text-align: left !important;\n  /* border-style: dotted !important; */\n  /* border-width: 1px !important; */\n  overflow-y: inherit !important;\n  /* width: calc(100% - 10px); */\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\n.tag {\n  display: inline-block;\n  width: auto;\n  height: 38px;\n  background-color: #979797;\n  border-radius: 3px 4px 4px 3px;\n  border-left: 1px solid #979797;\n  /* This makes room for the triangle */\n  margin-left: 19px;\n  position: relative;\n  color: white;\n  font-weight: 300;\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: 22px;\n  line-height: 38px;\n  padding: 0 10px 0 10px;\n}\n\n/* Makes the triangle */\n\n.tag:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: -19px;\n  width: 0;\n  height: 0;\n  border-top: 19px solid transparent;\n  border-bottom: 19px solid transparent;\n  border-right: 19px solid #979797;\n}\n\n/* Makes the circle */\n\n.tag:after {\n  content: \"\";\n  background-color: white;\n  border-radius: 50%;\n  width: 4px;\n  height: 4px;\n  display: block;\n  position: absolute;\n  left: -9px;\n  top: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9pbnZvaWNlcy9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvaW52b2ljZXMvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0VBS0MsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsa0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLFVBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDQ0Q7O0FERUE7RUFDQyx3QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURFQTs7O0VBR0MsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURFQTs7RUFFQyxtQkFBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NEOztBREVBOztFQUVDLFdBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsa0JBQUE7QUNDRDs7QURFQTtFQUNDLGFBQUE7QUNDRDs7QURFQTtFQUNDLG9CQUFBO0FDQ0Q7O0FERUE7OztFQUdDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNDRDs7QURFQTs7RUFFQyxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNDLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtFQUNBLHNCQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTs7RUFFQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyx1QkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7QUNDRDs7QURFQTtFQUNDO0lBQ0Msb0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VDQ0E7O0VEQ0Q7SUFDQyxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLDhCQUFBO0VDRUE7O0VEQUQ7SUFDQyxVQUFBO0lBQ0EsZ0JBQUE7RUNHQTs7RURERDtJQUNDLFVBQUE7SUFDQSxnQkFBQTtFQ0lBOztFREZEOztJQUVDLG9CQUFBO0VDS0E7QUFDRjs7QURGQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0lEOztBRERBO0VBQ0MsMkJBQUE7RUFDRyxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNJSjs7QURGQTtFQUNDLHFCQUFBO0VBRUMsV0FBQTtFQUNELFlBQUE7RUFFQSx5QkFBQTtFQUdBLDhCQUFBO0VBRUEsOEJBQUE7RUFFQSxxQ0FBQTtFQUNBLGlCQUFBO0VBRUEsa0JBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLHNCQUFBO0FDRkQ7O0FES0EsdUJBQUE7O0FBQ0E7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0FDRkQ7O0FES0EscUJBQUE7O0FBQ0E7RUFDQyxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNGRCIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL2ludm9pY2VzL2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcbmRpdixcbmZvcm0sXG5pbnB1dCxcbnNlbGVjdCB7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcblx0b3V0bGluZTogbm9uZTtcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Y29sb3I6ICM2NjY7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG5oMSxcbmg0IHtcblx0bWFyZ2luOiAxNXB4IDAgNHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG5cdGZvbnQtc2l6ZTogMTNweDtcblx0bWFyZ2luOiAyMHB4IDAgNHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuXG5zcGFuIHtcblx0Y29sb3I6IHJlZDtcbn1cblxuLnNtYWxsIHtcblx0Zm9udC1zaXplOiAxMHB4O1xuXHRsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnRlc3Rib3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0aGVpZ2h0OiBpbmhlcml0O1xuXHRwYWRkaW5nOiAwcHg7XG59XG5cbmZvcm0ge1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMjBweDtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Ym94LXNoYWRvdzogMCAycHggNXB4ICNjY2M7XG59XG5cbmlucHV0IHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuXHRwYWRkaW5nOiA1cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW5wdXQ6aG92ZXIsXG50ZXh0YXJlYTpob3ZlcixcbnNlbGVjdDpob3ZlciB7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwOTU0ODQ7XG5cdGJhY2tncm91bmQ6ICNlNmVlZjc7XG59XG5cbi50aXRsZS1ibG9jayBzZWxlY3QsXG4udGl0bGUtYmxvY2sgaW5wdXQge1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5zZWxlY3Qge1xuXHRwYWRkaW5nOiA3cHggMDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuc2VsZWN0LFxudGFibGUge1xuXHR3aWR0aDogMTAwJTtcbn1cblxub3B0aW9uIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRheS12aXNpdGVkLFxuLnRpbWUtdmlzaXRlZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwidGltZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG5cdG1hcmdpbjogMnB4IDIycHggMCAwO1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSxcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogOHB4O1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpIHtcblx0cmlnaHQ6IDVweDtcblx0ei1pbmRleDogMTtcblx0Y29sb3I6ICNhOWE5YTk7XG59XG5cblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcblx0cmlnaHQ6IDA7XG5cdHotaW5kZXg6IDI7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgbGFiZWwge1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZzogMCAyMHB4IDEwcHggMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBpbnB1dCB7XG5cdHdpZHRoOiBhdXRvO1xuXHRtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG50aCxcbnRkIHtcblx0d2lkdGg6IDE4JTtcblx0cGFkZGluZzogMTVweCAwO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR2ZXJ0aWNhbC1hbGlnbjogdW5zZXQ7XG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5maXJzdC1jb2wge1xuXHR3aWR0aDogMjUlO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ZXh0YXJlYSB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xufVxuXG4uYnRuLWJsb2NrIHtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuXHR3aWR0aDogMTUwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlcjogbm9uZTtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwOTU0ODQ7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICNmZmY7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA2NjZhMztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSB7XG5cdC50aXRsZS1yYWRpbyB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0cGFkZGluZy10b3A6IDE1cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBlbmQ7XG5cdH1cblx0LnRpdGxlLWJsb2NrIHtcblx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXHQudGl0bGUtYmxvY2sgc2VsZWN0IHtcblx0XHR3aWR0aDogMzAlO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0LnRpdGxlLWJsb2NrIGlucHV0IHtcblx0XHR3aWR0aDogMzElO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0dGgsXG5cdHRkIHtcblx0XHR3b3JkLWJyZWFrOiBrZWVwLWFsbDtcblx0fVxufVxuXG4uc2VydmljZSB7XG5cdHBvc2l0aW9uOiBzdGF0aWM7XG5cdG1hcmdpbi10b3A6IDA7XG5cdG1hcmdpbi1yaWdodDogLjMxMjVyZW07XG5cdG1hcmdpbi1sZWZ0OiAwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG5cdG1hcmdpbi1yaWdodDogLjc1cmVtO1xufVxuXG4ubmF0aXZlLXRleHRhcmVhLnNjLWlvbi10ZXh0YXJlYS1tZCB7XG5cdHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAvKiBib3JkZXItc3R5bGU6IGRvdHRlZCAhaW1wb3J0YW50OyAqL1xuICAgIC8qIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7ICovXG4gICAgb3ZlcmZsb3cteTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTsgKi9cbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi50YWcge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIFxuICB3aWR0aDogYXV0bztcblx0aGVpZ2h0OiAzOHB4O1xuXHRcblx0YmFja2dyb3VuZC1jb2xvcjogIzk3OTc5Nztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHggNHB4IDRweCAzcHg7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogM3B4IDRweCA0cHggM3B4O1xuXHRib3JkZXItcmFkaXVzOiAzcHggNHB4IDRweCAzcHg7XG5cdFxuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICM5Nzk3OTc7XG5cblx0LyogVGhpcyBtYWtlcyByb29tIGZvciB0aGUgdHJpYW5nbGUgKi9cblx0bWFyZ2luLWxlZnQ6IDE5cHg7XG5cdFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFxuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAyMnB4O1xuXHRsaW5lLWhlaWdodDogMzhweDtcblxuXHRwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xufVxuXG4vKiBNYWtlcyB0aGUgdHJpYW5nbGUgKi9cbi50YWc6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0bGVmdDogLTE5cHg7XG5cdHdpZHRoOiAwO1xuXHRoZWlnaHQ6IDA7XG5cdGJvcmRlci10b3A6IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1ib3R0b206IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yaWdodDogMTlweCBzb2xpZCAjOTc5Nzk3O1xufVxuXG4vKiBNYWtlcyB0aGUgY2lyY2xlICovXG4udGFnOmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0d2lkdGg6IDRweDtcblx0aGVpZ2h0OiA0cHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IC05cHg7XG5cdHRvcDogMTdweDtcbn0iLCJib2R5LFxuZGl2LFxuZm9ybSxcbmlucHV0LFxuc2VsZWN0IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2NjtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbmgxLFxuaDQge1xuICBtYXJnaW46IDE1cHggMCA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDIwcHggMCA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4udGVzdGJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggI2NjYztcbn1cblxuaW5wdXQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dDpob3ZlcixcbnRleHRhcmVhOmhvdmVyLFxuc2VsZWN0OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5NTQ4NDtcbiAgYmFja2dyb3VuZDogI2U2ZWVmNztcbn1cblxuLnRpdGxlLWJsb2NrIHNlbGVjdCxcbi50aXRsZS1ibG9jayBpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5zZWxlY3QsXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5vcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGF5LXZpc2l0ZWQsXG4udGltZS12aXNpdGVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT10aW1lXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIG1hcmdpbjogMnB4IDIycHggMCAwO1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSxcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGkge1xuICByaWdodDogNXB4O1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2E5YTlhOTtcbn1cblxuW3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMjBweCAxMHB4IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgaW5wdXQge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxudGgsXG50ZCB7XG4gIHdpZHRoOiAxOCU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHVuc2V0O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uZmlyc3QtY29sIHtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcbn1cblxuLmJ0bi1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1NDg0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjY2YTM7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NjhweCkge1xuICAudGl0bGUtcmFkaW8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICB9XG5cbiAgLnRpdGxlLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayBzZWxlY3Qge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayBpbnB1dCB7XG4gICAgd2lkdGg6IDMxJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgdGgsXG50ZCB7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gIH1cbn1cbi5zZXJ2aWNlIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjMxMjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbn1cblxuLm5hdGl2ZS10ZXh0YXJlYS5zYy1pb24tdGV4dGFyZWEtbWQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIC8qIGJvcmRlci1zdHlsZTogZG90dGVkICFpbXBvcnRhbnQ7ICovXG4gIC8qIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7ICovXG4gIG92ZXJmbG93LXk6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpOyAqL1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnRhZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHggNHB4IDRweCAzcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4IDRweCA0cHggM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHggNHB4IDRweCAzcHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzk3OTc5NztcbiAgLyogVGhpcyBtYWtlcyByb29tIGZvciB0aGUgdHJpYW5nbGUgKi9cbiAgbWFyZ2luLWxlZnQ6IDE5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbn1cblxuLyogTWFrZXMgdGhlIHRyaWFuZ2xlICovXG4udGFnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IC0xOXB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDE5cHggc29saWQgIzk3OTc5Nztcbn1cblxuLyogTWFrZXMgdGhlIGNpcmNsZSAqL1xuLnRhZzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOXB4O1xuICB0b3A6IDE3cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/firebase/invoices/create/create.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/firebase/invoices/create/create.page.ts ***!
  \*********************************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _invoice_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../invoice.model */ "./src/app/firebase/invoice.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");











var CreatePage = /** @class */ (function () {
    function CreatePage(formBuilder, navCtrl, firebaseService, authService, route, http, papa) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.route = route;
        this.http = http;
        this.papa = papa;
        this.invoiceData = new _invoice_model__WEBPACK_IMPORTED_MODULE_6__["InvoiceModel"]();
        this.estimateInfo = new _invoice_model__WEBPACK_IMPORTED_MODULE_6__["EstimateModel"]();
        this.contactstest = [
            {
                quantity: 2,
                Rate: 12000,
                amount: 24000,
                Description: "string",
                "Item Name": "string",
            },
            {
                quantity: 3,
                Rate: 12000,
                amount: 36000,
                Description: "stttdfggdfring",
                "Item Name": "strdgdgdging",
            }
        ];
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    CreatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.readItems();
        // pull data from estimate 
        this.route.queryParams.subscribe(function (data) {
            // if there is data from estimate
            if (data.data) {
                var result = JSON.parse(data.data);
                _this.estimateInfo = result;
                //   this.estimateInfo = this.createInvoiceForm.value;
                console.log('estimate: ', _this.estimateInfo);
                console.log(_this.estimateInfo.salesList);
            }
            else if (data.data) {
                console.log('no estimate convert');
            }
        });
        // if this.invoiceInfo is not null, then 
        this.buildForm();
        // this.contactForm = this.formBuilder.group({
        //   contacts: this.formBuilder.array(this.estimateInfo.salesList.map(contact => this.createSalesList(contact)))
        // });
        //    console.log(this.contactForm.value);
    };
    CreatePage.prototype.createSalesList = function (contact) {
        return this.formBuilder.group({
            quantity: [contact.quantity],
            Rate: [contact.Rate],
            amount: [contact.amount],
            Description: [contact.Description],
            "Item Name": [contact['Item Name']],
        });
    };
    CreatePage.prototype.ionViewWillEnter = function () {
        this.getCsvData();
        // user create invoice from estimate; value indicated by this.estimateInfo['id']
        if (this.estimateInfo['id']) {
            console.log('with estimate info', this.estimateInfo);
        }
        else {
            // user directly create invoice 
            console.log('no estimate info');
            this.getTermsandConditions();
            this.getCustomerNotes();
        }
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
    CreatePage.prototype.createInvoice = function () {
        var _this = this;
        console.log(this.estimateInfo, this.reimburshForm.value);
        this.reimburshForm.value['Total'] = this.totalPrice;
        this.reimburshForm.value['Estimate Status'] = 'invoiced';
        this.reimburshForm.value['Invoicer Id'] = this.uid;
        this.reimburshForm.value['Invoice email'] = this.email;
        if (this.estimateInfo['id']) {
            console.log("convert to invoice and estimate status set to 'invoice'");
            // update status => estimate id == invoice id
            this.firebaseService.updateEstimates(this.estimateInfo['id'], this.uid, this.email, this.reimburshForm.value).then(function () {
            });
        }
        else {
            console.log('create a new invoice');
        }
        this.firebaseService.createInvoices(this.uid, this.email, this.reimburshForm.value).then(function () {
            _this.dismissModal();
        });
    };
    CreatePage.prototype.dismissModal = function () {
        //  this.modalController.dismiss();
        this.navCtrl.navigateBack('/firebase/invoices');
    };
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
    ////////////
    CreatePage.prototype.buildForm = function () {
        var _this = this;
        console.log('build form: ', this.estimateInfo, this.estimateInfo.salesList);
        this.reimburshForm = this.formBuilder.group({
            "Estimate Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Estimate Date"]),
            "Estimate ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Date.now()),
            "Estimate Number": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Estimate Number"]),
            "Invoice Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date().toISOString()),
            "Invoice ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Estimate ID"]),
            "Invoice Number": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Estimate Number"]),
            "Estimate Status": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('invoice'),
            "Customer ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Date.now()),
            "Expiry Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Expiry Date"]),
            "PurchaseOrder": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo.PurchaseOrder),
            "Currency Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Currency Code"]),
            "Exchange Rate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Exchange Rate"]),
            "Discount Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Discount Type"]),
            "Is Discount Before Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Is Discount Before Tax"]),
            "Entity Discount Percent": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Entity Discount Percent"]),
            "Is Inclusive Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Is Inclusive Tax"]),
            "SubTotal": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo.SubTotal),
            "Total": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo.Total),
            "Adjustment": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo.Adjustment),
            "Notes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo.Notes),
            "Terms": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo.Terms),
            "Terms & Conditions": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Terms & Conditions"]),
            "Customer Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Customer Name"]),
            "Project Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Project Name"]),
            // orderNumber: this.formBuilder.control(null),
            "Project ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Project ID"]),
            // salesPerson: this.formBuilder.control(null),
            "Sales person": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Sales person"]),
            "Billing Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Billing Address"]),
            "Billing City": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Billing City"]),
            "Billing State": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Billing State"]),
            "Billing Country": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Billing Country"]),
            "Billing Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Currency Code"]),
            "Billing Fax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Billing Fax"]),
            "Template Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Template Name"]),
            "Adjustment Description": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Adjustment Description"]),
            "Shipping Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Shipping Address"]),
            "Shipping City": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Shipping City"]),
            "Shipping State": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Shipping State"]),
            "Shipping Country": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Shipping Country"]),
            "Shipping Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Shipping Code"]),
            "Shipping Fax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Shipping Fax"]),
            "Source": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo.Source),
            "Reference ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Reference ID"]),
            "Last Sync Time": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Last Sync Time"]),
            "Shipping Charge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Shipping Charge"]),
            "Shipping Charge Tax ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Shipping Charge Tax ID"]),
            "Shipping Charge Tax Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Shipping Charge Tax Amount"]),
            "Shipping Charge Tax Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Shipping Charge Tax Name"]),
            "Shipping Charge Tax %": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Shipping Charge Tax %"]),
            "Shipping Charge Tax Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Shipping Charge Tax Type"]),
            "Item Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Item Name"]),
            "Item Desc": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Item Desc"]),
            "Quantity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo.Quantity),
            "Discount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo.Discount),
            "Discount Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Discount Amount"]),
            "Item Tax Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Item Tax Amount"]),
            "Item Total": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Item Total"]),
            "Account": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo.Account),
            "SKU": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo.SKU),
            "Usage unit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Usage unit"]),
            "Item Price": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Item Price"]),
            "Tax ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Tax ID"]),
            "Item Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Item Tax"]),
            "Item Tax %": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Item Tax %"]),
            "Item Tax Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimateInfo["Item Tax Type"]),
            // this one would be the first item in the group array
            // this one would be the first item in the group array
            // salesList: this.formBuilder.array([
            //   this.formBuilder.group({
            //      quantity: this.formBuilder.control(null),
            //     Rate: this.formBuilder.control(null),
            //     amount: this.formBuilder.control(null),
            //     "Description": this.formBuilder.control(null),
            //     "Item Name": this.formBuilder.control(null),
            //   }),
            // ]),
            salesList: this.formBuilder.array(this.estimateInfo.salesList.map(function (data) { return _this.createSalesList(data); }))
        });
        this.salesListArray = this.reimburshForm.get('salesList');
    };
    CreatePage.prototype.onQtyChange = function (e, Rate, f) {
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
        this.totalPrice = this.returnSum();
        console.log(this.totalPrice);
    };
    CreatePage.prototype.onPriceChange = function (e, quantity, f) {
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
        this.totalPrice = this.returnSum();
        console.log(this.totalPrice);
    };
    CreatePage.prototype.returnProduct = function (a, b) {
        return a * b;
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
    // returnSum(a: number, b: number) {
    //   return a + b
    // }
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
            console.log(_this.customeditemsList);
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
    CreatePage.prototype.removeSalesListItem = function (index) {
        // let salesListArray = this.salesListArray.value;
        // salesListArray.splice(index, 1);
        // console.log(this.salesListArray.value);
        this.salesListArray.removeAt(index);
    };
    //
    CreatePage.prototype.onPush = function (value) {
        console.log(this.totalPrice);
        this.value = value;
        console.log(this.salesListArray.value, value);
        this.addSalesListItem();
    };
    CreatePage.prototype.addSalesListItem = function () {
        //   console.log(this.value, this.salesListArray.value);
        console.log(this.value, this.value['Rate']);
        var formGroup = this.formBuilder.group({
            //   itemName: this.formBuilder.control(null),
            //   itemDetail: this.formBuilder.control(null),
            quantity: this.formBuilder.control(this.value['quantity']),
            Rate: this.formBuilder.control(this.value['Rate']),
            // tax: this.formBuilder.control(null),
            // amount: this.formBuilder.control(null),
            amount: this.formBuilder.control(this.value['Rate']),
            "Description": this.formBuilder.control(this.value['Description']),
            // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
            "Item Name": this.formBuilder.control(this.value['Item Name']),
        });
        this.salesListArray.push(formGroup);
        this.salesListArray = this.reimburshForm.get('salesList');
        console.log(this.salesListArray.value);
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
    CreatePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
        { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_10__["Papa"] }
    ]; };
    CreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! raw-loader!./create.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/invoices/create/create.page.html"),
            styles: [__webpack_require__(/*! ./create.page.scss */ "./src/app/firebase/invoices/create/create.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
            _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_10__["Papa"]])
    ], CreatePage);
    return CreatePage;
}());

// onReset() {
//   this.createSupplierForm = new FormGroup({
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
//# sourceMappingURL=firebase-invoices-create-create-module-es5.js.map