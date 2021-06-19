(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listing-firebase-listing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/listing/firebase-listing.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/listing/firebase-listing.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content></ion-content>"

/***/ }),

/***/ "./src/app/firebase/listing/firebase-listing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/firebase/listing/firebase-listing.module.ts ***!
  \*************************************************************/
/*! exports provided: FirebaseListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseListingPageModule", function() { return FirebaseListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _firebase_listing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./firebase-listing.page */ "./src/app/firebase/listing/firebase-listing.page.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./firebase-listing.resolver */ "./src/app/firebase/listing/firebase-listing.resolver.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../app/services/auth.service */ "./src/app/services/auth.service.ts");











const routes = [
    {
        path: "",
        component: _firebase_listing_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingPage"],
        resolve: {
            data: _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseListingResolver"]
        }
    }
];
let FirebaseListingPageModule = class FirebaseListingPageModule {
};
FirebaseListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_firebase_listing_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingPage"]],
        providers: [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"], _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseListingResolver"]]
    })
], FirebaseListingPageModule);



/***/ }),

/***/ "./src/app/firebase/listing/firebase-listing.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/firebase/listing/firebase-listing.page.ts ***!
  \***********************************************************/
/*! exports provided: FirebaseListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseListingPage", function() { return FirebaseListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FirebaseListingPage = class FirebaseListingPage {
    constructor() { }
    ngOnInit() { }
};
FirebaseListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-firebase-listing",
        template: __webpack_require__(/*! raw-loader!./firebase-listing.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/listing/firebase-listing.page.html"),
        styles: [__webpack_require__(/*! ./styles/firebase-listing.page.scss */ "./src/app/firebase/listing/styles/firebase-listing.page.scss"), __webpack_require__(/*! ./styles/firebase-listing.ios.scss */ "./src/app/firebase/listing/styles/firebase-listing.ios.scss"), __webpack_require__(/*! ./styles/firebase-listing.shell.scss */ "./src/app/firebase/listing/styles/firebase-listing.shell.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FirebaseListingPage);



/***/ }),

/***/ "./src/app/firebase/listing/firebase-listing.resolver.ts":
/*!***************************************************************!*\
  !*** ./src/app/firebase/listing/firebase-listing.resolver.ts ***!
  \***************************************************************/
/*! exports provided: FirebaseListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseListingResolver", function() { return FirebaseListingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FirebaseListingResolver = class FirebaseListingResolver {
    constructor() { }
};
FirebaseListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FirebaseListingResolver);



/***/ }),

