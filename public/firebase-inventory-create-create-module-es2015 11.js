(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-inventory-create-create-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/inventory/create/create.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/inventory/create/create.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n   <ion-item-divider sticky>\n      <ion-title>New Item</ion-title>\n      <ion-button fill=\"clear\" color=\"theme\" (click)=\"dismissModal()\">\n         <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n   </ion-item-divider>\n   <div class=\"testbox\">\n      <form [formGroup]=\"createItemForm\" (ngSubmit)=\"createItem()\">\n         <fieldset>\n            <legend>Item ID</legend>\n            <p>\n               <input type=\"number\" name=\"id\" formControlName=\"Item ID\" />\n            </p>\n         </fieldset>\n\n         <fieldset>\n            <legend>Type</legend>\n            <p>\n               <select formControlName=\"Product Type\">\n                  <option value=\"Type\" selected>Select or Type to add</option>\n                  <option value=\"service\">Service</option>\n                  <option value=\"goods\">Goods</option>\n                  <option value=\"others\">Others</option>\n               </select>\n            </p>\n         </fieldset>\n\n         <fieldset>\n            <legend>Name</legend>\n            <p>\n               <input type=\"text\" name=\"name\" formControlName=\"Item Name\" />\n            </p>\n         </fieldset>\n\n         <fieldset>\n            <legend>Unit</legend>\n            <p>\n               <input class=\"name\" type=\"number\" name=\"name\" placeholder=\"leave blank if not applicable\"\n                  formControlName=\"Usage unit\" />\n            </p>\n         </fieldset>\n\n         <fieldset>\n            <legend>Description</legend>\n            <p>\n               <textarea rows=\"5\" formControlName=\"Description\"></textarea>\n            </p>\n         </fieldset>\n\n         <fieldset>\n            <legend>Selling Price</legend>\n            <p>\n               <input type=\"number\" name=\"selling_price\" formControlName=\"Rate\" />\n            </p>\n         </fieldset>\n\n         <hr>\n\n         <ion-button color=\"theme\" expand=\"full\" type=\"submit\">Save</ion-button>\n      </form>\n   </div>\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/firebase/inventory/create/create.module.ts":
/*!************************************************************!*\
  !*** ./src/app/firebase/inventory/create/create.module.ts ***!
  \************************************************************/
/*! exports provided: CreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageModule", function() { return CreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create.page */ "./src/app/firebase/inventory/create/create.page.ts");








const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_7__["CreatePage"]
    }
];
let CreatePageModule = class CreatePageModule {
};
CreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_7__["CreatePage"]]
    })
], CreatePageModule);



/***/ }),

