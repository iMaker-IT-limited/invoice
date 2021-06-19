(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-company_profile-company-profile-company-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/company_profile/company-profile/company-profile.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/company_profile/company-profile/company-profile.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header\">\n    <ion-title color=\"theme\">Company Profile</ion-title>\n\n    <ion-button fill=\"clear\" slot=\"end\" color=\"theme\" (click)=\"dismissModal()\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <!-- <ion-item-divider sticky>\n    <ion-title>New Customer</ion-title>\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"readContact()\">\n      Get\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"updateContact()\">\n      Update\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"deleteContact()\">\n      Delete\n    </ion-button>\n\n  </ion-item-divider>\n\n  <ion-progress-bar color=\"theme\" type=\"indeterminate\"></ion-progress-bar> -->\n\n  <ion-row>\n\n    <ion-col size=\"6\">\n\n      <ion-card>\n        <div class=\"tabset\">\n          <!-- Tab 1 -->\n          <input type=\"radio\" name=\"tabset\" id=\"tab11\" aria-controls=\"a\" checked>\n          <label for=\"tab11\">Set up Company detail</label>\n          <!-- Tab 2 -->\n          <input type=\"radio\" name=\"tabset\" id=\"tab22\" aria-controls=\"b\">\n          <label for=\"tab22\">Terms and Conditions</label>\n          <!-- Tab 3 -->\n          <input type=\"radio\" name=\"tabset\" id=\"tab33\" aria-controls=\"c\">\n          <label for=\"tab33\">Customer Notes</label>\n          <div class=\"tab-panels\">\n            <section id=\"a\" class=\"tab-panel\">\n\n              <!-- <div style=\"padding: 20px;\">\n            <app-uploader [id]=\"uid\"></app-uploader>\n          </div> -->\n\n              <div class=\"testbox\">\n\n                <form [formGroup]=\"createCompanyProfileForm\" (ngSubmit)=\"createCompanyProfile()\">\n\n                  <ion-card style=\"box-shadow: none;\">\n                    <h1>Company Logo</h1>\n                    <div class=\"title-block\">\n\n                      <input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" (change)=\"onChange($event)\" />\n                    </div>\n                    <!-- <div *ngIf=\"myimage\">\n                      <img [src]=\"myimage | async\" width=\"200px\" height=\"200px\" alt=\"\">\n                    </div> -->\n                  </ion-card>\n\n                  <!-- <h4>Customer Type<span>*</span></h4>\n              <div class=\"title-radio\">\n                <input style=\"width: 40px;\" type=\"radio\" value=\"business\" formControlName=\"type\" />\n                <label for=\"banma\">Business</label><br />\n                <input style=\"width: 40px;\" type=\"radio\" value=\"individual\" formControlName=\"type\" />\n                <label for=\"kokui\">Individual</label>\n              </div> -->\n\n                  <!-- <h4>Primary Contact<span>*</span></h4>\n              <div class=\"title-block\">\n                <select formControlName=\"unit\">\n                  <option value=\"Type\">Salutation</option>\n                  <option value=\"Mr.\">Mr.</option>\n                  <option value=\"Mrs.\">Mrs.</option>\n                  <option value=\"Ms.\">Ms.</option>\n                  <option value=\"Miss\">Miss</option>\n                  <option value=\"Dr.\">Dr.</option>\n                </select>\n              </div> -->\n\n                  <h4>Address</h4>\n                  <div class=\"title-block\">\n                    <input type=\"text\" name=\"address\" placeholder=\"Address\" formControlName=\"address\" />\n                  </div>\n\n                  <h4>Company Name</h4>\n                  <div class=\"title-block\">\n                    <input type=\"text\" name=\"company_name\" placeholder=\"Company Name\" formControlName=\"company_name\" />\n                  </div>\n\n                  <h4>Company Email</h4>\n                  <div class=\"title-block\">\n                    <input type=\"email\" name=\"company_email\" placeholder=\"Company Eamil\"\n                      formControlName=\"company_email\" />\n                  </div>\n\n                  <h4>Website</h4>\n                  <div class=\"title-block\">\n                    <input type=\"text\" name=\"website\" placeholder=\"website\" formControlName=\"website\" />\n                  </div>\n\n                  <h4>Phone</h4>\n                  <div class=\"title-block\">\n                    <input type=\"text\" name=\"work_phone\" placeholder=\"Work Phone\" formControlName=\"work_phone\" />\n                  </div>\n\n                  <div class=\"btn-block\">\n                    <button type=\"submit\">Save</button>\n                  </div>\n                </form>\n\n              </div>\n\n            </section>\n            <section id=\"b\" class=\"tab-panel\">\n              <div class=\"testbox\">\n\n                <form [formGroup]=\"createTermsandConditionsForm\" (ngSubmit)=\"createTermsandConditions()\">\n                  <h4>Terms and Conditions</h4>\n                  <div class=\"title-block\">\n                    <!-- <input type=\"text\" name=\"address\" placeholder=\"Terms and Condtions\"\n                  formControlName=\"termsandconditions\" /> -->\n\n                    <ion-textarea rows=\"6\" class=\"form-control\" formControlName=\"termsandconditions\"\n                      placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\">\n                    </ion-textarea>\n                  </div>\n\n                  <div class=\"btn-block\">\n                    <button type=\"submit\">Save</button>\n                  </div>\n                </form>\n\n              </div>\n            </section>\n            <section id=\"c\" class=\"tab-panel\">\n              <div class=\"testbox\">\n\n                <form [formGroup]=\"createCustomerNotesForm\" (ngSubmit)=\"createCustomerNotes()\">\n                  <h4>Customer Notes</h4>\n                  <div class=\"title-block\">\n                    <!-- <input type=\"text\" name=\"address\" placeholder=\"Customer notes\" formControlName=\"customernotes\" /> -->\n                    <ion-textarea rows=\"6\" class=\"form-control\" formControlName=\"customernotes\"\n                      placeholder=\"Customer notes\">\n                    </ion-textarea>\n                  </div>\n\n                  <div class=\"btn-block\">\n                    <button type=\"submit\">Save</button>\n                  </div>\n                </form>\n\n              </div>\n            </section>\n          </div>\n\n\n\n        </div>\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col size=\"6\">\n\n      <ion-card style=\"overflow-x: scroll;\">\n        <div id=\"invoiceholder\">\n          <div id=\"invoice\" class=\"effect2\">\n\n            <div id=\"invoice-top\">\n              <div class=\"logo\">\n                <img [src]=\"base64Image\" alt=\"\">\n              </div>\n              <div class=\"title\" style=\"filter:blur(4px);\">\n                <h1>Invoice #<span class=\"invoiceVal invoice_num\">tst-inv-23</span></h1>\n                <p>Invoice Date: <span id=\"invoice_date\">01 Feb 2018</span><br>\n                  GL Date: <span id=\"gl_date\">23 Feb 2018</span>\n                </p>\n              </div>\n              <!--End Title-->\n            </div>\n            <!--End InvoiceTop-->\n\n\n            <div id=\"invoice-mid\">\n              <!-- <div id=\"message\">\n              <h2>Hello Andrea De Asmundis,</h2>\n              <p>An invoice with invoice number #<span id=\"invoice_num\">tst-inv-23</span> is created for <span\n                  id=\"supplier_name\"> {{company_name || 0}}</span> which is 100% matched with PO and is waiting for your\n                approval. <a href=\"javascript:void(0);\">Click here</a> to login to view the invoice.</p>\n            </div> -->\n              <div class=\"cta-group mobile-btn-group\">\n                <a href=\"javascript:void(0);\" class=\"btn-primary\">Approve</a>\n                <a href=\"javascript:void(0);\" class=\"btn-default\">Reject</a>\n              </div>\n              <div class=\"clearfix\">\n                <div class=\"col-left\">\n                  <!-- <div class=\"clientlogo\">\n                  <img [src]=\"base64Image\" alt=\"\">\n                </div> -->\n\n                  <div *ngIf=\"companyprofile\" class=\"clientinfo\">\n                    <h2 id=\"supplier\">{{company_name}}</h2>\n                    <p>\n                      <span id=\"address\"></span>\n                      <br>\n                      <span id=\"city\">\n                        {{companyaddress}}</span>\n                      <br>\n                      <span id=\"country\">\n\n                      </span>\n                      <span id=\"zip\">\n                        {{companyemail}}\n                      </span>\n                      <br>\n                      <span id=\"tax_num\">\n                        555-555-5555\n                      </span>\n                      <br>\n                    </p>\n                    <p> {{website}}</p>\n                  </div>\n\n                  <div *ngIf=\"!companyprofile\" class=\"clientinfo\">\n                    <h2 id=\"supplier\">\n                      <ion-skeleton-text animated style=\"width: 100px; border-radius: 3px;\"></ion-skeleton-text>\n                    </h2>\n                    <p>\n                      <span id=\"address\"></span>\n                      <br>\n                      <span id=\"city\">\n                        <ion-skeleton-text animated style=\"width: 100px; border-radius: 3px\"></ion-skeleton-text>\n                      </span>\n                      <br>\n                      <span id=\"country\">\n\n                      </span>\n                      <span id=\"zip\">\n                        <ion-skeleton-text animated style=\"width: 100px; border-radius: 3px\"></ion-skeleton-text>\n                      </span>\n                      <br>\n                      <span id=\"tax_num\">\n                        <ion-skeleton-text animated style=\"width: 100px; border-radius: 3px\"></ion-skeleton-text>\n                      </span>\n                      <br>\n                    </p>\n                    <p>\n                      <ion-skeleton-text animated style=\"width: 100px; border-radius: 3px\"></ion-skeleton-text>\n                    </p>\n                  </div>\n                </div>\n                <!-- <div class=\"col-right\">\n                <table class=\"table\">\n                  <tbody>\n                    <tr>\n                      <td><span>Invoice Total</span><label id=\"invoice_total\">61.2</label></td>\n                      <td><span>Currency</span><label id=\"currency\">EUR</label></td>\n                    </tr>\n                    <tr>\n                      <td><span>Payment Term</span><label id=\"payment_term\">60 gg DFFM</label></td>\n                      <td><span>Invoice Type</span><label id=\"invoice_type\">EXP REP INV</label></td>\n                    </tr>\n                    <tr>\n                      <td colspan=\"2\"><span>Note</span>#<label id=\"note\">None</label></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div> -->\n              </div>\n            </div>\n            <!--End Invoice Mid-->\n\n            <div id=\"invoice-bot\">\n\n              <div id=\"table\">\n                <table class=\"table-main\" style=\"filter:blur(4px);\">\n                  <thead>\n                    <tr class=\"tabletitle\">\n                      <th>Type</th>\n                      <th>Description</th>\n                      <th>Quantity</th>\n                      <th>Unit Price</th>\n                      <th>Taxable Amount</th>\n                      <th>Tax Code</th>\n                      <th>%</th>\n                      <th>Tax Amount</th>\n                      <th>AWT</th>\n                      <th>Total</th>\n                    </tr>\n                  </thead>\n                  <tr class=\"list-item\">\n                    <td data-label=\"Type\" class=\"tableitem\">ITEM</td>\n                    <td data-label=\"Description\" class=\"tableitem\">Servizio EDI + Traffico mese di novembre 2017\n                    </td>\n                    <td data-label=\"Quantity\" class=\"tableitem\">46.6</td>\n                    <td data-label=\"Unit Price\" class=\"tableitem\">1</td>\n                    <td data-label=\"Taxable Amount\" class=\"tableitem\">46.6</td>\n                    <td data-label=\"Tax Code\" class=\"tableitem\">DP20</td>\n                    <td data-label=\"%\" class=\"tableitem\">20</td>\n                    <td data-label=\"Tax Amount\" class=\"tableitem\">9.32</td>\n                    <td data-label=\"AWT\" class=\"tableitem\">None</td>\n                    <td data-label=\"Total\" class=\"tableitem\">55.92</td>\n                  </tr>\n                  <tr class=\"list-item\">\n                    <td data-label=\"Type\" class=\"tableitem\">ITEM</td>\n                    <td data-label=\"Description\" class=\"tableitem\">Traffico mese di novembre 2017 FRESSNAPF\n                      TIERNAHRUNGS\n                      GMBH\n                      riadd. Almo DE</td>\n                    <td data-label=\"Quantity\" class=\"tableitem\">4.4</td>\n                    <td data-label=\"Unit Price\" class=\"tableitem\">1</td>\n                    <td data-label=\"Taxable Amount\" class=\"tableitem\">46.6</td>\n                    <td data-label=\"Tax Code\" class=\"tableitem\">DP20</td>\n                    <td data-label=\"%\" class=\"tableitem\">20</td>\n                    <td data-label=\"Tax Amount\" class=\"tableitem\">9.32</td>\n                    <td data-label=\"AWT\" class=\"tableitem\">None</td>\n                    <td data-label=\"Total\" class=\"tableitem\">55.92</td>\n                  </tr>\n                  <tr class=\"list-item total-row\">\n                    <th colspan=\"9\" class=\"tableitem\">Grand Total</th>\n                    <td data-label=\"Grand Total\" class=\"tableitem\">111.84</td>\n                  </tr>\n                </table>\n              </div>\n              <!--End Table-->\n              <div class=\"cta-group\">\n                <!-- <a href=\"javascript:void(0);\" class=\"btn-primary\">Approve</a>\n              <a href=\"javascript:void(0);\" class=\"btn-default\">Reject</a> -->\n                <!-- <ion-chip style=\"background: white; color: black;line-height: inherit;height: auto;\"> -->\n                <pre *ngIf=\"termsandconditions\"> {{termsandconditions}}\n                </pre>\n\n                <ion-skeleton-text *ngIf=\"!termsandconditions\" animated\n                  style=\"width: 40%; height: 80px; border-radius: 3px\">\n                </ion-skeleton-text>\n                <!-- </ion-chip> -->\n\n\n                <!-- <ion-chip style=\"background: white; color: black;line-height: inherit;height: auto;\"> -->\n                <pre *ngIf=\"customernotes\">\n                  {{customernotes}}\n              </pre>\n\n                <ion-skeleton-text *ngIf=\"!customernotes\" animated style=\"width: 40%; height: 50px; border-radius: 3px\">\n                </ion-skeleton-text>\n                <!-- </ion-chip> -->\n              </div>\n\n            </div>\n            <!--End InvoiceBot-->\n            <footer>\n              <div id=\"legalcopy\" class=\"clearfix\">\n                <p class=\"col-right\">Our mailing address is:\n                  <span class=\"email\"><a href=\"mailto:supplier.portal@almonature.com\">xxx@xxx.com</a></span>\n                </p>\n              </div>\n            </footer>\n          </div>\n          <!--End Invoice-->\n        </div><!-- End Invoice Holder-->\n      </ion-card>\n\n\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n\n\n</ion-content>"

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

module.exports = "h1,\nh4 {\n  margin: 15px 0 4px;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 13px;\n  margin: 20px 0 4px;\n  font-weight: 400;\n}\n\npre {\n  white-space: pre-wrap;\n  font-size: 0.75em;\n  color: #666;\n  line-height: 1.2em;\n  width: 45%;\n}\n\n.small {\n  font-size: 10px;\n  line-height: 18px;\n}\n\n.testbox {\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  box-shadow: none;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 92%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 92%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\nlabel {\n  line-height: 1 !important;\n}\n\n/*\n CSS for the main interaction / tabset\n*/\n\n.tabset {\n  position: fixed;\n}\n\n.tabset > input[type=radio] {\n  position: absolute;\n  left: -200vw;\n}\n\n.tabset .tab-panel {\n  display: none;\n}\n\n.tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,\n.tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),\n.tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),\n.tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),\n.tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),\n.tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {\n  display: block;\n}\n\n.tabset > label {\n  position: relative;\n  display: inline-block;\n  padding: 15px 15px 25px;\n  border: 1px solid transparent;\n  border-bottom: 0;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.tabset > label::after {\n  content: \"\";\n  position: absolute;\n  left: 15px;\n  bottom: 10px;\n  width: 22px;\n  height: 4px;\n  background: #8d8d8d;\n}\n\n.tabset > label:hover,\n.tabset > input:focus + label {\n  color: var(--ion-color-theme);\n}\n\n.tabset > label:hover::after,\n.tabset > input:focus + label::after,\n.tabset > input:checked + label::after {\n  background: var(--ion-color-theme);\n}\n\n.tabset > input:checked + label {\n  border-color: none;\n  border-bottom: none;\n  margin-bottom: -1px;\n}\n\n.tab-panel {\n  padding: 30px 0;\n  border-top: 1px solid #ccc;\n}\n\n/*\n Demo purposes only\n*/\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\n.header {\n  height: 50px;\n}\n\n.input[_ngcontent-rbp-c16] {\n  background: var(--ion-color-theme);\n  border: none;\n}\n\n::-moz-selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n::selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n::moz-selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.col-left {\n  float: left;\n}\n\n.col-right {\n  float: right;\n}\n\nh1 {\n  font-size: 1.5em;\n  color: #444;\n}\n\nh2 {\n  font-size: 0.9em;\n}\n\nh3 {\n  font-size: 1.2em;\n  font-weight: 300;\n  line-height: 2em;\n}\n\np {\n  font-size: 0.75em;\n  color: #666;\n  line-height: 1.2em;\n}\n\na {\n  text-decoration: none;\n  color: #00a63f;\n}\n\n#invoiceholder {\n  width: 100%;\n  height: 100%;\n}\n\n#invoice {\n  position: relative;\n  margin: 0 auto;\n  background: #FFF;\n}\n\n[id*=invoice-] {\n  /* Targets all id with 'col-' */\n  /*  border-bottom: 1px solid #EEE;*/\n  padding: 20px;\n}\n\n#invoice-top {\n  border-bottom: 2px solid #00a63f;\n}\n\n#invoice-mid {\n  min-height: 110px;\n}\n\n#invoice-bot {\n  min-height: 240px;\n}\n\n.logo {\n  display: inline-block;\n  vertical-align: middle;\n  width: 110px;\n  overflow: hidden;\n}\n\n.info {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n\n.logo img,\n.clientlogo img {\n  width: 100%;\n}\n\n.clientlogo {\n  display: inline-block;\n  vertical-align: middle;\n  width: 50px;\n}\n\n.clientinfo {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n\n.title {\n  float: right;\n}\n\n.title p {\n  text-align: right;\n}\n\n#message {\n  margin-bottom: 30px;\n  display: block;\n}\n\nh2 {\n  margin-bottom: 5px;\n  color: lightgray;\n}\n\n.col-right td {\n  color: lightgray;\n  padding: 5px 8px;\n  border: 0;\n  font-size: 0.75em;\n}\n\n.col-right td label {\n  margin-left: 5px;\n  font-weight: 600;\n  color: lightgray;\n}\n\n.cta-group a {\n  display: inline-block;\n  padding: 7px;\n  border-radius: 4px;\n  background: #c4390a;\n  margin-right: 10px;\n  min-width: 100px;\n  text-align: center;\n  color: #fff;\n  font-size: 0.75em;\n}\n\n.cta-group .btn-primary {\n  background: #00a63f;\n}\n\n.cta-group.mobile-btn-group {\n  display: none;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\ntd {\n  padding: 10px;\n  border-bottom: 1px solid #cccaca;\n  font-size: 0.7em;\n  text-align: left;\n}\n\n.tabletitle th {\n  border-bottom: 2px solid #ddd;\n  text-align: right;\n}\n\n.tabletitle th:nth-child(2) {\n  text-align: left;\n}\n\nth {\n  font-size: 0.7em;\n  text-align: left;\n  padding: 5px 10px;\n}\n\n.item {\n  width: 50%;\n}\n\n.list-item td {\n  text-align: right;\n}\n\n.list-item td:nth-child(2) {\n  text-align: left;\n}\n\n.total-row th,\n.total-row td {\n  text-align: right;\n  font-weight: 700;\n  font-size: 0.75em;\n  border: 0 none;\n}\n\nfooter {\n  border-top: 1px solid #eeeeee;\n  padding: 15px 20px;\n}\n\n.effect2 {\n  position: relative;\n}\n\n.effect2:before, .effect2:after {\n  z-index: -1;\n  position: absolute;\n  content: \"\";\n  bottom: 15px;\n  left: 10px;\n  width: 50%;\n  top: 80%;\n  max-width: 300px;\n  background: #777;\n  box-shadow: 0 15px 10px #777;\n  transform: rotate(-3deg);\n}\n\n.effect2:after {\n  transform: rotate(3deg);\n  right: 10px;\n  left: auto;\n}\n\n@media screen and (max-width: 767px) {\n  h1 {\n    font-size: 0.9em;\n  }\n\n  #invoice {\n    width: 100%;\n  }\n\n  #message {\n    margin-bottom: 20px;\n  }\n\n  [id*=invoice-] {\n    padding: 20px 10px;\n  }\n\n  .logo {\n    width: 140px;\n  }\n\n  .title {\n    float: none;\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 40px;\n  }\n\n  .title p {\n    text-align: left;\n  }\n\n  .col-left,\n.col-right {\n    width: 100%;\n  }\n\n  .table {\n    margin-top: 20px;\n  }\n\n  #table {\n    white-space: nowrap;\n    overflow: auto;\n  }\n\n  td {\n    white-space: normal;\n  }\n\n  .cta-group {\n    text-align: center;\n  }\n\n  .cta-group.mobile-btn-group {\n    display: block;\n    margin-bottom: 20px;\n  }\n\n  /*==================== Table ====================*/\n  .table-main {\n    border: 0 none;\n  }\n\n  .table-main thead {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n  }\n\n  .table-main tr {\n    border-bottom: 2px solid #eee;\n    display: block;\n    margin-bottom: 20px;\n  }\n\n  .table-main td {\n    font-weight: 700;\n    display: block;\n    padding-left: 40%;\n    max-width: none;\n    position: relative;\n    border: 1px solid #cccaca;\n    text-align: left;\n  }\n\n  .table-main td:before {\n    /*\n    * aria-label has no advantage, it won't be read inside a table\n    content: attr(aria-label);\n    */\n    content: attr(data-label);\n    position: absolute;\n    left: 10px;\n    font-weight: normal;\n    text-transform: uppercase;\n  }\n\n  .total-row th {\n    display: none;\n  }\n\n  .total-row td {\n    text-align: left;\n  }\n\n  footer {\n    text-align: center;\n  }\n}\n\n.list-item {\n  position: relative;\n  /* z-index: 999; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9jb21wYW55X3Byb2ZpbGUvY29tcGFueS1wcm9maWxlL2NvbXBhbnktcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2NvbXBhbnlfcHJvZmlsZS9jb21wYW55LXByb2ZpbGUvY29tcGFueS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTs7RUFFQyxrQkFBQTtFQUNBLGdCQUFBO0FDYkQ7O0FEZ0JBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNiRDs7QURnQkE7RUFDQyxxQkFBQTtFQUNBLGlCQUFBO0VBQ0csV0FBQTtFQUNBLGtCQUFBO0VBQ0gsVUFBQTtBQ2JEOztBRG1CQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ2hCRDs7QURtQkE7RUFFQyx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNqQkQ7O0FEb0JBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFHRCxnQkFBQTtBQ25CQTs7QURzQkE7RUFDQyx3QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNuQkQ7O0FEc0JBOzs7RUFHQyxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ25CRDs7QURzQkE7O0VBRUMsbUJBQUE7QUNuQkQ7O0FEc0JBO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ25CRDs7QURzQkE7O0VBRUMsV0FBQTtBQ25CRDs7QURzQkE7RUFDQyxnQkFBQTtBQ25CRDs7QURzQkE7O0VBRUMsa0JBQUE7QUNuQkQ7O0FEc0JBO0VBQ0MsYUFBQTtBQ25CRDs7QURzQkE7RUFDQyxvQkFBQTtBQ25CRDs7QURzQkE7OztFQUdDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNuQkQ7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QUFBO0lBQ0EsZ0JBQUE7RUNnQ047O0VEOUJJO0lBQ0U7OztLQUFBO0lBSUEseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VDaUNOOztFRC9CRTtJQUNJLGFBQUE7RUNrQ047O0VEaENFO0lBQ0ksZ0JBQUE7RUNtQ047O0VEakNFO0lBQVEsa0JBQUE7RUNxQ1Y7QUFDRjs7QURuQ0E7RUFDSyxrQkFBQTtFQUNELGtCQUFBO0FDcUNKIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvY29tcGFueV9wcm9maWxlL2NvbXBhbnktcHJvZmlsZS9jb21wYW55LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcbmRpdixcbmZvcm0sXG5pbnB1dCxcbnNlbGVjdCB7XG5cdC8vIHBhZGRpbmc6IDA7XG5cdC8vIG1hcmdpbjogMDtcblx0Ly8gb3V0bGluZTogbm9uZTtcblx0Ly8gZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4vL1x0Zm9udC1zaXplOiAxN3B4O1xuXHQvLyBjb2xvcjogIzY2Njtcblx0Ly8gbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbmgxLFxuaDQge1xuXHRtYXJnaW46IDE1cHggMCA0cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg0IHtcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRtYXJnaW46IDIwcHggMCA0cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbnByZSB7XG5cdHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcblx0Zm9udC1zaXplOiAwLjc1ZW07XG4gICAgY29sb3I6ICM2NjY7XG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuXHR3aWR0aDogNDUlO1xufVxuc3BhbiB7XG4vL1x0Y29sb3I6IHJlZDtcbn1cblxuLnNtYWxsIHtcblx0Zm9udC1zaXplOiAxMHB4O1xuXHRsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnRlc3Rib3gge1xuXHQvL2Rpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IGluaGVyaXQ7XG5cdHBhZGRpbmc6IDBweDtcbn1cblxuZm9ybSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAyMHB4O1xuLy9cdGJhY2tncm91bmQ6ICNmZmY7XG4vL1x0Ym94LXNoYWRvdzogMCAycHggNXB4IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5ib3gtc2hhZG93OiBub25lO1xufVxuXG5pbnB1dCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcblx0cGFkZGluZzogNXB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6aG92ZXIsXG5zZWxlY3Q6aG92ZXIge1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDk1NDg0O1xuXHRiYWNrZ3JvdW5kOiAjZTZlZWY3O1xufVxuXG4udGl0bGUtYmxvY2sgc2VsZWN0LFxuLnRpdGxlLWJsb2NrIGlucHV0IHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuc2VsZWN0IHtcblx0cGFkZGluZzogN3B4IDA7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbnNlbGVjdCxcbnRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbm9wdGlvbiB7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kYXktdmlzaXRlZCxcbi50aW1lLXZpc2l0ZWQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInRpbWVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuXHRtYXJnaW46IDJweCAyMnB4IDAgMDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGksXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDhweDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSB7XG5cdHJpZ2h0OiA1cHg7XG5cdHotaW5kZXg6IDE7XG5cdGNvbG9yOiAjYTlhOWE5O1xufVxuXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG5cdHJpZ2h0OiAwO1xuXHR6LWluZGV4OiAyO1xuXHRvcGFjaXR5OiAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGxhYmVsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAgMjBweCAxMHB4IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgaW5wdXQge1xuXHR3aWR0aDogYXV0bztcblx0bWFyZ2luLXRvcDogLTJweDtcbn1cblxudGgsXG50ZCB7XG5cdHdpZHRoOiAxOCU7XG5cdHBhZGRpbmc6IDE1cHggMDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dmVydGljYWwtYWxpZ246IHVuc2V0O1xuXHRsaW5lLWhlaWdodDogMThweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uZmlyc3QtY29sIHtcblx0d2lkdGg6IDI1JTtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGV4dGFyZWEge1xuXHR3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcbn1cblxuLmJ0bi1ibG9jayB7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcblx0d2lkdGg6IDE1MHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXI6IG5vbmU7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1NDg0O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNjY2YTM7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NjhweCkge1xuXHQudGl0bGUtcmFkaW8ge1xuXHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdHBhZGRpbmctdG9wOiAxNXB4O1xuXHRcdGp1c3RpZnktY29udGVudDogZW5kO1xuXHR9XG5cdC50aXRsZS1ibG9jayB7XG5cdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdG1hcmdpbi1sZWZ0OiAxNXB4O1xuXHRcdG1hcmdpbi1yaWdodDogMTVweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblx0LnRpdGxlLWJsb2NrIHNlbGVjdCB7XG5cdFx0d2lkdGg6IDkyJTtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG5cdC50aXRsZS1ibG9jayBpbnB1dCB7XG5cdFx0d2lkdGg6IDkyJTtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG5cdHRoLFxuXHR0ZCB7XG5cdFx0d29yZC1icmVhazoga2VlcC1hbGw7XG5cdH1cbn1cblxuLnNlcnZpY2Uge1xuXHRwb3NpdGlvbjogc3RhdGljO1xuXHRtYXJnaW4tdG9wOiAwO1xuXHRtYXJnaW4tcmlnaHQ6IC4zMTI1cmVtO1xuXHRtYXJnaW4tbGVmdDogMDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZy1sZWZ0OiAwO1xuXHRtYXJnaW4tcmlnaHQ6IC43NXJlbTtcbn1cblxubGFiZWwge1xuXHRsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xufVxuXG4vKlxuIENTUyBmb3IgdGhlIG1haW4gaW50ZXJhY3Rpb24gLyB0YWJzZXRcbiovXG5cbi50YWJzZXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4udGFic2V0ID4gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMjAwdnc7XG59XG5cbi50YWJzZXQgLnRhYi1wYW5lbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8vIC50YWItcGFuZWxzIHtcbi8vIFx0d2lkdGg6IDUwJTtcbi8vIH1cbi50YWJzZXQgPiBpbnB1dDpmaXJzdC1jaGlsZDpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOmZpcnN0LWNoaWxkLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCgzKTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCgyKSxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoNSk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoMyksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDcpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDQpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCg5KTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg1KSxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoMTEpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDYpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50YWJzZXQgPiBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRhYnNldCA+IGxhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICM4ZDhkOGQ7XG59XG5cbi50YWJzZXQgPiBsYWJlbDpob3Zlcixcbi50YWJzZXQgPiBpbnB1dDpmb2N1cyArIGxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59XG5cbi50YWJzZXQgPiBsYWJlbDpob3Zlcjo6YWZ0ZXIsXG4udGFic2V0ID4gaW5wdXQ6Zm9jdXMgKyBsYWJlbDo6YWZ0ZXIsXG4udGFic2V0ID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59XG5cbi50YWJzZXQgPiBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLnRhYi1wYW5lbCB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG5cbi8qXG4gRGVtbyBwdXJwb3NlcyBvbmx5XG4qL1xuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuLnRhYnNldCB7XG4vLyBtYXgtd2lkdGg6IDY1ZW07XG59XG5cbi8vIGVuZCBvZiB0YWJzXG5cblxuLmhlYWRlciB7XG5cdGhlaWdodDogNTBweDtcbn1cblxuLmlucHV0W19uZ2NvbnRlbnQtcmJwLWMxNl0ge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi8vIGFsZXJ0IFxuXG4vLyBpbnZvaWNlIHRlbXBsYXRlXG5cblxuOjpzZWxlY3Rpb24ge2JhY2tncm91bmQ6ICNmMzE1NDQ7IGNvbG9yOiAjRkZGO31cbjo6bW96LXNlbGVjdGlvbiB7YmFja2dyb3VuZDogI2YzMTU0NDsgY29sb3I6ICNGRkY7fVxuLmNsZWFyZml4OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5jb2wtbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uY29sLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5oMXtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICM0NDQ7XG59XG5oMntmb250LXNpemU6IC45ZW07fVxuaDN7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG59XG5we1xuICBmb250LXNpemU6IC43NWVtO1xuICBjb2xvcjogIzY2NjtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xufVxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMDBhNjNmO1xufVxuXG4jaW52b2ljZWhvbGRlcntcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuIC8vIHBhZGRpbmc6IDUwcHggMDtcbn1cbiNpbnZvaWNle1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuIC8vIHdpZHRoOiA3MDBweDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cblxuW2lkKj0naW52b2ljZS0nXXsgLyogVGFyZ2V0cyBhbGwgaWQgd2l0aCAnY29sLScgKi9cbi8qICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRTsqL1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jaW52b2ljZS10b3B7Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMGE2M2Y7fVxuI2ludm9pY2UtbWlke21pbi1oZWlnaHQ6IDExMHB4O31cbiNpbnZvaWNlLWJvdHsgbWluLWhlaWdodDogMjQwcHg7fVxuXG4ubG9nb3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0d2lkdGg6IDExMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW5mb3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5sb2dvIGltZyxcbi5jbGllbnRsb2dvIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY2xpZW50bG9nb3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0d2lkdGg6IDUwcHg7XG59XG4uY2xpZW50aW5mbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHhcbn1cbi50aXRsZXtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnRpdGxlIHB7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuI21lc3NhZ2V7bWFyZ2luLWJvdHRvbTogMzBweDsgZGlzcGxheTogYmxvY2s7fVxuaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufVxuLmNvbC1yaWdodCB0ZCB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbiAvLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuLmNvbC1yaWdodCB0ZCBsYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG4uY3RhLWdyb3VwIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigxOTYsIDU3LCAxMCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuLmN0YS1ncm91cCAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6ICMwMGE2M2Y7XG59XG4uY3RhLWdyb3VwLm1vYmlsZS1idG4tZ3JvdXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG50YWJsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG50ZHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjYWNhO1xuICAgIGZvbnQtc2l6ZTogMC43MGVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50YWJsZXRpdGxlIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnRhYmxldGl0bGUgdGg6bnRoLWNoaWxkKDIpIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxudGgge1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5pdGVte3dpZHRoOiA1MCU7fVxuLmxpc3QtaXRlbSB0ZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubGlzdC1pdGVtIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50b3RhbC1yb3cgdGgsXG4udG90YWwtcm93IHRkIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogLjc1ZW07XG4gICAgYm9yZGVyOiAwIG5vbmU7XG59XG4udGFibGUtbWFpbiB7XG4gICAgXG59XG5mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlZWVlOztcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG59XG4uZWZmZWN0Mlxue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZWZmZWN0MjpiZWZvcmUsIC5lZmZlY3QyOmFmdGVyXG57XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvdHRvbTogMTVweDtcbiAgbGVmdDogMTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgdG9wOiA4MCU7XG4gIG1heC13aWR0aDozMDBweDtcbiAgYmFja2dyb3VuZDogIzc3NztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDE1cHggMTBweCAjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMTVweCAxMHB4ICM3Nzc7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAxMHB4ICM3Nzc7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG59XG4uZWZmZWN0MjphZnRlclxue1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGxlZnQ6IGF1dG87XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgIH1cbiAgICAjaW52b2ljZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAjbWVzc2FnZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIFtpZCo9J2ludm9pY2UtJ10ge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgfVxuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB9XG4gICAgLnRpdGxlIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAuY29sLWxlZnQsXG4gICAgLmNvbC1yaWdodCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAudGFibGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAjdGFibGUge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG4gICAgdGQge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIH1cbiAgICAuY3RhLWdyb3VwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY3RhLWdyb3VwLm1vYmlsZS1idG4tZ3JvdXAge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgIC8qPT09PT09PT09PT09PT09PT09PT0gVGFibGUgPT09PT09PT09PT09PT09PT09PT0qL1xuICAgIC50YWJsZS1tYWluIHtcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgfSAgXG4gICAgICAudGFibGUtbWFpbiB0aGVhZCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgfVxuICAgICAgLnRhYmxlLW1haW4gdHIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VlZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG4gICAgICAudGFibGUtbWFpbiB0ZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwJTtcbiAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NhY2E7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgICAudGFibGUtbWFpbiB0ZDpiZWZvcmUge1xuICAgICAgICAvKlxuICAgICAgICAqIGFyaWEtbGFiZWwgaGFzIG5vIGFkdmFudGFnZSwgaXQgd29uJ3QgYmUgcmVhZCBpbnNpZGUgYSB0YWJsZVxuICAgICAgICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xuICAgICAgICAqL1xuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgLnRvdGFsLXJvdyB0aCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC50b3RhbC1yb3cgdGQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICBmb290ZXIge3RleHQtYWxpZ246IGNlbnRlcjt9XG59XG5cbi5saXN0LWl0ZW0ge1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIC8qIHotaW5kZXg6IDk5OTsgKi9cbn1cblxuIiwiaDEsXG5oNCB7XG4gIG1hcmdpbjogMTVweCAwIDRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMjBweCAwIDRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxucHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgY29sb3I6ICM2NjY7XG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLnRlc3Rib3gge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dDpob3ZlcixcbnRleHRhcmVhOmhvdmVyLFxuc2VsZWN0OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5NTQ4NDtcbiAgYmFja2dyb3VuZDogI2U2ZWVmNztcbn1cblxuLnRpdGxlLWJsb2NrIHNlbGVjdCxcbi50aXRsZS1ibG9jayBpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5zZWxlY3QsXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5vcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGF5LXZpc2l0ZWQsXG4udGltZS12aXNpdGVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT10aW1lXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIG1hcmdpbjogMnB4IDIycHggMCAwO1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSxcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGkge1xuICByaWdodDogNXB4O1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2E5YTlhOTtcbn1cblxuW3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMjBweCAxMHB4IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgaW5wdXQge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxudGgsXG50ZCB7XG4gIHdpZHRoOiAxOCU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHVuc2V0O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uZmlyc3QtY29sIHtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcbn1cblxuLmJ0bi1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk1NDg0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjY2YTM7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NjhweCkge1xuICAudGl0bGUtcmFkaW8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICB9XG5cbiAgLnRpdGxlLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayBzZWxlY3Qge1xuICAgIHdpZHRoOiA5MiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC50aXRsZS1ibG9jayBpbnB1dCB7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgdGgsXG50ZCB7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gIH1cbn1cbi5zZXJ2aWNlIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjMxMjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbn1cblxubGFiZWwge1xuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xufVxuXG4vKlxuIENTUyBmb3IgdGhlIG1haW4gaW50ZXJhY3Rpb24gLyB0YWJzZXRcbiovXG4udGFic2V0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4udGFic2V0ID4gaW5wdXRbdHlwZT1yYWRpb10ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yMDB2dztcbn1cblxuLnRhYnNldCAudGFiLXBhbmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhYnNldCA+IGlucHV0OmZpcnN0LWNoaWxkOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6Zmlyc3QtY2hpbGQsXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDMpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDIpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCg1KTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCgzKSxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoNyk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNCksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDkpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDUpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCgxMSk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNikge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRhYnNldCA+IGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFic2V0ID4gbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNXB4O1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogIzhkOGQ4ZDtcbn1cblxuLnRhYnNldCA+IGxhYmVsOmhvdmVyLFxuLnRhYnNldCA+IGlucHV0OmZvY3VzICsgbGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbn1cblxuLnRhYnNldCA+IGxhYmVsOmhvdmVyOjphZnRlcixcbi50YWJzZXQgPiBpbnB1dDpmb2N1cyArIGxhYmVsOjphZnRlcixcbi50YWJzZXQgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbn1cblxuLnRhYnNldCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLnRhYi1wYW5lbCB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG5cbi8qXG4gRGVtbyBwdXJwb3NlcyBvbmx5XG4qL1xuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5pbnB1dFtfbmdjb250ZW50LXJicC1jMTZdIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmMzE1NDQ7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG46Om1vei1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZjMxNTQ0O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmNsZWFyZml4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLmNvbC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2wtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGNvbG9yOiAjNjY2O1xuICBsaW5lLWhlaWdodDogMS4yZW07XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDBhNjNmO1xufVxuXG4jaW52b2ljZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNpbnZvaWNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cblxuW2lkKj1pbnZvaWNlLV0ge1xuICAvKiBUYXJnZXRzIGFsbCBpZCB3aXRoICdjb2wtJyAqL1xuICAvKiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUU7Ki9cbiAgcGFkZGluZzogMjBweDtcbn1cblxuI2ludm9pY2UtdG9wIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMGE2M2Y7XG59XG5cbiNpbnZvaWNlLW1pZCB7XG4gIG1pbi1oZWlnaHQ6IDExMHB4O1xufVxuXG4jaW52b2ljZS1ib3Qge1xuICBtaW4taGVpZ2h0OiAyNDBweDtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmluZm8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubG9nbyBpbWcsXG4uY2xpZW50bG9nbyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNsaWVudGxvZ28ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uY2xpZW50aW5mbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi50aXRsZSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRpdGxlIHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI21lc3NhZ2Uge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5jb2wtcmlnaHQgdGQge1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG4uY29sLXJpZ2h0IHRkIGxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmN0YS1ncm91cCBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2M0MzkwYTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuNzVlbTtcbn1cblxuLmN0YS1ncm91cCAuYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMDBhNjNmO1xufVxuXG4uY3RhLWdyb3VwLm1vYmlsZS1idG4tZ3JvdXAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjYWNhO1xuICBmb250LXNpemU6IDAuN2VtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGFibGV0aXRsZSB0aCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRhYmxldGl0bGUgdGg6bnRoLWNoaWxkKDIpIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGgge1xuICBmb250LXNpemU6IDAuN2VtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLml0ZW0ge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubGlzdC1pdGVtIHRkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5saXN0LWl0ZW0gdGQ6bnRoLWNoaWxkKDIpIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvdGFsLXJvdyB0aCxcbi50b3RhbC1yb3cgdGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGJvcmRlcjogMCBub25lO1xufVxuXG5mb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZWVlZTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuXG4uZWZmZWN0MiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVmZmVjdDI6YmVmb3JlLCAuZWZmZWN0MjphZnRlciB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvdHRvbTogMTVweDtcbiAgbGVmdDogMTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgdG9wOiA4MCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxNXB4IDEwcHggIzc3NztcbiAgLW1vei1ib3gtc2hhZG93OiAwIDE1cHggMTBweCAjNzc3O1xuICBib3gtc2hhZG93OiAwIDE1cHggMTBweCAjNzc3O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xufVxuXG4uZWZmZWN0MjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICByaWdodDogMTBweDtcbiAgbGVmdDogYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH1cblxuICAjaW52b2ljZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAjbWVzc2FnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIFtpZCo9aW52b2ljZS1dIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIH1cblxuICAubG9nbyB7XG4gICAgd2lkdGg6IDE0MHB4O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuXG4gIC50aXRsZSBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmNvbC1sZWZ0LFxuLmNvbC1yaWdodCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudGFibGUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAjdGFibGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICB0ZCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuXG4gIC5jdGEtZ3JvdXAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jdGEtZ3JvdXAubW9iaWxlLWJ0bi1ncm91cCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC8qPT09PT09PT09PT09PT09PT09PT0gVGFibGUgPT09PT09PT09PT09PT09PT09PT0qL1xuICAudGFibGUtbWFpbiB7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gIH1cblxuICAudGFibGUtbWFpbiB0aGVhZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcbiAgfVxuXG4gIC50YWJsZS1tYWluIHRyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VlZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLnRhYmxlLW1haW4gdGQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjYWNhO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAudGFibGUtbWFpbiB0ZDpiZWZvcmUge1xuICAgIC8qXG4gICAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcbiAgICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xuICAgICovXG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cblxuICAudG90YWwtcm93IHRoIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRvdGFsLXJvdyB0ZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4ubGlzdC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiB6LWluZGV4OiA5OTk7ICovXG59Il19 */"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







// import { SelectUserImageModal } from "../select-image/select-user-image.modal";
var CompanyProfilePage = /** @class */ (function () {
    function CompanyProfilePage(toastController, navCtrl, firebaseService, authService, alertController) {
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.alertController = alertController;
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
    CompanyProfilePage.prototype.createCompanyProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.uid, this.email, this.createCompanyProfileForm.value);
                        console.log(this.base64Image);
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Confirm',
                                message: '<strong>This will be shown in the estimate and invoice</strong>!!!',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }, {
                                        text: 'Okay',
                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var toast;
                                            var _this = this;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        this.createCompanyProfileForm.value["logo_base64Image"] = this.base64Image;
                                                        this.firebaseService.createCompanyProfile(this.uid, this.email, this.createCompanyProfileForm.value).then(function (res) {
                                                            _this.getCompanyProfile();
                                                        });
                                                        return [4 /*yield*/, this.toastController.create({
                                                                message: 'Your settings have been saved.',
                                                                mode: 'ios',
                                                                position: 'top',
                                                                color: 'theme',
                                                                duration: 2500
                                                            })];
                                                    case 1:
                                                        toast = _a.sent();
                                                        toast.present();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present().then(function () {
                            }).catch(function (err) {
                                err.log(err);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyProfilePage.prototype.createTermsandConditions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.uid, this.email, this.createTermsandConditionsForm.value);
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Confirm',
                                message: '<strong>This will be shown in the estimate and invoice</strong>!!!',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }, {
                                        text: 'Okay',
                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var toast;
                                            var _this = this;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        this.firebaseService.createTermsandConditions(this.uid, this.email, this.createTermsandConditionsForm.value).then(function (res) {
                                                            _this.getTermsandConditions();
                                                        });
                                                        return [4 /*yield*/, this.toastController.create({
                                                                message: 'Your settings have been saved.',
                                                                mode: 'ios',
                                                                position: 'top',
                                                                color: 'theme',
                                                                duration: 2500
                                                            })];
                                                    case 1:
                                                        toast = _a.sent();
                                                        toast.present();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present().then(function () {
                            }).catch(function (err) {
                                err.log(err);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyProfilePage.prototype.createCustomerNotes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.uid, this.email, this.createCustomerNotesForm.value);
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Confirm',
                                message: '<strong>This will be shown in the estimate and invoice</strong>!!!',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }, {
                                        text: 'Okay',
                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var toast;
                                            var _this = this;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        this.firebaseService.createCustomerNotes(this.uid, this.email, this.createCustomerNotesForm.value).then(function (res) {
                                                            _this.getCustomerNotes();
                                                        });
                                                        return [4 /*yield*/, this.toastController.create({
                                                                message: 'Your settings have been saved.',
                                                                mode: 'ios',
                                                                position: 'top',
                                                                color: 'theme',
                                                                duration: 2500
                                                            })];
                                                    case 1:
                                                        toast = _a.sent();
                                                        toast.present();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present().then(function () {
                            }).catch(function (err) {
                                err.log(err);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyProfilePage.prototype.onChange = function ($event) {
        var file = $event.target['files'][0];
        console.log('file is: ', file);
        this.convertToBase64(file);
    };
    CompanyProfilePage.prototype.convertToBase64 = function (file) {
        var _this = this;
        this.myimage = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (subscriber) {
            _this.readFile(file, subscriber);
        });
        this.myimage.subscribe(function (res) {
            console.log(res);
            _this.base64Image = res;
        });
    };
    CompanyProfilePage.prototype.readFile = function (file, subscriber) {
        var filereader = new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload = function () {
            subscriber.next(filereader.result);
            subscriber.complete();
        };
        filereader.onerror = function (error) {
            subscriber.error(error);
        };
    };
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
    CompanyProfilePage.prototype.getCompanyProfile = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.readCompanyProfile(this.uid).subscribe(function (res) {
            console.log(res['userData']);
            _this.companyprofile = res['userData'];
            _this.companyemail = res['userData']['company_email'];
            _this.companyaddress = res['userData']['address'];
            _this.company_name = res['userData']['company_name'];
            _this.website = res['userData']['website'];
            _this.logo_base64Image = res['userData']['logo_base64Image'];
            _this.base64Image = _this.logo_base64Image;
            console.log(_this.base64Image);
        });
    };
    CompanyProfilePage.prototype.getCustomerNotes = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.readCustomerNote(this.uid).subscribe(function (res) {
            console.log(res['userData']);
            _this.customernotes = res['userData']['customernotes'];
        });
    };
    CompanyProfilePage.prototype.getTermsandConditions = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.readTermsandConditions(this.uid).subscribe(function (res) {
            console.log(res['userData']);
            _this.termsandconditions = res['userData']['termsandconditions'];
        });
    };
    CompanyProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
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
    return CompanyProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=firebase-company_profile-company-profile-company-profile-module-es5.js.map