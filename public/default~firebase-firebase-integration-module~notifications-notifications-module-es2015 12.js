(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~firebase-firebase-integration-module~notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-title>\n      公告\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<app-header></app-header>\n\n<ion-content class=\"notifications-content\">\n\n  <div id=\"columns\">\n    <figure>\n      <img src=\"//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg\">\n      <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/rapunzel.jpg\">\n      <figcaption>Rapunzel, clothed in 1820’s period fashion</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/belle.jpg\">\n      <figcaption>Belle, based on 1770’s French court fashion</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg\">\n      <figcaption>Mulan, based on the Ming Dynasty period</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sleeping-beauty.jpg\">\n      <figcaption>Sleeping Beauty, based on European fashions in 1485</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pocahontas_2.jpg\">\n      <figcaption>Pocahontas based on 17th century Powhatan costume</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/snow-white.jpg\">\n      <figcaption>Snow White, based on 16th century German fashion</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg\">\n      <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/tiana.jpg\">\n      <figcaption>Tiana wearing the <i>robe de style</i> of the 1920’s</figcaption>\n    </figure>\n    <!-- <small>Art &copy; <a href=\"//clairehummel.com\">Claire Hummel</a></small> -->\n  </div>\n\n  <!-- Crescent -->\n  <!-- <div class=\"spinner\" *ngIf=\"!restNotifications\">\n    <ion-spinner color=\"theme\" name=\"crescent\"></ion-spinner>\n  </div> -->\n\n  <!-- <div style=\"overflow-y:scroll; height:600px;\">\n    <ng-container *ngIf=\"restNotifications\">\n      <ion-item-group>\n        <ion-item class=\"notification-item\" lines=\"none\" *ngFor=\"let notification of restNotifications\">\n          <ion-row class=\"notification-item-wrapper\">\n            <ion-col size=\"2\">\n              <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n                <app-image-shell class=\"notification-image\" [src]=\"notification.image\" [alt]=\"'user image'\">\n                </app-image-shell>\n              </app-aspect-ratio>\n            </ion-col>\n            <ion-col class=\"details-wrapper\">\n              <h2 class=\"details-name\">{{ notification.name || 'name' }}</h2>\n              <p class=\"details-description\">{{ notification.message || 'message' }}</p>\n            </ion-col>\n            <ion-col size=\"2\" class=\"date-wrapper\">\n              <h3 class=\"notification-date\">{{ notification.date.toString().substr(5, 4) || 'date'}}</h3>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-item-group>\n    </ng-container>\n  </div> -->\n\n\n  <!-- <ng-container *ngIf=\"notifications\">\n    <ion-item-group>\n      <ion-item-divider sticky>\n        <ion-label>Today</ion-label>\n      </ion-item-divider>\n      <ion-item class=\"notification-item\" lines=\"none\" *ngFor=\"let notification of notifications.today\">\n        <ion-row class=\"notification-item-wrapper\">\n          <ion-col size=\"2\">\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"notification-image\" [src]=\"notification.image\" [alt]=\"'user image'\">\n              </app-image-shell>\n            </app-aspect-ratio>\n          </ion-col>\n          <ion-col class=\"details-wrapper\">\n            <h2 class=\"details-name\">{{ notification.name || 'name' }}</h2>\n            <p class=\"details-description\">{{ notification.message || 'message' }}</p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"date-wrapper\">\n            <h3 class=\"notification-date\">{{ notification.date || 'date'}}</h3>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider sticky>\n        <ion-label>Yesterday</ion-label>\n      </ion-item-divider>\n      <ion-item class=\"notification-item\" lines=\"none\" *ngFor=\"let notification of notifications.yesterday\">\n        <ion-row class=\"notification-item-wrapper\">\n          <ion-col size=\"2\">\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"notification-image\" [src]=\"notification.image\" [alt]=\"'user image'\">\n              </app-image-shell>\n            </app-aspect-ratio>\n          </ion-col>\n          <ion-col class=\"details-wrapper\">\n            <h2 class=\"details-name\">{{ notification.name || 'name'}}</h2>\n            <p class=\"details-description\">{{ notification.message || 'message'}}</p>\n          </ion-col>\n          <ion-col size=\"2\" class=\"date-wrapper\">\n            <h3 class=\"notification-date\">{{ notification.date || 'date'}}</h3>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-item-group>\n  </ng-container> -->\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");
/* harmony import */ var _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notifications/notifications.resolver */ "./src/app/notifications/notifications.resolver.ts");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");












