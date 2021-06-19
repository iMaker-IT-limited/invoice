(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-components-custom-components-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/custom-components.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/custom-components/custom-components.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Custom Components\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Checkbox Wrapper</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      This is a super straightforward component whose purpose is to wrap an <code>&lt;ion-checkbox&gt;</code> element to enable accessing the checkbox state from its parents.\n    </p>\n<pre>\n&lt;app-checkbox-wrapper class=\"custom-checkbox\"&gt;\n  &lt;ion-checkbox checked=true&gt;&lt;/ion-checkbox&gt;\n  &lt;ion-label&gt;Sample Checkbox&lt;/ion-label&gt;\n&lt;/app-checkbox-wrapper&gt;\n</pre>\n<pre>\napp-checkbox-wrapper.custom-checkbox &#123;\n  background: #CCC;\n  color: #000;\n\n  &.checkbox-checked &#123;\n    background: #00AFFF;\n    color: #FFF;\n  &#125;\n&#125;\n</pre>\n    <app-checkbox-wrapper class=\"custom-checkbox\">\n      <ion-checkbox checked=true></ion-checkbox>\n      <ion-label>Sample Checkbox</ion-label>\n    </app-checkbox-wrapper>\n  </section>\n\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Show/Hide Password</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      By wrapping an <code>&lt;ion-input&gt;</code> element with this component, you can enhance the UX and add a show/hide password functionality.\n    </p>\n<pre>\n&lt;app-show-hide-password&gt;\n  &lt;ion-input type=\"password\" placeholder=\"Try setting a password\" value=\"It's a secret!\"&gt;&lt;/ion-input&gt;\n&lt;/app-show-hide-password&gt;\n</pre>\n    <app-show-hide-password>\n      <ion-input type=\"password\" placeholder=\"Try setting a password\" value=\"It's a secret!\"></ion-input>\n    </app-show-hide-password>\n  </section>\n\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Countdown Timer</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      This components shows the remaining time (in days, hours, minutes or seconds) to a given date.\n    </p>\n    <p>\n      A few examples on how to use this component:\n    </p>\n    <h5>From days to seconds</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'day', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'day', to: 'second'}\"></app-countdown-timer>\n    <h5>From days to minutes</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'day', to: 'minute'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'day', to: 'minute'}\"></app-countdown-timer>\n    <h5>From hours to seconds</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'hour', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>From hours to minutes</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'hour', to: 'minute'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'minute'}\"></app-countdown-timer>\n    <h5>From minutes to seconds</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'minute', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'minute', to: 'second'}\"></app-countdown-timer>\n    <h5>Just days</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'day', to: 'day'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'day', to: 'day'}\"></app-countdown-timer>\n    <h5>Just hours</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'hour', to: 'hour'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <h5>Just minutes</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'minute', to: 'minute'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'minute', to: 'minute'}\"></app-countdown-timer>\n    <h5>Just seconds</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'second', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'second', to: 'second'}\"></app-countdown-timer>\n  </section>\n  <section class=\"showcase-section\">\n    <h2>Styling</h2>\n    <p>\n      You can change different properties to adjust the look and feel of the component.\n    </p>\n    <h5>Fill</h5>\n<pre>\napp-countdown-timer &#123;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 10px;\n  --countdown-fill-background: #FFFFFF;\n  --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      background-color: transparent;\n      --countdown-padding: 10px;\n      --countdown-fill-border: none;\n      --countdown-fill-border-radius: 10px;\n      --countdown-fill-background: #FFFFFF;\n      --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n    \" fill=\"countdown\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>Color</h5>\n<pre>\napp-countdown-timer &#123;\n  --countdown-fill-background: #000000;\n  --countdown-value-color: #FFFFFF;\n  --countdown-unit-color: #F2F2F2;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-fill-background: #000000;\n      --countdown-padding: 10px;\n      --countdown-value-color: #FFFFFF;\n      --countdown-unit-color: #F2F2F2;\n    \" fill=\"countdown\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>Margins & Paddings</h5>\n<pre>\napp-countdown-timer &#123;\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n&#125;\n</pre>\n    <h5>Time unit positioning</h5>\n    <p>\n      Time units to the right (default)\n    </p>\n<pre>\napp-countdown-timer &#123;\n  --countdown-time-flex-direction: row-reverse;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-time-flex-direction: row-reverse;\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <p>\n      Time units to the left\n    </p>\n<pre>\napp-countdown-timer &#123;\n  --countdown-time-flex-direction: row;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-time-flex-direction: row;\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <p>\n      Time units above\n    </p>\n<pre>\napp-countdown-timer &#123;\n  --countdown-time-flex-direction: column;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-time-flex-direction: column;\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <p>\n      Time units below\n    </p>\n<pre>\napp-countdown-timer &#123;\n  --countdown-time-flex-direction: column-reverse;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-time-flex-direction: column-reverse;\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <p>\n      This component can be configured with different fill modes (by default, no fill will be applied).\n    </p>\n    <h5>Fill: Entire Countdown</h5>\n<pre>\n&lt;app-countdown-timer <b>fill=\"countdown\"</b> [end]=\"countdownDate\" [units]=\"&#123;from: 'hour', to: 'second'&#125;\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer style=\"\n    background-color: transparent;\n    --countdown-padding: 10px;\n    --countdown-fill-border: none;\n    --countdown-fill-border-radius: 10px;\n    --countdown-fill-background: #FFFFFF;\n    --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n    \" fill=\"countdown\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>Fill: Time wrapper</h5>\n<pre>\n&lt;app-countdown-timer <b>fill=\"time\"</b> [end]=\"countdownDate\" [units]=\"&#123;from: 'hour', to: 'second'&#125;\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer style=\"\n    background-color: transparent;\n    --countdown-padding: 10px;\n    --countdown-time-margin: 0px 10px;\n    --countdown-time-padding: 10px 0px;\n    --countdown-fill-border: none;\n    --countdown-fill-border-radius: 10px;\n    --countdown-fill-background: #FFFFFF;\n    --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n    \" fill=\"time\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>Fill: Inner Time Value</h5>\n<pre>\n&lt;app-countdown-timer <b>fill=\"inner-time\"</b> [end]=\"countdownDate\" [units]=\"&#123;from: 'hour', to: 'second'&#125;\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer style=\"\n    background-color: transparent;\n    --countdown-padding: 10px;\n    --countdown-inner-time-margin: 5px;\n    --countdown-inner-time-padding: 10px;\n    --countdown-fill-border: none;\n    --countdown-fill-border-radius: 10px;\n    --countdown-fill-background: #FFFFFF;\n    --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n    \" fill=\"inner-time\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.module.ts ***!
  \************************************************************************/
/*! exports provided: CustomComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsModule", function() { return CustomComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _custom_components_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-components.page */ "./src/app/showcase/custom-components/custom-components.page.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../showcase.service */ "./src/app/showcase/showcase.service.ts");










var CustomComponentsModule = /** @class */ (function () {
    function CustomComponentsModule() {
    }
    CustomComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _custom_components_page__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsPage"]
                    }
                ])
            ],
            declarations: [
                _custom_components_page__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsPage"]
            ],
            providers: [
                _showcase_service__WEBPACK_IMPORTED_MODULE_9__["ShowcaseService"]
            ]
        })
    ], CustomComponentsModule);
    return CustomComponentsModule;
}());



