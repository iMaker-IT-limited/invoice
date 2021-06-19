(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["route-resolvers-ux-route-resolvers-ux-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/route-resolvers-ux\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Blocking Resovler Showcase\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      Notice how the UX degrades when using <b>Blocking</b> Route Resolvers in Angular\n    </p>\n    <ion-row style=\"background-color: #FFF; padding: 10px;\">\n      <ion-col size=\"12\">\n        <div [ngStyle]=\"{'background-image': 'url(' + routeResolveData?.cover + ')'}\" style=\"background-size: cover; background-repeat: no-repeat;\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\n          </app-aspect-ratio>\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <img [src]=\"routeResolveData?.image\" alt=\"Sample Image\" style=\"width: 100%; height: 100%;\"/>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h3 style=\"margin-top: 0px;\">\n          {{ routeResolveData?.title }}\n        </h3>\n        <p>\n          {{ routeResolveData?.description }}\n        </p>\n      </ion-col>\n    </ion-row>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/route-resolvers-ux\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      NON Blocking Resovler Showcase\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      With Non-Blocking Resolvers, page transition is immediate. However UX degrades because you are showing a static loading indicator while the server sends data back to the client.\n    </p>\n    <ng-container *ngIf=\"!routeResolveData\">\n      <div style=\"margin: 20px 40px; text-align: center;\">\n        <ion-spinner></ion-spinner>\n        <p>\n          <b>You can show a static shell while fetching data from the backend</b>\n        </p>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"routeResolveData\">\n      <ion-row style=\"background-color: #FFF; padding: 10px;\">\n        <ion-col size=\"12\">\n          <div [ngStyle]=\"{'background-image': 'url(' + routeResolveData?.cover + ')'}\" style=\"background-size: cover; background-repeat: no-repeat;\">\n            <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n              <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\n            </app-aspect-ratio>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n            <img [src]=\"routeResolveData?.image\" alt=\"Sample Image\" style=\"width: 100%; height: 100%;\"/>\n          </app-aspect-ratio>\n        </ion-col>\n        <ion-col size=\"8\">\n          <h3 style=\"margin-top: 0px;\">\n            {{ routeResolveData?.title }}\n          </h3>\n          <p>\n            {{ routeResolveData?.description }}\n          </p>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/route-resolvers-ux\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Progressive Shell Showcase\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <ion-row style=\"background-color: #FFF; padding: 10px;\">\n      <ion-col size=\"12\">\n        <app-image-shell class=\"add-overlay\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"routeResolveData?.cover\" [alt]=\"'Sample Image Cover'\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </ion-col>\n      <ion-col size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell animation=\"spinner\" [src]=\"routeResolveData?.image\" [alt]=\"'Sample Image'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h3 style=\"margin-top: 0px;\">\n          <app-text-shell [data]=\"routeResolveData?.title\"></app-text-shell>\n        </h3>\n        <p>\n          <app-text-shell animation=\"bouncing\" lines=\"3\" [data]=\"routeResolveData?.description\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Improve Route Resolvers UX\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      Lets see the difference between the different implementations of Route Resolvers.\n    </p>\n    <h5>Blocking Route Resolvers</h5>\n    <p>\n      By default, Angular Route Resolvers won't transition to the page until the Resolver Observable completes.\n    </p>\n    <p>\n      Let's suppose the backend is slow and takes 5 seconds to fetch data and return it to the client, this is what's going to happen.\n    </p>\n    <p>\n      <b>Expected behavior:</b> Page transition will be delayed 5 seconds until the server sends data back to the client.\n    </p>\n    <ion-button expand=\"block\" [routerLink]=\"['/showcase/route-resolvers-ux/blocking-resolvers']\">Blocking Resolvers</ion-button>\n  </section>\n  <section class=\"showcase-section\">\n    <h5>NON-Blocking Route Resolvers</h5>\n    <p>\n      To avoid waiting for the Observable to complete, we can wrap the base Observable (the one we are getting data from) with a dummy Observable, Subject or Promise that emits the base Observable and immediately completes.\n    </p>\n    <p>\n      <b>Expected behavior:</b> Page transition will be instant and the transitioned page will show a blank state while the server sends data back to the client.\n    </p>\n    <ion-button expand=\"block\" [routerLink]=\"['/showcase/route-resolvers-ux/non-blocking-resolvers']\">Non-Blocking Resolvers</ion-button>\n  </section>\n  <section class=\"showcase-section\">\n    <h5>Progressive Shell Resolvers</h5>\n    <p>\n      By using the <code>DataStore</code> utility in conjunction with Angular Route Resolvers, we can solve this UX problem and make page transitions immediate.\n    </p>\n    <p>\n      This approach uses a non-blocking Resolver in conjunction with the <code>DataStore</code> utility.\n    </p>\n    <p>\n      <b>Expected behavior:</b> Page transition will be instant and the transitioned page will show some shell elements while the server sends data back to the client.\n    </p>\n    <ion-button expand=\"block\" [routerLink]=\"['/showcase/route-resolvers-ux/progressive-shell-resolvers']\">Progressive Shell Resolvers</ion-button>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background-shade);\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvYmxvY2tpbmctcmVzb2x2ZXJzL2Jsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL3JvdXRlLXJlc29sdmVycy11eC9ibG9ja2luZy1yZXNvbHZlcnMvYmxvY2tpbmctcmVzb2x2ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvYmxvY2tpbmctcmVzb2x2ZXJzL2Jsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: BlockingResovlersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockingResovlersPage", function() { return BlockingResovlersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BlockingResovlersPage = /** @class */ (function () {
    function BlockingResovlersPage(route) {
        this.route = route;
    }
    BlockingResovlersPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Showcase Blocking Resovlers - ngOnInit()');
        if (this.route && this.route.data) {
            var dataObservable = this.route.data;
            console.log('Showcase Blocking Resovlers - Route Resolve Observable => dataObservable: ', dataObservable);
            if (dataObservable) {
                dataObservable.subscribe(function (observableValue) {
                    var pageData = observableValue['data'];
                    // tslint:disable-next-line:max-line-length
                    console.log('Showcase Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
                    if (pageData) {
                        _this.routeResolveData = pageData;
                    }
                });
            }
            else {
                console.warn('No dataObservable coming from Route Resolver data');
            }
        }
        else {
            console.warn('No data coming from Route Resolver');
        }
    };
    BlockingResovlersPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    BlockingResovlersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showcase-blocking-resolvers',
            template: __webpack_require__(/*! raw-loader!./blocking-resolvers.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.html"),
            styles: [__webpack_require__(/*! ./blocking-resolvers.page.scss */ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BlockingResovlersPage);
    return BlockingResovlersPage;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking.resolver.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking.resolver.ts ***!
  \*************************************************************************************/
/*! exports provided: BlockingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockingResolver", function() { return BlockingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");






var BlockingResolver = /** @class */ (function () {
    function BlockingResolver(showcaseService, loadingController) {
        this.showcaseService = showcaseService;
        this.loadingController = loadingController;
    }
    BlockingResolver.prototype.presentLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading ...'
                            })];
                    case 1:
                        _a.loadingElement = _b.sent();
                        return [4 /*yield*/, this.loadingElement.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlockingResolver.prototype.dismissLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.loadingElement) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadingElement.dismiss()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    BlockingResolver.prototype.resolve = function () {
        // WITHOUT LOADING INDICATOR
        var _this = this;
        // Base Observable (where we get data from)
        // const dataObservable = this.showcaseService.getData();
        // Basic Resolver that returns the base Observable
        // return dataObservable;
        // WITH LOADING INDICATOR
        // Base Observable (where we get data from)
        var dataObservable = this.showcaseService.getDataSourceWithDelay().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            console.log('dataObservable COMPLETED - HIDE LOADER');
            _this.dismissLoader();
        }));
        var deferedObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
            // Will be logged at the moment of subscription
            console.log('dataObservable STARTED - SHOW LOADER');
            _this.presentLoader();
            return dataObservable;
        });
        // Basic Resolver that returns the base Observable
        return deferedObservable;
    };
    BlockingResolver.ctorParameters = function () { return [
        { type: _showcase_service__WEBPACK_IMPORTED_MODULE_5__["ShowcaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    BlockingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_5__["ShowcaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], BlockingResolver);
    return BlockingResolver;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background-shade);\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvbm9uLWJsb2NraW5nLXJlc29sdmVycy9ub24tYmxvY2tpbmctcmVzb2x2ZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L25vbi1ibG9ja2luZy1yZXNvbHZlcnMvbm9uLWJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L25vbi1ibG9ja2luZy1yZXNvbHZlcnMvbm9uLWJsb2NraW5nLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: NonBlockingResolversPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonBlockingResolversPage", function() { return NonBlockingResolversPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NonBlockingResolversPage = /** @class */ (function () {
    function NonBlockingResolversPage(route) {
        this.route = route;
    }
    NonBlockingResolversPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Showcase NON Blocking Resovlers - ngOnInit()');
        if (this.route && this.route.data) {
            // We resolved a promise for the data Observable
            var promiseObservable = this.route.data;
            console.log('Showcase NON Blocking Resovlers - Route Resolve Observable => promiseObservable: ', promiseObservable);
            if (promiseObservable) {
                promiseObservable.subscribe(function (promiseValue) {
                    var dataObservable = promiseValue['data'];
                    console.log('Showcase NON Blocking Resovlers - Subscribe to promiseObservable => dataObservable: ', dataObservable);
                    if (dataObservable) {
                        dataObservable.subscribe(function (observableValue) {
                            var pageData = observableValue;
                            // tslint:disable-next-line:max-line-length
                            console.log('Showcase NON Blocking Resovlers - Subscribe to dataObservable (will emmit just one value) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
                            if (pageData) {
                                _this.routeResolveData = pageData;
                            }
                        });
                    }
                    else {
                        console.warn('No dataObservable coming from Route Resolver promiseObservable');
                    }
                });
            }
            else {
                console.warn('No promiseObservable coming from Route Resolver data');
            }
        }
        else {
            console.warn('No data coming from Route Resolver');
        }
    };
    NonBlockingResolversPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    NonBlockingResolversPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showcase-non-blocking-resolvers',
            template: __webpack_require__(/*! raw-loader!./non-blocking-resolvers.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.html"),
            styles: [__webpack_require__(/*! ./non-blocking-resolvers.page.scss */ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NonBlockingResolversPage);
    return NonBlockingResolversPage;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking.resolver.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking.resolver.ts ***!
  \*********************************************************************************************/
/*! exports provided: NonBlockingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonBlockingResolver", function() { return NonBlockingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");



var NonBlockingResolver = /** @class */ (function () {
    function NonBlockingResolver(showcaseService) {
        this.showcaseService = showcaseService;
    }
    NonBlockingResolver.prototype.resolve = function () {
        // Base Observable (where we get data from)
        var dataObservable = this.showcaseService.getDataSourceWithDelay();
        // NON-BLOCKING RESOLVERS
        // Resolver using a ReplySubject that emits the base Observable and then completes
        // const subject = new ReplaySubject();
        // subject.next(dataObservable);
        // subject.complete();
        // return subject;
        // Resolver using an Observable that emits the base Observable and then completes
        // const observable = Observable.create((observer) => {
        //   observer.next(dataObservable);
        //   observer.complete();
        // });
        // return observable;
        // Resolver using a Promise that resolves the base Observable
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(dataObservable);
        });
        return observablePromise;
    };
    NonBlockingResolver.ctorParameters = function () { return [
        { type: _showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"] }
    ]; };
    NonBlockingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"]])
    ], NonBlockingResolver);
    return NonBlockingResolver;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background-shade);\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvcHJvZ3Jlc3NpdmUtc2hlbGwtcmVzb2x2ZXJzL3Byb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL3JvdXRlLXJlc29sdmVycy11eC9wcm9ncmVzc2l2ZS1zaGVsbC1yZXNvbHZlcnMvcHJvZ3Jlc3NpdmUtc2hlbGwtcmVzb2x2ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvcHJvZ3Jlc3NpdmUtc2hlbGwtcmVzb2x2ZXJzL3Byb2dyZXNzaXZlLXNoZWxsLXJlc29sdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ProgressiveShellResovlersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressiveShellResovlersPage", function() { return ProgressiveShellResovlersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProgressiveShellResovlersPage = /** @class */ (function () {
    function ProgressiveShellResovlersPage(route) {
        this.route = route;
    }
    ProgressiveShellResovlersPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Showcase Progressive Shell Resovlers - ngOnInit()');
        this.route.data.subscribe(function (resolvedRouteData) {
            var dataStore = resolvedRouteData['data'];
            dataStore.state.subscribe(function (state) {
                _this.routeResolveData = state;
            }, function (error) { });
        }, function (error) { });
    };
    ProgressiveShellResovlersPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ProgressiveShellResovlersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showcase-progressive-shell-resolvers',
            template: __webpack_require__(/*! raw-loader!./progressive-shell-resolvers.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.html"),
            styles: [__webpack_require__(/*! ./progressive-shell-resolvers.page.scss */ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProgressiveShellResovlersPage);
    return ProgressiveShellResovlersPage;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell.resolver.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell.resolver.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ProgressiveShellResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressiveShellResolver", function() { return ProgressiveShellResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");



