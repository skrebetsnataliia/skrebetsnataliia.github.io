(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/components/task/task.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/components/task/task.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"task\">\r\n  <h3>{{taskName}}</h3>\r\n  <p>{{description}}</p>\r\n  <p class=\"id\">{{id}}</p>\r\n  <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\">Delete</button>\r\n  <span>\r\n  <select #val>\r\n      <option disabled value='0'>Share(choose user)</option>\r\n      <option *ngFor=\"let item of users\" value={{item.id}}>\r\n        <p>{{item.email}}</p>\r\n        <p class=\"id\">{{item.id}}</p>\r\n      </option>\r\n    </select>\r\n    <button (click)=\"sendTask(val.value)\" data-toggle=\"modal\" data-target=\"#myModal_2\">Share</button>\r\n    <div *ngIf=\"notShareTask\" class=\"text-danger\">Please choose user</div>\r\n    <div *ngIf=\"shareTask\" class=\"text-success\">Task was sent</div>\r\n   </span>\r\n  <button  class=\"btn btn-secondary\" (click)=\"edit()\">Edit</button>\r\n</div>\r\n<div class=\"task\" *ngIf=\"editTask\">\r\n    <form [formGroup]=\"myGroup\" (ngSubmit)=\"onSubmit()\">\r\n        <input formControlName='name'[(ngModel)]=\"taskName\" type=\"text\" class=\"form-control m-1\" placeholder=\"Name\">\r\n        <ng-container *ngIf=\"myGroup.controls.name.touched\">\r\n          <div class=\"text-danger text-uppercase bg-light\"\r\n          *ngIf=\"myGroup.controls.name.errors?.required\">\r\n            Please enter name\r\n          </div>\r\n        </ng-container>\r\n        <textarea formControlName='description' type=\"text\" [(ngModel)]=\"description\" class=\"form-control m-1\" placeholder=\"Description\"></textarea>\r\n        <ng-container *ngIf=\"myGroup.controls.description.touched\">\r\n          <div class=\"text-danger text-uppercase bg-light\"\r\n          *ngIf=\"myGroup.controls.description.errors?.required\">\r\n            Please enter description\r\n          </div>\r\n        </ng-container>\r\n        <button class=\"btn m-1 btn-secondary\" (click)=\"close()\">Cancel</button>\r\n        <button  [disabled]=\"myGroup.invalid\" class=\"btn m-1 btn-primary\">Save</button>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"modal\" id=\"myModal\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n          Do you want to delete this task?\r\n        </div>\r\n          <button class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"delete()\">Delete</button>\r\n          <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/add-task/add-task.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/add-task/add-task.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\r\n<form [formGroup]=\"myGroup\" (ngSubmit)=\"onSubmit()\">\r\n  <input formControlName='name'[(ngModel)]=\"taskName\" type=\"text\" class=\"form-control m-1\" placeholder=\"Name\">\r\n  <ng-container *ngIf=\"myGroup.controls.name.touched\">\r\n    <div class=\"text-danger text-uppercase bg-light\"\r\n    *ngIf=\"myGroup.controls.name.errors?.required\">\r\n      Please enter name\r\n    </div>\r\n  </ng-container>\r\n  <textarea formControlName='description' type=\"text\" [(ngModel)]=\"description\" class=\"form-control m-1\" placeholder=\"Description\"></textarea>\r\n  <ng-container *ngIf=\"myGroup.controls.description.touched\">\r\n    <div class=\"text-danger text-uppercase bg-light\"\r\n    *ngIf=\"myGroup.controls.description.errors?.required\">\r\n      Please enter description\r\n    </div>\r\n  </ng-container>\r\n  <button  [disabled]=\"myGroup.invalid\" class=\"btn btn-block m-1 btn-primary\">Create</button>\r\n</form>\r\n<a routerLink=\"/mytasks\"><button class=\" btn btn-dark btn-block\">Cancel/Home page</button></a>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/all-task/all-task.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/all-task/all-task.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<a routerLink=\"/mytasks\" class=\"bg-info\">Home page</a>\r\n\r\n<div *ngFor=\"let item of tasks\">\r\n  <h4>{{item.name}}</h4>\r\n  <p>{{item.description}}</p>\r\n  <p class=\"bg-warning\">{{item.author || 'My task'}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/homepage/homepage.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/homepage/homepage.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Welcome to your Task!</p>\r\n<div class=\"link\">\r\n  <a routerLink=\"/addtask\">Create task</a>\r\n  <a routerLink=\"\" (click)=\"logout()\">Logout</a>\r\n  <a routerLink=\"/alltask\">All task</a>\r\n</div>\r\n<div *ngFor=\"let item of tasks\">\r\n  <app-task [taskName]=\"item.name\" [description]=\"item.description\" [id]=\"item.id\"></app-task>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/login/login.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/login/login.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-login\">\r\n  <h4>LOGIN</h4>\r\n  <div *ngIf='showMessage' class=\"text-danger text-uppercase bg-light\">Email or password is wrong</div>\r\n  <form [formGroup]=\"myGroup\" (ngSubmit)=\"onSubmit()\">\r\n      <input formControlName='email' type=\"email\" class=\"form-control m-1\" placeholder=\"Enter your email\">\r\n      <ng-container *ngIf=\"myGroup.controls.email.touched\">\r\n        <div class=\"text-danger text-uppercase bg-light\"\r\n        *ngIf=\"myGroup.controls.email.errors?.required\">\r\n          Email is required\r\n        </div>\r\n        <div class=\"text-danger text-uppercase bg-light\" *ngIf=\"myGroup.controls.email.errors?.email\">\r\n          Email is invalid\r\n        </div>\r\n      </ng-container>\r\n      <input formControlName='password' type= \"{{show ? 'text' : 'password'}}\" class=\"form-control m-1\" placeholder=\"password\">\r\n      <ng-container *ngIf=\"myGroup.controls.password.touched\">\r\n        <div class=\"text-danger text-uppercase bg-light\"\r\n        *ngIf=\"myGroup.controls.password.errors?.required\">\r\n          Password is required\r\n        </div>\r\n      </ng-container>\r\n      <i (click)='showPassword()' class=\"fas fa-eye\">Show/Hidden password</i>\r\n      <button  [disabled]=\"myGroup.invalid\" class=\"btn btn-block m-1 btn-primary\">LOGIN</button>\r\n  </form>\r\n  <button class=\"btn btn-block m-1 btn-secondary\"  routerLink=\"/register\">REGISTER</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/register/register.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/register/register.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"register\">\r\n      <div class=\"form-register\">\r\n          <h4>REGISTER</h4>\r\n          <form [formGroup]=\"myGroup\" (ngSubmit)=\"onSubmit()\">\r\n              <input formControlName='firstName' type=\"text\" class=\"form-control m-1\" placeholder=\"First Name\">\r\n              <ng-container *ngIf=\"myGroup.controls.firstName.touched\">\r\n                <div class=\"text-danger text-uppercase bg-light\"\r\n                *ngIf=\"myGroup.controls.firstName.errors?.required\">\r\n                First Name is required\r\n                </div>\r\n              </ng-container>\r\n              <input type=\"text\" formControlName='lastName' class=\"form-control m-1\" placeholder=\"Last Name\">\r\n              <ng-container *ngIf=\"myGroup.controls.lastName.touched\">\r\n                <div class=\"text-danger text-uppercase bg-light\"\r\n                *ngIf=\"myGroup.controls.lastName.errors?.required\">\r\n                Last Name is required\r\n                </div>\r\n              </ng-container>\r\n              <input type=\"email\" formControlName='email' class=\"form-control m-1\" placeholder=\"email\">\r\n              <ng-container *ngIf=\"myGroup.controls.email.touched\">\r\n                <div class=\"text-danger text-uppercase bg-light\"\r\n                *ngIf=\"myGroup.controls.email.errors?.required\">\r\n                  Email is required\r\n                </div>\r\n                <div class=\"text-danger text-uppercase bg-light\" *ngIf=\"myGroup.controls.email.errors?.email\">\r\n                  Email is invalid\r\n                </div>\r\n                <div class=\"text-danger text-uppercase bg-light\" *ngIf=\"myGroup.controls.email.errors?.controlEmail\">\r\n                  Email is already exist\r\n                </div>\r\n              </ng-container>\r\n              <input type= \"{{show ? 'text' : 'password'}}\" formControlName='password' class=\"form-control m-1\" placeholder=\"password\">\r\n              <div>min length 6</div>\r\n              <ng-container *ngIf=\"myGroup.controls.password.touched\">\r\n                <div class=\"text-danger text-uppercase bg-light\"\r\n                *ngIf=\"myGroup.controls.password.errors?.required\">\r\n                Password is required\r\n                </div>\r\n                <div class=\"text-danger text-uppercase bg-light\" *ngIf=\"myGroup.controls.password.errors?.minLength\">\r\n                  Password is short\r\n                </div>\r\n              </ng-container>\r\n              <i (click)='showPassword()' class=\"fas fa-eye\">Show/Hidden password</i>\r\n              <button [disabled]=\"myGroup.invalid\" class=\"btn btn-block m-1 btn-success\">REGISTER</button>\r\n          </form>\r\n          <button class=\"btn btn-block m-1 btn-secondary\"  routerLink=\"/\">LOGIN</button>\r\n        </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/login/login.component */ "./src/pages/login/login.component.ts");
/* harmony import */ var src_pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/register/register.component */ "./src/pages/register/register.component.ts");
/* harmony import */ var src_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/homepage/homepage.component */ "./src/pages/homepage/homepage.component.ts");
/* harmony import */ var src_pages_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/pages/add-task/add-task.component */ "./src/pages/add-task/add-task.component.ts");
/* harmony import */ var src_pages_all_task_all_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pages/all-task/all-task.component */ "./src/pages/all-task/all-task.component.ts");








