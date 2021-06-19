(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-353a032e.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-353a032e.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _this = undefined;

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var router;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-4e92c885.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-4e92c885.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-c90aaa66.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-c90aaa66.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, h, i, n, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return renderHiddenInput; });
var rIC = function (callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
var hasShadowDom = function (el) {
    return !!el.shadowRoot && !!el.attachShadow;
};
var findItemLabel = function (componentEl) {
    var itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
var renderHiddenInput = function (always, container, name, value, disabled) {
    if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};
var clamp = function (min, n, max) {
    return Math.max(min, Math.min(n, max));
};
var assert = function (actual, reason) {
    if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
var now = function (ev) {
    return ev.timeStamp || Date.now();
};
var pointerCoord = function (ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
var isEndSide = function (side) {
    var isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error("\"" + side + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
    }
};
var debounceEvent = function (event, wait) {
    var original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
var debounce = function (func, wait) {
    if (wait === void 0) { wait = 0; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout.apply(void 0, [func, wait].concat(args));
    };
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-cae2ca23.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-cae2ca23.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var documentFragmentChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes[i];
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (element) {
    return (element.children != null) ? element.children : element.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./src/app/deals/deals.service.ts":
/*!****************************************!*\
  !*** ./src/app/deals/deals.service.ts ***!
  \****************************************/
/*! exports provided: DealsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsService", function() { return DealsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/deals-listing.model */ "./src/app/deals/listing/deals-listing.model.ts");
/* harmony import */ var _details_deals_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/deals-details.model */ "./src/app/deals/details/deals-details.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var DealsService = /** @class */ (function () {
    function DealsService(http) {
        this.http = http;
    }
    Object.defineProperty(DealsService.prototype, "relativeDates", {
        get: function () {
            return [
                dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss'),
                dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(7, 'day').format('MM/DD/YYYY'),
                dayjs__WEBPACK_IMPORTED_MODULE_3___default()().subtract(1, 'month').format('MM/DD/YYYY'),
                dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(2, 'month').format('MM/DD/YYYY')
            ];
        },
        enumerable: true,
        configurable: true
    });
    DealsService.prototype.getListingDataSource = function () {
        var _this = this;
        return this.http.get('./assets/sample-data/deals/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (listingData) {
            // using rest operator to divide the data https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb
            var items = listingData.items, otherData = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](listingData, ["items"]);
            var itemsWithRelativeDates = items.map(function (dealItem, index) {
                // Relative date (better to showcase UI micro-interactions)
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dealItem, { expirationDate: _this.relativeDates[index] });
            });
            // using spread operator to concat the data https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, otherData, { items: itemsWithRelativeDates });
        }));
    };
    DealsService.prototype.getListingStore = function (dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_4__["DealsListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    };
    DealsService.prototype.getDetailsDataSource = function () {
        return this.http.get('./assets/sample-data/deals/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (detailsData) {
            var expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, detailsData, { expirationDate: expirationDate });
        }));
    };
    DealsService.prototype.getDetailsStore = function (dataSource) {
        // Initialize the model specifying that it is a shell model
        var shellModel = new _details_deals_details_model__WEBPACK_IMPORTED_MODULE_5__["DealsDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    };
    DealsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
    ]; };
    DealsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], DealsService);
    return DealsService;
}());



/***/ }),

/***/ "./src/app/deals/details/deals-details.model.ts":
/*!******************************************************!*\
  !*** ./src/app/deals/details/deals-details.model.ts ***!
  \******************************************************/
/*! exports provided: DealsDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsDetailsModel", function() { return DealsDetailsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");



var DealsDetailsModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DealsDetailsModel, _super);
    function DealsDetailsModel() {
        var _this = _super.call(this) || this;
        _this.showcaseImages = [
            '',
            '',
            ''
        ];
        // Default mock value
        // expirationDate = '03/03/2019';
        _this.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
        _this.relatedDeals = [
            {
                logo: '',
                name: '',
                description: ''
            },
            {
                logo: '',
                name: '',
                description: ''
            },
            {
                logo: '',
                name: '',
                description: ''
            }
        ];
        return _this;
    }
    return DealsDetailsModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_2__["ShellModel"]));



/***/ }),

/***/ "./src/app/deals/listing/deals-listing.model.ts":
/*!******************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.model.ts ***!
  \******************************************************/
