(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-invoices-update-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/invoices/update/update.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/invoices/update/update.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-header></app-header>\n\n <ion-content>\n   <ion-item-divider sticky>\n     <!-- <ion-thumbnail class=\"\" slot=\"start\"> -->\n     <img class=\"avator\" src=\"./../../../../assets/images/home_categories/invoice.svg\" alt=\"\">\n     <!-- </ion-thumbnail> -->\n     <ion-title>Update Invoice | {{invoiceDetail.id}}</ion-title>\n     <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n       <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n     </ion-button>\n   </ion-item-divider>\n   <!-- <ion-progress-bar color=\"theme\" type=\"indeterminate\"></ion-progress-bar> -->\n\n   <!-- <app-rating-input *ngIf=\"!contacts\"></app-rating-input> -->\n\n   <div class=\"testbox\">\n     <form [formGroup]=\"reimburshForm\" (ngSubmit)=\"updateInvoice()\" class=\"form-validate form-horizontal\" novalidate=\"\">\n       <!-- START panel-->\n       <div class=\"panel-body\">\n         <fieldset>\n           <legend>Customer Name:</legend>\n           <p>\n             <ion-skeleton-text *ngIf=\"!contacts\" animated style=\"width: 100%; height: 25px;\">\n             </ion-skeleton-text>\n\n             <select *ngIf=\"contacts\" class=\"form-control\" formControlName=\"Customer Name\">\n               <option *ngFor=\"let i of contacts\" value=\"{{i['Customer Name']}}\">\n                 {{i['Customer Name']}}\n               </option>\n             </select>\n           </p>\n\n         </fieldset>\n         <!-- Invoice number -->\n         <fieldset>\n           <legend>Estimate Number:</legend>\n           <p>\n             <input class=\"form-control\" type=\"text\" formControlName=\"Estimate Number\" placeholder=\"Estimate Number\" />\n           </p>\n\n         </fieldset>\n         <!-- Order number -->\n         <fieldset>\n           <legend>Order Number:</legend>\n           <p>\n             <input class=\"form-control\" type=\"text\" formControlName=\"Project ID\" placeholder=\"Order Number\" />\n           </p>\n         </fieldset>\n         <!-- Invoice Date -->\n         <fieldset>\n           <legend>Invoice Date: </legend>\n           <p>\n             <ion-datetime (ionChange)=\"onEstimateDate($event)\" class=\"datetime-text\" mode=\"ios\" value=\"es_d\"\n               formControlName=\"Estimate Date\">\n             </ion-datetime>\n           </p>\n\n         </fieldset>\n         <!-- Termis -->\n         <fieldset>\n           <legend>Terms:</legend>\n           <p>\n             <input (ngModelChange)=\"onEstimateTerms($event)\" type=\"number\" formControlName=\"Terms\">\n           </p>\n         </fieldset>\n         <!-- Due Date -->\n         <fieldset>\n           <legend>Due Date/Expiry Date:</legend>\n           <p>\n             <ion-datetime class=\"datetime-text\" mode=\"ios\" value=\"{{e_d}}\" formControlName=\"Expiry Date\">\n             </ion-datetime>\n           </p>\n         </fieldset>\n         <!-- Sales Person -->\n         <fieldset>\n           <legend>Salesperson:</legend>\n           <p>\n             <input type=\"text\" formControlName=\"Sales person\">\n           </p>\n\n         </fieldset>\n         <!--Item List -->\n\n         <fieldset>\n\n           <!-- <ion-button class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\"\n                        (click)=\"onPush(iList)\">\n                        {{iList['Item Name']}} {{iList['Rate']}}\n                    </ion-button> -->\n\n           <ion-chip color=\"secondary\" *ngIf=\"customeditemsList?.length === 0\" (click)=\"onCreateInventoryItemPage()\">\n             No Items Yet Go and\n             Add One Now!\n           </ion-chip>\n\n           <ion-chip class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\" (click)=\"onPush(iList)\">\n             {{iList['Item Name']}} {{iList['Rate']}}\n           </ion-chip>\n         </fieldset>\n\n         <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"inputEnabled = !inputEnabled\">\n                    <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>\n                    Add another line\n                </ion-button> -->\n\n         <!--Sales List -->\n         <fieldset>\n           <div class=\"form-group\">\n             <table formArrayName=\"salesList\">\n               <tr>\n                 <th>Item Name</th>\n                 <th>Item Detail</th>\n                 <th>Quantity</th>\n                 <th>Rate</th>\n                 <!-- <th>Tax</th> -->\n                 <th>Amount</th>\n               </tr>\n               <!--Input controls -->\n               <!-- {{estimatesDetail | json}} -->\n               <!-- <tr *ngFor=\"let y of invoiceDetail.salesList | slice: 1; let j = index\">\n                 <td>\n                   <div class=\"col-sm-6\">{{y['Item Name']}}\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">{{y.Description}}\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">{{y.Rate}}\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">{{y.quantity}}\n                   </div>\n                 </td>\n\n                 <td>\n                   <div class=\"col-sm-6\">{{returnProduct(y.quantity, y.Rate)}}\n                   </div>\n                 </td>\n               </tr> -->\n\n               <tr *ngFor=\"let saleList of salesListArray.controls;let i = index\" [formGroupName]=\"i\">\n\n                 <td *ngIf=\"i > 0\">\n                   <div class=\"col-sm-6\">\n                     <input class=\"form-control\" type=\"text\" placeholder=\"Item Name\" formControlName=\"Item Name\" />\n                   </div>\n                 </td>\n\n                 <td *ngIf=\"i > 0\">\n                   <div class=\"col-sm-6\">\n                     <ion-textarea class=\"form-control\" placeholder=\"Item Detail\" formControlName=\"Description\">\n                     </ion-textarea>\n                     <!-- <input class=\"form-control\" type=\"text\" placeholder=\"Item Detail\" formControlName=\"Description\" /> -->\n                   </div>\n                 </td>\n\n                 <td *ngIf=\"i > 0\">\n                   <div class=\"col-sm-6\">\n                     <input class=\"form-control\" type=\"number\" placeholder=\"\" formControlName=\"quantity\"\n                       (input)=\"onQtyChange($event, saleList.value.Rate, saleList)\" />\n                   </div>\n                 </td>\n\n                 <td *ngIf=\"i > 0\">\n                   <div class=\"col-sm-6\">\n                     <input class=\"form-control\" type=\"number\" placeholder=\"0.00\" formControlName=\"Rate\"\n                       (input)=\"onPriceChange($event, saleList.value.quantity, saleList)\" />\n                   </div>\n                 </td>\n\n                 <td *ngIf=\"i > 0\">\n                   <div class=\"col-sm-6\">\n                     <input type=\"number\" readonly\n                       value=\"{{returnProduct(saleList.value.Rate, saleList.value.quantity)}}\">\n\n                   </div>\n                 </td>\n\n\n                 <td *ngIf=\"i > 0\">\n                   <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"addSalesListItem()\">\n                     <ion-icon name=\"copy-outline\"></ion-icon>\n                   </ion-button> -->\n\n                   <ion-button fill=\"clear\" (click)=\"removeSalesListItem(i, saleList.value)\">\n                     <ion-icon color=\"secondary\" name=\"trash-bin\"></ion-icon>\n                   </ion-button>\n                 </td>\n\n\n               </tr>\n             </table>\n           </div>\n           <!-- <ul>\n               <li *ngFor=\"let x of salesListArray.value\">\n                {{x.quantity}} x {{x.rate}} => {{returnProduct(x.quantity, x.rate)}}\n               </li>\n               </ul> -->\n           <div style=\"padding-top: 20px; float: right;\">\n\n             <ion-chip style=\"font-size: larger; color: var(--ion-color-theme);\">\n\n               Total ($): &nbsp;&nbsp;&nbsp;\n               <span style=\"color: var(--ion-color-theme);\">\n                 {{invoiceDetail.Total}}\n               </span>\n\n               <!-- <span style=\"color: var(--ion-color-theme);\" *ngIf=\"totalPrice != 0\">\n                 {{totalPrice}}\n               </span> -->\n\n               <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Total\" placeholder=\"{{totalPrice}}\" />\n               Total: {{totalPrice || 0}} -->\n             </ion-chip>\n           </div>\n         </fieldset>\n\n         <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"addSalesListItem()\">Add another line</ion-button> -->\n         <!-- Notes -->\n         <fieldset>\n           <legend>Custom Notes</legend>\n           <p>\n             <ion-textarea class=\"form-control\" type=\"text\" formControlName=\"Notes\"\n               placeholder=\"Will be displayed on the estimate\"></ion-textarea>\n           </p>\n\n         </fieldset>\n         <!-- Terms and conditions -->\n         <fieldset>\n           <legend>Terms & Conditions</legend>\n           <p>\n             <ion-textarea class=\"form-control\" type=\"text\" formControlName=\"Terms & Conditions\"\n               placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\">\n             </ion-textarea>\n           </p>\n\n         </fieldset>\n       </div>\n       <!-- {{reimburshForm.value | json}} -->\n\n       <ion-button type=\"submit\" color=\"theme\">Save</ion-button>\n       <br />\n       <!-- <ion-button color=\"dark\" (click)='submitForm(reimburshForm.value)'>Save and Send</ion-button> -->\n     </form>\n     <!-- <form [formGroup]=\"createInvoiceForm\" (ngSubmit)=\"updateInvoice()\">\n       <h4 style=\"color: #e54643;\">Customer Name<span>*</span></h4>\n       <div class=\"title-block\">\n         <select formControlName=\"Customer Name\">\n           <option value=\"Type\" selected>Select or Type to add</option>\n           <option value=\"Aaron\">Aaron</option>\n           <option value=\"Bob\">Bob</option>\n           <option value=\"Cindy\">Cindy</option>\n         </select>\n       </div>\n\n       <h4 style=\"color: #e54643;\">Invoice Number# <span>*</span> </h4>\n       <div class=\"title-block\">\n         <input type=\"text\" name=\"invoice\" formControlName=\"Invoice Number\" />\n       </div>\n\n       <h4>Invoice ID <span>*</span> </h4>\n       <div class=\"title-block\">\n         <input type=\"text\" name=\"order_number\" formControlName=\"Invoice ID\" />\n       </div>\n\n       <h4 style=\"color: #e54643;\">Invoice Date <span>*</span> </h4>\n       <div class=\"title-block\">\n         <input type=\"date\" id=\"start\" name=\"Invoice Date\" formControlName=\"Invoice Date\" />\n       </div>\n\n       <h4 style=\"color: #e54643;\">Payment Terms<span>*</span></h4>\n       <div class=\"title-block\">\n         <select formControlName=\"Payment Terms\">\n           <option value=\"Type\" selected></option>\n           <option value=\"net_15\">Net 15</option>\n           <option value=\"net_30\">Net 30</option>\n           <option value=\"net_45\">Net 45</option>\n           <option value=\"net_60\">Net 60</option>\n           <option value=\"due_end_of_the_month\">Due end of the month</option>\n           <option value=\"due_end_of_the_next_month\">Due end of the next month</option>\n           <option value=\"due_on_receipt\">Due on Receipt</option>\n         </select>\n       </div>\n\n       <h4 style=\"color: #e54643;\">Sales person<span>*</span></h4>\n       <div class=\"title-block\">\n         <select formControlName=\"Sales person\">\n           <option value=\"Type\" selected>Select or Type to add</option>\n           <option value=\"Phyllis\">Phyllis</option>\n           <option value=\"Phoebe\">Phoebe</option>\n           <option value=\"Ryan\">Ryan</option>\n           <option value=\"Staffen\">Staffen</option>\n           <option value=\"Dan\">Dan</option>\n           <option value=\"Jack\">Jack</option>\n         </select>\n       </div>\n\n       <h4>Subject / Project Name</h4>\n       <div class=\"\">\n         <textarea rows=\"1\" placeholder=\"Let your customer know what this Invoice is for\"\n           formControlName=\"Project Name\"></textarea>\n       </div>\n\n       <h4>Notes</h4>\n       <div class=\"\">\n         <textarea rows=\"1\" formControlName=\"Notes\"></textarea>\n       </div>\n\n       <div class=\"btn-block\">\n         <button type=\"submit\">Save</button>\n       </div>\n     </form> -->\n   </div>\n </ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update.page */ "./src/app/firebase/invoices/update/update.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _update_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePage"]
    }
];
var UpdatePageModule = /** @class */ (function () {
    function UpdatePageModule() {
    }
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
    return UpdatePageModule;
}());