const routes = [{
        path: '',
        component: src_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'register',
        component: src_pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
    },
    {
        path: 'mytasks',
        component: src_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"],
    },
    {
        path: 'addtask',
        component: src_pages_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponent"],
    },
    {
        path: 'alltask',
        component: src_pages_all_task_all_task_component__WEBPACK_IMPORTED_MODULE_7__["AllTaskComponent"],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'TaskManager';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
/* harmony import */ var src_modules_homepage_homepage_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/modules/homepage/homepage.module */ "./src/modules/homepage/homepage.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var src_modules_add_task_add_task_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/modules/add-task/add-task.module */ "./src/modules/add-task/add-task.module.ts");
/* harmony import */ var src_modules_all_task_all_task_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/modules/all-task/all-task.module */ "./src/modules/all-task/all-task.module.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            src_modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
            src_modules_homepage_homepage_module__WEBPACK_IMPORTED_MODULE_7__["HomepageModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            src_modules_add_task_add_task_module__WEBPACK_IMPORTED_MODULE_10__["AddTaskModule"],
            src_modules_all_task_all_task_module__WEBPACK_IMPORTED_MODULE_11__["AllTaskModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/components/task/task.component.scss":
/*!*************************************************!*\
  !*** ./src/components/task/task.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task {\n  background: white;\n  border: 1px solid white;\n  border-radius: 20px;\n  max-width: 70%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  margin-bottom: 15px;\n  padding: 10px;\n  font-family: \"Cosmic Sans MS\", cursive, sans-serif;\n  word-wrap: break-word;\n  margin-left: 13%;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton {\n  margin: 5px;\n}\n\n.id {\n  display: none;\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3Rhc2svRDpcXE1hbmFnZXJUYXNrXFxUYXNrTWFuYWdlci9zcmNcXGNvbXBvbmVudHNcXHRhc2tcXHRhc2suY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrREFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFza3tcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1heC13aWR0aDogNzAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6XCJDb3NtaWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBtYXJnaW4tbGVmdDogMTMlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmlke1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbiIsIi50YXNrIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJDb3NtaWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG1hcmdpbi1sZWZ0OiAxMyU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmlkIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/components/task/task.component.ts":
/*!***********************************************!*\
  !*** ./src/components/task/task.component.ts ***!
  \***********************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/task.service */ "./src/services/task.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let TaskComponent = class TaskComponent {
    constructor(taskServ, toastr, userServ, router) {
        this.taskServ = taskServ;
        this.toastr = toastr;
        this.userServ = userServ;
        this.router = router;
        this.users = [];
        this.taskName = '';
        this.description = '';
        this.editTask = false;
        this.shareTask = false;
        this.notShareTask = false;
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.taskName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    ngOnInit() {
        this.userServ.getUsers().subscribe((user) => {
            this.users = [];
            user.forEach(item => {
                this.users.push(item);
            });
        });
    }
    edit() {
        this.editTask = !this.editTask;
    }
    onSubmit() {
        this.updatedTask = {
            id: this.id,
            name: this.taskName,
            description: this.description,
            userId: (JSON.parse(localStorage.getItem("user"))).id
        };
        this.taskServ.updateTask(this.id, this.updatedTask).subscribe(res => {
            this.toastr.success('Updated');
        }, err => {
            this.error = err.message;
            this.toastr.error(`${this.error}`);
        });
        this.editTask = !this.editTask;
    }
    delete() {
        this.taskServ.deleteTask(this.id).subscribe(res => {
            this.toastr.success('Task was deleted');
            window.location.reload();
        }, err => {
            this.error = err.message;
            this.toastr.error(`${this.error}`);
        });
    }
    close() {
        //window.location.reload();
        this.editTask = !this.editTask;
    }
    sendTask(id) {
        if (id == 0) {
            this.notShareTask = true;
            setTimeout(() => { this.notShareTask = false; }, 3000);
        }
        else {
            this.idUser = id;
            let Task = {
                name: this.taskName,
                description: this.description,
                userId: this.idUser,
                author: (JSON.parse(localStorage.getItem("user"))).email
            };
            this.taskServ.createTask(Task).subscribe(res => {
                this.toastr.success('Sent');
                //this.router.navigate(['/mytasks']);
                //window.location.reload();
                this.shareTask = true;
                setTimeout(() => { this.shareTask = false; }, 3000);
            }, err => {
                this.error = err.message;
                this.toastr.error(`${this.error}`);
            });
        }
    }
};
TaskComponent.ctorParameters = () => [
    { type: src_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskComponent.prototype, "taskName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskComponent.prototype, "description", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskComponent.prototype, "id", void 0);
TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task',
        template: __webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/index.js!./src/components/task/task.component.html"),
        styles: [__webpack_require__(/*! ./task.component.scss */ "./src/components/task/task.component.scss")]
    })
], TaskComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: "http://localhost:3000"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/modules/add-task/add-task.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/add-task/add-task.module.ts ***!
  \*************************************************/
/*! exports provided: AddTaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskModule", function() { return AddTaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_pages_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/add-task/add-task.component */ "./src/pages/add-task/add-task.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AddTaskModule = class AddTaskModule {
};
AddTaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_pages_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__["AddTaskComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]
    })
], AddTaskModule);



