(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-quotes-update-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/quotes/update/update.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/quotes/update/update.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<ion-content>\n    <ion-item-divider sticky>\n        <img class=\"avator\" src=\"./../../../../assets/images/home_categories/estimate.svg\" alt=\"\" />\n        <ion-title>Update Estimate {{estimatesDetail.id}} </ion-title>\n        <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n    </ion-item-divider>\n\n    <!-- <app-rating-input *ngIf=\"!contacts\"></app-rating-input> -->\n\n    <div class=\"testbox\">\n        <form [formGroup]=\"reimburshForm\" (ngSubmit)=\"updateEstimate()\" class=\"form-validate form-horizontal\"\n            novalidate=\"\">\n            <!-- START panel-->\n            <div class=\"panel-body\">\n                <fieldset>\n                    <legend>Customer Name</legend>\n                    <p>\n                        <ion-skeleton-text *ngIf=\"!contacts\" animated style=\"width: 100%; height: 25px;\">\n                        </ion-skeleton-text>\n\n                        <select *ngIf=\"contacts\" class=\"form-control\" formControlName=\"Customer Name\">\n                            <option *ngFor=\"let i of contacts\" value=\"{{i['Customer Name']}}\">\n                                {{i['Customer Name']}}\n                            </option>\n                        </select>\n                    </p>\n                </fieldset>\n                <!-- Invoice number -->\n                <fieldset>\n                    <legend>Esitmate Number</legend>\n                    <p>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"Estimate Number\"\n                            placeholder=\"Estimate Number\" />\n                    </p>\n\n                </fieldset>\n                <!-- Order number -->\n                <fieldset>\n                    <legend>Order Number</legend>\n                    <p>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"Project ID\"\n                            placeholder=\"Order Number\" />\n                    </p>\n                </fieldset>\n                <!-- Invoice Date -->\n                <fieldset>\n                    <legend>Estimate Date</legend>\n                    <p>\n                        <ion-datetime class=\"datetime-text\" mode=\"ios\" value=\"\" formControlName=\"Estimate Date\">\n                        </ion-datetime>\n                    </p>\n                </fieldset>\n                <!-- Termis -->\n                <fieldset>\n                    <legend>Terms</legend>\n                    <p>\n                        <input type=\"text\" formControlName=\"Terms\">\n                    </p>\n\n                </fieldset>\n                <!-- Due Date -->\n                <fieldset>\n                    <legend>Due Date/ Expiry Date</legend>\n                    <p>\n                        <ion-datetime class=\"datetime-text\" mode=\"ios\" value=\"\" formControlName=\"Expiry Date\">\n                        </ion-datetime>\n                    </p>\n\n                </fieldset>\n                <!-- Sales Person -->\n                <fieldset>\n                    <legend>Salesperson</legend>\n                    <p> <input type=\"text\" formControlName=\"Sales person\"></p>\n\n                </fieldset>\n                <!--Item List -->\n\n                <fieldset>\n                    <!-- <ion-button class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\"\n                        (click)=\"onPush(iList)\">\n                        {{iList['Item Name']}} {{iList['Rate']}}\n                    </ion-button> -->\n\n                    <ion-chip color=\"secondary\" *ngIf=\"customeditemsList?.length === 0\"\n                        (click)=\"onCreateInventoryItemPage()\">No Items Yet Go and\n                        Add One Now!\n                    </ion-chip>\n\n                    <ion-chip class=\"badge\" color=\"theme\" *ngFor=\"let iList of customeditemsList\"\n                        (click)=\"onPush(iList)\">\n                        {{iList['Item Name']}} {{iList['Rate']}}\n                    </ion-chip>\n                </fieldset>\n\n                <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"inputEnabled = !inputEnabled\">\n                    <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>\n                    Add another line\n                </ion-button> -->\n\n                <!--Sales List -->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <table formArrayName=\"salesList\">\n                            <tr>\n                                <th>Item Name</th>\n                                <th>Item Detail</th>\n                                <th>Quantity</th>\n                                <th>Rate</th>\n                                <!-- <th>Tax</th> -->\n                                <th>Amount</th>\n                            </tr>\n                            <!--Input controls -->\n                            <!-- {{estimatesDetail | json}} -->\n                            <!-- <tr *ngFor=\"let y of estimatesDetail.salesList | slice: 1; let j = index\">\n\n                                <td>\n                                    <div class=\"col-sm-6\">{{y['Item Name']}}\n                                    </div>\n                                </td>\n\n                                <td>\n                                    <div class=\"col-sm-6\">{{y.Description}}\n                                    </div>\n                                </td>\n\n                                <td>\n                                    <div class=\"col-sm-6\">{{y.Rate}}\n                                    </div>\n                                </td>\n\n                                <td>\n                                    <div class=\"col-sm-6\">{{y.quantity}}\n                                    </div>\n                                </td>\n\n                                <td>\n                                    <div class=\"col-sm-6\">{{returnProduct(y.quantity, y.Rate)}}\n                                    </div>\n                                </td>\n                            </tr> -->\n\n                            <tr *ngFor=\"let saleList of salesListArray.controls;let i = index\" [formGroupName]=\"i\">\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"Item Name\"\n                                            formControlName=\"Item Name\" />\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <ion-textarea class=\"item_textarea\" placeholder=\"Item Detail\"\n                                            formControlName=\"Description\"></ion-textarea>\n                                        <!-- <input class=\"form-control\" type=\"text\" placeholder=\"Item Detail\"\n                                            formControlName=\"Description\" /> -->\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\" placeholder=\"\"\n                                            formControlName=\"quantity\"\n                                            (input)=\"onQtyChange($event, saleList.value.Rate, saleList)\" />\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\" placeholder=\"0.00\"\n                                            formControlName=\"Rate\"\n                                            (input)=\"onPriceChange($event, saleList.value.quantity, saleList)\" />\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <div class=\"col-sm-6\">\n                                        <input type=\"number\" readonly\n                                            value=\"{{returnProduct(saleList.value.Rate, saleList.value.quantity)}}\">\n\n                                    </div>\n                                </td>\n\n                                <td *ngIf=\"i > 0\">\n                                    <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"addSalesListItem()\">\n                                        <ion-icon name=\"copy-outline\"></ion-icon>\n                                    </ion-button> -->\n\n                                    <ion-button fill=\"clear\" (click)=\"removeSalesListItem(i)\">\n                                        <ion-icon color=\"secondary\" name=\"trash-bin\"></ion-icon>\n                                    </ion-button>\n                                </td>\n\n                            </tr>\n                        </table>\n                    </div>\n\n                    <div style=\"padding-top: 20px; float: right;\">\n\n                        <ion-chip style=\"background: white; color: var(--ion-color-theme);\">\n\n                            Total ($): &nbsp;&nbsp;&nbsp;\n                            <span style=\"color: var(--ion-color-theme);\" *ngIf=\"!totalPrice\">\n                                {{estimatesDetail.Total}}\n                            </span>\n\n                            <span style=\"color: var(--ion-color-theme);\" *ngIf=\"totalPrice != 0\">\n                                {{totalPrice}}\n                            </span>\n\n                            <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Total\" placeholder=\"{{totalPrice}}\" />\n               Total: {{totalPrice || 0}} -->\n                        </ion-chip>\n                    </div>\n                </fieldset>\n\n\n                <!-- <ion-button color=\"theme\" fill=\"clear\" (click)=\"addSalesListItem()\">Add another line</ion-button> -->\n                <!-- Notes -->\n                <fieldset>\n                    <legend>Custom Notes</legend>\n                    <p>\n                        <ion-textarea rows=\"6\" class=\"form-control\" formControlName=\"Notes\"\n                            placeholder=\"Will be displayed on the estimate\"></ion-textarea>\n                    </p>\n\n                </fieldset>\n                <!-- Terms and conditions -->\n                <fieldset>\n                    <legend>Terms & Conditions</legend>\n                    <p>\n                        <ion-textarea rows=\"10\" class=\"form-control\" formControlName=\"Terms & Conditions\"\n                            placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\">\n                        </ion-textarea>\n                    </p>\n\n                </fieldset>\n            </div>\n\n            <ion-button size=\"large\" expand=\"full\" type=\"submit\" [disabled]=\"!totalPrice\" color=\"theme\">Save\n            </ion-button>\n            <br />\n            <!-- <ion-button color=\"dark\" (click)='submitForm(reimburshForm.value)'>Save and Send</ion-button> -->\n        </form>\n    </div>\n</ion-content>"

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

module.exports = "body {\n  padding: 3rem;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nth, td {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  vertical-align: baseline;\n}\n\nth {\n  padding-right: 2rem;\n  text-align: left;\n}\n\nlabel {\n  display: block;\n}\n\nlabel + label {\n  margin-top: 0.5rem;\n}\n\nhr {\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n}\n\n.testbox {\n  padding: 20px;\n}\n\n.item_textarea {\n  width: 335px;\n  padding-right: 15px;\n}\n\ninput, textarea, select {\n  width: calc(100% - 10px);\n  padding: 5px !important;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  vertical-align: middle;\n  background: transparent;\n}\n\ntextarea {\n  width: calc(100% - 30px) !important;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  padding: 5px !important;\n  border: 1px solid #ccc;\n  background: transparent;\n  box-shadow: 2px 2px 8px 2px var(--ion-color-theme);\n}\n\n.badge {\n  background: white;\n}\n\n.badge:hover {\n  box-shadow: 2px 2px 8px 2px var(--ion-color-theme);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9xdW90ZXMvdXBkYXRlL3VwZGF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL3F1b3Rlcy91cGRhdGUvdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFLQyxhQUFBO0FDSEQ7O0FETUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNIQTs7QURNQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7RUFDSCxzQkFBQTtFQUNHLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0hKOztBRE1BO0VBQ0MsbUNBQUE7QUNIRDs7QURPQTs7O0VBR0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFFRCx1QkFBQTtFQUNJLGtEQUFBO0FDTEo7O0FEUUE7RUFDQyxpQkFBQTtBQ0xEOztBRFFBO0VBQ0ksa0RBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL3F1b3Rlcy91cGRhdGUvdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYm9keSB7XG4gIHBhZGRpbmc6IDNyZW07XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGgsIHRkIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnRoIHtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmxhYmVsICsgbGFiZWwge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLnRlc3Rib3gge1xuXHQvLyBkaXNwbGF5OiBmbGV4O1xuXHQvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Ly8gYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ly8gaGVpZ2h0OiBpbmhlcml0O1xuXHRwYWRkaW5nOiAyMHB4O1xufVxuXG4uaXRlbV90ZXh0YXJlYSB7XG53aWR0aDogMzM1cHg7XG5wYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG50ZXh0YXJlYSB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KSAhaW1wb3J0YW50O1xufVxuXG5cbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6aG92ZXIsXG5zZWxlY3Q6aG92ZXIge1xuXHRvdXRsaW5lOiBub25lO1xuXHRwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcbi8vXHRiYWNrZ3JvdW5kOiAjZTZlZWY3O1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMnB4IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59XG5cbi5iYWRnZSB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYmFkZ2U6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDJweCB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufSIsImJvZHkge1xuICBwYWRkaW5nOiAzcmVtO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRoLCB0ZCB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG50aCB7XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmxhYmVsICsgbGFiZWwge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLnRlc3Rib3gge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaXRlbV90ZXh0YXJlYSB7XG4gIHdpZHRoOiAzMzVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpob3ZlcixcbnRleHRhcmVhOmhvdmVyLFxuc2VsZWN0OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAycHggdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbn1cblxuLmJhZGdlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5iYWRnZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDJweCB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufSJdfQ== */"

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
    returnProduct(a, b) {
        return a * b;
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
            quantity: this.formBuilder.control(0),
            Rate: this.formBuilder.control(this.value['Rate']),
            amount: this.formBuilder.control(this.value['amount']),
            "Description": this.formBuilder.control(this.value['Description']),
            "Item Name": this.formBuilder.control(this.value['Item Name']),
        });
        this.salesListArray.push(formGroup);
        this.salesListArray = this.reimburshForm.get('salesList');
        console.log(this.salesListArray.value);
    }
    onCreateInventoryItemPage() {
        this.navCtrl.navigateForward('/firebase/create%23inventory');
    }
    removeSalesListItem(index) {
        console.log(index);
        this.salesListArray.removeAt(index);
        this.salesListArray = this.reimburshForm.get('salesList');
        console.log(this.salesListArray.value);
        this.totalPrice = this.returnSum();
        console.log(this.totalPrice);
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