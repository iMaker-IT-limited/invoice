(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-company_profile-company-profile-company-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/company_profile/company-profile/company-profile.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/company_profile/company-profile/company-profile.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header\">\n    <ion-title color=\"theme\">Company Profile</ion-title>\n\n    <!-- <ion-button slot=\"end\" fill=\"clear\" color=\"theme\" (click)=\"updateContact()\">\n      Update\n    </ion-button>\n\n    <ion-button slot=\"end\" fill=\"clear\" color=\"theme\" (click)=\"deleteContact()\">\n      Delete\n    </ion-button> -->\n\n    <ion-button fill=\"clear\" slot=\"end\" color=\"theme\" (click)=\"dismissModal()\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <!-- <ion-item-divider sticky>\n    <ion-title>New Customer</ion-title>\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"readContact()\">\n      Get\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"updateContact()\">\n      Update\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"deleteContact()\">\n      Delete\n    </ion-button>\n\n  </ion-item-divider>\n\n  <ion-progress-bar color=\"theme\" type=\"indeterminate\"></ion-progress-bar> -->\n\n  <ion-card style=\"box-shadow: none;\">\n    <div class=\"tabset\">\n      <!-- Tab 1 -->\n      <input type=\"radio\" name=\"tabset\" id=\"tab11\" aria-controls=\"a\" checked>\n      <label for=\"tab11\">Set up Company detail</label>\n      <!-- Tab 2 -->\n      <input type=\"radio\" name=\"tabset\" id=\"tab22\" aria-controls=\"b\">\n      <label for=\"tab22\">Terms and Conditions</label>\n      <!-- Tab 3 -->\n      <input type=\"radio\" name=\"tabset\" id=\"tab33\" aria-controls=\"c\">\n      <label for=\"tab33\">Customer Notes</label>\n\n      <!-- <ion-button (click)=\"onDismiss()\">\n                <ion-icon name=\"close\"></ion-icon>\n          </ion-button> -->\n\n      <div class=\"tab-panels\">\n        <section id=\"a\" class=\"tab-panel\">\n\n          <!-- <div style=\"padding: 20px;\">\n            <app-uploader [id]=\"uid\"></app-uploader>\n          </div> -->\n\n          <div class=\"testbox\">\n\n            <form [formGroup]=\"createCompanyProfileForm\" (ngSubmit)=\"createCompanyProfile()\">\n\n              <ion-card style=\"box-shadow: none;\">\n                <ion-card-header>\n                  Company Logo\n                </ion-card-header>\n\n                <input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" (change)=\"onChange($event)\" />\n\n                <div *ngIf=\"myimage\">\n                  <img [src]=\"myimage | async\" width=\"200px\" height=\"200px\" alt=\"\">\n                </div>\n              </ion-card>\n\n              <!-- <h4>Customer Type<span>*</span></h4>\n              <div class=\"title-radio\">\n                <input style=\"width: 40px;\" type=\"radio\" value=\"business\" formControlName=\"type\" />\n                <label for=\"banma\">Business</label><br />\n                <input style=\"width: 40px;\" type=\"radio\" value=\"individual\" formControlName=\"type\" />\n                <label for=\"kokui\">Individual</label>\n              </div> -->\n\n              <!-- <h4>Primary Contact<span>*</span></h4>\n              <div class=\"title-block\">\n                <select formControlName=\"unit\">\n                  <option value=\"Type\">Salutation</option>\n                  <option value=\"Mr.\">Mr.</option>\n                  <option value=\"Mrs.\">Mrs.</option>\n                  <option value=\"Ms.\">Ms.</option>\n                  <option value=\"Miss\">Miss</option>\n                  <option value=\"Dr.\">Dr.</option>\n                </select>\n              </div> -->\n\n              <h4>Address</h4>\n              <div class=\"title-block\">\n                <input type=\"text\" name=\"address\" placeholder=\"Address\" formControlName=\"address\" />\n              </div>\n\n              <h4>Company Name</h4>\n              <div class=\"title-block\">\n                <input type=\"text\" name=\"company_name\" placeholder=\"Company Name\" formControlName=\"company_name\" />\n              </div>\n\n              <h4>Company Email</h4>\n              <div class=\"title-block\">\n                <input type=\"email\" name=\"company_email\" placeholder=\"Company Eamil\" formControlName=\"company_email\" />\n              </div>\n\n              <h4>Website</h4>\n              <div class=\"title-block\">\n                <input type=\"text\" name=\"website\" placeholder=\"website\" formControlName=\"website\" />\n              </div>\n\n              <h4>Phone</h4>\n              <div class=\"title-block\">\n                <input type=\"text\" name=\"work_phone\" placeholder=\"Work Phone\" formControlName=\"work_phone\" />\n              </div>\n\n              <div class=\"btn-block\">\n                <button type=\"submit\">Save</button>\n              </div>\n            </form>\n\n          </div>\n        </section>\n        <section id=\"b\" class=\"tab-panel\">\n          <div class=\"testbox\">\n            <form [formGroup]=\"createTermsandConditionsForm\" (ngSubmit)=\"createTermsandConditions()\">\n              <h4>Terms and Conditions</h4>\n              <div class=\"title-block\">\n                <!-- <input type=\"text\" name=\"address\" placeholder=\"Terms and Condtions\"\n                  formControlName=\"termsandconditions\" /> -->\n\n                <ion-textarea rows=\"6\" class=\"form-control\" formControlName=\"termsandconditions\"\n                  placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\">\n                </ion-textarea>\n              </div>\n\n              <div class=\"btn-block\">\n                <button type=\"submit\">Save</button>\n              </div>\n            </form>\n          </div>\n        </section>\n        <section id=\"c\" class=\"tab-panel\">\n          <div class=\"testbox\">\n            <form [formGroup]=\"createCustomerNotesForm\" (ngSubmit)=\"createCustomerNotes()\">\n              <h4>Customer Notes</h4>\n              <div class=\"title-block\">\n                <!-- <input type=\"text\" name=\"address\" placeholder=\"Customer notes\" formControlName=\"customernotes\" /> -->\n                <ion-textarea rows=\"6\" class=\"form-control\" formControlName=\"customernotes\"\n                  placeholder=\"Customer notes\">\n                </ion-textarea>\n              </div>\n\n              <div class=\"btn-block\">\n                <button type=\"submit\">Save</button>\n              </div>\n            </form>\n          </div>\n        </section>\n\n      </div>\n\n\n    </div>\n  </ion-card>\n\n\n\n\n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _company_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-profile.page */ "./src/app/firebase/company_profile/company-profile/company-profile.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");










const routes = [
    {
        path: '',
        component: _company_profile_page__WEBPACK_IMPORTED_MODULE_6__["CompanyProfilePage"]
    }
];
let CompanyProfilePageModule = class CompanyProfilePageModule {
};
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



/***/ }),

