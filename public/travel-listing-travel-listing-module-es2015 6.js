(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-listing-travel-listing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/travel/listing/travel-listing.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/travel/listing/travel-listing.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Travel Listing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"listing?.items\">\n    <div class=\"listing-item\" *ngFor=\"let item of listing.items\">\n      <ion-row class=\"image-row\">\n        <ion-col size=\"12\">\n          <app-image-shell [mode]=\"'cover'\" class=\"add-overlay item-image\" [src]=\"item.image\" [routerLink]=\"['/app/categories/travel/', item.slug]\">\n            <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\n              <div class=\"content-inside-item-image\">\n                <div class=\"item-icon\">\n                  <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                    <app-image-shell [src]=\"item.icon\" class=\"icon-image\"></app-image-shell>\n                  </app-aspect-ratio>\n                </div>\n                <div class=\"item-cta\">\n                  <span>Explore</span>\n                  <ion-icon class=\"cta-icon\" name=\"arrow-round-forward\"></ion-icon>\n                </div>\n              </div>\n            </app-aspect-ratio>\n          </app-image-shell>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"info-row\">\n        <ion-col class=\"main-info-col\">\n          <h3 class=\"item-name\">\n            <a class=\"name-anchor\" [routerLink]=\"['/app/categories/travel/', item.slug]\">\n              <app-text-shell animation=\"bouncing\" [data]=\"(item?.name && item?.category) ? (item.name + ' - ' + item.category) : (item.name)\"></app-text-shell>\n            </a>\n          </h3>\n          <p class=\"item-description\">\n            <app-text-shell animation=\"bouncing\" [data]=\"item.description\" lines=\"3\"></app-text-shell>\n          </p>\n          <p class=\"item-address\">\n            <app-text-shell animation=\"bouncing\" [data]=\"item.address\"></app-text-shell>\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"stats-row\">\n        <ion-col size=\"2\" class=\"item-rating\">\n          <span class=\"rating-value\">\n            <app-text-shell [data]=\"item.rating\"></app-text-shell>\n          </span>\n          <ion-icon class=\"stats-icon\" src=\"./assets/sample-icons/travel/star.svg\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"2\" class=\"item-reviews\">\n          <span class=\"reviews-count\">\n            <app-text-shell [data]=\"item.reviewsCount\"></app-text-shell>\n          </span>\n          <ion-icon class=\"stats-icon\" src=\"./assets/sample-icons/travel/comments.svg\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/travel/listing/styles/travel-listing.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/travel/listing/styles/travel-listing.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #00AFFF;\n}\n\n.listing-item {\n  padding: 0px 0px var(--page-margin);\n  background-color: var(--page-background);\n  border-bottom: calc(var(--page-margin) / 2) solid var(--page-color);\n}\n\n.listing-item .image-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.listing-item .image-row .item-image {\n  cursor: pointer;\n}\n\n.listing-item .image-row .item-image:focus {\n  outline: none;\n}\n\n.listing-item .image-row .content-inside-item-image {\n  padding: 0px 12%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.listing-item .image-row .content-inside-item-image .item-icon {\n  width: 54px;\n  align-self: center;\n  margin-bottom: 24px;\n}\n\n.listing-item .image-row .content-inside-item-image .item-cta {\n  margin: 0px auto;\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin));\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n  color: var(--ion-color-light);\n  display: flex;\n  align-items: center;\n  background-color: var(--page-color);\n  border-radius: var(--app-fair-radius);\n}\n\n.listing-item .image-row .content-inside-item-image .item-cta .cta-icon {\n  font-size: 26px;\n  margin-left: calc(var(--page-margin) / 2);\n}\n\n.listing-item .info-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.listing-item .info-row .main-info-col {\n  padding-right: calc(var(--page-margin) / 2);\n}\n\n.listing-item .info-row .item-name {\n  margin: 0px 0px var(--page-margin);\n  text-transform: capitalize;\n  font-size: 16px;\n}\n\n.listing-item .info-row .item-name .name-anchor {\n  color: var(--ion-color-dark);\n  display: block;\n  text-decoration: none;\n}\n\n.listing-item .info-row .item-description {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-shade);\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.listing-item .info-row .item-address {\n  margin: 0px;\n  color: var(--ion-color-dark-tint);\n  font-size: 12px;\n}\n\n.listing-item .stats-row {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin);\n  justify-content: flex-end;\n}\n\n.listing-item .stats-row .stats-icon {\n  font-size: 24px;\n}\n\n.listing-item .stats-row .item-rating {\n  display: inline-flex;\n  text-align: center;\n  justify-content: flex-end;\n  margin-right: 10px;\n}\n\n.listing-item .stats-row .item-rating .rating-value {\n  font-size: 16px;\n  margin-right: 5px;\n  margin: auto;\n}\n\n.listing-item .stats-row .item-reviews {\n  display: inline-flex;\n  text-align: center;\n  justify-content: flex-end;\n}\n\n.listing-item .stats-row .item-reviews .reviews-count {\n  font-size: 16px;\n  margin-right: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC90cmF2ZWwvbGlzdGluZy9zdHlsZXMvdHJhdmVsLWxpc3RpbmcucGFnZS5zY3NzIiwic3JjL2FwcC90cmF2ZWwvbGlzdGluZy9zdHlsZXMvdHJhdmVsLWxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLHFCQUFBO0FDRkY7O0FETUE7RUFDRSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUVBQUE7QUNIRjs7QURLRTtFQUNFLDhCQUFBO0FDSEo7O0FES0k7RUFDRSxlQUFBO0FDSE47O0FES007RUFDRSxhQUFBO0FDSFI7O0FET0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ0xOOztBRE9NO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMUjs7QURRTTtFQUNFLGdCQUFBO0VBQ0EsOERBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0FDTlI7O0FEUVE7RUFDRSxlQUFBO0VBQ0EseUNBQUE7QUNOVjs7QURZRTtFQUNFLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSw0Q0FBQTtBQ1hKOztBRGFJO0VBQ0UsMkNBQUE7QUNYTjs7QURjSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDWk47O0FEY007RUFDRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ1pSOztBRGdCSTtFQUNFLDRDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNkTjs7QURpQkk7RUFDRSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDZk47O0FEbUJFO0VBQ0UsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHlCQUFBO0FDbEJKOztBRG9CSTtFQUNFLGVBQUE7QUNsQk47O0FEcUJJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNuQk47O0FEcUJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ25CUjs7QUR1Qkk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNyQk47O0FEdUJNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ3JCUiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbC9saXN0aW5nL3N0eWxlcy90cmF2ZWwtbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmxpc3RpbmctaXRlbSB7XG4gIHBhZGRpbmc6IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHNvbGlkIHZhcigtLXBhZ2UtY29sb3IpO1xuXG4gIC5pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIC5pdGVtLWltYWdlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbnQtaW5zaWRlLWl0ZW0taW1hZ2Uge1xuICAgICAgcGFkZGluZzogMHB4IDEyJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC5pdGVtLWljb24ge1xuICAgICAgICB3aWR0aDogNTRweDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1jdGEge1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcblxuICAgICAgICAuY3RhLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pbmZvLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgLm1haW4taW5mby1jb2wge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG5cbiAgICAuaXRlbS1uYW1lIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICAgLm5hbWUtYW5jaG9yIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIH1cblxuICAgIC5pdGVtLWFkZHJlc3Mge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgLnN0YXRzLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgLnN0YXRzLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgIC5pdGVtLXJhdGluZyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAgIC5yYXRpbmctdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tcmV2aWV3cyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgIC5yZXZpZXdzLWNvdW50IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XG59XG5cbi5saXN0aW5nLWl0ZW0ge1xuICBwYWRkaW5nOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBzb2xpZCB2YXIoLS1wYWdlLWNvbG9yKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyAuaXRlbS1pbWFnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saXN0aW5nLWl0ZW0gLmltYWdlLXJvdyAuaXRlbS1pbWFnZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubGlzdGluZy1pdGVtIC5pbWFnZS1yb3cgLmNvbnRlbnQtaW5zaWRlLWl0ZW0taW1hZ2Uge1xuICBwYWRkaW5nOiAwcHggMTIlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmxpc3RpbmctaXRlbSAuaW1hZ2Utcm93IC5jb250ZW50LWluc2lkZS1pdGVtLWltYWdlIC5pdGVtLWljb24ge1xuICB3aWR0aDogNTRweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmxpc3RpbmctaXRlbSAuaW1hZ2Utcm93IC5jb250ZW50LWluc2lkZS1pdGVtLWltYWdlIC5pdGVtLWN0YSB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufVxuLmxpc3RpbmctaXRlbSAuaW1hZ2Utcm93IC5jb250ZW50LWluc2lkZS1pdGVtLWltYWdlIC5pdGVtLWN0YSAuY3RhLWljb24ge1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAubWFpbi1pbmZvLWNvbCB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuaXRlbS1uYW1lIHtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5pdGVtLW5hbWUgLm5hbWUtYW5jaG9yIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5pdGVtLWFkZHJlc3Mge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubGlzdGluZy1pdGVtIC5zdGF0cy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubGlzdGluZy1pdGVtIC5zdGF0cy1yb3cgLnN0YXRzLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ubGlzdGluZy1pdGVtIC5zdGF0cy1yb3cgLml0ZW0tcmF0aW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmxpc3RpbmctaXRlbSAuc3RhdHMtcm93IC5pdGVtLXJhdGluZyAucmF0aW5nLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmxpc3RpbmctaXRlbSAuc3RhdHMtcm93IC5pdGVtLXJldmlld3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmxpc3RpbmctaXRlbSAuc3RhdHMtcm93IC5pdGVtLXJldmlld3MgLnJldmlld3MtY291bnQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/travel/listing/styles/travel-listing.shell.scss":
/*!*****************************************************************!*\
  !*** ./src/app/travel/listing/styles/travel-listing.shell.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #00AFFF;\n  --shell-color-rgb: 0,175,255;\n}\n\napp-image-shell.item-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .60);\n}\n\napp-image-shell.icon-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .15);\n}\n\n.item-name app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 70%;\n}\n\n.item-name app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-description > app-text-shell {\n  --text-shell-line-height: 14px;\n}\n\n.item-address > app-text-shell {\n  --text-shell-line-height: 12px;\n  max-width: 60%;\n}\n\n.item-address > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.rating-value > app-text-shell {\n  --text-shell-line-height: 16px;\n  min-width: 30px;\n}\n\n.reviews-count > app-text-shell {\n  --text-shell-line-height: 16px;\n  min-width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFrZXIvRGVza3RvcC9JTUFLRVIvQUFBX2ltYWtlcl9zdWJzY3JpcHRpb24vaW9uVm9pY2Uvc3JjL2FwcC90cmF2ZWwvbGlzdGluZy9zdHlsZXMvdHJhdmVsLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNyYy9hcHAvdHJhdmVsL2xpc3Rpbmcvc3R5bGVzL3RyYXZlbC1saXN0aW5nLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FEV0E7RUFDRSxtRUFBQTtFQUNBLHNFQUFBO0FDUkY7O0FEV0E7RUFDRSxtRUFBQTtBQ1JGOztBRFdBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FDUkY7O0FEVUU7RUFDRSxnQkFBQTtBQ1JKOztBRFlBO0VBQ0UsOEJBQUE7QUNURjs7QURZQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ1RGOztBRFdFO0VBQ0UsZ0JBQUE7QUNUSjs7QURhQTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtBQ1ZGOztBRGFBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwvbGlzdGluZy9zdHlsZXMvdHJhdmVsLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjMDBBRkZGO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMCwxNzUsMjU1O1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNjApO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaWNvbi1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG59XG5cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNzAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLml0ZW0tZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXgtd2lkdGg6IDYwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi5yYXRpbmctdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuXG4ucmV2aWV3cy1jb3VudCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG4iLCI6aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICMwMEFGRkY7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAwLDE3NSwyNTU7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pdGVtLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjYwKTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmljb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNjAlO1xufVxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG5cbi5yZXZpZXdzLWNvdW50ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/travel/listing/travel-listing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.module.ts ***!
  \*********************************************************/
/*! exports provided: TravelListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListingPageModule", function() { return TravelListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _travel_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./travel-listing.page */ "./src/app/travel/listing/travel-listing.page.ts");
/* harmony import */ var _travel_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./travel-listing.resolver */ "./src/app/travel/listing/travel-listing.resolver.ts");
/* harmony import */ var _travel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../travel.service */ "./src/app/travel/travel.service.ts");











