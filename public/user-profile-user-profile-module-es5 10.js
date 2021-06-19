(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user/profile/user-profile.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/profile/user-profile.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content class=\"user-profile-content\">\n\n    <ion-item-divider sticky>\n        <ion-title>Dashboard</ion-title>\n    </ion-item-divider>\n\n    <!-- <ion-progress-bar color=\"theme\" type=\"indeterminate\"></ion-progress-bar> -->\n    <app-rating-input *ngIf=\"!invoices\"></app-rating-input>\n    <main>\n        <div class=\"flex-grid\">\n            <div>\n                <h2>Total Sales</h2>\n                <ion-card class=\"tag sale\">HKD 0.00</ion-card>\n            </div>\n\n            <div>\n                <h2>Total Receipts</h2>\n                <ion-card class=\"tag receipt\">HKD 0.00</ion-card>\n            </div>\n\n            <div>\n                <h2>Total Expenses</h2>\n                <ion-card class=\"tag expense\">HKD 0.00</ion-card>\n            </div>\n        </div>\n\n        <!-- <ion-slides style=\"background: #f9f9fb; border-radius: 0px;\" pager=\"false\" [options]=\"slideOpts\">\n            <ion-slide>\n                <ion-card style=\"box-shadow: none;\">\n                    <ion-card-header>\n                        Total Outstanding Receivables\n                    </ion-card-header>\n                    <ion-card-content>\n                        HKD 0.00\n                    </ion-card-content>\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card style=\"box-shadow: none;\">\n                    <ion-card-header>\n                        Total Outstanding Receivables\n                    </ion-card-header>\n                    <ion-card-content>\n                        HKD 0.00\n                    </ion-card-content>\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card style=\"box-shadow: none;\">\n                    <ion-card-header>\n                        Total Outstanding Receivables\n                    </ion-card-header>\n                    <ion-card-content>\n                        HKD 0.00\n                    </ion-card-content>\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card style=\"box-shadow: none;\">\n                    <ion-card-header>\n                        Total Outstanding Receivables\n                    </ion-card-header>\n                    <ion-card-content>\n                        HKD 0.00\n                    </ion-card-content>\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card style=\"box-shadow: none;\">\n                    <ion-card-header>\n                        Total Outstanding Receivables\n                    </ion-card-header>\n                    <ion-card-content>\n                        HKD 0.00\n                    </ion-card-content>\n                </ion-card>\n            </ion-slide>\n        </ion-slides> -->\n\n        <div class=\"flex-grid\">\n            <div>\n                <h2>Your Top Expense</h2>\n                <div id=\"pieChart\" style=\"margin: 0 auto;\"></div>\n            </div>\n\n            <div>\n                <h2>Your Incomes and Expense</h2>\n                <div id=\"barChart\" style=\"margin: 0 auto;\"></div>\n            </div>\n        </div>\n\n        <div class=\"\">\n            <div>\n                <h2>Headline</h2>\n                <ngx-datatable [rows]=\"invoices\" [ngClass]=\"tableStyle\" [rowHeight]=\"auto\" [headerHeight]=\"50\"\n                    [columnMode]=\"'force'\" [rowClass]=\"getRowClass.bind(this)\" [limit]=\"10\" [footerHeight]=\"50\">\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            DATE\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <!-- <ion-button fill=\"clear\" color=\"theme\" (click)=\"onDetailPage(row)\">\n                    {{row['Display Name']}}               \n                  </ion-button> -->\n                            <div>{{row['Invoice Date']}}</div>\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            INVOICE#\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <div class=\"button\" (click)=\"onDetailPage(row)\">\n                                {{row['Invoice Number']}}\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            ORDER NUMBER\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['Estimate Number']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            CUSTOMER NAME\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['Customer Name']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            STATUS\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['Invoice Status']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            DUE DATE\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <div class=\"invoiced\"></div>\n                            {{row['Due Date']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            AMOUNT\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            HKD {{row['Total']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            BALANCE DUE\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            HKD {{row['Balance']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n                </ngx-datatable>\n            </div>\n        </div>\n    </main>\n\n    <app-global-banner></app-global-banner>\n</ion-content>\n<app-global-footer></app-global-footer>"

/***/ }),