/***/ "./src/app/firebase/company_profile/company-profile/company-profile.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/firebase/company_profile/company-profile/company-profile.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\ndiv,\nform,\ninput,\nselect {\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 12px;\n  color: #666;\n  line-height: 22px;\n}\n\nh1,\nh4 {\n  margin: 15px 0 4px;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 13px;\n  margin: 20px 0 4px;\n  font-weight: 400;\n}\n\nspan {\n  color: red;\n}\n\n.small {\n  font-size: 10px;\n  line-height: 18px;\n}\n\n.testbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 2px 5px #ccc;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 30%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 31%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\nlabel {\n  line-height: 1 !important;\n}\n\n/*\n CSS for the main interaction / tabset\n*/\n\n.tabset > input[type=radio] {\n  position: absolute;\n  left: -200vw;\n}\n\n.tabset .tab-panel {\n  display: none;\n}\n\n.tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,\n.tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),\n.tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),\n.tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),\n.tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),\n.tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {\n  display: block;\n}\n\n.tabset > label {\n  position: relative;\n  display: inline-block;\n  padding: 15px 15px 25px;\n  border: 1px solid transparent;\n  border-bottom: 0;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.tabset > label::after {\n  content: \"\";\n  position: absolute;\n  left: 15px;\n  bottom: 10px;\n  width: 22px;\n  height: 4px;\n  background: #8d8d8d;\n}\n\n.tabset > label:hover,\n.tabset > input:focus + label {\n  color: #06c;\n}\n\n.tabset > label:hover::after,\n.tabset > input:focus + label::after,\n.tabset > input:checked + label::after {\n  background: #06c;\n}\n\n.tabset > input:checked + label {\n  border-color: #ccc;\n  border-bottom: 1px solid #fff;\n  margin-bottom: -1px;\n}\n\n.tab-panel {\n  padding: 30px 0;\n  border-top: 1px solid #ccc;\n}\n\n/*\n Demo purposes only\n*/\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\n.header {\n  height: 50px;\n}\n\n.input[_ngcontent-rbp-c16] {\n  background: var(--ion-color-theme);\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9jb21wYW55X3Byb2ZpbGUvY29tcGFueS1wcm9maWxlL2NvbXBhbnktcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2NvbXBhbnlfcHJvZmlsZS9jb21wYW55LXByb2ZpbGUvY29tcGFueS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDRDs7QURFQTs7RUFFQyxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNDRDs7QURFQTtFQUNDLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NEOztBREVBOzs7RUFHQyxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVBOztFQUVDLG1CQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Q7O0FERUE7O0VBRUMsV0FBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTs7RUFFQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0Msb0JBQUE7QUNDRDs7QURFQTs7O0VBR0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0NEOztBREVBOztFQUVDLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBOztFQUVDLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0Q7O0FERUE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLHVCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7RUFDQyx5QkFBQTtBQ0NEOztBREVBO0VBQ0M7SUFDQyxvQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUNDQTs7RURDRDtJQUNDLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsOEJBQUE7RUNFQTs7RURBRDtJQUNDLFVBQUE7SUFDQSxnQkFBQTtFQ0dBOztFREREO0lBQ0MsVUFBQTtJQUNBLGdCQUFBO0VDSUE7O0VERkQ7O0lBRUMsb0JBQUE7RUNLQTtBQUNGOztBREZBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDSUQ7O0FEREE7RUFDQyx5QkFBQTtBQ0lEOztBRERBOztDQUFBOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDSUY7O0FEREE7RUFDRSxhQUFBO0FDSUY7O0FEREE7Ozs7OztFQU1FLGNBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0lGOztBRERBOztFQUVFLFdBQUE7QUNJRjs7QUREQTs7O0VBR0UsZ0JBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FDSUY7O0FEREE7O0NBQUE7O0FBR0E7OztFQUdFLHNCQUFBO0FDSUY7O0FET0E7RUFDQyxZQUFBO0FDSkQ7O0FET0E7RUFDQyxrQ0FBQTtFQUNBLFlBQUE7QUNKRCIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL2NvbXBhbnlfcHJvZmlsZS9jb21wYW55LXByb2ZpbGUvY29tcGFueS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksXG5kaXYsXG5mb3JtLFxuaW5wdXQsXG5zZWxlY3Qge1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDEycHg7XG5cdGNvbG9yOiAjNjY2O1xuXHRsaW5lLWhlaWdodDogMjJweDtcbn1cblxuaDEsXG5oNCB7XG5cdG1hcmdpbjogMTVweCAwIDRweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDQge1xuXHRmb250LXNpemU6IDEzcHg7XG5cdG1hcmdpbjogMjBweCAwIDRweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuc3BhbiB7XG5cdGNvbG9yOiByZWQ7XG59XG5cbi5zbWFsbCB7XG5cdGZvbnQtc2l6ZTogMTBweDtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi50ZXN0Ym94IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGhlaWdodDogaW5oZXJpdDtcblx0cGFkZGluZzogMHB4O1xufVxuXG5mb3JtIHtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDVweCAjY2NjO1xufVxuXG5pbnB1dCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcblx0cGFkZGluZzogNXB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6aG92ZXIsXG5zZWxlY3Q6aG92ZXIge1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDk1NDg0O1xuXHRiYWNrZ3JvdW5kOiAjZTZlZWY3O1xufVxuXG4udGl0bGUtYmxvY2sgc2VsZWN0LFxuLnRpdGxlLWJsb2NrIGlucHV0IHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuc2VsZWN0IHtcblx0cGFkZGluZzogN3B4IDA7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbnNlbGVjdCxcbnRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbm9wdGlvbiB7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kYXktdmlzaXRlZCxcbi50aW1lLXZpc2l0ZWQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInRpbWVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuXHRtYXJnaW46IDJweCAyMnB4IDAgMDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGksXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDhweDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSB7XG5cdHJpZ2h0OiA1cHg7XG5cdHotaW5kZXg6IDE7XG5cdGNvbG9yOiAjYTlhOWE5O1xufVxuXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG5cdHJpZ2h0OiAwO1xuXHR6LWluZGV4OiAyO1xuXHRvcGFjaXR5OiAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGxhYmVsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAgMjBweCAxMHB4IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgaW5wdXQge1xuXHR3aWR0aDogYXV0bztcblx0bWFyZ2luLXRvcDogLTJweDtcbn1cblxudGgsXG50ZCB7XG5cdHdpZHRoOiAxOCU7XG5cdHBhZGRpbmc6IDE1cHggMDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dmVydGljYWwtYWxpZ246IHVuc2V0O1xuXHRsaW5lLWhlaWdodDogMThweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uZmlyc3QtY29sIHtcblx0d2lkdGg6IDI1JTtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGV4dGFyZWEge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcbn1cblxuLmJ0bi1ibG9jayB7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcblx0d2lkdGg6IDE1MHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXI6IG5vbmU7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1NDg0O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNjY2YTM7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NjhweCkge1xuXHQudGl0bGUtcmFkaW8ge1xuXHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdHBhZGRpbmctdG9wOiAxNXB4O1xuXHRcdGp1c3RpZnktY29udGVudDogZW5kO1xuXHR9XG5cdC50aXRsZS1ibG9jayB7XG5cdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdG1hcmdpbi1sZWZ0OiAxNXB4O1xuXHRcdG1hcmdpbi1yaWdodDogMTVweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblx0LnRpdGxlLWJsb2NrIHNlbGVjdCB7XG5cdFx0d2lkdGg6IDMwJTtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG5cdC50aXRsZS1ibG9jayBpbnB1dCB7XG5cdFx0d2lkdGg6IDMxJTtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG5cdHRoLFxuXHR0ZCB7XG5cdFx0d29yZC1icmVhazoga2VlcC1hbGw7XG5cdH1cbn1cblxuLnNlcnZpY2Uge1xuXHRwb3NpdGlvbjogc3RhdGljO1xuXHRtYXJnaW4tdG9wOiAwO1xuXHRtYXJnaW4tcmlnaHQ6IC4zMTI1cmVtO1xuXHRtYXJnaW4tbGVmdDogMDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZy1sZWZ0OiAwO1xuXHRtYXJnaW4tcmlnaHQ6IC43NXJlbTtcbn1cblxubGFiZWwge1xuXHRsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xufVxuXG4vKlxuIENTUyBmb3IgdGhlIG1haW4gaW50ZXJhY3Rpb24gLyB0YWJzZXRcbiovXG4udGFic2V0ID4gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMjAwdnc7XG59XG5cbi50YWJzZXQgLnRhYi1wYW5lbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJzZXQgPiBpbnB1dDpmaXJzdC1jaGlsZDpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOmZpcnN0LWNoaWxkLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCgzKTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCgyKSxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoNSk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoMyksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDcpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDQpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCg5KTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg1KSxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoMTEpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDYpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50YWJzZXQgPiBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRhYnNldCA+IGxhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICM4ZDhkOGQ7XG59XG5cbi50YWJzZXQgPiBsYWJlbDpob3Zlcixcbi50YWJzZXQgPiBpbnB1dDpmb2N1cyArIGxhYmVsIHtcbiAgY29sb3I6ICMwNmM7XG59XG5cbi50YWJzZXQgPiBsYWJlbDpob3Zlcjo6YWZ0ZXIsXG4udGFic2V0ID4gaW5wdXQ6Zm9jdXMgKyBsYWJlbDo6YWZ0ZXIsXG4udGFic2V0ID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMwNmM7XG59XG5cbi50YWJzZXQgPiBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuXG4udGFiLXBhbmVsIHtcbiAgcGFkZGluZzogMzBweCAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbn1cblxuLypcbiBEZW1vIHB1cnBvc2VzIG9ubHlcbiovXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG4udGFic2V0IHtcbi8vIG1heC13aWR0aDogNjVlbTtcbn1cblxuLy8gZW5kIG9mIHRhYnNcblxuXG4uaGVhZGVyIHtcblx0aGVpZ2h0OiA1MHB4O1xufVxuXG4uaW5wdXRbX25nY29udGVudC1yYnAtYzE2XSB7XG5cdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5cdGJvcmRlcjogbm9uZTtcbn0iLCJib2R5LFxuZGl2LFxuZm9ybSxcbmlucHV0LFxuc2VsZWN0IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2NjtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbmgxLFxuaDQge1xuICBtYXJnaW46IDE1cHggMCA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDIwcHggMCA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4udGVzdGJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggI2NjYztcbn1cblxuaW5wdXQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dDpob3ZlcixcbnRleHRhcmVhOmhvdmVyLFxuc2VsZWN0OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5NTQ4NDtcbiAgYmFja2dyb3VuZDogI2U2ZWVmNztcbn1cblxuLnRpdGxlLWJsb2NrIHNlbGVjdCxcbi50aXRsZS1ibG9jayBpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5zZWxlY3QsXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5vcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGF5LXZpc2l0ZWQsXG4udGltZS12aXNpdGVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT10aW1lXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIG1hcmdpbjogMnB4IDIycHggMCAwO1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSxcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGkge1xuICByaWdodDogNXB4O1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2E5YTlhOTtcbn1cblxuW3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMjBweCAxMHB4IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgaW5wdXQge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxudGgsXG50ZCB7XG4gIHdpZHRoOiAxOCU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHVuc2V0O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uZmlyc3QtY29sIHtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcbn1cblxuLmJ0bi1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1NDg0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjY2YTM7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NjhweCkge1xuICAudGl0bGUtcmFkaW8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICB9XG5cbiAgLnRpdGxlLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayBzZWxlY3Qge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayBpbnB1dCB7XG4gICAgd2lkdGg6IDMxJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgdGgsXG50ZCB7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gIH1cbn1cbi5zZXJ2aWNlIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjMxMjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbn1cblxubGFiZWwge1xuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xufVxuXG4vKlxuIENTUyBmb3IgdGhlIG1haW4gaW50ZXJhY3Rpb24gLyB0YWJzZXRcbiovXG4udGFic2V0ID4gaW5wdXRbdHlwZT1yYWRpb10ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yMDB2dztcbn1cblxuLnRhYnNldCAudGFiLXBhbmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhYnNldCA+IGlucHV0OmZpcnN0LWNoaWxkOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6Zmlyc3QtY2hpbGQsXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDMpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDIpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCg1KTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCgzKSxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoNyk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNCksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDkpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDUpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCgxMSk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNikge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRhYnNldCA+IGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFic2V0ID4gbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNXB4O1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogIzhkOGQ4ZDtcbn1cblxuLnRhYnNldCA+IGxhYmVsOmhvdmVyLFxuLnRhYnNldCA+IGlucHV0OmZvY3VzICsgbGFiZWwge1xuICBjb2xvcjogIzA2Yztcbn1cblxuLnRhYnNldCA+IGxhYmVsOmhvdmVyOjphZnRlcixcbi50YWJzZXQgPiBpbnB1dDpmb2N1cyArIGxhYmVsOjphZnRlcixcbi50YWJzZXQgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzA2Yztcbn1cblxuLnRhYnNldCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi50YWItcGFuZWwge1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4vKlxuIERlbW8gcHVycG9zZXMgb25seVxuKi9cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaW5wdXRbX25nY29udGVudC1yYnAtYzE2XSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







