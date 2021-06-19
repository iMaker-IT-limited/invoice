(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-invoices-update-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/invoices/update/update.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/invoices/update/update.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-header></app-header>\n\n <ion-content>\n   <ion-item-divider sticky>\n     <!-- <ion-thumbnail class=\"\" slot=\"start\"> -->\n     <img class=\"avator\" src=\"./../../../../assets/images/home_categories/invoice.svg\" alt=\"\">\n     <!-- </ion-thumbnail> -->\n     <ion-title>Update Invoice | {{invoiceDetail.id}}</ion-title>\n     <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n       <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n     </ion-button>\n   </ion-item-divider>\n   <!-- <ion-progress-bar color=\"theme\" type=\"indeterminate\"></ion-progress-bar> -->\n\n   <app-rating-input *ngIf=\"!contacts\"></app-rating-input>\n\n   <div class=\"testbox\">\n     <form [formGroup]=\"reimburshForm\" (ngSubmit)=\"updateInvoice()\" class=\"form-validate form-horizontal\" novalidate=\"\">\n       <!-- START panel-->\n       <div class=\"panel-body\">\n         <legend>Update Estimates</legend>\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Customer Name:</label>\n             <div class=\"col-sm-6\">\n               <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Customer Name\"\n                                placeholder=\"Enter Customer name\" /> -->\n\n               <select class=\"form-control\" formControlName=\"Customer Name\">\n                 <option *ngFor=\"let i of contacts\" value=\"{{i['Customer Name']}}\">\n                   {{i['Customer Name']}}\n                 </option>\n               </select>\n             </div>\n           </div>\n         </fieldset>\n         <!-- Invoice number -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Estimate Number:</label>\n             <div class=\"col-sm-6\">\n               <input class=\"form-control\" type=\"text\" formControlName=\"Estimate Number\"\n                 placeholder=\"Estimate Number\" />\n             </div>\n           </div>\n         </fieldset>\n         <!-- Order number -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\">Order Number:</label>\n             <div class=\"col-sm-6\">\n               <input class=\"form-control\" type=\"text\" formControlName=\"Project ID\" placeholder=\"Order Number\" />\n             </div>\n           </div>\n         </fieldset>\n         <!-- Invoice Date -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Estimate Date:</label>\n             <div class=\"col-sm-6\">\n               <ion-datetime class=\"datetime-text\" mode=\"ios\" value=\"\" formControlName=\"Estimate Date\">\n               </ion-datetime>\n               <!-- <input class=\"form-control\" type=\"date\" formControlName=\"Estimate Date\"\n                                placeholder=\"Estimates Date\" /> -->\n             </div>\n           </div>\n         </fieldset>\n         <!-- Termis -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\">Terms:</label>\n             <div class=\"col-sm-6\">\n               <select class=\"form-control\" formControlName=\"Terms\">\n                 <option value=\"Net 30\">Net 30</option>\n                 <option value=\"Net 45\">Net 45</option>\n                 <option value=\"Net 60\">Net 60</option>\n               </select>\n             </div>\n           </div>\n         </fieldset>\n         <!-- Due Date -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\">Due Date/ Expiry Date:</label>\n             <div class=\"col-sm-6\">\n               <!-- <input class=\"form-control\" type=\"date\" formControlName=\"Expiry Date\"\n                                placeholder=\"Due Date\" /> -->\n\n               <ion-datetime class=\"datetime-text\" mode=\"ios\" value=\"\" formControlName=\"Expiry Date\">\n               </ion-datetime>\n             </div>\n           </div>\n         </fieldset>\n         <!-- Sales Person -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\">Salesperson:</label>\n             <div class=\"col-sm-6\">\n               <select class=\"form-control\" formControlName=\"Sales person\">\n                 <option value=\"Aaron\">Aaron</option>\n                 <option value=\"Baron\">Baron</option>\n                 <option value=\"Candy\">Candy</option>\n                 <option value=\"Derek\">Derek</option>\n               </select>\n             </div>\n           </div>\n         </fieldset>\n         <!--Item List -->\n\n         <fieldset>\n           <!-- <ion-button class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\"\n                        (click)=\"onPush(iList)\">\n                        {{iList['Item Name']}} {{iList['Rate']}}\n                    </ion-button> -->\n\n           <ion-chip color=\"secondary\" *ngIf=\"customeditemsList?.length === 0\" (click)=\"onCreateInventoryItemPage()\">\n             No Items Yet Go and\n             Add One Now!\n           </ion-chip>\n\n           <ion-chip class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\" (click)=\"onPush(iList)\">\n             {{iList['Item Name']}} {{iList['Rate']}}\n           </ion-chip>\n         </fieldset>\n\n         <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"inputEnabled = !inputEnabled\">\n                    <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>\n                    Add another line\n                </ion-button> -->\n\n         <!--Sales List -->\n         <fieldset>\n           <div class=\"form-group\">\n             <table formArrayName=\"salesList\">\n               <tr>\n                 <th>Item Name</th>\n                 <th>Item Detail</th>\n                 <th>Quantity</th>\n                 <th>Rate</th>\n                 <!-- <th>Tax</th> -->\n                 <th>Amount</th>\n               </tr>\n               <!--Input controls -->\n               <!-- {{estimatesDetail | json}} -->\n               <!-- <tr *ngFor=\"let y of invoiceDetail.salesList | slice: 1; let j = index\">\n                 <td>\n                   <div class=\"col-sm-6\">{{y['Item Name']}}\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">{{y.Description}}\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">{{y.Rate}}\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">{{y.quantity}}\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">{{returnProduct(y.quantity, y.Rate)}}\n                   </div>\n                 </td>\n               </tr> -->\n\n               <tr *ngFor=\"let saleList of salesListArray.controls;let i = index\" [formGroupName]=\"i\">\n\n                 <td>\n                   <div class=\"col-sm-6\">\n                     <input class=\"form-control\" type=\"text\" placeholder=\"Item Name\" formControlName=\"Item Name\" />\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">\n                     <ion-textarea class=\"form-control\" placeholder=\"Item Detail\" formControlName=\"Description\">\n                     </ion-textarea>\n                     <!-- <input class=\"form-control\" type=\"text\" placeholder=\"Item Detail\" formControlName=\"Description\" /> -->\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">\n                     <input class=\"form-control\" type=\"number\" placeholder=\"\" formControlName=\"quantity\"\n                       (input)=\"onQtyChange($event, saleList.value.Rate, saleList)\" />\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">\n                     <input class=\"form-control\" type=\"number\" placeholder=\"0.00\" formControlName=\"Rate\"\n                       (input)=\"onPriceChange($event, saleList.value.quantity, saleList)\" />\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">\n                     <span style=\"color: black; font-weight: bold;\">\n                       {{returnProduct(saleList.value.Rate, saleList.value.quantity)}}</span>\n                   </div>\n                 </td>\n\n                 <td>\n                   <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"addSalesListItem()\">\n                     <ion-icon name=\"copy-outline\"></ion-icon>\n                   </ion-button> -->\n\n                   <ion-button color=\"secondary\" fill=\"clear\" (click)=\"removeSalesListItem(i, saleList.value)\">\n                     <ion-icon name=\"close-circle\"></ion-icon>\n                   </ion-button>\n                 </td>\n\n\n               </tr>\n             </table>\n           </div>\n           <!-- <ul>\n               <li *ngFor=\"let x of salesListArray.value\">\n                {{x.quantity}} x {{x.rate}} => {{returnProduct(x.quantity, x.rate)}}\n               </li>\n               </ul> -->\n         </fieldset>\n         <fieldset>\n           <div style=\"float: right;\">\n\n             <ion-chip style=\"font-size: larger; color: var(--ion-color-theme);\">\n\n               Total ($): &nbsp;&nbsp;&nbsp;\n               <span style=\"color: var(--ion-color-theme);\">\n                 {{invoiceDetail.Total}}\n               </span>\n\n               <!-- <span style=\"color: var(--ion-color-theme);\" *ngIf=\"totalPrice != 0\">\n                 {{totalPrice}}\n               </span> -->\n\n               <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Total\" placeholder=\"{{totalPrice}}\" />\n               Total: {{totalPrice || 0}} -->\n             </ion-chip>\n           </div>\n         </fieldset>\n         <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"addSalesListItem()\">Add another line</ion-button> -->\n         <!-- Notes -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\">Customer Notes:</label>\n             <div class=\"col-sm-6\">\n               <ion-textarea class=\"form-control\" type=\"text\" formControlName=\"Notes\"\n                 placeholder=\"Will be displayed on the estimate\"></ion-textarea>\n\n               <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Notes\"\n                 placeholder=\"Will be displayed on the estimate\" /> -->\n             </div>\n           </div>\n         </fieldset>\n         <!-- Terms and conditions -->\n         <fieldset>\n           <div class=\"form-group\">\n             <label class=\"col-sm-2 control-label\">Terms & Conditions:</label>\n             <div class=\"col-sm-6\">\n\n               <ion-textarea class=\"form-control\" type=\"text\" formControlName=\"Terms & Conditions\"\n                 placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\">\n               </ion-textarea>\n\n               <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Terms & Conditions\"\n                 placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\" /> -->\n             </div>\n           </div>\n         </fieldset>\n       </div>\n       <ion-button type=\"submit\" color=\"theme\">Save and Send</ion-button>\n       <br />\n       <!-- <ion-button color=\"dark\" (click)='submitForm(reimburshForm.value)'>Save and Send</ion-button> -->\n     </form>\n     <!-- <form [formGroup]=\"createInvoiceForm\" (ngSubmit)=\"updateInvoice()\">\n       <h4 style=\"color: #e54643;\">Customer Name<span>*</span></h4>\n       <div class=\"title-block\">\n         <select formControlName=\"Customer Name\">\n           <option value=\"Type\" selected>Select or Type to add</option>\n           <option value=\"Aaron\">Aaron</option>\n           <option value=\"Bob\">Bob</option>\n           <option value=\"Cindy\">Cindy</option>\n         </select>\n       </div>\n\n       <h4 style=\"color: #e54643;\">Invoice Number# <span>*</span> </h4>\n       <div class=\"title-block\">\n         <input type=\"text\" name=\"invoice\" formControlName=\"Invoice Number\" />\n       </div>\n\n       <h4>Invoice ID <span>*</span> </h4>\n       <div class=\"title-block\">\n         <input type=\"text\" name=\"order_number\" formControlName=\"Invoice ID\" />\n       </div>\n\n       <h4 style=\"color: #e54643;\">Invoice Date <span>*</span> </h4>\n       <div class=\"title-block\">\n         <input type=\"date\" id=\"start\" name=\"Invoice Date\" formControlName=\"Invoice Date\" />\n       </div>\n\n       <h4 style=\"color: #e54643;\">Payment Terms<span>*</span></h4>\n       <div class=\"title-block\">\n         <select formControlName=\"Payment Terms\">\n           <option value=\"Type\" selected></option>\n           <option value=\"net_15\">Net 15</option>\n           <option value=\"net_30\">Net 30</option>\n           <option value=\"net_45\">Net 45</option>\n           <option value=\"net_60\">Net 60</option>\n           <option value=\"due_end_of_the_month\">Due end of the month</option>\n           <option value=\"due_end_of_the_next_month\">Due end of the next month</option>\n           <option value=\"due_on_receipt\">Due on Receipt</option>\n         </select>\n       </div>\n\n       <h4 style=\"color: #e54643;\">Sales person<span>*</span></h4>\n       <div class=\"title-block\">\n         <select formControlName=\"Sales person\">\n           <option value=\"Type\" selected>Select or Type to add</option>\n           <option value=\"Phyllis\">Phyllis</option>\n           <option value=\"Phoebe\">Phoebe</option>\n           <option value=\"Ryan\">Ryan</option>\n           <option value=\"Staffen\">Staffen</option>\n           <option value=\"Dan\">Dan</option>\n           <option value=\"Jack\">Jack</option>\n         </select>\n       </div>\n\n       <h4>Subject / Project Name</h4>\n       <div class=\"\">\n         <textarea rows=\"1\" placeholder=\"Let your customer know what this Invoice is for\"\n           formControlName=\"Project Name\"></textarea>\n       </div>\n\n       <h4>Notes</h4>\n       <div class=\"\">\n         <textarea rows=\"1\" formControlName=\"Notes\"></textarea>\n       </div>\n\n       <div class=\"btn-block\">\n         <button type=\"submit\">Save</button>\n       </div>\n     </form> -->\n   </div>\n </ion-content>"

/***/ }),