var ProgressiveShellResolver = /** @class */ (function () {
    function ProgressiveShellResolver(showcaseService) {
        this.showcaseService = showcaseService;
    }
    ProgressiveShellResolver.prototype.resolve = function () {
        var dataSource = this.showcaseService.getDataSourceWithDelay();
        var dataStore = this.showcaseService.getSimpleDataStore(dataSource);
        return dataStore;
    };
    ProgressiveShellResolver.ctorParameters = function () { return [
        { type: _showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"] }
    ]; };
    ProgressiveShellResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"]])
    ], ProgressiveShellResolver);
    return ProgressiveShellResolver;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.module.ts ***!
  \**************************************************************************/
/*! exports provided: RouteResolversUXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteResolversUXModule", function() { return RouteResolversUXModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route-resolvers-ux.page */ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.ts");
/* harmony import */ var _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./non-blocking-resolvers/non-blocking-resolvers.page */ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking-resolvers.page.ts");
/* harmony import */ var _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocking-resolvers/blocking-resolvers.page */ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking-resolvers.page.ts");
/* harmony import */ var _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progressive-shell-resolvers/progressive-shell-resolvers.page */ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell-resolvers.page.ts");
/* harmony import */ var _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocking-resolvers/blocking.resolver */ "./src/app/showcase/route-resolvers-ux/blocking-resolvers/blocking.resolver.ts");
/* harmony import */ var _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./non-blocking-resolvers/non-blocking.resolver */ "./src/app/showcase/route-resolvers-ux/non-blocking-resolvers/non-blocking.resolver.ts");
/* harmony import */ var _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./progressive-shell-resolvers/progressive-shell.resolver */ "./src/app/showcase/route-resolvers-ux/progressive-shell-resolvers/progressive-shell.resolver.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../showcase.service */ "./src/app/showcase/showcase.service.ts");
