/***/ }),

/***/ "./src/app/firebase/invoices/update/update.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/firebase/invoices/update/update.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding: 3rem;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nth, td {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  vertical-align: baseline;\n}\n\nth {\n  padding-right: 2rem;\n  text-align: left;\n}\n\nlabel {\n  display: block;\n}\n\nlabel + label {\n  margin-top: 0.5rem;\n}\n\nhr {\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n}\n\n.testbox {\n  padding: 20px;\n}\n\n.item_textarea {\n  width: 335px;\n  padding-right: 15px;\n}\n\ninput, textarea, select {\n  width: calc(100% - 10px);\n  padding: 5px !important;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  vertical-align: middle;\n  background: transparent;\n}\n\ntextarea {\n  width: calc(100% - 30px) !important;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  padding: 5px !important;\n  border: 1px solid #ccc;\n  background: transparent;\n  box-shadow: 2px 2px 8px 2px var(--ion-color-theme);\n}\n\n.badge {\n  background: white;\n}\n\n.badge:hover {\n  box-shadow: 2px 2px 8px 2px var(--ion-color-theme);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9pbnZvaWNlcy91cGRhdGUvdXBkYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvaW52b2ljZXMvdXBkYXRlL3VwZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBS0MsYUFBQTtBQ0hEOztBRE1BO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDSEE7O0FETUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0gsc0JBQUE7RUFDRyxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNISjs7QURNQTtFQUNDLG1DQUFBO0FDSEQ7O0FET0E7OztFQUdDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBRUQsdUJBQUE7RUFDSSxrREFBQTtBQ0xKOztBRFFBO0VBQ0MsaUJBQUE7QUNMRDs7QURRQTtFQUNJLGtEQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9pbnZvaWNlcy91cGRhdGUvdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYm9keSB7XG4gIHBhZGRpbmc6IDNyZW07XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGgsIHRkIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnRoIHtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmxhYmVsICsgbGFiZWwge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLnRlc3Rib3gge1xuXHQvLyBkaXNwbGF5OiBmbGV4O1xuXHQvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Ly8gYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ly8gaGVpZ2h0OiBpbmhlcml0O1xuXHRwYWRkaW5nOiAyMHB4O1xufVxuXG4uaXRlbV90ZXh0YXJlYSB7XG53aWR0aDogMzM1cHg7XG5wYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG50ZXh0YXJlYSB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KSAhaW1wb3J0YW50O1xufVxuXG5cbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6aG92ZXIsXG5zZWxlY3Q6aG92ZXIge1xuXHRvdXRsaW5lOiBub25lO1xuXHRwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcbi8vXHRiYWNrZ3JvdW5kOiAjZTZlZWY3O1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMnB4IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59XG5cbi5iYWRnZSB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYmFkZ2U6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDJweCB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufSIsImJvZHkge1xuICBwYWRkaW5nOiAzcmVtO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRoLCB0ZCB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG50aCB7XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmxhYmVsICsgbGFiZWwge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLnRlc3Rib3gge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaXRlbV90ZXh0YXJlYSB7XG4gIHdpZHRoOiAzMzVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpob3ZlcixcbnRleHRhcmVhOmhvdmVyLFxuc2VsZWN0OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAycHggdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbn1cblxuLmJhZGdlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5iYWRnZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDJweCB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


