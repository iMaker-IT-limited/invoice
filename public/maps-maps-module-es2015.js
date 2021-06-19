(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/maps/maps.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maps/maps.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Maps & Geolocation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"geolocateMe()\" color=\"secondary\">\n      <ion-icon name=\"locate\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <google-map [mapOptions]=\"mapOptions\"></google-map>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsPageModule", function() { return MapsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maps.page */ "./src/app/maps/maps.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");







let MapsPageModule = class MapsPageModule {
};
MapsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _maps_page__WEBPACK_IMPORTED_MODULE_5__["MapsPage"] }])
        ],
        declarations: [_maps_page__WEBPACK_IMPORTED_MODULE_5__["MapsPage"]]
    })
], MapsPageModule);



/***/ }),

/***/ "./src/app/maps/maps.page.ts":
/*!***********************************!*\
  !*** ./src/app/maps/maps.page.ts ***!
  \***********************************/
/*! exports provided: MapsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsPage", function() { return MapsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");




const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];

let MapsPage = class MapsPage {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.mapOptions = {
            zoom: 15,
            center: { lat: -34.9199842, lng: -56.149849 }
            // uncomment the following line if you want to remove the default Map controls
            // disableDefaultUI: true
        };
    }
    ngOnInit() {
        this._GoogleMap.$mapReady.subscribe(map => {
            this.map = map;
        });
        this.createLoader();
    }
    createLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingElement = yield this.loadingController.create({
                message: 'Trying to get your current location...'
            });
        });
    }
    presentLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loadingElement.present();
        });
    }
    dismissLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loadingElement) {
                yield this.loadingElement.dismiss();
            }
        });
    }
    geolocateMe() {
        this.presentLoader();
        Geolocation.getCurrentPosition().then(position => {
            const current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            this.map.panTo(current_location);
            // add a marker
            const marker = new google.maps.Marker({
                position: current_location,
                title: 'You are here!',
            });
            // To add the marker to the map, call setMap();
            marker.setMap(this.map);
        }).catch((error) => {
            console.log('Error getting current location', error);
        }).finally(() => this.dismissLoader());
    }
};
MapsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_4__["GoogleMapComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_4__["GoogleMapComponent"])
], MapsPage.prototype, "_GoogleMap", void 0);
MapsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-maps',
        template: __webpack_require__(/*! raw-loader!./maps.page.html */ "./node_modules/raw-loader/index.js!./src/app/maps/maps.page.html"),
        styles: [__webpack_require__(/*! ./styles/maps.page.scss */ "./src/app/maps/styles/maps.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], MapsPage);



/***/ }),

/***/ "./src/app/maps/styles/maps.page.scss":
/*!********************************************!*\
  !*** ./src/app/maps/styles/maps.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "google-map {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9tYXBzL3N0eWxlcy9tYXBzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWFwcy9zdHlsZXMvbWFwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21hcHMvc3R5bGVzL21hcHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZ29vZ2xlLW1hcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiZ29vZ2xlLW1hcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=maps-maps-module-es2015.js.map