/*! exports provided: DealsItemModel, DealsListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsItemModel", function() { return DealsItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsListingModel", function() { return DealsListingModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");



var DealsItemModel = /** @class */ (function () {
    function DealsItemModel() {
        // Default mock value
        // expirationDate = '12/01/2018';
        this.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
    }
    return DealsItemModel;
}());

var DealsListingModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DealsListingModel, _super);
    function DealsListingModel() {
        var _this = _super.call(this) || this;
        _this.items = [
            new DealsItemModel(),
            new DealsItemModel(),
            new DealsItemModel(),
            new DealsItemModel()
        ];
        return _this;
    }
    return DealsListingModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_2__["ShellModel"]));



/***/ }),

/***/ "./src/app/fashion/details/fashion-details.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/fashion/details/fashion-details.model.ts ***!
  \**********************************************************/
/*! exports provided: FashionDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionDetailsModel", function() { return FashionDetailsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


var FashionDetailsModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FashionDetailsModel, _super);
    function FashionDetailsModel() {
        var _this = _super.call(this) || this;
        _this.showcaseImages = [
            {
                type: '',
                source: ''
            },
            {
                type: '',
                source: ''
            },
            {
                type: '',
                source: ''
            }
        ];
        _this.colorVariants = [
            {
                name: '',
                value: '',
                default: false
            },
            {
                name: '',
                value: '',
                default: false
            },
            {
                name: '',
                value: '',
                default: false
            }
        ];
        _this.sizeVariants = [
            {
                name: '',
                value: '',
                default: false
            },
            {
                name: '',
                value: '',
                default: false
            },
            {
                name: '',
                value: '',
                default: false
            }
        ];
        _this.relatedProducts = [
            {
                id: null
            },
            {
                id: null
            }
        ];
        return _this;
    }
    return FashionDetailsModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));



/***/ }),

/***/ "./src/app/fashion/fashion.service.ts":
/*!********************************************!*\
  !*** ./src/app/fashion/fashion.service.ts ***!
  \********************************************/
/*! exports provided: FashionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionService", function() { return FashionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/fashion-listing.model */ "./src/app/fashion/listing/fashion-listing.model.ts");
/* harmony import */ var _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/fashion-details.model */ "./src/app/fashion/details/fashion-details.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");






var FashionService = /** @class */ (function () {
    function FashionService(http) {
        this.http = http;
    }
    FashionService.prototype.getListingDataSource = function () {
        return this.http.get('./assets/sample-data/fashion/listing.json');
    };
    FashionService.prototype.getListingStore = function (dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__["FashionListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    };
    FashionService.prototype.getDetailsDataSource = function () {
        return this.http.get('./assets/sample-data/fashion/details.json');
    };
    FashionService.prototype.getDetailsStore = function (dataSource) {
        // Use cache if available
        if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__["FashionDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.detailsDataStore.load(dataSource);
        }
        return this.detailsDataStore;
    };
    FashionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FashionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FashionService);
    return FashionService;
}());



/***/ }),

/***/ "./src/app/fashion/listing/fashion-listing.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.model.ts ***!
  \**********************************************************/
/*! exports provided: FashionItemModel, FashionListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionItemModel", function() { return FashionItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingModel", function() { return FashionListingModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


var FashionItemModel = /** @class */ (function () {
    function FashionItemModel() {
    }
    return FashionItemModel;
}());

var FashionListingModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FashionListingModel, _super);
    function FashionListingModel() {
        var _this = _super.call(this) || this;
        _this.items = [
            new FashionItemModel(),
            new FashionItemModel(),
            new FashionItemModel(),
            new FashionItemModel()
        ];
        return _this;
    }
    return FashionListingModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));



/***/ }),

/***/ "./src/app/firebase/invoice.model.ts":
/*!*******************************************!*\
  !*** ./src/app/firebase/invoice.model.ts ***!
  \*******************************************/
/*! exports provided: ContactModel, ItemModel, EstimateModel, InvoiceModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModel", function() { return ContactModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModel", function() { return ItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateModel", function() { return EstimateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModel", function() { return InvoiceModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shell/data-store */ "./src/app/shell/data-store.ts");


