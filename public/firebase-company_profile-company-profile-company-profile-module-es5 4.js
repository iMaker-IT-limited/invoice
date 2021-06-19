(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-company_profile-company-profile-company-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/company_profile/company-profile/company-profile.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/company_profile/company-profile/company-profile.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"theme\">Company Profile</ion-title>\n\n    <ion-button slot=\"end\" fill=\"clear\" color=\"theme\" (click)=\"updateContact()\">\n      Update\n    </ion-button>\n\n    <ion-button slot=\"end\" fill=\"clear\" color=\"theme\" (click)=\"deleteContact()\">\n      Delete\n    </ion-button>\n\n    <ion-button fill=\"clear\" slot=\"end\" color=\"theme\" (click)=\"dismissModal()\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-item-divider sticky>\n    <ion-title>New Customer</ion-title>\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"readContact()\">\n      Get\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"updateContact()\">\n      Update\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"deleteContact()\">\n      Delete\n    </ion-button>\n\n  </ion-item-divider>\n\n  <ion-progress-bar color=\"theme\" type=\"indeterminate\"></ion-progress-bar> -->\n\n  <ion-card style=\"box-shadow: none;\">\n    <div class=\"tabset\">\n      <!-- Tab 1 -->\n      <input type=\"radio\" name=\"tabset\" id=\"tab11\" aria-controls=\"a\" checked>\n      <label for=\"tab11\">Set up Company detail</label>\n      <!-- Tab 2 -->\n      <input type=\"radio\" name=\"tabset\" id=\"tab22\" aria-controls=\"b\">\n      <label for=\"tab22\">Terms and Conditions</label>\n      <!-- Tab 3 -->\n      <input type=\"radio\" name=\"tabset\" id=\"tab33\" aria-controls=\"c\">\n      <label for=\"tab33\">Customer Notes</label>\n\n\n      <!-- <ion-button (click)=\"onDismiss()\">\n                <ion-icon name=\"close\"></ion-icon>\n          </ion-button> -->\n\n      <div class=\"tab-panels\">\n        <section id=\"a\" class=\"tab-panel\">\n          {{displayName}} {{uid}} {{email}}\n\n          <div style=\"padding: 20px;\">\n            <app-uploader [id]=\"uid\"></app-uploader>\n          </div>\n\n          <div class=\"testbox\">\n\n            <form [formGroup]=\"createContactForm\" (ngSubmit)=\"createContact()\">\n              <h4>Customer Type<span>*</span></h4>\n              <div class=\"title-radio\">\n                <input style=\"width: 40px;\" type=\"radio\" value=\"business\" formControlName=\"type\" />\n                <label for=\"banma\">Business</label><br />\n                <input style=\"width: 40px;\" type=\"radio\" value=\"individual\" formControlName=\"type\" />\n                <label for=\"kokui\">Individual</label>\n              </div>\n\n              <h4>Primary Contact<span>*</span></h4>\n              <div class=\"title-block\">\n                <select formControlName=\"unit\">\n                  <option value=\"Type\">Salutation</option>\n                  <option value=\"Mr.\">Mr.</option>\n                  <option value=\"Mrs.\">Mrs.</option>\n                  <option value=\"Ms.\">Ms.</option>\n                  <option value=\"Miss\">Miss</option>\n                  <option value=\"Dr.\">Dr.</option>\n                </select>\n              </div>\n\n              <div class=\"title-block\">\n                <input type=\"text\" name=\"first_name\" placeholder=\"First Name\" formControlName=\"first_name\" />\n              </div>\n\n              <div class=\"title-block\">\n                <input type=\"text\" name=\"last_name\" placeholder=\"Last Name\" formControlName=\"last_name\" />\n              </div>\n\n              <ion-label>Company Name</ion-label>\n              <div class=\"title-block\">\n                <input type=\"text\" name=\"company_name\" placeholder=\"Company Name\" formControlName=\"company_name\" />\n              </div>\n\n              <h4 style=\"color: #e54643;\">Customer Display Name <span>*</span></h4>\n              <div class=\"title-block\">\n                <input type=\"text\" name=\"customer_display_name\" placeholder=\"Customer Name\"\n                  formControlName=\"customer_display_name\" />\n              </div>\n\n              <h4>Customer Email</h4>\n              <div class=\"title-block\">\n                <input type=\"text\" name=\"customer_email\" placeholder=\"Customer Email\"\n                  formControlName=\"customer_email\" />\n              </div>\n\n              <h4>Customer Phone</h4>\n              <div class=\"title-block\">\n                <input type=\"text\" name=\"work_phone\" placeholder=\"Work Phone\" formControlName=\"work_phone\" />\n              </div>\n\n              <div class=\"title-block\">\n                <input type=\"text\" name=\"mobile_phone\" placeholder=\"Mobile\" formControlName=\"mobile_phone\" />\n              </div>\n\n              <h4>Website</h4>\n              <div class=\"title-block\">\n                <input type=\"text\" name=\"website\" placeholder=\"Website\" formControlName=\"website\" />\n              </div>\n\n              <h4>Description</h4>\n              <div class=\"title-block\">\n                <textarea rows=\"5\" formControlName=\"description\"></textarea>\n              </div>\n\n              <div class=\"btn-block\">\n                <button type=\"submit\">Save</button>\n              </div>\n            </form>\n          </div>\n\n        </section>\n        <section id=\"b\" class=\"tab-panel\">\n          <div class=\"testbox\">\n            <ion-label>Terms and Conditions</ion-label>\n            <input type=\"text\">\n          </div>\n        </section>\n        <section id=\"c\" class=\"tab-panel\">\n          <div class=\"testbox\">\n            <ion-label>Customer Notes</ion-label>\n            <input type=\"text\">\n          </div>\n        </section>\n\n      </div>\n\n\n    </div>\n  </ion-card>\n\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/firebase/company_profile/company-profile/company-profile.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/firebase/company_profile/company-profile/company-profile.module.ts ***!
  \************************************************************************************/
/*! exports provided: CompanyProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProfilePageModule", function() { return CompanyProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _company_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-profile.page */ "./src/app/firebase/company_profile/company-profile/company-profile.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");










