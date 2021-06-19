(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-contacts-create-create-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/contacts/create/create.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/contacts/create/create.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n    <ion-item-divider sticky>\n        <ion-title>New Customer</ion-title>\n        <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n\n        <ion-button fill=\"clear\" color=\"theme\" (click)=\"readContact()\">\n           Get\n        </ion-button>\n\n         <ion-button fill=\"clear\" color=\"theme\" (click)=\"updateContact()\">\n           Update\n        </ion-button>\n\n         <ion-button fill=\"clear\" color=\"theme\" (click)=\"deleteContact()\">\n           Delete\n        </ion-button>\n\n    </ion-item-divider>\n    \n    <ion-progress-bar color=\"theme\" type=\"indeterminate\"></ion-progress-bar>\n\n    <div class=\"testbox\">\n        <form [formGroup]=\"createContactForm\" (ngSubmit)=\"createContact()\">\n            <h4>Customer Type<span>*</span></h4>\n            <div class=\"title-radio\">\n                <input style=\"width: 40px;\" type=\"radio\" value=\"business\" formControlName=\"type\" />\n                <label for=\"banma\">Business</label><br />\n                <input style=\"width: 40px;\" type=\"radio\" value=\"individual\" formControlName=\"type\" />\n                <label for=\"kokui\">Individual</label>\n            </div>\n\n            <h4>Primary Contact<span>*</span></h4>\n            <div class=\"title-block\">\n                <select formControlName=\"unit\">\n                    <option value=\"Type\">Salutation</option>\n                    <option value=\"Mr.\">Mr.</option>\n                    <option value=\"Mrs.\">Mrs.</option>\n                    <option value=\"Ms.\">Ms.</option>\n                    <option value=\"Miss\">Miss</option>\n                    <option value=\"Dr.\">Dr.</option>\n                </select>\n            </div>\n\n            <div class=\"title-block\">\n                <input type=\"text\" name=\"first_name\" placeholder=\"First Name\" formControlName=\"first_name\" />\n            </div>\n\n            <div class=\"title-block\">\n                <input type=\"text\" name=\"last_name\" placeholder=\"Last Name\" formControlName=\"last_name\" />\n            </div>\n\n            <h4>Company Name</h4>\n            <div class=\"title-block\">\n                <input type=\"text\" name=\"company_name\" placeholder=\"Company Name\" formControlName=\"company_name\" />\n            </div>\n\n            <h4 style=\"color: #e54643;\">Customer Display Name <span>*</span></h4>\n            <div class=\"title-block\">\n                <input type=\"text\" name=\"customer_display_name\" placeholder=\"Customer Name\" formControlName=\"customer_display_name\" />\n            </div>\n\n            <h4>Customer Email</h4>\n            <div class=\"title-block\">\n                <input type=\"text\" name=\"customer_email\" placeholder=\"Customer Email\" formControlName=\"customer_email\" />\n            </div>\n\n            <h4>Customer Phone</h4>\n            <div class=\"title-block\">\n                <input type=\"text\" name=\"work_phone\" placeholder=\"Work Phone\" formControlName=\"work_phone\" />\n            </div>\n\n            <div class=\"title-block\">\n                <input type=\"text\" name=\"mobile_phone\" placeholder=\"Mobile\" formControlName=\"mobile_phone\" />\n            </div>\n\n            <h4>Website</h4>\n            <div class=\"title-block\">\n                <input type=\"text\" name=\"website\" placeholder=\"Website\" formControlName=\"website\" />\n            </div>\n\n            <h4>Description</h4>\n            <div class=\"title-block\">\n                <textarea rows=\"5\" formControlName=\"description\"></textarea>\n            </div>\n\n            <div class=\"btn-block\">\n                <button type=\"submit\">Save</button>\n            </div>\n        </form>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/firebase/contacts/create/create.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/firebase/contacts/create/create.module.ts ***!
  \***********************************************************/
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
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "./src/app/firebase/contacts/create/create.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");









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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"]
        ],
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]]
    })
], CreatePageModule);



/***/ }),