let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _notifications_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPage"],
                    resolve: {
                        data: _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__["NotificationsResolver"]
                    }
                }
            ])
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPage"]],
        providers: [
            _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__["NotificationsResolver"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
            _firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseService"]
        ]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _assets_sample_data_notifications_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/sample-data/notifications.json */ "./src/assets/sample-data/notifications.json");
var _assets_sample_data_notifications_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/sample-data/notifications.json */ "./src/assets/sample-data/notifications.json", 1);
/* harmony import */ var _firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let NotificationsPage = class NotificationsPage {
    constructor(http, route, firebaseService) {
        this.http = http;
        this.route = route;
        this.firebaseService = firebaseService;
        // notifications: any;
        this.notifications = _assets_sample_data_notifications_json__WEBPACK_IMPORTED_MODULE_3__;
    }
    ngOnInit() {
        console.log(this.notifications);
        this.http.get('https://sheet.best/api/sheets/4f29fe18-7501-495b-b89b-80629543d791').subscribe((res) => {
            console.log(res);
            this.restNotifications = res;
        });
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
];
NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/index.js!./src/app/notifications/notifications.page.html"),
        styles: [__webpack_require__(/*! ./styles/notifications.page.scss */ "./src/app/notifications/styles/notifications.page.scss"), __webpack_require__(/*! ./styles/notifications.shell.scss */ "./src/app/notifications/styles/notifications.shell.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _firebase_firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
], NotificationsPage);



/***/ }),

/***/ "./src/app/notifications/notifications.resolver.ts":
/*!*********************************************************!*\
  !*** ./src/app/notifications/notifications.resolver.ts ***!
  \*********************************************************/
/*! exports provided: NotificationsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsResolver", function() { return NotificationsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.service */ "./src/app/notifications/notifications.service.ts");



let NotificationsResolver = class NotificationsResolver {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    resolve() {
        // Base Observable (where we get data from)
        const dataObservable = this.notificationsService.getData();
        return { source: dataObservable };
    }
};
NotificationsResolver.ctorParameters = () => [
    { type: _notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"] }
];
NotificationsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])
], NotificationsResolver);



/***/ }),

/***/ "./src/app/notifications/notifications.service.ts":
/*!********************************************************!*\
  !*** ./src/app/notifications/notifications.service.ts ***!
  \********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let NotificationsService = class NotificationsService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http.get('./assets/sample-data/notifications.json');
    }
};
NotificationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], NotificationsService);



/***/ }),

