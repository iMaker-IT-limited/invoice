(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-inventory-update-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/inventory/update/update.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/inventory/update/update.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n   <ion-item-divider sticky>\n      <ion-title>Update Item {{itemDetail.id}} </ion-title>\n      <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n         <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n   </ion-item-divider>\n\n   <div class=\"testbox\">\n\n      <form [formGroup]=\"createItemForm\" (ngSubmit)=\"createItem()\">\n         <fieldset>\n            <legend>Item ID</legend>\n            <p>\n               <input type=\"number\" name=\"id\" formControlName=\"Item ID\" />\n            </p>\n         </fieldset>\n\n         <fieldset>\n            <legend>Type</legend>\n            <p>\n               <select formControlName=\"Product Type\">\n                  <option value=\"Type\" selected>Select or Type to add</option>\n                  <option value=\"service\">Service</option>\n                  <option value=\"goods\">Goods</option>\n                  <option value=\"others\">Others</option>\n               </select>\n            </p>\n         </fieldset>\n\n         <fieldset>\n            <legend>Name</legend>\n            <p>\n               <input type=\"text\" name=\"name\" formControlName=\"Item Name\" />\n            </p>\n         </fieldset>\n\n         <fieldset>\n            <legend>Unit</legend>\n            <p>\n               <input class=\"name\" type=\"number\" name=\"name\" placeholder=\"leave blank if not applicable\"\n                  formControlName=\"Usage unit\" />\n            </p>\n         </fieldset>\n\n         <fieldset>\n            <legend>Description</legend>\n            <p>\n               <textarea rows=\"5\" formControlName=\"Description\"></textarea>\n            </p>\n         </fieldset>\n\n         <fieldset>\n            <legend>Selling Price</legend>\n            <p>\n               <input type=\"number\" name=\"selling_price\" formControlName=\"Rate\" />\n            </p>\n         </fieldset>\n\n         <hr>\n\n         <ion-button color=\"theme\" expand=\"full\" type=\"submit\">Save</ion-button>\n      </form>\n   </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/firebase/inventory/update/update.module.ts":
/*!************************************************************!*\
  !*** ./src/app/firebase/inventory/update/update.module.ts ***!
  \************************************************************/
/*! exports provided: UpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageModule", function() { return UpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update.page */ "./src/app/firebase/inventory/update/update.page.ts");








var routes = [
    {
        path: '',
        component: _update_page__WEBPACK_IMPORTED_MODULE_7__["UpdatePage"]
    }
];
var UpdatePageModule = /** @class */ (function () {
    function UpdatePageModule() {
    }
    UpdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                // FormAlertPageModule,
                // NotificationsPageModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_update_page__WEBPACK_IMPORTED_MODULE_7__["UpdatePage"]]
        })
    ], UpdatePageModule);
    return UpdatePageModule;
}());



/***/ }),

/***/ "./src/app/firebase/inventory/update/update.page.scss":
/*!************************************************************!*\
  !*** ./src/app/firebase/inventory/update/update.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding: 3rem;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nth, td {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  vertical-align: baseline;\n}\n\nth {\n  padding-right: 2rem;\n  text-align: left;\n}\n\nlabel {\n  display: block;\n}\n\nlabel + label {\n  margin-top: 0.5rem;\n}\n\nhr {\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n}\n\n.testbox {\n  padding: 20px;\n}\n\ninput, textarea, select {\n  width: calc(100% - 10px);\n  padding: 5px !important;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  vertical-align: middle;\n  background: transparent;\n}\n\ntextarea {\n  width: calc(100% - 30px) !important;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  padding: 5px !important;\n  border: 1px solid #ccc;\n  background: transparent;\n  box-shadow: 2px 2px 8px 2px var(--ion-color-theme);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9pbnZlbnRvcnkvdXBkYXRlL3VwZGF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2ludmVudG9yeS91cGRhdGUvdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFLQyxhQUFBO0FDSEQ7O0FETUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0gsc0JBQUE7RUFDRyxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNISjs7QURNQTtFQUNDLG1DQUFBO0FDSEQ7O0FETUE7OztFQUdDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBRUQsdUJBQUE7RUFDSSxrREFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvaW52ZW50b3J5L3VwZGF0ZS91cGRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgcGFkZGluZzogM3JlbTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50aCwgdGQge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxudGgge1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubGFiZWwgKyBsYWJlbCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4udGVzdGJveCB7XG5cdC8vIGRpc3BsYXk6IGZsZXg7XG5cdC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuXHQvLyBoZWlnaHQ6IGluaGVyaXQ7XG5cdHBhZGRpbmc6IDIwcHg7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbnRleHRhcmVhIHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6aG92ZXIsXG5zZWxlY3Q6aG92ZXIge1xuXHRvdXRsaW5lOiBub25lO1xuXHRwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcbi8vXHRiYWNrZ3JvdW5kOiAjZTZlZWY3O1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMnB4IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59IiwiYm9keSB7XG4gIHBhZGRpbmc6IDNyZW07XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGgsIHRkIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnRoIHtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxubGFiZWwgKyBsYWJlbCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4udGVzdGJveCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCkgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6aG92ZXIsXG50ZXh0YXJlYTpob3ZlcixcbnNlbGVjdDpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMnB4IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/firebase/inventory/update/update.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/firebase/inventory/update/update.page.ts ***!
  \**********************************************************/
