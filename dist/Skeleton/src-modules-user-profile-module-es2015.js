(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-modules-user-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/user-profile/user-profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/user-profile/user-profile.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <h2>Edit Profile</h2>\r\n  <div>\r\n    <label for=\"email\" class=\"input-label\">Email address\r\n      <input type=\"text\" placeholder=\"Email\" name=\"email\">\r\n    </label>\r\n  </div>\r\n\r\n  <div class=\"flex-position\">\r\n    <div class=\"data\">\r\n      <label for=\"firstName\" class=\"input-label\">First name\r\n        <input type=\"text\" placeholder=\"Company\" name=\"firstName\">\r\n      </label>\r\n    </div>\r\n    <div class=\"data\">\r\n      <label for=\"secondName\" class=\"input-label\">Last name\r\n        <input type=\"text\" placeholder=\"Last name\" name=\"secondName\">\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <label for=\"address\" class=\"input-label\">Address\r\n    <input type=\"text\" placeholder=\"Home address\" name=\"address\">\r\n  </label>\r\n\r\n  <div class=\"flex-position\">\r\n    <div class=\"address\">\r\n      <label for=\"city\" class=\"input-label\">City\r\n        <input type=\"text\" placeholder=\"City\" name=\"city\">\r\n      </label>\r\n    </div>\r\n    <div class=\"address\">\r\n      <label for=\"country\" class=\"input-label\">Country\r\n        <input type=\"text\" placeholder=\"Country\" name=\"country\">\r\n      </label>\r\n    </div>\r\n    <div class=\"address\">\r\n      <label for=\"zipCode\" class=\"input-label\">Postal code\r\n        <input type=\"text\" placeholder=\"ZIP code\" name=\"zipCode\">\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <label for=\"description\" class=\"input-label\">About me\r\n    <input type=\"text\" placeholder=\"Here can be your description\" name=\"description\">\r\n  </label>\r\n  <div class=\"update-button\">\r\n    <button class=\"bold-text\">Update</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/modules/user-profile.module.ts":
/*!********************************************!*\
  !*** ./src/modules/user-profile.module.ts ***!
  \********************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/user-profile/user-profile.component */ "./src/pages/user-profile/user-profile.component.ts");





const routes = [
    {
        path: '',
        component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"],
    },
];
let UserProfileModule = class UserProfileModule {
};
UserProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
    })
], UserProfileModule);



/***/ }),

/***/ "./src/pages/user-profile/user-profile.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/user-profile/user-profile.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  background: white;\n  margin: 10px;\n  padding: 20px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.main {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\n.input-label {\n  text-transform: uppercase;\n  font-family: sans-serif;\n  font-size: 10px;\n  display: block;\n  margin-bottom: 25px;\n}\n\ninput[type=text] {\n  width: 100%;\n  font-size: 16px;\n  border: lightgray 1px solid;\n  border-radius: 5px;\n  margin-right: 1%;\n  padding: 5px;\n}\n\n.flex-position {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.data {\n  width: calc(99% / 2);\n}\n\n.address {\n  width: calc(97% / 3);\n}\n\n.bold-text {\n  font-weight: 800;\n}\n\n.enter-form {\n  width: 30%;\n  height: 30px;\n  border: lightgray 1px solid;\n  border-radius: 5px;\n}\n\n.update-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\nbutton {\n  background-color: #5ec9e3;\n  color: white;\n  height: 40px;\n  border: lightgray 1px solid;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy91c2VyLXByb2ZpbGUvRDpcXEFuZ3VsYXJQcm9qZWN0L3NyY1xccGFnZXNcXHVzZXItcHJvZmlsZVxcdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL3VzZXItcHJvZmlsZS9EOlxcQW5ndWxhclByb2plY3Qvc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9wYWdlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJDRE07RURFTixZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUVERjs7QUZJQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FFREY7O0FGR0E7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRUFGOztBRkVBO0VBQ0UsV0FBQTtFQUNELGVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FFQ0Q7O0FGQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FFRUY7O0FGQUE7RUFDRSxvQkFBQTtBRUdGOztBRkRBO0VBQ0Usb0JBQUE7QUVJRjs7QUZGQTtFQUNFLGdCQUFBO0FFS0Y7O0FGSEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUVNRjs7QUZKQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUVPRjs7QUZMQTtFQUNFLHlCQUFBO0VBQ0EsWUNwRE07RURxRE4sWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUVRRiIsImZpbGUiOiJzcmMvcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5jb250ZW50e1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm1haW57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uaW5wdXQtbGFiZWx7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICB3aWR0aDogMTAwJTtcclxuIGZvbnQtc2l6ZTogMTZweDtcclxuIGJvcmRlcjogJGxpZ2h0Z3JheSAxcHggc29saWQ7XHJcbiBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gcGFkZGluZzogNXB4O1xyXG59XHJcbi5mbGV4LXBvc2l0aW9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5kYXRhe1xyXG4gIHdpZHRoOiBjYWxjKDk5JSAvIDIpO1xyXG59XHJcbi5hZGRyZXNze1xyXG4gIHdpZHRoOiBjYWxjKDk3JSAvIDMpO1xyXG59XHJcbi5ib2xkLXRleHR7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uZW50ZXItZm9ybXtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXI6ICRsaWdodGdyYXkgMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4udXBkYXRlLWJ1dHRvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzVlYzllMztcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6ICRsaWdodGdyYXkgMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iLCIvLyBjb2xvcnNcclxuJGxpZ2h0Z3JheTogbGlnaHRncmF5O1xyXG4kd2hpdGU6IHdoaXRlO1xyXG5cclxuJHBhZ2UtYmFja2dyb3VuZDogI0Y3RjdGODtcclxuJHNpZGViYXItYmFja2dyb3VuZDogIzljNjhkOTtcclxuIiwiLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmlucHV0LWxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IGxpZ2h0Z3JheSAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZmxleC1wb3NpdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRhdGEge1xuICB3aWR0aDogY2FsYyg5OSUgLyAyKTtcbn1cblxuLmFkZHJlc3Mge1xuICB3aWR0aDogY2FsYyg5NyUgLyAzKTtcbn1cblxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5lbnRlci1mb3JtIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IGxpZ2h0Z3JheSAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnVwZGF0ZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVjOWUzO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiBsaWdodGdyYXkgMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/pages/user-profile/user-profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/pages/user-profile/user-profile.component.ts ***!
  \**********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserProfileComponent = class UserProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/pages/user-profile/user-profile.component.html"),
        styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/pages/user-profile/user-profile.component.scss")]
    })
], UserProfileComponent);



/***/ })

}]);
//# sourceMappingURL=src-modules-user-profile-module-es2015.js.map