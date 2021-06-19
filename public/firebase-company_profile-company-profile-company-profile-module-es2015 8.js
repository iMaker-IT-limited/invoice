(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-company_profile-company-profile-company-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/company_profile/company-profile/company-profile.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/company_profile/company-profile/company-profile.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header\">\n    <ion-title color=\"theme\">Company Profile</ion-title>\n\n    <!-- <ion-button slot=\"end\" fill=\"clear\" color=\"theme\" (click)=\"updateContact()\">\n      Update\n    </ion-button>\n\n    <ion-button slot=\"end\" fill=\"clear\" color=\"theme\" (click)=\"deleteContact()\">\n      Delete\n    </ion-button> -->\n\n    <ion-button fill=\"clear\" slot=\"end\" color=\"theme\" (click)=\"dismissModal()\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <!-- <ion-item-divider sticky>\n    <ion-title>New Customer</ion-title>\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"readContact()\">\n      Get\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"updateContact()\">\n      Update\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"deleteContact()\">\n      Delete\n    </ion-button>\n\n  </ion-item-divider>\n\n  <ion-progress-bar color=\"theme\" type=\"indeterminate\"></ion-progress-bar> -->\n\n  <ion-card style=\"box-shadow: none;\">\n    <div class=\"tabset\">\n      <!-- Tab 1 -->\n      <input type=\"radio\" name=\"tabset\" id=\"tab11\" aria-controls=\"a\" checked>\n      <label for=\"tab11\">Set up Company detail</label>\n      <!-- Tab 2 -->\n      <input type=\"radio\" name=\"tabset\" id=\"tab22\" aria-controls=\"b\">\n      <label for=\"tab22\">Terms and Conditions</label>\n      <!-- Tab 3 -->\n      <input type=\"radio\" name=\"tabset\" id=\"tab33\" aria-controls=\"c\">\n      <label for=\"tab33\">Customer Notes</label>\n\n      <!-- <ion-button (click)=\"onDismiss()\">\n                <ion-icon name=\"close\"></ion-icon>\n          </ion-button> -->\n\n      <div class=\"tab-panels\">\n        <section id=\"a\" class=\"tab-panel\">\n\n          <!-- <div style=\"padding: 20px;\">\n            <app-uploader [id]=\"uid\"></app-uploader>\n          </div> -->\n\n          <div class=\"testbox\">\n            <ion-row>\n              <ion-col>\n                <form [formGroup]=\"createCompanyProfileForm\" (ngSubmit)=\"createCompanyProfile()\">\n\n                  <ion-card style=\"box-shadow: none;\">\n                    <h1>Company Logo</h1>\n                    <div class=\"title-block\">\n\n                      <input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" (change)=\"onChange($event)\" />\n                    </div>\n                    <div *ngIf=\"myimage\">\n                      <img [src]=\"myimage | async\" width=\"200px\" height=\"200px\" alt=\"\">\n                    </div>\n                  </ion-card>\n\n                  <!-- <h4>Customer Type<span>*</span></h4>\n              <div class=\"title-radio\">\n                <input style=\"width: 40px;\" type=\"radio\" value=\"business\" formControlName=\"type\" />\n                <label for=\"banma\">Business</label><br />\n                <input style=\"width: 40px;\" type=\"radio\" value=\"individual\" formControlName=\"type\" />\n                <label for=\"kokui\">Individual</label>\n              </div> -->\n\n                  <!-- <h4>Primary Contact<span>*</span></h4>\n              <div class=\"title-block\">\n                <select formControlName=\"unit\">\n                  <option value=\"Type\">Salutation</option>\n                  <option value=\"Mr.\">Mr.</option>\n                  <option value=\"Mrs.\">Mrs.</option>\n                  <option value=\"Ms.\">Ms.</option>\n                  <option value=\"Miss\">Miss</option>\n                  <option value=\"Dr.\">Dr.</option>\n                </select>\n              </div> -->\n\n                  <h4>Address</h4>\n                  <div class=\"title-block\">\n                    <input type=\"text\" name=\"address\" placeholder=\"Address\" formControlName=\"address\" />\n                  </div>\n\n                  <h4>Company Name</h4>\n                  <div class=\"title-block\">\n                    <input type=\"text\" name=\"company_name\" placeholder=\"Company Name\" formControlName=\"company_name\" />\n                  </div>\n\n                  <h4>Company Email</h4>\n                  <div class=\"title-block\">\n                    <input type=\"email\" name=\"company_email\" placeholder=\"Company Eamil\"\n                      formControlName=\"company_email\" />\n                  </div>\n\n                  <h4>Website</h4>\n                  <div class=\"title-block\">\n                    <input type=\"text\" name=\"website\" placeholder=\"website\" formControlName=\"website\" />\n                  </div>\n\n                  <h4>Phone</h4>\n                  <div class=\"title-block\">\n                    <input type=\"text\" name=\"work_phone\" placeholder=\"Work Phone\" formControlName=\"work_phone\" />\n                  </div>\n\n                  <div class=\"btn-block\">\n                    <button type=\"submit\">Save</button>\n                  </div>\n                </form>\n              </ion-col>\n              <ion-col>\n                <ion-card style=\"box-shadow: none;\">\n                  <ion-label>\n                    Company Logo:\n                  </ion-label>\n                  <img [src]=\"base64Image\" width=\"200px\" height=\"200px\" alt=\"\">\n                  <!-- <img [src]=\"logo_base64Image\" width=\"200px\" height=\"200px\" alt=\"\"> -->\n\n                  <br>\n                  <ion-label>\n                    Company Name:\n                  </ion-label>\n                  <ion-chip style=\"background: white; color: black;\">\n                    {{company_name || 0}}\n                  </ion-chip>\n                  <br>\n                  <ion-label>\n                    Company Email:\n                  </ion-label>\n                  <ion-chip style=\"background: white; color: black;\">\n                    {{companyemail || 0}}\n                  </ion-chip>\n                  <br>\n                  <ion-label>\n                    Company Address:\n                  </ion-label>\n                  <ion-chip style=\"background: white; color: black;\">\n                    {{companyaddress || 0}}\n                  </ion-chip>\n                  <br>\n                  <ion-label>\n                    Company Website:\n                  </ion-label>\n\n                  <ion-chip style=\"background: white; color: black;\">\n                    {{website || 0}}\n                  </ion-chip>\n                  <br>\n\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n\n        </section>\n        <section id=\"b\" class=\"tab-panel\">\n          <div class=\"testbox\">\n            <ion-row>\n              <ion-col>\n                <form [formGroup]=\"createTermsandConditionsForm\" (ngSubmit)=\"createTermsandConditions()\">\n                  <h4>Terms and Conditions</h4>\n                  <div class=\"title-block\">\n                    <!-- <input type=\"text\" name=\"address\" placeholder=\"Terms and Condtions\"\n                  formControlName=\"termsandconditions\" /> -->\n\n                    <ion-textarea rows=\"6\" class=\"form-control\" formControlName=\"termsandconditions\"\n                      placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\">\n                    </ion-textarea>\n                  </div>\n\n                  <div class=\"btn-block\">\n                    <button type=\"submit\">Save</button>\n                  </div>\n                </form>\n              </ion-col>\n              <ion-col>\n                <ion-card style=\"box-shadow: none;\">\n                  <ion-label>\n                    Terms and Conditions\n                  </ion-label>\n\n                  <ion-chip style=\"background: white; color: black;line-height: inherit;height: auto;\">\n                    {{termsandconditions}}</ion-chip>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n\n          </div>\n        </section>\n        <section id=\"c\" class=\"tab-panel\">\n          <div class=\"testbox\">\n            <ion-row>\n              <ion-col>\n                <form [formGroup]=\"createCustomerNotesForm\" (ngSubmit)=\"createCustomerNotes()\">\n                  <h4>Customer Notes</h4>\n                  <div class=\"title-block\">\n                    <!-- <input type=\"text\" name=\"address\" placeholder=\"Customer notes\" formControlName=\"customernotes\" /> -->\n                    <ion-textarea rows=\"6\" class=\"form-control\" formControlName=\"customernotes\"\n                      placeholder=\"Customer notes\">\n                    </ion-textarea>\n                  </div>\n\n                  <div class=\"btn-block\">\n                    <button type=\"submit\">Save</button>\n                  </div>\n                </form>\n              </ion-col>\n              <ion-col>\n                <ion-card style=\"box-shadow: none;\">\n                  <ion-label>\n                    Customer Notes\n                  </ion-label>\n\n                  <ion-chip style=\"background: white; color: black;line-height: inherit;height: auto;\">{{customernotes}}\n                  </ion-chip>\n                </ion-card>\n\n              </ion-col>\n            </ion-row>\n\n          </div>\n        </section>\n\n      </div>\n\n\n    </div>\n  </ion-card>\n\n\n\n\n\n</ion-content>"

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

module.exports = "h1,\nh4 {\n  margin: 15px 0 4px;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 13px;\n  margin: 20px 0 4px;\n  font-weight: 400;\n}\n\nspan {\n  color: red;\n}\n\n.small {\n  font-size: 10px;\n  line-height: 18px;\n}\n\n.testbox {\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  box-shadow: none;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 92%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 92%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\nlabel {\n  line-height: 1 !important;\n}\n\n/*\n CSS for the main interaction / tabset\n*/\n\n.tabset > input[type=radio] {\n  position: absolute;\n  left: -200vw;\n}\n\n.tabset .tab-panel {\n  display: none;\n}\n\n.tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,\n.tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),\n.tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),\n.tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),\n.tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),\n.tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {\n  display: block;\n}\n\n.tabset > label {\n  position: relative;\n  display: inline-block;\n  padding: 15px 15px 25px;\n  border: 1px solid transparent;\n  border-bottom: 0;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.tabset > label::after {\n  content: \"\";\n  position: absolute;\n  left: 15px;\n  bottom: 10px;\n  width: 22px;\n  height: 4px;\n  background: #8d8d8d;\n}\n\n.tabset > label:hover,\n.tabset > input:focus + label {\n  color: #06c;\n}\n\n.tabset > label:hover::after,\n.tabset > input:focus + label::after,\n.tabset > input:checked + label::after {\n  background: #06c;\n}\n\n.tabset > input:checked + label {\n  border-color: #ccc;\n  border-bottom: 1px solid #fff;\n  margin-bottom: -1px;\n}\n\n.tab-panel {\n  padding: 30px 0;\n  border-top: 1px solid #ccc;\n}\n\n/*\n Demo purposes only\n*/\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\n.header {\n  height: 50px;\n}\n\n.input[_ngcontent-rbp-c16] {\n  background: var(--ion-color-theme);\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9jb21wYW55X3Byb2ZpbGUvY29tcGFueS1wcm9maWxlL2NvbXBhbnktcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2NvbXBhbnlfcHJvZmlsZS9jb21wYW55LXByb2ZpbGUvY29tcGFueS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTs7RUFFQyxrQkFBQTtFQUNBLGdCQUFBO0FDYkQ7O0FEZ0JBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNiRDs7QURnQkE7RUFDQyxVQUFBO0FDYkQ7O0FEZ0JBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDYkQ7O0FEZ0JBO0VBRUMsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDZEQ7O0FEaUJBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFHRCxnQkFBQTtBQ2hCQTs7QURtQkE7RUFDQyx3QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNoQkQ7O0FEbUJBOzs7RUFHQyxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ2hCRDs7QURtQkE7O0VBRUMsbUJBQUE7QUNoQkQ7O0FEbUJBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ2hCRDs7QURtQkE7O0VBRUMsV0FBQTtBQ2hCRDs7QURtQkE7RUFDQyxnQkFBQTtBQ2hCRDs7QURtQkE7O0VBRUMsa0JBQUE7QUNoQkQ7O0FEbUJBO0VBQ0MsYUFBQTtBQ2hCRDs7QURtQkE7RUFDQyxvQkFBQTtBQ2hCRDs7QURtQkE7OztFQUdDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNoQkQ7O0FEbUJBOztFQUVDLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ2hCRDs7QURtQkE7RUFDQyxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNoQkQ7O0FEbUJBO0VBQ0MsY0FBQTtFQUNBLHNCQUFBO0FDaEJEOztBRG1CQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtBQ2hCRDs7QURtQkE7O0VBRUMsVUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNoQkQ7O0FEbUJBO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FDaEJEOztBRG1CQTtFQUNDLHVCQUFBO0FDaEJEOztBRG1CQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7QUNoQkQ7O0FEbUJBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2hCRDs7QURtQkE7RUFDQyx5QkFBQTtBQ2hCRDs7QURtQkE7RUFDQztJQUNDLG9CQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ2hCQTs7RURrQkQ7SUFDQyxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLDhCQUFBO0VDZkE7O0VEaUJEO0lBQ0MsVUFBQTtJQUNBLGdCQUFBO0VDZEE7O0VEZ0JEO0lBQ0MsVUFBQTtJQUNBLGdCQUFBO0VDYkE7O0VEZUQ7O0lBRUMsb0JBQUE7RUNaQTtBQUNGOztBRGVBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDYkQ7O0FEZ0JBO0VBQ0MseUJBQUE7QUNiRDs7QURnQkE7O0NBQUE7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNiRjs7QURnQkE7RUFDRSxhQUFBO0FDYkY7O0FEZ0JBOzs7Ozs7RUFNRSxjQUFBO0FDYkY7O0FEZ0JBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2JGOztBRGdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ2JGOztBRGdCQTs7RUFFRSxXQUFBO0FDYkY7O0FEZ0JBOzs7RUFHRSxnQkFBQTtBQ2JGOztBRGdCQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ2JGOztBRGdCQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQ2JGOztBRGdCQTs7Q0FBQTs7QUFHQTs7O0VBR0Usc0JBQUE7QUNiRjs7QUR3QkE7RUFDQyxZQUFBO0FDckJEOztBRHdCQTtFQUNDLGtDQUFBO0VBQ0EsWUFBQTtBQ3JCRCIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL2NvbXBhbnlfcHJvZmlsZS9jb21wYW55LXByb2ZpbGUvY29tcGFueS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksXG5kaXYsXG5mb3JtLFxuaW5wdXQsXG5zZWxlY3Qge1xuXHQvLyBwYWRkaW5nOiAwO1xuXHQvLyBtYXJnaW46IDA7XG5cdC8vIG91dGxpbmU6IG5vbmU7XG5cdC8vIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHQvLyBmb250LXNpemU6IDEycHg7XG5cdC8vIGNvbG9yOiAjNjY2O1xuXHQvLyBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuaDEsXG5oNCB7XG5cdG1hcmdpbjogMTVweCAwIDRweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDQge1xuXHRmb250LXNpemU6IDEzcHg7XG5cdG1hcmdpbjogMjBweCAwIDRweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuc3BhbiB7XG5cdGNvbG9yOiByZWQ7XG59XG5cbi5zbWFsbCB7XG5cdGZvbnQtc2l6ZTogMTBweDtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi50ZXN0Ym94IHtcblx0Ly9kaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0aGVpZ2h0OiBpbmhlcml0O1xuXHRwYWRkaW5nOiAwcHg7XG59XG5cbmZvcm0ge1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMjBweDtcbi8vXHRiYWNrZ3JvdW5kOiAjZmZmO1xuLy9cdGJveC1zaGFkb3c6IDAgMnB4IDVweCB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW5wdXQge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG5cdHBhZGRpbmc6IDVweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dDpob3ZlcixcbnRleHRhcmVhOmhvdmVyLFxuc2VsZWN0OmhvdmVyIHtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgIzA5NTQ4NDtcblx0YmFja2dyb3VuZDogI2U2ZWVmNztcbn1cblxuLnRpdGxlLWJsb2NrIHNlbGVjdCxcbi50aXRsZS1ibG9jayBpbnB1dCB7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnNlbGVjdCB7XG5cdHBhZGRpbmc6IDdweCAwO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5zZWxlY3QsXG50YWJsZSB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG5vcHRpb24ge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGF5LXZpc2l0ZWQsXG4udGltZS12aXNpdGVkIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9XCJ0aW1lXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcblx0bWFyZ2luOiAycHggMjJweCAwIDA7XG59XG5cbi5kYXktdmlzaXRlZCBpLFxuLnRpbWUtdmlzaXRlZCBpLFxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA4cHg7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGkge1xuXHRyaWdodDogNXB4O1xuXHR6LWluZGV4OiAxO1xuXHRjb2xvcjogI2E5YTlhOTtcbn1cblxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuXHRyaWdodDogMDtcblx0ei1pbmRleDogMjtcblx0b3BhY2l0eTogMDtcbn1cblxuLnF1ZXN0aW9uLWFuc3dlciBsYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiAwIDIwcHggMTBweCAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGlucHV0IHtcblx0d2lkdGg6IGF1dG87XG5cdG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbnRoLFxudGQge1xuXHR3aWR0aDogMTglO1xuXHRwYWRkaW5nOiAxNXB4IDA7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHZlcnRpY2FsLWFsaWduOiB1bnNldDtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmZpcnN0LWNvbCB7XG5cdHdpZHRoOiAyNSU7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRleHRhcmVhIHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5idG4tYmxvY2sge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG5cdHdpZHRoOiAxNTBweDtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyOiBub25lO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA5NTQ4NDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogI2ZmZjtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDY2NmEzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIHtcblx0LnRpdGxlLXJhZGlvIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRwYWRkaW5nLXRvcDogMTVweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcblx0fVxuXHQudGl0bGUtYmxvY2sge1xuXHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRtYXJnaW4tbGVmdDogMTVweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdC50aXRsZS1ibG9jayBzZWxlY3Qge1xuXHRcdHdpZHRoOiA5MiU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHQudGl0bGUtYmxvY2sgaW5wdXQge1xuXHRcdHdpZHRoOiA5MiU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHR0aCxcblx0dGQge1xuXHRcdHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuXHR9XG59XG5cbi5zZXJ2aWNlIHtcblx0cG9zaXRpb246IHN0YXRpYztcblx0bWFyZ2luLXRvcDogMDtcblx0bWFyZ2luLXJpZ2h0OiAuMzEyNXJlbTtcblx0bWFyZ2luLWxlZnQ6IDA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctbGVmdDogMDtcblx0bWFyZ2luLXJpZ2h0OiAuNzVyZW07XG59XG5cbmxhYmVsIHtcblx0bGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcbn1cblxuLypcbiBDU1MgZm9yIHRoZSBtYWluIGludGVyYWN0aW9uIC8gdGFic2V0XG4qL1xuLnRhYnNldCA+IGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTIwMHZ3O1xufVxuXG4udGFic2V0IC50YWItcGFuZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFic2V0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpmaXJzdC1jaGlsZCxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoMyk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoMiksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDUpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDMpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCg3KTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg0KSxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoOSk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNSksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDExKTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg2KSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGFic2V0ID4gbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTVweCAxNXB4IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50YWJzZXQgPiBsYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1cHg7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjOGQ4ZDhkO1xufVxuXG4udGFic2V0ID4gbGFiZWw6aG92ZXIsXG4udGFic2V0ID4gaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XG4gIGNvbG9yOiAjMDZjO1xufVxuXG4udGFic2V0ID4gbGFiZWw6aG92ZXI6OmFmdGVyLFxuLnRhYnNldCA+IGlucHV0OmZvY3VzICsgbGFiZWw6OmFmdGVyLFxuLnRhYnNldCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDZjO1xufVxuXG4udGFic2V0ID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLnRhYi1wYW5lbCB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG5cbi8qXG4gRGVtbyBwdXJwb3NlcyBvbmx5XG4qL1xuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuLnRhYnNldCB7XG4vLyBtYXgtd2lkdGg6IDY1ZW07XG59XG5cbi8vIGVuZCBvZiB0YWJzXG5cblxuLmhlYWRlciB7XG5cdGhlaWdodDogNTBweDtcbn1cblxuLmlucHV0W19uZ2NvbnRlbnQtcmJwLWMxNl0ge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi8vIGFsZXJ0IFxuXG4iLCJoMSxcbmg0IHtcbiAgbWFyZ2luOiAxNXB4IDAgNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAyMHB4IDAgNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnRlc3Rib3gge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dDpob3ZlcixcbnRleHRhcmVhOmhvdmVyLFxuc2VsZWN0OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5NTQ4NDtcbiAgYmFja2dyb3VuZDogI2U2ZWVmNztcbn1cblxuLnRpdGxlLWJsb2NrIHNlbGVjdCxcbi50aXRsZS1ibG9jayBpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5zZWxlY3QsXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5vcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGF5LXZpc2l0ZWQsXG4udGltZS12aXNpdGVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT10aW1lXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIG1hcmdpbjogMnB4IDIycHggMCAwO1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSxcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGkge1xuICByaWdodDogNXB4O1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2E5YTlhOTtcbn1cblxuW3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMjBweCAxMHB4IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgaW5wdXQge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxudGgsXG50ZCB7XG4gIHdpZHRoOiAxOCU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHVuc2V0O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uZmlyc3QtY29sIHtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcbn1cblxuLmJ0bi1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1NDg0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjY2YTM7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NjhweCkge1xuICAudGl0bGUtcmFkaW8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICB9XG5cbiAgLnRpdGxlLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayBzZWxlY3Qge1xuICAgIHdpZHRoOiA5MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayBpbnB1dCB7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgdGgsXG50ZCB7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gIH1cbn1cbi5zZXJ2aWNlIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjMxMjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbn1cblxubGFiZWwge1xuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xufVxuXG4vKlxuIENTUyBmb3IgdGhlIG1haW4gaW50ZXJhY3Rpb24gLyB0YWJzZXRcbiovXG4udGFic2V0ID4gaW5wdXRbdHlwZT1yYWRpb10ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yMDB2dztcbn1cblxuLnRhYnNldCAudGFiLXBhbmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhYnNldCA+IGlucHV0OmZpcnN0LWNoaWxkOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6Zmlyc3QtY2hpbGQsXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDMpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDIpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCg1KTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCgzKSxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoNyk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNCksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDkpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDUpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCgxMSk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNikge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRhYnNldCA+IGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFic2V0ID4gbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNXB4O1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogIzhkOGQ4ZDtcbn1cblxuLnRhYnNldCA+IGxhYmVsOmhvdmVyLFxuLnRhYnNldCA+IGlucHV0OmZvY3VzICsgbGFiZWwge1xuICBjb2xvcjogIzA2Yztcbn1cblxuLnRhYnNldCA+IGxhYmVsOmhvdmVyOjphZnRlcixcbi50YWJzZXQgPiBpbnB1dDpmb2N1cyArIGxhYmVsOjphZnRlcixcbi50YWJzZXQgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzA2Yztcbn1cblxuLnRhYnNldCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi50YWItcGFuZWwge1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4vKlxuIERlbW8gcHVycG9zZXMgb25seVxuKi9cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaW5wdXRbX25nY29udGVudC1yYnAtYzE2XSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */"

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
    constructor(toastController, navCtrl, firebaseService, authService, alertController) {
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.alertController = alertController;
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
        this.getCompanyProfile();
        this.getTermsandConditions();
        this.getCustomerNotes();
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.uid, this.email, this.createCompanyProfileForm.value);
            console.log(this.base64Image);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm',
                message: '<strong>This will be shown in the estimate and invoice</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            this.createCompanyProfileForm.value["logo_base64Image"] = this.base64Image;
                            this.firebaseService.createCompanyProfile(this.uid, this.email, this.createCompanyProfileForm.value);
                            // this.dismissModal();
                            const toast = yield this.toastController.create({
                                message: 'Your settings have been saved.',
                                mode: 'ios',
                                position: 'top',
                                color: 'theme',
                                duration: 3000
                            });
                            toast.present();
                        })
                    }
                ]
            });
            yield alert.present().then(() => {
            }).catch(err => {
                err.log(err);
            });
        });
    }
    createTermsandConditions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.uid, this.email, this.createTermsandConditionsForm.value);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm',
                message: '<strong>This will be shown in the estimate and invoice</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            this.firebaseService.createTermsandConditions(this.uid, this.email, this.createTermsandConditionsForm.value);
                            // this.dismissModal();
                            const toast = yield this.toastController.create({
                                message: 'Your settings have been saved.',
                                mode: 'ios',
                                position: 'top',
                                color: 'theme',
                                duration: 3000
                            });
                            toast.present();
                        })
                    }
                ]
            });
            yield alert.present().then(() => {
            }).catch(err => {
                err.log(err);
            });
        });
    }
    createCustomerNotes() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.uid, this.email, this.createCustomerNotesForm.value);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm',
                message: '<strong>This will be shown in the estimate and invoice</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            this.firebaseService.createCustomerNotes(this.uid, this.email, this.createCustomerNotesForm.value);
                            // this.dismissModal();
                            const toast = yield this.toastController.create({
                                message: 'Your settings have been saved.',
                                mode: 'ios',
                                position: 'top',
                                color: 'theme',
                                duration: 3000
                            });
                            toast.present();
                        })
                    }
                ]
            });
            yield alert.present().then(() => {
            }).catch(err => {
                err.log(err);
            });
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
    // updateContact() {
    //   console.log(this.email, this.uid), this.createContactForm.value;
    //   this.firebaseService.updateContacts(this.uid, this.email, this.createContactForm.value).then(() => {
    //     //  this.dismissModal();
    //   });
    // }
    // deleteContact(contactId) {
    //   console.log(this.email, this.uid);
    //   this.firebaseService.deleteContacts(this.uid, this.email, contactId).then(() => {
    //     //  this.dismissModal();
    //   });
    // }
    getCompanyProfile() {
        console.log(this.email, this.uid);
        this.firebaseService.readCompanyProfile(this.uid).subscribe(res => {
            console.log(res['userData']);
            this.companyprofile = res['userData'];
            this.companyemail = res['userData']['company_email'];
            this.companyaddress = res['userData']['address'];
            this.company_name = res['userData']['company_name'];
            this.website = res['userData']['website'];
            this.logo_base64Image = res['userData']['logo_base64Image'];
            this.base64Image = this.logo_base64Image;
            console.log(this.base64Image);
        });
    }
    getCustomerNotes() {
        console.log(this.email, this.uid);
        this.firebaseService.readCustomerNote(this.uid).subscribe(res => {
            console.log(res['userData']);
            this.customernotes = res['userData']['customernotes'];
        });
    }
    getTermsandConditions() {
        console.log(this.email, this.uid);
        this.firebaseService.readTermsandConditions(this.uid).subscribe(res => {
            console.log(res['userData']);
            this.termsandconditions = res['userData']['termsandconditions'];
        });
    }
};
CompanyProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
CompanyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-profile',
        template: __webpack_require__(/*! raw-loader!./company-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/company_profile/company-profile/company-profile.page.html"),
        styles: [__webpack_require__(/*! ./company-profile.page.scss */ "./src/app/firebase/company_profile/company-profile/company-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
        _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], CompanyProfilePage);



/***/ })

}]);
//# sourceMappingURL=firebase-company_profile-company-profile-company-profile-module-es2015.js.map