/***/ }),

/***/ "./src/modules/all-task/all-task.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/all-task/all-task.module.ts ***!
  \*************************************************/
/*! exports provided: AllTaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTaskModule", function() { return AllTaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_pages_all_task_all_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/all-task/all-task.component */ "./src/pages/all-task/all-task.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AllTaskModule = class AllTaskModule {
};
AllTaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_pages_all_task_all_task_component__WEBPACK_IMPORTED_MODULE_3__["AllTaskComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]
    })
], AllTaskModule);



/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/register/register.component */ "./src/pages/register/register.component.ts");
/* harmony import */ var src_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/login/login.component */ "./src/pages/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







const routes = [
    {
        path: '',
        component: src_pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
    },
    {
        path: '',
        component: src_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    },
];
let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], src_pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/modules/homepage/homepage.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/homepage/homepage.module.ts ***!
  \*************************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/homepage/homepage.component */ "./src/pages/homepage/homepage.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_components_task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/task/task.component */ "./src/components/task/task.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







const routes = [
    {
        path: '',
        component: src_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"],
    },
];
let HomepageModule = class HomepageModule {
};
HomepageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"], src_components_task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]
    })
], HomepageModule);



/***/ }),

/***/ "./src/pages/add-task/add-task.component.scss":
/*!****************************************************!*\
  !*** ./src/pages/add-task/add-task.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  max-width: 80%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin-left: 10%;\n}\n\na {\n  font-family: \"Cosmic Sans MS\", cursive, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hZGQtdGFzay9EOlxcTWFuYWdlclRhc2tcXFRhc2tNYW5hZ2VyL3NyY1xccGFnZXNcXGFkZC10YXNrXFxhZGQtdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9hZGQtdGFzay9hZGQtdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrREFBQTtBQ0NGIiwiZmlsZSI6InNyYy9wYWdlcy9hZGQtdGFzay9hZGQtdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jte1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG5he1xyXG4gIGZvbnQtZmFtaWx5OlwiQ29zbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcclxufVxyXG4iLCIuZm9ybSB7XG4gIG1heC13aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvc21pYyBTYW5zIE1TXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XG59Il19 */"

