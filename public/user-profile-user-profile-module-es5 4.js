(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user/profile/user-profile.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/profile/user-profile.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content class=\"user-profile-content\">\n\n    <ion-item-divider sticky>\n        <ion-title style=\"padding: 10px;\">Dashboard</ion-title>\n    </ion-item-divider>\n\n    <!-- <ion-progress-bar color=\"theme\" type=\"indeterminate\"></ion-progress-bar> -->\n    <app-rating-input *ngIf=\"!invoices\"></app-rating-input>\n\n    <main>\n\n        <div class=\"tabset\">\n            <!-- Tab 1 -->\n            <input type=\"radio\" name=\"tabset\" id=\"tab1\" aria-controls=\"marzen\" checked>\n            <label for=\"tab1\">Set up Company detail</label>\n            <!-- Tab 2 -->\n            <input type=\"radio\" name=\"tabset\" id=\"tab2\" aria-controls=\"rauchbier\">\n            <label for=\"tab2\">Add a new customer</label>\n            <!-- Tab 3 -->\n            <input type=\"radio\" name=\"tabset\" id=\"tab3\" aria-controls=\"dunkles\">\n            <label for=\"tab3\">Add new items / services</label>\n            <!-- Tab 4 -->\n            <input type=\"radio\" name=\"tabset\" id=\"tab4\" aria-controls=\"estimate\">\n            <label for=\"tab4\">Create a new estimate</label>\n\n            <!-- <ion-button (click)=\"onDismiss()\">\n                <ion-icon name=\"close\"></ion-icon>\n            </ion-button> -->\n            <div class=\"tab-panels\">\n                <section id=\"marzen\" class=\"tab-panel\">\n                    <ion-title color=\"theme\"> Put Your Best Foot Forward </ion-title>\n                    <br>\n                    <br>\n                    Your name and company details appear on invoices, reports and more.\n                    <br>\n                    <br>\n                    <ion-button color=\"theme\" (click)=\"onCompanyProfile()\">Review Company Profile</ion-button>\n                    &nbsp;\n                    <!-- <ion-button>Add My Brand</ion-button> -->\n                </section>\n                <section id=\"rauchbier\" class=\"tab-panel\">\n                    <ion-title color=\"theme\"> It All Starts with Clients\n                    </ion-title>\n                    <br>\n                    <br>\n                    Get yourself up and running with clients for future invoicing and projects.\n                    <br>\n                    <br>\n                    <ion-button color=\"theme\" (click)=\"onCreateClient()\">Add a Client</ion-button>\n                    &nbsp;\n                    <!-- <ion-button>Import Clients from a CSV</ion-button> -->\n                </section>\n                <section id=\"dunkles\" class=\"tab-panel\">\n                    <ion-title color=\"theme\"> Get Ready to Invoice </ion-title>\n                    <br>\n                    <br>\n                    Steamline billing your clients by adding items and services.\n                    <br>\n                    <br>\n                    <ion-button color=\"theme\" (click)=\"onAddItem()\">Add Items and Services</ion-button>\n                    &nbsp;\n\n                </section>\n                <section id=\"estimate\" class=\"tab-panel\">\n                    <ion-title color=\"theme\"> Start Your First Estimate </ion-title>\n                    <br>\n                    <br>\n                    It's simple to create estimate. Add your logo, services and payment terms.\n                    <br>\n                    <br>\n                    <ion-button color=\"theme\" (click)=\"onCreateEstimate()\">Create an Estimate</ion-button>\n                    &nbsp;\n                </section>\n            </div>\n\n\n        </div>\n\n        <ion-card style=\"box-shadow: none;\">\n            <ion-card-header>\n                <!-- <div class=\"bar-chart secondary\" data-total=\"76\" animated>\n                    <span class=\"bar-chart--inner\" id=\"bar-chart-inner\" style=\"width:56%;\"></span>\n\n                </div> -->\n                <ion-progress-bar style=\"border-radius: 0px; height: 15px; padding-bottom: 5px;\" color=\"theme\"\n                    value=\"0.2\">\n                </ion-progress-bar>\n\n\n\n            </ion-card-header>\n            <ion-card-content>\n                <ion-badge color=\"theme\" style=\"padding: 5px; float: left\">Paid</ion-badge>\n                <ion-badge color=\"secondary\" style=\"padding: 5px; float: right\">Unpaid</ion-badge>\n\n            </ion-card-content>\n        </ion-card>\n\n        <div style=\"height: 20px;\"></div>\n        <div class=\"flex-grid\">\n            <!-- //// -->\n\n\n            <!-- //// -->\n            <div>\n                <h2>Total Profit</h2>\n                <ion-card class=\"tag sale\">HKD $ {{totalProfit}}</ion-card>\n            </div>\n\n            <div>\n                <h2>Total Receivables : </h2>\n                <ion-card class=\"tag receipt\">HKD $ {{totalReceivable}}</ion-card>\n            </div>\n\n            <!-- <div>\n                <h2>Total Expenses</h2>\n                <ion-card class=\"tag expense\">HKD 0.00</ion-card>\n            </div> -->\n        </div>\n\n        <!-- <ion-slides style=\"background: #f9f9fb; border-radius: 0px;\" pager=\"false\" [options]=\"slideOpts\">\n            <ion-slide>\n                <ion-card style=\"box-shadow: none;\">\n                    <ion-card-header>\n                        Total Outstanding Receivables\n                    </ion-card-header>\n                    <ion-card-content>\n                        HKD 0.00\n                    </ion-card-content>\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card style=\"box-shadow: none;\">\n                    <ion-card-header>\n                        Total Outstanding Receivables\n                    </ion-card-header>\n                    <ion-card-content>\n                        HKD 0.00\n                    </ion-card-content>\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card style=\"box-shadow: none;\">\n                    <ion-card-header>\n                        Total Outstanding Receivables\n                    </ion-card-header>\n                    <ion-card-content>\n                        HKD 0.00\n                    </ion-card-content>\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card style=\"box-shadow: none;\">\n                    <ion-card-header>\n                        Total Outstanding Receivables\n                    </ion-card-header>\n                    <ion-card-content>\n                        HKD 0.00\n                    </ion-card-content>\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card style=\"box-shadow: none;\">\n                    <ion-card-header>\n                        Total Outstanding Receivables\n                    </ion-card-header>\n                    <ion-card-content>\n                        HKD 0.00\n                    </ion-card-content>\n                </ion-card>\n            </ion-slide>\n        </ion-slides> -->\n\n        <div class=\"flex-grid\">\n\n            <div>\n                <h2>Your Profit</h2>\n                <div id=\"barChart\" style=\"margin: 0 auto;\"></div>\n            </div>\n\n        </div>\n\n        <!-- <div class=\"flex-grid\">\n            <div>\n                <h2>Your Top Expense</h2>\n                <div id=\"pieChart\" style=\"margin: 0 auto;\"></div>\n            </div>\n\n        </div> -->\n        <!-- <div class=\"\">\n            <div>\n                <h2>Headline</h2>\n                <ngx-datatable [rows]=\"invoices\" [ngClass]=\"tableStyle\" [rowHeight]=\"auto\" [headerHeight]=\"50\"\n                    [columnMode]=\"'force'\" [rowClass]=\"getRowClass.bind(this)\" [limit]=\"10\" [footerHeight]=\"50\">\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            DATE\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <div>{{row['Invoice Date']}}</div>\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            INVOICE#\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <div class=\"button\" (click)=\"onDetailPage(row)\">\n                                {{row['Invoice Number']}}\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            ORDER NUMBER\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['Estimate Number']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            CUSTOMER NAME\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['Customer Name']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            STATUS\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            {{row['Invoice Status']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            DUE DATE\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            <div class=\"invoiced\"></div>\n                            {{row['Due Date']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            AMOUNT\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            HKD {{row['Total']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n\n                    <ngx-datatable-column sortable=\"true\">\n                        <ng-template let-column=\"column\" ngx-datatable-header-template>\n                            BALANCE DUE\n                        </ng-template>\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                            HKD {{row['Balance']}}\n                        </ng-template>\n                    </ngx-datatable-column>\n                </ngx-datatable>\n            </div>\n        </div> -->\n    </main>\n\n    <app-global-banner></app-global-banner>\n</ion-content>\n<app-global-footer></app-global-footer>"

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
        this.navParams = new _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"];
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
        this.uid = this.authService.uid();
        this.email = this.authService.email();
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
                console.log(
                //   this.uid,
                //  this.email,
                _this.phoneNumber, _this.name, _this.photoURL);
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
        this.getReport();
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
                    //   this.uid = uid;
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
    UserProfilePage.prototype.onCompanyProfile = function () {
        // this.navCtrl.navigateForward("/firebase/contacts");
        this.navCtrl.navigateForward("/firebase/company-profile");
    };
    UserProfilePage.prototype.onCreateClient = function () {
        // this.navCtrl.navigateForward("/firebase/contacts");
        this.navCtrl.navigateForward("/firebase/contacts");
    };
    UserProfilePage.prototype.onAddItem = function () {
        // this.navCtrl.navigateForward("/firebase/contacts");
        this.navCtrl.navigateForward("/firebase/create%23inventory");
    };
    UserProfilePage.prototype.onCreateEstimate = function () {
        // this.navCtrl.navigateForward("/firebase/contacts");
        this.navCtrl.navigateForward("/firebase/create%23quotes");
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
        // this.pieChartBrowser();
        this.barChart();
    };
    UserProfilePage.prototype.getCompanyLogo = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.getCompanyLogo(this.uid).subscribe(function (res) {
            _this.downloadURL = res['userData']['downloadURL'];
            console.log(res, _this.downloadURL);
        });
    };
    UserProfilePage.prototype.getReport = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.getReceivables(this.uid).subscribe(function (res) {
            _this.totalReceivable = res['userData']['totalReceivable'];
            console.log(res, _this.totalReceivable);
        });
        this.firebaseService.getProfit(this.uid).subscribe(function (res) {
            _this.totalProfit = res['userData']['totalProfit'];
            console.log(res, _this.totalProfit);
        });
        // setTimeout(function () {
        //   console.log(this.totalProfit, this.totalReceivable);
        // }, 3000);
        // this.ratio = this.totalProfit / this.totalReceivable;
        // console.log(this.ratio);
    };
    // getReceivables() {
    //   console.log(this.email, this.uid);
    //   this.firebaseService.getReceivables(this.uid).subscribe(res => {
    //     this.totalReceivable = res['userData']['totalReceivable'];
    //     console.log(res, this.totalReceivable);
    //   })
    // }
    // getProfit() {
    //   console.log(this.email, this.uid);
    //   this.firebaseService.getProfit(this.uid).subscribe(res => {
    //     this.totalProfit = res['userData']['totalProfit'];
    //     console.log(res, this.totalProfit);
    //   })
    // }
    UserProfilePage.prototype.returnRatio = function (totalProfit, totalReceivable) {
        console.log(totalProfit, totalReceivable);
        var ratio = (totalProfit / totalReceivable) * 100;
        // this.ratio = ratio;
        return ratio;
    };
    UserProfilePage.prototype.barChart = function () {
        highcharts__WEBPACK_IMPORTED_MODULE_11__["chart"]('barChart', {
            chart: {
                type: 'area'
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