// import { SelectUserImageModal } from "../select-image/select-user-image.modal";











var UpdatePage = /** @class */ (function () {
    //////////////////////////
    function UpdatePage(authService, navCtrl, firebaseService, route, formBuilder, http, papa) {
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
    UpdatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (res) {
            var value = JSON.parse(res.data);
            console.log(value);
            _this.invoiceDetail = value;
        });
        this.es_d = new Date().toISOString();
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
    };
    UpdatePage.prototype.ionViewWillEnter = function () {
        this.getCsvData();
        this.invoiceDetail.Total = this.totalPrice;
        this.invoiceDetail.Total = this.reimburshForm.value['Total'];
        console.log(this.totalPrice, this.invoiceDetail.Total, this.reimburshForm.value['Total']);
    };
    UpdatePage.prototype.updateInvoice = function () {
        //    this.invoiceData["Invoice Date"] = this.createInvoiceForm.value["Invoice Date"];
        var _this = this;
        //  this.reimburshForm.value['Total'] = this.totalPrice;
        this.invoiceDetail.Total = this.totalPrice;
        this.invoiceDetail.Total = this.reimburshForm.value['Total'];
        console.log(this.totalPrice, this.invoiceDetail.Total, this.reimburshForm.value['Total']);
        console.log(this.invoiceDetail['id'], this.uid, this.email, this.reimburshForm.value);
        this.firebaseService.updateInvoices(this.invoiceDetail['id'], this.uid, this.email, this.reimburshForm.value).then(function () {
            _this.dismissModal();
        });
    };
    UpdatePage.prototype.dismissModal = function () {
        //  this.modalController.dismiss();
        this.navCtrl.navigateBack('/firebase/invoices');
    };
    UpdatePage.prototype.testTablePDF = function () {
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
    };
    UpdatePage.prototype.onEstimateDate = function (event) {
        console.log(event.detail.value);
        this.estimate_date = event.detail.value;
    };
    UpdatePage.prototype.onEstimateTerms = function (event) {
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
    UpdatePage.prototype.buildForm = function () {
        var _this = this;
        this.reimburshForm = this.formBuilder.group({
            "Estimate Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Estimate Date"]),
            "Estimate ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Estimate ID"]),
            "Estimate Number": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceDetail["Estimate Number"]),
            "Estimate Status": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('revised'),
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
            salesList: this.formBuilder.array(this.invoiceDetail.salesList.map(function (contact) { return _this.createSalesList(contact); }))
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
    };
    UpdatePage.prototype.createSalesList = function (contact) {
        return this.formBuilder.group({
            quantity: [contact.quantity],
            Rate: [contact.Rate],
            amount: [contact.amount],
            Description: [contact.Description],
            "Item Name": [contact['Item Name']],
        });
    };
    UpdatePage.prototype.onQtyChange = function (e, Rate, f) {
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
        //   this.totalPrice = this.returnSum();
        this.invoiceDetail.Total = this.returnSum();
        // try this.totalPrice => this.invoiceDetail.Total in the morning
        console.log(this.invoiceDetail.Total);
    };
    UpdatePage.prototype.onPriceChange = function (e, quantity, f) {
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
        // this.totalPrice = this.returnSum();
        this.invoiceDetail.Total = this.returnSum();
        console.log(this.invoiceDetail.Total);
    };
    UpdatePage.prototype.returnProduct = function (a, b) {
        return a * b;
    };
    UpdatePage.prototype.returnSum = function () {
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
    UpdatePage.prototype.jsonstringify = function (value) {
        return JSON.stringify(value);
    };
    // get preset customer list 
    UpdatePage.prototype.getCsvData = function () {
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
    UpdatePage.prototype.loadCSV = function () {
        var _this = this;
        console.log('load CSV');
        this.http.get(this.downloadURL, {
            responseType: 'text'
        }).subscribe(function (data) { return _this.extractData(data); }, function (err) { return console.log('error', err); });
    };
    UpdatePage.prototype.extractData = function (res) {
        var _this = this;
        var csvData = res || '';
        this.papa.parse(csvData, {
            complete: function (parsedData) {
                _this.csvData = parsedData.data;
                //   console.log(parsedData);
                //  console.log(parsedData.data.splice(0, 1)[0]);
                _this.headerRow = parsedData.data.splice(0, 1)[0];
                console.log(_this.headerRow);
            }
        });
        // console.log(res, this.csvData);
    };
    UpdatePage.prototype.exportCSV = function () {
        var csv = this.papa.unparse({
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
    };
    UpdatePage.prototype.convertCSVtoJSON = function () {
        // console.log(this.csv);
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
        // console.log(this.csv, csv.data);
        this.contacts = csv.data;
    };
    // end of get preset customer list
    // call items list data
    UpdatePage.prototype.readItems = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.readItems(this.uid, this.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (changes) {
            return changes.map(function (c) {
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: c.payload.doc.id }, c.payload.doc.data()));
            });
        })).subscribe(function (data) {
            _this.customeditemsList = data;
            console.log(_this.customeditemsList, _this.customeditemsList.length);
        });
    };
    UpdatePage.prototype.onPush = function (value) {
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
    };
    UpdatePage.prototype.addSalesListItem = function () {
        console.log(this.value, this.salesListArray.value);
        var formGroup = this.formBuilder.group({
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
    };
    UpdatePage.prototype.onCreateInventoryItemPage = function () {
    };
    UpdatePage.prototype.removeSalesListItem = function (index, value) {
        var _this = this;
        console.log(index, value, value.amount);
        //  this.reimburshForm.value.salesList.splice(index, 1);
        console.log(this.reimburshForm.value.salesList);
        this.salesListArray.controls.forEach(function (element) {
            console.log(element.value);
            if (element.value === value) {
                console.log(element.value);
                _this.salesListArray.controls.splice(index, 1);
            }
        });
        this.invoiceDetail.Total -= value.amount;
        console.log(this.invoiceDetail.Total);
    };
    UpdatePage.ctorParameters = function () { return [
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
        { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__["Papa"] }
    ]; };
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
    return UpdatePage;
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
//# sourceMappingURL=firebase-invoices-update-update-module-es5.js.map