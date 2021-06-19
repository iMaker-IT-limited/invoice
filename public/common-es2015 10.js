(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/chunk-00265c49.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-00265c49.js ***!
  \*************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-353a032e.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-353a032e.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-3c9755dd.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-3c9755dd.js ***!
  \*************************************************************/
/*! exports provided: d, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-d0403a2f.js */ "./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");
/* harmony import */ var _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-94c4865f.js */ "./node_modules/@ionic/core/dist/esm/chunk-94c4865f.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-3107e07c-js */ "ios-transition-3107e07c-js").then(__webpack_require__.bind(null, /*! ./ios.transition-3107e07c.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-3107e07c.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-90b00ffe-js */ "md-transition-90b00ffe-js").then(__webpack_require__.bind(null, /*! ./md.transition-90b00ffe.js */ "./node_modules/@ionic/core/dist/esm/md.transition-90b00ffe.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const builder = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return builder;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    const trans = await __webpack_require__.e(/*! import() | index-d9adb105-js */ "index-d9adb105-js").then(__webpack_require__.bind(null, /*! ./index-d9adb105.js */ "./node_modules/@ionic/core/dist/esm/index-d9adb105.js")).then(mod => mod.create(animationBuilder, opts.baseEl, opts));
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (trans.hasCompleted) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: trans.hasCompleted,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    const promise = new Promise(resolve => trans.onFinish(resolve));
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart();
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-4e92c885.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-4e92c885.js ***!
  \*************************************************************/
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
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js ***!
  \*************************************************************/
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
const rIC = (callback) => {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
const hasShadowDom = (el) => {
    return !!el.shadowRoot && !!el.attachShadow;
};
const findItemLabel = (componentEl) => {
    const itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
const renderHiddenInput = (always, container, name, value, disabled) => {
    if (always || hasShadowDom(container)) {
        let input = container.querySelector('input.aux-input');
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
const clamp = (min, n, max) => {
    return Math.max(min, Math.min(n, max));
};
const assert = (actual, reason) => {
    if (!actual) {
        const message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
const now = (ev) => {
    return ev.timeStamp || Date.now();
};
const pointerCoord = (ev) => {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
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
const isEndSide = (side) => {
    const isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
    }
};
const debounceEvent = (event, wait) => {
    const original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
const debounce = (func, wait = 0) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(func, wait, ...args);
    };
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const documentFragmentChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
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
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes[i];
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (element) => {
    return (element.children != null) ? element.children : element.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/deals-listing.model */ "./src/app/deals/listing/deals-listing.model.ts");
/* harmony import */ var _details_deals_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/deals-details.model */ "./src/app/deals/details/deals-details.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let DealsService = class DealsService {
    constructor(http) {
        this.http = http;
    }
    get relativeDates() {
        return [
            dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss'),
            dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(7, 'day').format('MM/DD/YYYY'),
            dayjs__WEBPACK_IMPORTED_MODULE_3___default()().subtract(1, 'month').format('MM/DD/YYYY'),
            dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(2, 'month').format('MM/DD/YYYY')
        ];
    }
    getListingDataSource() {
        return this.http.get('./assets/sample-data/deals/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(listingData => {
            // using rest operator to divide the data https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb
            const { items } = listingData, otherData = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](listingData, ["items"]);
            const itemsWithRelativeDates = items.map((dealItem, index) => {
                // Relative date (better to showcase UI micro-interactions)
                return Object.assign({}, dealItem, { expirationDate: this.relativeDates[index] });
            });
            // using spread operator to concat the data https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb
            return Object.assign({}, otherData, { items: itemsWithRelativeDates });
        }));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_4__["DealsListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource() {
        return this.http.get('./assets/sample-data/deals/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(detailsData => {
            const expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
            return Object.assign({}, detailsData, { expirationDate });
        }));
    }
    getDetailsStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _details_deals_details_model__WEBPACK_IMPORTED_MODULE_5__["DealsDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    }
};
DealsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
DealsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
], DealsService);



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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


class DealsDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
        this.showcaseImages = [
            '',
            '',
            ''
        ];
        // Default mock value
        // expirationDate = '03/03/2019';
        this.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
        this.relatedDeals = [
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
    }
}


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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


