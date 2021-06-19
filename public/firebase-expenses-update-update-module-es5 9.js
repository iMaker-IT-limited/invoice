(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-expenses-update-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/expenses/update/update.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/expenses/update/update.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/firebase/expenses/update/update.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/firebase/expenses/update/update.module.ts ***!
  \***********************************************************/
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
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update.page */ "./src/app/firebase/expenses/update/update.page.ts");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _update_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePage"]
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
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_update_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePage"]]
        })
    ], UpdatePageModule);
    return UpdatePageModule;
}());



/***/ }),

/***/ "./src/app/firebase/expenses/update/update.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/firebase/expenses/update/update.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL2V4cGVuc2VzL3VwZGF0ZS91cGRhdGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/firebase/expenses/update/update.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/firebase/expenses/update/update.page.ts ***!
  \*********************************************************/
/*! exports provided: UpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePage", function() { return UpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _invoice_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../invoice.model */ "./src/app/firebase/invoice.model.ts");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");













var UpdatePage = /** @class */ (function () {
    //////////////////////////
    function UpdatePage(authService, navCtrl, firebaseService, route, formBuilder, http, papa) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.http = http;
        this.papa = papa;
        this.estimateData = new _invoice_model__WEBPACK_IMPORTED_MODULE_7__["EstimateModel"]();
        this.estimatesDetail = new _invoice_model__WEBPACK_IMPORTED_MODULE_7__["EstimateModel"]();
        this.uid = this.authService.uid();
        this.email = this.authService.email();
    }
    UpdatePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (res) {
            var value = JSON.parse(res.data);
            console.log(value);
            _this.estimatesDetail = value;
        });
        this.readItems();
        this.buildForm();
    };
    UpdatePage.prototype.ionViewWillEnter = function () {
        this.getCsvData();
    };
    UpdatePage.prototype.updateEstimate = function () {
        var _this = this;
        // update the salesList array --> need to update
        console.log(this.uid, this.email, this.estimatesDetail, this.reimburshForm.value);
        console.log(this.totalPrice);
        this.reimburshForm.value['Total'] = this.totalPrice;
        this.firebaseService.updateEstimates(this.estimatesDetail['id'], this.uid, this.email, this.reimburshForm.value).then(function () {
            _this.dismissModal();
        });
    };
    UpdatePage.prototype.dismissModal = function () {
        this.navCtrl.navigateBack('/firebase/quotes');
    };
    UpdatePage.prototype.testTablePDF = function () {
        var columns = [
            { title: "ID", dataKey: "id" },
            { title: "Name", dataKey: "name" },
            { title: "Country", dataKey: "country" },
        ];
        var rows = [
            { "id": 1, "name": "Shaw", "country": "Tanzania" },
            { "id": 2, "name": "Nelson", "country": "Kazakhstan" },
            { "id": 3, "name": "Garcia", "country": "Madagascar" },
        ];
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__('p', 'pt');
        doc.autoTable(columns, rows, {
            // theme: 'striped' | 'grid' | 'plain' | 'css' = 'striped'
            theme: 'striped',
            styles: { fillColor: [129, 216, 208] },
            columnStyles: {
                id: { fillColor: 255 }
            },
            margin: { top: 160 },
            beforePageContent: function (data) {
                doc.text("Header", 40, 30);
            }
        });
        doc.save('table.pdf');
    };
    UpdatePage.prototype.buildForm = function () {
        var _this = this;
        this.reimburshForm = this.formBuilder.group({
            "Estimate Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Estimate Date"]),
            "Estimate ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Estimate ID"]),
            "Estimate Number": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Estimate Number"]),
            "Estimate Status": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('revised'),
            "Customer ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Customer ID"]),
            "Expiry Date": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Expiry Date"]),
            "PurchaseOrder": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.PurchaseOrder),
            "Currency Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Currency Code"]),
            "Exchange Rate": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Exchange Rate"]),
            "Discount Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Discount Type"]),
            "Is Discount Before Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Is Discount Before Tax"]),
            "Entity Discount Percent": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Entity Discount Percent"]),
            "Is Inclusive Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Is Inclusive Tax"]),
            "SubTotal": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.SubTotal),
            "Total": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            "Adjustment": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Adjustment),
            "Notes": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Notes),
            'Terms': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Terms),
            "Terms & Conditions": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Terms & Conditions"]),
            "Customer Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Customer Name"]),
            "Project Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Project Name"]),
            // orderNumber: this.formBuilder.control(null),
            "Project ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Project ID"]),
            // salesPerson: this.formBuilder.control(null),
            "Sales person": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Sales person"]),
            "Billing Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Billing Address"]),
            "Billing City": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Billing City"]),
            "Billing State": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Billing State"]),
            "Billing Country": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Billing Country"]),
            "Billing Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Billing Code"]),
            "Billing Fax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Billing Fax"]),
            "Template Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Template Name"]),
            "Adjustment Description": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Adjustment Description"]),
            "Shipping Address": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Address"]),
            "Shipping City": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping City"]),
            "Shipping State": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping State"]),
            "Shipping Country": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Country"]),
            "Shipping Code": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Code"]),
            "Shipping Fax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Fax"]),
            "Source": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Source),
            "Reference ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Reference ID"]),
            "Last Sync Time": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Last Sync Time"]),
            "Shipping Charge": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Charge"]),
            "Shipping Charge Tax ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Charge Tax ID"]),
            "Shipping Charge Tax Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Charge Tax Amount"]),
            "Shipping Charge Tax Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Charge Tax Name"]),
            "Shipping Charge Tax %": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Charge Tax %"]),
            "Shipping Charge Tax Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Shipping Charge Tax Type"]),
            "Item Name": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Name"]),
            "Item Desc": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Desc"]),
            "Quantity": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Quantity),
            "Discount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Discount),
            "Discount Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Discount Amount"]),
            "Item Tax Amount": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Tax Amount"]),
            "Item Total": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Total"]),
            "Account": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.Account),
            "SKU": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail.SKU),
            "Usage unit": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Usage unit"]),
            "Item Price": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Price"]),
            "Tax ID": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Tax ID"]),
            "Item Tax": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Total"]),
            "Item Tax %": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Tax %"]),
            "Item Tax Type": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.estimatesDetail["Item Tax Type"]),
            // this one would be the first item in the group array
            // salesList: this.formBuilder.array([
            //   this.formBuilder.group({
            //     quantity: this.formBuilder.control(null),
            //     Rate: this.formBuilder.control(null),
            //     amount: this.formBuilder.control(null),
            //     "Description": this.formBuilder.control(null),
            //     "Item Name": this.formBuilder.control(null),
            //   }),
            // ]),
            salesList: this.formBuilder.array(this.estimatesDetail.salesList.map(function (data) { return _this.createSalesList(data); }))
        });
        //    this.salesListArray = this.estimatesDetail.salesList as FormArray;
        this.salesListArray = this.reimburshForm.get('salesList');
        console.log(this.salesListArray.value);
    };
    UpdatePage.prototype.createSalesList = function (contact) {
        return this.formBuilder.group({
            quantity: [contact.quantity],
            Rate: [contact.Rate],
            amount: [contact.amount],
            Description: [contact.Description],
            "Item Name": [contact['Item Name']],
        });
    };
    UpdatePage.prototype.returnProduct = function (a, b) {
        return a * b;
    };
    UpdatePage.prototype.jsonstringify = function (value) {
        return JSON.stringify(value);
    };
    // get preset customer list 
    UpdatePage.prototype.getCsvData = function () {
        var _this = this;
        this.firebaseService.readContactsinCSV(this.uid, this.email).subscribe(function (res) {
            _this.downloadURL = res.userData['downloadURL'];
            console.log('csv import value: ', res, _this.downloadURL);
            _this.loadCSV();
            setTimeout(function () {
                _this.exportCSV();
                console.log('export CSV');
            }, 2000);
            setTimeout(function () {
                _this.convertCSVtoJSON();
            }, 4000);
        });
    };
    UpdatePage.prototype.loadCSV = function () {
        var _this = this;
        console.log('load CSV');
        this.http.get(this.downloadURL, {
            responseType: 'text'
        }).subscribe(function (data) { return _this.extractData(data); }, function (err) { return console.log('error', err); });
    };
    UpdatePage.prototype.extractData = function (res) {
        var _this = this;
        var csvData = res || '';
        this.papa.parse(csvData, {
            complete: function (parsedData) {
                _this.csvData = parsedData.data;
                console.log(parsedData);
                //  console.log(parsedData.data.splice(0, 1)[0]);
                _this.headerRow = parsedData.data.splice(0, 1)[0];
                console.log(_this.headerRow);
            }
        });
        console.log(res, this.csvData);
    };
    UpdatePage.prototype.exportCSV = function () {
        var csv = this.papa.unparse({
            fields: this.headerRow,
            data: this.csvData
        });
        this.csv = csv;
        console.log('header row: ', this.headerRow);
        console.log('csv: ', this.csvData);
        //    console.log('contacts: ', this.contacts);
        // if (this.plt.is('cordova')) {
        //   console.log('cordova');
        // } else {
        //   console.log('not cordova');
        //   var blob = new Blob([csv]);
        //   var a = window.document.createElement('a');
        //   a.href = window.URL.createObjectURL(blob);
        //   a.download = 'contacts.csv';
        //   document.body.appendChild(a);
        //   a.click();
        //   document.body.removeChild(a);
        // }
    };
    UpdatePage.prototype.convertCSVtoJSON = function () {
        console.log(this.csv);
        // our dummy CSV let csvStr = `ONE,TWO,THREE,FOUR,FIVE "escape""quote","escape,comma",no quotes,"double""""quote","quote"",comma" true,123,null,undefined,"[false,456,null]" true,123,null,undefined,{"one":"two"}`; 
        // running Papa Parse, you just pass it your csv. 
        // our dummy CSV 
        // let csvStr = `ONE,TWO,THREE,FOUR,FIVE "escape""quote","escape,comma",no quotes,"double""""quote","quote"",comma" true,123,null,undefined,"[false,456,null]" true,123,null,undefined,{"one":"two"}`;
        // running Papa Parse, you just pass it your csv. 
        var csv = this.papa.parse(this.csv, {
            delimiter: "",
            newline: "",
            quoteChar: '"Name"',
            escapeChar: '"',
            header: true,
            dynamicTyping: false,
            skipEmptyLines: true
        });
        // the arrays of csv fields are in the data property 
        console.log(this.csv, csv.data);
        this.contacts = csv.data;
    };
    // end of get preset customer list
    // call items list data
    UpdatePage.prototype.readItems = function () {
        var _this = this;
        console.log(this.email, this.uid);
        this.firebaseService.readItems(this.uid, this.email).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (changes) {
            return changes.map(function (c) {
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: c.payload.doc.id }, c.payload.doc.data()));
            });
        })).subscribe(function (data) {
            _this.customeditemsList = data;
            console.log(_this.customeditemsList, _this.customeditemsList.length);
        });
    };
    UpdatePage.prototype.onPush = function (value) {
        console.log(value);
        // this.salesListArray.push(value);
        var formGroup = this.formBuilder.group({
            //   itemName: this.formBuilder.control(null),
            //   itemDetail: this.formBuilder.control(null),
            quantity: this.formBuilder.control(0),
            Rate: this.formBuilder.control(value['Rate']),
            // tax: this.formBuilder.control(null),
            amount: this.formBuilder.control(1 * value['Rate']),
            "Description": this.formBuilder.control(value['Description']),
            // "Item ID": this.formBuilder.control(this.itemSelected["Item ID"]),
            "Item Name": this.formBuilder.control(value['Item Name']),
        });
        // this.arr.push(formGroup.value);
        // this.arr = this.reimburshForm.get('salesList') as FormArray;
        this.value = value;
        console.log(this.salesListArray.value, value);
        this.addSalesListItem();
    };
    UpdatePage.prototype.addSalesListItem = function () {
        console.log(this.value, this.salesListArray.value);
        var formGroup = this.formBuilder.group({
            quantity: this.formBuilder.control(0),
            Rate: this.formBuilder.control(this.value['Rate']),
            amount: this.formBuilder.control(this.value['amount']),
            "Description": this.formBuilder.control(this.value['Description']),
            "Item Name": this.formBuilder.control(this.value['Item Name']),
        });
        this.salesListArray.push(formGroup);
        this.salesListArray = this.reimburshForm.get('salesList');
        console.log(this.salesListArray.value);
    };
    UpdatePage.prototype.onCreateInventoryItemPage = function () {
        this.navCtrl.navigateForward('/firebase/create%23inventory');
    };
    UpdatePage.prototype.removeSalesListItem = function (index) {
        console.log(index);
        this.salesListArray.removeAt(index);
        this.salesListArray = this.reimburshForm.get('salesList');
        console.log(this.salesListArray.value);
        this.totalPrice = this.returnSum();
        console.log(this.totalPrice);
    };
    UpdatePage.prototype.onQtyChange = function (e, Rate, f) {
        // const qty = (e.target as HTMLInputElement).value;
        // console.log(qty, Rate);
        // const product = Number(qty) * Rate
        // console.log(product);
        // f.get('amount').setValue(qty * price);
        var qty = e.target.value;
        var price = f.get('Rate').value;
        var product = Number(qty) * price;
        console.log(f, product);
        f.get('amount').setValue(Number(qty) * price);
        this.totalPrice = this.returnSum();
        console.log(this.totalPrice);
    };
    UpdatePage.prototype.onPriceChange = function (e, quantity, f) {
        // const price = (e.target as HTMLInputElement).value;
        // console.log(quantity, price);
        // const product = Number(price) * quantity;
        // console.log(product);
        //  f.get('amount').setValue(qty * price);
        var qty = f.get('quantity').value;
        var price = e.target.value;
        var product = qty * Number(price);
        console.log(f, product);
        f.get('amount').setValue(qty * Number(price));
        this.totalPrice = this.returnSum();
        console.log(this.totalPrice);
    };
    UpdatePage.prototype.returnSum = function () {
        var totalPrice = 0;
        //   console.log(this.reimburshForm.value.salesList);
        this.reimburshForm.value.salesList.forEach(function (element) {
            if (element.amount) {
                //   console.log(element.amount);
                totalPrice += element.amount;
            }
        });
        console.log(totalPrice);
        return totalPrice;
    };
    UpdatePage.ctorParameters = function () { return [
        { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
        { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__["Papa"] }
    ]; };
    UpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! raw-loader!./update.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/expenses/update/update.page.html"),
            styles: [__webpack_require__(/*! ./update.page.scss */ "./src/app/firebase/expenses/update/update.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _firebase_integration_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_11__["Papa"]])
    ], UpdatePage);
    return UpdatePage;
}());

// onReset() {
//   this.createEstimateForm = new FormGroup({
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
//     teaching_materials: new FormControl("rental"),
//     company_intro: new FormControl(),
//     tutor_qual: new FormControl(),
//     competition_exp: new FormControl()
//   });
// }


/***/ })

}]);
//# sourceMappingURL=firebase-expenses-update-update-module-es5.js.map