// export class FirebaseSkillModel extends ShellModel {
//     id: string;
//     name: string;
//     constructor() {
//         super();
//     }
// }
// export class FirebaseEnquiryModel extends ShellModel {
//     id: string;
//     cate_1: string;
//     class_size_lower: string;
//     class_size_upper: string;
//     target_user_age_lower: string;
//     target_user_age_upper: string;
//     class_length_lower: string;
//     class_length_upper: string;
//     teaching_materials: string;
//     potential_supplier: string;
//     timestamp: string;
//     constructor() {
//         super();
//     }
// }
// export class FirebaseSupplierModel extends ShellModel {
//     id: string;
//     name: string;
//     address: string;
//     average_speed: number;
//     company_intro: string;
//     competition_exp: string;
//     contact_person: string;
//     downloadURL: string;
//     editor_choice: boolean;
//     email: string;
//     hashtag: any;
//     isShell: boolean;
//     phone: number;
//     provider: string;
//     reply_rate: number;
//     timestamp: any;
//     tutor_qual: string;
//     url: string;
//     path: any;
//     constructor() {
//         super();
//     }
// }
var ContactModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContactModel, _super);
    function ContactModel() {
        return _super.call(this) || this;
    }
    return ContactModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ItemModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ItemModel, _super);
    function ItemModel() {
        return _super.call(this) || this;
    }
    return ItemModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var EstimateModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EstimateModel, _super);
    function EstimateModel() {
        var _this = _super.call(this) || this;
        _this.salesList = [];
        return _this;
    }
    return EstimateModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var InvoiceModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InvoiceModel, _super);
    function InvoiceModel() {
        var _this = _super.call(this) || this;
        _this.salesList = [];
        return _this;
    }
    return InvoiceModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));



/***/ }),

/***/ "./src/app/food/details/food-details.model.ts":
/*!****************************************************!*\
  !*** ./src/app/food/details/food-details.model.ts ***!
  \****************************************************/
/*! exports provided: FoodDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailsModel", function() { return FoodDetailsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


var FoodDetailsModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FoodDetailsModel, _super);
    function FoodDetailsModel() {
        var _this = _super.call(this) || this;
        _this.ratings = [
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            }
        ];
        _this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        _this.tags = [
            '',
            '',
            ''
        ];
        _this.usersPictures = [
            '',
            '',
            '',
            '',
            '',
            ''
        ];
        _this.popularDishes = [
            {
                name: '',
                rate: null,
                votesCount: null
            },
            {
                name: '',
                rate: null,
                votesCount: null
            }
        ];
        _this.reviews = [
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            }
        ];
        _this.popularRecipes = [
            {
                showcaseImage: '',
                name: '',
                chef: {
                    name: '',
                    image: ''
                },
                difficulty: '',
                time: '',
                calories: '',
                chefExtract: ''
            }
        ];
        return _this;
    }
    return FoodDetailsModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));



/***/ }),

/***/ "./src/app/food/food.service.ts":
/*!**************************************!*\
  !*** ./src/app/food/food.service.ts ***!
  \**************************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/food-listing.model */ "./src/app/food/listing/food-listing.model.ts");
/* harmony import */ var _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/food-details.model */ "./src/app/food/details/food-details.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");







var FoodService = /** @class */ (function () {
    function FoodService(http) {
        this.http = http;
    }
    FoodService.prototype.getListingDataSource = function () {
        return this.http.get('./assets/sample-data/food/listing.json');
    };
    FoodService.prototype.getListingStore = function (dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__["FoodListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    };
    FoodService.prototype.getDetailsDataSource = function (slug) {
        return this.http.get('./assets/sample-data/food/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (details) { return details.items.filter(function (item) { return item.slug === slug; }); }));
    };
    FoodService.prototype.getDetailsStore = function (dataSource) {
        // Initialize the model specifying that it is a shell model
        var shellModel = new _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__["FoodDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    };
    FoodService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FoodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FoodService);
    return FoodService;
}());



/***/ }),

/***/ "./src/app/food/listing/food-listing.model.ts":
/*!****************************************************!*\
  !*** ./src/app/food/listing/food-listing.model.ts ***!
  \****************************************************/
/*! exports provided: FoodItemModel, FoodListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemModel", function() { return FoodItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListingModel", function() { return FoodListingModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


var FoodItemModel = /** @class */ (function () {
    function FoodItemModel() {
        this.tags = [
            '',
            '',
            ''
        ];
        this.pictures = [
            '',
            '',
            '',
            '',
            ''
        ];
    }
    return FoodItemModel;
}());

var FoodListingModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FoodListingModel, _super);
    function FoodListingModel() {
        var _this = _super.call(this) || this;
        _this.items = [
            new FoodItemModel(),
            new FoodItemModel(),
            new FoodItemModel(),
            new FoodItemModel()
        ];
        return _this;
    }
    return FoodListingModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));