/***/ "./src/app/firebase/invoices/update/update.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/firebase/invoices/update/update.module.ts ***!
  \***********************************************************/
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
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update.page */ "./src/app/firebase/invoices/update/update.page.ts");
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

/***/ "./src/app/firebase/invoices/update/update.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/firebase/invoices/update/update.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\ndiv,\nform,\ninput,\nselect {\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 12px;\n  color: #666;\n  line-height: 22px;\n}\n\nh1,\nh4 {\n  margin: 15px 0 4px;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 13px;\n  margin: 20px 0 4px;\n  font-weight: 400;\n}\n\nspan {\n  color: red;\n}\n\n.small {\n  font-size: 10px;\n  line-height: 18px;\n}\n\n.testbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 2px 5px #ccc;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 30%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 31%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9pbnZvaWNlcy91cGRhdGUvdXBkYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvaW52b2ljZXMvdXBkYXRlL3VwZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0VBS0MsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsa0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLFVBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDQ0Q7O0FERUE7RUFDQyx3QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURFQTs7O0VBR0MsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURFQTs7RUFFQyxtQkFBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NEOztBREVBOztFQUVDLFdBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsa0JBQUE7QUNDRDs7QURFQTtFQUNDLGFBQUE7QUNDRDs7QURFQTtFQUNDLG9CQUFBO0FDQ0Q7O0FERUE7OztFQUdDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNDRDs7QURFQTs7RUFFQyxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNDLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtFQUNBLHNCQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTs7RUFFQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyx1QkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7QUNDRDs7QURFQTtFQUNDO0lBQ0Msb0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VDQ0E7O0VEQ0Q7SUFDQyxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLDhCQUFBO0VDRUE7O0VEQUQ7SUFDQyxVQUFBO0lBQ0EsZ0JBQUE7RUNHQTs7RURERDtJQUNDLFVBQUE7SUFDQSxnQkFBQTtFQ0lBOztFREZEOztJQUVDLG9CQUFBO0VDS0E7QUFDRjs7QURGQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0lEIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvaW52b2ljZXMvdXBkYXRlL3VwZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LFxuZGl2LFxuZm9ybSxcbmlucHV0LFxuc2VsZWN0IHtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHRvdXRsaW5lOiBub25lO1xuXHRmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRjb2xvcjogIzY2Njtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbmgxLFxuaDQge1xuXHRtYXJnaW46IDE1cHggMCA0cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg0IHtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRtYXJnaW46IDIwcHggMCA0cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbnNwYW4ge1xuXHRjb2xvcjogcmVkO1xufVxuXG4uc21hbGwge1xuXHRmb250LXNpemU6IDEwcHg7XG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4udGVzdGJveCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IGluaGVyaXQ7XG5cdHBhZGRpbmc6IDBweDtcbn1cblxuZm9ybSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRib3gtc2hhZG93OiAwIDJweCA1cHggI2NjYztcbn1cblxuaW5wdXQge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG5cdHBhZGRpbmc6IDVweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dDpob3ZlcixcbnRleHRhcmVhOmhvdmVyLFxuc2VsZWN0OmhvdmVyIHtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgIzA5NTQ4NDtcblx0YmFja2dyb3VuZDogI2U2ZWVmNztcbn1cblxuLnRpdGxlLWJsb2NrIHNlbGVjdCxcbi50aXRsZS1ibG9jayBpbnB1dCB7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnNlbGVjdCB7XG5cdHBhZGRpbmc6IDdweCAwO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5zZWxlY3QsXG50YWJsZSB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG5vcHRpb24ge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGF5LXZpc2l0ZWQsXG4udGltZS12aXNpdGVkIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9XCJ0aW1lXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcblx0bWFyZ2luOiAycHggMjJweCAwIDA7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpLFxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA4cHg7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGkge1xuXHRyaWdodDogNXB4O1xuXHR6LWluZGV4OiAxO1xuXHRjb2xvcjogI2E5YTlhOTtcbn1cblxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuXHRyaWdodDogMDtcblx0ei1pbmRleDogMjtcblx0b3BhY2l0eTogMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBsYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiAwIDIwcHggMTBweCAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGlucHV0IHtcblx0d2lkdGg6IGF1dG87XG5cdG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbnRoLFxudGQge1xuXHR3aWR0aDogMTglO1xuXHRwYWRkaW5nOiAxNXB4IDA7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHZlcnRpY2FsLWFsaWduOiB1bnNldDtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmZpcnN0LWNvbCB7XG5cdHdpZHRoOiAyNSU7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRleHRhcmVhIHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5idG4tYmxvY2sge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG5cdHdpZHRoOiAxNTBweDtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyOiBub25lO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA5NTQ4NDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogI2ZmZjtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDY2NmEzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHtcblx0LnRpdGxlLXJhZGlvIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRwYWRkaW5nLXRvcDogMTVweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcblx0fVxuXHQudGl0bGUtYmxvY2sge1xuXHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRtYXJnaW4tbGVmdDogMTVweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdC50aXRsZS1ibG9jayBzZWxlY3Qge1xuXHRcdHdpZHRoOiAzMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHQudGl0bGUtYmxvY2sgaW5wdXQge1xuXHRcdHdpZHRoOiAzMSU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHR0aCxcblx0dGQge1xuXHRcdHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuXHR9XG59XG5cbi5zZXJ2aWNlIHtcblx0cG9zaXRpb246IHN0YXRpYztcblx0bWFyZ2luLXRvcDogMDtcblx0bWFyZ2luLXJpZ2h0OiAuMzEyNXJlbTtcblx0bWFyZ2luLWxlZnQ6IDA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctbGVmdDogMDtcblx0bWFyZ2luLXJpZ2h0OiAuNzVyZW07XG59IiwiYm9keSxcbmRpdixcbmZvcm0sXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG5oMSxcbmg0IHtcbiAgbWFyZ2luOiAxNXB4IDAgNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAyMHB4IDAgNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnRlc3Rib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4ICNjY2M7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW5wdXQ6aG92ZXIsXG50ZXh0YXJlYTpob3ZlcixcbnNlbGVjdDpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOTU0ODQ7XG4gIGJhY2tncm91bmQ6ICNlNmVlZjc7XG59XG5cbi50aXRsZS1ibG9jayBzZWxlY3QsXG4udGl0bGUtYmxvY2sgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5zZWxlY3Qge1xuICBwYWRkaW5nOiA3cHggMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuc2VsZWN0LFxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxub3B0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRheS12aXNpdGVkLFxuLnRpbWUtdmlzaXRlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9dGltZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBtYXJnaW46IDJweCAyMnB4IDAgMDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGksXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpIHtcbiAgcmlnaHQ6IDVweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNhOWE5YTk7XG59XG5cblt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwIDIwcHggMTBweCAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGlucHV0IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbnRoLFxudGQge1xuICB3aWR0aDogMTglO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB1bnNldDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmZpcnN0LWNvbCB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5idG4tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NTQ4NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY2NmEzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHtcbiAgLnRpdGxlLXJhZGlvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAudGl0bGUtYmxvY2sgc2VsZWN0IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAudGl0bGUtYmxvY2sgaW5wdXQge1xuICAgIHdpZHRoOiAzMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIHRoLFxudGQge1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICB9XG59XG4uc2VydmljZSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1yaWdodDogMC4zMTI1cmVtO1xuICBtYXJnaW4tbGVmdDogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/firebase/invoices/update/update.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/firebase/invoices/update/update.page.ts ***!
  \*********************************************************/
