(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-expenses-create-create-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/expenses/create/create.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/expenses/create/create.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-item-divider>\n    <img class=\"avator\" src=\"./../../../../assets/images/home_categories/estimate.svg\" alt=\"\" />\n    <ion-title>New Expenses</ion-title>\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n    </ion-button>\n\n  </ion-item-divider>\n\n  <!-- if contacts list does not show data -->\n  <!-- <app-rating-input *ngIf=\"!contacts\"></app-rating-input> -->\n\n\n  <div class=\"testbox\">\n\n    <form [formGroup]=\"reimburshForm\" (ngSubmit)=\"createEstimate()\" class=\"form-validate form-horizontal\" novalidate=\"\">\n      <!-- START panel-->\n      <div class=\"panel-body\">\n        <legend>New Expense</legend>\n        <fieldset>\n\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Customer Name:</label>\n            <div class=\"col-sm-6\">\n              <ion-skeleton-text *ngIf=\"!contacts\" animated style=\"background: lightgray; width: 100%; height: 25px;\">\n              </ion-skeleton-text>\n\n              <select *ngIf=\"contacts\" class=\"form-control\" formControlName=\"Customer Name\">\n                <option *ngFor=\"let i of contacts\" value=\"{{i['Customer Name']}}\">{{i['Customer Name']}}\n                </option>\n              </select>\n            </div>\n          </div>\n        </fieldset>\n        <!-- Invoice number -->\n        <!-- <fieldset>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Estimate Number:</label>\n            <div class=\"col-sm-6\">\n              <input class=\"form-control\" type=\"text\" formControlName=\"Estimate Number\" placeholder=\"Estimate Number\" />\n            </div>\n          </div>\n        </fieldset> -->\n        <!-- Category name -->\n        <fieldset>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Expense Category:</label>\n            <div class=\"col-sm-6\">\n              <select *ngIf=\"contacts\" class=\"form-control\" formControlName=\"Expense Category\">\n                <!-- <option *ngFor=\"let i of contacts\" value=\"{{i['Customer Name']}}\">{{i['Customer Name']}}\n                </option> -->\n                <option value=\"cost of goods sold\">Cost of goods sold</option>\n                <option value=\"selling and distribution expenses\">Selling and distribution expenses</option>\n                <option value=\"operating, general and administrative\">Operating, general and administrative</option>\n                <option value=\"salaries, wages, and benefits\">Salaries, wages, and benefits</option>\n                <option value=\"rent expense\">Rent expense</option>\n\n              </select>\n            </div>\n          </div>\n        </fieldset>\n        <!-- amount -->\n        <fieldset>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Expense Amount:</label>\n            <div class=\"col-sm-6\">\n              <input class=\"form-control\" type=\"number\" formControlName=\"Expense Amount\" placeholder=\"\" />\n            </div>\n          </div>\n        </fieldset>\n\n        <!-- Order number -->\n\n        <!-- Expense Date -->\n        <fieldset>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\" style=\"color: #e54643;\">Expense Date: </label>\n            <div class=\"col-sm-6\">\n              <ion-datetime (ionChange)=\"onEstimateDate($event)\" class=\"datetime-text\" mode=\"ios\" value=\"es_d\"\n                formControlName=\"Expense Date\">\n              </ion-datetime>\n              <!-- <input type=\"date\" formControlName=\"Estimate Date\" value=\"2018-07-22\" /> -->\n            </div>\n\n          </div>\n        </fieldset>\n\n\n        <!-- Notes -->\n        <fieldset>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Notes:</label>\n            <div class=\"col-sm-6\">\n              <ion-textarea rows=\"2\" class=\"form-control\" formControlName=\"Notes\"\n                placeholder=\"Will be displayed on the estimate\">\n              </ion-textarea>\n\n              <!-- <input class=\"form-control\" type=\"text\" formControlName=\"Notes\"\n                                placeholder=\"Will be displayed on the estimate\" /> -->\n            </div>\n          </div>\n        </fieldset>\n        <!-- Terms and conditions -->\n\n\n      </div>\n      <!-- \n            {{reimburshForm.value['Customer Name']}} -->\n      <!-- <ion-button (click)=\"returnSum()\">Calculate sum</ion-button> -->\n      <ion-button [disabled]=\"!reimburshForm.value['Customer Name']\" type=\"submit\" color=\"theme\">Save</ion-button>\n      <!-- <br />\n            <ion-button color=\"dark\" (click)=\"submitForm(reimburshForm.value)\">Save and Send</ion-button> -->\n    </form>\n  </div>\n</ion-content>\n<!-- <form [formGroup]=\"createEstimateForm\" (ngSubmit)=\"createEstimate()\">\n   <h4>Customer Name<span>*</span></h4>\n   <select formControlName=\"Customer Name\">\n      <option value=\"Type\" selected>Select or Type to add</option>\n      <option value=\"Banma\">Banma</option>\n      <option value=\"Kokui\">Kokui</option>\n      <option value=\"Aaron\">Aaron</option>\n      <option value=\"Claire\">Claire</option>\n      <option value=\"Elaine\">Elaine</option>\n      <option value=\"Fred\">Fred</option>\n   </select>\n   <h4>Estimate# <span>*</span></h4>\n   <div class=\"title-block\">\n      <input type=\"text\" name=\"estimate\" formControlName=\"Estimate Number\" />\n   </div>\n   <h4>Reference#</h4>\n   <div class=\"title-block\">\n      <input type=\"text\" name=\"reference\" formControlName=\"Reference ID\" />\n   </div>\n   <h4>Estimate Date<span>*</span></h4>\n   <div class=\"title-block\">\n      <input type=\"date\" name=\"estimate_date\" formControlName=\"Estimate Date\" />\n   </div>\n   <h4>Expiry Date<span>*</span></h4>\n   <div class=\"title-block\">\n      <input type=\"date\" name=\"expiry_date\" formControlName=\"Expiry Date\" />\n   </div>\n   <h4>Salesperson<span>*</span></h4>\n   <div class=\"title-block\">\n      <select formControlName=\"Sales person\">\n         <option value=\"Type\" selected>Select or Type to add</option>\n         <option value=\"Phyllis\">Phyllis</option>\n         <option value=\"Staffen\">Staffen</option>\n         <option value=\"Phoebe\">Phoebe</option>\n         <option value=\"Richard\">Richard</option>\n         <option value=\"Dan\">Dan</option>\n         <option value=\"Jack\">Jack</option>\n         <option value=\"Koi\">Koi</option>\n      </select>\n   </div>\n   <h4>Subject / Project Name</h4>\n   <div class=\"title-block\">\n      <textarea rows=\"1\" placeholder=\"Let your customer know what this Estimate is for\" formControlName=\"Project Name\"></textarea>\n   </div>\n   \n   <h4>Notes</h4>\n   <div class=\"title-block\">\n      <textarea rows=\"1\" placeholder=\"Will be displayed on the estimate\" formControlName=\"Notes\"></textarea>\n   </div>\n   <h4>Terms & Conditions</h4>\n   <div class=\"title-block\">\n      <textarea rows=\"4\" placeholder=\"Will be displayed on the estimate\" formControlName=\"Terms & Conditions\"></textarea>\n   </div>\n   <div class=\"btn-block\">\n      <button type=\"submit\">Save</button>\n   </div>\n   </form> -->"

/***/ }),