/*! exports provided: UpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePage", function() { return UpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _invoice_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../invoice.model */ "./src/app/firebase/invoice.model.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var UpdatePage = /** @class */ (function () {
    function UpdatePage(route, authService, navCtrl, firebaseService) {
        this.route = route;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.itemData = new _invoice_model__WEBPACK_IMPORTED_MODULE_5__["ItemModel"]();
        this.itemDetail = new _invoice_model__WEBPACK_IMPORTED_MODULE_5__["ItemModel"]();
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    UpdatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (res) {
            var value = JSON.parse(res.data);
            console.log(value);
            _this.itemDetail = value;
        });
        this.createItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            "Item ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail["Item ID"]),
            "Item Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail["Item Name"]),
            "Description": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail.Description),
            "Rate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail.Rate),
            "Tax1 Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail["Tax1 Name"]),
            "Tax1 Percentage": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail["Tax1 Percentage"]),
            "Tax1 Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail["Tax1 Type"]),
            "Product Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail["Product Type"]),
            "Source": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail.Source),
            "Reference ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail["Reference ID"]),
            "Last Sync Time": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail["Last Sync Time"]),
            "Status": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail.Status),
            "Usage unit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.itemDetail["Usage unit"]),
        });
    };
    UpdatePage.prototype.createItem = function () {
        var _this = this;
        this.itemData["Item ID"] = this.createItemForm.value["Item ID"];
        this.itemData["Item Name"] = this.createItemForm.value["Item Name"];
        this.itemData.Description = this.createItemForm.value.Description;
        this.itemData.Rate = this.createItemForm.value.Rate;
        this.itemData["Tax1 Name"] = this.createItemForm.value["Tax1 Name"];
        this.itemData["Tax1 Percentage"] = this.createItemForm.value["Tax1 Percentage"];
        this.itemData["Tax1 Type"] = this.createItemForm.value["Tax1 Type"];
        this.itemData["Product Type"] = this.createItemForm.value["Product Type"];
        this.itemData["Source"] = this.createItemForm.value["Source"];
        this.itemData["Reference ID"] = this.createItemForm.value["Reference ID"];
        this.itemData["Last Sync Time"] = this.createItemForm.value["Last Sync Time"];
        this.itemData.Status = this.createItemForm.value.Status;
        this.itemData["Usage unit"] = this.createItemForm.value["Usage unit"];
        console.log(this.uid, this.email, this.createItemForm.value);
        this.firebaseService.updateItems(this.itemDetail['id'], this.uid, this.email, this.createItemForm.value).then(function () {
            _this.dismissModal();
        });
    };
    UpdatePage.prototype.dismissModal = function () {
        this.navCtrl.navigateRoot('/firebase/inventory/items');
    };
    UpdatePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    UpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! raw-loader!./update.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/inventory/update/update.page.html"),
            styles: [__webpack_require__(/*! ./update.page.scss */ "./src/app/firebase/inventory/update/update.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
    ], UpdatePage);
    return UpdatePage;
}());



/***/ })

}]);
//# sourceMappingURL=firebase-inventory-update-update-module-es5.js.map