/***/ }),

/***/ "./src/pages/add-task/add-task.component.ts":
/*!**************************************************!*\
  !*** ./src/pages/add-task/add-task.component.ts ***!
  \**************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/task.service */ "./src/services/task.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AddTaskComponent = class AddTaskComponent {
    constructor(taskServ, toastr, router) {
        this.taskServ = taskServ;
        this.toastr = toastr;
        this.router = router;
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](" ", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](" ", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        const { value } = this.myGroup;
        this.creatTask = {
            name: value.name,
            description: value.description,
            userId: (JSON.parse(localStorage.getItem("user"))).id
        };
        this.taskServ.createTask(this.creatTask).subscribe(res => {
            this.toastr.success('Created');
            this.router.navigate(['/mytasks']);
        }, err => {
            this.error = err.message;
            this.toastr.error(`${this.error}`);
        });
    }
};
AddTaskComponent.ctorParameters = () => [
    { type: src_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-task',
        template: __webpack_require__(/*! raw-loader!./add-task.component.html */ "./node_modules/raw-loader/index.js!./src/pages/add-task/add-task.component.html"),
        styles: [__webpack_require__(/*! ./add-task.component.scss */ "./src/pages/add-task/add-task.component.scss")]
    })
], AddTaskComponent);



/***/ }),