/***/ "./src/app/firebase/expenses/create/create.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/firebase/expenses/create/create.module.ts ***!
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
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create.page */ "./src/app/firebase/expenses/create/create.page.ts");








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

/***/ "./src/app/firebase/expenses/create/create.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/firebase/expenses/create/create.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\ndiv,\nform,\ninput,\nselect {\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 12px;\n  color: #666;\n  line-height: 22px;\n}\n\nh1,\nh4 {\n  margin: 15px 0 4px;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 13px;\n  margin: 20px 0 4px;\n  font-weight: 400;\n}\n\nspan {\n  color: red;\n}\n\n.small {\n  font-size: 10px;\n  line-height: 18px;\n}\n\n.testbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 2px 5px #ccc;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 30%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 31%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.picker-opt {\n  color: var(--ion-color-theme) !important;\n}\n\n.datetime-text {\n  padding: 5px !important;\n  border: 1px solid #ccc !important;\n  border-radius: 3px !important;\n  vertical-align: middle !important;\n}\n\ntextarea {\n  width: 200px !important;\n  height: 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9leHBlbnNlcy9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvZXhwZW5zZXMvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0VBS0MsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsa0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLFVBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDQ0Q7O0FERUE7RUFDQyx3QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURFQTs7O0VBR0MsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURFQTs7RUFFQyxtQkFBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NEOztBREVBOztFQUVDLFdBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsa0JBQUE7QUNDRDs7QURFQTtFQUNDLGFBQUE7QUNDRDs7QURFQTtFQUNDLG9CQUFBO0FDQ0Q7O0FERUE7OztFQUdDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNDRDs7QURFQTs7RUFFQyxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNDLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtFQUNBLHNCQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTs7RUFFQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyx1QkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7QUNDRDs7QURFQTtFQUNDO0lBQ0Msb0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VDQ0E7O0VERUQ7SUFDQyxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLDhCQUFBO0VDQ0E7O0VEQ0Q7SUFDQyxVQUFBO0lBQ0EsZ0JBQUE7RUNFQTs7RURBRDtJQUNDLFVBQUE7SUFDQSxnQkFBQTtFQ0dBOztFREREOztJQUVDLG9CQUFBO0VDSUE7QUFDRjs7QUREQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0dEOztBREFBO0VBQ0Msd0NBQUE7QUNHRDs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0FDR0o7O0FEeUJBO0VBQ0MsdUJBQUE7RUFDQSx1QkFBQTtBQ3RCRCIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL2V4cGVuc2VzL2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcbmRpdixcbmZvcm0sXG5pbnB1dCxcbnNlbGVjdCB7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcblx0b3V0bGluZTogbm9uZTtcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Y29sb3I6ICM2NjY7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG5oMSxcbmg0IHtcblx0bWFyZ2luOiAxNXB4IDAgNHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG5cdGZvbnQtc2l6ZTogMTNweDtcblx0bWFyZ2luOiAyMHB4IDAgNHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuXG5zcGFuIHtcblx0Y29sb3I6IHJlZDtcbn1cblxuLnNtYWxsIHtcblx0Zm9udC1zaXplOiAxMHB4O1xuXHRsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnRlc3Rib3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0aGVpZ2h0OiBpbmhlcml0O1xuXHRwYWRkaW5nOiAwcHg7XG59XG5cbmZvcm0ge1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMjBweDtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Ym94LXNoYWRvdzogMCAycHggNXB4ICNjY2M7XG59XG5cbmlucHV0IHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuXHRwYWRkaW5nOiA1cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW5wdXQ6aG92ZXIsXG50ZXh0YXJlYTpob3ZlcixcbnNlbGVjdDpob3ZlciB7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwOTU0ODQ7XG5cdGJhY2tncm91bmQ6ICNlNmVlZjc7XG59XG5cbi50aXRsZS1ibG9jayBzZWxlY3QsXG4udGl0bGUtYmxvY2sgaW5wdXQge1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5zZWxlY3Qge1xuXHRwYWRkaW5nOiA3cHggMDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuc2VsZWN0LFxudGFibGUge1xuXHR3aWR0aDogMTAwJTtcbn1cblxub3B0aW9uIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRheS12aXNpdGVkLFxuLnRpbWUtdmlzaXRlZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwidGltZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG5cdG1hcmdpbjogMnB4IDIycHggMCAwO1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSxcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogOHB4O1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpIHtcblx0cmlnaHQ6IDVweDtcblx0ei1pbmRleDogMTtcblx0Y29sb3I6ICNhOWE5YTk7XG59XG5cblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcblx0cmlnaHQ6IDA7XG5cdHotaW5kZXg6IDI7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgbGFiZWwge1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZzogMCAyMHB4IDEwcHggMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBpbnB1dCB7XG5cdHdpZHRoOiBhdXRvO1xuXHRtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG50aCxcbnRkIHtcblx0d2lkdGg6IDE4JTtcblx0cGFkZGluZzogMTVweCAwO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR2ZXJ0aWNhbC1hbGlnbjogdW5zZXQ7XG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5maXJzdC1jb2wge1xuXHR3aWR0aDogMjUlO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ZXh0YXJlYSB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xufVxuXG4uYnRuLWJsb2NrIHtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuXHR3aWR0aDogMTUwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlcjogbm9uZTtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwOTU0ODQ7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICNmZmY7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA2NjZhMztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSB7XG5cdC50aXRsZS1yYWRpbyB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0cGFkZGluZy10b3A6IDE1cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBlbmQ7XG5cdH1cblx0LnRpdGxlLXVwbG9hZGVyIHt9XG5cdC50aXRsZS1ibG9jayB7XG5cdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdG1hcmdpbi1sZWZ0OiAxNXB4O1xuXHRcdG1hcmdpbi1yaWdodDogMTVweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblx0LnRpdGxlLWJsb2NrIHNlbGVjdCB7XG5cdFx0d2lkdGg6IDMwJTtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG5cdC50aXRsZS1ibG9jayBpbnB1dCB7XG5cdFx0d2lkdGg6IDMxJTtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG5cdHRoLFxuXHR0ZCB7XG5cdFx0d29yZC1icmVhazoga2VlcC1hbGw7XG5cdH1cbn1cblxuLnNlcnZpY2Uge1xuXHRwb3NpdGlvbjogc3RhdGljO1xuXHRtYXJnaW4tdG9wOiAwO1xuXHRtYXJnaW4tcmlnaHQ6IC4zMTI1cmVtO1xuXHRtYXJnaW4tbGVmdDogMDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZy1sZWZ0OiAwO1xuXHRtYXJnaW4tcmlnaHQ6IC43NXJlbTtcbn1cblxuLnBpY2tlci1vcHQge1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKSAhaW1wb3J0YW50O1x0XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50OyBcbn1cbi8vIC5iYWRnZSB7XG4vLyBcdHBhZGRpbmc6IDEwcHg7XG4vLyB9XG5cbi8vIC5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuLy8gICAgIGJvcmRlcjogbm9uZTtcbi8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICAgIG91dGxpbmU6IDA7XG4vLyAgICAgcGFkZGluZzogLjc1cmVtO1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vIH1cblxuLy8gaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4vLyAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgYm90dG9tOiAwO1xuLy8gICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gICAgIHRvcDogMDtcbi8vICAgICB3aWR0aDogYXV0bztcbi8vIH1cblxudGV4dGFyZWEge1xuXHR3aWR0aDogMjAwcHggIWltcG9ydGFudDtcblx0aGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XG59IiwiYm9keSxcbmRpdixcbmZvcm0sXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG5oMSxcbmg0IHtcbiAgbWFyZ2luOiAxNXB4IDAgNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAyMHB4IDAgNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnRlc3Rib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4ICNjY2M7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW5wdXQ6aG92ZXIsXG50ZXh0YXJlYTpob3ZlcixcbnNlbGVjdDpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOTU0ODQ7XG4gIGJhY2tncm91bmQ6ICNlNmVlZjc7XG59XG5cbi50aXRsZS1ibG9jayBzZWxlY3QsXG4udGl0bGUtYmxvY2sgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5zZWxlY3Qge1xuICBwYWRkaW5nOiA3cHggMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuc2VsZWN0LFxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxub3B0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRheS12aXNpdGVkLFxuLnRpbWUtdmlzaXRlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9dGltZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBtYXJnaW46IDJweCAyMnB4IDAgMDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGksXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpIHtcbiAgcmlnaHQ6IDVweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNhOWE5YTk7XG59XG5cblt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwIDIwcHggMTBweCAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGlucHV0IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbnRoLFxudGQge1xuICB3aWR0aDogMTglO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB1bnNldDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmZpcnN0LWNvbCB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5idG4tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NTQ4NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY2NmEzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHtcbiAgLnRpdGxlLXJhZGlvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAudGl0bGUtYmxvY2sgc2VsZWN0IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAudGl0bGUtYmxvY2sgaW5wdXQge1xuICAgIHdpZHRoOiAzMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIHRoLFxudGQge1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICB9XG59XG4uc2VydmljZSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1yaWdodDogMC4zMTI1cmVtO1xuICBtYXJnaW4tbGVmdDogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG59XG5cbi5waWNrZXItb3B0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSkgIWltcG9ydGFudDtcbn1cblxuLmRhdGV0aW1lLXRleHQge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/firebase/expenses/create/create.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/firebase/expenses/create/create.page.ts ***!
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
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _invoice_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../invoice.model */ "./src/app/firebase/invoice.model.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");










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
        this.buildForm();
        this.es_d = new Date().toISOString();
    };
    CreatePage.prototype.ionViewWillEnter = function () {
        this.today = Date.now();
        this.getCsvData();
        // this.getTermsandConditions();
        // this.getCustomerNotes();
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
        //  this.reimburshForm.value['Total'] = this.totalPrice;
        console.log(this.reimburshForm.value);
        this.firebaseService.createExpense(this.uid, this.email, this.reimburshForm.value).then(function () {
            _this.dismissModal();
        });
    };
    CreatePage.prototype.dismissModal = function () {
        this.navCtrl.navigateBack('/firebase/expenses');
    };
    CreatePage.prototype.onEstimateDate = function (event) {
        console.log(event.detail.value);
        this.estimate_date = event.detail.value;
    };
    ////////////////////////////////
    CreatePage.prototype.buildForm = function () {
        console.log(this.e_d, this.customernotes, this.termsandconditions);
        // Date
        // Category Name
        // Amount
        // Reference# = estimate number
        // Notes
        // Customer Name
        this.reimburshForm = this.formBuilder.group({
            "Customer Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Expense Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.today),
            "Expense Category": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Expense Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Total": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Notes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
        // this.reimburshForm = this.formBuilder.group({
        //   "category_name": new FormControl(),
        //   "amount": new FormControl(),
        //   "Estimate Date": new FormControl(this.es_d),
        //   "Estimate ID": new FormControl(Date.now()),
        //   "Estimate Number": new FormControl(`SQ-${Date.now()}`),
        //   "Estimate Status": new FormControl('draft'),
        //   "Customer ID": new FormControl(Date.now()),
        //   "Expiry Date": new FormControl(this.e_d),
        //   "PurchaseOrder": new FormControl(""),
        //   "Currency Code": new FormControl(""),
        //   "Exchange Rate": new FormControl(),
        //   "Discount Type": new FormControl(""),
        //   "Is Discount Before Tax": new FormControl(),
        //   "Entity Discount Percent": new FormControl(),
        //   "Is Inclusive Tax": new FormControl(),
        //   "SubTotal": new FormControl(),
        //   "Total": new FormControl(this.totalPrice),
        //   "Adjustment": new FormControl(),
        //   "Notes": new FormControl(this.customernotes),
        //   // d.setDate(d.getDate() + 50);
        //   "Terms": new FormControl(),
        //   "Terms & Conditions": new FormControl(this.termsandconditions),
        //   "Customer Name": new FormControl(""),
        //   "Project Name": new FormControl(""),
        //   // orderNumber: this.formBuilder.control(null),
        //   // same as estimate number
        //   "Project ID": new FormControl(`SQ-${Date.now()}`),
        //   // salesPerson: this.formBuilder.control(null),
        //   "Sales person": new FormControl(""),
        //   "Billing Address": new FormControl(""),
        //   "Billing City": new FormControl(""),
        //   "Billing State": new FormControl(""),
        //   "Billing Country": new FormControl(""),
        //   "Billing Code": new FormControl(""),
        //   "Billing Fax": new FormControl(""),
        //   "Template Name": new FormControl(""),
        //   "Adjustment Description": new FormControl(""),
        //   "Shipping Address": new FormControl(""),
        //   "Shipping City": new FormControl(""),
        //   "Shipping State": new FormControl(""),
        //   "Shipping Country": new FormControl(""),
        //   "Shipping Code": new FormControl(""),
        //   "Shipping Fax": new FormControl(""),
        //   "Source": new FormControl(),
        //   "Reference ID": new FormControl(""),
        //   "Last Sync Time": new FormControl(""),
        //   "Shipping Charge": new FormControl(),
        //   "Shipping Charge Tax ID": new FormControl(""),
        //   "Shipping Charge Tax Amount": new FormControl(""),
        //   "Shipping Charge Tax Name": new FormControl(""),
        //   "Shipping Charge Tax %": new FormControl(""),
        //   "Shipping Charge Tax Type": new FormControl(""),
        //   "Item Name": new FormControl(""),
        //   "Item Desc": new FormControl(""),
        //   "Quantity": new FormControl(),
        //   "Discount": new FormControl(),
        //   "Discount Amount": new FormControl(),
        //   "Item Tax Amount": new FormControl(),
        //   "Item Total": new FormControl(),
        //   "Account": new FormControl(""),
        //   "SKU": new FormControl(""),
        //   "Usage unit": new FormControl(""),
        //   "Item Price": new FormControl(),
        //   "Tax ID": new FormControl(""),
        //   "Item Tax": new FormControl(""),
        //   "Item Tax %": new FormControl(""),
        //   "Item Tax Type": new FormControl(""),
        //   // this one would be the first item in the group array
        //   salesList: this.formBuilder.array([
        //     this.formBuilder.group({
        //       //   itemName: this.formBuilder.control(null),
        //       //   itemDetail: this.formBuilder.control(null),
        //       quantity: this.formBuilder.control(null),
        //       Rate: this.formBuilder.control(null),
        //       // tax: this.formBuilder.control(null),
        //       amount: this.formBuilder.control(null),
        //       "Description": this.formBuilder.control(null),
        //       // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
        //       "Item Name": this.formBuilder.control(null),
        //       // "Last Sync Time": this.formBuilder.control(this.itemSelected["Last Sync Time"]),
        //       // "Product Type": this.formBuilder.control(this.itemSelected["Product Type"]),
        //       // "Rate": this.formBuilder.control(this.itemSelected.Rate),
        //       // "Reference ID": this.formBuilder.control(this.itemSelected["Reference ID"]),
        //       // "Source": this.formBuilder.control(this.itemSelected.Source),
        //       // "Status": this.formBuilder.control(this.itemSelected.Status),
        //       // "Tax1 Name": this.formBuilder.control(this.itemSelected["Tax1 Name"]),
        //       // "Tax1 Percentage": this.formBuilder.control(this.itemSelected["Tax1 Percentage"]),
        //       // "Tax1 Type": this.formBuilder.control(this.itemSelected["Tax1 Type"]),
        //       // "Usage unit": this.formBuilder.control(this.itemSelected["Usage unit"]),
        //       // "id": this.formBuilder.control(this.itemSelected['id']),
        //     }),
        //   ]),
        // });
        this.salesListArray = this.reimburshForm.get('salesList');
    };
    CreatePage.prototype.jsonstringify = function (value) {
        return JSON.stringify(value);
    };
    CreatePage.prototype.onCreateInventoryItemPage = function () {
        this.navCtrl.navigateForward('/firebase/create#expense');
    };
    CreatePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
        { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_9__["Papa"] }
    ]; };
    CreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! raw-loader!./create.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/expenses/create/create.page.html"),
            styles: [__webpack_require__(/*! ./create.page.scss */ "./src/app/firebase/expenses/create/create.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _firebase_integration_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_9__["Papa"]])
    ], CreatePage);
    return CreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=firebase-expenses-create-create-module-es5.js.map