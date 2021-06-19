(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-inventory-create-create-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/inventory/create/create.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/inventory/create/create.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n   <ion-item-divider sticky>\n      <ion-title>New Item</ion-title>\n      <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n         <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n   </ion-item-divider>\n   <div class=\"testbox\">\n      <form [formGroup]=\"createItemForm\" (ngSubmit)=\"createItem()\">\n         <h4>Item ID <span>*</span></h4>\n         <div class=\"title-block\">\n            <input type=\"number\" name=\"id\" formControlName=\"Item ID\" />\n         </div>\n         <h4>Type<span>*</span></h4>\n         <div class=\"title-block\">\n            <select formControlName=\"Product Type\">\n               <option value=\"Type\" selected>Select or Type to add</option>\n               <option value=\"service\">Service</option>\n               <option value=\"goods\">Goods</option>\n               <option value=\"others\">Others</option>\n            </select>\n         </div>\n         <h4>Name <span>*</span></h4>\n         <div class=\"title-block\">\n            <input type=\"text\" name=\"name\" formControlName=\"Item Name\" />\n         </div>\n         <h4>Unit<span>*</span></h4>\n         <div class=\"title-block\">\n            <select formControlName=\"Usage unit\">\n               <option value=\"Type\" selected>Select or Type to add</option>\n               <!-- <option value=\"box\">box</option>\n            <option value=\"m\">m</option>\n            <option value=\"kg\">kg</option> -->\n               <option value=\"applicable\">applicable</option>\n               <option value=\"not applicable\">not applicable</option>\n            </select>\n            <!-- <input class=\"name\" type=\"text\" name=\"name\" placeholder=\"First\" formControlName=\"name\" required/>\n            <input class=\"name\" type=\"text\" name=\"name\" placeholder=\"Last\"/> -->\n         </div>\n         <h4>Description</h4>\n         <div class=\"\">\n            <textarea rows=\"5\" formControlName=\"Description\"></textarea>\n         </div>\n         <h4>Selling Price<span>*</span></h4>\n         <div class=\"title-block\">\n            <input type=\"number\" name=\"selling_price\" formControlName=\"Rate\" />\n         </div>\n         <!-- \"Tax1 Name\": new FormControl(\"\"),\n         \"Tax1 Percentage\": new FormControl(\"\"),\n         \"Tax1 Type\": new FormControl(\"\"),\n         \n         \"Source\": new FormControl(),\n         \"Reference ID\": new FormControl(\"\"),\n         \"Last Sync Time\": new FormControl(\"\"),\n         \"Status\": new FormControl(\"\"), -->\n         <div class=\"btn-block\">\n            <button type=\"submit\">Save</button>\n         </div>\n      </form>\n   </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/firebase/inventory/create/create.module.ts":
/*!************************************************************!*\
  !*** ./src/app/firebase/inventory/create/create.module.ts ***!
  \************************************************************/
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
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create.page */ "./src/app/firebase/inventory/create/create.page.ts");








const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_7__["CreatePage"]
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
            _app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_7__["CreatePage"]]
    })
], CreatePageModule);



/***/ }),

