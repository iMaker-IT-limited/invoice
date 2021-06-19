(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-details-firebase-user-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/user/details/firebase-user-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/user/details/firebase-user-details.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header></ion-header>\n\n<ion-content></ion-content>"

/***/ }),

/***/ "./src/app/firebase/user/details/firebase-user-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/firebase/user/details/firebase-user-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: FirebaseUserDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsPageModule", function() { return FirebaseUserDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _firebase_user_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./firebase-user-details.page */ "./src/app/firebase/user/details/firebase-user-details.page.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./firebase-user-details.resolver */ "./src/app/firebase/user/details/firebase-user-details.resolver.ts");










// import { AuthService } from '../../../app/services/auth.service';
const routes = [
    {
        path: "",
        component: _firebase_user_details_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseUserDetailsPage"],
        resolve: {
            data: _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseUserDetailsResolver"]
        }
    }
];
let FirebaseUserDetailsPageModule = class FirebaseUserDetailsPageModule {
};
FirebaseUserDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        declarations: [_firebase_user_details_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseUserDetailsPage"]],
        providers: [
            _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"],
            //   AuthService,
            _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseUserDetailsResolver"]
        ]
    })
], FirebaseUserDetailsPageModule);



/***/ }),

/***/ "./src/app/firebase/user/details/firebase-user-details.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/firebase/user/details/firebase-user-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: FirebaseUserDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsPage", function() { return FirebaseUserDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");





let FirebaseUserDetailsPage = class FirebaseUserDetailsPage {
    // @HostBinding("class.is-shell") get isShell() {
    //   return (this.user && this.user.isShell) ||
    //     (this.relatedUsers && this.relatedUsers.isShell)
    //     ? true
    //     : false;
    // }
    // @HostBinding("class.is-shell") get isShell() {
    //   return (this.user && this.user.isShell) ||
    //     (this.relatedUsers && this.relatedUsers.isShell)
    //     ? true
    //     : false;
    // }
    constructor(firebaseService, modalController, router, route) {
        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe(resolvedRouteData => {
            const resolvedDataStores = resolvedRouteData["data"];
            const userId = resolvedDataStores.userId;
            this.userId = userId;
            console.log(this.userId);
            // const combinedDataStore: DataStore<FirebaseCombinedUserModel> =
            //   resolvedDataStores.user;
            // const relatedUsersDataStore: DataStore<Array<FirebaseListingItemModel>> =
            //   resolvedDataStores.relatedUsers;
            // combinedDataStore.state.subscribe(state => {
            //   this.user = state;
            // });
            // console.log(userId, resolvedRouteData, combinedDataStore);
            // relatedUsersDataStore.state.subscribe(state => {
            //   this.relatedUsers = state;
            // });
        });
    }
    ionViewDidEnter() {
        // this.navParams.get("data").subscribe(res => {
        //   console.log(res);
        // });
    }
    updateSupplier() {
        // this.firebaseService.updateSupplier(this.userId);
    }
    changeTargetValue(value) {
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
            case value >= 16:
                return "大專";
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
    }
};
FirebaseUserDetailsPage.ctorParameters = () => [
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
FirebaseUserDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-firebase-user-details",
        template: __webpack_require__(/*! raw-loader!./firebase-user-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/user/details/firebase-user-details.page.html"),
        styles: [__webpack_require__(/*! ./styles/firebase-user-details.page.scss */ "./src/app/firebase/user/details/styles/firebase-user-details.page.scss"), __webpack_require__(/*! ./styles/firebase-user-details.shell.scss */ "./src/app/firebase/user/details/styles/firebase-user-details.shell.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], FirebaseUserDetailsPage);



/***/ }),

/***/ "./src/app/firebase/user/details/firebase-user-details.resolver.ts":
/*!*************************************************************************!*\
  !*** ./src/app/firebase/user/details/firebase-user-details.resolver.ts ***!
  \*************************************************************************/
/*! exports provided: FirebaseUserDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsResolver", function() { return FirebaseUserDetailsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FirebaseUserDetailsResolver = class FirebaseUserDetailsResolver {
    constructor() { }
};
FirebaseUserDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FirebaseUserDetailsResolver);



/***/ }),