/***/ }),

/***/ "./src/app/real-estate/details/real-estate-details.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/real-estate/details/real-estate-details.model.ts ***!
  \******************************************************************/
/*! exports provided: RealEstateDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateDetailsModel", function() { return RealEstateDetailsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


var RealEstateDetailsModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RealEstateDetailsModel, _super);
    function RealEstateDetailsModel() {
        var _this = _super.call(this) || this;
        _this.amenities = [
            {
                name: '',
                icon: ''
            },
            {
                name: '',
                icon: ''
            },
            {
                name: '',
                icon: ''
            },
            {
                name: '',
                icon: ''
            },
            {
                name: '',
                icon: ''
            },
            {
                name: '',
                icon: ''
            }
        ];
        return _this;
    }
    return RealEstateDetailsModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));



/***/ }),

/***/ "./src/app/real-estate/listing/real-estate-listing.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/real-estate/listing/real-estate-listing.model.ts ***!
  \******************************************************************/
/*! exports provided: RealEstateItemModel, RealEstateListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateItemModel", function() { return RealEstateItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingModel", function() { return RealEstateListingModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


var RealEstateItemModel = /** @class */ (function () {
    function RealEstateItemModel() {
        this.amenities = [
            {
                name: '',
                icon: ''
            },
            {
                name: '',
                icon: ''
            }
        ];
    }
    return RealEstateItemModel;
}());

var RealEstateListingModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RealEstateListingModel, _super);
    function RealEstateListingModel() {
        var _this = _super.call(this) || this;
        _this.items = [
            new RealEstateItemModel(),
            new RealEstateItemModel(),
            new RealEstateItemModel(),
            new RealEstateItemModel()
        ];
        return _this;
    }
    return RealEstateListingModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));



/***/ }),

/***/ "./src/app/real-estate/real-estate.service.ts":
/*!****************************************************!*\
  !*** ./src/app/real-estate/real-estate.service.ts ***!
  \****************************************************/
/*! exports provided: RealEstateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateService", function() { return RealEstateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/real-estate-listing.model */ "./src/app/real-estate/listing/real-estate-listing.model.ts");
/* harmony import */ var _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/real-estate-details.model */ "./src/app/real-estate/details/real-estate-details.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");






var RealEstateService = /** @class */ (function () {
    function RealEstateService(http) {
        this.http = http;
    }
    RealEstateService.prototype.getListingDataSource = function () {
        return this.http.get('./assets/sample-data/real-estate/listing.json');
    };
    RealEstateService.prototype.getListingStore = function (dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__["RealEstateListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    };
    RealEstateService.prototype.getDetailsDataSource = function () {
        return this.http.get('./assets/sample-data/real-estate/details.json');
    };
    RealEstateService.prototype.getDetailsStore = function (dataSource) {
        // Use cache if available
        if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__["RealEstateDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.detailsDataStore.load(dataSource);
        }
        return this.detailsDataStore;
    };
    RealEstateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RealEstateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RealEstateService);
    return RealEstateService;
}());



/***/ }),

/***/ "./src/app/showcase/showcase-shell.model.ts":
/*!**************************************************!*\
  !*** ./src/app/showcase/showcase-shell.model.ts ***!
  \**************************************************/