class DealsItemModel {
    constructor() {
        // Default mock value
        // expirationDate = '12/01/2018';
        this.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
    }
}
class DealsListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new DealsItemModel(),
            new DealsItemModel(),
            new DealsItemModel(),
            new DealsItemModel()
        ];
    }
}


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
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");

class FashionDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.showcaseImages = [
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
        this.colorVariants = [
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
        this.sizeVariants = [
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
        this.relatedProducts = [
            {
                id: null
            },
            {
                id: null
            }
        ];
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/fashion-listing.model */ "./src/app/fashion/listing/fashion-listing.model.ts");
/* harmony import */ var _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/fashion-details.model */ "./src/app/fashion/details/fashion-details.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");






let FashionService = class FashionService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/sample-data/fashion/listing.json');
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__["FashionListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource() {
        return this.http.get('./assets/sample-data/fashion/details.json');
    }
    getDetailsStore(dataSource) {
        // Use cache if available
        if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__["FashionDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.detailsDataStore.load(dataSource);
        }
        return this.detailsDataStore;
    }
};
FashionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FashionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FashionService);



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
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");

class FashionItemModel {
}
class FashionListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new FashionItemModel(),
            new FashionItemModel(),
            new FashionItemModel(),
            new FashionItemModel()
        ];
    }
}


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
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shell/data-store */ "./src/app/shell/data-store.ts");

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
class ContactModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ItemModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class EstimateModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.salesList = [];
    }
}
class InvoiceModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.salesList = [];
    }
}


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
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");

class FoodDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.ratings = [
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
        this.openHours = [
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
        this.tags = [
            '',
            '',
            ''
        ];
        this.usersPictures = [
            '',
            '',
            '',
            '',
            '',
            ''
        ];
        this.popularDishes = [
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
        this.reviews = [
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
        this.popularRecipes = [
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
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/food-listing.model */ "./src/app/food/listing/food-listing.model.ts");
/* harmony import */ var _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/food-details.model */ "./src/app/food/details/food-details.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");







let FoodService = class FoodService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/sample-data/food/listing.json');
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__["FoodListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource(slug) {
        return this.http.get('./assets/sample-data/food/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(details => details.items.filter(item => item.slug === slug)));
    }
    getDetailsStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__["FoodDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    }
};
FoodService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FoodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FoodService);



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
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");

class FoodItemModel {
    constructor() {
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
}
class FoodListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new FoodItemModel(),
            new FoodItemModel(),
            new FoodItemModel(),
            new FoodItemModel()
        ];
    }
}


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
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");

class RealEstateDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.amenities = [
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
    }
}


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
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");

class RealEstateItemModel {
    constructor() {
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
}
class RealEstateListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new RealEstateItemModel(),
            new RealEstateItemModel(),
            new RealEstateItemModel(),
            new RealEstateItemModel()
        ];
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/real-estate-listing.model */ "./src/app/real-estate/listing/real-estate-listing.model.ts");
/* harmony import */ var _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/real-estate-details.model */ "./src/app/real-estate/details/real-estate-details.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");






let RealEstateService = class RealEstateService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/sample-data/real-estate/listing.json');
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__["RealEstateListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource() {
        return this.http.get('./assets/sample-data/real-estate/details.json');
    }
    getDetailsStore(dataSource) {
        // Use cache if available
        if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__["RealEstateDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.detailsDataStore.load(dataSource);
        }
        return this.detailsDataStore;
    }
};
RealEstateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RealEstateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RealEstateService);



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
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");

class ShowcaseShellModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseShellUserModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseCommentModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcasePostModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseTaskModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseUser2Model extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseCompanyModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseCombinedTaskUserModel extends ShowcaseTaskModel {
    constructor() {
        super();
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");





// tslint:disable-next-line:max-line-length


let ShowcaseService = class ShowcaseService {
    constructor(http) {
        this.http = http;
        this.openDataStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
    }
    getDataSourceWithDelay() {
        return this.http.get('./assets/sample-data/showcase/shell.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(val => {
            console.log('getData STARTED');
            // tslint:disable-next-line:no-console
            console.time('getData Roundtrip');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            console.log('getData COMPLETED');
            // tslint:disable-next-line:no-console
            console.timeEnd('getData Roundtrip');
        }));
    }
    getSimpleDataSource() {
        return this.http.get('./assets/sample-data/showcase/shell.json');
    }
    getSimpleDataStore(dataSource) {
        // Use cache if available
        if (!this.showcaseDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_5__["ShowcaseShellModel"]();
            this.showcaseDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.showcaseDataStore.load(dataSource);
        }
        return this.showcaseDataStore;
    }
    getListDataSource() {
        return this.http.get('https://reqres.in/api/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result['data']));
    }
    getPaginationDataSource(page) {
        return this.http.get('https://reqres.in/api/users?page=' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result['data']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(results => results.length > 0));
    }
    getMultipleDataSourceA() {
        return this.http.get('./assets/sample-data/travel/listing.json');
    }
    getMultipleDataSourceB() {
        return this.http.get('./assets/sample-data/fashion/listing.json');
    }
    getDependantDataSourcePost() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    }
    // tslint:disable-next-line:max-line-length
    getDependantDataSourcePostComments(dependantDataSource) {
        return dependantDataSource.pipe(
        // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(post => !post.isShell), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(post => {
            return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id);
        }));
    }
    getUser(userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
    }
    // get the company details, a subset of the user data
    getUserSubsetData(userId) {
        const dataObservable = this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
        return dataObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((jsonResponse) => {
            const filteredData = Object.assign({}, jsonResponse.company);
            return filteredData;
        }));
    }
    getTasks() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos');
    }
    // Concat the task with the details of the user
    getCombinedTasksUserDataSource() {
        return this.getTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(tasks => {
            const completeTaskData = tasks.map(task => {
                // for each task retrun a new observable with the ShowcaseCombinedTaskUserModel
                const taskUser = this.getUser(task.userId);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(task),
                    taskUser
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([taskData, user]) => {
                    return Object.assign({}, taskData, { user: user });
                }));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(completeTaskData);
        }));
    }
    getOpenDataStream() {
        const firstLoadData = this.getPaginationDataSource(1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.openDataStream.asObservable(), firstLoadData);
    }
    pushValuesToOpenStream() {
        const stackedValues = this.getStackedValues();
        this.openDataStream.next(stackedValues);
    }
    getStackedValuesDataSource() {
        const stackedValues = this.getStackedValues();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(stackedValues).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(3000));
    }
    getStackedValues() {
        const newUser = {
            first_name: 'Agustin',
            last_name: 'Nitsuga',
            avatar: './assets/sample-images/user/person_1.jpg'
        };
        // Get a random integer between 1 (and only 1) and 'max'
        const getRand = (max, min = 1) => {
            return Math.floor(Math.random() * max) + min;
        };
        // Randomly send one, two or three users
        return Array(getRand(3)).fill(newUser);
    }
};
ShowcaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShowcaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ShowcaseService);



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
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");

class TravelDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.tags = new Array(3).fill('');
        this.openHours = [
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
        this.whereToStay = [
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
        this.whereToEat = [
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
        this.relatedActivities = [
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
    }
}


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
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");

class TravelItemModel {
}
class TravelListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new TravelItemModel(),
            new TravelItemModel(),
            new TravelItemModel(),
            new TravelItemModel()
        ];
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/travel-listing.model */ "./src/app/travel/listing/travel-listing.model.ts");
/* harmony import */ var _details_travel_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/travel-details.model */ "./src/app/travel/details/travel-details.model.ts");






let TravelService = class TravelService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/sample-data/travel/listing.json');
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_4__["TravelListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource() {
        return this.http.get('./assets/sample-data/travel/details.json');
    }
    getDetailsStore(dataSource) {
        // Use cache if available
        if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _details_travel_details_model__WEBPACK_IMPORTED_MODULE_5__["TravelDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.detailsDataStore.load(dataSource);
        }
        return this.detailsDataStore;
    }
};
TravelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TravelService);



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
class PasswordValidator {
    // If our validation fails, we return an object with a key for the error name and a value of true.
    // Otherwise, if the validation passes, we simply return null because there is no error.
    static areNotEqual(formGroup) {
        let val;
        let valid = true;
        for (const key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                const control = formGroup.controls[key];
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
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map