/***/ "./src/pages/all-task/all-task.component.scss":
/*!****************************************************!*\
  !*** ./src/pages/all-task/all-task.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  max-width: 90%;\n  background: white;\n  border-radius: 20px;\n  display: flex;\n  border: 2px solid gray;\n  margin: 5px;\n  flex-direction: column;\n  font-family: \"Cosmic Sans MS\", cursive, sans-serif;\n  align-items: center;\n  justify-content: center;\n  margin-left: 5%;\n}\n\na {\n  font-family: \"Cosmic Sans MS\", cursive, sans-serif;\n  font-size: 18px;\n  margin: 20px;\n  color: black;\n  background: white;\n  border-radius: 20px;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  border: 2px solid gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hbGwtdGFzay9EOlxcTWFuYWdlclRhc2tcXFRhc2tNYW5hZ2VyL3NyY1xccGFnZXNcXGFsbC10YXNrXFxhbGwtdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9hbGwtdGFzay9hbGwtdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0RBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL3BhZ2VzL2FsbC10YXNrL2FsbC10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1mYW1pbHk6XCJDb3NtaWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5he1xyXG4gIGZvbnQtZmFtaWx5OlwiQ29zbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuIiwiZGl2IHtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICBtYXJnaW46IDVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6IFwiQ29zbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvc21pYyBTYW5zIE1TXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/all-task/all-task.component.ts":
/*!**************************************************!*\
  !*** ./src/pages/all-task/all-task.component.ts ***!
  \**************************************************/
/*! exports provided: AllTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTaskComponent", function() { return AllTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/task.service */ "./src/services/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AllTaskComponent = class AllTaskComponent {
    constructor(taskSer, router) {
        this.taskSer = taskSer;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem("user"));
        this.currentUserId = this.currentUser.id;
        this.tasks = [];
    }
    ngOnInit() {
        this.taskSer.getTasks(this.currentUserId).subscribe((task) => {
            this.tasks = [];
            task.forEach(item => {
                this.tasks.push(item);
            });
        });
    }
};
AllTaskComponent.ctorParameters = () => [
    { type: src_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AllTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-task',
        template: __webpack_require__(/*! raw-loader!./all-task.component.html */ "./node_modules/raw-loader/index.js!./src/pages/all-task/all-task.component.html"),
        styles: [__webpack_require__(/*! ./all-task.component.scss */ "./src/pages/all-task/all-task.component.scss")]
    })
], AllTaskComponent);



