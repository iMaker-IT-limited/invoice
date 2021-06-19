(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-company_profile-company-profile-company-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/company_profile/company-profile/company-profile.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/company_profile/company-profile/company-profile.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header\">\n    <ion-title color=\"theme\">Company Profile</ion-title>\n\n    <ion-button fill=\"clear\" slot=\"end\" color=\"theme\" (click)=\"dismissModal()\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <!-- <ion-item-divider sticky>\n    <ion-title>New Customer</ion-title>\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"readContact()\">\n      Get\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"updateContact()\">\n      Update\n    </ion-button>\n\n    <ion-button fill=\"clear\" color=\"theme\" (click)=\"deleteContact()\">\n      Delete\n    </ion-button>\n\n  </ion-item-divider>\n\n  <ion-progress-bar color=\"theme\" type=\"indeterminate\"></ion-progress-bar> -->\n\n  <ion-row>\n\n    <ion-col size=\"7\">\n\n      <ion-card>\n        <div class=\"tabset\">\n          <!-- Tab 1 -->\n          <input type=\"radio\" name=\"tabset\" id=\"tab11\" aria-controls=\"a\" checked>\n          <label for=\"tab11\">Set up Company detail</label>\n          <!-- Tab 2 -->\n          <input type=\"radio\" name=\"tabset\" id=\"tab22\" aria-controls=\"b\">\n          <label for=\"tab22\">Terms and Conditions</label>\n          <!-- Tab 3 -->\n          <input type=\"radio\" name=\"tabset\" id=\"tab33\" aria-controls=\"c\">\n          <label for=\"tab33\">Customer Notes</label>\n\n          <input type=\"radio\" name=\"tabset\" id=\"tab44\" aria-controls=\"d\">\n          <label for=\"tab44\">Custom Logistic Info</label>\n          <div class=\"tab-panels\">\n\n            <section id=\"a\" class=\"tab-panel\">\n\n              <!-- <div style=\"padding: 20px;\">\n            <app-uploader [id]=\"uid\"></app-uploader>\n          </div> -->\n\n              <div class=\"testbox\">\n\n                <form [formGroup]=\"createCompanyProfileForm\" (ngSubmit)=\"createCompanyProfile()\">\n\n\n\n                  <legend>Company Logo</legend>\n                  <p>\n                    <input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" (change)=\"onChange($event)\" />\n                  </p>\n                  <!-- <div *ngIf=\"myimage\">\n                      <img [src]=\"myimage | async\" width=\"200px\" height=\"200px\" alt=\"\">\n                    </div> -->\n\n\n                  <!-- <h4>Customer Type<span>*</span></h4>\n              <div class=\"title-radio\">\n                <input style=\"width: 40px;\" type=\"radio\" value=\"business\" formControlName=\"type\" />\n                <label for=\"banma\">Business</label><br />\n                <input style=\"width: 40px;\" type=\"radio\" value=\"individual\" formControlName=\"type\" />\n                <label for=\"kokui\">Individual</label>\n              </div> -->\n\n                  <!-- <h4>Primary Contact<span>*</span></h4>\n              <div class=\"title-block\">\n                <select formControlName=\"unit\">\n                  <option value=\"Type\">Salutation</option>\n                  <option value=\"Mr.\">Mr.</option>\n                  <option value=\"Mrs.\">Mrs.</option>\n                  <option value=\"Ms.\">Ms.</option>\n                  <option value=\"Miss\">Miss</option>\n                  <option value=\"Dr.\">Dr.</option>\n                </select>\n              </div> -->\n\n                  <legend>Address</legend>\n                  <p>\n                    <input type=\"text\" name=\"address\" placeholder=\"Address\" formControlName=\"address\" />\n                  </p>\n\n                  <legend>Company Name</legend>\n                  <p>\n                    <input type=\"text\" name=\"company_name\" placeholder=\"Company Name\" formControlName=\"company_name\" />\n                  </p>\n\n                  <legend>Company Email</legend>\n                  <p>\n                    <input type=\"email\" name=\"company_email\" placeholder=\"Company Eamil\"\n                      formControlName=\"company_email\" />\n                  </p>\n\n                  <legend>Website</legend>\n                  <p>\n                    <input type=\"text\" name=\"website\" placeholder=\"website\" formControlName=\"website\" />\n                  </p>\n\n                  <legend>Phone</legend>\n                  <p>\n                    <input type=\"text\" name=\"work_phone\" placeholder=\"Work Phone\" formControlName=\"work_phone\" />\n                  </p>\n\n                  <div class=\"btn-block\">\n                    <button type=\"submit\">Save</button>\n                  </div>\n                </form>\n\n              </div>\n\n            </section>\n\n            <section id=\"b\" class=\"tab-panel\">\n              <div class=\"testbox\">\n\n                <form [formGroup]=\"createTermsandConditionsForm\" (ngSubmit)=\"createTermsandConditions()\">\n                  <legend>Terms and Conditions</legend>\n                  <p>\n                    <ion-textarea rows=\"6\" class=\"form-control\" formControlName=\"termsandconditions\"\n                      placeholder=\"Enter the terms and conditions of your business that will displayed in your transaction\">\n                    </ion-textarea>\n                  </p>\n\n                  <div class=\"btn-block\">\n                    <button type=\"submit\">Save</button>\n                  </div>\n                </form>\n\n              </div>\n            </section>\n            <section id=\"c\" class=\"tab-panel\">\n              <div class=\"testbox\">\n\n                <form [formGroup]=\"createCustomerNotesForm\" (ngSubmit)=\"createCustomerNotes()\">\n                  <legend>Custom Notes</legend>\n                  <p>\n                    <ion-textarea rows=\"6\" class=\"form-control\" formControlName=\"customernotes\"\n                      placeholder=\"Customer notes\">\n                    </ion-textarea>\n\n                  </p>\n\n\n                  <div class=\"btn-block\">\n                    <button type=\"submit\">Save</button>\n                  </div>\n                </form>\n\n              </div>\n            </section>\n\n            <section id=\"d\" class=\"tab-panel\">\n\n              <div class=\"testbox\">\n\n                <form [formGroup]=\"createLogisticCompanyProfileForm\" (ngSubmit)=\"createLogisticCompanyProfile()\">\n\n                  <legend>Shipper</legend>\n                  <p>\n                    <input type=\"text\" name=\"shipper\" id=\"shipper\" placeholder=\"Shipper\" formControlName=\"shipper\" />\n                  </p>\n\n                  <legend>Consignee</legend>\n                  <p>\n                    <input type=\"text\" name=\"consignee\" placeholder=\"Consignee\" formControlName=\"consignee\" />\n                  </p>\n\n                  <legend>Port of Loading</legend>\n                  <p>\n                    <input type=\"text\" name=\"port_of_loading\" placeholder=\"Port of Loading\"\n                      formControlName=\"port_of_loading\" />\n                  </p>\n\n                  <legend>Port of Discharge</legend>\n                  <p>\n                    <input type=\"text\" name=\"port_of_discharge\" placeholder=\"Port of Discharge\"\n                      formControlName=\"port_of_discharge\" />\n                  </p>\n\n                  <legend>HBL</legend>\n                  <p>\n                    <input type=\"text\" name=\"HBL\" placeholder=\"HBL\" formControlName=\"HBL\" />\n                  </p>\n\n                  <legend>MBL</legend>\n                  <p>\n                    <input type=\"text\" name=\"MBL\" placeholder=\"MBL\" formControlName=\"MBL\" />\n                  </p>\n\n                  <legend>Carriage by</legend>\n                  <p>\n                    <input type=\"text\" name=\"carriage_by\" placeholder=\"Carriage by\" formControlName=\"carriage_by\" />\n                  </p>\n\n                  <legend>Vessel</legend>\n                  <p>\n                    <input type=\"text\" name=\"vessel\" placeholder=\"vessel\" formControlName=\"vessel\" />\n                  </p>\n\n                  <legend>Container</legend>\n                  <p>\n                    <input type=\"text\" name=\"container\" placeholder=\"Container\" formControlName=\"container\" />\n                  </p>\n\n                  <legend>Date of order</legend>\n                  <p>\n                    <input type=\"text\" name=\"date_of_order\" placeholder=\"Date of order\"\n                      formControlName=\"date_of_order\" />\n                  </p>\n\n                  <legend>Your Reference</legend>\n                  <p>\n                    <input type=\"text\" name=\"your_reference\" placeholder=\"Your Reference\"\n                      formControlName=\"your_reference\" />\n                  </p>\n\n                  <legend>Terms of delivery</legend>\n                  <p>\n                    <input type=\"text\" name=\"terms_of_delivery\" placeholder=\"Terms of delivery\"\n                      formControlName=\"terms_of_delivery\" />\n                  </p>\n\n                  <legend>Marks/No.</legend>\n                  <p>\n                    <input type=\"text\" name=\"marks\" placeholder=\"\" formControlName=\"marks_no\" />\n                  </p>\n\n                  <legend>Pieces</legend>\n                  <p>\n                    <input type=\"text\" name=\"pieces\" placeholder=\"\" formControlName=\"pieces\" />\n                  </p>\n\n                  <legend>Packaging</legend>\n                  <p>\n                    <input type=\"text\" name=\"packaging\" placeholder=\"packaging\" formControlName=\"packaging\" />\n                  </p>\n\n                  <legend>Description of goods</legend>\n                  <p>\n                    <input type=\"text\" name=\"description_of_goods\" placeholder=\"\"\n                      formControlName=\"description_of_goods\" />\n                  </p>\n\n                  <legend>Weight(kgs)</legend>\n                  <p>\n                    <input type=\"text\" name=\"weight\" placeholder=\"\" formControlName=\"weight\" />\n                  </p>\n\n                  <legend>cbm</legend>\n                  <p>\n                    <input type=\"text\" name=\"cbm\" placeholder=\"cbm\" formControlName=\"cbm\" />\n                  </p>\n\n                  <div class=\"btn-block\">\n                    <button type=\"submit\">Save</button>\n                  </div>\n                </form>\n\n              </div>\n\n            </section>\n          </div>\n\n\n\n        </div>\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col size=\"5\">\n\n      <ion-card style=\"overflow-x: scroll;\">\n        <div id=\"invoiceholder\">\n          <div id=\"invoice\" class=\"effect2\">\n\n            <div id=\"invoice-top\">\n              <div class=\"logo\">\n                <img [src]=\"base64Image\" alt=\"\">\n              </div>\n              <div class=\"title\" style=\"filter:blur(4px);\">\n                <h1>Invoice #<span class=\"invoiceVal invoice_num\">tst-inv-23</span></h1>\n                <p>Invoice Date: <span id=\"invoice_date\">01 Feb 2018</span><br>\n                  GL Date: <span id=\"gl_date\">23 Feb 2018</span>\n                </p>\n              </div>\n              <!--End Title-->\n            </div>\n            <!--End InvoiceTop-->\n\n\n            <div id=\"invoice-mid\">\n              <!-- <div id=\"message\">\n              <h2>Hello Andrea De Asmundis,</h2>\n              <p>An invoice with invoice number #<span id=\"invoice_num\">tst-inv-23</span> is created for <span\n                  id=\"supplier_name\"> {{company_name || 0}}</span> which is 100% matched with PO and is waiting for your\n                approval. <a href=\"javascript:void(0);\">Click here</a> to login to view the invoice.</p>\n            </div> -->\n\n              <div class=\"clearfix\">\n                <div class=\"col-left\">\n                  <!-- <div class=\"clientlogo\">\n                  <img [src]=\"base64Image\" alt=\"\">\n                </div> -->\n\n                  <div *ngIf=\"companyprofile\" class=\"clientinfo\">\n                    <h2 id=\"supplier\">{{company_name}}</h2>\n                    <p>\n                      <span id=\"address\"></span>\n                      <br>\n                      <span id=\"city\">\n                        {{companyaddress}}</span>\n                      <br>\n                      <span id=\"country\">\n\n                      </span>\n                      <span id=\"zip\">\n                        {{companyemail}}\n                      </span>\n                      <br>\n                      <span id=\"tax_num\">\n                        555-555-5555\n                      </span>\n                      <br>\n                    </p>\n                    <p> {{website}}</p>\n                  </div>\n\n                  <div *ngIf=\"!companyprofile\" class=\"clientinfo\">\n                    <h2 id=\"supplier\">\n                      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                    </h2>\n                    <p>\n                      <span id=\"address\"></span>\n                      <br>\n                      <span id=\"city\">\n                        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                      </span>\n                      <br>\n                      <span id=\"country\">\n\n                      </span>\n                      <span id=\"zip\">\n                        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                      </span>\n                      <br>\n                      <span id=\"tax_num\">\n                        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                      </span>\n                      <br>\n                    </p>\n                    <p>\n                      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                    </p>\n                  </div>\n\n                </div>\n                <!-- <div class=\"col-right\">\n                <table class=\"table\">\n                  <tbody>\n                    <tr>\n                      <td><span>Invoice Total</span><label id=\"invoice_total\">61.2</label></td>\n                      <td><span>Currency</span><label id=\"currency\">EUR</label></td>\n                    </tr>\n                    <tr>\n                      <td><span>Payment Term</span><label id=\"payment_term\">60 gg DFFM</label></td>\n                      <td><span>Invoice Type</span><label id=\"invoice_type\">EXP REP INV</label></td>\n                    </tr>\n                    <tr>\n                      <td colspan=\"2\"><span>Note</span>#<label id=\"note\">None</label></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div> -->\n              </div>\n            </div>\n            <!--End Invoice Mid-->\n\n            <div *ngIf=\"companylogisticprofile\" id=\"invoice-bot\">\n\n              <div id=\"table\">\n                <table class=\"table-main\" style=\"filter:blur(0px);\">\n                  <tr>\n                    <td colspan=\"4\">\n                      <legend>Shipper</legend>\n                      {{shipper}}\n\n                    </td>\n                    <td colspan=\"4\">\n                      <legend>Consignee</legend>\n                      {{consignee}}\n\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td colspan=\"2\">\n                      <legend>Port of Loading</legend>{{port_of_loading}}\n\n                    </td>\n                    <td colspan=\"2\">\n                      <legend>Port of Discharge</legend>{{port_of_discharge}}\n                    </td>\n                    <td colspan=\"2\">\n                      <legend>HBL</legend>{{HBL}}\n                    </td>\n                    <td colspan=\"1\">\n                      <legend>MBL</legend>{{MBL}}\n                    </td>\n                    <td colspan=\"1\">\n                      <legend>Carriage by</legend>{{carriage_by}}\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td colspan=\"2\">\n                      <legend>Vessel</legend>\n                      {{vessel}}\n                    </td>\n                    <td colspan=\"6\">\n                      <legend>Container</legend>{{container}}\n                    </td>\n\n                  </tr>\n                  <tr>\n                    <td colspan=\"2\">\n                      <legend>Date of order</legend>{{date_of_order}}\n                    </td>\n                    <td colspan=\"4\">\n                      <legend>Your Reference</legend>{{your_reference}}\n                    </td>\n                    <td colspan=\"2\">\n                      <legend>Terms of delivery</legend>{{terms_of_delivery}}\n                    </td>\n\n                  </tr>\n\n                </table>\n\n                <br>\n                <table class=\"table-main\">\n                  <tr>\n                    <td colspan=\"2\">\n                      <legend>Marks/ No.</legend>\n                    </td>\n                    <td colspan=\"1\">\n                      <legend>Pieces</legend>\n                    </td>\n                    <td colspan=\"1\">\n                      <legend>Packaging</legend>\n                    </td>\n                    <td colspan=\"2\">\n                      <legend>Description of goods</legend>\n                    </td>\n                    <td colspan=\"1\">\n                      <legend>Weights</legend>\n                    </td>\n                    <td colspan=\"1\">\n                      <legend>cbm</legend>\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td colspan=\"2\">\n                      {{marks_no}}\n                    </td>\n                    <td colspan=\"1\">\n                      {{pieces}}\n                    </td>\n                    <td colspan=\"1\">\n                      {{packaging}}\n                    </td>\n                    <td colspan=\"2\">\n                      {{description_of_goods}}\n                    </td>\n                    <td colspan=\"1\">\n                      {{weight}}\n                    </td>\n                    <td colspan=\"1\">\n                      {{cbm}}\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <!--End Table-->\n\n            </div>\n\n            <div *ngIf=\"!companylogisticprofile\" id=\"invoice-bot\">\n\n              <div id=\"table\">\n                <table class=\"table-main\" style=\"filter:blur(0px);\">\n                  <tr>\n                    <td colspan=\"4\">\n                      <legend>Shipper</legend>\n                      <ion-skeleton-text animated style=\"width: 20px\"></ion-skeleton-text>\n                    </td>\n                    <td colspan=\"4\">\n                      <legend>Consignee</legend>\n                      <ion-skeleton-text animated style=\"width: 20px\"></ion-skeleton-text>\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td colspan=\"2\">\n                      <legend>Port of Loading</legend>\n                      <ion-skeleton-text *ngIf=\"!port_of_loading\" animated style=\"width: 20px\"></ion-skeleton-text>\n\n                    </td>\n                    <td colspan=\"2\">\n                      <legend>Port of Discharge</legend>\n                      <ion-skeleton-text *ngIf=\"!port_of_discharge\" animated style=\"width: 20px\"></ion-skeleton-text>\n                    </td>\n                    <td colspan=\"2\">\n                      <legend>HBL</legend>\n                      <ion-skeleton-text *ngIf=\"!HBL\" animated style=\"width: 20px\">\n                      </ion-skeleton-text>\n                    </td>\n                    <td colspan=\"1\">\n                      <legend>MBL</legend>\n                      <ion-skeleton-text *ngIf=\"!MBL\" animated style=\"width: 20px\">\n                      </ion-skeleton-text>\n                    </td>\n                    <td colspan=\"1\">\n                      <legend>Carriage by</legend>\n                      <ion-skeleton-text *ngIf=\"!carriage_by\" animated style=\"width: 20px\">\n                      </ion-skeleton-text>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td colspan=\"2\">\n                      <legend>Vessel</legend>\n                      <ion-skeleton-text *ngIf=\"!vessel\" animated style=\"width: 20px\">\n                      </ion-skeleton-text>\n                    </td>\n                    <td colspan=\"6\">\n                      <legend>Container</legend>\n                      <ion-skeleton-text *ngIf=\"!container\" animated style=\"width: 20px\">\n                      </ion-skeleton-text>\n                    </td>\n\n                  </tr>\n                  <tr>\n                    <td colspan=\"2\">\n                      <legend>Date of order</legend>\n                      <ion-skeleton-text *ngIf=\"!date_of_order\" animated style=\"width: 20px\">\n                      </ion-skeleton-text>\n                    </td>\n                    <td colspan=\"4\">\n                      <legend>Your Reference</legend>\n                      <ion-skeleton-text *ngIf=\"!your_reference\" animated style=\"width: 20px\">\n                      </ion-skeleton-text>\n                    </td>\n                    <td colspan=\"2\">\n                      <legend>Terms of delivery</legend>\n                      <ion-skeleton-text *ngIf=\"!terms_of_delivery\" animated style=\"width: 20px\">\n                      </ion-skeleton-text>\n                    </td>\n\n                  </tr>\n\n                </table>\n\n                <br>\n\n                <table class=\"table-main\">\n                  <tr>\n                    <td colspan=\"2\">\n                      <legend>Marks/ No.</legend>\n                    </td>\n                    <td colspan=\"1\">\n                      <legend>Pieces</legend>\n                    </td>\n                    <td colspan=\"1\">\n                      <legend>Packaging</legend>\n                    </td>\n                    <td colspan=\"2\">\n                      <legend>Description of goods</legend>\n                    </td>\n                    <td colspan=\"1\">\n                      <legend>Weights</legend>\n                    </td>\n                    <td colspan=\"1\">\n                      <legend>cbm</legend>\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td colspan=\"2\">\n                      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                    </td>\n                    <td colspan=\"1\">\n                      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                    </td>\n                    <td colspan=\"1\">\n                      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                    </td>\n                    <td colspan=\"2\">\n                      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                    </td>\n                    <td colspan=\"1\">\n                      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                    </td>\n                    <td colspan=\"1\">\n                      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                    </td>\n                  </tr>\n                </table>\n\n              </div>\n              <!--End Table-->\n\n            </div>\n\n            <div id=\"invoice-bot\">\n\n              <div id=\"table\">\n                <table class=\"table-main\" style=\"filter:blur(4px);\">\n                  <thead>\n                    <tr class=\"tabletitle\">\n                      <th>Type</th>\n                      <th>Description</th>\n                      <th>Quantity</th>\n                      <th>Unit Price</th>\n                      <th>Taxable Amount</th>\n                      <th>Tax Code</th>\n                      <th>%</th>\n                      <th>Tax Amount</th>\n                      <th>AWT</th>\n                      <th>Total</th>\n                    </tr>\n                  </thead>\n                  <tr class=\"list-item\">\n                    <td data-label=\"Type\" class=\"tableitem\">ITEM</td>\n                    <td data-label=\"Description\" class=\"tableitem\">Servizio EDI + Traffico mese di novembre 2017\n                    </td>\n                    <td data-label=\"Quantity\" class=\"tableitem\">46.6</td>\n                    <td data-label=\"Unit Price\" class=\"tableitem\">1</td>\n                    <td data-label=\"Taxable Amount\" class=\"tableitem\">46.6</td>\n                    <td data-label=\"Tax Code\" class=\"tableitem\">DP20</td>\n                    <td data-label=\"%\" class=\"tableitem\">20</td>\n                    <td data-label=\"Tax Amount\" class=\"tableitem\">9.32</td>\n                    <td data-label=\"AWT\" class=\"tableitem\">None</td>\n                    <td data-label=\"Total\" class=\"tableitem\">55.92</td>\n                  </tr>\n                  <tr class=\"list-item\">\n                    <td data-label=\"Type\" class=\"tableitem\">ITEM</td>\n                    <td data-label=\"Description\" class=\"tableitem\">Traffico mese di novembre 2017 FRESSNAPF\n                      TIERNAHRUNGS\n                      GMBH\n                      riadd. Almo DE</td>\n                    <td data-label=\"Quantity\" class=\"tableitem\">4.4</td>\n                    <td data-label=\"Unit Price\" class=\"tableitem\">1</td>\n                    <td data-label=\"Taxable Amount\" class=\"tableitem\">46.6</td>\n                    <td data-label=\"Tax Code\" class=\"tableitem\">DP20</td>\n                    <td data-label=\"%\" class=\"tableitem\">20</td>\n                    <td data-label=\"Tax Amount\" class=\"tableitem\">9.32</td>\n                    <td data-label=\"AWT\" class=\"tableitem\">None</td>\n                    <td data-label=\"Total\" class=\"tableitem\">55.92</td>\n                  </tr>\n                  <tr class=\"list-item total-row\">\n                    <th colspan=\"9\" class=\"tableitem\">Grand Total</th>\n                    <td data-label=\"Grand Total\" class=\"tableitem\">111.84</td>\n                  </tr>\n                </table>\n              </div>\n\n              <!--End Table-->\n              <div class=\"cta-group\">\n                <!-- <a href=\"javascript:void(0);\" class=\"btn-primary\">Approve</a>\n              <a href=\"javascript:void(0);\" class=\"btn-default\">Reject</a> -->\n                <!-- <ion-chip style=\"background: white; color: black;line-height: inherit;height: auto;\"> -->\n                <pre *ngIf=\"termsandconditions\"> {{termsandconditions}}\n                      </pre>\n\n                <ion-skeleton-text *ngIf=\"!termsandconditions\" animated\n                  style=\"width: 40%; height: 80px; border-radius: 3px\">\n                </ion-skeleton-text>\n                <!-- </ion-chip> -->\n\n\n                <!-- <ion-chip style=\"background: white; color: black;line-height: inherit;height: auto;\"> -->\n                <pre *ngIf=\"customernotes\">\n                  {{customernotes}}\n              </pre>\n\n                <ion-skeleton-text *ngIf=\"!customernotes\" animated style=\"width: 40%; height: 50px; border-radius: 3px\">\n                </ion-skeleton-text>\n                <!-- </ion-chip> -->\n              </div>\n\n            </div>\n            <!--End InvoiceBot-->\n            <footer>\n              <div id=\"legalcopy\" class=\"clearfix\">\n                <p class=\"col-right\">Our mailing address is:\n                  <span class=\"email\"><a href=\"mailto:supplier.portal@almonature.com\">xxx@xxx.com</a></span>\n                </p>\n              </div>\n            </footer>\n          </div>\n          <!--End Invoice-->\n        </div><!-- End Invoice Holder-->\n      </ion-card>\n\n\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n\n\n</ion-content>"

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

module.exports = "pre {\n  white-space: pre-wrap;\n  font-size: 0.75em;\n  color: black;\n  line-height: 1.2em;\n  width: 45%;\n}\n\n.testbox {\n  justify-content: center;\n  align-items: center;\n  height: inherit;\n  padding: 0px;\n}\n\nform {\n  width: 100%;\n  padding: 20px;\n  box-shadow: none;\n}\n\ninput {\n  width: calc(100% - 10px);\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  border: 1px solid #095484;\n  background: #e6eef7;\n}\n\n.title-block select,\n.title-block input {\n  margin-bottom: 10px;\n}\n\nselect {\n  padding: 7px 0;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n\nselect,\ntable {\n  width: 100%;\n}\n\noption {\n  background: #fff;\n}\n\n.day-visited,\n.time-visited {\n  position: relative;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=time]::-webkit-inner-spin-button {\n  margin: 2px 22px 0 0;\n}\n\n.day-visited i,\n.time-visited i,\ninput[type=date]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  top: 8px;\n  font-size: 20px;\n}\n\n.day-visited i,\n.time-visited i {\n  right: 5px;\n  z-index: 1;\n  color: #a9a9a9;\n}\n\n[type=date]::-webkit-calendar-picker-indicator {\n  right: 0;\n  z-index: 2;\n  opacity: 0;\n}\n\n.question-answer label {\n  display: block;\n  padding: 0 20px 10px 0;\n}\n\n.question-answer input {\n  width: auto;\n  margin-top: -2px;\n}\n\nth,\ntd {\n  width: 18%;\n  padding: 15px 0;\n  border-bottom: 1px solid #ccc;\n  color: black;\n  text-align: center;\n  vertical-align: unset;\n  line-height: 18px;\n  font-weight: 400;\n  word-break: break-all;\n}\n\n.first-col {\n  width: 25%;\n  text-align: left;\n}\n\ntextarea {\n  width: calc(100% - 6px);\n}\n\n.btn-block {\n  margin-top: 20px;\n  text-align: center;\n}\n\nbutton {\n  width: 150px;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #095484;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0666a3;\n}\n\n@media (min-width: 568px) {\n  .title-radio {\n    display: inline-flex;\n    padding-top: 15px;\n    justify-content: end;\n  }\n\n  .title-block {\n    display: inline;\n    margin-left: 15px;\n    margin-right: 15px;\n    justify-content: space-between;\n  }\n\n  .title-block select {\n    width: 92%;\n    margin-bottom: 0;\n  }\n\n  .title-block input {\n    width: 92%;\n    margin-bottom: 0;\n  }\n\n  th,\ntd {\n    word-break: keep-all;\n  }\n}\n\n.service {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n  justify-content: space-between;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\nlabel {\n  line-height: 1 !important;\n}\n\n/*\n CSS for the main interaction / tabset\n*/\n\n.tabset {\n  position: relative;\n}\n\n.tabset > input[type=radio] {\n  position: absolute;\n  left: -200vw;\n}\n\n.tabset .tab-panel {\n  display: none;\n}\n\n.tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,\n.tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),\n.tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),\n.tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),\n.tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),\n.tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {\n  display: block;\n}\n\n.tabset > label {\n  position: relative;\n  display: inline-block;\n  padding: 15px 15px 25px;\n  border: 1px solid transparent;\n  border-bottom: 0;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.tabset > label::after {\n  content: \"\";\n  position: absolute;\n  left: 15px;\n  bottom: 10px;\n  width: 22px;\n  height: 4px;\n  background: #8d8d8d;\n}\n\n.tabset > label:hover,\n.tabset > input:focus + label {\n  color: var(--ion-color-theme);\n}\n\n.tabset > label:hover::after,\n.tabset > input:focus + label::after,\n.tabset > input:checked + label::after {\n  background: var(--ion-color-theme);\n}\n\n.tabset > input:checked + label {\n  border-color: none;\n  border-bottom: none;\n  margin-bottom: -1px;\n}\n\n.tab-panel {\n  padding: 30px 0;\n  border-top: 1px solid #ccc;\n}\n\n/*\n Demo purposes only\n*/\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\n.header {\n  height: 50px;\n}\n\n.input[_ngcontent-rbp-c16] {\n  background: var(--ion-color-theme);\n  border: none;\n}\n\n::-moz-selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n::selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n::moz-selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.col-left {\n  float: left;\n}\n\n.col-right {\n  float: right;\n}\n\nh1 {\n  font-size: 1.5em;\n  color: #444;\n}\n\nh2 {\n  font-size: 0.9em;\n}\n\nh3 {\n  font-size: 1.2em;\n  font-weight: 300;\n  line-height: 2em;\n}\n\np {\n  color: #666;\n  line-height: 1.2em;\n}\n\na {\n  text-decoration: none;\n  color: #00a63f;\n}\n\n#invoiceholder {\n  width: 100%;\n  height: 100%;\n}\n\n#invoice {\n  position: relative;\n  margin: 0 auto;\n  background: #FFF;\n}\n\n[id*=invoice-] {\n  /* Targets all id with 'col-' */\n  /*  border-bottom: 1px solid #EEE;*/\n  padding: 20px;\n}\n\n#invoice-top {\n  border-bottom: 2px solid #00a63f;\n}\n\n#invoice-mid {\n  min-height: 110px;\n}\n\n#invoice-bot {\n  min-height: 240px;\n}\n\n.logo {\n  display: inline-block;\n  vertical-align: middle;\n  width: 110px;\n  overflow: hidden;\n}\n\n.info {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n\n.logo img,\n.clientlogo img {\n  width: 100%;\n}\n\n.clientlogo {\n  display: inline-block;\n  vertical-align: middle;\n  width: 50px;\n}\n\n.clientinfo {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n\n.title {\n  float: right;\n}\n\n.title p {\n  text-align: right;\n}\n\n#message {\n  margin-bottom: 30px;\n  display: block;\n}\n\nh2 {\n  margin-bottom: 5px;\n  color: lightgray;\n}\n\n.col-right td {\n  color: lightgray;\n  padding: 5px 8px;\n  border: 0;\n  font-size: 0.75em;\n}\n\n.col-right td label {\n  margin-left: 5px;\n  font-weight: 600;\n  color: lightgray;\n}\n\n.cta-group a {\n  display: inline-block;\n  padding: 7px;\n  border-radius: 4px;\n  background: #c4390a;\n  margin-right: 10px;\n  min-width: 100px;\n  text-align: center;\n  color: #fff;\n  font-size: 0.75em;\n}\n\n.cta-group .btn-primary {\n  background: #00a63f;\n}\n\n.cta-group.mobile-btn-group {\n  display: none;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\ntd {\n  padding: 10px;\n  border-bottom: 1px solid #cccaca;\n  font-size: 0.7em;\n  text-align: left;\n}\n\n.tabletitle th {\n  border-bottom: 2px solid #ddd;\n  text-align: right;\n}\n\n.tabletitle th:nth-child(2) {\n  text-align: left;\n}\n\nth {\n  font-size: 0.7em;\n  text-align: left;\n  padding: 5px 10px;\n}\n\n.item {\n  width: 50%;\n}\n\n.list-item td {\n  text-align: right;\n}\n\n.list-item td:nth-child(2) {\n  text-align: left;\n}\n\n.total-row th,\n.total-row td {\n  text-align: right;\n  font-weight: 700;\n  font-size: 0.75em;\n  border: 0 none;\n}\n\n.table-main td, .table-main th {\n  border: 1px solid darkgray;\n  padding: 8px;\n}\n\nfooter {\n  border-top: 1px solid #eeeeee;\n  padding: 15px 20px;\n}\n\n.effect2 {\n  position: relative;\n}\n\n.effect2:before, .effect2:after {\n  z-index: -1;\n  position: absolute;\n  content: \"\";\n  bottom: 15px;\n  left: 10px;\n  width: 50%;\n  top: 80%;\n  max-width: 300px;\n  background: #777;\n  box-shadow: 0 15px 10px #777;\n  transform: rotate(-3deg);\n}\n\n.effect2:after {\n  transform: rotate(3deg);\n  right: 10px;\n  left: auto;\n}\n\n@media screen and (max-width: 767px) {\n  h1 {\n    font-size: 0.9em;\n  }\n\n  #invoice {\n    width: 100%;\n  }\n\n  #message {\n    margin-bottom: 20px;\n  }\n\n  [id*=invoice-] {\n    padding: 20px 10px;\n  }\n\n  .logo {\n    width: 140px;\n  }\n\n  .title {\n    float: none;\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 40px;\n  }\n\n  .title p {\n    text-align: left;\n  }\n\n  .col-left,\n.col-right {\n    width: 100%;\n  }\n\n  .table {\n    margin-top: 20px;\n  }\n\n  #table {\n    white-space: nowrap;\n    overflow: auto;\n  }\n\n  td {\n    white-space: normal;\n  }\n\n  .cta-group {\n    text-align: center;\n  }\n\n  .cta-group.mobile-btn-group {\n    display: block;\n    margin-bottom: 20px;\n  }\n\n  /*==================== Table ====================*/\n  .table-main {\n    border: 0 none;\n  }\n\n  .table-main thead {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n  }\n\n  .table-main tr {\n    border-bottom: 2px solid #eee;\n    display: block;\n    margin-bottom: 20px;\n  }\n\n  .table-main td {\n    font-weight: 700;\n    display: block;\n    padding-left: 40%;\n    max-width: none;\n    position: relative;\n    border: 1px solid #cccaca;\n    text-align: left;\n  }\n\n  .table-main td:before {\n    /*\n    * aria-label has no advantage, it won't be read inside a table\n    content: attr(aria-label);\n    */\n    content: attr(data-label);\n    position: absolute;\n    left: 10px;\n    font-weight: normal;\n    text-transform: uppercase;\n  }\n\n  .total-row th {\n    display: none;\n  }\n\n  .total-row td {\n    text-align: left;\n  }\n\n  footer {\n    text-align: center;\n  }\n}\n\n.list-item {\n  position: relative;\n  /* z-index: 999; */\n}\n\nlegend {\n  font-size: smaller;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9jb21wYW55X3Byb2ZpbGUvY29tcGFueS1wcm9maWxlL2NvbXBhbnktcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2NvbXBhbnlfcHJvZmlsZS9jb21wYW55LXByb2ZpbGUvY29tcGFueS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUNDLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDRCxVQUFBO0FDYkQ7O0FEd0JBO0VBRUMsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDdEJEOztBRHlCQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBR0QsZ0JBQUE7QUN4QkE7O0FEMEJBO0VBQ0Msd0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDdkJEOztBRDBCQTs7O0VBR0MsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUN2QkQ7O0FEMEJBOztFQUVDLG1CQUFBO0FDdkJEOztBRDBCQTtFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUN2QkQ7O0FEMEJBOztFQUVDLFdBQUE7QUN2QkQ7O0FEMEJBO0VBQ0MsZ0JBQUE7QUN2QkQ7O0FEMEJBOztFQUVDLGtCQUFBO0FDdkJEOztBRDBCQTtFQUNDLGFBQUE7QUN2QkQ7O0FEMEJBO0VBQ0Msb0JBQUE7QUN2QkQ7O0FEMEJBOzs7RUFHQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDdkJEOztBRDBCQTs7RUFFQyxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUN2QkQ7O0FEMEJBO0VBQ0MsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDdkJEOztBRDBCQTtFQUNDLGNBQUE7RUFDQSxzQkFB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QTtJQUNBLHlCQUFBO0VDK0JOOztFRDdCRTtJQUNJLGFBQUE7RUNnQ047O0VEOUJFO0lBQ0ksZ0JBQUE7RUNpQ047O0VEL0JFO0lBQVEsa0JBQUE7RUNtQ1Y7QUFDRjs7QURqQ0E7RUFDSyxrQkFBQTtFQUNELGtCQUFBO0FDbUNKOztBRGhDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNtQ0YiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9jb21wYW55X3Byb2ZpbGUvY29tcGFueS1wcm9maWxlL2NvbXBhbnktcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gaDEsXG4vLyBoNCB7XG4vLyBcdG1hcmdpbjogMTVweCAwIDRweDtcbi8vIFx0Zm9udC13ZWlnaHQ6IDQwMDtcbi8vIH1cblxuLy8gaDQge1xuLy8gXHRmb250LXNpemU6IDEzcHg7XG4vLyBcdG1hcmdpbjogMjBweCAwIDRweDtcbi8vIFx0Zm9udC13ZWlnaHQ6IDQwMDtcbi8vIH1cblxucHJlIHtcblx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xuXHRmb250LXNpemU6IDAuNzVlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBsaW5lLWhlaWdodDogMS4yZW07XG5cdHdpZHRoOiA0NSU7XG59XG4vLyBzcGFuIHtcbi8vIC8vXHRjb2xvcjogcmVkO1xuLy8gfVxuXG4vLyAuc21hbGwge1xuLy8gXHRmb250LXNpemU6IDEwcHg7XG4vLyBcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuLy8gfVxuXG4udGVzdGJveCB7XG5cdC8vZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGhlaWdodDogaW5oZXJpdDtcblx0cGFkZGluZzogMHB4O1xufVxuXG5mb3JtIHtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDIwcHg7XG4vL1x0YmFja2dyb3VuZDogI2ZmZjtcbi8vXHRib3gtc2hhZG93OiAwIDJweCA1cHggdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbmJveC1zaGFkb3c6IG5vbmU7XG59XG5pbnB1dCB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcblx0cGFkZGluZzogNXB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6aG92ZXIsXG5zZWxlY3Q6aG92ZXIge1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDk1NDg0O1xuXHRiYWNrZ3JvdW5kOiAjZTZlZWY3O1xufVxuXG4udGl0bGUtYmxvY2sgc2VsZWN0LFxuLnRpdGxlLWJsb2NrIGlucHV0IHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuc2VsZWN0IHtcblx0cGFkZGluZzogN3B4IDA7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbnNlbGVjdCxcbnRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbm9wdGlvbiB7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kYXktdmlzaXRlZCxcbi50aW1lLXZpc2l0ZWQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInRpbWVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuXHRtYXJnaW46IDJweCAyMnB4IDAgMDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGksXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDhweDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSB7XG5cdHJpZ2h0OiA1cHg7XG5cdHotaW5kZXg6IDE7XG5cdGNvbG9yOiAjYTlhOWE5O1xufVxuXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG5cdHJpZ2h0OiAwO1xuXHR6LWluZGV4OiAyO1xuXHRvcGFjaXR5OiAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGxhYmVsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAgMjBweCAxMHB4IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgaW5wdXQge1xuXHR3aWR0aDogYXV0bztcblx0bWFyZ2luLXRvcDogLTJweDtcbn1cblxudGgsXG50ZCB7XG5cdHdpZHRoOiAxOCU7XG5cdHBhZGRpbmc6IDE1cHggMDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIGNvbG9yOiBibGFjaztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR2ZXJ0aWNhbC1hbGlnbjogdW5zZXQ7XG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5maXJzdC1jb2wge1xuXHR3aWR0aDogMjUlO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ZXh0YXJlYSB7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xufVxuXG4uYnRuLWJsb2NrIHtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuXHR3aWR0aDogMTUwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlcjogbm9uZTtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwOTU0ODQ7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICNmZmY7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA2NjZhMztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSB7XG5cdC50aXRsZS1yYWRpbyB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0cGFkZGluZy10b3A6IDE1cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBlbmQ7XG5cdH1cblx0LnRpdGxlLWJsb2NrIHtcblx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXHQudGl0bGUtYmxvY2sgc2VsZWN0IHtcblx0XHR3aWR0aDogOTIlO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0LnRpdGxlLWJsb2NrIGlucHV0IHtcblx0XHR3aWR0aDogOTIlO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0dGgsXG5cdHRkIHtcblx0XHR3b3JkLWJyZWFrOiBrZWVwLWFsbDtcblx0fVxufVxuXG4uc2VydmljZSB7XG5cdHBvc2l0aW9uOiBzdGF0aWM7XG5cdG1hcmdpbi10b3A6IDA7XG5cdG1hcmdpbi1yaWdodDogLjMxMjVyZW07XG5cdG1hcmdpbi1sZWZ0OiAwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG5cdG1hcmdpbi1yaWdodDogLjc1cmVtO1xufVxuXG5sYWJlbCB7XG5cdGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG59XG5cbi8qXG4gQ1NTIGZvciB0aGUgbWFpbiBpbnRlcmFjdGlvbiAvIHRhYnNldFxuKi9cblxuLnRhYnNldCB7XG4gLy8gcG9zaXRpb246IGZpeGVkO1xuIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50YWJzZXQgPiBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yMDB2dztcbn1cblxuLnRhYnNldCAudGFiLXBhbmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLy8gLnRhYi1wYW5lbHMge1xuLy8gXHR3aWR0aDogNTAlO1xuLy8gfVxuLnRhYnNldCA+IGlucHV0OmZpcnN0LWNoaWxkOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6Zmlyc3QtY2hpbGQsXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDMpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDIpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCg1KTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCgzKSxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoNyk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNCksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDkpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDUpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCgxMSk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNikge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRhYnNldCA+IGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFic2V0ID4gbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNXB4O1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogIzhkOGQ4ZDtcbn1cblxuLnRhYnNldCA+IGxhYmVsOmhvdmVyLFxuLnRhYnNldCA+IGlucHV0OmZvY3VzICsgbGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbn1cblxuLnRhYnNldCA+IGxhYmVsOmhvdmVyOjphZnRlcixcbi50YWJzZXQgPiBpbnB1dDpmb2N1cyArIGxhYmVsOjphZnRlcixcbi50YWJzZXQgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbn1cblxuLnRhYnNldCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiBib3JkZXItYm90dG9tOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuXG4udGFiLXBhbmVsIHtcbiAgcGFkZGluZzogMzBweCAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbn1cblxuLypcbiBEZW1vIHB1cnBvc2VzIG9ubHlcbiovXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG4udGFic2V0IHtcbi8vIG1heC13aWR0aDogNjVlbTtcbn1cblxuLy8gZW5kIG9mIHRhYnNcblxuXG4uaGVhZGVyIHtcblx0aGVpZ2h0OiA1MHB4O1xufVxuXG4uaW5wdXRbX25nY29udGVudC1yYnAtYzE2XSB7XG5cdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG5cdGJvcmRlcjogbm9uZTtcbn1cblxuLy8gYWxlcnQgXG5cbi8vIGludm9pY2UgdGVtcGxhdGVcblxuXG46OnNlbGVjdGlvbiB7YmFja2dyb3VuZDogI2YzMTU0NDsgY29sb3I6ICNGRkY7fVxuOjptb3otc2VsZWN0aW9uIHtiYWNrZ3JvdW5kOiAjZjMxNTQ0OyBjb2xvcjogI0ZGRjt9XG4uY2xlYXJmaXg6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuLmNvbC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5jb2wtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbmgxe1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzQ0NDtcbn1cbmgye2ZvbnQtc2l6ZTogLjllbTt9XG5oM3tcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cbnB7XG4gLy8gZm9udC1zaXplOiAuNzVlbTtcbiAgY29sb3I6ICM2NjY7XG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbn1cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwYTYzZjtcbn1cblxuI2ludm9pY2Vob2xkZXJ7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAvLyBwYWRkaW5nOiA1MHB4IDA7XG59XG4jaW52b2ljZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAvLyB3aWR0aDogNzAwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG59XG5cbltpZCo9J2ludm9pY2UtJ117IC8qIFRhcmdldHMgYWxsIGlkIHdpdGggJ2NvbC0nICovXG4vKiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUU7Ki9cbiAgcGFkZGluZzogMjBweDtcbn1cblxuI2ludm9pY2UtdG9we2JvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDBhNjNmO31cbiNpbnZvaWNlLW1pZHttaW4taGVpZ2h0OiAxMTBweDt9XG4jaW52b2ljZS1ib3R7IG1pbi1oZWlnaHQ6IDI0MHB4O31cblxuLmxvZ297XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdHdpZHRoOiAxMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmluZm97XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubG9nbyBpbWcsXG4uY2xpZW50bG9nbyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmNsaWVudGxvZ297XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdHdpZHRoOiA1MHB4O1xufVxuLmNsaWVudGluZm8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4XG59XG4udGl0bGV7XG4gIGZsb2F0OiByaWdodDtcbn1cbi50aXRsZSBwe1xuXHR0ZXh0LWFsaWduOiByaWdodDtcbn1cbiNtZXNzYWdle21hcmdpbi1ib3R0b206IDMwcHg7IGRpc3BsYXk6IGJsb2NrO31cbmgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5jb2wtcmlnaHQgdGQge1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcbn1cbi5jb2wtcmlnaHQgdGQgbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufVxuLmN0YS1ncm91cCBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk2LCA1NywgMTApO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbn1cbi5jdGEtZ3JvdXAgLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAjMDBhNjNmO1xufVxuLmN0YS1ncm91cC5tb2JpbGUtYnRuLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxudGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxudGR7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2FjYTtcbiAgICBmb250LXNpemU6IDAuNzBlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGFibGV0aXRsZSB0aCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50YWJsZXRpdGxlIHRoOm50aC1jaGlsZCgyKSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnRoIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uaXRlbXt3aWR0aDogNTAlO31cbi5saXN0LWl0ZW0gdGQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmxpc3QtaXRlbSB0ZDpudGgtY2hpbGQoMikge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udG90YWwtcm93IHRoLFxuLnRvdGFsLXJvdyB0ZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IC43NWVtO1xuICAgIGJvcmRlcjogMCBub25lO1xufVxuLnRhYmxlLW1haW4gdGQsIC50YWJsZS1tYWluIHRoe1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcbiAgcGFkZGluZzogOHB4O1xufVxuZm9vdGVyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZWVlZTs7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuLmVmZmVjdDJcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmVmZmVjdDI6YmVmb3JlLCAuZWZmZWN0MjphZnRlclxue1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBib3R0b206IDE1cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIHRvcDogODAlO1xuICBtYXgtd2lkdGg6MzAwcHg7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxNXB4IDEwcHggIzc3NztcbiAgLW1vei1ib3gtc2hhZG93OiAwIDE1cHggMTBweCAjNzc3O1xuICBib3gtc2hhZG93OiAwIDE1cHggMTBweCAjNzc3O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xufVxuLmVmZmVjdDI6YWZ0ZXJcbntcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gIHJpZ2h0OiAxMHB4O1xuICBsZWZ0OiBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICB9XG4gICAgI2ludm9pY2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgI21lc3NhZ2Uge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBbaWQqPSdpbnZvaWNlLSddIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIH1cbiAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuICAgIC50aXRsZSBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLmNvbC1sZWZ0LFxuICAgIC5jb2wtcmlnaHQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnRhYmxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgI3RhYmxlIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICAgIHRkIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB9XG4gICAgLmN0YS1ncm91cCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmN0YS1ncm91cC5tb2JpbGUtYnRuLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgICAvKj09PT09PT09PT09PT09PT09PT09IFRhYmxlID09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAudGFibGUtbWFpbiB7XG4gICAgICAgIGJvcmRlcjogMCBub25lO1xuICAgIH0gIFxuICAgICAgLnRhYmxlLW1haW4gdGhlYWQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBtYXJnaW46IC0xcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgIH1cbiAgICAgIC50YWJsZS1tYWluIHRyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZWU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgICAgLnRhYmxlLW1haW4gdGQge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjYWNhO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgICAgLnRhYmxlLW1haW4gdGQ6YmVmb3JlIHtcbiAgICAgICAgLypcbiAgICAgICAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcbiAgICAgICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcbiAgICAgICAgKi9cbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgIC50b3RhbC1yb3cgdGgge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAudG90YWwtcm93IHRkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgZm9vdGVyIHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxufVxuXG4ubGlzdC1pdGVtIHtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAvKiB6LWluZGV4OiA5OTk7ICovXG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iLCJwcmUge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLnRlc3Rib3gge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dDpob3ZlcixcbnRleHRhcmVhOmhvdmVyLFxuc2VsZWN0OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5NTQ4NDtcbiAgYmFja2dyb3VuZDogI2U2ZWVmNztcbn1cblxuLnRpdGxlLWJsb2NrIHNlbGVjdCxcbi50aXRsZS1ibG9jayBpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5zZWxlY3QsXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5vcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGF5LXZpc2l0ZWQsXG4udGltZS12aXNpdGVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT10aW1lXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIG1hcmdpbjogMnB4IDIycHggMCAwO1xufVxuXG4uZGF5LXZpc2l0ZWQgaSxcbi50aW1lLXZpc2l0ZWQgaSxcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRheS12aXNpdGVkIGksXG4udGltZS12aXNpdGVkIGkge1xuICByaWdodDogNXB4O1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2E5YTlhOTtcbn1cblxuW3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucXVlc3Rpb24tYW5zd2VyIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMjBweCAxMHB4IDA7XG59XG5cbi5xdWVzdGlvbi1hbnN3ZXIgaW5wdXQge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxudGgsXG50ZCB7XG4gIHdpZHRoOiAxOCU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdW5zZXQ7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5maXJzdC1jb2wge1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xufVxuXG4uYnRuLWJsb2NrIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTU0ODQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NjZhMztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2OHB4KSB7XG4gIC50aXRsZS1yYWRpbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIH1cblxuICAudGl0bGUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnRpdGxlLWJsb2NrIHNlbGVjdCB7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLnRpdGxlLWJsb2NrIGlucHV0IHtcbiAgICB3aWR0aDogOTIlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICB0aCxcbnRkIHtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgfVxufVxuLnNlcnZpY2Uge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuMzEyNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xufVxuXG5sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG59XG5cbi8qXG4gQ1NTIGZvciB0aGUgbWFpbiBpbnRlcmFjdGlvbiAvIHRhYnNldFxuKi9cbi50YWJzZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YWJzZXQgPiBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTIwMHZ3O1xufVxuXG4udGFic2V0IC50YWItcGFuZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFic2V0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpmaXJzdC1jaGlsZCxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoMyk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoMiksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDUpOmNoZWNrZWQgfiAudGFiLXBhbmVscyA+IC50YWItcGFuZWw6bnRoLWNoaWxkKDMpLFxuLnRhYnNldCA+IGlucHV0Om50aC1jaGlsZCg3KTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg0KSxcbi50YWJzZXQgPiBpbnB1dDpudGgtY2hpbGQoOSk6Y2hlY2tlZCB+IC50YWItcGFuZWxzID4gLnRhYi1wYW5lbDpudGgtY2hpbGQoNSksXG4udGFic2V0ID4gaW5wdXQ6bnRoLWNoaWxkKDExKTpjaGVja2VkIH4gLnRhYi1wYW5lbHMgPiAudGFiLXBhbmVsOm50aC1jaGlsZCg2KSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGFic2V0ID4gbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTVweCAxNXB4IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50YWJzZXQgPiBsYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1cHg7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjOGQ4ZDhkO1xufVxuXG4udGFic2V0ID4gbGFiZWw6aG92ZXIsXG4udGFic2V0ID4gaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufVxuXG4udGFic2V0ID4gbGFiZWw6aG92ZXI6OmFmdGVyLFxuLnRhYnNldCA+IGlucHV0OmZvY3VzICsgbGFiZWw6OmFmdGVyLFxuLnRhYnNldCA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufVxuXG4udGFic2V0ID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuXG4udGFiLXBhbmVsIHtcbiAgcGFkZGluZzogMzBweCAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbn1cblxuLypcbiBEZW1vIHB1cnBvc2VzIG9ubHlcbiovXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmlucHV0W19uZ2NvbnRlbnQtcmJwLWMxNl0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2YzMTU0NDtcbiAgY29sb3I6ICNGRkY7XG59XG5cbjo6bW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmMzE1NDQ7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uY2xlYXJmaXg6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uY29sLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmNvbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzQ0NDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG59XG5cbnAge1xuICBjb2xvcjogIzY2NjtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwYTYzZjtcbn1cblxuI2ludm9pY2Vob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jaW52b2ljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICNGRkY7XG59XG5cbltpZCo9aW52b2ljZS1dIHtcbiAgLyogVGFyZ2V0cyBhbGwgaWQgd2l0aCAnY29sLScgKi9cbiAgLyogIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFOyovXG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNpbnZvaWNlLXRvcCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDBhNjNmO1xufVxuXG4jaW52b2ljZS1taWQge1xuICBtaW4taGVpZ2h0OiAxMTBweDtcbn1cblxuI2ludm9pY2UtYm90IHtcbiAgbWluLWhlaWdodDogMjQwcHg7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbmZvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmxvZ28gaW1nLFxuLmNsaWVudGxvZ28gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbGllbnRsb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNTBweDtcbn1cblxuLmNsaWVudGluZm8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udGl0bGUge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50aXRsZSBwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiNtZXNzYWdlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4uY29sLXJpZ2h0IHRkIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDAuNzVlbTtcbn1cblxuLmNvbC1yaWdodCB0ZCBsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5jdGEtZ3JvdXAgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNjNDM5MGE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG5cbi5jdGEtZ3JvdXAgLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzAwYTYzZjtcbn1cblxuLmN0YS1ncm91cC5tb2JpbGUtYnRuLWdyb3VwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2FjYTtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRhYmxldGl0bGUgdGgge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50YWJsZXRpdGxlIHRoOm50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRoIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi5pdGVtIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmxpc3QtaXRlbSB0ZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubGlzdC1pdGVtIHRkOm50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b3RhbC1yb3cgdGgsXG4udG90YWwtcm93IHRkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBib3JkZXI6IDAgbm9uZTtcbn1cblxuLnRhYmxlLW1haW4gdGQsIC50YWJsZS1tYWluIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWVlZWU7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbn1cblxuLmVmZmVjdDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5lZmZlY3QyOmJlZm9yZSwgLmVmZmVjdDI6YWZ0ZXIge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBib3R0b206IDE1cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIHRvcDogODAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNzc3O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTVweCAxMHB4ICM3Nzc7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxNXB4IDEwcHggIzc3NztcbiAgYm94LXNoYWRvdzogMCAxNXB4IDEwcHggIzc3NztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcbn1cblxuLmVmZmVjdDI6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGxlZnQ6IGF1dG87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG5cbiAgI2ludm9pY2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI21lc3NhZ2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICBbaWQqPWludm9pY2UtXSB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIHdpZHRoOiAxNDBweDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cblxuICAudGl0bGUgcCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5jb2wtbGVmdCxcbi5jb2wtcmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnRhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgI3RhYmxlIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgdGQge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIH1cblxuICAuY3RhLWdyb3VwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY3RhLWdyb3VwLm1vYmlsZS1idG4tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAvKj09PT09PT09PT09PT09PT09PT09IFRhYmxlID09PT09PT09PT09PT09PT09PT09Ki9cbiAgLnRhYmxlLW1haW4ge1xuICAgIGJvcmRlcjogMCBub25lO1xuICB9XG5cbiAgLnRhYmxlLW1haW4gdGhlYWQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG4gIH1cblxuICAudGFibGUtbWFpbiB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZWU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC50YWJsZS1tYWluIHRkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogNDAlO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2FjYTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLnRhYmxlLW1haW4gdGQ6YmVmb3JlIHtcbiAgICAvKlxuICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXG4gICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcbiAgICAqL1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLnRvdGFsLXJvdyB0aCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC50b3RhbC1yb3cgdGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBmb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmxpc3QtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogei1pbmRleDogOTk5OyAqL1xufVxuXG5sZWdlbmQge1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"

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
        this.createLogisticCompanyProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            shipper: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            consignee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            port_of_loading: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            port_of_discharge: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            HBL: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            MBL: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            carriage_by: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            vessel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            container: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            date_of_order: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            your_reference: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            terms_of_delivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            marks_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            pieces: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            packaging: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            description_of_goods: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            cbm: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
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
        this.getLogisticCompanyProfile();
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
                            this.firebaseService.createCompanyProfile(this.uid, this.email, this.createCompanyProfileForm.value).then((res) => {
                                this.getCompanyProfile();
                            });
                            // this.dismissModal();
                            const toast = yield this.toastController.create({
                                message: 'Your settings have been saved.',
                                mode: 'ios',
                                position: 'top',
                                color: 'theme',
                                duration: 2500
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
    // CRUD
    createLogisticCompanyProfile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.uid, this.email, this.createLogisticCompanyProfileForm.value);
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
                            //            this.createCompanyProfileForm.value["logo_base64Image"] = this.base64Image;
                            this.firebaseService.createLogisticCompanyProfile(this.uid, this.email, this.createLogisticCompanyProfileForm.value).then((res) => {
                                this.getLogisticCompanyProfile();
                            });
                            // this.dismissModal();
                            const toast = yield this.toastController.create({
                                message: 'Your settings have been saved.',
                                mode: 'ios',
                                position: 'top',
                                color: 'theme',
                                duration: 2500
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
                            this.firebaseService.createTermsandConditions(this.uid, this.email, this.createTermsandConditionsForm.value).then((res) => {
                                this.getTermsandConditions();
                            });
                            // this.dismissModal();
                            const toast = yield this.toastController.create({
                                message: 'Your settings have been saved.',
                                mode: 'ios',
                                position: 'top',
                                color: 'theme',
                                duration: 2500
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
                            this.firebaseService.createCustomerNotes(this.uid, this.email, this.createCustomerNotesForm.value).then(res => {
                                this.getCustomerNotes();
                            });
                            // this.dismissModal();
                            const toast = yield this.toastController.create({
                                message: 'Your settings have been saved.',
                                mode: 'ios',
                                position: 'top',
                                color: 'theme',
                                duration: 2500
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
    getLogisticCompanyProfile() {
        console.log(this.email, this.uid);
        this.firebaseService.readLogisticCompanyProfile(this.uid).subscribe(res => {
            console.log(res['userData']);
            this.companylogisticprofile = res['userData'];
            this.shipper = res['userData']['shipper'];
            this.consignee = res['userData']['consignee'];
            this.port_of_loading = res['userData']['port_of_loading'];
            this.port_of_discharge = res['userData']['port_of_discharge'];
            this.HBL = res['userData']['HBL'];
            this.MBL = res['userData']['MBL'];
            this.carriage_by = res['userData']['carriage_by'];
            this.vessel = res['userData']['vessel'];
            this.container = res['userData']['container'];
            this.date_of_order = res['userData']['date_of_order'];
            this.your_reference = res['userData']['your_reference'];
            this.terms_of_delivery = res['userData']['terms_of_delivery'];
            this.marks_no = res['userData']['marks_no'];
            this.pieces = res['userData']['pieces'];
            this.packaging = res['userData']['packaging'];
            this.description_of_goods = res['userData']['description_of_goods'];
            this.weight = res['userData']['weight'];
            this.cbm = res['userData']['cbm'];
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