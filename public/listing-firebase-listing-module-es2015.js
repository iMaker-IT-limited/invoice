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

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row ion-searchbar.items-searchbar {\n  padding: 0px;\n  height: 100%;\n  contain: content;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin: 0px;\n  font-size: 18px;\n  height: initial;\n}\n\n.filters-toolbar .range-item-row {\n  --ion-grid-column-padding: 0px;\n  margin-top: var(--page-margin);\n  padding-top: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-toolbar .range-item-row .range-header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-toolbar .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-toolbar .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-toolbar .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.firebase-listing-content {\n  --background: var(--page-background);\n}\n\n.firebase-listing-content .items-list .list-item {\n  --padding-start: var(--page-margin);\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: var(--page-margin);\n  --inner-padding-top: calc(var(--page-margin) / 2);\n  --inner-padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content .items-list .list-item .user-row {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-image-wrapper {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper {\n  -webkit-padding-start: calc(var(--page-margin) / 2);\n          padding-inline-start: calc(var(--page-margin) / 2);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper .user-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper .user-info .user-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 4);\n  font-size: 12px;\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper .user-info .user-age {\n  margin: 0px;\n  font-size: 12px;\n}\n\n.firebase-listing-content .empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvbGlzdGluZy9zdHlsZXMvZmlyZWJhc2UtbGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0FDREY7O0FES0E7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQ0ZGOztBRElFO0VBQ0UsOEJBQUE7QUNGSjs7QURJSTtFQUNFLFlBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QUNKTjs7QURPSTtFQUNFLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7QUNOTjs7QURRTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QUNSUjs7QURhRTtFQUNFLDhCQUFBO0VBRUEsOEJBQUE7RUFDQSwrQkFBQTtFQUVBLHlEQUFBO0FDYko7O0FEZUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtBQ2JOOztBRGVNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ2JSOztBRGdCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNkUjs7QURrQkk7RUFFRSx5Q0FBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUNsQk47O0FEdUJBO0VBQ0Usb0NBQUE7QUNwQkY7O0FEdUJJO0VBQ0UsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9EQUFBO0FDckJOOztBRHVCTTtFQUNFLDhCQUFBO0VBRUEsV0FBQTtBQ3RCUjs7QUR3QlE7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0FDdEJWOztBRHlCUTtFQUNFLG1EQUFBO1VBQUEsa0RBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ3ZCVjs7QUQwQlk7RUFDRSwyQ0FBQTtBQ3hCZDs7QUQyQlk7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0FDekJkOztBRDRCWTtFQUNFLFdBQUE7RUFFQSxlQUFBO0FDM0JkOztBRG1DRTtFQUNFLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQ2pDSiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL2xpc3Rpbmcvc3R5bGVzL2ZpcmViYXNlLWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmZpbHRlcnMtdG9vbGJhciB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gIC5zZWFyY2hiYXItcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBpb24tc2VhcmNoYmFyLml0ZW1zLXNlYXJjaGJhciB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAvLyBvdmVycmlkZSBJb25pYyBmaXhlZCBoZWlnaHRcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIC8vIExlYXJuIG1vcmUgYWJvdXQgQ1NTIGNvbnRhaW4gcHJvcGVydHkgaGVyZTogaHR0cHM6Ly90ZXJtdmFkZXIuZ2l0aHViLmlvL2Nzcy1jb250YWluL1xuICAgICAgY29udGFpbjogY29udGVudDtcbiAgICB9XG5cbiAgICAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBmbGV4LWdyb3c6IDA7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAuZmlsdGVycy1idG4ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxuICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnJhbmdlLWl0ZW0tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAvLyBib3gtc2hhZG93IGF0IHRoZSB0b3BcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG5cbiAgICAucmFuZ2UtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgLnJhbmdlLXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cblxuICAgICAgLnJhbmdlLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmFuZ2UtY29udHJvbCB7XG4gICAgICAvLyBvdmVycmlkZSB0aGUgcGluIGNvbG9yXG4gICAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblxuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgfVxuICB9XG59XG5cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLml0ZW1zLWxpc3Qge1xuICAgIC5saXN0LWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0taW5uZXItcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAudXNlci1yb3cge1xuICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudXNlci1hZ2Uge1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgLy8gY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5lbXB0eS1saXN0LW1lc3NhZ2Uge1xuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cblxuLmZpbHRlcnMtdG9vbGJhciB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmZpbHRlcnMtdG9vbGJhciAuc2VhcmNoYmFyLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cgaW9uLXNlYXJjaGJhci5pdGVtcy1zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgY29udGFpbjogY29udGVudDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWdyb3c6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IC5jYWxsLXRvLWFjdGlvbi1jb2wgLmZpbHRlcnMtYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiBpbml0aWFsO1xufVxuLmZpbHRlcnMtdG9vbGJhciAucmFuZ2UtaXRlbS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLmZpbHRlcnMtdG9vbGJhciAucmFuZ2UtaXRlbS1yb3cgLnJhbmdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZmlsdGVycy10b29sYmFyIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtaGVhZGVyIC5yYW5nZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy10b29sYmFyIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtaGVhZGVyIC5yYW5nZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uZmlsdGVycy10b29sYmFyIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtY29udHJvbCB7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCAuaXRlbXMtbGlzdCAubGlzdC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQgLml0ZW1zLWxpc3QgLmxpc3QtaXRlbSAudXNlci1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCAuaXRlbXMtbGlzdCAubGlzdC1pdGVtIC51c2VyLXJvdyAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCAuaXRlbXMtbGlzdCAubGlzdC1pdGVtIC51c2VyLXJvdyAudXNlci1kYXRhLXdyYXBwZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IC5pdGVtcy1saXN0IC5saXN0LWl0ZW0gLnVzZXItcm93IC51c2VyLWRhdGEtd3JhcHBlciAudXNlci1pbmZvOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCAuaXRlbXMtbGlzdCAubGlzdC1pdGVtIC51c2VyLXJvdyAudXNlci1kYXRhLXdyYXBwZXIgLnVzZXItaW5mbyAudXNlci1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQgLml0ZW1zLWxpc3QgLmxpc3QtaXRlbSAudXNlci1yb3cgLnVzZXItZGF0YS13cmFwcGVyIC51c2VyLWluZm8gLnVzZXItYWdlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQgLmVtcHR5LWxpc3QtbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

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