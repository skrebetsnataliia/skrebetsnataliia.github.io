(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-modules-new-form-new-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/new-form/new-form.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/new-form/new-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\r\n    <div>\r\n      <button class=\"color-violet\"  data-toggle=\"modal\" data-target=\"#exampleModalCenter\"><i class=\"fas fa-plus\"></i> ADD NEW FIELD</button>\r\n      <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" >\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">New field</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <form [formGroup]=\"addFieldForm\">\r\n                  <div class='form-input'>\r\n                    <label>Name</label>\r\n                    <input class=\"form-control\"\r\n                    type=\"text\"\r\n                    formControlName=\"name\">\r\n                </div>\r\n                <div class='form-input'>\r\n                  <label>Pattern</label>\r\n                  <select class=\"form-control\" type=\"text\" formControlName=\"pattern\">\r\n                    <option value=\" \" selected disabled hidden>Choose here</option>\r\n                    <option value='1'>url</option>\r\n                    <option value='2'>email</option>\r\n                    <option value='3'>ip_address</option>\r\n                  </select>\r\n                  <!-- <input class=\"form-control\"\r\n                  type=\"text\"\r\n                  formControlName=\"pattern\"> -->\r\n                </div>\r\n                <div class='form-input'>\r\n                    <label>Type</label>\r\n                    <select class=\"form-control\" formControlName=\"type\">\r\n                      <option value=\" \" selected disabled hidden>Choose here</option>\r\n                      <option value=\"1\">password</option>\r\n                      <option value=\"2\">textarea</option>\r\n                      <option value=\"3\">text</option>\r\n                       <option value=\"4\">file</option>\r\n                        <option value=\"5\">radio</option>\r\n                       <option value=\"6\">checkbox</option>\r\n                       <option value=\"7\">submit</option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class='form-input'>\r\n                  <label>Placeholder</label>\r\n                  <input class=\"form-control\"\r\n                  type=\"text\"\r\n                  formControlName=\"placeholder\">\r\n                </div>\r\n\r\n                <div class='form-required'>\r\n                  <input type=\"checkbox\"\r\n                  formControlName=\"formControl\">\r\n                  <label>Required</label>\r\n                </div>\r\n                </form>\r\n\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\"  data-dismiss=\"modal\"  class=\"btn btn-primary\" (click)=\"addField()\">Save changes</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <button class=\"color-violet\" (click)=\"saveForm()\">SAVE</button>\r\n    </div>\r\n    <div>\r\n        <button class =\"color-green\">SHARE</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"general-configs\">\r\n  <form  [formGroup]=\"mainFormInfo\">\r\n        <div >\r\n            <label for=\"title\" class=\"input-label\">Title\r\n            </label><br/>\r\n            <input type=\"text\"\r\n            placeholder=\"form name\"\r\n            name=\"title\"\r\n            class=\"enter-form\"\r\n            formControlName=\"title\">\r\n        </div><br/>\r\n        <div class=\"data\">\r\n            <label for=\"styles\" class=\"input-label\">CSS Styles\r\n            </label><br/>\r\n            <textarea placeholder=\"styles for form\"\r\n            name=\"styles\"\r\n            class=\"enter-form\"\r\n            formControlName=\"styles\"></textarea>\r\n         </div>\r\n  </form>\r\n</div>\r\n\r\n<div *ngIf=\"formFields.length > 0\">\r\n          <div *ngFor=\"let field of formFields\" class=\"fieldTable\">\r\n          <div>\r\n          <input [type]=\"field.type\"\r\n          [placeholder]=\"field.placeholder\"\r\n          [required]='field.formControl'\r\n          [name]='field.name'\r\n          [pattern]='field.pattern'>\r\n          </div>\r\n          <div>\r\n              <button (click)=\"deleteField(field)\">DELETE</button>\r\n            </div>\r\n          </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/modules/new-form/new-form.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/new-form/new-form.module.ts ***!
  \*************************************************/
/*! exports provided: NewFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormModule", function() { return NewFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_pages_new_form_new_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/new-form/new-form.component */ "./src/pages/new-form/new-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






const routes = [
    {
        path: '',
        component: src_pages_new_form_new_form_component__WEBPACK_IMPORTED_MODULE_4__["NewFormComponent"],
    },
];
let NewFormModule = class NewFormModule {
};
NewFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_pages_new_form_new_form_component__WEBPACK_IMPORTED_MODULE_4__["NewFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
    })
], NewFormModule);