/***/ "./src/app/notifications/styles/notifications.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/notifications/styles/notifications.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n}\n\n.notifications-content .list {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.notifications-content .spinner {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  width: 28px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.notifications-content ion-item-divider {\n  --background: var(--ion-color-light);\n  --padding-start: var(--page-margin);\n}\n\n.notifications-content .notification-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  padding: var(--page-margin);\n  color: var(--ion-color-medium);\n  box-shadow: inset 0 8px 2px -9px var(--ion-color-darkest);\n}\n\n.notifications-content .notification-item .notification-item-wrapper {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  align-items: center;\n}\n\n.notifications-content .notification-item .details-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-left: var(--page-margin);\n}\n\n.notifications-content .notification-item .details-wrapper .details-name {\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-secondary);\n}\n\n.notifications-content .notification-item .details-wrapper .details-description {\n  font-size: 12px;\n  margin: 0px;\n}\n\n.notifications-content .notification-item .date-wrapper {\n  align-self: flex-start;\n}\n\n.notifications-content .notification-item .date-wrapper .notification-date {\n  margin: 0px;\n  font-size: 12px;\n  text-align: end;\n}\n\n@font-face {\n  font-family: \"Calluna\";\n  src: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/callunasansregular-webfont.woff\") format(\"woff\");\n}\n\nbody {\n  background: url(//subtlepatterns.com/patterns/scribble_light.png);\n  font-family: Calluna, Arial, sans-serif;\n  min-height: 1000px;\n}\n\n#columns {\n  -moz-column-width: 320px;\n       column-width: 320px;\n  -moz-column-gap: 15px;\n       column-gap: 15px;\n  width: 90%;\n  max-width: 1100px;\n  margin: 50px auto;\n}\n\ndiv#columns figure {\n  background: #fefefe;\n  border: 2px solid #fcfcfc;\n  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);\n  margin: 0 2px 15px;\n  padding: 15px;\n  padding-bottom: 10px;\n  transition: opacity 0.4s ease-in-out;\n  display: inline-block;\n  column-break-inside: avoid;\n}\n\ndiv#columns figure img {\n  width: 100%;\n  height: auto;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 15px;\n  margin-bottom: 5px;\n}\n\ndiv#columns figure figcaption {\n  font-size: 0.9rem;\n  color: #444;\n  line-height: 1.5;\n}\n\ndiv#columns small {\n  font-size: 1rem;\n  float: right;\n  text-transform: uppercase;\n  color: #aaa;\n}\n\ndiv#columns small a {\n  color: #666;\n  text-decoration: none;\n  transition: 0.4s color;\n}\n\ndiv#columns:hover figure:not(:hover) {\n  opacity: 0.4;\n}\n\n@media screen and (max-width: 750px) {\n  #columns {\n    -moz-column-gap: 0px;\n         column-gap: 0px;\n  }\n\n  #columns figure {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9ub3RpZmljYXRpb25zL3N0eWxlcy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9ucy9zdHlsZXMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1Q0FBQTtBQ0RGOztBRE9FO0VBRUUsa0JBQUE7RUFDRixrQkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEU0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDUko7O0FEV0U7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FDVEo7O0FEWUU7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0VBRUEsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FDWEo7O0FEYUk7RUFDRSw4QkFBQTtFQUVBLFdBQUE7RUFDQSxtQkFBQTtBQ1pOOztBRGVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ2JOOztBRGVNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNELGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQ2JQOztBRGdCTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDZFI7O0FEa0JJO0VBQ0Usc0JBQUE7QUNoQk47O0FEa0JNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDaEJSOztBRHFCQTtFQUFXLHNCQUFBO0VBQ1YsNEdBQUE7QUNqQkQ7O0FEbUJBO0VBQ0MsaUVBQUE7RUFDQyx1Q0FBQTtFQUNBLGtCQUFBO0FDakJGOztBRG1CQTtFQUNDLHdCQUFBO09BQUEsbUJBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0MsVUFBQTtFQUNELGlCQUFBO0VBQ0EsaUJBQUE7QUNoQkQ7O0FEbUJBO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNDLHFCQUFBO0VBQ0EsMEJBQUE7QUNoQkY7O0FEbUJBO0VBQ0MsV0FBQTtFQUFhLFlBQUE7RUFDYiw2QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNmRDs7QURrQkE7RUFDRSxpQkFBQTtFQUNELFdBQUE7RUFDQyxnQkFBQTtBQ2ZGOztBRGtCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDZkY7O0FEa0JBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNmRjs7QURrQkE7RUFDQyxZQUFBO0FDZkQ7O0FEa0JBO0VBQ0U7SUFBVyxvQkFBQTtTQUFBLGVBQUE7RUNkWDs7RURlQTtJQUFrQixXQUFBO0VDWGxCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL3N0eWxlcy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLm5vdGlmaWNhdGlvbnMtY29udGVudCB7XG5cbiAgLmxpc3Qge1xuICAgIFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gIH1cblxuICAuc3Bpbm5lciB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgLy8gMjhweCoyOHB4XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgOHB4IDJweCAtOXB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgIC5ub3RpZmljYXRpb24taXRlbS13cmFwcGVyIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICAuZGV0YWlscy1uYW1lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIFx0Zm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB9XG5cbiAgICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGF0ZS13cmFwcGVyIHtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG5cbiAgICAgIC5ub3RpZmljYXRpb24tZGF0ZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkBmb250LWZhY2V7Zm9udC1mYW1pbHk6J0NhbGx1bmEnO1xuIHNyYzp1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzQyNzMvY2FsbHVuYXNhbnNyZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xufVxuYm9keSB7XG5cdGJhY2tncm91bmQ6IHVybCgvL3N1YnRsZXBhdHRlcm5zLmNvbS9wYXR0ZXJucy9zY3JpYmJsZV9saWdodC5wbmcpO1xuICBmb250LWZhbWlseTogQ2FsbHVuYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIG1pbi1oZWlnaHQ6IDEwMDBweDtcbn1cbiNjb2x1bW5zIHtcblx0Y29sdW1uLXdpZHRoOiAzMjBweDtcblx0Y29sdW1uLWdhcDogMTVweDtcbiAgd2lkdGg6IDkwJTtcblx0bWF4LXdpZHRoOiAxMTAwcHg7XG5cdG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG5kaXYjY29sdW1ucyBmaWd1cmUge1xuXHRiYWNrZ3JvdW5kOiAjZmVmZWZlO1xuXHRib3JkZXI6IDJweCBzb2xpZCAjZmNmY2ZjO1xuXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgzNCwgMjUsIDI1LCAwLjQpO1xuXHRtYXJnaW46IDAgMnB4IDE1cHg7XG5cdHBhZGRpbmc6IDE1cHg7XG5cdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC40cyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2x1bW4tYnJlYWstaW5zaWRlOiBhdm9pZDtcbn1cblxuZGl2I2NvbHVtbnMgZmlndXJlIGltZyB7XG5cdHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuXHRwYWRkaW5nLWJvdHRvbTogMTVweDtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5kaXYjY29sdW1ucyBmaWd1cmUgZmlnY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogLjlyZW07XG5cdGNvbG9yOiAjNDQ0O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5kaXYjY29sdW1ucyBzbWFsbCB7IFxuICBmb250LXNpemU6IDFyZW07XG4gIGZsb2F0OiByaWdodDsgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYWFhO1xufSBcblxuZGl2I2NvbHVtbnMgc21hbGwgYSB7IFxuICBjb2xvcjogIzY2NjsgXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG4gIHRyYW5zaXRpb246IC40cyBjb2xvcjtcbn1cblxuZGl2I2NvbHVtbnM6aG92ZXIgZmlndXJlOm5vdCg6aG92ZXIpIHtcblx0b3BhY2l0eTogMC40O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkgeyBcbiAgI2NvbHVtbnMgeyBjb2x1bW4tZ2FwOiAwcHg7IH1cbiAgI2NvbHVtbnMgZmlndXJlIHsgd2lkdGg6IDEwMCU7IH1cbn0iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbn1cblxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAubGlzdCB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAuc3Bpbm5lciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDI4cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCBpb24taXRlbS1kaXZpZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgOHB4IDJweCAtOXB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5ub3RpZmljYXRpb24taXRlbS13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubm90aWZpY2F0aW9ucy1jb250ZW50IC5ub3RpZmljYXRpb24taXRlbSAuZGV0YWlscy13cmFwcGVyIC5kZXRhaWxzLW5hbWUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAubm90aWZpY2F0aW9uLWl0ZW0gLmRhdGUtd3JhcHBlciB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4ubm90aWZpY2F0aW9ucy1jb250ZW50IC5ub3RpZmljYXRpb24taXRlbSAuZGF0ZS13cmFwcGVyIC5ub3RpZmljYXRpb24tZGF0ZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhbGx1bmFcIjtcbiAgc3JjOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby80MjczL2NhbGx1bmFzYW5zcmVndWxhci13ZWJmb250LndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbn1cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoLy9zdWJ0bGVwYXR0ZXJucy5jb20vcGF0dGVybnMvc2NyaWJibGVfbGlnaHQucG5nKTtcbiAgZm9udC1mYW1pbHk6IENhbGx1bmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBtaW4taGVpZ2h0OiAxMDAwcHg7XG59XG5cbiNjb2x1bW5zIHtcbiAgY29sdW1uLXdpZHRoOiAzMjBweDtcbiAgY29sdW1uLWdhcDogMTVweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG5kaXYjY29sdW1ucyBmaWd1cmUge1xuICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmNmY2ZjO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgzNCwgMjUsIDI1LCAwLjQpO1xuICBtYXJnaW46IDAgMnB4IDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sdW1uLWJyZWFrLWluc2lkZTogYXZvaWQ7XG59XG5cbmRpdiNjb2x1bW5zIGZpZ3VyZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuZGl2I2NvbHVtbnMgZmlndXJlIGZpZ2NhcHRpb24ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICM0NDQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmRpdiNjb2x1bW5zIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG5kaXYjY29sdW1ucyBzbWFsbCBhIHtcbiAgY29sb3I6ICM2NjY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC40cyBjb2xvcjtcbn1cblxuZGl2I2NvbHVtbnM6aG92ZXIgZmlndXJlOm5vdCg6aG92ZXIpIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAjY29sdW1ucyB7XG4gICAgY29sdW1uLWdhcDogMHB4O1xuICB9XG5cbiAgI2NvbHVtbnMgZmlndXJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/notifications/styles/notifications.shell.scss":
/*!***************************************************************!*\
  !*** ./src/app/notifications/styles/notifications.shell.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.notification-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9ub3RpZmljYXRpb25zL3N0eWxlcy9ub3RpZmljYXRpb25zLnNoZWxsLnNjc3MiLCJzcmMvYXBwL25vdGlmaWNhdGlvbnMvc3R5bGVzL25vdGlmaWNhdGlvbnMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL3N0eWxlcy9ub3RpZmljYXRpb25zLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwubm90aWZpY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwubm90aWZpY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/assets/sample-data/notifications.json":
/*!***************************************************!*\
  !*** ./src/assets/sample-data/notifications.json ***!
  \***************************************************/