/***/ "./src/app/language/language.service.ts":
/*!**********************************************!*\
  !*** ./src/app/language/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LanguageService = /** @class */ (function () {
    function LanguageService() {
        this.languages = new Array();
        this.languages.push({ name: 'English', code: 'en' }, { name: 'Spanish', code: 'es' }, { name: 'French', code: 'fr' });
    }
    LanguageService.prototype.getLanguages = function () {
        return this.languages;
    };
    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/user/profile/styles/user-profile.ios.scss":
/*!***********************************************************!*\
  !*** ./src/app/user/profile/styles/user-profile.ios.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(.plt-mobile.ios) .user-details-section .user-image-wrapper {\n  max-width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5pb3Muc2NzcyIsInNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUuaW9zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxjQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5pb3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUuaW9zKSB7XG4gIC51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gICAgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUuaW9zKSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gIG1heC13aWR0aDogMzAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/profile/styles/user-profile.md.scss":
/*!**********************************************************!*\
  !*** ./src/app/user/profile/styles/user-profile.md.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(.plt-mobile.md) .user-details-section .user-image-wrapper {\n  max-width: 28%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5tZC5zY3NzIiwic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5tZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsY0FBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUubWQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUubWQpIHtcbiAgLnVzZXItZGV0YWlscy1zZWN0aW9uIHtcbiAgICAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgICAgIG1heC13aWR0aDogMjglO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QtY29udGV4dCgucGx0LW1vYmlsZS5tZCkgLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWltYWdlLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDI4JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/profile/styles/user-profile.page.scss":
/*!************************************************************!*\
  !*** ./src/app/user/profile/styles/user-profile.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Lato:300,400,700\");\n@import url(\"http://weloveiconfonts.com/api/?family=fontawesome\");\n@charset \"UTF-8\";\n:host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-actions-padding: 5px;\n  --page-friends-gutter: calc(var(--page-margin) / 2);\n  --page-pictures-gutter: calc(var(--page-margin) / 2);\n}\n.timestamp {\n  color: var(--ion-color-theme);\n  font-size: larger;\n}\n.timestamp:hover {\n  color: var(--ion-color-theme);\n  font-size: larger;\n  font-weight: bold;\n  cursor: pointer;\n}\n.countdown {\n  background-color: transparent;\n  font-size: 0.6em;\n  --countdown-time-margin: 0px;\n  --countdown-fill-shadow: none;\n  --countdown-fill-background: transparent;\n}\n.search {\n  background: none;\n  position: absolute;\n  right: 0px;\n  border-radius: 20px;\n  padding: 4px;\n  font-size: smaller;\n  border-color: var(--ion-color-theme);\n  text-indent: 8px;\n}\n.readClass {\n  background: #eff0f1;\n  color: gray;\n  font-weight: lighter;\n}\n.unreadClass {\n  background: white;\n  color: gray;\n  font-weight: bold;\n}\n/* On screens that are 600px or more, set the background color to blue */\n@media screen and (min-width: 600px) {\n  .new .col-left .card .list {\n    padding: 0px;\n  }\n  .new .col-left .card .list .item .row {\n    background-color: white;\n    color: gray;\n    font-weight: bold;\n    width: 100%;\n  }\n  .new .col-left .card .list .item .row:hover {\n    cursor: pointer;\n    background-color: #eff0f1;\n    color: gray;\n    font-weight: lighter;\n    width: 100%;\n  }\n}\n/* On screens that are 600px or less, set the background color to blue */\n@media screen and (max-width: 600px) {\n  .col-left {\n    min-width: 100%;\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n\n  .col-right {\n    min-width: 100%;\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n}\n.sc-ion-card-md-s ion-list {\n  width: 100%;\n}\n.sc-ion-card-md-h {\n  width: 100%;\n  margin: 0px;\n}\n.user-details-section {\n  --ion-grid-column-padding: 0px;\n  margin: var(--page-margin);\n}\n.user-details-section .user-image-wrapper {\n  max-width: 15%;\n}\n.user-details-section .user-image-wrapper .user-image {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n}\n.user-details-section .user-info-wrapper {\n  padding-left: var(--page-margin);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n}\n.user-details-section .user-info-wrapper .user-data-row {\n  padding-bottom: var(--page-margin);\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n.user-details-section .user-info-wrapper .user-data-row .user-name {\n  margin: 0px 0px 5px;\n  font-size: 20px;\n  letter-spacing: 0.5px;\n}\n.user-details-section .user-info-wrapper .user-data-row .user-name:hover {\n  cursor: pointer;\n}\n.user-details-section .user-info-wrapper .user-data-row .user-title {\n  margin: 0px;\n  color: var(--ion-color-medium);\n  font-size: 16px;\n}\n.user-details-section .user-info-wrapper .user-data-row .membership-col {\n  padding-left: var(--page-margin);\n  flex-grow: 0;\n}\n.user-details-section .user-info-wrapper .user-data-row .user-membership {\n  display: block;\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: 4px 8px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n}\n.user-details-section .user-info-wrapper .actions-row {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: var(--page-actions-padding);\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  margin-left: calc(var(--page-actions-padding) * -1);\n  margin-right: calc(var(--page-actions-padding) * -1);\n}\n.user-details-section .user-info-wrapper .actions-row .main-actions {\n  flex-grow: 0;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-left: calc(var(--page-actions-padding) * -1);\n  margin-right: calc(var(--page-actions-padding) * -1);\n  display: flex;\n}\n.user-details-section .user-info-wrapper .actions-row .main-actions .call-to-action-btn {\n  padding: 0px var(--page-actions-padding);\n  margin: 0px;\n}\n.user-details-section .user-info-wrapper .actions-row .secondary-actions {\n  flex-grow: 0;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.user-details-section .user-info-wrapper .actions-row .secondary-actions .more-btn {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  margin: 0px;\n}\n.user-stats-section {\n  --ion-grid-column-padding: 0px;\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n.user-stats-section .user-stats-wrapper {\n  text-align: center;\n}\n.user-stats-section .user-stats-wrapper .stat-value {\n  display: block;\n  padding-bottom: 5px;\n  color: var(--ion-color-dark-shade);\n  font-weight: 500;\n  font-size: 18px;\n}\n.user-stats-section .user-stats-wrapper .stat-name {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n}\n.details-section-title {\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px 0px var(--page-margin);\n}\n.user-about-section {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n.user-about-section .user-description {\n  color: var(--ion-color-dark-shade);\n  text-align: justify;\n  margin: var(--page-margin) 0px;\n  font-size: 14px;\n  line-height: 1.3;\n}\n.user-friends-section {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n.user-friends-section .heading-row {\n  margin-bottom: var(--page-margin);\n  justify-content: space-between;\n  align-items: center;\n}\n.user-friends-section .heading-row .details-section-title {\n  margin: 0px;\n}\n.user-friends-section .heading-row .heading-call-to-action {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n}\n.user-friends-section .friends-row {\n  --ion-grid-columns: 9;\n  --ion-grid-column-padding: 0px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  will-change: scroll-position;\n  margin-left: calc(var(--page-margin) * -1);\n  margin-right: calc(var(--page-margin) * -1);\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n.user-friends-section .friends-row::-webkit-scrollbar {\n  display: none;\n}\n.user-friends-section .friends-row::before, .user-friends-section .friends-row::after {\n  content: \"\";\n  flex: 0 0 calc(var(--page-margin) - var(--page-friends-gutter));\n}\n.user-friends-section .friends-row .friend-item {\n  padding: 0px var(--page-friends-gutter);\n}\n.user-friends-section .friends-row .friend-item .friend-name {\n  display: block;\n  text-align: center;\n  margin: var(--page-margin) 0px;\n  font-size: 14px;\n}\n.user-photos-section {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n.user-photos-section .heading-row {\n  margin-bottom: var(--page-margin);\n  justify-content: space-between;\n  align-items: center;\n}\n.user-photos-section .heading-row .details-section-title {\n  margin: 0px;\n}\n.user-photos-section .heading-row .heading-call-to-action {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n}\n.user-photos-section .pictures-row {\n  --ion-grid-columns: 4;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-pictures-gutter) * -1);\n}\n.user-photos-section .pictures-row .picture-item {\n  padding: 0px var(--page-pictures-gutter) calc(var(--page-pictures-gutter) * 2);\n}\n::ng-deep .language-alert {\n  --select-alert-color: #000;\n  --select-alert-background: #FFF;\n  --select-alert-margin: 16px;\n  --select-alert-color: var(--ion-color-lightest);\n  --select-alert-background: var(--ion-color-primary);\n  --select-alert-margin: var(--app-fair-margin);\n}\n::ng-deep .language-alert .alert-head {\n  padding-top: calc((var(--select-alert-margin) / 4) * 3);\n  padding-bottom: calc((var(--select-alert-margin) / 4) * 3);\n  -webkit-padding-start: var(--select-alert-margin);\n          padding-inline-start: var(--select-alert-margin);\n  -webkit-padding-end: var(--select-alert-margin);\n          padding-inline-end: var(--select-alert-margin);\n}\n::ng-deep .language-alert .alert-title {\n  color: var(--select-alert-color);\n}\n::ng-deep .language-alert .alert-head,\n::ng-deep .language-alert .alert-message {\n  background-color: var(--select-alert-background);\n}\n::ng-deep .language-alert .alert-wrapper.sc-ion-alert-ios .alert-title {\n  margin: 0px;\n}\n::ng-deep .language-alert .alert-wrapper.sc-ion-alert-md .alert-title {\n  font-size: 18px;\n  font-weight: 400;\n}\n::ng-deep .language-alert .alert-wrapper.sc-ion-alert-md .alert-button {\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px;\n}\n::ng-deep .language-alert .alert-message {\n  display: none;\n}\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n:before,\n:after {\n  display: block;\n  position: absolute;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  display: flex;\n  font: 15px/1 Lato, sans-serif;\n  color: #777;\n}\na {\n  cursor: pointer;\n}\nnav {\n  width: 250px;\n}\nnav header {\n  position: relative;\n  height: 70px;\n  padding: 15px 0 0 15px;\n  font-size: 16px;\n  color: #fff;\n}\nnav header span {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  margin: 0 10px 0 0;\n  vertical-align: middle;\n  border: 1px solid #fff;\n}\nnav header span:before {\n  content: \"\";\n  font: normal 20px FontAwesome;\n  top: 7px;\n  left: 9px;\n}\nnav header a:before {\n  content: \"\";\n  font: normal 20px FontAwesome;\n  top: 22px;\n  right: 15px;\n}\nnav ul li:first-child {\n  padding: 15px;\n  color: rgba(255, 255, 255, 0.5);\n  text-transform: uppercase;\n}\nnav ul a {\n  position: relative;\n  display: block;\n  padding: 15px 15px 17px 50px;\n  color: #fff;\n}\nnav ul a:before {\n  font: normal 20px FontAwesome;\n  top: 15px;\n  left: 15px;\n}\nnav ul li:nth-child(2) a:before {\n  content: \"\";\n}\nnav ul li:nth-child(3) a:before {\n  content: \"\";\n}\nnav ul li:nth-child(4) a:before {\n  content: \"\";\n}\nnav ul li:nth-child(5) a:before {\n  content: \"\";\n}\nnav ul li:nth-child(6) a:before {\n  content: \"\";\n}\nnav ul li:nth-child(7) a:before {\n  content: \"\";\n}\nnav ul li:nth-child(8) a:before {\n  content: \"\";\n}\nmain {\n  flex: 1;\n  padding: 25px;\n  background: white;\n}\nmain h1 {\n  height: 70px;\n  margin: -25px -25px 25px -25px;\n  padding: 0 25px;\n  line-height: 66px;\n  font-size: 28px;\n  font-weight: 300;\n  text-transform: uppercase;\n  border-bottom: transparent;\n  background: #fafafa;\n}\n.flex-grid {\n  display: flex;\n  min-height: 58px;\n}\n.flex-grid div {\n  flex: 1;\n  margin: 0 20px 20px 0;\n  border: 1px solid #ddd;\n  background: #fff;\n}\n.flex-grid div:last-child {\n  margin-right: 0;\n}\n.flex-grid div h2 {\n  padding: 12px 15px;\n  font-size: 16px;\n  font-weight: 300;\n  text-transform: uppercase;\n  border-bottom: 1px solid #ddd;\n  background: #fafafa;\n}\n.tag {\n  box-shadow: none;\n  height: 100%;\n  font-size: 2rem;\n  font-weight: bold;\n  text-align: center;\n}\n.sale {\n  color: var(--ion-color-medium);\n}\n.expense {\n  color: var(--ion-color-secondary);\n}\n.receipt {\n  color: var(--ion-color-theme);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3VzZXIvcHJvZmlsZS9zdHlsZXMvdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL3RoZW1lL21peGlucy9zY3JvbGxiYXJzLnNjc3MiLCIvVXNlcnMvaW1ha2VyL0Rlc2t0b3AvSU1BS0VSL0FBQV9pbWFrZXJfc3Vic2NyaXB0aW9uL2lvblZvaWNlL3NyYy90aGVtZS9taXhpbnMvaW5wdXRzL3NlbGVjdC1hbGVydC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUF1VVEsdUVBQUE7QUFDQSxpRUFBQTtBQ3hVUixnQkFBZ0I7QURJaEI7RUFDQyx1Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0FDQUQ7QURHQTtFQUNDLDZCQUFBO0VBQ0EsaUJBQUE7QUNBRDtBREdBO0VBQ0MsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FEO0FER0E7RUFDQyw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdDQUFBO0FDQUQ7QURHQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQUQ7QURHQTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDQUQ7QURHQTtFQUNDLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQUQ7QURJQSx3RUFBQTtBQUVBO0VBSUk7SUFDQyxZQUFBO0VDTEg7RURPSTtJQUNDLHVCQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQ0xMO0VET0k7SUFDQyxlQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxXQUFBO0VDTEw7QUFDRjtBRHVCQSx3RUFBQTtBQUVBO0VBQ0M7SUFDQyxlQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtFQ3RCQTs7RUR3QkQ7SUFDQyxlQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtFQ3JCQTtBQUNGO0FEd0JBO0VBQ0MsV0FBQTtBQ3RCRDtBRHlCQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDdEJEO0FEMEJBO0VBQ0MsOEJBQUE7RUFDQSwwQkFBQTtBQ3ZCRDtBRHdCQztFQUNDLGNBQUE7QUN0QkY7QUR1QkU7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDckJIO0FEd0JDO0VBQ0MsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDdEJGO0FEdUJFO0VBQ0Msa0NBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDckJIO0FEc0JHO0VBQ0MsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNwQko7QURzQkc7RUFDQyxlQUFBO0FDcEJKO0FEc0JHO0VBQ0MsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ3BCSjtBRHNCRztFQUNDLGdDQUFBO0VBQ0EsWUFBQTtBQ3BCSjtBRHNCRztFQUNDLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDcEJKO0FEdUJFO0VBQ0Msc0JBQUE7RUFDQSxzREFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0FDckJIO0FEc0JHO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0VBQ0EsYUFBQTtBQ3BCSjtBRHFCSTtFQUNDLHdDQUFBO0VBQ0EsV0FBQTtBQ25CTDtBRHNCRztFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDcEJKO0FEcUJJO0VBQ0Msb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNuQkw7QUQwQkE7RUFDQyw4QkFBQTtFQUNBLDBFQUFBO0VBQ0Esa0NBQUE7RUFDQSxxREFBQTtBQ3ZCRDtBRHdCQztFQUNDLGtCQUFBO0FDdEJGO0FEdUJFO0VBQ0MsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNyQkg7QUR1QkU7RUFDQyxlQUFBO0VBQ0EsOEJBQUE7QUNyQkg7QUQwQkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0FDdkJEO0FEMEJBO0VBQ0MsMEVBQUE7RUFDQSxrQ0FBQTtFQUNBLHFEQUFBO0FDdkJEO0FEd0JDO0VBQ0Msa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDdEJGO0FEMEJBO0VBQ0MsMEVBQUE7RUFDQSxrQ0FBQTtFQUNBLHFEQUFBO0FDdkJEO0FEd0JDO0VBQ0MsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEdUJFO0VBQ0MsV0FBQTtBQ3JCSDtBRHVCRTtFQUNDLGtFQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQ3JCSDtBRHdCQztFQUVDLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VFelFBLHdCQUFBO0VBR0EsOEJBQUE7RUFDQSxxQkFBQTtBRGlQRjtBQzlPRTtFQUNFLGFBQUE7QURnUEo7QURtQkU7RUFFQyxXQUFBO0VBRUEsK0RBQUE7QUNuQkg7QURxQkU7RUFDQyx1Q0FBQTtBQ25CSDtBRG9CRztFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ2xCSjtBRHdCQTtFQUNDLDBFQUFBO0VBQ0EsNENBQUE7QUNyQkQ7QURzQkM7RUFDQyxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNwQkY7QURxQkU7RUFDQyxXQUFBO0FDbkJIO0FEcUJFO0VBQ0Msa0VBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FDbkJIO0FEc0JDO0VBQ0MscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtEQUFBO0FDcEJGO0FEcUJFO0VBQ0MsOEVBQUE7QUNuQkg7QUQwQkE7RUcxVEUsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VIMlRELCtDQUFBO0VBQ0EsbURBQUE7RUFDQSw2Q0FBQTtBQ3RCRDtBRXJTRTtFQUNFLHVEQUFBO0VBQ0EsMERBQUE7RUFDQSxpREFBQTtVQUFBLGdEQUFBO0VBQ0EsK0NBQUE7VUFBQSw4Q0FBQTtBRnVTSjtBRXBTRTtFQUNFLGdDQUFBO0FGc1NKO0FFblNFOztFQUVFLGdEQUFBO0FGcVNKO0FFaFNJO0VBQ0UsV0FBQTtBRmtTTjtBRTVSSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRjhSTjtBRTNSSTtFQUVFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7QUYyUk47QURMQztFQUNDLGFBQUE7QUNPRjtBREVBO0VBQ0MsU0FBQTtFQUVBLHNCQUFBO0FDQUQ7QURHQTs7RUFFQyxjQUFBO0VBQ0Esa0JBQUE7QUNBRDtBREdBOztFQUVDLFlBQUE7QUNBRDtBREdBO0VBQ0MsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0FEO0FER0E7RUFDQyxlQUFBO0FDQUQ7QURHQTtFQUNDLFlBQUE7QUNBRDtBRElBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0REO0FETUE7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUNIRDtBRE1BO0VBQ0MsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNIRDtBRE1BO0VBQ0MsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNIRDtBRE1BO0VBQ0MsYUFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUNIRDtBRE9BO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDSkQ7QURhQTtFQUNDLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNWRDtBRGFBO0VBQ0MsWUFBQTtBQ1ZEO0FEYUE7RUFDQyxZQUFBO0FDVkQ7QURhQTtFQUNDLFlBQUE7QUNWRDtBRGFBO0VBQ0MsWUFBQTtBQ1ZEO0FEYUE7RUFDQyxZQUFBO0FDVkQ7QURhQTtFQUNDLFlBQUE7QUNWRDtBRGFBO0VBQ0MsWUFBQTtBQ1ZEO0FEYUE7RUFDQyxPQUFBO0VBQ0EsYUFBQTtFQUVBLGlCQUFBO0FDWEQ7QURjQTtFQUNDLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBRUEsMEJBQUE7RUFDQSxtQkFBQTtBQ1pEO0FEZUE7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7QUNaRDtBRGdCQTtFQUNDLE9BQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNiRDtBRGdCQTtFQUNDLGVBQUE7QUNiRDtBRGdCQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDYkQ7QURnQkE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2REO0FEaUJBO0VBQ0MsOEJBQUE7QUNkRDtBRGlCQTtFQUNDLGlDQUFBO0FDZEQ7QURpQkE7RUFDQyw2QkFBQTtBQ2REIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lucHV0cy9zZWxlY3QtYWxlcnRcIjtcbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuXHQtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG5cdC0tcGFnZS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuXHQtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nOiA1cHg7XG5cdC0tcGFnZS1mcmllbmRzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblx0LS1wYWdlLXBpY3R1cmVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cblxuLnRpbWVzdGFtcCB7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLnRpbWVzdGFtcDpob3ZlciB7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xuXHRmb250LXNpemU6IGxhcmdlcjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvdW50ZG93biB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRmb250LXNpemU6IDAuNmVtO1xuXHQtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4O1xuXHQtLWNvdW50ZG93bi1maWxsLXNoYWRvdzogbm9uZTtcblx0LS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlYXJjaCB7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDBweDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0cGFkZGluZzogNHB4O1xuXHRmb250LXNpemU6IHNtYWxsZXI7XG5cdGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcblx0dGV4dC1pbmRlbnQ6IDhweDtcbn1cblxuLnJlYWRDbGFzcyB7XG5cdGJhY2tncm91bmQ6ICNlZmYwZjE7XG5cdGNvbG9yOiBncmF5O1xuXHRmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLnVucmVhZENsYXNzIHtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOiBncmF5O1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4vKiBPbiBzY3JlZW5zIHRoYXQgYXJlIDYwMHB4IG9yIG1vcmUsIHNldCB0aGUgYmFja2dyb3VuZCBjb2xvciB0byBibHVlICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG5cdC5uZXcge1xuXHRcdC5jb2wtbGVmdCB7XG5cdFx0XHQuY2FyZCB7XG5cdFx0XHRcdC5saXN0IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRcdFx0Lml0ZW0ge1xuXHRcdFx0XHRcdFx0LnJvdyB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogZ3JheTtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnJvdzpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VmZjBmMTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IGdyYXk7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0Ly8gYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIG1pbi13aWR0aDogMTAwJTtcblx0XHRcdC8vIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdFx0XHQvLyBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblx0XHR9XG5cdFx0LmNvbC1yaWdodCB7XG5cdFx0XHQvLyBtaW4td2lkdGg6IDEwMCU7XG5cdFx0XHQvLyB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRcdFx0Ly8gbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG59XG5cblxuLyogT24gc2NyZWVucyB0aGF0IGFyZSA2MDBweCBvciBsZXNzLCBzZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gYmx1ZSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXHQuY29sLWxlZnQge1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRcdG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHR9XG5cdC5jb2wtcmlnaHQge1xuXHRcdG1pbi13aWR0aDogMTAwJTtcblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRcdG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5zYy1pb24tY2FyZC1tZC1zIGlvbi1saXN0IHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5zYy1pb24tY2FyZC1tZC1oIHtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogMHB4O1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG5cdC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblx0bWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cdC51c2VyLWltYWdlLXdyYXBwZXIge1xuXHRcdG1heC13aWR0aDogMTUlO1xuXHRcdC51c2VyLWltYWdlIHtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdHdpZHRoOiA1MHB4O1xuXHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdH1cblx0fVxuXHQudXNlci1pbmZvLXdyYXBwZXIge1xuXHRcdHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0LnVzZXItZGF0YS1yb3cge1xuXHRcdFx0cGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblx0XHRcdGZsZXgtd3JhcDogbm93cmFwO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0LnVzZXItbmFtZSB7XG5cdFx0XHRcdG1hcmdpbjogMHB4IDBweCA1cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0fVxuXHRcdFx0LnVzZXItbmFtZTpob3ZlciB7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdH1cblx0XHRcdC51c2VyLXRpdGxlIHtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0fVxuXHRcdFx0Lm1lbWJlcnNoaXAtY29sIHtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cdFx0XHRcdGZsZXgtZ3JvdzogMDtcblx0XHRcdH1cblx0XHRcdC51c2VyLW1lbWJlcnNoaXAge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG5cdFx0XHRcdHBhZGRpbmc6IDRweCA4cHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuYWN0aW9ucy1yb3cge1xuXHRcdFx0LS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcblx0XHRcdC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKTtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdGZsZXgtd3JhcDogbm93cmFwO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpICogLTEpO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcblx0XHRcdC5tYWluLWFjdGlvbnMge1xuXHRcdFx0XHRmbGV4LWdyb3c6IDA7XG5cdFx0XHRcdHBhZGRpbmctdG9wOiAwcHg7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAwcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0LmNhbGwtdG8tYWN0aW9uLWJ0biB7XG5cdFx0XHRcdFx0cGFkZGluZzogMHB4IHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKTtcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0LnNlY29uZGFyeS1hY3Rpb25zIHtcblx0XHRcdFx0ZmxleC1ncm93OiAwO1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogMHB4O1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMHB4O1xuXHRcdFx0XHQubW9yZS1idG4ge1xuXHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogNHB4O1xuXHRcdFx0XHRcdC0tcGFkZGluZy1lbmQ6IDRweDtcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4udXNlci1zdGF0cy1zZWN0aW9uIHtcblx0LS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXHRtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblx0cGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG5cdC51c2VyLXN0YXRzLXdyYXBwZXIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQuc3RhdC12YWx1ZSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHR9XG5cdFx0LnN0YXQtbmFtZSB7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG5cdFx0fVxuXHR9XG59XG5cbi5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcblx0bWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cblxuLnVzZXItYWJvdXQtc2VjdGlvbiB7XG5cdG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXHRwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblx0LnVzZXItZGVzY3JpcHRpb24ge1xuXHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG5cdFx0dGV4dC1hbGlnbjoganVzdGlmeTtcblx0XHRtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjM7XG5cdH1cbn1cblxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIHtcblx0bWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cdHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXHQuaGVhZGluZy1yb3cge1xuXHRcdG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHQuZGV0YWlscy1zZWN0aW9uLXRpdGxlIHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdH1cblx0XHQuaGVhZGluZy1jYWxsLXRvLWFjdGlvbiB7XG5cdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cdFx0fVxuXHR9XG5cdC5mcmllbmRzLXJvdyB7XG5cdFx0Ly8gLS1pb24tZ3JpZC1jb2x1bW5zOiA3OyAvLyBXZSB3YW50IHRvIHNob3cgdGhyZWUgZnJpZW5kcyBhbmQgYSBoYWxmLiBFYWNoIGZyaWVuZCBmaWxscyAyIGNvbHMgPT4gKDMuNSAqIDIgPSA3IGNvbHMpXG5cdFx0LS1pb24tZ3JpZC1jb2x1bW5zOiA5OyAvLyBXZSB3YW50IHRvIHNob3cgZm91ciBmcmllbmRzIGFuZCBhIGhhbGYuIEVhY2ggZnJpZW5kIGZpbGxzIDIgY29scyA9PiAoNC41ICogMiA9IDkgY29scylcblx0XHQtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0b3ZlcmZsb3cteDogc2Nyb2xsO1xuXHRcdHdpbGwtY2hhbmdlOiBzY3JvbGwtcG9zaXRpb247XG5cdFx0bWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuXHRcdG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG5cdFx0QGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cdFx0Jjo6YmVmb3JlLFxuXHRcdCY6OmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0Ly8gLmZyaWVuZC1pdGVtIGhhcyA4cHggb2Ygc2lkZSBwYWRkaW5nLCB3ZSBuZWVkIGFuIGV4dHJhIDRweCBhdCB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgdG8gZmlsbCB0aGUgMTJweCBzaWRlIG1hcmdpbiBvZiB0aGUgdmlld1xuXHRcdFx0ZmxleDogMCAwIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1mcmllbmRzLWd1dHRlcikpO1xuXHRcdH1cblx0XHQuZnJpZW5kLWl0ZW0ge1xuXHRcdFx0cGFkZGluZzogMHB4IHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpO1xuXHRcdFx0LmZyaWVuZC1uYW1lIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi51c2VyLXBob3Rvcy1zZWN0aW9uIHtcblx0bWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cdHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXHQuaGVhZGluZy1yb3cge1xuXHRcdG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHQuZGV0YWlscy1zZWN0aW9uLXRpdGxlIHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdH1cblx0XHQuaGVhZGluZy1jYWxsLXRvLWFjdGlvbiB7XG5cdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG5cdFx0fVxuXHR9XG5cdC5waWN0dXJlcy1yb3cge1xuXHRcdC0taW9uLWdyaWQtY29sdW1uczogNDtcblx0XHQtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cdFx0bWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgKiAtMSk7XG5cdFx0LnBpY3R1cmUtaXRlbSB7XG5cdFx0XHRwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1waWN0dXJlcy1ndXR0ZXIpIGNhbGModmFyKC0tcGFnZS1waWN0dXJlcy1ndXR0ZXIpICogMik7XG5cdFx0fVxuXHR9XG59XG5cbi8vIEFsZXJ0cyBhbmQgaW4gZ2VuZXJhbCBhbGwgb3ZlcmxheXMgYXJlIGF0dGFjaGVkIHRvIHRoZSBib2R5IG9yIGlvbi1hcHAgZGlyZWN0bHlcbi8vIFdlIG5lZWQgdG8gdXNlIDo6bmctZGVlcCB0byBhY2Nlc3MgaXQgZnJvbSBoZXJlXG46Om5nLWRlZXAgLmxhbmd1YWdlLWFsZXJ0IHtcblx0QGluY2x1ZGUgc2VsZWN0LWFsZXJ0KCk7XG5cdC8vIFZhcmlhYmxlcyBzaG91bGQgYmUgaW4gYSBkZWVwZXIgc2VsZWN0b3Igb3IgYWZ0ZXIgdGhlIG1peGluIGluY2x1ZGUgdG8gb3ZlcnJpZGUgZGVmYXVsdCB2YWx1ZXNcblx0LS1zZWxlY3QtYWxlcnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cdC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblx0LS1zZWxlY3QtYWxlcnQtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuXHQuYWxlcnQtbWVzc2FnZSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw3MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwOi8vd2Vsb3ZlaWNvbmZvbnRzLmNvbS9hcGkvP2ZhbWlseT1mb250YXdlc29tZScpO1xuLy8gQGJsdWU6ICMzYjQ4NTQ7XG4vLyBAYmx1ZS1kOiBkYXJrZW4oQGJsdWUsIDUlKTtcbi8vIEBibHVlLWw6IGxpZ2h0ZW4oQGJsdWUsIDUlKTtcbioge1xuXHRtYXJnaW46IDA7XG5cdC8vIHBhZGRpbmc6IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpiZWZvcmUsXG4gOmFmdGVyIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaHRtbCxcbmJvZHkge1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmb250OiAxNXB4LzEgTGF0bywgc2Fucy1zZXJpZjtcblx0Y29sb3I6ICM3Nzc7XG59XG5cbmEge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdiB7XG5cdHdpZHRoOiAyNTBweDtcblx0Ly8gYmFja2dyb3VuZDogYmx1ZTtcbn1cblxubmF2IGhlYWRlciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0aGVpZ2h0OiA3MHB4O1xuXHRwYWRkaW5nOiAxNXB4IDAgMCAxNXB4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHQvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgQGJsdWUtbDtcblx0Ly8gYmFja2dyb3VuZDogQGJsdWUtZDtcbn1cblxubmF2IGhlYWRlciBzcGFuIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiAzNnB4O1xuXHRoZWlnaHQ6IDM2cHg7XG5cdG1hcmdpbjogMCAxMHB4IDAgMDtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxubmF2IGhlYWRlciBzcGFuOmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICdcXGYwMDcnO1xuXHRmb250OiBub3JtYWwgMjBweCBGb250QXdlc29tZTtcblx0dG9wOiA3cHg7XG5cdGxlZnQ6IDlweDtcbn1cblxubmF2IGhlYWRlciBhOmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICdcXGYwMTEnO1xuXHRmb250OiBub3JtYWwgMjBweCBGb250QXdlc29tZTtcblx0dG9wOiAyMnB4O1xuXHRyaWdodDogMTVweDtcbn1cblxubmF2IHVsIGxpOmZpcnN0LWNoaWxkIHtcblx0cGFkZGluZzogMTVweDtcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHQvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgQGJsdWUtbDtcbn1cblxubmF2IHVsIGEge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiAxNXB4IDE1cHggMTdweCA1MHB4O1xuXHRjb2xvcjogI2ZmZjtcblx0Ly8gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBAYmx1ZS1sO1xufVxuXG5uYXYgdWwgYTpob3Zlcixcbm5hdiB1bCBhLmFjdGl2ZSB7XG5cdC8vICBiYWNrZ3JvdW5kOiBAYmx1ZS1sO1xufVxuXG5uYXYgdWwgYTpiZWZvcmUge1xuXHRmb250OiBub3JtYWwgMjBweCBGb250QXdlc29tZTtcblx0dG9wOiAxNXB4O1xuXHRsZWZ0OiAxNXB4O1xufVxuXG5uYXYgdWwgbGk6bnRoLWNoaWxkKDIpIGE6YmVmb3JlIHtcblx0Y29udGVudDogJ1xcZjAwYSc7XG59XG5cbm5hdiB1bCBsaTpudGgtY2hpbGQoMykgYTpiZWZvcmUge1xuXHRjb250ZW50OiAnXFxmMDEyJztcbn1cblxubmF2IHVsIGxpOm50aC1jaGlsZCg0KSBhOmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICdcXGYwMjQnO1xufVxuXG5uYXYgdWwgbGk6bnRoLWNoaWxkKDUpIGE6YmVmb3JlIHtcblx0Y29udGVudDogJ1xcZjBjMyc7XG59XG5cbm5hdiB1bCBsaTpudGgtY2hpbGQoNikgYTpiZWZvcmUge1xuXHRjb250ZW50OiAnXFxmMDliJztcbn1cblxubmF2IHVsIGxpOm50aC1jaGlsZCg3KSBhOmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICdcXGYwZmEnO1xufVxuXG5uYXYgdWwgbGk6bnRoLWNoaWxkKDgpIGE6YmVmb3JlIHtcblx0Y29udGVudDogJ1xcZjA4NSc7XG59XG5cbm1haW4ge1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiAyNXB4O1xuXHQvLyBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxubWFpbiBoMSB7XG5cdGhlaWdodDogNzBweDtcblx0bWFyZ2luOiAtMjVweCAtMjVweCAyNXB4IC0yNXB4O1xuXHRwYWRkaW5nOiAwIDI1cHg7XG5cdGxpbmUtaGVpZ2h0OiA2NnB4O1xuXHRmb250LXNpemU6IDI4cHg7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuXHRib3JkZXItYm90dG9tOiB0cmFuc3BhcmVudDtcblx0YmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cblxuLmZsZXgtZ3JpZCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1pbi1oZWlnaHQ6IDU4cHg7XG5cdC8vIG1pbi1oZWlnaHQ6IDE4MHB4O1xufVxuXG4uZmxleC1ncmlkIGRpdiB7XG5cdGZsZXg6IDE7XG5cdG1hcmdpbjogMCAyMHB4IDIwcHggMDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcblx0YmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmZsZXgtZ3JpZCBkaXY6bGFzdC1jaGlsZCB7XG5cdG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmZsZXgtZ3JpZCBkaXYgaDIge1xuXHRwYWRkaW5nOiAxMnB4IDE1cHg7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG5cdGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbi50YWcge1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdC8vIGNvbG9yOiBvcmFuZ2U7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNhbGUge1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5cbi5leHBlbnNlIHtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4ucmVjZWlwdCB7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufVxuXG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwOi8vd2Vsb3ZlaWNvbmZvbnRzLmNvbS9hcGkvP2ZhbWlseT1mb250YXdlc29tZVwiKTtcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuICAtLXBhZ2UtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgLS1wYWdlLWFjdGlvbnMtcGFkZGluZzogNXB4O1xuICAtLXBhZ2UtZnJpZW5kcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS1waWN0dXJlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG5cbi50aW1lc3RhbXAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi50aW1lc3RhbXA6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRoZW1lKTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb3VudGRvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgLS1jb3VudGRvd24tdGltZS1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tZmlsbC1zaGFkb3c6IG5vbmU7XG4gIC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG4gIHRleHQtaW5kZW50OiA4cHg7XG59XG5cbi5yZWFkQ2xhc3Mge1xuICBiYWNrZ3JvdW5kOiAjZWZmMGYxO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi51bnJlYWRDbGFzcyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIE9uIHNjcmVlbnMgdGhhdCBhcmUgNjAwcHggb3IgbW9yZSwgc2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGJsdWUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5uZXcgLmNvbC1sZWZ0IC5jYXJkIC5saXN0IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLm5ldyAuY29sLWxlZnQgLmNhcmQgLmxpc3QgLml0ZW0gLnJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm5ldyAuY29sLWxlZnQgLmNhcmQgLmxpc3QgLml0ZW0gLnJvdzpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjE7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi8qIE9uIHNjcmVlbnMgdGhhdCBhcmUgNjAwcHggb3IgbGVzcywgc2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGJsdWUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2wtbGVmdCB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29sLXJpZ2h0IHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuLnNjLWlvbi1jYXJkLW1kLXMgaW9uLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gIG1heC13aWR0aDogMTUlO1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWltYWdlLXdyYXBwZXIgLnVzZXItaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWRhdGEtcm93IHtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItZGF0YS1yb3cgLnVzZXItbmFtZSB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAudXNlci1kYXRhLXJvdyAudXNlci1uYW1lOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAudXNlci1kYXRhLXJvdyAudXNlci10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItZGF0YS1yb3cgLm1lbWJlcnNoaXAtY29sIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZsZXgtZ3JvdzogMDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItZGF0YS1yb3cgLnVzZXItbWVtYmVyc2hpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC5hY3Rpb25zLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMTA7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpICogLTEpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpICogLTEpO1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAuYWN0aW9ucy1yb3cgLm1haW4tYWN0aW9ucyB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpICogLTEpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpICogLTEpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAuYWN0aW9ucy1yb3cgLm1haW4tYWN0aW9ucyAuY2FsbC10by1hY3Rpb24tYnRuIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKTtcbiAgbWFyZ2luOiAwcHg7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC5hY3Rpb25zLXJvdyAuc2Vjb25kYXJ5LWFjdGlvbnMge1xuICBmbGV4LWdyb3c6IDA7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC5hY3Rpb25zLXJvdyAuc2Vjb25kYXJ5LWFjdGlvbnMgLm1vcmUtYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi51c2VyLXN0YXRzLXNlY3Rpb24ge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi51c2VyLXN0YXRzLXNlY3Rpb24gLnVzZXItc3RhdHMtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2VyLXN0YXRzLXNlY3Rpb24gLnVzZXItc3RhdHMtd3JhcHBlciAuc3RhdC12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4udXNlci1zdGF0cy1zZWN0aW9uIC51c2VyLXN0YXRzLXdyYXBwZXIgLnN0YXQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4uZGV0YWlscy1zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG5cbi51c2VyLWFib3V0LXNlY3Rpb24ge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG4udXNlci1hYm91dC1zZWN0aW9uIC51c2VyLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuaGVhZGluZy1yb3cge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuaGVhZGluZy1yb3cgLmRldGFpbHMtc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5oZWFkaW5nLXJvdyAuaGVhZGluZy1jYWxsLXRvLWFjdGlvbiB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmZyaWVuZHMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiA5O1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdpbGwtY2hhbmdlOiBzY3JvbGwtcG9zaXRpb247XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3c6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3c6OmJlZm9yZSwgLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmbGV4OiAwIDAgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLWZyaWVuZHMtZ3V0dGVyKSk7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmZyaWVuZHMtcm93IC5mcmllbmQtaXRlbSB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLWZyaWVuZHMtZ3V0dGVyKTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3cgLmZyaWVuZC1pdGVtIC5mcmllbmQtbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udXNlci1waG90b3Mtc2VjdGlvbiB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi51c2VyLXBob3Rvcy1zZWN0aW9uIC5oZWFkaW5nLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzZXItcGhvdG9zLXNlY3Rpb24gLmhlYWRpbmctcm93IC5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuICBtYXJnaW46IDBweDtcbn1cbi51c2VyLXBob3Rvcy1zZWN0aW9uIC5oZWFkaW5nLXJvdyAuaGVhZGluZy1jYWxsLXRvLWFjdGlvbiB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4udXNlci1waG90b3Mtc2VjdGlvbiAucGljdHVyZXMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiA0O1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4IGNhbGModmFyKC0tcGFnZS1waWN0dXJlcy1ndXR0ZXIpICogLTEpO1xufVxuLnVzZXItcGhvdG9zLXNlY3Rpb24gLnBpY3R1cmVzLXJvdyAucGljdHVyZS1pdGVtIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIDIpO1xufVxuXG46Om5nLWRlZXAgLmxhbmd1YWdlLWFsZXJ0IHtcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6ICMwMDA7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tc2VsZWN0LWFsZXJ0LW1hcmdpbjogMTZweDtcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1zZWxlY3QtYWxlcnQtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xufVxuOjpuZy1kZWVwIC5sYW5ndWFnZS1hbGVydCAuYWxlcnQtaGVhZCB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKCh2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKSAvIDQpICogMyk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKCh2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKSAvIDQpICogMyk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcbn1cbjo6bmctZGVlcCAubGFuZ3VhZ2UtYWxlcnQgLmFsZXJ0LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1jb2xvcik7XG59XG46Om5nLWRlZXAgLmxhbmd1YWdlLWFsZXJ0IC5hbGVydC1oZWFkLFxuOjpuZy1kZWVwIC5sYW5ndWFnZS1hbGVydCAuYWxlcnQtbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kKTtcbn1cbjo6bmctZGVlcCAubGFuZ3VhZ2UtYWxlcnQgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtdGl0bGUge1xuICBtYXJnaW46IDBweDtcbn1cbjo6bmctZGVlcCAubGFuZ3VhZ2UtYWxlcnQgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjo6bmctZGVlcCAubGFuZ3VhZ2UtYWxlcnQgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1idXR0b24ge1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuOWVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjllbTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgaGVpZ2h0OiAyLjFlbTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5sYW5ndWFnZS1hbGVydCAuYWxlcnQtbWVzc2FnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpiZWZvcmUsXG46YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQ6IDE1cHgvMSBMYXRvLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzc3Nztcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubmF2IHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG5uYXYgaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDE1cHggMCAwIDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbm5hdiBoZWFkZXIgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG5cbm5hdiBoZWFkZXIgc3BhbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Ah1wiO1xuICBmb250OiBub3JtYWwgMjBweCBGb250QXdlc29tZTtcbiAgdG9wOiA3cHg7XG4gIGxlZnQ6IDlweDtcbn1cblxubmF2IGhlYWRlciBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CRXCI7XG4gIGZvbnQ6IG5vcm1hbCAyMHB4IEZvbnRBd2Vzb21lO1xuICB0b3A6IDIycHg7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG5uYXYgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5uYXYgdWwgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxN3B4IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5uYXYgdWwgYTpiZWZvcmUge1xuICBmb250OiBub3JtYWwgMjBweCBGb250QXdlc29tZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xufVxuXG5uYXYgdWwgbGk6bnRoLWNoaWxkKDIpIGE6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgIpcIjtcbn1cblxubmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CSXCI7XG59XG5cbm5hdiB1bCBsaTpudGgtY2hpbGQoNCkgYTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+ApFwiO1xufVxuXG5uYXYgdWwgbGk6bnRoLWNoaWxkKDUpIGE6YmVmb3JlIHtcbiAgY29udGVudDogXCLvg4NcIjtcbn1cblxubmF2IHVsIGxpOm50aC1jaGlsZCg2KSBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74KbXCI7XG59XG5cbm5hdiB1bCBsaTpudGgtY2hpbGQoNykgYTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+DulwiO1xufVxuXG5uYXYgdWwgbGk6bnRoLWNoaWxkKDgpIGE6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgoVcIjtcbn1cblxubWFpbiB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5tYWluIGgxIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW46IC0yNXB4IC0yNXB4IDI1cHggLTI1cHg7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgbGluZS1oZWlnaHQ6IDY2cHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWJvdHRvbTogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbi5mbGV4LWdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiA1OHB4O1xufVxuXG4uZmxleC1ncmlkIGRpdiB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmZsZXgtZ3JpZCBkaXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmZsZXgtZ3JpZCBkaXYgaDIge1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbi50YWcge1xuICBib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNhbGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5cbi5leHBlbnNlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4ucmVjZWlwdCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGhlbWUpO1xufSIsIi8vIEhpZGUgc2Nyb2xsYmFyczogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4OTk0ODM3LzExMTY5NTlcbkBtaXhpbiBoaWRlLXNjcm9sbGJhcnMoKSB7XG4gIC8vIElFIDEwK1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG5cbiAgLy8gRmlyZWZveFxuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcblxuICAvLyBTYWZhcmkgYW5kIENocm9tZVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiQG1peGluIHNlbGVjdC1hbGVydCgpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6ICMwMDA7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tc2VsZWN0LWFsZXJ0LW1hcmdpbjogMTZweDtcblxuICAuYWxlcnQtaGVhZCB7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoKHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pIC8gNCkgKiAzKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pO1xuICB9XG5cbiAgLmFsZXJ0LXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0LWFsZXJ0LWNvbG9yKTtcbiAgfVxuXG4gIC5hbGVydC1oZWFkLFxuICAuYWxlcnQtbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQpO1xuICB9XG5cbiAgLy8gaU9TIHN0eWxlc1xuICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICAuYWxlcnQtdGl0bGUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgLy8gTWF0ZXJpYWwgc3R5bGVzXG4gIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1tZCB7XG4gICAgLmFsZXJ0LXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgLmFsZXJ0LWJ1dHRvbiB7XG4gICAgICAvLyBWYWx1ZXMgdGFrZW4gZnJvbSBJb25pYyBzbWFsbCBidXR0b24gcHJlc2V0XG4gICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjllbTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDAuOWVtO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcblxuICAgICAgaGVpZ2h0OiAyLjFlbTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/profile/styles/user-profile.shell.scss":
/*!*************************************************************!*\
  !*** ./src/app/user/profile/styles/user-profile.shell.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 20px;\n  max-width: 50%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.user-title > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 70%;\n}\n\n.user-title > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.user-membership > app-text-shell {\n  --text-shell-line-color: rgba(var(--ion-color-secondary-rgb), 0.4);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.user-membership > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.stat-value > app-text-shell {\n  --text-shell-line-height: 18px;\n  max-width: 50%;\n  margin: 0px auto;\n}\n\n.stat-value > app-text-shell.text-loaded {\n  max-width: unset;\n  margin: initial;\n}\n\n.user-description > app-text-shell {\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.friend-picture {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n\n.friend-name > app-text-shell {\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.user-photo-image {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5zaGVsbC5zY3NzIiwic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0UsZ0JBQUE7QUNDSjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0UsZ0JBQUE7QUNBSjs7QURJQTtFQUNFLGtFQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDREY7O0FER0U7RUFDRSxjQUFBO0FDREo7O0FES0E7RUFDRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBRElFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRko7O0FETUE7RUFDRSw4QkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0RBQUE7QUNIRjs7QURNQTtFQUNFLDhCQUFBO0FDSEY7O0FETUE7RUFDRSxzREFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLnVzZXItdGl0bGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA3MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4udXNlci1tZW1iZXJzaGlwID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIDAuNCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5zdGF0LXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgbWFyZ2luOiBpbml0aWFsO1xuICB9XG59XG5cbi51c2VyLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5mcmllbmQtcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tcGFnZS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmZyaWVuZC1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC51c2VyLXBob3RvLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLXBhZ2UtYm9yZGVyLXJhZGl1cyk7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4udXNlci10aXRsZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cbi51c2VyLXRpdGxlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4udXNlci1tZW1iZXJzaGlwID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIDAuNCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLnVzZXItbWVtYmVyc2hpcCA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5zdGF0LXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLnN0YXQtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG4gIG1hcmdpbjogaW5pdGlhbDtcbn1cblxuLnVzZXItZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmZyaWVuZC1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuXG4uZnJpZW5kLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnVzZXItcGhvdG8taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLXBhZ2UtYm9yZGVyLXJhZGl1cyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/user/profile/user-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/profile/user-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/user/profile/user-profile.page.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _user_profile_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile.resolver */ "./src/app/user/profile/user-profile.resolver.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _language_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../language/language.service */ "./src/app/language/language.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../app/firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");















var routes = [
    {
        path: "",
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"],
        resolve: {
            data: _user_profile_resolver__WEBPACK_IMPORTED_MODULE_8__["UserProfileResolver"]
        }
    }
];
var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__["NgxDatatableModule"]
            ],
            declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]],
            providers: [
                _user_profile_resolver__WEBPACK_IMPORTED_MODULE_8__["UserProfileResolver"],
                _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_13__["FirebaseService"],
                _app_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _language_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"]
            ]
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());



