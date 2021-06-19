(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-expenses-expenses-expenses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/expenses/expenses/expenses.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/expenses/expenses/expenses.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>expenses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/firebase/expenses/expenses/expenses.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/firebase/expenses/expenses/expenses.module.ts ***!
  \***************************************************************/
/*! exports provided: ExpensesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesPageModule", function() { return ExpensesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expenses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expenses.page */ "./src/app/firebase/expenses/expenses/expenses.page.ts");







var routes = [
    {
        path: '',
        component: _expenses_page__WEBPACK_IMPORTED_MODULE_6__["ExpensesPage"]
    }
];
var ExpensesPageModule = /** @class */ (function () {
    function ExpensesPageModule() {
    }
    ExpensesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_expenses_page__WEBPACK_IMPORTED_MODULE_6__["ExpensesPage"]]
        })
    ], ExpensesPageModule);
    return ExpensesPageModule;
}());



/***/ }),

/***/ "./src/app/firebase/expenses/expenses/expenses.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/firebase/expenses/expenses/expenses.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL2V4cGVuc2VzL2V4cGVuc2VzL2V4cGVuc2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/firebase/expenses/expenses/expenses.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/firebase/expenses/expenses/expenses.page.ts ***!
  \*************************************************************/
/*! exports provided: ExpensesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesPage", function() { return ExpensesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExpensesPage = /** @class */ (function () {
    function ExpensesPage() {
    }
    ExpensesPage.prototype.ngOnInit = function () {
    };
    ExpensesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expenses',
            template: __webpack_require__(/*! raw-loader!./expenses.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/expenses/expenses/expenses.page.html"),
            styles: [__webpack_require__(/*! ./expenses.page.scss */ "./src/app/firebase/expenses/expenses/expenses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExpensesPage);
    return ExpensesPage;
}());



/***/ })

}]);
//# sourceMappingURL=firebase-expenses-expenses-expenses-module-es5.js.map