/***/ "./src/app/firebase/listing/styles/firebase-listing.ios.scss":
/*!*******************************************************************!*\
  !*** ./src/app/firebase/listing/styles/firebase-listing.ios.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(.plt-mobile.ios) .list-item .user-data-wrapper {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLmlvcy5zY3NzIiwic3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLmlvcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvbGlzdGluZy9zdHlsZXMvZmlyZWJhc2UtbGlzdGluZy5pb3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUuaW9zKSB7XG4gIC8vIEN1c3RvbSBwbGF0Zm9ybSBzdHlsZXMgaGVyZVxuICAubGlzdC1pdGVtIHtcbiAgICAudXNlci1kYXRhLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QtY29udGV4dCgucGx0LW1vYmlsZS5pb3MpIC5saXN0LWl0ZW0gLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/firebase/listing/styles/firebase-listing.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/firebase/listing/styles/firebase-listing.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row ion-searchbar.items-searchbar {\n  padding: 0px;\n  height: 100%;\n  contain: content;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin: 0px;\n  font-size: 18px;\n  height: initial;\n}\n\n.filters-toolbar .range-item-row {\n  --ion-grid-column-padding: 0px;\n  margin-top: var(--page-margin);\n  padding-top: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-toolbar .range-item-row .range-header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-toolbar .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-toolbar .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-toolbar .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.firebase-listing-content {\n  --background: var(--page-background);\n}\n\n.firebase-listing-content .items-list .list-item {\n  --padding-start: var(--page-margin);\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: var(--page-margin);\n  --inner-padding-top: calc(var(--page-margin) / 2);\n  --inner-padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content .items-list .list-item .user-row {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-image-wrapper {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper {\n  -webkit-padding-start: calc(var(--page-margin) / 2);\n          padding-inline-start: calc(var(--page-margin) / 2);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper .user-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper .user-info .user-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 4);\n  font-size: 12px;\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper .user-info .user-age {\n  margin: 0px;\n  font-size: 12px;\n}\n\n.firebase-listing-content .empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvbGlzdGluZy9zdHlsZXMvZmlyZWJhc2UtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0FDREY7O0FES0E7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQ0ZGOztBRElFO0VBQ0UsOEJBQUE7QUNGSjs7QURJSTtFQUNFLFlBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QUNKTjs7QURPSTtFQUNFLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtBQ05OOztBRFFNO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBRUEsZUFBQTtBQ1JSOztBRGFFO0VBQ0UsOEJBQUE7RUFFQSw4QkFBQTtFQUNBLCtCQUFBO0VBRUEseURBQUE7QUNiSjs7QURlSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0FDYk47O0FEZU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDYlI7O0FEZ0JNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ2RSOztBRGtCSTtFQUVFLHlDQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ2xCTjs7QUR1QkE7RUFDRSxvQ0FBQTtBQ3BCRjs7QUR1Qkk7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0RBQUE7QUNyQk47O0FEdUJNO0VBQ0UsOEJBQUE7RUFFQSxXQUFBO0FDdEJSOztBRHdCUTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7QUN0QlY7O0FEeUJRO0VBQ0UsbURBQUE7VUFBQSxrREFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDdkJWOztBRDBCWTtFQUNFLDJDQUFBO0FDeEJkOztBRDJCWTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7QUN6QmQ7O0FENEJZO0VBQ0UsV0FBQTtFQUVBLGVBQUE7QUMzQmQ7O0FEbUNFO0VBQ0Usb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FDakNKIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvbGlzdGluZy9zdHlsZXMvZmlyZWJhc2UtbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZmlsdGVycy10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgLnNlYXJjaGJhci1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGlvbi1zZWFyY2hiYXIuaXRlbXMtc2VhcmNoYmFyIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLy8gTGVhcm4gbW9yZSBhYm91dCBDU1MgY29udGFpbiBwcm9wZXJ0eSBoZXJlOiBodHRwczovL3Rlcm12YWRlci5naXRodWIuaW8vY3NzLWNvbnRhaW4vXG4gICAgICBjb250YWluOiBjb250ZW50O1xuICAgIH1cblxuICAgIC5jYWxsLXRvLWFjdGlvbi1jb2wge1xuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIGZsZXgtZ3JvdzogMDtcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgIC5maWx0ZXJzLWJ0biB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XG4gICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmFuZ2UtaXRlbS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgIC5yYW5nZS1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAucmFuZ2UtdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuXG4gICAgICAucmFuZ2UtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yYW5nZS1jb250cm9sIHtcbiAgICAgIC8vIG92ZXJyaWRlIHRoZSBwaW4gY29sb3JcbiAgICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICB9XG4gIH1cbn1cblxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAuaXRlbXMtbGlzdCB7XG4gICAgLmxpc3QtaXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC51c2VyLXJvdyB7XG4gICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1kYXRhLXdyYXBwZXIge1xuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyLWFnZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAvLyBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmVtcHR5LWxpc3QtbWVzc2FnZSB7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpO1xuICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59IiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuXG4uZmlsdGVycy10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLmZpbHRlcnMtdG9vbGJhciAuc2VhcmNoYmFyLXJvdyBpb24tc2VhcmNoYmFyLml0ZW1zLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb250YWluOiBjb250ZW50O1xufVxuLmZpbHRlcnMtdG9vbGJhciAuc2VhcmNoYmFyLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCAuZmlsdGVycy1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IGluaXRpYWw7XG59XG4uZmlsdGVycy10b29sYmFyIC5yYW5nZS1pdGVtLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4uZmlsdGVycy10b29sYmFyIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1jb250cm9sIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IC5pdGVtcy1saXN0IC5saXN0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCAuaXRlbXMtbGlzdCAubGlzdC1pdGVtIC51c2VyLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IC5pdGVtcy1saXN0IC5saXN0LWl0ZW0gLnVzZXItcm93IC51c2VyLWltYWdlLXdyYXBwZXIge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IC5pdGVtcy1saXN0IC5saXN0LWl0ZW0gLnVzZXItcm93IC51c2VyLWRhdGEtd3JhcHBlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQgLml0ZW1zLWxpc3QgLmxpc3QtaXRlbSAudXNlci1yb3cgLnVzZXItZGF0YS13cmFwcGVyIC51c2VyLWluZm86bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IC5pdGVtcy1saXN0IC5saXN0LWl0ZW0gLnVzZXItcm93IC51c2VyLWRhdGEtd3JhcHBlciAudXNlci1pbmZvIC51c2VyLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCAuaXRlbXMtbGlzdCAubGlzdC1pdGVtIC51c2VyLXJvdyAudXNlci1kYXRhLXdyYXBwZXIgLnVzZXItaW5mbyAudXNlci1hZ2Uge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCAuZW1wdHktbGlzdC1tZXNzYWdlIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpO1xuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/firebase/listing/styles/firebase-listing.shell.scss":
/*!*********************************************************************!*\
  !*** ./src/app/firebase/listing/styles/firebase-listing.shell.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 80%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.user-age > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.user-age > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2xpc3Rpbmcvc3R5bGVzL2ZpcmViYXNlLWxpc3Rpbmcuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1EQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0FDQ0o7O0FER0E7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUNBRjs7QURFRTtFQUNFLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLnVzZXItYWdlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNDAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufSJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=listing-firebase-listing-module-es2015.js.map