/*! exports provided: ShowcaseShellModel, ShowcaseShellUserModel, ShowcaseCommentModel, ShowcasePostModel, ShowcaseTaskModel, ShowcaseUser2Model, ShowcaseCompanyModel, ShowcaseCombinedTaskUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseShellModel", function() { return ShowcaseShellModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseShellUserModel", function() { return ShowcaseShellUserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCommentModel", function() { return ShowcaseCommentModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcasePostModel", function() { return ShowcasePostModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseTaskModel", function() { return ShowcaseTaskModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseUser2Model", function() { return ShowcaseUser2Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCompanyModel", function() { return ShowcaseCompanyModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCombinedTaskUserModel", function() { return ShowcaseCombinedTaskUserModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");


var ShowcaseShellModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseShellModel, _super);
    function ShowcaseShellModel() {
        return _super.call(this) || this;
    }
    return ShowcaseShellModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcaseShellUserModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseShellUserModel, _super);
    function ShowcaseShellUserModel() {
        return _super.call(this) || this;
    }
    return ShowcaseShellUserModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcaseCommentModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseCommentModel, _super);
    function ShowcaseCommentModel() {
        return _super.call(this) || this;
    }
    return ShowcaseCommentModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcasePostModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcasePostModel, _super);
    function ShowcasePostModel() {
        return _super.call(this) || this;
    }
    return ShowcasePostModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcaseTaskModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseTaskModel, _super);
    function ShowcaseTaskModel() {
        return _super.call(this) || this;
    }
    return ShowcaseTaskModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcaseUser2Model = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseUser2Model, _super);
    function ShowcaseUser2Model() {
        return _super.call(this) || this;
    }
    return ShowcaseUser2Model;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcaseCompanyModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseCompanyModel, _super);
    function ShowcaseCompanyModel() {
        return _super.call(this) || this;
    }
    return ShowcaseCompanyModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));

var ShowcaseCombinedTaskUserModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseCombinedTaskUserModel, _super);
    function ShowcaseCombinedTaskUserModel() {
        return _super.call(this) || this;
    }
    return ShowcaseCombinedTaskUserModel;
}(ShowcaseTaskModel));



/***/ }),

/***/ "./src/app/showcase/showcase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/showcase/showcase.service.ts ***!
  \**********************************************/
/*! exports provided: ShowcaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseService", function() { return ShowcaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");





// tslint:disable-next-line:max-line-length


var ShowcaseService = /** @class */ (function () {
    function ShowcaseService(http) {
        this.http = http;
        this.openDataStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
    }
    ShowcaseService.prototype.getDataSourceWithDelay = function () {
        return this.http.get('./assets/sample-data/showcase/shell.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (val) {
            console.log('getData STARTED');
            // tslint:disable-next-line:no-console
            console.time('getData Roundtrip');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            console.log('getData COMPLETED');
            // tslint:disable-next-line:no-console
            console.timeEnd('getData Roundtrip');
        }));
    };
    ShowcaseService.prototype.getSimpleDataSource = function () {
        return this.http.get('./assets/sample-data/showcase/shell.json');
    };
    ShowcaseService.prototype.getSimpleDataStore = function (dataSource) {
        // Use cache if available
        if (!this.showcaseDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_5__["ShowcaseShellModel"]();
            this.showcaseDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.showcaseDataStore.load(dataSource);
        }
        return this.showcaseDataStore;
    };
    ShowcaseService.prototype.getListDataSource = function () {
        return this.http.get('https://reqres.in/api/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result['data']; }));
    };
    ShowcaseService.prototype.getPaginationDataSource = function (page) {
        return this.http.get('https://reqres.in/api/users?page=' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result['data']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (results) { return results.length > 0; }));
    };
    ShowcaseService.prototype.getMultipleDataSourceA = function () {
        return this.http.get('./assets/sample-data/travel/listing.json');
    };
    ShowcaseService.prototype.getMultipleDataSourceB = function () {
        return this.http.get('./assets/sample-data/fashion/listing.json');
    };
    ShowcaseService.prototype.getDependantDataSourcePost = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    };
    // tslint:disable-next-line:max-line-length
    ShowcaseService.prototype.getDependantDataSourcePostComments = function (dependantDataSource) {
        var _this = this;
        return dependantDataSource.pipe(
        // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (post) { return !post.isShell; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (post) {
            return _this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id);
        }));
    };
    ShowcaseService.prototype.getUser = function (userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
    };
    // get the company details, a subset of the user data
    ShowcaseService.prototype.getUserSubsetData = function (userId) {
        var dataObservable = this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
        return dataObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (jsonResponse) {
            var filteredData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, jsonResponse.company);
            return filteredData;
        }));
    };
    ShowcaseService.prototype.getTasks = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/todos');
    };
    // Concat the task with the details of the user
    ShowcaseService.prototype.getCombinedTasksUserDataSource = function () {
        var _this = this;
        return this.getTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (tasks) {
            var completeTaskData = tasks.map(function (task) {
                // for each task retrun a new observable with the ShowcaseCombinedTaskUserModel
                var taskUser = _this.getUser(task.userId);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(task),
                    taskUser
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
                    var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), taskData = _b[0], user = _b[1];
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, taskData, { user: user });
                }));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(completeTaskData);
        }));
    };
    ShowcaseService.prototype.getOpenDataStream = function () {
        var firstLoadData = this.getPaginationDataSource(1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.openDataStream.asObservable(), firstLoadData);
    };
    ShowcaseService.prototype.pushValuesToOpenStream = function () {
        var stackedValues = this.getStackedValues();
        this.openDataStream.next(stackedValues);
    };
    ShowcaseService.prototype.getStackedValuesDataSource = function () {
        var stackedValues = this.getStackedValues();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(stackedValues).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(3000));
    };
    ShowcaseService.prototype.getStackedValues = function () {
        var newUser = {
            first_name: 'Agustin',
            last_name: 'Nitsuga',
            avatar: './assets/sample-images/user/person_1.jpg'
        };
        // Get a random integer between 1 (and only 1) and 'max'
        var getRand = function (max, min) {
            if (min === void 0) { min = 1; }
            return Math.floor(Math.random() * max) + min;
        };
        // Randomly send one, two or three users
        return Array(getRand(3)).fill(newUser);
    };
    ShowcaseService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ShowcaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ShowcaseService);
    return ShowcaseService;
}());