/***/ }),

/***/ "./src/pages/homepage/homepage.component.scss":
/*!****************************************************!*\
  !*** ./src/pages/homepage/homepage.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: \"Cosmic Sans MS\", cursive, sans-serif;\n  text-align: center;\n  font-size: 23px;\n}\n\n.link {\n  display: flex;\n  justify-content: center;\n}\n\na {\n  font-family: \"Cosmic Sans MS\", cursive, sans-serif;\n  font-size: 18px;\n  margin: 10px;\n  color: black;\n  background: white;\n  border-radius: 20px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9ob21lcGFnZS9EOlxcTWFuYWdlclRhc2tcXFRhc2tNYW5hZ2VyL3NyY1xccGFnZXNcXGhvbWVwYWdlXFxob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURBQTtFQUNFLGtEQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNHRiIsImZpbGUiOiJzcmMvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIGZvbnQtZmFtaWx5OlwiQ29zbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcbi5saW5re1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5he1xyXG4gIGZvbnQtZmFtaWx5OlwiQ29zbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIiwicCB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvc21pYyBTYW5zIE1TXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4ubGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5hIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29zbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/pages/homepage/homepage.component.ts":
/*!**************************************************!*\
  !*** ./src/pages/homepage/homepage.component.ts ***!
  \**************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/task.service */ "./src/services/task.service.ts");



let HomepageComponent = class HomepageComponent {
    constructor(taskSer) {
        this.taskSer = taskSer;
        this.currentUser = JSON.parse(localStorage.getItem("user"));
        this.currentUserId = this.currentUser.id;
        this.tasks = [];
    }
    ngOnInit() {
        this.taskSer.getTasks(this.currentUserId).subscribe((task) => {
            this.tasks = [];
            task.forEach(item => {
                if (item.author == undefined) {
                    this.tasks.push(item);
                }
            });
        });
    }
    logout() {
        localStorage.clear();
    }
};
HomepageComponent.ctorParameters = () => [
    { type: src_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }
];
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/pages/homepage/homepage.component.html"),
        styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/pages/homepage/homepage.component.scss")]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/pages/login/login.component.scss":