var routes = [
    {
        path: '',
        component: _company_profile_page__WEBPACK_IMPORTED_MODULE_6__["CompanyProfilePage"]
    }
];
var CompanyProfilePageModule = /** @class */ (function () {
    function CompanyProfilePageModule() {
    }
    CompanyProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_company_profile_page__WEBPACK_IMPORTED_MODULE_6__["CompanyProfilePage"]],
            providers: [
                _firebase_integration_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseService"],
                _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
            ]
        })
    ], CompanyProfilePageModule);
    return CompanyProfilePageModule;
}());



/***/ }),

/***/ "./src/app/firebase/company_profile/company-profile/company-profile.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/firebase/company_profile/company-profile/company-profile.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\ndiv,\nform,\ninput,\nselect {\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 12px;\n  color: #666;\n  line-height: 22px;\n}\n\nh1,\nh4 {\n  margin: 15px 0 4px;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 13px;\n  margin: 20px 0 4px;\n  font-weight: 400;\n}\n\nspan {\n  color: red;\n}\n\n.small {\n  font-size: 10px;\n  line-height: 18px;\n}\n\n.testbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 2px 5px #ccc;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 30%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 31%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\nlabel {\n  line-height: 1 !important;\n}\n\n/*\n CSS for the main interaction / tabset\n*/\n\n.tabset > input[type=radio] {\n  position: absolute;\n  left: -200vw;\n}\n\n.tabset .tab-panel {\n  display: none;\n}\n\n.tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,\n.tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),\n.tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),\n.tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),\n.tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),\n.tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {\n  display: block;\n}\n\n.tabset > label {\n  position: relative;\n  display: inline-block;\n  padding: 15px 15px 25px;\n  border: 1px solid transparent;\n  border-bottom: 0;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.tabset > label::after {\n  content: \"\";\n  position: absolute;\n  left: 15px;\n  bottom: 10px;\n  width: 22px;\n  height: 4px;\n  background: #8d8d8d;\n}\n\n.tabset > label:hover,\n.tabset > input:focus + label {\n  color: #06c;\n}\n\n.tabset > label:hover::after,\n.tabset > input:focus + label::after,\n.tabset > input:checked + label::after {\n  background: #06c;\n}\n\n.tabset > input:checked + label {\n  border-color: #ccc;\n  border-bottom: 1px solid #fff;\n  margin-bottom: -1px;\n}\n\n.tab-panel {\n  padding: 30px 0;\n  border-top: 1px solid #ccc;\n}\n\n/*\n Demo purposes only\n*/\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9jb21wYW55X3Byb2ZpbGUvY29tcGFueS1wcm9maWxlL2NvbXBhbnktcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2NvbXBhbnlfcHJvZmlsZS9jb21wYW55LXByb2ZpbGUvY29tcGFueS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTs7RUFFQyxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNDRDs7QURFQTtFQUNDLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NEOztBREVBOzs7RUFHQyxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVBOztFQUVDLG1CQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsV0FBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTs7RUFFQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0Msb0JBQUE7QUNDRDs7QURFQTs7O0VBR0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0NEOztBREVBOztFQUVDLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBOztFQUVDLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0Q7O0FERUE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLHVCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7RUFDQyx5QkFBQTtBQ0NEOztBREVBO0VBQ0M7SUFDQyxvQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUNDQTs7RURDRDtJQUNDLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsOEJBQUE7RUNFQTs7RURBRDtJQUNDLFVBQUE7SUFDQSxnQkFBQTtFQ0dBOztFREREO0lBQ0MsVUFBQTtJQUNBLGdCQUFBO0VDSUE7O0VERkQ7O0lBRUMsb0JBQUE7RUNLQTtBQUNGOztBREZBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDSUQ7O0FEREE7RUFDQyx5QkFBQTtBQ0lEOztBRERBOztDQUFBOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDSUY7O0FEREE7RUFDRSxhQUFBO0FDSUY7O0FEREE7Ozs7OztFQU1FLGNBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0lGOztBRERBOztFQUVFLFdBQUE7QUNJRjs7QUREQTs7O0VBR0UsZ0JBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FDSUY7O0FEREE7O0NBQUE7O0FBR0E7OztFQUdFLHNCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9jb21wYW55X3Byb2ZpbGUvY29tcGFueS1wcm9maWxlL2NvbXBhbnktcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LFxuZGl2LFxuZm9ybSxcbmlucHV0LFxuc2VsZWN0IHtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHRvdXRsaW5lOiBub25lO1xuXHRmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRjb2xvcjogIzY2Njtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbmgxLFxuaDQge1xuXHRtYXJnaW46IDE1cHggMCA0cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg0IHtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRtYXJnaW46IDIwcHggMCA0cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbnNwYW4ge1xuXHRjb2xvcjogcmVkO1xufVxuXG4uc21hbGwge1xuXHRmb250LXNpemU6IDEwcHg7XG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4udGVzdGJveCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IGluaGVyaXQ7XG5cdHBhZGRpbmc6IDBweDtcbn1cblxuZm9ybSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRib3gtc2hhZG93OiAwIDJweCA1cHggI2NjYztcbn1cblxuaW5wdXQge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG5cdHBhZGRpbmc6IDVweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dDpob3ZlcixcbnRleHRhcmVhOmhvdmVyLFxuc2VsZWN0OmhvdmVyIHtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgIzA5NTQ4NDtcblx0YmFja2dyb3VuZDogI2U2ZWVmNztcbn1cblxuLnRpdGxlLWJsb2NrIHNlbGVjdCxcbi50aXRsZS1ibG9jayBpbnB1dCB7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnNlbGVjdCB7XG5cdHBhZGRpbmc6IDdweCAwO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5zZWxlY3QsXG50YWJsZSB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG5vcHRpb24ge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGF5LXZpc2l0ZWQsXG4udGltZS12aXNpdGVkIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9XCJ0aW1lXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcblx0bWFyZ2luOiAycHggMjJweCAwIDA7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpLFxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA4cHg7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGkge1xuXHRyaWdodDogNXB4O1xuXHR6LWluZGV4OiAxO1xuXHRjb2xvcjogI2E5YTlhOTtcbn1cblxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuXHRyaWdodDogMDtcblx0ei1pbmRleDogMjtcblx0b3BhY2l0eTogMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBsYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiAwIDIwcHggMTBweCAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGlucHV0IHtcblx0d2lkdGg6IGF1dG87XG5cdG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbnRoLFxudGQge1xuXHR3aWR0aDogMTglO1xuXHRwYWRkaW5nOiAxNXB4IDA7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHZlcnRpY2FsLWFsaWduOiB1bnNldDtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmZpcnN0LWNvbCB7XG5cdHdpZHRoOiAyNSU7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRleHRhcmVhIHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5idG4tYmxvY2sge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG5cdHdpZHRoOiAxNTBweDtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyOiBub25lO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA5NTQ4NDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogI2ZmZjtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDY2NmEzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHtcblx0LnRpdGxlLXJhZGlvIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRwYWRkaW5nLXRvcDogMTVweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcblx0fVxuXHQudGl0bGUtYmxvY2sge1xuXHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRtYXJnaW4tbGVmdDogMTVweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdC50aXRsZS1ibG9jayBzZWxlY3Qge1xuXHRcdHdpZHRoOiAzMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHQudGl0bGUtYmxvY2sgaW5wdXQge1xuXHRcdHdpZHRoOiAzMSU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHR0aCxcblx0dGQge1xuXHRcdHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuXHR9XG59XG5cbi5zZXJ2aWNlIHtcblx0cG9zaXRpb246IHN0YXRpYztcblx0bWFyZ2luLXRvcDogMDtcblx0bWFyZ2luLXJpZ2h0OiAuMzEyNXJlbTtcblx0bWFyZ2luLWxlZnQ6IDA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctbGVmdDogMDtcblx0bWFyZ2luLXJpZ2h0OiAuNzVyZW07XG59XG5cbmxhYmVsIHtcblx0bGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcbn1cblxuLypcbiBDU1MgZm9yIHRoZSBtYWluIGludGVyYWN0aW9uIC8gdGFic2V0XG4qL1xuLnRhYnNldCA+IGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTIwMHZ3O1xufVxuXG4udGFic2V0IC50YWItcGFuZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFic2V0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpmaXJzdC1jaGlsZCxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoMyk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoMiksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDUpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDMpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCg3KTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg0KSxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoOSk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNSksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDExKTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg2KSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGFic2V0ID4gbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTVweCAxNXB4IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50YWJzZXQgPiBsYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1cHg7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjOGQ4ZDhkO1xufVxuXG4udGFic2V0ID4gbGFiZWw6aG92ZXIsXG4udGFic2V0ID4gaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XG4gIGNvbG9yOiAjMDZjO1xufVxuXG4udGFic2V0ID4gbGFiZWw6aG92ZXI6OmFmdGVyLFxuLnRhYnNldCA+IGlucHV0OmZvY3VzICsgbGFiZWw6OmFmdGVyLFxuLnRhYnNldCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDZjO1xufVxuXG4udGFic2V0ID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLnRhYi1wYW5lbCB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG5cbi8qXG4gRGVtbyBwdXJwb3NlcyBvbmx5XG4qL1xuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuLnRhYnNldCB7XG4vLyBtYXgtd2lkdGg6IDY1ZW07XG59XG5cbi8vIGVuZCBvZiB0YWJzXG5cbiIsImJvZHksXG5kaXYsXG5mb3JtLFxuaW5wdXQsXG5zZWxlY3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuaDEsXG5oNCB7XG4gIG1hcmdpbjogMTVweCAwIDRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMjBweCAwIDRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi50ZXN0Ym94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAjY2NjO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6aG92ZXIsXG5zZWxlY3Q6aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDk1NDg0O1xuICBiYWNrZ3JvdW5kOiAjZTZlZWY3O1xufVxuXG4udGl0bGUtYmxvY2sgc2VsZWN0LFxuLnRpdGxlLWJsb2NrIGlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuc2VsZWN0IHtcbiAgcGFkZGluZzogN3B4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbnNlbGVjdCxcbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm9wdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kYXktdmlzaXRlZCxcbi50aW1lLXZpc2l0ZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPXRpbWVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgbWFyZ2luOiAycHggMjJweCAwIDA7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpLFxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSB7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjYTlhOWE5O1xufVxuXG5bdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAyMHB4IDEwcHggMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBpbnB1dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG50aCxcbnRkIHtcbiAgd2lkdGg6IDE4JTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdW5zZXQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5maXJzdC1jb2wge1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xufVxuXG4uYnRuLWJsb2NrIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTU0ODQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NjZhMztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSB7XG4gIC50aXRsZS1yYWRpbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIH1cblxuICAudGl0bGUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnRpdGxlLWJsb2NrIHNlbGVjdCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLnRpdGxlLWJsb2NrIGlucHV0IHtcbiAgICB3aWR0aDogMzElO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICB0aCxcbnRkIHtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgfVxufVxuLnNlcnZpY2Uge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuMzEyNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xufVxuXG5sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG59XG5cbi8qXG4gQ1NTIGZvciB0aGUgbWFpbiBpbnRlcmFjdGlvbiAvIHRhYnNldFxuKi9cbi50YWJzZXQgPiBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTIwMHZ3O1xufVxuXG4udGFic2V0IC50YWItcGFuZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFic2V0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpmaXJzdC1jaGlsZCxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoMyk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoMiksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDUpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDMpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCg3KTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg0KSxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoOSk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNSksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDExKTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg2KSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGFic2V0ID4gbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTVweCAxNXB4IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50YWJzZXQgPiBsYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1cHg7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjOGQ4ZDhkO1xufVxuXG4udGFic2V0ID4gbGFiZWw6aG92ZXIsXG4udGFic2V0ID4gaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XG4gIGNvbG9yOiAjMDZjO1xufVxuXG4udGFic2V0ID4gbGFiZWw6aG92ZXI6OmFmdGVyLFxuLnRhYnNldCA+IGlucHV0OmZvY3VzICsgbGFiZWw6OmFmdGVyLFxuLnRhYnNldCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDZjO1xufVxuXG4udGFic2V0ID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLnRhYi1wYW5lbCB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG5cbi8qXG4gRGVtbyBwdXJwb3NlcyBvbmx5XG4qL1xuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"