/***/ }),

/***/ "./src/app/travel/details/travel-details.model.ts":
/*!********************************************************!*\
  !*** ./src/app/travel/details/travel-details.model.ts ***!
  \********************************************************/
/*! exports provided: TravelDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailsModel", function() { return TravelDetailsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


var TravelDetailsModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TravelDetailsModel, _super);
    function TravelDetailsModel() {
        var _this = _super.call(this) || this;
        _this.tags = new Array(3).fill('');
        _this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        _this.whereToStay = [
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            }
        ];
        _this.whereToEat = [
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            }
        ];
        _this.relatedActivities = [
            {
                picture: '',
                name: '',
                category: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                category: '',
                rating: null
            }
        ];
        return _this;
    }
    return TravelDetailsModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));



/***/ }),

/***/ "./src/app/travel/listing/travel-listing.model.ts":
/*!********************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.model.ts ***!
  \********************************************************/
/*! exports provided: TravelItemModel, TravelListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelItemModel", function() { return TravelItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListingModel", function() { return TravelListingModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


var TravelItemModel = /** @class */ (function () {
    function TravelItemModel() {
    }
    return TravelItemModel;
}());

var TravelListingModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TravelListingModel, _super);
    function TravelListingModel() {
        var _this = _super.call(this) || this;
        _this.items = [
            new TravelItemModel(),
            new TravelItemModel(),
            new TravelItemModel(),
            new TravelItemModel()
        ];
        return _this;
    }
    return TravelListingModel;
}(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]));



/***/ }),

/***/ "./src/app/travel/travel.service.ts":
/*!******************************************!*\
  !*** ./src/app/travel/travel.service.ts ***!
  \******************************************/
/*! exports provided: TravelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelService", function() { return TravelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/travel-listing.model */ "./src/app/travel/listing/travel-listing.model.ts");
/* harmony import */ var _details_travel_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/travel-details.model */ "./src/app/travel/details/travel-details.model.ts");






var TravelService = /** @class */ (function () {
    function TravelService(http) {
        this.http = http;
    }
    TravelService.prototype.getListingDataSource = function () {
        return this.http.get('./assets/sample-data/travel/listing.json');
    };
    TravelService.prototype.getListingStore = function (dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_4__["TravelListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    };
    TravelService.prototype.getDetailsDataSource = function () {
        return this.http.get('./assets/sample-data/travel/details.json');
    };
    TravelService.prototype.getDetailsStore = function (dataSource) {
        // Use cache if available
        if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_travel_details_model__WEBPACK_IMPORTED_MODULE_5__["TravelDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.detailsDataStore.load(dataSource);
        }
        return this.detailsDataStore;
    };
    TravelService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TravelService);
    return TravelService;
}());



/***/ }),

/***/ "./src/app/validators/password.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/validators/password.validator.ts ***!
  \**************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    // If our validation fails, we return an object with a key for the error name and a value of true.
    // Otherwise, if the validation passes, we simply return null because there is no error.
    PasswordValidator.areNotEqual = function (formGroup) {
        var val;
        var valid = true;
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areNotEqual: true
        };
    };
    return PasswordValidator;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map