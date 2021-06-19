(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-shell-app-shell-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/app-shell.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/app-shell.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      App Shell\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\" style=\"margin-bottom: 20px;\">\n    <p>\n      After analyzing multiple use cases, we realized most UIs can be deconstructed into two data bindable element primitives: <b>text</b> and <b>images</b>.\n    </p>\n    <p>\n      These <b>Shell Elements</b> are the building blocks to display loading states.\n    </p>\n  </section>\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Shell Elements</ion-label>\n  </ion-item-divider>\n  <ion-list>\n    <ion-item [routerLink]=\"['/showcase/app-shell/aspect-ratio']\" detail=\"true\">\n      <ion-label>Aspect Ratio</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/showcase/app-shell/image-shell']\" detail=\"true\">\n      <ion-label>Image Shell</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/showcase/app-shell/text-shell']\" detail=\"true\">\n      <ion-label>Text Shell</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <section class=\"showcase-section\">\n    <p>\n      You can combine the different shell elements in multiple ways to fit your needs\n    </p>\n    <ion-row style=\"background-color: #FFF; padding: 10px; margin: 20px;\">\n      <ion-col size=\"12\">\n        <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <h4 style=\"margin: 10px; text-align: center;\">Text on top of a background-image container</h4>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </ion-col>\n      <ion-col size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"'Sample Image'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h3 style=\"margin-top: 0px;\">\n          <app-text-shell [data]=\"\"></app-text-shell>\n        </h3>\n        <p>\n          <app-text-shell [data]=\"\" lines=\"3\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n  </section>\n\n  <section class=\"showcase-section\" style=\"margin-bottom: 20px;\">\n    <p>\n      By following the reactive programming paradigm to handle asynchronous data streams, we can use <b>Observables</b> to manage the different states (loading / loaded) of the data binded to our shell elements.\n    </p>\n    <p>\n      <b>Note:</b> If you are new to reactive programming in Javascript, I strongly recommend you to read <a href=\"https://dev.to/sagar/reactive-programming-in-javascript-with-rxjs-4jom\" target=\"_blank\">this guide</a>.\n    </p>\n  </section>\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Simple Data Binding</ion-label>\n  </ion-item-divider>\n  <ion-list>\n    <ion-item [routerLink]=\"['/showcase/app-shell/simple-data-binding']\" detail=\"true\">\n      <ion-label>Data Binding using plain Observables</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <section class=\"showcase-section\" style=\"margin-bottom: 20px;\">\n    <p>\n      You can go a step further and use our <b>DataStore</b> class which provides extra functionalities to plain Observables.\n    </p>\n    <p>\n      The main responsability of the <b>DataStore</b> is to store the data stream in a <code>timeline</code> property and append shell values to the Observable data sources through the <code>AppendShell</code> static method.\n    </p>\n  </section>\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Data Binding with DataStore</ion-label>\n  </ion-item-divider>\n  <ion-list>\n    <ion-item [routerLink]=\"['/showcase/app-shell/data-store-basic']\" detail=\"true\">\n      <ion-label>Basic</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/showcase/app-shell/data-store-list']\" detail=\"true\">\n      <ion-label>List</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/showcase/app-shell/data-store-subset']\" detail=\"true\">\n      <ion-label>Filtered Data Source</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/showcase/app-shell/data-store-combined']\" detail=\"true\">\n      <ion-label>Combined Data Sources</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/showcase/app-shell/data-store-multiple']\" detail=\"true\">\n      <ion-label>Multiple Data Stores</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/showcase/app-shell/data-store-dependant']\" detail=\"true\">\n      <ion-label>Dependant Data Sources</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/showcase/app-shell/data-store-pagination']\" detail=\"true\">\n      <ion-label>Pagination</ion-label>\n    </ion-item>\n    <ion-item [routerLink]=\"['/showcase/app-shell/data-store-stacked']\" detail=\"true\">\n      <ion-label>Stacked Shells</ion-label>\n    </ion-item>\n  </ion-list>\n  <section class=\"showcase-section\" style=\"margin-bottom: 20px;\">\n    <p>\n      We double down on adding as many examples as possible on how to use the <b>App Shell</b>. However, if you have a use case that doesn't fall under the examples list, please let us know so we can keep improving the product.\n    </p>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/app-shell\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Aspect Ratio\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      The <code>&lt;app-aspect-ratio&gt;</code> is a simple component that ensures a block will maintain the specified aspect ratio.\n    </p>\n    <p>\n      It uses an <a href=\"http://stackoverflow.com/a/10441480/1116959\" target=\"_blank\">old CSS technique</a> to adjust the height of the element based on its width (using padding-bottom).\n    </p>\n    <p>\n      This is a very handy component to prevent content from jumping around while the page is loading.\n    </p>\n    <p>\n      <b>Note:</b> The <code>&lt;app-aspect-ratio&gt;</code> component must be surrounded by a container element with a defined width, as this component will fill the parent width.\n    </p>\n<pre>\n<b>&lt;div style=\"width:80%; margin: 0px auto;\"&gt;</b>\n  &lt;app-aspect-ratio [ratio]=\"&#123;w:2, h:1&#125;\"&gt;\n    &lt;span&gt;This container will always have a 2:1 aspect ratio&lt;/span&gt;\n  &lt;/app-aspect-ratio&gt;\n<b>&lt;/div&gt;</b>\n</pre>\n    <div style=\"width:80%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:2, h:1}\" style=\"background-color: #00AFFF;\">\n        <span style=\"margin: 10px; display: block;\">This container will always have a <b>2:1</b> aspect ratio</span>\n      </app-aspect-ratio>\n    </div>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/app-shell\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      DataStore - Basic example\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      Using the <code>DataStore</code> utility you can keep track and append shell values to the data stream.\n    </p>\n    <p>\n      This drastically reduces the boilerplate needed to add app shell loading interactions to your app.\n    </p>\n    <ion-row style=\"background-color: #FFF; padding: 10px; margin: 20px;\">\n      <ion-col size=\"12\">\n        <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"dataStoreData?.cover\" [alt]=\"'Sample Image Cover'\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </ion-col>\n      <ion-col size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell animation=\"spinner\" [src]=\"dataStoreData?.image\" [alt]=\"'Sample Image'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h3 style=\"margin-top: 0px;\">\n          <app-text-shell [data]=\"dataStoreData?.title\"></app-text-shell>\n        </h3>\n        <p>\n          <app-text-shell [data]=\"dataStoreData?.description\" lines=\"3\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-button (click)=\"showcaseDataStore()\" [disabled]=\"dataStoreButtonDisabled\">Fetch more Data</ion-button>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/app-shell\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      DataStore - Combined Data Sources\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      Some modern <b>no-sql</b> solutions like <u>MongoDB</u> or <u>Firebase Firestore</u> do not support multi-collection queries (left join, inner join).\n    </p>\n    <p>\n      That's why you may end up using some <b>RxJs</b> operators to manage and combine queries independently.\n    </p>\n    <p>\n      <b>Note:</b> These techniques are <i>intermediate / advanced</i> and require some patience to fully grasp some reactive programming concepts before you can master RxJs operators. I strongly recommend you to read this guide on <a href=\"https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511\" target=\"_blank\">learning to combine RxJs sequences</a>.\n    </p>\n    <p>\n      Below you can see how we combine two data sources (one depending on the other) into one Observable.\n    </p>\n    <p>\n      Let's do an example of Tasks and their Owners. Imagine a case where we need to have the list of tasks and the details of the 'owner' user combined in the same data source. Let's see how to do it.\n    </p>\n  </section>\n  <div class=\"tasks\">\n    <h6>Tasks</h6>\n    <ion-list lines=\"full\" style=\"--background: transparent\">\n      <ion-item class=\"task\" *ngFor=\"let task of tasks | slice:0:40\">\n        <ion-label>\n          <h2>\n            <app-text-shell [data]=\"task?.title\" animation=\"bouncing\" style=\"--text-shell-line-height: 16px;\"></app-text-shell>\n          </h2>\n          <div style=\"display: flex;\">\n            <span style=\"margin-right: 10px;\"><b>Status:</b></span>\n            <h3 style=\"min-width: 100px;\">\n              <app-text-shell [data]=\"(task.completed) ? 'Completed': 'In Progress'\" animation=\"bouncing\" style=\"--text-shell-line-height: 14px;\"></app-text-shell>\n            </h3>\n          </div>\n          <span><b>Owner:</b></span>\n          <p>\n            <app-text-shell [data]=\"task.user?.name\" animation=\"bouncing\"></app-text-shell>\n          </p>\n          <p>\n            <app-text-shell [data]=\"(task?.user) ? '@'.concat('', task.user.username) : null\" animation=\"bouncing\"></app-text-shell>\n          </p>\n          <p>\n            <app-text-shell [data]=\"task.user?.email\" animation=\"bouncing\"></app-text-shell>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/app-shell\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      DataStore - Dependant Data Sources\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      This example kinda mixes the two previous examples (<a [routerLink]=\"['/showcase/app-shell/data-store-multiple']\">multiple data stores</a>, <a [routerLink]=\"['/showcase/app-shell/data-store-combined']\">one depending on the other</a>).\n    </p>\n    <p>\n      The uses cases in which to use this approach would be if you have different data sources that depend on each other, but you want the different sections of the view to 're-load' independently one from the other.\n    </p>\n    <p>\n      This contrasts the use case of the <a [routerLink]=\"['/showcase/app-shell/data-store-combined']\">Combined Data Source</a> where you transform multiple data sources into one, causing the hole view to be 're-loaded' as it's binded to just one combined Observable.\n    </p>\n    <p>\n      A good example can be a post and its comments. The comments depend on the post but you want them to 're-load' independently from the post.\n    </p>\n  </section>\n  <div class=\"post\">\n    <h4>\n      <app-text-shell [data]=\"post?.title\" animation=\"bouncing\" style=\"--text-shell-line-color: #FFF;\"></app-text-shell>\n    </h4>\n    <p>\n      <app-text-shell [data]=\"post?.body\" animation=\"bouncing\" lines=\"3\" style=\"--text-shell-line-color: #fffdfd;\"></app-text-shell>\n    </p>\n    <h6>Comments</h6>\n    <ion-list lines=\"full\" style=\"--background: transparent\">\n      <ion-item *ngFor=\"let comment of comments | slice:0:5\">\n        <ion-label>\n          <h2>\n            <app-text-shell [data]=\"comment?.name\" animation=\"bouncing\" style=\"--text-shell-line-height: 16px;\"></app-text-shell>\n          </h2>\n          <p>\n            <app-text-shell [data]=\"comment?.body\" animation=\"bouncing\"></app-text-shell>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-list/data-store-list.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/data-store-list/data-store-list.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/app-shell\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      DataStore - List example\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      When you fetch data from a remote API, sometimes you request a list of items. If that’s the case you would end up having an <b>Observable</b> of type <code>Observable&lt;Array&lt;YourModel&gt;&gt;</code>.\n    </p>\n    <p>\n      The <b>DataStore</b> class works by assigning a shell property to any object.\n    </p>\n<pre>\nconst myObj = new YourModel();\nObject.assign(myObj, &#123;isShell: false&#125;);\n\nObject.assign([1, 2, 3], &#123;isShell: false&#125;);\n</pre>\n    <p>\n      In Javascript, everything is an object (including Arrays). That’s why you can assign properties to Arrays independently of their values.\n    </p>\n    <ion-list lines=\"full\" class=\"users-list\">\n      <ion-item *ngFor=\"let user of data\">\n        <ion-thumbnail slot=\"start\">\n          <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n            <app-image-shell animation=\"spinner\" [src]=\"user?.avatar\" [alt]=\"'Sample Image'\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-thumbnail>\n        <ion-label>\n          <h2 class=\"user-name\">\n            <app-text-shell [data]=\"user?.first_name\" animation=\"bouncing\"></app-text-shell>\n          </h2>\n          <h3 class=\"user-lastname\">\n            <app-text-shell [data]=\"user?.last_name\" animation=\"bouncing\"></app-text-shell>\n          </h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <p>\n      In this example we keep track of the current state of the data stream in a local <code>data</code> property.\n    </p>\n    <p>\n      Note how we define its type using <a href=\"https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types\" target=\"_blank\">Typescript intersection typing</a> like this <code>data: Array&lt;YourModel&gt; & ShellModel;</code>\n      to indicate it's an array that has a shell model appended (by the <b>DataStore</b>).\n    </p>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/app-shell\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      DataStore - Multiple DataStores example\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      Sometimes your view displays different types of data, each of them with a different model and data source.\n    </p>\n    <p>\n      If this is your use case, then you can use multiple data stores to fetch each data stream.\n    </p>\n    <p>\n      <b>Note:</b> This use case is different from the <a [routerLink]=\"['/showcase/app-shell/data-store-combined']\">Combined Data Sources</a> because in this case you have two data streams that will change independently one from the other updating different parts of the view without causing a full view 're-loading'.\n    </p>\n    <h6>Data Source A</h6>\n    <h5>What to do nearby</h5>\n    <ion-list lines=\"full\">\n      <ion-item *ngFor=\"let item of dataA?.items | slice:0:3\">\n        <ion-thumbnail slot=\"start\">\n          <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n            <app-image-shell animation=\"spinner\" [src]=\"item?.image\" [alt]=\"'Sample Image'\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-thumbnail>\n        <ion-label>\n          <h2 class=\"item-name\">\n            <app-text-shell [data]=\"item?.name\" animation=\"gradient\"></app-text-shell>\n          </h2>\n          <h4>\n            <app-text-shell style=\"--text-shell-line-height:14px;\" [data]=\"item?.category\" animation=\"gradient\"></app-text-shell>\n          </h4>\n          <p>\n            <app-text-shell style=\"--text-shell-line-height:14px;\" [data]=\"item?.address\" animation=\"gradient\"></app-text-shell>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <h6>Data Source B</h6>\n    <h5>Shop what's trending</h5>\n    <ion-list lines=\"full\">\n      <ion-item *ngFor=\"let item of dataB?.items | slice:0:5\">\n        <ion-thumbnail slot=\"start\">\n          <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n            <app-image-shell animation=\"spinner\" [src]=\"item?.image\" [alt]=\"'Sample Image'\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-thumbnail>\n        <ion-label>\n          <h2 class=\"item-name\">\n            <app-text-shell [data]=\"item?.name\" animation=\"gradient\"></app-text-shell>\n          </h2>\n          <p class=\"item-price\">\n            <app-text-shell [data]=\"(item?.salePrice) ? '$'.concat('', item.salePrice) : null\" animation=\"gradient\"></app-text-shell>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/app-shell\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      DataStore - Pagination example\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      This example is useful for use cases that require the data stream to be updated based on user actions. <i>Pagination</i> and <i>filtering</i> are the clear use cases that come to my mind.\n    </p>\n    <p>\n      For these use cases you get the initial data stream and then, upon user interaction, you request an update for that stream. For example requesting your remote API for the next page of results or a filtered set of results.\n    </p>\n    <p>\n      This example shows you how to merge the initial data stream with future data streams that may arise from user interaction.\n    </p>\n    <p>\n      <b>Current page: {{ currentPage }}</b>\n      <span *ngIf=\"!loadMorePages\" style=\"margin-inline-start: 10px;\"><small>(No more pages available)</small></span>\n    </p>\n    <p>\n      <small>Each time you click the button we fetch users from the next page.</small>\n    </p>\n    <ion-row style=\"background-color: #FFF; padding: 10px;\" *ngFor=\"let user of pagedUsers\">\n      <ion-col size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell animation=\"spinner\" [src]=\"user?.avatar\" [alt]=\"'Sample Image'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h3 style=\"margin-top: 0px;\">\n          <app-text-shell [data]=\"user?.first_name\"></app-text-shell>\n        </h3>\n        <p>\n          <app-text-shell [data]=\"user?.last_name\" lines=\"3\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-button (click)=\"getNextPageUsers()\" [disabled]=\"!loadMorePages || pagedUsers.isShell\">Fetch next page</ion-button>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/app-shell\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      DataStore - Stacked shells example\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      Once you have values coming from the initial data stream, the shell animation would be off. If its an <b>open stream</b>, then each time a new value arrives, it will be added to the view state without the shell animation.\n    </p>\n    <p>\n      This example is handy If you want to change the default functionality and apply independent shell animations to each value coming from the <b>open data stream</b>.\n    </p>\n    <p>\n      It's also a good example if you want to implement an <b>inifini scroll</b> feature.\n    </p>\n    <p>\n      <b>Note:</b> For this to work we will be transforming plain values into Observables, thus the need to update our markup and specify the binded model as async.\n    </p>\n<pre>\n&lt;h3&gt;\n  &lt;app-text-shell [data]=\"<b>(user | async)?</b>.first_name\">&lt;/app-text-shell&gt;\n&lt;/h3&gt;\n&lt;p&gt;\n  &lt;app-text-shell [data]=\"<b>(user | async)?</b>.last_name\" lines=\"3\">&lt;/app-text-shell&gt;\n&lt;/p&gt;\n</pre>\n    <p>\n      Also as we are dealing with a mix of shell models and real values that get stacked one after the other, we need to have two seperate lists. One to show the shell values and another to contain the stacked values.\n    </p>\n  </section>\n\n  <ng-template #userTemplate let-user=\"user\">\n    <ion-row style=\"background-color: #FFF; padding: 10px;\">\n      <ion-col size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell animation=\"spinner\" [src]=\"(user | async)?.avatar\" [alt]=\"'Sample Image'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h3 style=\"margin-top: 0px;\">\n          <app-text-shell [data]=\"(user | async)?.first_name\"></app-text-shell>\n        </h3>\n        <p>\n          <app-text-shell [data]=\"(user | async)?.last_name\" lines=\"3\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ng-template>\n\n  <div class=\"stacked-items-demo\">\n    <section class=\"showcase-section sticky-section\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button (click)=\"pushValuesToOpenStream()\">Push values to open stream</ion-button>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-button (click)=\"loadStackedResults()\">Load New Values</ion-button>\n        </ion-col>\n      </ion-row>\n    </section>\n\n    <section class=\"showcase-section\">\n      <div *ngFor=\"let user of stackedUsers\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: user }\"></ng-container>\n      </div>\n      <div *ngFor=\"let user of shellUsers\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: user }\"></ng-container>\n      </div>\n    </section>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/app-shell\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      DataStore - Subset example\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      Sometimes the data coming from the remote API does not match 100% the model you defined for your view.\n    </p>\n<pre>\nexport class YourModel extends ShellModel &#123;\n  cover: string;\n  image: string;\n  title: string;\n  description: string;\n&#125;\n\n// Data coming from the remote API with the following format\nconst jsonResponse = &#123;\n  name: 'extra-data',\n  fields: &#123;\n    cover: 'some-image';\n    image: 'some-other-image';\n    title: 'a-title';\n    description: 'a-description';\n  &#125;\n&#125;;\n</pre>\n    <p>\n      Hopefully, we can use some <b>RxJs operators</b> to mold the data and fit our needs.\n    </p>\n    <p>\n      If that’s not enough, you can use the handy <a href=\"https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb\" target=\"_blank\"><b>spread</b> and <b>rest</b> operators</a> to mold your data even deeper.\n    </p>\n<pre>\npublic getListDataSource(): Observable&lt;YourModel&gt; &#123;\n  const dataObservable = this.http.get('https://reqres.in/api/users');\n\n  return dataObservable.pipe(\n    map((jsonResponse) => &#123;\n      const filteredData: YourModel = &#123;\n        ...data.fields\n      &#125;;\n      return filteredData;\n    &#125;)\n  );\n&#125;\n</pre>\n  </section>\n  <div class=\"company\">\n    <h4>Company</h4>\n    <p>\n      <app-text-shell style=\"--text-shell-line-color: #FFF\" [data]=\"company.name\" animation=\"bouncing\"></app-text-shell>\n    </p>\n    <p>\n      <app-text-shell style=\"--text-shell-line-color: #FFF\" [data]=\"company.catchPhrase\" animation=\"bouncing\"></app-text-shell>\n    </p>\n    <p>\n      <app-text-shell style=\"--text-shell-line-color: #FFF\" [data]=\"company.bs\" animation=\"bouncing\"></app-text-shell>\n    </p>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/image-shell/image-shell.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/image-shell/image-shell.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/app-shell\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Image Shell\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <p>\n      This component enables to preload an image with an elegant shell.\n    </p>\n  </section>\n  <section class=\"showcase-section\">\n    <h5>Set different animation options</h5>\n    <p>\n      You can choose between <b>no animation</b> (default), <b>spinner animation</b>, and <b>gradient background</b> animation\n    </p>\n    <h4>No animation (default)</h4>\n<pre>\n&lt;app-image-shell [src]=\"\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h4>Spinner animation</h4>\n<pre>\n&lt;app-image-shell <b>animation=\"spinner\"</b> [src]=\"\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h4>Gradient animation</h4>\n<pre>\n&lt;app-image-shell <b>animation=\"gradient\"</b> [src]=\"\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell animation=\"gradient\" [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n  </section>\n  <section class=\"showcase-section\">\n    <p>\n      You can add/remove the following <b>Classes</b> to adjust the shell element behavior:\n    </p>\n    <h5>Overlay</h5>\n    <p>\n      This class adds a background overlay after the image has loaded.\n    </p>\n<pre>\n&lt;app-image-shell animation=\"spinner\" <b>class=\"add-overlay\"</b> [src]=\"''./assets/sample-images/travel/Travel2-64.47.png''\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell animation=\"spinner\" class=\"add-overlay\" [src]=\"'./assets/sample-images/travel/Travel2-64.47.png'\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n  </section>\n  <section class=\"showcase-section\">\n    <p>\n      You can also override these <b>CSS 4 variables</b> to adjust the shell element style\n    </p>\n    <h5>Background</h5>\n<pre>\napp-image-shell &#123;\n  --image-shell-loading-background: rgba(233, 30, 99, .25);\n&#125;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell style=\"--image-shell-loading-background: rgba(233, 30, 99, .25);\" [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h5>Overlay</h5>\n<pre>\napp-image-shell &#123;\n  --image-shell-overlay-background: rgba(103, 58, 183, .40);\n&#125;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell style=\"--image-shell-overlay-background: rgba(103, 58, 183, .40);\" animation=\"spinner\" class=\"add-overlay\" [src]=\"'./assets/sample-images/travel/Travel2-64.47.png'\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h5>Spinner</h5>\n<pre>\napp-image-shell &#123;\n  --image-shell-spinner-size: 40px;\n  --image-shell-spinner-color: #000000;\n&#125;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell style=\"--image-shell-spinner-size: 40px; --image-shell-spinner-color: #000000;\" animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h5>Background Animation</h5>\n    <p>\n      <b>Note:</b> These properties are only applied when using <code>animation=\"gradient\"</code>.\n    </p>\n<pre>\napp-image-shell &#123;\n  --image-shell-loading-background: rgba(255, 3, 109, 0.6);\n  --image-shell-animation-color: rgba(156, 4, 68, 0.7);\n&#125;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell style=\"\n          --image-shell-loading-background: rgba(255, 3, 109, 0.6);\n          --image-shell-animation-color: rgba(156, 4, 68, 0.7);\n        \" animation=\"gradient\" [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h5>Border Radius</h5>\n<pre>\napp-image-shell &#123;\n  --image-shell-border-radius: 10px;\n&#125;\n</pre>\n    <ion-row>\n      <ion-col>\n        <div style=\"width:80%; margin: 0px auto;\">\n          <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n            <app-image-shell style=\"--image-shell-border-radius: 10px;\" animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\n          </app-aspect-ratio>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div style=\"width:80%; margin: 0px auto;\">\n          <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n            <app-image-shell style=\"--image-shell-border-radius: 10px;\" animation=\"gradient\" [src]=\"\" [alt]=\"\"></app-image-shell>\n          </app-aspect-ratio>\n        </div>\n      </ion-col>\n    </ion-row>\n  </section>\n  <section class=\"showcase-section\">\n    <h2>Cover Image mode</h2>\n    <p>\n      In addition to the default <code>&lt;app-image-shell&gt;</code>, you can specify a <b>cover</b> mode if you want to display your image as a background-image.\n    </p>\n    <p>\n      This is different from the default mode, because (although it's not mandatory) cover mode is designed to contain content (for example some text)\n    </p>\n<pre>\n<b>&lt;app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"add-overlay\" [src]=\"\"&gt;</b>\n  &lt;app-aspect-ratio [ratio]=\"&#123;w:3, h:2&#125;\"&gt;\n    Some Text\n  &lt;/app-aspect-ratio&gt;\n<b>&lt;/app-image-shell&gt;</b>\n</pre>\n    <app-image-shell class=\"add-overlay\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"\">\n      <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\n        <h4 style=\"margin: 10px;\">Some Text on top of a background-image container</h4>\n      </app-aspect-ratio>\n    </app-image-shell>\n  </section>\n  <section class=\"showcase-section\">\n    <h2>Usage</h2>\n    <p>\n      Let me explain you the differences between <b>default</b> and <b>cover</b> mode and when you should use each one.\n    </p>\n    <h5>Default Mode Usage</h5>\n    <p>\n      You should use the <b>default mode</b> when you are 100% confident on the aspect ratio of an image.\n    </p>\n    <p>\n      If the image ratio does not match the specified aspect ratio, the image will be stretched.\n    </p>\n    <p>\n      <b>Expected behavior:</b>\n      <br />\n      The image <b>WILL</b> be stretched.\n      <br />\n      We define an aspect ratio of <b>2:1</b> but the image has an aspect ratio of <b>1:1</b>.\n    </p>\n    <div style=\"width:80%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n        <app-image-shell animation=\"spinner\" [src]=\"'./assets/sample-images/getting-started/category2-1.1.png'\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <p>\n      <b>Expected behavior:</b>\n      <br />\n      The image <b>WON'T</b> be stretched.\n      <br />\n      We define an aspect ratio of <b>1:1</b> that matches the image ratio of <b>1:1</b>.\n    </p>\n    <div style=\"width:80%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell animation=\"spinner\" [src]=\"'./assets/sample-images/getting-started/category2-1.1.png'\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h5>Cover Mode Usage</h5>\n    <p>\n      You should use the <b>cover mode</b> when you want to fill a container with an image and you don't care if the image is shown completly or a portion of it.\n    </p>\n    <p>\n      If the image ratio does not match the specified aspect ratio, the image will be cropped to fit the available space without stretching the image.\n    </p>\n    <p>\n      <b>Expected behavior:</b>\n      <br />\n      The image will be cropped to fill the available space.\n      <br />\n      We define an aspect ratio of <b>2:1</b> but the image has an aspect ratio of <b>1:1</b>.\n    </p>\n    <div style=\"width:80%; margin: 0px auto;\">\n      <app-image-shell animation=\"spinner\" [mode]=\"'cover'\" [src]=\"'./assets/sample-images/getting-started/category2-1.1.png'\">\n        <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n        </app-aspect-ratio>\n      </app-image-shell>\n    </div>\n    <p>\n      You can also change the <b>background-position</b> property to adjust how the image is placed inside the container.\n    </p>\n    <p>\n      <b>Notice:</b> This only applies to <b>cover</b> mode.\n    </p>\n<pre>\napp-image-shell[mode=\"cover\"] &#123;\n  background-position: bottom right;\n&#125;\n</pre>\n    <div style=\"width:80%; margin: 0px auto;\">\n      <app-image-shell style=\"background-position: bottom right;\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"'./assets/sample-images/getting-started/category2-1.1.png'\">\n        <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n        </app-aspect-ratio>\n      </app-image-shell>\n    </div>\n  </section>\n  <section class=\"showcase-section\">\n    <h2>Maintain Aspect Ratio</h2>\n    <p>\n      We use the handy <code>&lt;app-aspect-ratio&gt;</code> to ensure the image shell mantains a specified aspect ratio.\n    </p>\n    <p>\n      By doing so, we prevent content from jumping around the page while assets (images) are loading.\n    </p>\n    <h5>Default mode</h5>\n    <p>\n      Just surround the <code>&lt;app-image-shell&gt;</code> with an <code>&lt;app-aspect-ratio&gt;</code> element\n    </p>\n<pre>\n<b>&lt;app-aspect-ratio [ratio]=\"&#123;w:3, h:2&#125;\"&gt;</b>\n  &lt;app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\n<b>&lt;/app-aspect-ratio&gt;</b>\n</pre>\n    <div style=\"width:60%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\n        <app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h5>Cover mode</h5>\n    <p>\n      When using the <b>cover</b> mode we need to include the <code>&lt;app-aspect-ratio&gt;</code> inside the <code>&lt;app-image-shell&gt;</code> element instead of surrounding it.\n    </p>\n<pre>\n&lt;app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"add-overlay\" [src]=\"\"&gt;\n  <b>&lt;app-aspect-ratio [ratio]=\"&#123;w:3, h:2&#125;\"&gt;</b>\n    Some Text\n  <b>&lt;/app-aspect-ratio&gt;</b>\n&lt;/app-image-shell&gt;\n</pre>\n    <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"\">\n      <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\n        <h4 style=\"margin: 10px;\">Some Text on top of a background-image container</h4>\n      </app-aspect-ratio>\n    </app-image-shell>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/app-shell\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Simple Data Binding\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\">\n    <b>Back to basics ...</b>\n    <p>\n      We can tweak our data stream with some RxJs operators and achieve an app shell loading interaction\n    </p>\n    <p>\n      Let's set a timeout and fetch data using the <code>HttpClient</code>\n    </p>\n    <p>\n      Data coming in <b>{{ simpleFetchCountdown }} seconds</b>\n    </p>\n    <ion-row style=\"background-color: #FFF; padding: 10px; margin: 20px;\">\n      <ion-col size=\"12\">\n        <app-image-shell animation=\"gradient\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"simpleFetchData?.cover\" [alt]=\"'Sample Image Cover'\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </ion-col>\n      <ion-col size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell animation=\"gradient\" [src]=\"simpleFetchData?.image\" [alt]=\"'Sample Image'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h3 style=\"margin-top: 0px;\">\n          <app-text-shell animation=\"gradient\" [data]=\"simpleFetchData?.title\"></app-text-shell>\n        </h3>\n        <p>\n          <app-text-shell animation=\"gradient\" [data]=\"simpleFetchData?.description\" lines=\"3\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-button (click)=\"showcaseShellSimpleFetch(3)\" [disabled]=\"simpleFetchButtonDisabled\">Fetch more Data</ion-button>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/text-shell/text-shell.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/showcase/app-shell/text-shell/text-shell.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"showcase/app-shell\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Text Shell\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <section class=\"showcase-section\" style=\"margin-bottom: 40px;\">\n    <p>\n      This component is useful when you want to show a loading indicator while fetching text data from the server.\n    </p>\n    <p>\n      The <code>&lt;app-text-shell&gt;</code> basically works by wrapping the text node with a loading indicator while you are fetching data.\n    </p>\n    <p>\n      While there are empty values the component adds some 'loading' styles and animations. Whereas while there are non empty values, the loading state is removed.\n    </p>\n    <p>\n      Try toggling the loading state of the text shells below by changing the value of this textarea.\n    </p>\n  </section>\n  <div class=\"loading-state-demo\">\n    <section class=\"showcase-section sticky-section\">\n      <ion-textarea style=\"--background: #FFF;\" placeholder=\"When this text is empty the text-shell will show the loading state.\" clearOnEdit=\"true\" [(ngModel)]=\"sampleTextShellData\"></ion-textarea>\n      <p>\n        You can reset the 'loading' state by clearing the textarea value.\n      </p>\n    </section>\n    <section class=\"showcase-section\">\n      <h4>No animation (default)</h4>\n      <p>\n        Single line example\n      </p>\n      <div style=\"background-color: #FFF; padding: 20px;\">\n        <app-text-shell [data]=\"sampleTextShellData\"></app-text-shell>\n      </div>\n      <p>\n        Multi-line example\n      </p>\n      <div style=\"background-color: #FFF; padding: 20px;\">\n        <p>\n          <app-text-shell [data]=\"sampleTextShellData\" lines=\"3\"></app-text-shell>\n        </p>\n      </div>\n      <p>\n        On top of another element (with transparent background)\n      </p>\n      <div style=\"background-color: #FFF; padding: 20px; color: #FFF; font-weight: 500;\">\n        <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"'./assets/sample-images/getting-started/category5-1.1.png'\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <p style=\"margin: 20px 40px;\">\n              <app-text-shell [data]=\"sampleTextShellData\" lines=\"3\"></app-text-shell>\n            </p>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </div>\n    </section>\n    <section class=\"showcase-section\">\n      <h4>Bouncing animation</h4>\n      <p>\n        Single line example\n      </p>\n      <div style=\"background-color: #FFF; padding: 20px;\">\n        <app-text-shell [data]=\"sampleTextShellData\" animation=\"bouncing\"></app-text-shell>\n      </div>\n      <p>\n        Multi-line example\n      </p>\n      <div style=\"background-color: #FFF; padding: 20px;\">\n        <p>\n          <app-text-shell [data]=\"sampleTextShellData\" animation=\"bouncing\" lines=\"3\"></app-text-shell>\n        </p>\n      </div>\n      <p>\n        On top of another element (with transparent background)\n      </p>\n      <div style=\"background-color: #FFF; padding: 20px; color: #FFF; font-weight: 500;\">\n        <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"'./assets/sample-images/getting-started/category5-1.1.png'\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <p style=\"margin: 20px 40px;\">\n              <app-text-shell [data]=\"sampleTextShellData\" animation=\"bouncing\" lines=\"3\"></app-text-shell>\n            </p>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </div>\n      <p>\n        <b>Note:</b> As we don’t use masks, this approach works well with use cases that require transparent backgrounds.\n      </p>\n    </section>\n    <section class=\"showcase-section\">\n      <h4>Gradient animation</h4>\n      <p>\n        Single line example\n      </p>\n      <div style=\"background-color: #FFF; padding: 20px;\">\n        <app-text-shell [data]=\"sampleTextShellData\" animation=\"gradient\"></app-text-shell>\n      </div>\n      <p>\n        Multi-line example\n      </p>\n      <div style=\"background-color: #FFF; padding: 20px;\">\n        <p>\n          <app-text-shell [data]=\"sampleTextShellData\" animation=\"gradient\" lines=\"3\"></app-text-shell>\n        </p>\n      </div>\n      <p>\n        On top of another element (with transparent background)\n      </p>\n      <div style=\"background-color: #FFF; padding: 20px; color: #FFF; font-weight: 500;\">\n        <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"'./assets/sample-images/getting-started/category5-1.1.png'\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <p style=\"margin: 20px 40px;\">\n              <app-text-shell [data]=\"sampleTextShellData\" animation=\"gradient\" lines=\"3\"></app-text-shell>\n            </p>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </div>\n      <p>\n        <b>Side effect:</b> This solution doesn’t play well if you require the <code>&lt;app-text-shell&gt;</code> to have a transparent background as the masks need a solid color to work properly.\n      </p>\n    </section>\n    <section class=\"showcase-section\">\n      <h5>Prepend and Append text to the data binded</h5>\n      <p>\n        There are cases where we need to add some text before or after the value binded to the <code>&lt;app-text-shell&gt;</code>. For example if we are loading a price value and we want to put the '$' before the price.\n      </p>\n  <pre>\n  &lt;app-text-shell [data]=\"<b>(sampleTextShellData) ? '$'.concat(' ', sampleTextShellData) : null</b>\"&gt;&lt;/app-text-shell&gt;\n  </pre>\n      <div style=\"background-color: #FFF; padding: 20px;\">\n        <app-text-shell [data]=\"(sampleTextShellData) ? '$'.concat(' ', sampleTextShellData) : null\"></app-text-shell>\n      </div>\n<pre>\n&lt;app-text-shell [data]=\"<b>(sampleTextShellData) ? sampleTextShellData.concat(' years old') : null</b>\"&gt;&lt;/app-text-shell&gt;\n</pre>\n      <div style=\"background-color: #FFF; padding: 20px;\">\n        <app-text-shell [data]=\"(sampleTextShellData) ? sampleTextShellData.concat(' years old') : null\"></app-text-shell>\n      </div>\n    </section>\n  </div>\n  <section class=\"showcase-section\">\n    <h4>Other use cases</h4>\n    <p>\n      The <code>&lt;app-text-shell&gt;</code> element can be used alone or wrapped with a text tag (<b>h1</b>, <b>h2</b>, <b>h3</b>, <b>p</b>, etc).\n    </p>\n    <p>\n      In case you wrap it with a heading element, we included basic styles (<code>src/theme/shell-defaults.scss</code>) to match the different heading styles (mainly line-height associated to each heading).\n    </p>\n<pre>\n:root &#123;\n  h1 > app-text-shell &#123;\n    --text-shell-line-height: 32px;\n    --text-shell-line-color: #CCC;\n  &#125;\n&#125;\n</pre>\n    <p>\n      By matching the line-height of the text-shell with the line-height of the wrapper element, we avoid page height bumps after the data gets loaded into the shells.\n    </p>\n<pre>\n&lt;h1&gt;\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/h1&gt;\n\n&lt;h2&gt;\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/h2&gt;\n\n&lt;h3&gt;\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/h3&gt;\n\n&lt;h4&gt;\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/h4&gt;\n\n&lt;h5&gt;\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/h5&gt;\n</pre>\n    <h1>\n      <app-text-shell [data]=\"\"></app-text-shell>\n    </h1>\n    <h2>\n      <app-text-shell [data]=\"\"></app-text-shell>\n    </h2>\n    <h3>\n      <app-text-shell [data]=\"\"></app-text-shell>\n    </h3>\n    <h4>\n      <app-text-shell [data]=\"\"></app-text-shell>\n    </h4>\n    <h5>\n      <app-text-shell [data]=\"\"></app-text-shell>\n    </h5>\n  </section>\n  <section class=\"showcase-section\">\n    <p>\n      You can add/remove the following <b>Attributes</b> to adjust the shell element behavior\n    </p>\n    <h5>Multi-line support</h5>\n    <p>\n      You can set up-to 6 lines\n    </p>\n<pre>\n&lt;p&gt;\n  &lt;app-text-shell <b>lines=\"6\"</b> [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/p&gt;\n</pre>\n    <p>\n      <app-text-shell style=\"--text-shell-line-color: #DDD;\" [data]=\"\" lines=\"6\"></app-text-shell>\n    </p>\n    <h5>Set different animation options</h5>\n    <p>\n      You can choose between <b>no animation</b> (default), <b>bouncing animation</b>, and <b>gradient background with line masks on top</b>\n    </p>\n<pre>\n&lt;p&gt;\n  &lt;app-text-shell <b>animation=\"bouncing\"</b> lines=\"2\" [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/p&gt;\n</pre>\n    <p>\n      <app-text-shell style=\"--text-shell-line-color: #DDD;\" [data]=\"\" animation=\"bouncing\" lines=\"2\"></app-text-shell>\n    </p>\n<pre>\n&lt;p&gt;\n  &lt;app-text-shell <b>animation=\"gradient\"</b> lines=\"2\" [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/p&gt;\n</pre>\n<pre>\napp-text-shell &#123;\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent;\n&#125;\n</pre>\n    <p style=\"padding: 5px; background: #FFF;\">\n      <app-text-shell style=\"--text-shell-line-color: transparent; --text-shell-background: #FFF;\" [data]=\"\" animation=\"gradient\" lines=\"2\"></app-text-shell>\n    </p>\n    <p>\n      In this mode, the <code>--text-shell-background</code> property refers to the masks colors.\n    </p>\n    <p>\n      <b>Note:</b> When using a <code>gradient</code> animation, make sure you set the line-color to transparent so the background animation that's beneath the masks can be seen.\n    </p>\n  </section>\n  <section class=\"showcase-section\">\n    <p>\n      You can also override these <b>CSS 4 variables</b> to adjust the shell element style\n    </p>\n    <h5>Line color</h5>\n<pre>\napp-text-shell &#123;\n  --text-shell-line-color: rgba(233, 30, 99, .25);\n&#125;\n</pre>\n    <h3>\n      <app-text-shell style=\"--text-shell-line-color: rgba(233, 30, 99, .25);\" [data]=\"\"></app-text-shell>\n    </h3>\n    <h5>Background</h5>\n    <p>\n      Background by default is set to <b>transparent</b>.\n    </p>\n<pre>\napp-text-shell &#123;\n  --text-shell-line-color: #FFFFFF;\n  --text-shell-background: #000000;\n&#125;\n</pre>\n    <p style=\"padding: 5px; background: #000000;\">\n      <app-text-shell style=\"--text-shell-line-color: #FFFFFF; --text-shell-background: #000000;\" [data]=\"\" lines=\"3\"></app-text-shell>\n    </p>\n    <h5>Background Animation</h5>\n    <p>\n      <b>Note:</b> These properties are only applied when using <code>animation=\"gradient\"</code>.\n    </p>\n<pre>\napp-text-shell &#123;\n  --text-shell-line-color: transparent;\n  --text-shell-background: #000000;\n  --text-shell-animation-background: rgba(255, 3, 109, 0.6);\n  --text-shell-animation-color: rgba(156, 4, 68, 0.7);\n&#125;\n</pre>\n    <p style=\"padding: 5px; background: #000000;\">\n      <app-text-shell style=\"\n        --text-shell-line-color: transparent;\n        --text-shell-background: #000000;\n        --text-shell-animation-background: rgba(255, 3, 109, 0.6);\n        --text-shell-animation-color: rgba(156, 4, 68, 0.7);\n      \" [data]=\"\" lines=\"3\" animation=\"gradient\"></app-text-shell>\n    </p>\n    <h5>Line height</h5>\n<pre>\napp-text-shell &#123;\n  --text-shell-line-height: 40px;\n&#125;\n</pre>\n    <h3>\n      <app-text-shell style=\"--text-shell-line-height: 40px;\" [data]=\"\"></app-text-shell>\n    </h3>\n    <h5>Line gutter</h5>\n<pre>\napp-text-shell &#123;\n  --text-shell-line-gutter: 10px;\n&#125;\n</pre>\n    <p>\n      <app-text-shell style=\"--text-shell-line-gutter: 10px; --text-shell-line-color: #CCC;\" [data]=\"\" lines=\"4\"></app-text-shell>\n    </p>\n  </section>\n  <section class=\"showcase-section\">\n    <h5>Max-width</h5>\n    <p>\n      By default, the <code>&lt;app-text-shell&gt;</code> element will fill it's container width. You can adjust this by setting a temporary <code>max-width</code> while the shell loading state is present.\n    </p>\n<pre>\n.sample-text-max-width &gt; app-text-shell &#123;\n  <b>max-width: 50%;</b>\n\n  &.text-loaded &#123;\n    <b>max-width: unset;</b>\n  &#125;\n&#125;\n</pre>\n    <div class=\"sample-text-max-width\">\n      <app-text-shell [data]=\"sampleTextShellData\"></app-text-shell>\n    </div>\n    <h5>Min-width</h5>\n    <p>\n      When the <code>&lt;app-text-shell&gt;</code> parent container doesn't have a width defined, it may happen that the <code>&lt;app-text-shell&gt;</code> inherits an undefined width and thus it's not shown.\n    </p>\n    <p>In these cases setting a temporary <code>min-width</code> fixes the issue.</p>\n    <p>\n      <b>Note:</b> If the parent doesn't have a defined width, it will fail to set a min-width based on a percentage of it's parents width. You will have to use absolute units (px, ch, etc).\n    </p>\n<pre>\n.sample-text-min-width &gt; app-text-shell &#123;\n  <b>min-width: 80px;</b>\n\n  &.text-loaded &#123;\n    <b>min-width: 0px;</b>\n  &#125;\n&#125;\n</pre>\n    <span class=\"sample-text-min-width\" style=\"display: inline-block;\">\n      <app-text-shell [data]=\"sampleTextShellData\"></app-text-shell>\n    </span>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/showcase/app-shell/app-shell.module.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.module.ts ***!
  \********************************************************/
/*! exports provided: AppShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellModule", function() { return AppShellModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_shell_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-shell.page */ "./src/app/showcase/app-shell/app-shell.page.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _aspect_ratio_aspect_ratio_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aspect-ratio/aspect-ratio.page */ "./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.ts");
/* harmony import */ var _image_shell_image_shell_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./image-shell/image-shell.page */ "./src/app/showcase/app-shell/image-shell/image-shell.page.ts");
/* harmony import */ var _text_shell_text_shell_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./text-shell/text-shell.page */ "./src/app/showcase/app-shell/text-shell/text-shell.page.ts");
/* harmony import */ var _simple_data_binding_simple_data_binding_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./simple-data-binding/simple-data-binding.page */ "./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.ts");
/* harmony import */ var _data_store_basic_data_store_basic_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data-store-basic/data-store-basic.page */ "./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.ts");
/* harmony import */ var _data_store_list_data_store_list_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data-store-list/data-store-list.page */ "./src/app/showcase/app-shell/data-store-list/data-store-list.page.ts");
/* harmony import */ var _data_store_subset_data_store_subset_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data-store-subset/data-store-subset.page */ "./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.ts");
/* harmony import */ var _data_store_combined_data_store_combined_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data-store-combined/data-store-combined.page */ "./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.ts");
/* harmony import */ var _data_store_multiple_data_store_multiple_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data-store-multiple/data-store-multiple.page */ "./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.ts");
/* harmony import */ var _data_store_pagination_data_store_pagination_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data-store-pagination/data-store-pagination.page */ "./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.ts");
/* harmony import */ var _data_store_stacked_data_store_stacked_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data-store-stacked/data-store-stacked.page */ "./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.ts");
/* harmony import */ var _data_store_dependant_data_store_dependant_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./data-store-dependant/data-store-dependant.page */ "./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.ts");






