/***/ "./src/app/firebase/inventory/create/create.page.scss":
/*!************************************************************!*\
  !*** ./src/app/firebase/inventory/create/create.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\ndiv,\nform,\ninput,\nselect {\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 12px;\n  color: #666;\n  line-height: 22px;\n}\n\nh1,\nh4 {\n  margin: 15px 0 4px;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 13px;\n  margin: 20px 0 4px;\n  font-weight: 400;\n}\n\nspan {\n  color: red;\n}\n\n.small {\n  font-size: 10px;\n  line-height: 18px;\n}\n\n.testbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 2px 5px #ccc;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 30%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 31%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9pbnZlbnRvcnkvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2ludmVudG9yeS9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTs7RUFFQyxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNDRDs7QURFQTtFQUNDLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NEOztBREVBOzs7RUFHQyxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVBOztFQUVDLG1CQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsV0FBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTs7RUFFQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0Msb0JBQUE7QUNDRDs7QURFQTs7O0VBR0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0NEOztBREVBOztFQUVDLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBOztFQUVDLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0Q7O0FERUE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLHVCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7RUFDQyx5QkFBQTtBQ0NEOztBREVBO0VBQ0M7SUFDQyxvQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUNDQTs7RURDRDtJQUNDLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsOEJBQUE7RUNFQTs7RURBRDtJQUNDLFVBQUE7SUFDQSxnQkFBQTtFQ0dBOztFREREO0lBQ0MsVUFBQTtJQUNBLGdCQUFBO0VDSUE7O0VERkQ7O0lBRUMsb0JBQUE7RUNLQTtBQUNGOztBREZBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDSUQiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9pbnZlbnRvcnkvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LFxuZGl2LFxuZm9ybSxcbmlucHV0LFxuc2VsZWN0IHtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHRvdXRsaW5lOiBub25lO1xuXHRmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRjb2xvcjogIzY2Njtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbmgxLFxuaDQge1xuXHRtYXJnaW46IDE1cHggMCA0cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg0IHtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRtYXJnaW46IDIwcHggMCA0cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbnNwYW4ge1xuXHRjb2xvcjogcmVkO1xufVxuXG4uc21hbGwge1xuXHRmb250LXNpemU6IDEwcHg7XG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4udGVzdGJveCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IGluaGVyaXQ7XG5cdHBhZGRpbmc6IDBweDtcbn1cblxuZm9ybSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRib3gtc2hhZG93OiAwIDJweCA1cHggI2NjYztcbn1cblxuaW5wdXQge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG5cdHBhZGRpbmc6IDVweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dDpob3ZlcixcbnRleHRhcmVhOmhvdmVyLFxuc2VsZWN0OmhvdmVyIHtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgIzA5NTQ4NDtcblx0YmFja2dyb3VuZDogI2U2ZWVmNztcbn1cblxuLnRpdGxlLWJsb2NrIHNlbGVjdCxcbi50aXRsZS1ibG9jayBpbnB1dCB7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnNlbGVjdCB7XG5cdHBhZGRpbmc6IDdweCAwO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5zZWxlY3QsXG50YWJsZSB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG5vcHRpb24ge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGF5LXZpc2l0ZWQsXG4udGltZS12aXNpdGVkIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9XCJ0aW1lXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcblx0bWFyZ2luOiAycHggMjJweCAwIDA7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpLFxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA4cHg7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGkge1xuXHRyaWdodDogNXB4O1xuXHR6LWluZGV4OiAxO1xuXHRjb2xvcjogI2E5YTlhOTtcbn1cblxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuXHRyaWdodDogMDtcblx0ei1pbmRleDogMjtcblx0b3BhY2l0eTogMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBsYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiAwIDIwcHggMTBweCAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGlucHV0IHtcblx0d2lkdGg6IGF1dG87XG5cdG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbnRoLFxudGQge1xuXHR3aWR0aDogMTglO1xuXHRwYWRkaW5nOiAxNXB4IDA7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHZlcnRpY2FsLWFsaWduOiB1bnNldDtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmZpcnN0LWNvbCB7XG5cdHdpZHRoOiAyNSU7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRleHRhcmVhIHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5idG4tYmxvY2sge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG5cdHdpZHRoOiAxNTBweDtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyOiBub25lO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA5NTQ4NDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogI2ZmZjtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDY2NmEzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHtcblx0LnRpdGxlLXJhZGlvIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRwYWRkaW5nLXRvcDogMTVweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcblx0fVxuXHQudGl0bGUtYmxvY2sge1xuXHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRtYXJnaW4tbGVmdDogMTVweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdC50aXRsZS1ibG9jayBzZWxlY3Qge1xuXHRcdHdpZHRoOiAzMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHQudGl0bGUtYmxvY2sgaW5wdXQge1xuXHRcdHdpZHRoOiAzMSU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHR0aCxcblx0dGQge1xuXHRcdHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuXHR9XG59XG5cbi5zZXJ2aWNlIHtcblx0cG9zaXRpb246IHN0YXRpYztcblx0bWFyZ2luLXRvcDogMDtcblx0bWFyZ2luLXJpZ2h0OiAuMzEyNXJlbTtcblx0bWFyZ2luLWxlZnQ6IDA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctbGVmdDogMDtcblx0bWFyZ2luLXJpZ2h0OiAuNzVyZW07XG59IiwiYm9keSxcbmRpdixcbmZvcm0sXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG5oMSxcbmg0IHtcbiAgbWFyZ2luOiAxNXB4IDAgNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAyMHB4IDAgNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnRlc3Rib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4ICNjY2M7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW5wdXQ6aG92ZXIsXG50ZXh0YXJlYTpob3ZlcixcbnNlbGVjdDpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOTU0ODQ7XG4gIGJhY2tncm91bmQ6ICNlNmVlZjc7XG59XG5cbi50aXRsZS1ibG9jayBzZWxlY3QsXG4udGl0bGUtYmxvY2sgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5zZWxlY3Qge1xuICBwYWRkaW5nOiA3cHggMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuc2VsZWN0LFxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxub3B0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRheS12aXNpdGVkLFxuLnRpbWUtdmlzaXRlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9dGltZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBtYXJnaW46IDJweCAyMnB4IDAgMDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGksXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpIHtcbiAgcmlnaHQ6IDVweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNhOWE5YTk7XG59XG5cblt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwIDIwcHggMTBweCAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGlucHV0IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbnRoLFxudGQge1xuICB3aWR0aDogMTglO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB1bnNldDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmZpcnN0LWNvbCB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5idG4tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NTQ4NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY2NmEzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHtcbiAgLnRpdGxlLXJhZGlvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAudGl0bGUtYmxvY2sgc2VsZWN0IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAudGl0bGUtYmxvY2sgaW5wdXQge1xuICAgIHdpZHRoOiAzMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIHRoLFxudGQge1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICB9XG59XG4uc2VydmljZSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1yaWdodDogMC4zMTI1cmVtO1xuICBtYXJnaW4tbGVmdDogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/firebase/inventory/create/create.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/firebase/inventory/create/create.page.ts ***!
  \**********************************************************/
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
/* harmony import */ var _invoice_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../invoice.model */ "./src/app/firebase/invoice.model.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");