/***/ "./src/app/firebase/user/details/styles/firebase-user-details.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/firebase/user/details/styles/firebase-user-details.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-related-users-gutter: calc(var(--page-margin) / 2);\n}\n\n.user-content {\n  --background: var(--page-background);\n}\n\n.user-content .user-info-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.user-content .user-info-row .user-image-col {\n  margin: 0px auto;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-info-row .user-image-col .user-image {\n  border-radius: 50%;\n}\n\n.user-content .user-info-row .user-details-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.user-content .user-info-row .user-details-col .user-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  min-width: 40%;\n}\n\n.user-content .user-info-row .user-details-col .user-age {\n  font-size: 14px;\n  font-weight: 300;\n  min-width: 60%;\n}\n\n.user-content .user-info-row .actions-col {\n  text-align: center;\n  margin-top: var(--page-margin);\n}\n\n.user-content .user-info-row .actions-col .action-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 4ch;\n  height: 4ch;\n}\n\n.user-content .user-info-row .actions-col .action-btn .btn-icon {\n  font-size: 24px;\n}\n\n.user-content .content-section {\n  padding: var(--page-margin);\n  border-top: solid 1px var(--ion-color-light-shade);\n}\n\n.user-content .content-section .section-header {\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.user-content .user-languages-wrapper .language-item-row {\n  --ion-grid-column-padding: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-languages-wrapper .language-item-row .language-item {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.user-content .user-languages-wrapper .language-item-row .language-item .language-name {\n  display: block;\n  font-size: 16px;\n  font-weight: 300;\n  margin-bottom: calc(var(--page-margin) / 3);\n}\n\n.user-content .user-languages-wrapper .language-item-row .language-item .language-score {\n  --buffer-background: rgba(var(--ion-color-secondary-rgb), .20);\n  --progress-background: rgba(var(--ion-color-secondary-rgb), 1);\n  height: var(--page-margin);\n  border-radius: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-experience-wrapper .experience-list {\n  margin: 0px;\n  padding: 0px;\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item {\n  --min-height: initial;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item:not(:last-child) {\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item .experience-list-icon {\n  margin: 0px;\n  margin-right: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item .experience-label {\n  font-size: 16px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.user-content .related-users-wrapper .related-users-row {\n  --ion-grid-columns: 7;\n  --ion-grid-column-padding: 0px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  will-change: scroll-position;\n  margin-left: calc(var(--page-margin) * -1);\n  margin-right: calc(var(--page-margin) * -1);\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.user-content .related-users-wrapper .related-users-row::-webkit-scrollbar {\n  display: none;\n}\n\n.user-content .related-users-wrapper .related-users-row::before, .user-content .related-users-wrapper .related-users-row::after {\n  content: \"\";\n  flex: 0 0 calc(var(--page-margin) - var(--page-related-users-gutter));\n}\n\n.user-content .related-users-wrapper .related-users-row .related-user-item {\n  padding: 0px var(--page-related-users-gutter);\n}\n\n.user-content .related-users-wrapper .related-users-row .related-user-item .related-user-name {\n  display: block;\n  text-align: center;\n  margin-top: calc(var(--page-margin) / 2);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL3VzZXIvZGV0YWlscy9zdHlsZXMvZmlyZWJhc2UtdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL3RoZW1lL21peGlucy9zY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBRUEseURBQUE7QUNKRjs7QURRQTtFQUNFLG9DQUFBO0FDTEY7O0FEWUU7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0FDWEo7O0FEYUk7RUFDRSxnQkFBQTtFQUNBLDJDQUFBO0FDWE47O0FEYU07RUFDRSxrQkFBQTtBQ1hSOztBRGVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2JOOztBRGVNO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtBQ2JSOztBRGdCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNkUjs7QURrQkk7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0FDaEJOOztBRGtCTTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0FDakJSOztBRG1CUTtFQUNFLGVBQUE7QUNqQlY7O0FEdUJFO0VBQ0UsMkJBQUE7RUFDQSxrREFBQTtBQ3JCSjs7QUR1Qkk7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7QUNyQk47O0FEMEJJO0VBQ0UsOEJBQUE7RUFFQSwyQ0FBQTtBQ3pCTjs7QUQyQk07RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ3pCUjs7QUQyQlE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUN6QlY7O0FENEJRO0VBQ0UsOERBQUE7RUFDQSw4REFBQTtFQUVBLDBCQUFBO0VBQ0EsMkNBQUE7QUMzQlY7O0FEa0NJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNoQ047O0FEa0NNO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ2hDUjs7QURrQ1E7RUFDRSw0Q0FBQTtBQ2hDVjs7QURtQ1E7RUFDRSxXQUFBO0VBQ0EsMENBQUE7QUNqQ1Y7O0FEb0NRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ2xDVjs7QUR5Q0k7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFRWxKSix3QkFBQTtFQUdBLDhCQUFBO0VBQ0EscUJBQUE7QUR5R0Y7O0FDdEdFO0VBQ0UsYUFBQTtBRHdHSjs7QURzQ007RUFFRSxXQUFBO0VBQ0EscUVBQUE7QUNyQ1I7O0FEd0NNO0VBQ0UsNkNBQUE7QUN0Q1I7O0FEd0NRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0FDdENWIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvdXNlci9kZXRhaWxzL3N0eWxlcy9maXJlYmFzZS11c2VyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4udXNlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC8vIHdpZHRoOiA4MCU7XG4gIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC51c2VyLWluZm8tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAudXNlci1pbWFnZS1jb2wge1xuICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VyLWRldGFpbHMtY29sIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICBtaW4td2lkdGg6IDQwJTtcbiAgICAgIH1cblxuICAgICAgLnVzZXItYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBtaW4td2lkdGg6IDYwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9ucy1jb2wge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICAuYWN0aW9uLWJ0biB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAgIHdpZHRoOiA0Y2g7XG4gICAgICAgIGhlaWdodDogNGNoO1xuXG4gICAgICAgIC5idG4taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuICAudXNlci1sYW5ndWFnZXMtd3JhcHBlciB7XG4gICAgLmxhbmd1YWdlLWl0ZW0tcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgLmxhbmd1YWdlLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcblxuICAgICAgICAubGFuZ3VhZ2UtbmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYW5ndWFnZS1zY29yZSB7XG4gICAgICAgICAgLS1idWZmZXItYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIC4yMCk7XG4gICAgICAgICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgMSk7XG5cbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnVzZXItZXhwZXJpZW5jZS13cmFwcGVyIHtcbiAgICAuZXhwZXJpZW5jZS1saXN0IHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuXG4gICAgICAuZXhwZXJpZW5jZS1pdGVtIHtcbiAgICAgICAgLS1taW4taGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICAuZXhwZXJpZW5jZS1saXN0LWljb24ge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5leHBlcmllbmNlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIge1xuICAgIC5yZWxhdGVkLXVzZXJzLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDc7IC8vIFdlIHdhbnQgdG8gc2hvdyB0aHJlZSB1c2VycyBhbmQgYSBoYWxmLiBFYWNoIHVzZXIgZmlsbHMgMiBjb2xzID0+ICgzLjUgKiAyID0gNyBjb2xzKVxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgIHdpbGwtY2hhbmdlOiBzY3JvbGwtcG9zaXRpb247XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuXG4gICAgICBAaW5jbHVkZSBoaWRlLXNjcm9sbGJhcnMoKTtcblxuICAgICAgJjo6YmVmb3JlLFxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZmxleDogMCAwIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcikpO1xuICAgICAgfVxuXG4gICAgICAucmVsYXRlZC11c2VyLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcik7XG5cbiAgICAgICAgLnJlbGF0ZWQtdXNlci1uYW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cblxuLnVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItaW1hZ2UtY29sIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItaW1hZ2UtY29sIC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnVzZXItY29udGVudCAudXNlci1pbmZvLXJvdyAudXNlci1kZXRhaWxzLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItZGV0YWlscy1jb2wgLnVzZXItbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBtaW4td2lkdGg6IDQwJTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItZGV0YWlscy1jb2wgLnVzZXItYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtaW4td2lkdGg6IDYwJTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLmFjdGlvbnMtY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWluZm8tcm93IC5hY3Rpb25zLWNvbCAuYWN0aW9uLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLmFjdGlvbnMtY29sIC5hY3Rpb24tYnRuIC5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi51c2VyLWNvbnRlbnQgLmNvbnRlbnQtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG4udXNlci1jb250ZW50IC5jb250ZW50LXNlY3Rpb24gLnNlY3Rpb24taGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy13cmFwcGVyIC5sYW5ndWFnZS1pdGVtLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLXdyYXBwZXIgLmxhbmd1YWdlLWl0ZW0tcm93IC5sYW5ndWFnZS1pdGVtIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG4udXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy13cmFwcGVyIC5sYW5ndWFnZS1pdGVtLXJvdyAubGFuZ3VhZ2UtaXRlbSAubGFuZ3VhZ2UtbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG59XG4udXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy13cmFwcGVyIC5sYW5ndWFnZS1pdGVtLXJvdyAubGFuZ3VhZ2UtaXRlbSAubGFuZ3VhZ2Utc2NvcmUge1xuICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjIwKTtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgMSk7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLXdyYXBwZXIgLmV4cGVyaWVuY2UtbGlzdCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4udXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4udXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLXdyYXBwZXIgLmV4cGVyaWVuY2UtbGlzdCAuZXhwZXJpZW5jZS1pdGVtIC5leHBlcmllbmNlLWxpc3QtaWNvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0gLmV4cGVyaWVuY2UtbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVzZXItY29udGVudCAucmVsYXRlZC11c2Vycy13cmFwcGVyIC5yZWxhdGVkLXVzZXJzLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogNztcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG4udXNlci1jb250ZW50IC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIgLnJlbGF0ZWQtdXNlcnMtcm93Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXNlci1jb250ZW50IC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIgLnJlbGF0ZWQtdXNlcnMtcm93OjpiZWZvcmUsIC51c2VyLWNvbnRlbnQgLnJlbGF0ZWQtdXNlcnMtd3JhcHBlciAucmVsYXRlZC11c2Vycy1yb3c6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZmxleDogMCAwIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcikpO1xufVxuLnVzZXItY29udGVudCAucmVsYXRlZC11c2Vycy13cmFwcGVyIC5yZWxhdGVkLXVzZXJzLXJvdyAucmVsYXRlZC11c2VyLWl0ZW0ge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcik7XG59XG4udXNlci1jb250ZW50IC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIgLnJlbGF0ZWQtdXNlcnMtcm93IC5yZWxhdGVkLXVzZXItaXRlbSAucmVsYXRlZC11c2VyLW5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiLy8gSGlkZSBzY3JvbGxiYXJzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzg5OTQ4MzcvMTExNjk1OVxuQG1peGluIGhpZGUtc2Nyb2xsYmFycygpIHtcbiAgLy8gSUUgMTArXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAvLyBGaXJlZm94XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gIC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/firebase/user/details/styles/firebase-user-details.shell.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/firebase/user/details/styles/firebase-user-details.shell.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 24px;\n}\n\n.user-age > app-text-shell {\n  --text-shell-line-height: 14px;\n}\n\n.experience-label > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 40%;\n}\n\n.experience-label > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\napp-image-shell.related-user-picture {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.related-user-name > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 80%;\n}\n\n.related-user-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5zaGVsbC5zY3NzIiwic3JjL2FwcC9maXJlYmFzZS91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtBQ0NKOztBREdBO0VBQ0UsbURBQUE7QUNBRjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL3VzZXIvZGV0YWlscy9zdHlsZXMvZmlyZWJhc2UtdXNlci1kZXRhaWxzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZXhwZXJpZW5jZS1sYWJlbCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlbGF0ZWQtdXNlci1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufVxuXG4ucmVsYXRlZC11c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZXhwZXJpZW5jZS1sYWJlbCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi5leHBlcmllbmNlLWxhYmVsID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZWxhdGVkLXVzZXItcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cblxuLnJlbGF0ZWQtdXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLnJlbGF0ZWQtdXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59Il19 */"

/***/ })

}]);
//# sourceMappingURL=user-details-firebase-user-details-module-es2015.js.map