var routes = [
    {
        path: '',
        component: _app_shell_page__WEBPACK_IMPORTED_MODULE_8__["AppShellPage"]
    },
    {
        path: 'aspect-ratio',
        component: _aspect_ratio_aspect_ratio_page__WEBPACK_IMPORTED_MODULE_10__["AspectRatioPage"]
    },
    {
        path: 'image-shell',
        component: _image_shell_image_shell_page__WEBPACK_IMPORTED_MODULE_11__["ImageShellPage"]
    },
    {
        path: 'text-shell',
        component: _text_shell_text_shell_page__WEBPACK_IMPORTED_MODULE_12__["TextShellPage"]
    },
    {
        path: 'simple-data-binding',
        component: _simple_data_binding_simple_data_binding_page__WEBPACK_IMPORTED_MODULE_13__["SimpleDataBindingPage"]
    },
    {
        path: 'data-store-basic',
        component: _data_store_basic_data_store_basic_page__WEBPACK_IMPORTED_MODULE_14__["DataStoreBasicPage"]
    },
    {
        path: 'data-store-list',
        component: _data_store_list_data_store_list_page__WEBPACK_IMPORTED_MODULE_15__["DataStoreListPage"]
    },
    {
        path: 'data-store-subset',
        component: _data_store_subset_data_store_subset_page__WEBPACK_IMPORTED_MODULE_16__["DataStoreSubsetPage"]
    },
    {
        path: 'data-store-combined',
        component: _data_store_combined_data_store_combined_page__WEBPACK_IMPORTED_MODULE_17__["DataStoreCombinedPage"]
    },
    {
        path: 'data-store-multiple',
        component: _data_store_multiple_data_store_multiple_page__WEBPACK_IMPORTED_MODULE_18__["DataStoreMultiplePage"]
    },
    {
        path: 'data-store-pagination',
        component: _data_store_pagination_data_store_pagination_page__WEBPACK_IMPORTED_MODULE_19__["DataStorePaginationPage"]
    },
    {
        path: 'data-store-stacked',
        component: _data_store_stacked_data_store_stacked_page__WEBPACK_IMPORTED_MODULE_20__["DataStoreStackedPage"]
    },
    {
        path: 'data-store-dependant',
        component: _data_store_dependant_data_store_dependant_page__WEBPACK_IMPORTED_MODULE_21__["DataStoreDependantPage"]
    }
];
var AppShellModule = /** @class */ (function () {
    function AppShellModule() {
    }
    AppShellModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                _app_shell_page__WEBPACK_IMPORTED_MODULE_8__["AppShellPage"],
                _aspect_ratio_aspect_ratio_page__WEBPACK_IMPORTED_MODULE_10__["AspectRatioPage"],
                _image_shell_image_shell_page__WEBPACK_IMPORTED_MODULE_11__["ImageShellPage"],
                _text_shell_text_shell_page__WEBPACK_IMPORTED_MODULE_12__["TextShellPage"],
                _simple_data_binding_simple_data_binding_page__WEBPACK_IMPORTED_MODULE_13__["SimpleDataBindingPage"],
                _data_store_basic_data_store_basic_page__WEBPACK_IMPORTED_MODULE_14__["DataStoreBasicPage"],
                _data_store_list_data_store_list_page__WEBPACK_IMPORTED_MODULE_15__["DataStoreListPage"],
                _data_store_subset_data_store_subset_page__WEBPACK_IMPORTED_MODULE_16__["DataStoreSubsetPage"],
                _data_store_combined_data_store_combined_page__WEBPACK_IMPORTED_MODULE_17__["DataStoreCombinedPage"],
                _data_store_multiple_data_store_multiple_page__WEBPACK_IMPORTED_MODULE_18__["DataStoreMultiplePage"],
                _data_store_pagination_data_store_pagination_page__WEBPACK_IMPORTED_MODULE_19__["DataStorePaginationPage"],
                _data_store_stacked_data_store_stacked_page__WEBPACK_IMPORTED_MODULE_20__["DataStoreStackedPage"],
                _data_store_dependant_data_store_dependant_page__WEBPACK_IMPORTED_MODULE_21__["DataStoreDependantPage"]
            ],
            providers: [
                _showcase_service__WEBPACK_IMPORTED_MODULE_9__["ShowcaseService"]
            ]
        })
    ], AppShellModule);
    return AppShellModule;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/app-shell.page.scss":