const routes = [
    {
        path: '',
        component: _travel_listing_page__WEBPACK_IMPORTED_MODULE_8__["TravelListingPage"],
        resolve: {
            data: _travel_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["TravelListingResolver"]
        }
    }
];
let TravelListingPageModule = class TravelListingPageModule {
};
TravelListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        declarations: [_travel_listing_page__WEBPACK_IMPORTED_MODULE_8__["TravelListingPage"]],
        providers: [
            _travel_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["TravelListingResolver"],
            _travel_service__WEBPACK_IMPORTED_MODULE_10__["TravelService"]
        ]
    })
], TravelListingPageModule);



/***/ }),

/***/ "./src/app/travel/listing/travel-listing.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.page.ts ***!
  \*******************************************************/
/*! exports provided: TravelListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListingPage", function() { return TravelListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TravelListingPage = class TravelListingPage {
    constructor(route) {
        this.route = route;
    }
    get isShell() {
        return (this.listing && this.listing.isShell) ? true : false;
    }
    ngOnInit() {
        this.route.data.subscribe((resolvedRouteData) => {
            const listingDataStore = resolvedRouteData['data'];
            listingDataStore.state.subscribe((state) => {
                this.listing = state;
            }, (error) => { });
        }, (error) => { });
    }
};
TravelListingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TravelListingPage.prototype, "isShell", null);
TravelListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travel-listing',
        template: __webpack_require__(/*! raw-loader!./travel-listing.page.html */ "./node_modules/raw-loader/index.js!./src/app/travel/listing/travel-listing.page.html"),
        styles: [__webpack_require__(/*! ./styles/travel-listing.page.scss */ "./src/app/travel/listing/styles/travel-listing.page.scss"), __webpack_require__(/*! ./styles/travel-listing.shell.scss */ "./src/app/travel/listing/styles/travel-listing.shell.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], TravelListingPage);



/***/ }),

/***/ "./src/app/travel/listing/travel-listing.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.resolver.ts ***!
  \***********************************************************/
/*! exports provided: TravelListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListingResolver", function() { return TravelListingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _travel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../travel.service */ "./src/app/travel/travel.service.ts");



let TravelListingResolver = class TravelListingResolver {
    constructor(travelService) {
        this.travelService = travelService;
    }
    resolve() {
        const dataSource = this.travelService.getListingDataSource();
        const dataStore = this.travelService.getListingStore(dataSource);
        return dataStore;
    }
};
TravelListingResolver.ctorParameters = () => [
    { type: _travel_service__WEBPACK_IMPORTED_MODULE_2__["TravelService"] }
];
TravelListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_travel_service__WEBPACK_IMPORTED_MODULE_2__["TravelService"]])
], TravelListingResolver);



/***/ })

}]);
//# sourceMappingURL=travel-listing-travel-listing-module-es2015.js.map