/*! exports provided: today, yesterday, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"today\":[{\"name\":\"Martin\",\"image\":\"./assets/sample-images/notifications/100x100Notification1.jpg\",\"message\":\"Hey buddy ;), want to go for a drink tonight?\",\"date\":\"5:03 pm\"},{\"name\":\"Jessica\",\"image\":\"./assets/sample-images/notifications/100x100Notification2.jpg\",\"message\":\"Did Justin invite you to his Bday Party?\",\"date\":\"2:54 pm\"},{\"name\":\"Judith\",\"image\":\"./assets/sample-images/notifications/100x100Notification3.jpg\",\"message\":\"Hi darling, how is your dog?\",\"date\":\"1:54 pm\"},{\"name\":\"Martin\",\"image\":\"./assets/sample-images/notifications/100x100Notification1.jpg\",\"message\":\"Hey buddy ;), want to go for a drink tonight?\",\"date\":\"5:03 pm\"},{\"name\":\"Jessica\",\"image\":\"./assets/sample-images/notifications/100x100Notification2.jpg\",\"message\":\"Did Justin invite you to his Bday Party?\",\"date\":\"2:54 pm\"},{\"name\":\"Judith\",\"image\":\"./assets/sample-images/notifications/100x100Notification3.jpg\",\"message\":\"Hi darling, how is your dog?\",\"date\":\"1:54 pm\"},{\"name\":\"Martin\",\"image\":\"./assets/sample-images/notifications/100x100Notification1.jpg\",\"message\":\"Hey buddy ;), want to go for a drink tonight?\",\"date\":\"5:03 pm\"},{\"name\":\"Jessica\",\"image\":\"./assets/sample-images/notifications/100x100Notification2.jpg\",\"message\":\"Did Justin invite you to his Bday Party?\",\"date\":\"2:54 pm\"},{\"name\":\"Judith\",\"image\":\"./assets/sample-images/notifications/100x100Notification3.jpg\",\"message\":\"Hi darling, how is your dog?\",\"date\":\"1:54 pm\"}],\"yesterday\":[{\"name\":\"George\",\"image\":\"./assets/sample-images/notifications/100x100Notification4.jpg\",\"message\":\"Wooow, that's amazing!\",\"date\":\"9:11 pm\"},{\"name\":\"Kirsten\",\"image\":\"./assets/sample-images/notifications/100x100Notification5.jpg\",\"message\":\"Thanks again for the dinner, it was delicious!\",\"date\":\"3:09 pm\"},{\"name\":\"Phillip\",\"image\":\"./assets/sample-images/notifications/100x100Notification6.jpg\",\"message\":\"Are you going to the gym today?\",\"date\":\"11:34 am\"},{\"name\":\"Diane\",\"image\":\"./assets/sample-images/notifications/100x100Notification7.jpg\",\"message\":\"I was wondering if something happened to Sara... she was so weird yesterday.\",\"date\":\"7:12 am\"}]}");

/***/ })

}]);
//# sourceMappingURL=default~firebase-firebase-integration-module~notifications-notifications-module-es2015.js.map