/***/ "./src/app/firebase/contacts/create/create.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/firebase/contacts/create/create.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\ndiv,\nform,\ninput,\nselect {\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 12px;\n  color: #666;\n  line-height: 22px;\n}\n\nh1,\nh4 {\n  margin: 15px 0 4px;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 13px;\n  margin: 20px 0 4px;\n  font-weight: 400;\n}\n\nspan {\n  color: red;\n}\n\n.small {\n  font-size: 10px;\n  line-height: 18px;\n}\n\n.testbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 2px 5px #ccc;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 30%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 31%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\nlabel {\n  line-height: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9jb250YWN0cy9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvY29udGFjdHMvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0VBS0MsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsa0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLFVBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDQ0Q7O0FERUE7RUFDQyx3QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURFQTs7O0VBR0MsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURFQTs7RUFFQyxtQkFBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NEOztBREVBOztFQUVDLFdBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsa0JBQUE7QUNDRDs7QURFQTtFQUNDLGFBQUE7QUNDRDs7QURFQTtFQUNDLG9CQUFBO0FDQ0Q7O0FERUE7OztFQUdDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNDRDs7QURFQTs7RUFFQyxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNDLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtFQUNBLHNCQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTs7RUFFQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyx1QkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7QUNDRDs7QURFQTtFQUNDO0lBQ0Msb0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VDQ0E7O0VEQ0Q7SUFDQyxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLDhCQUFBO0VDRUE7O0VEQUQ7SUFDQyxVQUFBO0lBQ0EsZ0JBQUE7RUNHQTs7RURERDtJQUNDLFVBQUE7SUFDQSxnQkFBQTtFQ0lBOztFREZEOztJQUVDLG9CQUFBO0VDS0E7QUFDRjs7QURGQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0lEOztBRERBO0VBQ0MseUJBQUE7QUNJRCIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL2NvbnRhY3RzL2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcbmRpdixcbmZvcm0sXG5pbnB1dCxcbnNlbGVjdCB7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcblx0b3V0bGluZTogbm9uZTtcblx0Zm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Y29sb3I6ICM2NjY7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG5oMSxcbmg0IHtcblx0bWFyZ2luOiAxNXB4IDAgNHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG5cdGZvbnQtc2l6ZTogMTNweDtcblx0bWFyZ2luOiAyMHB4IDAgNHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuXG5zcGFuIHtcblx0Y29sb3I6IHJlZDtcbn1cblxuLnNtYWxsIHtcblx0Zm9udC1zaXplOiAxMHB4O1xuXHRsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnRlc3Rib3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0aGVpZ2h0OiBpbmhlcml0O1xuXHRwYWRkaW5nOiAwcHg7XG59XG5cbmZvcm0ge1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMjBweDtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Ym94LXNoYWRvdzogMCAycHggNXB4ICNjY2M7XG59XG5cbmlucHV0IHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuXHRwYWRkaW5nOiA1cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW5wdXQ6aG92ZXIsXG50ZXh0YXJlYTpob3ZlcixcbnNlbGVjdDpob3ZlciB7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwOTU0ODQ7XG5cdGJhY2tncm91bmQ6ICNlNmVlZjc7XG59XG5cbi50aXRsZS1ibG9jayBzZWxlY3QsXG4udGl0bGUtYmxvY2sgaW5wdXQge1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5zZWxlY3Qge1xuXHRwYWRkaW5nOiA3cHggMDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuc2VsZWN0LFxudGFibGUge1xuXHR3aWR0aDogMTAwJTtcbn1cblxub3B0aW9uIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRheS12aXNpdGVkLFxuLnRpbWUtdmlzaXRlZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwidGltZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG5cdG1hcmdpbjogMnB4IDIycHggMCAwO1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSxcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogOHB4O1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpIHtcblx0cmlnaHQ6IDVweDtcblx0ei1pbmRleDogMTtcblx0Y29sb3I6ICNhOWE5YTk7XG59XG5cblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcblx0cmlnaHQ6IDA7XG5cdHotaW5kZXg6IDI7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgbGFiZWwge1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZzogMCAyMHB4IDEwcHggMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBpbnB1dCB7XG5cdHdpZHRoOiBhdXRvO1xuXHRtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG50aCxcbnRkIHtcblx0d2lkdGg6IDE4JTtcblx0cGFkZGluZzogMTVweCAwO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR2ZXJ0aWNhbC1hbGlnbjogdW5zZXQ7XG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5maXJzdC1jb2wge1xuXHR3aWR0aDogMjUlO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ZXh0YXJlYSB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xufVxuXG4uYnRuLWJsb2NrIHtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuXHR3aWR0aDogMTUwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlcjogbm9uZTtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwOTU0ODQ7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICNmZmY7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA2NjZhMztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSB7XG5cdC50aXRsZS1yYWRpbyB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0cGFkZGluZy10b3A6IDE1cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBlbmQ7XG5cdH1cblx0LnRpdGxlLWJsb2NrIHtcblx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXHQudGl0bGUtYmxvY2sgc2VsZWN0IHtcblx0XHR3aWR0aDogMzAlO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0LnRpdGxlLWJsb2NrIGlucHV0IHtcblx0XHR3aWR0aDogMzElO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0dGgsXG5cdHRkIHtcblx0XHR3b3JkLWJyZWFrOiBrZWVwLWFsbDtcblx0fVxufVxuXG4uc2VydmljZSB7XG5cdHBvc2l0aW9uOiBzdGF0aWM7XG5cdG1hcmdpbi10b3A6IDA7XG5cdG1hcmdpbi1yaWdodDogLjMxMjVyZW07XG5cdG1hcmdpbi1sZWZ0OiAwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG5cdG1hcmdpbi1yaWdodDogLjc1cmVtO1xufVxuXG5sYWJlbCB7XG5cdGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG59IiwiYm9keSxcbmRpdixcbmZvcm0sXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG5oMSxcbmg0IHtcbiAgbWFyZ2luOiAxNXB4IDAgNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAyMHB4IDAgNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnRlc3Rib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4ICNjY2M7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW5wdXQ6aG92ZXIsXG50ZXh0YXJlYTpob3ZlcixcbnNlbGVjdDpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOTU0ODQ7XG4gIGJhY2tncm91bmQ6ICNlNmVlZjc7XG59XG5cbi50aXRsZS1ibG9jayBzZWxlY3QsXG4udGl0bGUtYmxvY2sgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5zZWxlY3Qge1xuICBwYWRkaW5nOiA3cHggMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuc2VsZWN0LFxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxub3B0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRheS12aXNpdGVkLFxuLnRpbWUtdmlzaXRlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9dGltZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBtYXJnaW46IDJweCAyMnB4IDAgMDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGksXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpIHtcbiAgcmlnaHQ6IDVweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNhOWE5YTk7XG59XG5cblt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwIDIwcHggMTBweCAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGlucHV0IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbnRoLFxudGQge1xuICB3aWR0aDogMTglO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB1bnNldDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmZpcnN0LWNvbCB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5idG4tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NTQ4NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY2NmEzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHtcbiAgLnRpdGxlLXJhZGlvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAudGl0bGUtYmxvY2sgc2VsZWN0IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAudGl0bGUtYmxvY2sgaW5wdXQge1xuICAgIHdpZHRoOiAzMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIHRoLFxudGQge1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICB9XG59XG4uc2VydmljZSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1yaWdodDogMC4zMTI1cmVtO1xuICBtYXJnaW4tbGVmdDogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG59XG5cbmxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/firebase/contacts/create/create.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/firebase/contacts/create/create.page.ts ***!
  \*********************************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");