/*!**********************************************!*\
  !*** ./src/pages/login/login.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-login {\n  border-radius: 20px;\n  background: rgba(0, 102, 255, 0.1);\n  padding: 10px;\n}\n\nh4 {\n  font-style: italic;\n  color: #0b3677;\n}\n\n@media only screen and (min-width: 600px) {\n  .form-login {\n    width: 50%;\n    margin: auto;\n    margin-top: 50px;\n  }\n}\n\n@media only screen and (max-width: 599px) {\n  .form-login {\n    width: 90%;\n    margin: auto;\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9sb2dpbi9EOlxcTWFuYWdlclRhc2tcXFRhc2tNYW5hZ2VyL3NyY1xccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ0dGO0FBQ0Y7O0FEREU7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUNHSjtBQUNGIiwiZmlsZSI6InNyYy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxvZ2lue1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDpyZ2JhKDAsIDEwMiwgMjU1LCAwLjEpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuaDR7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiByZ2IoMTEsIDU0LCAxMTkpO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpe1xyXG4gIC5mb3JtLWxvZ2lue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KXtcclxuICAgIC5mb3JtLWxvZ2lue1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiIsIi5mb3JtLWxvZ2luIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxMDIsIDI1NSwgMC4xKTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaDQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjMGIzNjc3O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5mb3JtLWxvZ2luIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5mb3JtLWxvZ2luIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/pages/login/login.component.ts":
/*!********************************************!*\
  !*** ./src/pages/login/login.component.ts ***!
  \********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let LoginComponent = class LoginComponent {
    constructor(userServ, router, toastr) {
        this.userServ = userServ;
        this.router = router;
        this.toastr = toastr;
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.show = false;
        this.showMessage = false;
    }
    ngOnInit() {
    }
    onSubmit() {
        const { value } = this.myGroup;
        this.userServ.getUserByEmail(value.email, value.password).subscribe((user) => {
            let userEmail = '';
            let userPassword = '';
            if (user) {
                user.forEach(item => {
                    userEmail = item.email;
                    userPassword = item.password;
                });
                if (userPassword == value.password && userEmail == value.email) {
                    localStorage.setItem("user", JSON.stringify(user[0]));
                    this.router.navigate(['/mytasks']);
                }
                else {
                    this.showMessage = true;
                    setTimeout(() => this.showMessage = false, 3000);
                }
            }
        }, err => {
            this.error = err.message;
            this.toastr.error(`${this.error}`);
        });
    }
    showPassword() {
        this.show = !this.show;
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/pages/login/login.component.html"),
        providers: [src_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/pages/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/pages/register/register.component.scss":
/*!****************************************************!*\
  !*** ./src/pages/register/register.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-register {\n  border-radius: 20px;\n  background: rgba(102, 255, 153, 0.3);\n  padding: 10px;\n}\n\nh4 {\n  font-style: italic;\n  color: #0b973a;\n}\n\n@media only screen and (min-width: 600px) {\n  .form-register {\n    width: 50%;\n    margin: auto;\n    margin-top: 50px;\n  }\n}\n\n@media only screen and (max-width: 599px) {\n  .form-register {\n    width: 90%;\n    margin: auto;\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9yZWdpc3Rlci9EOlxcTWFuYWdlclRhc2tcXFRhc2tNYW5hZ2VyL3NyY1xccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNBO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ0dBO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUNHRjtBQUNGIiwiZmlsZSI6InNyYy9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXJlZ2lzdGVye1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDpyZ2JhKDEwMiwgMjU1LCAxNTMsIDAuMyk7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5oNHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6IHJnYigxMSwgMTUxLCA1OCk7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCl7XHJcbi5mb3JtLXJlZ2lzdGVye1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KXtcclxuICAuZm9ybS1yZWdpc3RlcntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICB9XHJcbiIsIi5mb3JtLXJlZ2lzdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMDIsIDI1NSwgMTUzLCAwLjMpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5oNCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICMwYjk3M2E7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmZvcm0tcmVnaXN0ZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmZvcm0tcmVnaXN0ZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/pages/register/register.component.ts":
/*!**************************************************!*\
  !*** ./src/pages/register/register.component.ts ***!
  \**************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let RegisterComponent = class RegisterComponent {
    constructor(userServ, router, toastr) {
        this.userServ = userServ;
        this.router = router;
        this.toastr = toastr;
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
        });
        this.show = false;
    }
    ngOnInit() {
    }
    showPassword() {
        this.show = !this.show;
    }
    onSubmit() {
        const { value } = this.myGroup;
        const user = {
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            password: value.password
        };
        this.userServ.createUser(user).subscribe((user) => {
            localStorage.setItem("user", JSON.stringify(user));
            this.router.navigate(['/mytasks']);
        }, err => {
            this.error = err.message;
            this.toastr.error(`${this.error}`);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/pages/register/register.component.html"),
        providers: [src_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/pages/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/services/task.service.ts":
/*!**************************************!*\
  !*** ./src/services/task.service.ts ***!
  \**************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
    }
    getTasks(userId) {
        return this.http.get(`${this.URL}/tasks?userId=${userId}`);
    }
    updateTask(id, task) {
        return this.http.put(`${this.URL}/tasks/${id}`, task);
    }
    deleteTask(id) {
        return this.http.delete(`${this.URL}/tasks/${id}`);
    }
    createTask(task) {
        return this.http.post(`${this.URL}/tasks`, task);
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaskService);



/***/ }),

/***/ "./src/services/user.service.ts":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL;
    }
    getUserByEmail(email, password) {
        console.log(this.http.get(`${this.URL}/users?email=${email}&password=${password}`));
        return this.http.get(`${this.URL}/users?email=${email}&password=${password}`);
    }
    getUserEmail(email) {
        console.log(this.http.get(`${this.URL}/users?email=${email}`));
        return this.http.get(`${this.URL}/users?email=${email}`);
    }
    createUser(user) {
        return this.http.post(`${this.URL}/users`, user);
    }
    getUsers() {
        return this.http.get(`${this.URL}/users`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ManagerTask\TaskManager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map