/***/ "./src/app/firebase/inventory/create/create.page.scss":
/*!************************************************************!*\
  !*** ./src/app/firebase/inventory/create/create.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding: 3rem;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nth, td {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  vertical-align: baseline;\n}\n\nth {\n  padding-right: 2rem;\n  text-align: left;\n}\n\nlabel {\n  display: block;\n}\n\nlabel + label {\n  margin-top: 0.5rem;\n}\n\nhr {\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n}\n\n.testbox {\n  padding: 20px;\n}\n\ninput, textarea, select {\n  width: calc(100% - 10px);\n  padding: 5px !important;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  vertical-align: middle;\n  background: transparent;\n}\n\ntextarea {\n  width: calc(100% - 30px) !important;\n}\n\ninput:hover,\ntextarea:hover,\nselect:hover {\n  outline: none;\n  padding: 5px !important;\n  border: 1px solid #ccc;\n  background: transparent;\n  box-shadow: 2px 2px 8px 2px var(--ion-color-theme);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9maXJlYmFzZS9pbnZlbnRvcnkvY3JlYXRlL2NyZWF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2ludmVudG9yeS9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFLQyxhQUFBO0FDSEQ7O0FETUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0gsc0JBQUE7RUFDRyxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNISjs7QURNQTtFQUNDLG1DQUFBO0FDSEQ7O0FETUE7OztFQUdDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBRUQsdUJBQUE7RUFDSSxrREFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvaW52ZW50b3J5L2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgcGFkZGluZzogM3JlbTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50aCwgdGQge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxudGgge1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubGFiZWwgKyBsYWJlbCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4udGVzdGJveCB7XG5cdC8vIGRpc3BsYXk6IGZsZXg7XG5cdC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuXHQvLyBoZWlnaHQ6IGluaGVyaXQ7XG5cdHBhZGRpbmc6IDIwcHg7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbnRleHRhcmVhIHtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmhvdmVyLFxudGV4dGFyZWE6aG92ZXIsXG5zZWxlY3Q6aG92ZXIge1xuXHRvdXRsaW5lOiBub25lO1xuXHRwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcbi8vXHRiYWNrZ3JvdW5kOiAjZTZlZWY3O1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMnB4IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59IiwiYm9keSB7XG4gIHBhZGRpbmc6IDNyZW07XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGgsIHRkIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnRoIHtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxubGFiZWwgKyBsYWJlbCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4udGVzdGJveCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCkgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6aG92ZXIsXG50ZXh0YXJlYTpob3ZlcixcbnNlbGVjdDpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMnB4IHZhcigtLWlvbi1jb2xvci10aGVtZSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/firebase/inventory/create/create.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/firebase/inventory/create/create.page.ts ***!
  \**********************************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _invoice_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../invoice.model */ "./src/app/firebase/invoice.model.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");







let CreatePage = class CreatePage {
    constructor(authService, navCtrl, firebaseService) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.itemData = new _invoice_model__WEBPACK_IMPORTED_MODULE_5__["ItemModel"]();
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    ngOnInit() {
        this.createItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            "Item ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Date.now()),
            "Item Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Description": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Rate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Tax1 Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Tax1 Percentage": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Tax1 Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Product Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Source": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](1),
            "Reference ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Last Sync Time": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Status": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            "Usage unit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            // set to 0 so that to hide the bug of update total price in create estimate items
            "quantity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            "amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    }
    createItem() {
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
        this.itemData.quantity = this.createItemForm.value['quantity'];
        // amount => rate * quantity => Rate * 1
        // this.itemData.amount = this.createItemForm.value["amount"];
        this.itemData.amount = this.createItemForm.value["Rate"];
        console.log(this.uid, this.email, this.createItemForm.value);
        this.firebaseService.createItems(this.uid, this.email, this.createItemForm.value).then(() => {
            this.dismissModal();
        });
    }
    dismissModal() {
        this.navCtrl.navigateBack('/firebase/inventory/items');
    }
};
CreatePage.ctorParameters = () => [
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
];
CreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: __webpack_require__(/*! raw-loader!./create.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/inventory/create/create.page.html"),
        styles: [__webpack_require__(/*! ./create.page.scss */ "./src/app/firebase/inventory/create/create.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
], CreatePage);