// import { SelectUserImageModal } from "../select-image/select-user-image.modal";
let CreatePage = class CreatePage {
    constructor(navCtrl, firebaseService, authService) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    ngOnInit() {
        this.createContactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            customer_display_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            customer_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            work_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            mobile_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("")
        });
        this.createSupplierForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            cate_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cate_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cate_3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cate_4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            average_speed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            reply_rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            editor_choice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            class_size: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ lower: 1, upper: 42 }),
            target_user_age: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ lower: 1, upper: 16 }),
            class_length: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ lower: 1, upper: 42 }),
            // teaching_materials: new FormControl("rental"),
            company_intro: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            tutor_qual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            competition_exp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        // this.createUserForm = new FormGroup({
        //   name: new FormControl('', Validators.required),
        //   lastname: new FormControl('', Validators.required),
        //   email: new FormControl('', Validators.compose([
        //     Validators.required,
        //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        //   ])),
        //   phone: new FormControl('', Validators.required),
        //   birthdate: new FormControl(Validators.required),
        //   skills: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1)),
        //   spanish: new FormControl(),
        //   english: new FormControl(),
        //   french: new FormControl()
        // });
        // this.firebaseService.getSkills().subscribe(skills => {
        //   this.skills = skills;
        //   // create skill checkboxes
        //   this.skills.map(() => {
        //     (this.createUserForm.controls.skills as FormArray).push(new FormControl());
        //   });
        // });
    }
    // get skillsFormArray() { return <FormArray>this.createUserForm.get('skills'); }
    changeLangValue(value) {
        switch (true) {
            case value <= 3:
                return "Novice";
            case value > 3 && value <= 6:
                return "Competent";
            case value > 6:
                return "Expert";
        }
    }
    submitFilterForm() {
        console.log(this.FilterForm.value);
    }
    onReset() {
        this.createSupplierForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            cate_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cate_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cate_3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cate_4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            average_speed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            reply_rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            editor_choice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            class_size: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ lower: 10, upper: 42 }),
            target_user_age: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ lower: 10, upper: 16 }),
            class_length: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ lower: 10, upper: 42 }),
            // teaching_materials: new FormControl("rental"),
            company_intro: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            tutor_qual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            competition_exp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    }
    dismissModal() {
        //  this.modalController.dismiss();
        this.navCtrl.navigateBack('/firebase/contacts');
    }
    // CRUD
    createContact() {
        console.log(this.uid, this.email, this.createContactForm.value);
        this.firebaseService.createContacts(this.uid, this.email, this.createContactForm.value).then(() => {
            // this.dismissModal();
        });
    }
};
CreatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
CreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: __webpack_require__(/*! raw-loader!./create.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/contacts/create/create.page.html"),
        styles: [__webpack_require__(/*! ./create.page.scss */ "./src/app/firebase/contacts/create/create.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
        _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], CreatePage);



/***/ })

}]);
//# sourceMappingURL=firebase-contacts-create-create-module-es2015.js.map