let CreatePage = class CreatePage {
    constructor(authService, navCtrl, firebaseService) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.itemData = new _invoice_model__WEBPACK_IMPORTED_MODULE_5__["ItemModel"]();
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    ngOnInit() {
        this.createItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            "Item ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Date.now()),
            "Item Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Description": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Rate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Tax1 Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Tax1 Percentage": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Tax1 Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Product Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Source": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](1),
            "Reference ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Last Sync Time": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Status": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Usage unit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "quantity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](1),
            "amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    }
    createItem() {
        this.itemData["Item ID"] = this.createItemForm.value["Item ID"];
        this.itemData["Item Name"] = this.createItemForm.value["Item Name"];
        this.itemData.Description = this.createItemForm.value.Description;
        this.itemData.Rate = this.createItemForm.value.Rate;
        this.itemData["Tax1 Name"] = this.createItemForm.value["Tax1 Name"];
        this.itemData["Tax1 Percentage"] = this.createItemForm.value["Tax1 Percentage"];
        this.itemData["Tax1 Type"] = this.createItemForm.value["Tax1 Type"];
        this.itemData["Product Type"] = this.createItemForm.value["Product Type"];
        this.itemData["Source"] = this.createItemForm.value["Source"];
        this.itemData["Reference ID"] = this.createItemForm.value["Reference ID"];
        this.itemData["Last Sync Time"] = this.createItemForm.value["Last Sync Time"];
        this.itemData.Status = this.createItemForm.value.Status;
        this.itemData["Usage unit"] = this.createItemForm.value["Usage unit"];
        this.itemData.quantity = this.createItemForm.value['quantity'];
        // amount => rate * quantity => Rate * 1
        // this.itemData.amount = this.createItemForm.value["amount"];
        this.itemData.amount = this.createItemForm.value["Rate"];
        console.log(this.uid, this.email, this.createItemForm.value);
        this.firebaseService.createItems(this.uid, this.email, this.createItemForm.value).then(() => {
            this.dismissModal();
        });
    }
    dismissModal() {
        this.navCtrl.navigateBack('/firebase/inventory/items');
    }
};
CreatePage.ctorParameters = () => [
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
];
CreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: __webpack_require__(/*! raw-loader!./create.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/inventory/create/create.page.html"),
        styles: [__webpack_require__(/*! ./create.page.scss */ "./src/app/firebase/inventory/create/create.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
], CreatePage);

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
//     company_intro: new FormControl(),
//     tutor_qual: new FormControl(),
//     competition_exp: new FormControl()
//   });
// }
/*

    "Customer Name": "Joan",
    "Estimate Number": "SQ 19101740-B",
    "Reference ID": "",
    "Estimate Date": "2017-10-19",
    "Expiry Date": "",
    "Sales person": "Catrina Cheng",
    "Project Name": "",
    "Notes": "",
    "Terms & Conditions": "Delivery time: 14 working days (5-7 working days for urgent orders)\nFrom the confirmation of the manuscript and the approved version\nAll design changes need to be notified before six o'clock in each working day\n#Minor changes will be After receiving the notice, the revised manuscript will be delivered to the guest at three o'clock on the next working day\n#big revision will be handed over to the guest after three o’clock on the two working days after receiving the notice",


    "Estimate ID": 962254000000087000,
    "Estimate Status": "sent",
    "Customer ID": 962254000000087000,
    "PurchaseOrder": "",
    "Currency Code": "HKD",
    "Exchange Rate": 1,
    "Discount Type": "item_level",
    "Is Discount Before Tax": true,
    "Entity Discount Percent": 0,
    "Is Inclusive Tax": false,
    "SubTotal": 3888,
    "Total": 3888,
    "Adjustment": 0,
    "Project ID": "",
    "Billing Address": "",
    "Billing City": "",
    "Billing State": "",
    "Billing Country": "",
    "Billing Code": "",
    "Billing Fax": "",
    "Template Name": "SQ",
    "Adjustment Description": "",
    "Shipping Address": "",
    "Shipping City": "",
    "Shipping State": "",
    "Shipping Country": "",
    "Shipping Code": "",
    "Shipping Fax": "",
    "Source": 1,
    "Last Sync Time": "",
    "Shipping Charge": 0,
    "Shipping Charge Tax ID": "",
    "Shipping Charge Tax Amount": "",
    "Shipping Charge Tax Name": "",
    "Shipping Charge Tax %": "",
    "Shipping Charge Tax Type": "",
    "Item Name": "Uniform-Fluorescent vest jacket",
    "Item Desc": "Background color: fluorescent green\nmaterial: windbreaker\nprinting method: silk screen\nprinting content: 2 A4 monochrome logo",
    "Quantity": 36,
    "Discount": 0,
    "Discount Amount": 0,
    "Item Tax Amount": 0,
    "Item Total": 3888,
    "Account": "",
    "SKU": "",
    "Usage unit": "piece",
    "Item Price": 108,
    "Tax ID": "",
    "Item Tax": "",
    "Item Tax %": "",
    "Item Tax Type": ""

*/
/*
   "Customer Name": "Mr. Wai Kwok Mok",
   "Invoice Number": "PA-6112051-A",
   "Invoice ID": 2401730000000078091,
   "Invoice Date": "2020-11-06",
   "Payment Terms": 3,
   "Sales person": "Phyllis",
   "Project Name": "",
   "Notes": "",

   "Estimate Number": "",
   "Company Name": "SHARISM LIMITED",
   "Customer ID": 2401730000000078021,
   "Branch ID": "",
   "Branch Name": "",
   "Due Date": "2020-11-09",
   "Expected Payment Date": "",
   "PurchaseOrder": "",
   "Invoice Status": "Overdue",
   "Template Name": "Invoice",
   "Currency Code": "HKD",
   "Exchange Rate": 1,
   "Discount Type": "item_level",
   "Is Discount Before Tax": true,
   "Entity Discount Percent": 0,
   "Entity Discount Amount": 0,
   "Item Name": "D-Biz -E-Shop Deposit",
   "Item Desc": "Responsive design -- mobile and desktop version\n3 - 5 Banner design\n1 Logo design\n30 Icon design\nLanguage versions : Traditional Chinese\nUnlimited Product display\nPayment gateway -- stripe, paypal, bank transfer, cash on delivery\nCopywriting will be provided by the client\nShopping cart\nContent management system backend -- able to create/\n/read/update/delete product information(individual \nor in bulk)\nCustomer Login System -- customer can login their account \nand check the wishlist, purchase history \n\n*First Year Hosting and Server maintenance will be included.",
   "Quantity": 1,
   "Usage unit": "",
   "Item Price": 30000,
   "Discount": 0,
   "Discount Amount": 0,
   "Expense Reference ID": "",
   "Project ID": "",
   "Is Inclusive Tax": false,
   "Tax1 ID": "",
   "Item Tax1": "",
   "Item Tax1 %": "",
   "Item Tax1 Amount": "",
   "Item Tax1 Type": "",
   "Item Total": 30000,
   "SubTotal": 30000,
   "Total": 30000,
   "Balance": 30000,
   "Shipping Charge": 0,
   "Shipping Charge Tax ID": "",
   "Shipping Charge Tax Amount": "",
   "Shipping Charge Tax Name": "",
   "Shipping Charge Tax %": "",
   "Shipping Charge Tax Type": "",
   "Adjustment": 0,
   "Adjustment Description": "Adjustment",
   "Round Off": 0,
   "Payment Terms Label": "Custom",
   "Last Payment Date": "",
   "Terms & Conditions": "Remarks: Server and maintenance will be started after the project is finished.\n* 五萬元以下訂單，需全數繳付。\t\t\n 銀行入帳資料：\t\t\n1. 入帳-大眾銀行（IMAKER IT LIMITED) account no. 726-186583-031\t\t\n2. Credit Card (Please notice us if you would like to pay in Paypal.)\t\t\n\t\t\n\"顧客請於付款後以下列方法通知我們確認, 確認付款後,我們會盡\n快處理閣下之訂單\"\t\t\n\"1. 拍下入數收據並把照片以 Whatsapp等手機程式發送到\n    +852 9697 9157, 並提供發單編號.\"\t\t\n\"2.回覆電郵並提供入數收據副本,或付款金額, 付款日期、時間及\n    交易備考編號\"\t\t\n   我們會在收實款額後向客人發。電郵確定,並開始安排製造/設計。\t\t\n  ＊請保留閣下之入數收據直至交易完成,如過戶入脹出現問題,\t\t\n   本公司將要求顧客電郵該收據給我們以作參考\t\t\n\t\t\n備註：\t\t\n1.除非特別註明, 否則所列出之金額一律以港幣(HKD)計算\t\t\n\"2.如使用支票,電匯,跨行轉賬等非即時結算方式付款, 本公司   \n會在收實款額後才進行確認程序，敬請客人注意·\"\t\t\n\"3.星期一至五18：00後(星期六12:00後)收到之付款將於\n下一個工作天跟進\"\t\t",
   "Subject": "",
   "LateFee Name": "",
   "LateFee Type": "% of Invoice",
   "LateFee Rate": 0,
   "LateFee Amount": 0,
   "LateFee Frequency": "Every Month",
   "WriteOff Date": "",
   "WriteOff Exchange Rate": 1,
   "WriteOff Amount": 0,
   "Recurrence Name": "",
   "PayPal": false,
   "Authorize.Net": false,
   "Google Checkout": false,
   "Payflow Pro": false,
   "Stripe": false,
   "2Checkout": false,
   "Braintree": false,
   "Forte": false,
   "WorldPay": false,
   "Payments Pro": false,
   "Square": false,
   "WePay": false,
   "Razorpay": false,
   "GoCardless": false,
   "Partial Payments": false,
   "Billing Address": "",
   "Billing City": "",
   "Billing State": "",
   "Billing Country": "",
   "Billing Code": "",
   "Billing Fax": "",
   "Billing Phone": "",
   "Shipping Address": "",
   "Shipping City": "",
   "Shipping State": "",
   "Shipping Country": "",
   "Shipping Code": "",
   "Shipping Fax": "",
   "Shipping Phone Number": ""

   */ 


/***/ })

}]);
//# sourceMappingURL=firebase-inventory-create-create-module-es2015.js.map