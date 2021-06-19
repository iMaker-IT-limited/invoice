(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showcase-showcase-module"],{

/***/ "./src/app/showcase/showcase.module.ts":
/*!*********************************************!*\
  !*** ./src/app/showcase/showcase.module.ts ***!
  \*********************************************/
/*! exports provided: ShowcasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcasePageModule", function() { return ShowcasePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








const showcaseRoutes = [
    {
        path: 'app-shell',
        loadChildren: () => Promise.all(/*! import() | app-shell-app-shell-module */[__webpack_require__.e("common"), __webpack_require__.e("app-shell-app-shell-module")]).then(__webpack_require__.bind(null, /*! ./app-shell/app-shell.module */ "./src/app/showcase/app-shell/app-shell.module.ts")).then(m => m.AppShellModule)
    },
    {
        path: 'custom-components',
        loadChildren: () => Promise.all(/*! import() | custom-components-custom-components-module */[__webpack_require__.e("common"), __webpack_require__.e("custom-components-custom-components-module")]).then(__webpack_require__.bind(null, /*! ./custom-components/custom-components.module */ "./src/app/showcase/custom-components/custom-components.module.ts")).then(m => m.CustomComponentsModule)
    },
    {
        path: 'route-resolvers-ux',
        loadChildren: () => Promise.all(/*! import() | route-resolvers-ux-route-resolvers-ux-module */[__webpack_require__.e("common"), __webpack_require__.e("route-resolvers-ux-route-resolvers-ux-module")]).then(__webpack_require__.bind(null, /*! ./route-resolvers-ux/route-resolvers-ux.module */ "./src/app/showcase/route-resolvers-ux/route-resolvers-ux.module.ts")).then(m => m.RouteResolversUXModule)
    }
];
let ShowcasePageModule = class ShowcasePageModule {
};
ShowcasePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(showcaseRoutes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        declarations: []
    })
], ShowcasePageModule);



/***/ })

}]);
//# sourceMappingURL=showcase-showcase-module-es2015.js.map