/***/ }),

/***/ "./src/app/firebase/company_profile/company-profile/company-profile.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/firebase/company_profile/company-profile/company-profile.page.ts ***!
  \**********************************************************************************/
/*! exports provided: CompanyProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProfilePage", function() { return CompanyProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");






// import { SelectUserImageModal } from "../select-image/select-user-image.modal";
var CompanyProfilePage = /** @class */ (function () {
    function CompanyProfilePage(navCtrl, firebaseService, authService) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.displayName = this.authService.displayName();
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    CompanyProfilePage.prototype.ngOnInit = function () {
        // company name
        // address
        // base currency
        // business phone/ work phone
        // mobile phone
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
    };
    // get skillsFormArray() { return <FormArray>this.createUserForm.get('skills'); }
    CompanyProfilePage.prototype.changeLangValue = function (value) {
        switch (true) {
            case value <= 3:
                return "Novice";
            case value > 3 && value <= 6:
                return "Competent";
            case value > 6:
                return "Expert";
        }
    };
    CompanyProfilePage.prototype.submitFilterForm = function () {
        console.log(this.FilterForm.value);
    };
    CompanyProfilePage.prototype.onReset = function () {
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
    };
    CompanyProfilePage.prototype.dismissModal = function () {
        //  this.modalController.dismiss();
        this.navCtrl.navigateBack('/firebase/user-profile');
    };
    // CRUD
    CompanyProfilePage.prototype.createContact = function () {
        console.log(this.uid, this.email, this.createContactForm.value);
        this.firebaseService.createContacts(this.uid, this.email, this.createContactForm.value).then(function () {
            // this.dismissModal();
        });
    };
    CompanyProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    CompanyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-profile',
            template: __webpack_require__(/*! raw-loader!./company-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/company_profile/company-profile/company-profile.page.html"),
            styles: [__webpack_require__(/*! ./company-profile.page.scss */ "./src/app/firebase/company_profile/company-profile/company-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
            _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], CompanyProfilePage);
    return CompanyProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=firebase-company_profile-company-profile-company-profile-module-es5.js.map