/*!********************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/showcase/app-shell/app-shell.page.ts":
/*!******************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.page.ts ***!
  \******************************************************/
/*! exports provided: AppShellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellPage", function() { return AppShellPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppShellPage = /** @class */ (function () {
    function AppShellPage() {
    }
    AppShellPage.prototype.ngOnInit = function () {
    };
    AppShellPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showcase-shell',
            template: __webpack_require__(/*! raw-loader!./app-shell.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/app-shell.page.html"),
            styles: [__webpack_require__(/*! ./app-shell.page.scss */ "./src/app/showcase/app-shell/app-shell.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppShellPage);
    return AppShellPage;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXNwZWN0LXJhdGlvL2FzcGVjdC1yYXRpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9hc3BlY3QtcmF0aW8vYXNwZWN0LXJhdGlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9hc3BlY3QtcmF0aW8vYXNwZWN0LXJhdGlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.ts ***!
  \**********************************************************************/
/*! exports provided: AspectRatioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspectRatioPage", function() { return AspectRatioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AspectRatioPage = /** @class */ (function () {
    function AspectRatioPage() {
    }
    AspectRatioPage.prototype.ngOnInit = function () {
    };
    AspectRatioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aspect-ratio-page',
            template: __webpack_require__(/*! raw-loader!./aspect-ratio.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.html"),
            styles: [__webpack_require__(/*! ./aspect-ratio.page.scss */ "./src/app/showcase/app-shell/aspect-ratio/aspect-ratio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AspectRatioPage);
    return AspectRatioPage;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1iYXNpYy9kYXRhLXN0b3JlLWJhc2ljLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtYmFzaWMvZGF0YS1zdG9yZS1iYXNpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1iYXNpYy9kYXRhLXN0b3JlLWJhc2ljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.ts ***!
  \******************************************************************************/
/*! exports provided: DataStoreBasicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreBasicPage", function() { return DataStoreBasicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");






var DataStoreBasicPage = /** @class */ (function () {
    function DataStoreBasicPage(showcaseService) {
        this.showcaseService = showcaseService;
        this.dataStoreButtonDisabled = true;
    }
    DataStoreBasicPage.prototype.ngOnInit = function () {
        this.showcaseDataStore();
    };
    DataStoreBasicPage.prototype.showcaseDataStore = function () {
        var _this = this;
        // Prevent rage clicks on the 'Fetch more Data' button
        this.dataStoreButtonDisabled = true;
        var dataSource = this.showcaseService.getSimpleDataSource();
        // Initialize the model specifying that it is a shell model
        var shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellModel"]();
        var dataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        dataStore.load(dataSource);
        dataStore.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(2), // DataStore will emit a mock object and the real data fetched from the source. Emit those two values and then complete.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.dataStoreButtonDisabled = false; })).subscribe(function (data) {
            _this.dataStoreData = data;
        });
    };
    DataStoreBasicPage.ctorParameters = function () { return [
        { type: _showcase_service__WEBPACK_IMPORTED_MODULE_4__["ShowcaseService"] }
    ]; };
    DataStoreBasicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-store-basic',
            template: __webpack_require__(/*! raw-loader!./data-store-basic.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.html"),
            styles: [__webpack_require__(/*! ./data-store-basic.page.scss */ "./src/app/showcase/app-shell/data-store-basic/data-store-basic.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_4__["ShowcaseService"]])
    ], DataStoreBasicPage);
    return DataStoreBasicPage;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n.tasks {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1jb21iaW5lZC9kYXRhLXN0b3JlLWNvbWJpbmVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtY29tYmluZWQvZGF0YS1zdG9yZS1jb21iaW5lZC5wYWdlLnNjc3MiLCIvVXNlcnMvaW1ha2VyL0Rlc2t0b3AvSU1BS0VSL0FBQV9pbWFrZXJfc3Vic2NyaXB0aW9uL2lvblZvaWNlL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FDbkJBO0VBQ0UseUJBQUE7RUFDQSx3aUJBQUE7RUFDQSxhQUFBO0FEc0JGIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtY29tYmluZWQvZGF0YS1zdG9yZS1jb21iaW5lZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGFza3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMjBweDtcbn0iLCJAaW1wb3J0IFwiLi4vYXBwLXNoZWxsLnBhZ2VcIjtcblxuLnRhc2tzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMzgnJTNFJTNDcGF0aCBkPSdNMCAzOC41OWwyLjgzLTIuODMgMS40MSAxLjQxTDEuNDEgNDBIMHYtMS40MXpNMCAxLjRsMi44MyAyLjgzIDEuNDEtMS40MUwxLjQxIDBIMHYxLjQxek0zOC41OSA0MGwtMi44My0yLjgzIDEuNDEtMS40MUw0MCAzOC41OVY0MGgtMS40MXpNNDAgMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwzOC41OSAwSDQwdjEuNDF6TTIwIDE4LjZsMi44My0yLjgzIDEuNDEgMS40MUwyMS40MSAyMGwyLjgzIDIuODMtMS40MSAxLjQxTDIwIDIxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDE4LjU5IDIwbC0yLjgzLTIuODMgMS40MS0xLjQxTDIwIDE4LjU5eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.ts ***!
  \************************************************************************************/
/*! exports provided: DataStoreCombinedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreCombinedPage", function() { return DataStoreCombinedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");





var DataStoreCombinedPage = /** @class */ (function () {
    function DataStoreCombinedPage(showcaseService) {
        this.showcaseService = showcaseService;
    }
    DataStoreCombinedPage.prototype.ngOnInit = function () {
        // We created ShowcaseCombinedTaskUserModel to combine the task with his user data.
        // They are 2 different collections (or data tables in the DB) and we need to combine them into 1 dataSource.
        var _this = this;
        var dataSource = this.showcaseService.getCombinedTasksUserDataSource();
        var shellModel = [
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__["ShowcaseCombinedTaskUserModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__["ShowcaseCombinedTaskUserModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__["ShowcaseCombinedTaskUserModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__["ShowcaseCombinedTaskUserModel"]()
        ];
        this.tasksCombinedDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
        this.tasksCombinedDataStore.load(dataSource);
        this.tasksCombinedDataStore.state.subscribe(function (data) {
            _this.tasks = data;
        });
    };
    DataStoreCombinedPage.ctorParameters = function () { return [
        { type: _showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"] }
    ]; };
    DataStoreCombinedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-store-combined',
            template: __webpack_require__(/*! raw-loader!./data-store-combined.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.html"),
            styles: [__webpack_require__(/*! ./data-store-combined.page.scss */ "./src/app/showcase/app-shell/data-store-combined/data-store-combined.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"]])
    ], DataStoreCombinedPage);
    return DataStoreCombinedPage;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n.post {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1kZXBlbmRhbnQvZGF0YS1zdG9yZS1kZXBlbmRhbnQucGFnZS5zY3NzIiwic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1kZXBlbmRhbnQvZGF0YS1zdG9yZS1kZXBlbmRhbnQucGFnZS5zY3NzIiwiL1VzZXJzL2ltYWtlci9EZXNrdG9wL0lNQUtFUi9BQUFfaW1ha2VyX3N1YnNjcmlwdGlvbi9pb25Wb2ljZS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBQ25CQTtFQUNFLHlCQUFBO0VBQ0Esd2lCQUFBO0VBQ0EsYUFBQTtBRHNCRiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLWRlcGVuZGFudC9kYXRhLXN0b3JlLWRlcGVuZGFudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAyMHB4O1xufSIsIkBpbXBvcnQgXCIuLi9hcHAtc2hlbGwucGFnZVwiO1xuXG4ucG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.ts ***!
  \**************************************************************************************/
/*! exports provided: DataStoreDependantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreDependantPage", function() { return DataStoreDependantPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");





var DataStoreDependantPage = /** @class */ (function () {
    function DataStoreDependantPage(showcaseService) {
        this.showcaseService = showcaseService;
    }
    DataStoreDependantPage.prototype.ngOnInit = function () {
        var _this = this;
        var postDataSource = this.showcaseService.getDependantDataSourcePost();
        var postShellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcasePostModel"]();
        this.postDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](postShellModel);
        this.postDataStore.load(postDataSource);
        this.postDataStore.state.subscribe(function (data) {
            _this.post = data;
        });
        var commentsShellModel = [
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseCommentModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseCommentModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_2__["ShowcaseCommentModel"]()
        ];
        var commentsDataSource = this.showcaseService.getDependantDataSourcePostComments(this.postDataStore.state);
        this.commentsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](commentsShellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.commentsDataStore.load(commentsDataSource);
        this.commentsDataStore.state.subscribe(function (data) {
            _this.comments = data;
        });
    };
    DataStoreDependantPage.ctorParameters = function () { return [
        { type: _showcase_service__WEBPACK_IMPORTED_MODULE_3__["ShowcaseService"] }
    ]; };
    DataStoreDependantPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-store-dependant',
            template: __webpack_require__(/*! raw-loader!./data-store-dependant.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.html"),
            styles: [__webpack_require__(/*! ./data-store-dependant.page.scss */ "./src/app/showcase/app-shell/data-store-dependant/data-store-dependant.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_3__["ShowcaseService"]])
    ], DataStoreDependantPage);
    return DataStoreDependantPage;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-list/data-store-list.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-list/data-store-list.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n.users-list ion-item {\n  --padding-start: 0px;\n}\n.user-name > app-text-shell {\n  --text-shell-line-height: 17px;\n  max-width: 120px;\n}\n.user-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n.user-lastname > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 120px;\n}\n.user-lastname > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1saXN0L2RhdGEtc3RvcmUtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLWxpc3QvZGF0YS1zdG9yZS1saXN0LnBhZ2Uuc2NzcyIsIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRko7QUNsQkU7RUFDRSxvQkFBQTtBRHFCSjtBQ2pCQTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7QURvQkY7QUNuQkU7RUFDRSxrQkFBQTtBRHFCSjtBQ2pCQTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7QURvQkY7QUNuQkU7RUFDRSxrQkFBQTtBRHFCSiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLWxpc3QvZGF0YS1zdG9yZS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi51c2Vycy1saXN0IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTdweDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLnVzZXItbGFzdG5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cbi51c2VyLWxhc3RuYW1lID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59IiwiQGltcG9ydCBcIi4uL2FwcC1zaGVsbC5wYWdlXCI7XG5cbi51c2Vycy1saXN0IHtcbiAgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICB9XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTdweDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi51c2VyLWxhc3RuYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-list/data-store-list.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-list/data-store-list.page.ts ***!
  \****************************************************************************/
/*! exports provided: DataStoreListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreListPage", function() { return DataStoreListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");





var DataStoreListPage = /** @class */ (function () {
    function DataStoreListPage(showcaseService) {
        this.showcaseService = showcaseService;
    }
    Object.defineProperty(DataStoreListPage.prototype, "isShell", {
        get: function () {
            return (this.data && this.data.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    DataStoreListPage.prototype.ngOnInit = function () {
        var _this = this;
        var dataSource = this.showcaseService.getListDataSource();
        // Initialize the model specifying that it is a shell model
        var shellModel = [
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"](),
            new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"]()
        ];
        this.dataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.dataStore.load(dataSource);
        this.dataStore.state.subscribe(function (data) {
            _this.data = data;
        });
    };
    DataStoreListPage.ctorParameters = function () { return [
        { type: _showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataStoreListPage.prototype, "isShell", null);
    DataStoreListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-store-list',
            template: __webpack_require__(/*! raw-loader!./data-store-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-list/data-store-list.page.html"),
            styles: [__webpack_require__(/*! ./data-store-list.page.scss */ "./src/app/showcase/app-shell/data-store-list/data-store-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"]])
    ], DataStoreListPage);
    return DataStoreListPage;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n.item-name {\n  font-weight: 500;\n}\n.item-name > app-text-shell {\n  --text-shell-line-height: 16px;\n}\n.item-price > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 80px;\n}\n.item-price > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1tdWx0aXBsZS9kYXRhLXN0b3JlLW11bHRpcGxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtbXVsdGlwbGUvZGF0YS1zdG9yZS1tdWx0aXBsZS5wYWdlLnNjc3MiLCIvVXNlcnMvaW1ha2VyL0Rlc2t0b3AvSU1BS0VSL0FBQV9pbWFrZXJfc3Vic2NyaXB0aW9uL2lvblZvaWNlL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FDbkJBO0VBQ0UsZ0JBQUE7QURzQkY7QUNwQkE7RUFDRSw4QkFBQTtBRHVCRjtBQ3BCQTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtBRHVCRjtBQ3RCRTtFQUNFLGtCQUFBO0FEd0JKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2RhdGEtc3RvcmUtbXVsdGlwbGUvZGF0YS1zdG9yZS1tdWx0aXBsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaXRlbS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLml0ZW0tbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uaXRlbS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG59XG4uaXRlbS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufSIsIkBpbXBvcnQgXCIuLi9hcHAtc2hlbGwucGFnZVwiO1xuXG4uaXRlbS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5pdGVtLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cblxuLml0ZW0tcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.ts ***!
  \************************************************************************************/
/*! exports provided: DataStoreMultiplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreMultiplePage", function() { return DataStoreMultiplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _fashion_listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fashion/listing/fashion-listing.model */ "./src/app/fashion/listing/fashion-listing.model.ts");
/* harmony import */ var _travel_listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../travel/listing/travel-listing.model */ "./src/app/travel/listing/travel-listing.model.ts");






var DataStoreMultiplePage = /** @class */ (function () {
    function DataStoreMultiplePage(showcaseService) {
        this.showcaseService = showcaseService;
    }
    DataStoreMultiplePage.prototype.ngOnInit = function () {
        var _this = this;
        var dataSourceA = this.showcaseService.getMultipleDataSourceA();
        var dataSourceB = this.showcaseService.getMultipleDataSourceB();
        var shellModelA = new _travel_listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_5__["TravelListingModel"]();
        this.dataStoreA = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModelA);
        this.dataStoreA.load(dataSourceA);
        this.dataStoreA.state.subscribe(function (data) {
            _this.dataA = data;
        });
        var shellModelB = new _fashion_listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_4__["FashionListingModel"]();
        this.dataStoreB = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModelB);
        this.dataStoreB.load(dataSourceB);
        this.dataStoreB.state.subscribe(function (data) {
            _this.dataB = data;
        });
    };
    DataStoreMultiplePage.ctorParameters = function () { return [
        { type: _showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"] }
    ]; };
    DataStoreMultiplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-store-multiple',
            template: __webpack_require__(/*! raw-loader!./data-store-multiple.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.html"),
            styles: [__webpack_require__(/*! ./data-store-multiple.page.scss */ "./src/app/showcase/app-shell/data-store-multiple/data-store-multiple.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"]])
    ], DataStoreMultiplePage);
    return DataStoreMultiplePage;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1wYWdpbmF0aW9uL2RhdGEtc3RvcmUtcGFnaW5hdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLXBhZ2luYXRpb24vZGF0YS1zdG9yZS1wYWdpbmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLXBhZ2luYXRpb24vZGF0YS1zdG9yZS1wYWdpbmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.ts ***!
  \****************************************************************************************/
/*! exports provided: DataStorePaginationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorePaginationPage", function() { return DataStorePaginationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");







var DataStorePaginationPage = /** @class */ (function () {
    function DataStorePaginationPage(showcaseService) {
        this.showcaseService = showcaseService;
        this.loadMorePages = true;
        this.currentPage = 0;
        this.triggerNewPageLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.newPageTriggerObservable = this.triggerNewPageLoading.asObservable();
    }
    DataStorePaginationPage.prototype.ngOnInit = function () {
        var _this = this;
        var dataSource = this.showcaseService.getPaginationDataSource(1);
        if (!this.remoteApiDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = [
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__["ShowcaseShellUserModel"]()
            ];
            this.remoteApiDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.remoteApiDataStore.load(dataSource);
        }
        var newDataObservable = this.newPageTriggerObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (pageNumber) {
            var pageDataSource = _this.showcaseService.getPaginationDataSource(pageNumber);
            var newDataShell = [
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__["ShowcaseShellUserModel"]()
            ];
            var dataSourceWithShellObservable = _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"].AppendShell(pageDataSource, newDataShell, 400);
            return dataSourceWithShellObservable;
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.remoteApiDataStore.state, newDataObservable)
            .subscribe(function (result) {
            console.log('result', result);
            // When successfully load next page, update currentPage pointer
            if (!result.isShell && result.length > 0) {
                _this.currentPage++;
            }
            if (_this.loadMorePages) {
                _this.pagedUsers = result;
            }
            if (_this.currentPage === 4) {
                _this.loadMorePages = false;
            }
        });
    };
    DataStorePaginationPage.prototype.getNextPageUsers = function () {
        this.triggerNewPageLoading.next(this.currentPage + 1);
    };
    DataStorePaginationPage.ctorParameters = function () { return [
        { type: _showcase_service__WEBPACK_IMPORTED_MODULE_5__["ShowcaseService"] }
    ]; };
    DataStorePaginationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-store-pagination',
            template: __webpack_require__(/*! raw-loader!./data-store-pagination.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.html"),
            styles: [__webpack_require__(/*! ./data-store-pagination.page.scss */ "./src/app/showcase/app-shell/data-store-pagination/data-store-pagination.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_5__["ShowcaseService"]])
    ], DataStorePaginationPage);
    return DataStorePaginationPage;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n.stacked-items-demo {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 0px 0px 20px;\n}\n.sticky-section {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  background: #ececec;\n  padding: 20px;\n  margin: 0px 0px 60px !important;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1zdGFja2VkL2RhdGEtc3RvcmUtc3RhY2tlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLXN0YWNrZWQvZGF0YS1zdG9yZS1zdGFja2VkLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRko7QUNuQkE7RUFDRSx5QkFBQTtFQUNBLHdpQkFBQTtFQUNBLHFCQUFBO0FEc0JGO0FDbkJBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QURzQkYiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1zdGFja2VkL2RhdGEtc3RvcmUtc3RhY2tlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3RhY2tlZC1pdGVtcy1kZW1vIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMzgnJTNFJTNDcGF0aCBkPSdNMCAzOC41OWwyLjgzLTIuODMgMS40MSAxLjQxTDEuNDEgNDBIMHYtMS40MXpNMCAxLjRsMi44MyAyLjgzIDEuNDEtMS40MUwxLjQxIDBIMHYxLjQxek0zOC41OSA0MGwtMi44My0yLjgzIDEuNDEtMS40MUw0MCAzOC41OVY0MGgtMS40MXpNNDAgMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwzOC41OSAwSDQwdjEuNDF6TTIwIDE4LjZsMi44My0yLjgzIDEuNDEgMS40MUwyMS40MSAyMGwyLjgzIDIuODMtMS40MSAxLjQxTDIwIDIxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDE4LjU5IDIwbC0yLjgzLTIuODMgMS40MS0xLjQxTDIwIDE4LjU5eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIHBhZGRpbmc6IDBweCAwcHggMjBweDtcbn1cblxuLnN0aWNreS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMHB4IDBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwO1xufSIsIkBpbXBvcnQgXCIuLi9hcHAtc2hlbGwucGFnZVwiO1xuXG4uc3RhY2tlZC1pdGVtcy1kZW1vIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDQwIDQwJyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMzgnJTNFJTNDcGF0aCBkPSdNMCAzOC41OWwyLjgzLTIuODMgMS40MSAxLjQxTDEuNDEgNDBIMHYtMS40MXpNMCAxLjRsMi44MyAyLjgzIDEuNDEtMS40MUwxLjQxIDBIMHYxLjQxek0zOC41OSA0MGwtMi44My0yLjgzIDEuNDEtMS40MUw0MCAzOC41OVY0MGgtMS40MXpNNDAgMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwzOC41OSAwSDQwdjEuNDF6TTIwIDE4LjZsMi44My0yLjgzIDEuNDEgMS40MUwyMS40MSAyMGwyLjgzIDIuODMtMS40MSAxLjQxTDIwIDIxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDE4LjU5IDIwbC0yLjgzLTIuODMgMS40MS0xLjQxTDIwIDE4LjU5eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIHBhZGRpbmc6IDBweCAwcHggMjBweDtcbn1cblxuLnN0aWNreS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMHB4IDBweCA2MHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.ts ***!
  \**********************************************************************************/
/*! exports provided: DataStoreStackedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreStackedPage", function() { return DataStoreStackedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var DataStoreStackedPage = /** @class */ (function () {
    function DataStoreStackedPage(showcaseService) {
        this.showcaseService = showcaseService;
        // View model
        this.stackedUsers = [];
        this.shellUsers = [];
        // Emulate a tream of events that trigger the loading of new items
        this.triggerNewItemsLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.newItemsTriggerObservable = this.triggerNewItemsLoading.asObservable();
    }
    DataStoreStackedPage.prototype.ngOnInit = function () {
        var _this = this;
        var openDataStream = this.showcaseService.getOpenDataStream();
        if (!this.openDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = [
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"]()
            ];
            this.openDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.openDataStore.load(openDataStream);
        }
        // Each time the user triggers the loading of new items, ask the service to get those new items
        var newDataObservable = this.newItemsTriggerObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
            var newValuesObservable = _this.showcaseService.getStackedValuesDataSource();
            var newDataShell = [
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"](),
                new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"]()
            ];
            var newValuesWithShellObservable = _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"].AppendShell(newValuesObservable, newDataShell, 400);
            return newValuesWithShellObservable;
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.openDataStore.state, newDataObservable)
            .subscribe(function (data) {
            var _a;
            console.log('data', data);
            if (data.isShell) {
                var shellsAsObservables = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data).map(function (val) {
                    // Transform plain shell values into async Observables (to comply with the layout markup)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(val);
                });
                // When loading new data, override the shellUsers property
                _this.shellUsers = shellsAsObservables;
            }
            else {
                // Clear shellUsers property
                _this.shellUsers = [];
                var dataWithShell = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data).map(function (val) {
                    // Transform plain values into async Observables (to comply with the layout markup)
                    return _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"].AppendShell(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(val), new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellUserModel"](), 400);
                });
                // Concat data to existing stackedUsers property
                (_a = _this.stackedUsers).push.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](dataWithShell));
            }
        });
    };
    DataStoreStackedPage.prototype.loadStackedResults = function () {
        this.triggerNewItemsLoading.next();
    };
    DataStoreStackedPage.prototype.pushValuesToOpenStream = function () {
        this.showcaseService.pushValuesToOpenStream();
    };
    DataStoreStackedPage.ctorParameters = function () { return [
        { type: _showcase_service__WEBPACK_IMPORTED_MODULE_4__["ShowcaseService"] }
    ]; };
    DataStoreStackedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-store-stacked',
            template: __webpack_require__(/*! raw-loader!./data-store-stacked.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.html"),
            styles: [__webpack_require__(/*! ./data-store-stacked.page.scss */ "./src/app/showcase/app-shell/data-store-stacked/data-store-stacked.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_4__["ShowcaseService"]])
    ], DataStoreStackedPage);
    return DataStoreStackedPage;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n.company {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1zdWJzZXQvZGF0YS1zdG9yZS1zdWJzZXQucGFnZS5zY3NzIiwic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvZGF0YS1zdG9yZS1zdWJzZXQvZGF0YS1zdG9yZS1zdWJzZXQucGFnZS5zY3NzIiwiL1VzZXJzL2ltYWtlci9EZXNrdG9wL0lNQUtFUi9BQUFfaW1ha2VyX3N1YnNjcmlwdGlvbi9pb25Wb2ljZS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0FDQ0Y7QURDRTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBQ25CQTtFQUNFLHlCQUFBO0VBQ0Esd2lCQUFBO0VBQ0EsYUFBQTtBRHNCRiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2FwcC1zaGVsbC9kYXRhLXN0b3JlLXN1YnNldC9kYXRhLXN0b3JlLXN1YnNldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zaG93Y2FzZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIiwiLnNob3djYXNlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cbi5zaG93Y2FzZS1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgLnNob3djYXNlLXNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHggMjBweCA2MHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgcHJlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNob3djYXNlLWNvbnRlbnQgY29kZSB7XG4gIGNvbG9yOiAjRjkyNjcyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29tcGFueSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAyMHB4O1xufSIsIkBpbXBvcnQgXCIuLi9hcHAtc2hlbGwucGFnZVwiO1xuXG4uY29tcGFueSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCA0MCA0MCclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjM4JyUzRSUzQ3BhdGggZD0nTTAgMzguNTlsMi44My0yLjgzIDEuNDEgMS40MUwxLjQxIDQwSDB2LTEuNDF6TTAgMS40bDIuODMgMi44MyAxLjQxLTEuNDFMMS40MSAwSDB2MS40MXpNMzguNTkgNDBsLTIuODMtMi44MyAxLjQxLTEuNDFMNDAgMzguNTlWNDBoLTEuNDF6TTQwIDEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMzguNTkgMEg0MHYxLjQxek0yMCAxOC42bDIuODMtMi44MyAxLjQxIDEuNDFMMjEuNDEgMjBsMi44MyAyLjgzLTEuNDEgMS40MUwyMCAyMS40MWwtMi44MyAyLjgzLTEuNDEtMS40MUwxOC41OSAyMGwtMi44My0yLjgzIDEuNDEtMS40MUwyMCAxOC41OXonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.ts ***!
  \********************************************************************************/
/*! exports provided: DataStoreSubsetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreSubsetPage", function() { return DataStoreSubsetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../showcase-shell.model */ "./src/app/showcase/showcase-shell.model.ts");





var DataStoreSubsetPage = /** @class */ (function () {
    function DataStoreSubsetPage(showcaseService) {
        this.showcaseService = showcaseService;
    }
    DataStoreSubsetPage.prototype.ngOnInit = function () {
        var _this = this;
        var dataSource = this.showcaseService.getUserSubsetData(2);
        var shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__["ShowcaseCompanyModel"]();
        this.companyDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
        this.companyDataStore.load(dataSource);
        this.companyDataStore.state.subscribe(function (data) {
            _this.company = data;
        });
    };
    DataStoreSubsetPage.ctorParameters = function () { return [
        { type: _showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"] }
    ]; };
    DataStoreSubsetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-store-subset',
            template: __webpack_require__(/*! raw-loader!./data-store-subset.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.html"),
            styles: [__webpack_require__(/*! ./data-store-subset.page.scss */ "./src/app/showcase/app-shell/data-store-subset/data-store-subset.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"]])
    ], DataStoreSubsetPage);
    return DataStoreSubsetPage;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/image-shell/image-shell.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/app-shell/image-shell/image-shell.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwucGFnZS5zY3NzIiwic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2ltYWdlLXNoZWxsL2ltYWdlLXNoZWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/showcase/app-shell/image-shell/image-shell.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/app-shell/image-shell/image-shell.page.ts ***!
  \********************************************************************/