// import { SelectUserImageModal } from "../select-image/select-user-image.modal";
let CompanyProfilePage = class CompanyProfilePage {
    constructor(navCtrl, firebaseService, authService) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.displayName = this.authService.displayName();
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    ngOnInit() {
        // company name
        // address
        // base currency
        // business phone/ work phone
        // mobile phone
        this.createCompanyProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            company_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            work_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
        });
        this.createCustomerNotesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            customernotes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("")
        });
        this.createTermsandConditionsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            termsandconditions: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("")
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
        this.navCtrl.navigateBack('/firebase/user-profile');
    }
    // CRUD
    createCompanyProfile() {
        console.log(this.uid, this.email, this.createCompanyProfileForm.value);
        console.log(this.base64Image);
        this.createCompanyProfileForm.value["logo_base64Image"] = this.base64Image;
        this.firebaseService.createCompanyProfile(this.uid, this.email, this.createCompanyProfileForm.value).then(() => {
            this.dismissModal();
        });
    }
    createTermsandConditions() {
        console.log(this.uid, this.email, this.createTermsandConditionsForm.value);
        this.firebaseService.createTermsandConditions(this.uid, this.email, this.createTermsandConditionsForm.value).then(() => {
            this.dismissModal();
        });
    }
    createCustomerNotes() {
        console.log(this.uid, this.email, this.createCustomerNotesForm.value);
        this.firebaseService.createCustomerNotes(this.uid, this.email, this.createCustomerNotesForm.value).then(() => {
            this.dismissModal();
        });
    }
    onChange($event) {
        const file = $event.target['files'][0];
        console.log('file is: ', file);
        this.convertToBase64(file);
    }
    convertToBase64(file) {
        this.myimage = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]((subscriber) => {
            this.readFile(file, subscriber);
        });
        this.myimage.subscribe(res => {
            console.log(res);
            this.base64Image = res;
        });
    }
    readFile(file, subscriber) {
        const filereader = new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload = () => {
            subscriber.next(filereader.result);
            subscriber.complete();
        };
        filereader.onerror = (error) => {
            subscriber.error(error);
        };
    }
};
CompanyProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=firebase-company_profile-company-profile-company-profile-module-es2015.js.map