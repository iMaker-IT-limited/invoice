(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-not-found-page-not-found-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Page Not Found\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"not-found-content\">\n  <div class=\"illustration-wrapper\">\n    <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n      <app-image-shell [src]=\"'./assets/images/page-not-found.svg'\" [alt]=\"'not found page'\"></app-image-shell>\n    </app-aspect-ratio>\n  </div>\n  <div class=\"not-found-title\">404</div>\n  <div class=\"not-found-text\">Page not found</div>\n  <ion-button class=\"go-home-btn\" [routerLink]=\"['/app/categories']\" expand=\"block\" fill=\"outline\">Back to Home page</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.module.ts ***!
  \*********************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _page_not_found_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found.page */ "./src/app/page-not-found/page-not-found.page.ts");








let PageNotFoundModule = class PageNotFoundModule {
};
PageNotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _page_not_found_page__WEBPACK_IMPORTED_MODULE_7__["PageNotFound"]
                }
            ])
        ],
        declarations: [_page_not_found_page__WEBPACK_IMPORTED_MODULE_7__["PageNotFound"]]
    })
], PageNotFoundModule);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.page.ts ***!
  \*******************************************************/
/*! exports provided: PageNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return PageNotFound; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let PageNotFound = class PageNotFound {
    constructor(menu) {
        this.menu = menu;
    }
    ngOnInit() {
        this.menu.enable(false);
    }
};
PageNotFound.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
PageNotFound = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.page.html"),
        styles: [__webpack_require__(/*! ./styles/page-not-found.page.scss */ "./src/app/page-not-found/styles/page-not-found.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], PageNotFound);



/***/ }),

/***/ "./src/app/page-not-found/styles/page-not-found.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/page-not-found/styles/page-not-found.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n}\n\n.not-found-content {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.not-found-content .illustration-wrapper {\n  margin: 0px 10%;\n}\n\n.not-found-content .not-found-title {\n  text-align: center;\n  font-size: 30px;\n  font-weight: 500;\n}\n\n.not-found-content .not-found-text {\n  text-align: center;\n  font-size: 22px;\n  margin-bottom: 40px;\n  font-weight: 500;\n}\n\n.not-found-content .go-home-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9zdHlsZXMvcGFnZS1ub3QtZm91bmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9zdHlsZXMvcGFnZS1ub3QtZm91bmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7QUNERjs7QURLQTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FDRkY7O0FESUU7RUFDRSxlQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9FO0VBQ0UsV0FBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvc3R5bGVzL3BhZ2Utbm90LWZvdW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5ub3QtZm91bmQtY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gIC5pbGx1c3RyYXRpb24td3JhcHBlciB7XG4gICAgbWFyZ2luOiAwcHggMTAlO1xuICB9XG5cbiAgLm5vdC1mb3VuZC10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLm5vdC1mb3VuZC10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5nby1ob21lLWJ0biB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbn1cblxuLm5vdC1mb3VuZC1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubm90LWZvdW5kLWNvbnRlbnQgLmlsbHVzdHJhdGlvbi13cmFwcGVyIHtcbiAgbWFyZ2luOiAwcHggMTAlO1xufVxuLm5vdC1mb3VuZC1jb250ZW50IC5ub3QtZm91bmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5ub3QtZm91bmQtY29udGVudCAubm90LWZvdW5kLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5ub3QtZm91bmQtY29udGVudCAuZ28taG9tZS1idG4ge1xuICBtYXJnaW46IDBweDtcbn0iXX0= */"

/***/ })

}]);
//# sourceMappingURL=page-not-found-page-not-found-module-es2015.js.map