/*! exports provided: UpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePage", function() { return UpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _invoice_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../invoice.model */ "./src/app/firebase/invoice.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm2015/ngx-papaparse.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


// import { SelectUserImageModal } from "../select-image/select-user-image.modal";











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
        this.invoiceData = new _invoice_model__WEBPACK_IMPORTED_MODULE_1__["InvoiceModel"]();
        this.invoiceDetail = new _invoice_model__WEBPACK_IMPORTED_MODULE_1__["InvoiceModel"]();
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(res => {
            const value = JSON.parse(res.data);
            console.log(value);
            this.invoiceDetail = value;
        });
        // this.createInvoiceForm = new FormGroup({
        //   "Invoice Date": new FormControl(this.invoiceDetail["Invoice Date"]),
        //   "Invoice ID": new FormControl(this.invoiceDetail["Invoice ID"]),
        //   "Invoice Number": new FormControl(this.invoiceDetail["Invoice Number"]),
        //   "Estimate Number": new FormControl(),
        //   "Invoice Status": new FormControl(""),
        //   "Customer Name": new FormControl(""),
        //   "Company Name": new FormControl(""),
        //   "Customer ID": new FormControl(""),
        //   "Branch ID": new FormControl(""),
        //   "Branch Name": new FormControl(""),
        //   "Due Date": new FormControl(""),
        //   "Expected Payment Date": new FormControl(""),
        //   "PurchaseOrder": new FormControl(""),
        //   "Template Name": new FormControl(""),
        //   "Currency Code": new FormControl(""),
        //   "Exchange Rate": new FormControl(""),
        //   "Discount Type": new FormControl(""),
        //   "Is Discount Before Tax": new FormControl(""),
        //   "Entity Discount Percent": new FormControl(""),
        //   "Entity Discount Amount": new FormControl(""),
        //   "Item Name": new FormControl(""),
        //   "Item Desc": new FormControl(""),
        //   "Quantity": new FormControl(""),
        //   "Usage unit": new FormControl(""),
        //   "Item Price": new FormControl(""),
        //   "Discount": new FormControl(""),
        //   "Discount Amount": new FormControl(""),
        //   "Expense Reference ID": new FormControl(""),
        //   "Project ID": new FormControl(""),
        //   "Project Name": new FormControl(""),
        //   "Is Inclusive Tax": new FormControl(""),
        //   "Tax1 ID": new FormControl(""),
        //   "Item Tax1": new FormControl(""),
        //   "Item Tax1 %": new FormControl(""),
        //   "Item Tax1 Amount": new FormControl(""),
        //   "Item Tax1 Type": new FormControl(""),
        //   "Item Total": new FormControl(""),
        //   "SubTotal": new FormControl(""),
        //   "Total": new FormControl(""),
        //   "Balance": new FormControl(""),
        //   "Shipping Charge": new FormControl(""),
        //   "Shipping Charge Tax ID": new FormControl(""),
        //   "Shipping Charge Tax Amount": new FormControl(""),
        //   "Shipping Charge Tax Name": new FormControl(""),
        //   "Shipping Charge Tax %": new FormControl(""),
        //   "Shipping Charge Tax Type": new FormControl(""),
        //   "Adjustment": new FormControl(""),
        //   "Adjustment Description": new FormControl(""),
        //   "Round Off": new FormControl(""),
        //   "Sales person": new FormControl(""),
        //   "Payment Terms": new FormControl(""),
        //   "Payment Terms Label": new FormControl(""),
        //   "Last Payment Date": new FormControl(""),
        //   "Notes": new FormControl(""),
        //   "Terms & Conditions": new FormControl(""),
        //   "Subject": new FormControl(""),
        //   "LateFee Name": new FormControl(""),
        //   "LateFee Type": new FormControl(""),
        //   "LateFee Rate": new FormControl(""),
        //   "LateFee Amount": new FormControl(""),
        //   "LateFee Frequency": new FormControl(""),
        //   "WriteOff Date": new FormControl(""),
        //   "WriteOff Exchange Rate": new FormControl(""),
        //   "WriteOff Amount": new FormControl(""),
        //   "Recurrence Name": new FormControl(""),
        //   "PayPal": new FormControl(""),
        //   "Authorize.Net": new FormControl(""),
        //   "Google Checkout": new FormControl(""),
        //   "Payflow Pro": new FormControl(""),
        //   "Stripe": new FormControl(""),
        //   "2Checkout": new FormControl(""),
        //   "Braintree": new FormControl(""),
        //   "Forte": new FormControl(""),
        //   "WorldPay": new FormControl(""),
        //   "Payments Pro": new FormControl(""),
        //   "Square": new FormControl(""),
        //   "WePay": new FormControl(""),
        //   "Razorpay": new FormControl(""),
        //   "GoCardless": new FormControl(""),
        //   "Partial Payments": new FormControl(""),
        //   "Billing Address": new FormControl(""),
        //   "Billing City": new FormControl(""),
        //   "Billing State": new FormControl(""),
        //   "Billing Country": new FormControl(""),
        //   "Billing Code": new FormControl(""),
        //   "Billing Fax": new FormControl(""),
        //   "Billing Phone": new FormControl(""),
        //   "Shipping Address": new FormControl(""),
        //   "Shipping City": new FormControl(""),
        //   "Shipping State": new FormControl(""),
        //   "Shipping Country": new FormControl(""),
        //   "Shipping Code": new FormControl(""),
        //   "Shipping Fax": new FormControl(""),
        //   "Shipping Phone Number": new FormControl(""),
        // })
        this.readItems();
        this.buildForm();
    }
    ionViewWillEnter() {
        this.getCsvData();
    }
    updateInvoice() {
        //    this.invoiceData["Invoice Date"] = this.createInvoiceForm.value["Invoice Date"];
        //  this.reimburshForm.value['Total'] = this.totalPrice;
        this.invoiceDetail.Total = this.reimburshForm.value['Total'];
        console.log(this.invoiceDetail['id'], this.uid, this.email, this.reimburshForm.value);
        this.firebaseService.updateInvoices(this.invoiceDetail['id'], this.uid, this.email, this.reimburshForm.value).then(() => {
            this.dismissModal();
        });
    }
    dismissModal() {
        //  this.modalController.dismiss();
        this.navCtrl.navigateBack('/firebase/invoices');
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
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__('p', 'pt');
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
            "Estimate Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Estimate Date"]),
            "Estimate ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Estimate ID"]),
            "Estimate Number": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Estimate Number"]),
            "Estimate Status": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Customer ID"]),
            "Customer ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Customer ID"]),
            "Expiry Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Expiry Date"]),
            "PurchaseOrder": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail.PurchaseOrder),
            "Currency Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Currency Code"]),
            "Exchange Rate": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Exchange Rate"]),
            "Discount Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Discount Type"]),
            "Is Discount Before Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Is Discount Before Tax"]),
            "Entity Discount Percent": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Entity Discount Percent"]),
            "Is Inclusive Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Is Inclusive Tax"]),
            "SubTotal": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail.SubTotal),
            "Total": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail.Total),
            "Adjustment": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail.Adjustment),
            "Notes": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail.Notes),
            'Terms': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail.Terms),
            "Terms & Conditions": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Terms & Conditions"]),
            "Customer Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Customer Name"]),
            "Project Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Project Name"]),
            // orderNumber: this.formBuilder.control(null),
            "Project ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Project ID"]),
            // salesPerson: this.formBuilder.control(null),
            "Sales person": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Sales person"]),
            "Billing Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Billing Address"]),
            "Billing City": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Billing City"]),
            "Billing State": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Billing State"]),
            "Billing Country": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Billing Country"]),
            "Billing Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Billing Code"]),
            "Billing Fax": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Billing Fax"]),
            "Template Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Template Name"]),
            "Adjustment Description": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Adjustment Description"]),
            "Shipping Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Shipping Address"]),
            "Shipping City": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Shipping City"]),
            "Shipping State": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Shipping State"]),
            "Shipping Country": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Shipping Country"]),
            "Shipping Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Shipping Code"]),
            "Shipping Fax": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Shipping Fax"]),
            //   "Source": new FormControl(this.invoiceDetail.Source),
            "Reference ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Reference ID"]),
            "Last Sync Time": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Last Sync Time"]),
            "Shipping Charge": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Shipping Charge"]),
            "Shipping Charge Tax ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Shipping Charge Tax ID"]),
            "Shipping Charge Tax Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Shipping Charge Tax Amount"]),
            "Shipping Charge Tax Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Shipping Charge Tax Name"]),
            "Shipping Charge Tax %": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Shipping Charge Tax %"]),
            "Shipping Charge Tax Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Shipping Charge Tax Type"]),
            "Item Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Item Name"]),
            "Item Desc": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Item Desc"]),
            "Quantity": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail.Quantity),
            "Discount": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail.Discount),
            "Discount Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Discount Amount"]),
            "Item Tax Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Item Tax Amount"]),
            "Item Total": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Item Total"]),
            // "Account": new FormControl(this.invoiceDetail.Account),
            //  "SKU": new FormControl(this.invoiceDetail.SKU),
            "Usage unit": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Usage unit"]),
            "Item Price": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Item Price"]),
            "Tax ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Tax ID"]),
            "Item Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Item Total"]),
            "Item Tax %": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Item Tax %"]),
            "Item Tax Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Item Tax Type"]),
            // this one would be the first item in the group array
            salesList: this.formBuilder.array(this.invoiceDetail.salesList.map(contact => this.createSalesList(contact)))
            // salesList: this.formBuilder.array([
            //   this.formBuilder.group({
            //     quantity: this.formBuilder.control(null),
            //     Rate: this.formBuilder.control(null),
            //     amount: this.formBuilder.control(null),
            //     "Description": this.formBuilder.control(null),
            //     "Item Name": this.formBuilder.control(null),
            //     }),
            // ]),
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
        //   this.totalPrice = this.returnSum();
        this.invoiceDetail.Total = this.returnSum();
        // try this.totalPrice => this.invoiceDetail.Total in the morning
        console.log(this.invoiceDetail.Total);
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
        // this.totalPrice = this.returnSum();
        this.invoiceDetail.Total = this.returnSum();
        console.log(this.invoiceDetail.Total);
    }
    returnProduct(a, b) {
        return a * b;
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
    // returnSum(a: number, b: number) {
    //   return a + b
    // }
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
                //   console.log(parsedData);
                //  console.log(parsedData.data.splice(0, 1)[0]);
                this.headerRow = parsedData.data.splice(0, 1)[0];
                console.log(this.headerRow);
            }
        });
        // console.log(res, this.csvData);
    }
    exportCSV() {
        let csv = this.papa.unparse({
            fields: this.headerRow,
            data: this.csvData
        });
        this.csv = csv;
        //  console.log('header row: ', this.headerRow);
        //  console.log('csv: ', this.csvData);
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
        // console.log(this.csv);
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
        // console.log(this.csv, csv.data);
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
        // let formGroup: FormGroup = this.formBuilder.group({
        //   //   itemName: this.formBuilder.control(null),
        //   //   itemDetail: this.formBuilder.control(null),
        //   quantity: this.formBuilder.control(1),
        //   Rate: this.formBuilder.control(value['Rate']),
        //   // tax: this.formBuilder.control(null),
        //   amount: this.formBuilder.control(1 * value['Rate']),
        //   "Description": this.formBuilder.control(value['Description']),
        //   // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
        //   "Item Name": this.formBuilder.control(value['Item Name']),
        //   // "Last Sync Time": this.formBuilder.control(this.itemSelected["Last Sync Time"]),
        //   // "Product Type": this.formBuilder.control(this.itemSelected["Product Type"]),
        //   // "Rate": this.formBuilder.control(this.itemSelected.Rate),
        //   // "Reference ID": this.formBuilder.control(this.itemSelected["Reference ID"]),
        //   // "Source": this.formBuilder.control(this.itemSelected.Source),
        //   // "Status": this.formBuilder.control(this.itemSelected.Status),
        //   // "Tax1 Name": this.formBuilder.control(this.itemSelected["Tax1 Name"]),
        //   // "Tax1 Percentage": this.formBuilder.control(this.itemSelected["Tax1 Percentage"]),
        //   // "Tax1 Type": this.formBuilder.control(this.itemSelected["Tax1 Type"]),
        //   // "Usage unit": this.formBuilder.control(this.itemSelected["Usage unit"]),
        //   // "id": this.formBuilder.control(this.itemSelected['id']),
        // });
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
            quantity: this.formBuilder.control(1),
            Rate: this.formBuilder.control(this.value['Rate']),
            // tax: this.formBuilder.control(null),
            amount: this.formBuilder.control(null),
            "Description": this.formBuilder.control(null),
            // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
            "Item Name": this.formBuilder.control(this.value['Item Name']),
        });
        this.salesListArray.push(formGroup);
        this.salesListArray = this.reimburshForm.get('salesList');
        console.log(this.salesListArray.value);
    }
    onCreateInventoryItemPage() {
    }
    removeSalesListItem(index, value) {
        console.log(index, value, value.amount);
        //  this.reimburshForm.value.salesList.splice(index, 1);
        console.log(this.reimburshForm.value.salesList);
        this.salesListArray.controls.forEach(element => {
            console.log(element.value);
            if (element.value === value) {
                console.log(element.value);
                this.salesListArray.controls.splice(index, 1);
            }
        });
        this.invoiceDetail.Total -= value.amount;
        console.log(this.invoiceDetail.Total);
    }
};
UpdatePage.ctorParameters = () => [
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
    { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__["Papa"] }
];
UpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-update',
        template: __webpack_require__(/*! raw-loader!./update.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/invoices/update/update.page.html"),
        styles: [__webpack_require__(/*! ./update.page.scss */ "./src/app/firebase/invoices/update/update.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
        ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__["Papa"]])
], UpdatePage);

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
//# sourceMappingURL=firebase-invoices-update-update-module-es2015.js.map