/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background-shade);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 100px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n.showcase-content .custom-checkbox {\n  background: #CCC;\n  color: #000;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n}\n.showcase-content .custom-checkbox ion-label {\n  -webkit-margin-start: 10px;\n          margin-inline-start: 10px;\n}\n.showcase-content .custom-checkbox.checkbox-checked {\n  background: #00AFFF;\n  color: #FFF;\n}\n.showcase-content app-countdown-timer {\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-darkest);\n  padding: 20px;\n  margin-bottom: 40px;\n  background-color: #FFF;\n}\n.showcase-content app-show-hide-password {\n  background-color: #FFF;\n  padding: 0px 15px;\n}\n.showcase-content app-show-hide-password ion-input {\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9jdXN0b20tY29tcG9uZW50cy9jdXN0b20tY29tcG9uZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL2N1c3RvbS1jb21wb25lbnRzL2N1c3RvbS1jb21wb25lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0UsdUJBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0hKO0FES0k7RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0FDSE47QURNSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0pOO0FEUUU7RUFDRSxpREFBQTtFQUNBLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNOSjtBRFNFO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEU0k7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9jdXN0b20tY29tcG9uZW50cy9jdXN0b20tY29tcG9uZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCAxMDBweDtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGNvbG9yOiAjRjkyNjcyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgJi5jaGVja2JveC1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMEFGRkY7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG4gIH1cblxuICBhcHAtY291bnRkb3duLXRpbWVyIHtcbiAgICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAgIC0tY291bnRkb3duLXVuaXQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgfVxuXG4gIGFwcC1zaG93LWhpZGUtcGFzc3dvcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG5cbiAgICBpb24taW5wdXQge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgfVxuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnNob3djYXNlLWNvbnRlbnQgLmN1c3RvbS1jaGVja2JveCB7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNob3djYXNlLWNvbnRlbnQgLmN1c3RvbS1jaGVja2JveCBpb24tbGFiZWwge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLmN1c3RvbS1jaGVja2JveC5jaGVja2JveC1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzAwQUZGRjtcbiAgY29sb3I6ICNGRkY7XG59XG4uc2hvd2Nhc2UtY29udGVudCBhcHAtY291bnRkb3duLXRpbWVyIHtcbiAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgLS1jb3VudGRvd24tdW5pdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuLnNob3djYXNlLWNvbnRlbnQgYXBwLXNob3ctaGlkZS1wYXNzd29yZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgYXBwLXNob3ctaGlkZS1wYXNzd29yZCBpb24taW5wdXQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.page.ts ***!
  \**********************************************************************/
/*! exports provided: CustomComponentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsPage", function() { return CustomComponentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);



var CustomComponentsPage = /** @class */ (function () {
    // Instead of hardcoded one
    // countdownDate = '12/01/2018';
    function CustomComponentsPage() {
        // Relative date (better to showcase UI micro-interactions)
        this.countdownDate = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
    }
    CustomComponentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showcase-custom-components',
            template: __webpack_require__(/*! raw-loader!./custom-components.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/custom-components/custom-components.page.html"),
            styles: [__webpack_require__(/*! ./custom-components.page.scss */ "./src/app/showcase/custom-components/custom-components.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomComponentsPage);
    return CustomComponentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=custom-components-custom-components-module-es5.js.map