// onReset() {
//   this.createSupplierForm = new FormGroup({
//     name: new FormControl("", Validators.required),
//     phone: new FormControl("", Validators.required),
//     email: new FormControl(
//       "",
//       Validators.compose([
//         Validators.required,
//         Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
//       ])
//     ),
//     cate_1: new FormControl(""),
//     cate_2: new FormControl(""),
//     cate_3: new FormControl(""),
//     cate_4: new FormControl(""),
//     average_speed: new FormControl(0),
//     reply_rate: new FormControl(0),
//     editor_choice: new FormControl(),
//     class_size: new FormControl({ lower: 10, upper: 42 }),
//     target_user_age: new FormControl({ lower: 10, upper: 16 }),
//     class_length: new FormControl({ lower: 10, upper: 42 }),
//     company_intro: new FormControl(),
//     tutor_qual: new FormControl(),
//     competition_exp: new FormControl()
//   });
// }
/*

    "Customer Name": "Joan",
    "Estimate Number": "SQ 19101740-B",
    "Reference ID": "",
    "Estimate Date": "2017-10-19",
    "Expiry Date": "",
    "Sales person": "Catrina Cheng",
    "Project Name": "",
    "Notes": "",
    "Terms & Conditions": "Delivery time: 14 working days (5-7 working days for urgent orders)\nFrom the confirmation of the manuscript and the approved version\nAll design changes need to be notified before six o'clock in each working day\n#Minor changes will be After receiving the notice, the revised manuscript will be delivered to the guest at three o'clock on the next working day\n#big revision will be handed over to the guest after three o’clock on the two working days after receiving the notice",


    "Estimate ID": 962254000000087000,
    "Estimate Status": "sent",
    "Customer ID": 962254000000087000,
    "PurchaseOrder": "",
    "Currency Code": "HKD",
    "Exchange Rate": 1,
    "Discount Type": "item_level",
    "Is Discount Before Tax": true,
    "Entity Discount Percent": 0,
    "Is Inclusive Tax": false,
    "SubTotal": 3888,
    "Total": 3888,
    "Adjustment": 0,
    "Project ID": "",
    "Billing Address": "",
    "Billing City": "",
    "Billing State": "",
    "Billing Country": "",
    "Billing Code": "",
    "Billing Fax": "",
    "Template Name": "SQ",
    "Adjustment Description": "",
    "Shipping Address": "",
    "Shipping City": "",
    "Shipping State": "",
    "Shipping Country": "",
    "Shipping Code": "",
    "Shipping Fax": "",
    "Source": 1,
    "Last Sync Time": "",
    "Shipping Charge": 0,
    "Shipping Charge Tax ID": "",
    "Shipping Charge Tax Amount": "",
    "Shipping Charge Tax Name": "",
    "Shipping Charge Tax %": "",
    "Shipping Charge Tax Type": "",
    "Item Name": "Uniform-Fluorescent vest jacket",
    "Item Desc": "Background color: fluorescent green\nmaterial: windbreaker\nprinting method: silk screen\nprinting content: 2 A4 monochrome logo",
    "Quantity": 36,
    "Discount": 0,
    "Discount Amount": 0,
    "Item Tax Amount": 0,
    "Item Total": 3888,
    "Account": "",
    "SKU": "",
    "Usage unit": "piece",
    "Item Price": 108,
    "Tax ID": "",
    "Item Tax": "",
    "Item Tax %": "",
    "Item Tax Type": ""

*/
/*
   "Customer Name": "Mr. Wai Kwok Mok",
   "Invoice Number": "PA-6112051-A",
   "Invoice ID": 2401730000000078091,
   "Invoice Date": "2020-11-06",
   "Payment Terms": 3,
   "Sales person": "Phyllis",
   "Project Name": "",
   "Notes": "",

   "Estimate Number": "",
   "Company Name": "SHARISM LIMITED",
   "Customer ID": 2401730000000078021,
   "Branch ID": "",
   "Branch Name": "",
   "Due Date": "2020-11-09",
   "Expected Payment Date": "",
   "PurchaseOrder": "",
   "Invoice Status": "Overdue",
   "Template Name": "Invoice",
   "Currency Code": "HKD",
   "Exchange Rate": 1,
   "Discount Type": "item_level",
   "Is Discount Before Tax": true,
   "Entity Discount Percent": 0,
   "Entity Discount Amount": 0,
   "Item Name": "D-Biz -E-Shop Deposit",
   "Item Desc": "Responsive design -- mobile and desktop version\n3 - 5 Banner design\n1 Logo design\n30 Icon design\nLanguage versions : Traditional Chinese\nUnlimited Product display\nPayment gateway -- stripe, paypal, bank transfer, cash on delivery\nCopywriting will be provided by the client\nShopping cart\nContent management system backend -- able to create/\n/read/update/delete product information(individual \nor in bulk)\nCustomer Login System -- customer can login their account \nand check the wishlist, purchase history \n\n*First Year Hosting and Server maintenance will be included.",
   "Quantity": 1,
   "Usage unit": "",
   "Item Price": 30000,
   "Discount": 0,
   "Discount Amount": 0,
   "Expense Reference ID": "",
   "Project ID": "",
   "Is Inclusive Tax": false,
   "Tax1 ID": "",
   "Item Tax1": "",
   "Item Tax1 %": "",
   "Item Tax1 Amount": "",
   "Item Tax1 Type": "",
   "Item Total": 30000,
   "SubTotal": 30000,
   "Total": 30000,
   "Balance": 30000,
   "Shipping Charge": 0,
   "Shipping Charge Tax ID": "",
   "Shipping Charge Tax Amount": "",
   "Shipping Charge Tax Name": "",
   "Shipping Charge Tax %": "",
   "Shipping Charge Tax Type": "",
   "Adjustment": 0,
   "Adjustment Description": "Adjustment",
   "Round Off": 0,
   "Payment Terms Label": "Custom",
   "Last Payment Date": "",
   "Terms & Conditions": "Remarks: Server and maintenance will be started after the project is finished.\n* 五萬元以下訂單，需全數繳付。\t\t\n 銀行入帳資料：\t\t\n1. 入帳-大眾銀行（IMAKER IT LIMITED) account no. 726-186583-031\t\t\n2. Credit Card (Please notice us if you would like to pay in Paypal.)\t\t\n\t\t\n\"顧客請於付款後以下列方法通知我們確認, 確認付款後,我們會盡\n快處理閣下之訂單\"\t\t\n\"1. 拍下入數收據並把照片以 Whatsapp等手機程式發送到\n    +852 9697 9157, 並提供發單編號.\"\t\t\n\"2.回覆電郵並提供入數收據副本,或付款金額, 付款日期、時間及\n    交易備考編號\"\t\t\n   我們會在收實款額後向客人發。電郵確定,並開始安排製造/設計。\t\t\n  ＊請保留閣下之入數收據直至交易完成,如過戶入脹出現問題,\t\t\n   本公司將要求顧客電郵該收據給我們以作參考\t\t\n\t\t\n備註：\t\t\n1.除非特別註明, 否則所列出之金額一律以港幣(HKD)計算\t\t\n\"2.如使用支票,電匯,跨行轉賬等非即時結算方式付款, 本公司   \n會在收實款額後才進行確認程序，敬請客人注意·\"\t\t\n\"3.星期一至五18：00後(星期六12:00後)收到之付款將於\n下一個工作天跟進\"\t\t",
   "Subject": "",
   "LateFee Name": "",
   "LateFee Type": "% of Invoice",
   "LateFee Rate": 0,
   "LateFee Amount": 0,
   "LateFee Frequency": "Every Month",
   "WriteOff Date": "",
   "WriteOff Exchange Rate": 1,
   "WriteOff Amount": 0,
   "Recurrence Name": "",
   "PayPal": false,
   "Authorize.Net": false,
   "Google Checkout": false,
   "Payflow Pro": false,
   "Stripe": false,
   "2Checkout": false,
   "Braintree": false,
   "Forte": false,
   "WorldPay": false,
   "Payments Pro": false,
   "Square": false,
   "WePay": false,
   "Razorpay": false,
   "GoCardless": false,
   "Partial Payments": false,
   "Billing Address": "",
   "Billing City": "",
   "Billing State": "",
   "Billing Country": "",
   "Billing Code": "",
   "Billing Fax": "",
   "Billing Phone": "",
   "Shipping Address": "",
   "Shipping City": "",
   "Shipping State": "",
   "Shipping Country": "",
   "Shipping Code": "",
   "Shipping Fax": "",
   "Shipping Phone Number": ""

   */ 


/***/ })

}]);
//# sourceMappingURL=firebase-inventory-create-create-module-es2015.js.map