var routes = [
    {
        path: '',
        component: _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_8__["RouteResovlersUXPage"]
    },
    {
        path: 'blocking-resolvers',
        component: _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_10__["BlockingResovlersPage"],
        resolve: {
            data: _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__["BlockingResolver"]
        }
    },
    {
        path: 'non-blocking-resolvers',
        component: _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__["NonBlockingResolversPage"],
        resolve: {
            data: _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_13__["NonBlockingResolver"]
        }
    },
    {
        path: 'progressive-shell-resolvers',
        component: _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_11__["ProgressiveShellResovlersPage"],
        resolve: {
            data: _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_14__["ProgressiveShellResolver"]
        }
    }
];
var RouteResolversUXModule = /** @class */ (function () {
    function RouteResolversUXModule() {
    }
    RouteResolversUXModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [
                _route_resolvers_ux_page__WEBPACK_IMPORTED_MODULE_8__["RouteResovlersUXPage"],
                _blocking_resolvers_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_10__["BlockingResovlersPage"],
                _non_blocking_resolvers_non_blocking_resolvers_page__WEBPACK_IMPORTED_MODULE_9__["NonBlockingResolversPage"],
                _progressive_shell_resolvers_progressive_shell_resolvers_page__WEBPACK_IMPORTED_MODULE_11__["ProgressiveShellResovlersPage"]
            ],
            providers: [
                _blocking_resolvers_blocking_resolver__WEBPACK_IMPORTED_MODULE_12__["BlockingResolver"],
                _non_blocking_resolvers_non_blocking_resolver__WEBPACK_IMPORTED_MODULE_13__["NonBlockingResolver"],
                _progressive_shell_resolvers_progressive_shell_resolver__WEBPACK_IMPORTED_MODULE_14__["ProgressiveShellResolver"],
                _showcase_service__WEBPACK_IMPORTED_MODULE_15__["ShowcaseService"]
            ]
        })
    ], RouteResolversUXModule);
    return RouteResolversUXModule;
}());



/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background-shade);\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9yb3V0ZS1yZXNvbHZlcnMtdXgvcm91dGUtcmVzb2x2ZXJzLXV4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3JvdXRlLXJlc29sdmVycy11eC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2Uvcm91dGUtcmVzb2x2ZXJzLXV4L3JvdXRlLXJlc29sdmVycy11eC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.ts ***!
  \************************************************************************/
/*! exports provided: RouteResovlersUXPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteResovlersUXPage", function() { return RouteResovlersUXPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RouteResovlersUXPage = /** @class */ (function () {
    function RouteResovlersUXPage() {
    }
    RouteResovlersUXPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showcase-route-resolvers-ux',
            template: __webpack_require__(/*! raw-loader!./route-resolvers-ux.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.html"),
            styles: [__webpack_require__(/*! ./route-resolvers-ux.page.scss */ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RouteResovlersUXPage);
    return RouteResovlersUXPage;
}());



/***/ })

}]);
//# sourceMappingURL=route-resolvers-ux-route-resolvers-ux-module-es5.js.map