/*! exports provided: ImageShellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageShellPage", function() { return ImageShellPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageShellPage = /** @class */ (function () {
    function ImageShellPage() {
    }
    ImageShellPage.prototype.ngOnInit = function () {
    };
    ImageShellPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-shell-page',
            template: __webpack_require__(/*! raw-loader!./image-shell.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/image-shell/image-shell.page.html"),
            styles: [__webpack_require__(/*! ./image-shell.page.scss */ "./src/app/showcase/app-shell/image-shell/image-shell.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageShellPage);
    return ImageShellPage;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvc2ltcGxlLWRhdGEtYmluZGluZy9zaW1wbGUtZGF0YS1iaW5kaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL3NpbXBsZS1kYXRhLWJpbmRpbmcvc2ltcGxlLWRhdGEtYmluZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGO0FEQ0U7RUFDRSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLHNCQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNESjtBRElFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvc2ltcGxlLWRhdGEtYmluZGluZy9zaW1wbGUtZGF0YS1iaW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.ts ***!
  \************************************************************************************/
/*! exports provided: SimpleDataBindingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDataBindingPage", function() { return SimpleDataBindingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../showcase.service */ "./src/app/showcase/showcase.service.ts");





var SimpleDataBindingPage = /** @class */ (function () {
    function SimpleDataBindingPage(showcaseService) {
        this.showcaseService = showcaseService;
        // Aux properties for the Simple Fetch (HttpClient) showcase
        this.simpleFetchButtonDisabled = true;
        this.simpleFetchCountdown = 0;
    }
    SimpleDataBindingPage.prototype.ngOnInit = function () {
        this.showcaseShellSimpleFetch(10);
    };
    SimpleDataBindingPage.prototype.showcaseShellSimpleFetch = function (countdown) {
        var _this = this;
        // Assign an (empty / null) value to the shell object to restore it's 'loading' state
        this.simpleFetchData = null;
        // Prevent rage clicks on the 'Fetch more Data' button
        this.simpleFetchButtonDisabled = true;
        // Start a countdown and an interval before executing the fetch function
        this.simpleFetchCountdown = countdown;
        this.simpleFetchInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        // Start a countdown to showcase the shell elements animations for a few seconds before the data get's fetched into the shell object
        var timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(countdown * 1000);
        // When timer emits after X seconds, complete source
        this.simpleFetchInterval
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(timer$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.simpleFetchButtonDisabled = false; }))
            .subscribe({
            next: function () {
                _this.simpleFetchCountdown--;
            },
            complete: function () {
                _this.simpleFetchCountdown = 0;
                // Once the countdown ends, fetch data using the HttpClient
                _this.showcaseService.getSimpleDataSource()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1) // Force Observable to complete
                ).subscribe(function (val) {
                    console.log('Fetching shell data using the HttpClient', val);
                    _this.simpleFetchData = val;
                });
            }
        });
    };
    SimpleDataBindingPage.ctorParameters = function () { return [
        { type: _showcase_service__WEBPACK_IMPORTED_MODULE_4__["ShowcaseService"] }
    ]; };
    SimpleDataBindingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple-data-binding',
            template: __webpack_require__(/*! raw-loader!./simple-data-binding.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.html"),
            styles: [__webpack_require__(/*! ./simple-data-binding.page.scss */ "./src/app/showcase/app-shell/simple-data-binding/simple-data-binding.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_showcase_service__WEBPACK_IMPORTED_MODULE_4__["ShowcaseService"]])
    ], SimpleDataBindingPage);
    return SimpleDataBindingPage;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/text-shell/text-shell.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/showcase/app-shell/text-shell/text-shell.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background);\n}\n.showcase-content ion-item-divider {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-lightest);\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n.showcase-content .showcase-section {\n  margin: 20px 20px 60px;\n}\n.showcase-content pre {\n  font-size: 14px;\n  background: #CCC;\n  padding: 10px;\n}\n.showcase-content code {\n  color: #F92672;\n  font-weight: 500;\n}\n.loading-state-demo {\n  background-color: #ececec;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.38'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  padding: 0px 0px 20px;\n}\n.sticky-section {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  background: #ececec;\n  padding: 20px;\n  margin: 0px 0px 60px !important;\n  z-index: 10;\n}\n.sample-text-max-width > app-text-shell {\n  max-width: 50%;\n}\n.sample-text-max-width > app-text-shell.text-loaded {\n  max-width: unset;\n}\n.sample-text-min-width > app-text-shell {\n  min-width: 80px;\n}\n.sample-text-min-width > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvdGV4dC1zaGVsbC90ZXh0LXNoZWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL3RleHQtc2hlbGwvdGV4dC1zaGVsbC5wYWdlLnNjc3MiLCIvVXNlcnMvaW1ha2VyL0Rlc2t0b3AvSU1BS0VSL0FBQV9pbWFrZXJfc3Vic2NyaXB0aW9uL2lvblZvaWNlL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRjtBRENFO0VBQ0Usd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxzQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FDbkJBO0VBQ0UseUJBQUE7RUFDQSx3aUJBQUE7RUFDQSxxQkFBQTtBRHNCRjtBQ25CQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FEc0JGO0FDbkJBO0VBQ0UsY0FBQTtBRHNCRjtBQ3BCRTtFQUNFLGdCQUFBO0FEc0JKO0FDbEJBO0VBQ0UsZUFBQTtBRHFCRjtBQ25CRTtFQUNFLGNBQUE7QURxQkoiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvdGV4dC1zaGVsbC90ZXh0LXNoZWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBjb2RlIHtcbiAgICBjb2xvcjogI0Y5MjY3MjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG4iLCIuc2hvd2Nhc2UtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuLnNob3djYXNlLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCAuc2hvd2Nhc2Utc2VjdGlvbiB7XG4gIG1hcmdpbjogMjBweCAyMHB4IDYwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBwcmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2hvd2Nhc2UtY29udGVudCBjb2RlIHtcbiAgY29sb3I6ICNGOTI2NzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sb2FkaW5nLXN0YXRlLWRlbW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMHB4IDBweCAyMHB4O1xufVxuXG4uc3RpY2t5LXNlY3Rpb24ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDYwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5zYW1wbGUtdGV4dC1tYXgtd2lkdGggPiBhcHAtdGV4dC1zaGVsbCB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLnNhbXBsZS10ZXh0LW1heC13aWR0aCA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLnNhbXBsZS10ZXh0LW1pbi13aWR0aCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xufVxuLnNhbXBsZS10ZXh0LW1pbi13aWR0aCA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59IiwiQGltcG9ydCBcIi4uL2FwcC1zaGVsbC5wYWdlXCI7XG5cbi5sb2FkaW5nLXN0YXRlLWRlbW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4zOCclM0UlM0NwYXRoIGQ9J00wIDM4LjU5bDIuODMtMi44MyAxLjQxIDEuNDFMMS40MSA0MEgwdi0xLjQxek0wIDEuNGwyLjgzIDIuODMgMS40MS0xLjQxTDEuNDEgMEgwdjEuNDF6TTM4LjU5IDQwbC0yLjgzLTIuODMgMS40MS0xLjQxTDQwIDM4LjU5VjQwaC0xLjQxek00MCAxLjQxbC0yLjgzIDIuODMtMS40MS0xLjQxTDM4LjU5IDBINDB2MS40MXpNMjAgMTguNmwyLjgzLTIuODMgMS40MSAxLjQxTDIxLjQxIDIwbDIuODMgMi44My0xLjQxIDEuNDFMMjAgMjEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMMTguNTkgMjBsLTIuODMtMi44MyAxLjQxLTEuNDFMMjAgMTguNTl6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgcGFkZGluZzogMHB4IDBweCAyMHB4O1xufVxuXG4uc3RpY2t5LXNlY3Rpb24ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDYwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5zYW1wbGUtdGV4dC1tYXgtd2lkdGggPiBhcHAtdGV4dC1zaGVsbCB7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLnNhbXBsZS10ZXh0LW1pbi13aWR0aCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/showcase/app-shell/text-shell/text-shell.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/app-shell/text-shell/text-shell.page.ts ***!
  \******************************************************************/
/*! exports provided: TextShellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextShellPage", function() { return TextShellPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TextShellPage = /** @class */ (function () {
    function TextShellPage() {
        this.sampleTextShellData = '';
    }
    TextShellPage.prototype.ngOnInit = function () {
    };
    TextShellPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-shell-page',
            template: __webpack_require__(/*! raw-loader!./text-shell.page.html */ "./node_modules/raw-loader/index.js!./src/app/showcase/app-shell/text-shell/text-shell.page.html"),
            styles: [__webpack_require__(/*! ./text-shell.page.scss */ "./src/app/showcase/app-shell/text-shell/text-shell.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextShellPage);
    return TextShellPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-shell-app-shell-module-es5.js.map