/***/ }),

/***/ "./src/pages/new-form/new-form.component.scss":
/*!****************************************************!*\
  !*** ./src/pages/new-form/new-form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  height: 45px;\n  color: white;\n  border: white 1px solid;\n  border-radius: 5px;\n}\n\n.color-violet {\n  background: #9c68d9;\n  width: 200px;\n}\n\n.color-green {\n  background: #69AFB6;\n  width: 200px;\n}\n\n.navigation {\n  padding: 2px;\n  background: white;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.add-field {\n  padding: 20px;\n  top: 10%;\n  position: absolute;\n  left: 40%;\n  border: 1px solid gray;\n  background: white;\n  width: 400px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);\n}\n\n.fa-times {\n  color: gray;\n}\n\n.btn-close {\n  background: none;\n  border: none;\n}\n\n.form-input {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.form-head {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid gray;\n}\n\n.btn-close_gray {\n  background: #6c757d;\n  color: white;\n  border: 0 solid gray;\n  border-radius: 5px;\n}\n\n.btn-save {\n  color: white;\n  background: #297aff;\n  margin-left: 5px;\n}\n\n.btn-save, .btn-close_gray {\n  width: 70px;\n  height: 40px;\n}\n\n.form-btn {\n  border-top: 1px solid gray;\n  padding-top: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.general-configs {\n  padding: 2px;\n  background: white;\n  width: 100%;\n}\n\n.enter-form {\n  width: 100%;\n  height: 45px;\n  border: lightgray 1px solid;\n  border-radius: 5px;\n}\n\n.form-input {\n  margin: 0 5px 10px 5px;\n}\n\n.fieldTable {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9uZXctZm9ybS9EOlxcQW5ndWxhclByb2plY3Qvc3JjXFxwYWdlc1xcbmV3LWZvcm1cXG5ldy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL25ldy1mb3JtL25ldy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0lKOztBREZBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDS0Y7O0FERkE7RUFDRSxXQUFBO0FDS0Y7O0FESEE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNNRjs7QURKQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ09GOztBRExBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0FDUUY7O0FETEE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDUUY7O0FETkE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1NBOztBRE5BO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNTQTs7QUROQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDU0E7O0FEUEE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDVUo7O0FEUkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNXSjs7QURSRTtFQUNFLHNCQUFBO0FDV0o7O0FEVEU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDWUoiLCJmaWxlIjoic3JjL3BhZ2VzL25ldy1mb3JtL25ldy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiB3aGl0ZSAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNvbG9yLXZpb2xldHtcclxuICAgIGJhY2tncm91bmQ6IzljNjhkOTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG4uY29sb3ItZ3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kOiM2OUFGQjY7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLm5hdmlnYXRpb257XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYWRkLWZpZWxke1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdG9wOjEwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMDBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbn1cclxuXHJcbi5mYS10aW1lc3tcclxuICBjb2xvciA6Z3JheTtcclxufVxyXG4uYnRuLWNsb3Nle1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5mb3JtLWlucHV0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG59XHJcbi5mb3JtLWhlYWR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxufVxyXG5cclxuLmJ0bi1jbG9zZV9ncmF5e1xyXG4gIGJhY2tncm91bmQ6cmdiKDEwOCwgMTE3LDEyNSk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYm9yZGVyOiAwIHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5idG4tc2F2ZXtcclxuY29sb3I6IHdoaXRlO1xyXG5iYWNrZ3JvdW5kOiByZ2IoNDEsIDEyMiwgMjU2KTtcclxubWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmJ0bi1zYXZlLCAuYnRuLWNsb3NlX2dyYXl7XHJcbndpZHRoOiA3MHB4O1xyXG5oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWJ0bntcclxuYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbnBhZGRpbmctdG9wOiAxMHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5nZW5lcmFsLWNvbmZpZ3N7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5lbnRlci1mb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXI6IGxpZ2h0Z3JheSAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1pbnB1dHtcclxuICAgIG1hcmdpbjowIDVweCAxMHB4IDVweDtcclxuICB9XHJcbiAgLmZpZWxkVGFibGV7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4iLCJidXR0b24ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiB3aGl0ZSAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbG9yLXZpb2xldCB7XG4gIGJhY2tncm91bmQ6ICM5YzY4ZDk7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgYmFja2dyb3VuZDogIzY5QUZCNjtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkLWZpZWxkIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdG9wOiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZhLXRpbWVzIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5idG4tY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0taGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5idG4tY2xvc2VfZ3JheSB7XG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwIHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ0bi1zYXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMjk3YWZmO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uYnRuLXNhdmUsIC5idG4tY2xvc2VfZ3JheSB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5mb3JtLWJ0biB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmdlbmVyYWwtY29uZmlncyB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZW50ZXItZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogbGlnaHRncmF5IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gIG1hcmdpbjogMCA1cHggMTBweCA1cHg7XG59XG5cbi5maWVsZFRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/pages/new-form/new-form.component.ts":
/*!**************************************************!*\
  !*** ./src/pages/new-form/new-form.component.ts ***!
  \**************************************************/