/***/ }),

/***/ "./src/app/user/profile/user-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user/profile/user-profile.page.ts ***!
  \***************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _language_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/language.service */ "./src/app/language/language.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app/firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_invoices_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../assets/invoices.json */ "./src/assets/invoices.json");
var _assets_invoices_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../assets/invoices.json */ "./src/assets/invoices.json", 1);












// invoices

var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(navCtrl, toastCtrl, loadingCtrl, firebaseService, authService, route, translate, languageService, alertController, storage) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.firebaseService = firebaseService;
        this.authService = authService;
        this.route = route;
        this.translate = translate;
        this.languageService = languageService;
        this.alertController = alertController;
        this.storage = storage;
        // ngx-table start
        // ngx-table start
        this.invoices = _assets_invoices_json__WEBPACK_IMPORTED_MODULE_12__;
        this.tableStyle = 'bootstrap';
        this.customRowClass = false;
        // ngx-table end
        this.grid = false;
        this.myNumber = 5;
        this.available_languages = [];
        this.slideOpts = {
            slidesPerView: 5,
        };
        // lineChart
        this.lineChartData = [
            { data: [0, 5, 6, 8, 25, 9, 8, 24], label: 'Iphone' },
            { data: [0, 3, 1, 2, 8, 1, 5, 1], label: 'Ipad' }
        ];
        this.lineChartLabels = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
        ];
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(41, 98, 255,0.1)',
                borderColor: '#2962FF',
                pointBackgroundColor: '#2962FF',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#2962FF'
            },
            {
                // dark grey
                backgroundColor: 'rgba(116, 96, 238,0.1)',
                borderColor: '#7460ee',
                pointBackgroundColor: '#7460ee',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#7460ee'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        console.log(this.invoices);
        this.subtitle = 'This is some text within a card block.';
        //    console.log(this.companies);
        var arr = [];
        this.companiesArr = arr;
        this.checkboxForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"]({
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](""),
            provider_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](""),
            provider_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](""),
            provider_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](""),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]("")
        });
    }
    Object.defineProperty(UserProfilePage.prototype, "isShell", {
        //  companiesArr: any[];
        get: function () {
            return this.profile && this.profile.isShell ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    UserProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                _this.name = user.displayName;
                _this.photoURL = user.photoURL;
                _this.uid = user.uid;
                _this.email = user.email;
                _this.phoneNumber = user.phoneNumber;
                console.log(_this.uid, _this.email, _this.phoneNumber, _this.name, _this.photoURL);
                console.log(_this.uid);
            }
            else {
                console.log("Not authenticated");
                // No user is signed in.
            }
        });
        this.route.data.subscribe(function (resolvedRouteData) {
            var profileDataStore = resolvedRouteData["data"];
            profileDataStore.state.subscribe(function (state) {
                _this.profile = state;
                // get translations for this page to use in the Language Chooser Alert
                _this.getTranslations();
                _this.translate.onLangChange.subscribe(function () {
                    _this.getTranslations();
                });
            }, function (error) { });
        }, function (error) { });
    };
    UserProfilePage.prototype.getTranslations = function () {
        var _this = this;
        // get translations for this page to use in the Language Chooser Alert
        this.translate
            .getTranslation(this.translate.currentLang)
            .subscribe(function (translations) {
            _this.translations = translations;
        });
    };
    UserProfilePage.prototype.openLanguageChooser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.available_languages = this.languageService
                            .getLanguages()
                            .map(function (item) { return ({
                            name: item.name,
                            type: "radio",
                            label: item.name,
                            value: item.code,
                            checked: item.code === _this.translate.currentLang
                        }); });
                        return [4 /*yield*/, this.alertController.create({
                                header: this.translations.SELECT_LANGUAGE,
                                inputs: this.available_languages,
                                cssClass: "language-alert",
                                buttons: [
                                    {
                                        text: this.translations.CANCEL,
                                        role: "cancel",
                                        cssClass: "secondary",
                                        handler: function () { }
                                    },
                                    {
                                        text: this.translations.OK,
                                        handler: function (data) {
                                            if (data) {
                                                _this.translate.use(data);
                                            }
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProfilePage.prototype.ionViewWillEnter = function () {
        // case when non first timer user(ie. teacher) fill in the form when logged out, submit quotation enquiry
        // this.save();
    };
    UserProfilePage.prototype.doReorder = function (ev) {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log(ev.detail.complete(), "Dragged from index", ev.detail.from, "to", ev.detail.to);
        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        ev.detail.complete();
    };
    UserProfilePage.prototype.toggleReorderGroup = function () {
        this.reorderGroup.disabled = !this.reorderGroup.disabled;
    };
    UserProfilePage.prototype.selectedEnquiry = function (value) {
        console.log(value, value.id);
        this.selectedID = "check";
    };
    UserProfilePage.prototype.changeTargetValue = function (value) {
        switch (true) {
            case value === 1:
                return "K1";
            case value === 2:
                return "K2";
            case value === 3:
                return "K3";
            case value === 4:
                return "P1";
            case value === 5:
                return "P2";
            case value === 6:
                return "P3";
            case value === 7:
                return "P4";
            case value === 8:
                return "P5";
            case value === 9:
                return "P6";
            case value === 10:
                return "S1";
            case value === 11:
                return "S2";
            case value === 12:
                return "S3";
            case value === 13:
                return "S4";
            case value === 14:
                return "S5";
            case value === 15:
                return "S6";
            case value === 16:
                return "大專";
            case value >= 17:
                return "";
            // case value <= 3:
            //   return "K1 - K3";
            // case value > 3 && value <= 6:
            //   return "P1 - P3";
            // case value > 6 && value <= 9:
            //   return "P4 - P6";
            // case value > 9 && value <= 12:
            //   return "S1 - S3";
            // case value > 12 && value <= 15:
            //   return "S4 - S6";
            // case value > 15:
            //   return "大專";
        }
    };
    UserProfilePage.prototype.checkUserStatus = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                // this.uid = user.uid;
                // this.displayName = user.displayName;
                // this.photoURL = user.photoURL;
                var displayName_1 = user.displayName;
                var email_1 = user.email;
                var emailVerified_1 = user.emailVerified;
                var photoURL_1 = user.photoURL;
                var uid_1 = user.uid;
                var phoneNumber_1 = user.phoneNumber;
                var providerData_1 = user.providerData;
                user.getIdToken().then(function (accessToken) {
                    console.log("accessToken: ", accessToken);
                    document.getElementById("sign-in-status").textContent = "Signed in";
                    document.getElementById("sign-in").textContent = "Sign out";
                    _this.signin = "Sign out";
                    _this.displayName = displayName_1;
                    _this.uid = uid_1;
                    //  this.email = email;
                    _this.photoURL = photoURL_1;
                    document.getElementById("account-details").textContent = JSON.stringify({
                        displayName: displayName_1,
                        email: email_1,
                        emailVerified: emailVerified_1,
                        phoneNumber: phoneNumber_1,
                        photoURL: photoURL_1,
                        uid: uid_1,
                        accessToken: accessToken,
                        providerData: providerData_1
                    }, null, "  ");
                });
            }
            else {
                // User is signed out.
                document.getElementById("sign-in-status").textContent = "Signed out";
                document.getElementById("sign-in").textContent = "Sign in";
                _this.signin = "Sign in";
                document.getElementById("account-details").textContent = "null";
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserProfilePage.prototype.number = function (value, numDay) {
        //   console.log(value, numDay + 1, Number(numDay) + 1);
        var getcountday = Number(numDay) + 1;
        var limit = 1000 * 60 * 60 * 24 * getcountday + Number(value);
        this.countdownDate = new Date("Feb 13 2020").getTime();
        //     // console.log(this.countdownDate);
        var v = new Date(limit);
        var w = v.toString().substr(4, 11);
        var countdownDate = new Date(w.toString()).getTime();
        //   console.log(countdownDate, w, v, value);
        return countdownDate;
    };
    UserProfilePage.prototype.hideDropZone = function () {
        setTimeout(function () {
            console.log("hi");
        }, 3000);
    };
    // 1 check accepted and reject function done
    // 2 go to profile page and send sq as a first timer
    // 3 send email with on delete
    // async onGetEnquiryToTeacher() {
    //   this.myNumber += 1;
    //   console.log(this.myNumber);
    //   console.log(this.uid);
    //   this.firebaseService.getEnquiryToTeacher(this.uid).subscribe(res => {
    //     console.log(res);
    //     this.enquiryToT = res;
    //     this.enquiryToTLength = res.length;
    //   });
    // }
    UserProfilePage.prototype.onReadQE = function (value) {
        console.log(value);
    };
    // ngx - table start
    UserProfilePage.prototype.switchStyle = function () {
        if (this.tableStyle == 'dark') {
            this.tableStyle = 'bootstrap';
        }
        else {
            this.tableStyle = 'dark';
        }
    };
    UserProfilePage.prototype.getRowClass = function (row) {
        // console.log('class: ', row);
        var isMale = row.gender == 'male';
        if (!this.customRowClass) {
            return {};
        }
        return {
            'male-row': isMale,
            'female-row': !isMale
        };
    };
    UserProfilePage.prototype.onDetailPage = function (value, timestamp) {
        console.log(value, timestamp);
        var data = JSON.stringify(value);
        console.log(data);
        var navigationExtras = {
            queryParams: {
                data: data
            }
        };
        this.navCtrl.navigateForward(["/firebase/form-results"], navigationExtras);
    };
    UserProfilePage.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log(event, val);
        // filter our data
        // const temp = this.temp.filter(function (d) {
        //   return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        // });
        // // update the rows
        // this.rows = temp;
        // // Whenever the filter changes, always go back to the first page
        // this.table.offset = 0;
    };
    UserProfilePage.prototype.changeDateFormat = function (date) {
        var dateFormat = new Date(date).toString().substring(0, 15);
        return dateFormat;
    };
    // ngx - table end
    UserProfilePage.prototype.ionViewDidEnter = function () {
        // this.barChartPopulation();
        this.pieChartBrowser();
        this.barChart();
    };
    UserProfilePage.prototype.barChart = function () {
        highcharts__WEBPACK_IMPORTED_MODULE_11__["chart"]('barChart', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            // credits: {
            //   enabled: false
            // },
            series: [{
                    type: undefined,
                    name: '',
                    data: [107000, -31000, 63500, 20300, -2000, 10700, 31000, 63500, 2030, -2000, 31000, 6350]
                }]
        });
    };
    // barChartPopulation() {
    //   HighCharts.chart('barChart', {
    //     chart: {
    //       type: 'column'
    //     },
    //     title: {
    //       text: 'Historic World Population by Region'
    //     },
    //     xAxis: {
    //       categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    //     },
    //     yAxis: {
    //       min: 0,
    //       title: {
    //         text: 'Population (millions)',
    //         align: 'high'
    //       },
    //     },
    //     tooltip: {
    //       valueSuffix: ' millions'
    //     },
    //     plotOptions: {
    //       bar: {
    //         dataLabels: {
    //           enabled: true
    //         }
    //       }
    //     },
    //     series: [{
    //       type: undefined,
    //       name: '',
    //       data: [107, 31, 635, 203, -200]
    //     }
    //       //   , {
    //       //   type: undefined,
    //       //   name: 'Year 1900',
    //       //   data: [133, 156, 947, 408, 6]
    //       // }, {
    //       //   type: undefined,
    //       //   name: 'Year 2000',
    //       //   data: [814, 841, 3714, 727, 31]
    //       // }, {
    //       //   type: undefined,
    //       //   name: 'Year 2016',
    //       //   data: [1216, 1001, 4436, 738, 40]
    //       // }
    //     ]
    //   });
    // }
    UserProfilePage.prototype.pieChartBrowser = function () {
        highcharts__WEBPACK_IMPORTED_MODULE_11__["chart"]('pieChart', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    type: undefined,
                    data: [{
                            name: 'Chrome',
                            y: 61.41,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Internet Explorer',
                            y: 11.84
                        }, {
                            name: 'Firefox',
                            y: 10.85
                        }, {
                            name: 'Edge',
                            y: 4.67
                        }, {
                            name: 'Safari',
                            y: 4.18
                        }, {
                            name: 'Sogou Explorer',
                            y: 1.64
                        }, {
                            name: 'Opera',
                            y: 1.6
                        }, {
                            name: 'QQ',
                            y: 1.2
                        }, {
                            name: 'Other',
                            y: 2.61
                        }]
                }]
        });
    };
    UserProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"] },
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _language_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonReorderGroup"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonReorderGroup"])
    ], UserProfilePage.prototype, "reorderGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class.is-shell"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserProfilePage.prototype, "isShell", null);
    UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-profile",
            template: __webpack_require__(/*! raw-loader!./user-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/user/profile/user-profile.page.html"),
            styles: [__webpack_require__(/*! ./styles/user-profile.page.scss */ "./src/app/user/profile/styles/user-profile.page.scss"), __webpack_require__(/*! ./styles/user-profile.shell.scss */ "./src/app/user/profile/styles/user-profile.shell.scss"), __webpack_require__(/*! ./styles/user-profile.ios.scss */ "./src/app/user/profile/styles/user-profile.ios.scss"), __webpack_require__(/*! ./styles/user-profile.md.scss */ "./src/app/user/profile/styles/user-profile.md.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _app_firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"],
            _app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _language_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]])
    ], UserProfilePage);
    return UserProfilePage;
}());



/***/ }),

/***/ "./src/app/user/profile/user-profile.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/profile/user-profile.resolver.ts ***!
  \*******************************************************/
/*! exports provided: UserProfileResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileResolver", function() { return UserProfileResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");



var UserProfileResolver = /** @class */ (function () {
    function UserProfileResolver(userService) {
        this.userService = userService;
    }
    UserProfileResolver.prototype.resolve = function () {
        var dataSource = this.userService.getProfileDataSource();
        var dataStore = this.userService.getProfileStore(dataSource);
        return dataStore;
    };
    UserProfileResolver.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    UserProfileResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserProfileResolver);
    return UserProfileResolver;
}());



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module-es5.js.map