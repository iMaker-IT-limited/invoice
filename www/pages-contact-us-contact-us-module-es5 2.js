(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-us-contact-us-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us/contact-us.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact-us/contact-us.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Contact Us\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<app-header></app-header>\n<ion-content>\n\n  <ion-slides>\n\n    <ion-slide>\n      <!-- 500*130 *  -->\n      <img style=\"width: 100%;\" src=\"../../../assets/images/contact-us/contact-us-banner.png\" alt=\"\">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-card>\n    <ion-card-header>聯絡方法</ion-card-header>\n    <ion-card-content>\n\n      <ion-row class=\"user-info-row\">\n        <ion-col class=\"actions-col\" size=\"12\">\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-button class=\"action-btn\" color=\"theme\">\n                <ion-icon class=\"btn-icon\" color=\"primary\" slot=\"icon-only\" name=\"call\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button class=\"action-btn\" color=\"theme\">\n                <ion-icon class=\"btn-icon\" color=\"primary\" slot=\"icon-only\" name=\"mail\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button class=\"action-btn\" color=\"theme\">\n                <ion-icon class=\"btn-icon\" color=\"primary\" slot=\"icon-only\" name=\"pin\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col class=\"actions-col\" size=\"12\">\n          <ion-row>\n            <ion-col size=\"4\">\n              <a style=\"color: gray; text-decoration: blink;\" href=\"tel:852-9681-2965\">+ 852 9681-2965 何生</a>\n            </ion-col>\n            <ion-col size=\"4\">\n              info@e-schoolland.com\n            </ion-col>\n            <ion-col size=\"4\">\n              九龍觀塘鴻圖道45宏光大廈4樓I-J室\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row class=\"user-preferences-wrapper\">\n        <ion-col size=\"4\">\n          <h4 class=\"preference-name\">電話</h4>\n          <br>\n          <p class=\"preference-value\">\n            <ion-icon slot=\"start\" icon-only name=\"logo-whatsapp\"></ion-icon>\n            + 852 9681-2965 何生\n          </p>\n          <br>\n        </ion-col>\n        <ion-col size=\"4\">\n          <h4 class=\"preference-name\">電子郵件</h4>\n          <br>\n          <p class=\"preference-value\">\n            <ion-icon slot=\"start\" icon-only name=\"mail\"></ion-icon>\n            info@e-schoolland.com\n          </p>\n          <br>\n        </ion-col>\n        <ion-col size=\"4\">\n          <h4 class=\"preference-name\">地址</h4>\n          <br>\n          <p class=\"preference-value\">\n            <ion-icon slot=\"start\" icon-only name=\"pin\"></ion-icon>\n            香港九龍新蒲崗六合街5號利運工業大廈4樓008室\n            <br />\n          </p>\n        </ion-col>\n      </ion-row> -->\n    </ion-card-content>\n\n  </ion-card>\n\n  <iframe\n    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.420542200366!2d114.19680211495537!3d22.337744335304116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340406d09f9baf0d%3A0xd15ac3f7d1191f30!2z5Yip6YGL5bel5bug5aSn5buI!5e0!3m2!1sen!2shk!4v1578643787441!5m2!1sen!2shk\"\n    width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n\n  <app-global-banner></app-global-banner>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/pages/contact-us/contact-us.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: "",
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]
    }
];
var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\nion-header ion-toolbar {\n  --background: var(--page-highlighted-background);\n}\n\n.contact-card-content {\n  --background: var(--page-background);\n  transform: translateZ(0);\n}\n\n.contact-card-content .user-details-wrapper {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin) var(--page-margin);\n  background-color: var(--page-highlighted-background);\n  color: var(--ion-color-light);\n  align-items: center;\n}\n\n.contact-card-content .user-details-wrapper .user-avatar {\n  border: solid 3px var(--ion-color-light);\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper {\n  padding-left: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-name {\n  margin: 0px 0px 5px;\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-handle {\n  margin: 0px;\n  font-weight: 400;\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper {\n  text-align: center;\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-value {\n  margin-right: 5px;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-name {\n  font-size: 16px;\n}\n\n.contact-card-content .user-details-wrapper .user-bio {\n  margin: var(--page-margin) 0px 0px;\n  line-height: 1.2;\n  font-size: 14px;\n}\n\n.contact-card-content .user-preferences-wrapper {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.contact-card-content .user-preferences-wrapper .preference-name {\n  margin: 0px 0px 5px;\n  font-size: 16px;\n}\n\n.contact-card-content .user-preferences-wrapper .preference-value {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--ion-color-dark-tint);\n}\n\n.user-info-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.user-info-row .user-image-col {\n  margin: 0px auto;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-info-row .user-image-col .user-image {\n  border-radius: 50%;\n}\n\n.user-info-row .user-details-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.user-info-row .user-details-col .user-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  min-width: 40%;\n}\n\n.user-info-row .user-details-col .user-age {\n  font-size: 14px;\n  font-weight: 300;\n  min-width: 60%;\n}\n\n.user-info-row .actions-col {\n  text-align: center;\n  margin-top: var(--page-margin);\n}\n\n.user-info-row .actions-col .action-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 4ch;\n  height: 4ch;\n}\n\n.user-info-row .actions-col .action-btn .btn-icon {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9wYWdlcy9jb250YWN0LXVzL2NvbnRhY3QtdXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250YWN0LXVzL2NvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksc0NBQUE7RUFDQSw4Q0FBQTtFQUVBLDhEQUFBO0FDSko7O0FEU0k7RUFDSSxnREFBQTtBQ05SOztBRFVBO0VBQ0ksb0NBQUE7RUFFQSx3QkFBQTtBQ1JKOztBRFVJO0VBQ0ksOEJBQUE7RUFFQSxrREFBQTtFQUNBLG9EQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1RSOztBRFdRO0VBQ0ksd0NBQUE7QUNUWjs7QURZUTtFQUNJLDBDQUFBO0FDVlo7O0FEWVk7RUFDSSxtQkFBQTtBQ1ZoQjs7QURhWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ1hoQjs7QURlUTtFQUNJLGtCQUFBO0VBQ0EseUNBQUE7QUNiWjs7QURlWTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDYmhCOztBRGdCWTtFQUNJLGVBQUE7QUNkaEI7O0FEa0JRO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNoQlo7O0FEb0JJO0VBQ0ksOEJBQUE7RUFFQSwyQkFBQTtBQ25CUjs7QURxQlE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNuQlo7O0FEc0JRO0VBQ0ksNENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQ3BCWjs7QUR5QkE7RUFDSSw4QkFBQTtFQUVBLDJCQUFBO0FDdkJKOztBRHlCSTtFQUNJLGdCQUFBO0VBQ0EsMkNBQUE7QUN2QlI7O0FEeUJRO0VBQ0ksa0JBQUE7QUN2Qlo7O0FEMkJJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3pCUjs7QUQyQlE7RUFDSSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0FDekJaOztBRDRCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUMxQlo7O0FEOEJJO0VBQ0ksa0JBQUE7RUFDQSw4QkFBQTtBQzVCUjs7QUQ4QlE7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtBQzdCWjs7QUQrQlk7RUFDSSxlQUFBO0FDN0JoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcblxyXG4vLyBDT05UQUNUIENBUkQgUEFHRSBDU1NcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xyXG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuXHJcbiAgICAtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTtcclxufVxyXG5cclxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kKTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhY3QtY2FyZC1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgIC8vIFRvIGZpeCBoYWxmIHBpeGVsIGxpbmUgYmV0d2VlbiBpb24taGVhZGVyIGFuZCAgaW9uLWNvbnRlbnRcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuXHJcbiAgICAudXNlci1kZXRhaWxzLXdyYXBwZXIge1xyXG4gICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAudXNlci1hdmF0YXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXItaW5mby13cmFwcGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cclxuICAgICAgICAgICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudXNlci1oYW5kbGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci1zdGF0cy13cmFwcGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgICAgICAgICAgIC51c2VyLXN0YXQtdmFsdWUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudXNlci1zdGF0LW5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlci1iaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIge1xyXG4gICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAgICAgICAucHJlZmVyZW5jZS1uYW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByZWZlcmVuY2UtdmFsdWUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udXNlci1pbmZvLXJvdyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAgIC51c2VyLWltYWdlLWNvbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cclxuICAgICAgICAudXNlci1pbWFnZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItZGV0YWlscy1jb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2VyLWFnZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb25zLWNvbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcbiAgICAgICAgLmFjdGlvbi1idG4ge1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA0Y2g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNGNoO1xyXG5cclxuICAgICAgICAgICAgLmJ0bi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQpO1xufVxuXG4uY29udGFjdC1jYXJkLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItYXZhdGFyIHtcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItbmFtZSB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLWluZm8td3JhcHBlciAudXNlci1oYW5kbGUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItc3RhdHMtd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLXN0YXRzLXdyYXBwZXIgLnVzZXItc3RhdC12YWx1ZSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLXN0YXRzLXdyYXBwZXIgLnVzZXItc3RhdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1iaW8ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIgLnByZWZlcmVuY2UtbmFtZSB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5wcmVmZXJlbmNlLXZhbHVlIHtcbiAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xufVxuXG4udXNlci1pbmZvLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnVzZXItaW5mby1yb3cgLnVzZXItaW1hZ2UtY29sIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51c2VyLWluZm8tcm93IC51c2VyLWltYWdlLWNvbCAudXNlci1pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi51c2VyLWluZm8tcm93IC51c2VyLWRldGFpbHMtY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItaW5mby1yb3cgLnVzZXItZGV0YWlscy1jb2wgLnVzZXItbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBtaW4td2lkdGg6IDQwJTtcbn1cbi51c2VyLWluZm8tcm93IC51c2VyLWRldGFpbHMtY29sIC51c2VyLWFnZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWluLXdpZHRoOiA2MCU7XG59XG4udXNlci1pbmZvLXJvdyAuYWN0aW9ucy1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51c2VyLWluZm8tcm93IC5hY3Rpb25zLWNvbCAuYWN0aW9uLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbn1cbi51c2VyLWluZm8tcm93IC5hY3Rpb25zLWNvbCAuYWN0aW9uLWJ0biAuYnRuLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.ts ***!
  \*****************************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsPage = /** @class */ (function () {
    function ContactUsPage() {
    }
    ContactUsPage.prototype.ngOnInit = function () {
    };
    ContactUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us/contact-us.page.html"),
            styles: [__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/pages/contact-us/contact-us.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsPage);
    return ContactUsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contact-us-contact-us-module-es5.js.map