/*! exports provided: NewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormComponent", function() { return NewFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/form.service */ "./src/services/form.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let NewFormComponent = class NewFormComponent {
    constructor(formBuilder, formService, toastr) {
        this.formBuilder = formBuilder;
        this.formService = formService;
        this.toastr = toastr;
        this.formFields = [];
    }
    addField() {
        const fieldInfo = {
            name: this.addFieldForm.get('name').value,
            pattern: this.addFieldForm.get('pattern').value,
            type: this.addFieldForm.get('type').value,
            placeholder: this.addFieldForm.get('placeholder').value,
            formControl: this.addFieldForm.get('formControl').value
        };
        this.formFields.push(fieldInfo);
        this.addFieldForm = this.formBuilder.group({
            name: [],
            pattern: [],
            type: [],
            placeholder: [],
            formControl: []
        });
    }
    deleteField(deletingField) {
        this.formFields = this.formFields.filter(field => {
            return field.name != deletingField.name;
        });
    }
    saveForm() {
        const fieldInfo = {
            title: this.mainFormInfo.get('title').value,
            background: this.mainFormInfo.get('styles').value
        };
        this.newForm = {
            name: fieldInfo.title,
            background: fieldInfo.background,
            fields: this.formFields
        };
        console.log(this.newForm);
        this.formService.createForm(this.newForm).subscribe(res => {
            this.formFields = [];
            this.toastr.success('Form ' + fieldInfo.title + 'was created');
        }, err => {
            this.toastr.error('Try create form one more time');
        });
    }
    ngOnInit() {
        this.addFieldForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            pattern: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            placeholder: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            formControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.mainFormInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            styles: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
};
NewFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_form_service__WEBPACK_IMPORTED_MODULE_3__["FormService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
NewFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-form',
        template: __webpack_require__(/*! raw-loader!./new-form.component.html */ "./node_modules/raw-loader/index.js!./src/pages/new-form/new-form.component.html"),
        styles: [__webpack_require__(/*! ./new-form.component.scss */ "./src/pages/new-form/new-form.component.scss")]
    })
], NewFormComponent);



/***/ })

}]);
//# sourceMappingURL=src-modules-new-form-new-form-module-es2015.js.map