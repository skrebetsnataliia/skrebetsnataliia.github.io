(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-modules-form-details-form-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/form-details/form-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/form-details/form-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <table *ngIf='!showDetail' class=\"table table-hover\">\r\n      <thead>\r\n        <tr class=\"table-primary\">\r\n          <th scope=\"col\">Name</th>\r\n          <th scope=\"col\">Background</th>\r\n          <th *ngIf='showDetail' scope=\"col\">Fields</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td colspan=\"5\" class=\"alert alert-danger\" *ngIf=\"error$ | async as error\">{{error}}</td>\r\n        </tr>\r\n        <tr *ngFor=\"let item of (forms$ |async)\">\r\n          <th  scope=\"row\">{{item.name}}</th>\r\n          <td >{{item.background}}</td>\r\n          <th>\r\n              <button (click)='showDetails(item)' class=\"btn btn-info\">Details</button>\r\n              <br>\r\n              <button data-toggle=\"modal\" data-target=\"#deleteForm\" class=\"btn btn-danger\" (click)='deleteForm(item)'>Delete</button>\r\n          </th>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div *ngIf='showDetail'>\r\n      <div *ngFor=\"let item of (forms$ |async)\" class=\"form-detail\">\r\n        <div *ngIf='item.fields'>\r\n            <h4>Name:{{item.name}}</h4>\r\n            <p>Background:{{item.background}}</p>\r\n        </div>\r\n        <div *ngFor='let field of item.fields'>\r\n            <hr>\r\n            <h6>Field:</h6>\r\n            <div>\r\n                type:{{field.fieldType.type}}\r\n            </div>\r\n            <div>\r\n                placeholder:{{field.placeholder}}\r\n            </div>\r\n\r\n           <!-- <div>\r\n              pattern:{{field.pattern.name}}\r\n           </div> -->\r\n          </div>\r\n          <div *ngIf='item.fields'>\r\n              <button (click)='editForm(item)' class=\"btn btn-info\">Edit</button>\r\n              <button type=\"button\" data-toggle=\"modal\" data-target=\"#deleteForm\"  class=\"btn btn-danger\" (click)='deleteForm(item)'>Delete</button>\r\n          </div>\r\n      </div>\r\n\r\n    </div>\r\n<div class=\"edit-form\" *ngIf='editForms'>\r\n<form [formGroup]='formDetails' (ngSubmit)='updateForm(item)'>\r\n  <div>\r\n    <label>Name</label>\r\n    <input class=\"form-control\" type=\"text\" formControlName='name'>\r\n  </div>\r\n  <div>\r\n    <label>Background</label>\r\n    <select class='form-control bg' formControlName='background'>\r\n      <option>#FFFFFF</option>\r\n      <option>#C0C0C0</option>\r\n      <option>#808080</option>\r\n      <option>#000000</option>\r\n      <option>#FF0000</option>\r\n      <option>#800000</option>\r\n      <option>#FFFF00</option>\r\n      <option>#808000</option>\r\n      <option>#00FF00</option>\r\n      <option>#008000</option>\r\n      <option>#00FFFF</option>\r\n      <option>#008080</option>\r\n      <option>#0000FF</option>\r\n      <option>#000080</option>\r\n      <option>#FF00FF</option>\r\n      <option>#800080</option>\r\n    </select>\r\n  </div>\r\n  <div *ngIf='newField'>\r\n   <h4>Add field</h4>\r\n   <div>\r\n      <p>Choose type</p>\r\n  <div>\r\n      <select class='form-control' formControlName=\"type\">\r\n          <option value=\"1\">password</option>\r\n          <option value=\"2\">textarea</option>\r\n          <option value=\"3\">text</option>\r\n          <option value=\"4\">file</option>\r\n          <option value=\"5\">radio</option>\r\n          <option value=\"6\">checkbox</option>\r\n          <option value=\"7\">submit</option>\r\n        </select>\r\n  </div>\r\n  <p>Enter placeholder</p>\r\n  <input type=\"text\" class='form-control' formControlName=\"placeholder\">\r\n   </div>\r\n   <div>\r\n     <p>Choose pattern</p>\r\n<div>\r\n    <select class='form-control' formControlName=\"pattern\">\r\n        <option value=\" \" selected disabled hidden>Choose here</option>\r\n        <option value='1'>url</option>\r\n        <option value='2'>email</option>\r\n        <option value='3'>ip_address</option>\r\n      </select>\r\n</div>\r\n   </div>\r\n  </div>\r\n  <button *ngIf='!newField' (click)='addField()' class=\"btn btn-success\">Add field</button>\r\n\r\n  <button type=\"submit\" [disabled]=\"formDetails.invalid\" class=\"btn btn-primary\">Edit form</button>\r\n</form>\r\n</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"deleteForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteForm\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n          This form was deleted\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/modules/form-details/form-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/modules/form-details/form-details.module.ts ***!
  \*********************************************************/
/*! exports provided: FormDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDetailsModule", function() { return FormDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_pages_form_details_form_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/form-details/form-details.component */ "./src/pages/form-details/form-details.component.ts");






const routes = [
    {
        path: '',
        component: src_pages_form_details_form_details_component__WEBPACK_IMPORTED_MODULE_5__["FormDetailsComponent"],
    },
];
let FormDetailsModule = class FormDetailsModule {
};
FormDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_pages_form_details_form_details_component__WEBPACK_IMPORTED_MODULE_5__["FormDetailsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]
    })
], FormDetailsModule);



/***/ }),

/***/ "./src/pages/form-details/form-details.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/form-details/form-details.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  margin: 5px;\n  width: 150px;\n  align-self: center;\n}\n\n.bg option:nth-child(1) {\n  background: #FFFFFF;\n}\n\n.bg option:nth-child(2) {\n  background: #C0C0C0;\n}\n\n.bg option:nth-child(3) {\n  background: #808080;\n}\n\n.bg option:nth-child(4) {\n  background: #000000;\n}\n\n.bg option:nth-child(5) {\n  background: #FF0000;\n}\n\n.bg option:nth-child(6) {\n  background: #800000;\n}\n\n.bg option:nth-child(7) {\n  background: #FFFF00;\n}\n\n.bg option:nth-child(8) {\n  background: #808000;\n}\n\n.bg option:nth-child(9) {\n  background: #00FF00;\n}\n\n.bg option:nth-child(10) {\n  background: #008000;\n}\n\n.bg option:nth-child(11) {\n  background: #00FFFF;\n}\n\n.bg option:nth-child(12) {\n  background: #008080;\n}\n\n.bg option:nth-child(13) {\n  background: #0000FF;\n}\n\n.bg option:nth-child(14) {\n  background: #000080;\n}\n\n.bg option:nth-child(15) {\n  background: #FF00FF;\n}\n\n.bg option:nth-child(16) {\n  background: #800080;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9mb3JtLWRldGFpbHMvRDpcXEFuZ3VsYXJQcm9qZWN0L3NyY1xccGFnZXNcXGZvcm0tZGV0YWlsc1xcZm9ybS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL2Zvcm0tZGV0YWlscy9mb3JtLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEa0JBO0VBQ0EsbUJBbEJTO0FDR1Q7O0FEaUJBO0VBQ0UsbUJBcEJPO0FDTVQ7O0FEZ0JBO0VBQ0ksbUJBdEJLO0FDU1Q7O0FEZUE7RUFDTSxtQkF4Qkk7QUNZVjs7QURjQTtFQUNFLG1CQTFCUTtBQ2VWOztBRGFBO0VBQ0UsbUJBNUJRO0FDa0JWOztBRFlBO0VBQ0UsbUJBOUJRO0FDcUJWOztBRFdFO0VBQ0EsbUJBaENRO0FDd0JWOztBRFVFO0VBQ0UsbUJBbENNO0FDMkJWOztBRFNBO0VBQ00sbUJBcENJO0FDOEJWOztBRFFBO0VBQ0UsbUJBdENTO0FDaUNYOztBRE9FO0VBQ0EsbUJBeENTO0FDb0NYOztBRE1FO0VBQ0EsbUJBMUNRO0FDdUNWOztBREtBO0VBQ0UsbUJBNUNRO0FDMENWOztBRElBO0VBQ0UsbUJBOUNTO0FDNkNYOztBREdBO0VBQ0UsbUJBaERTO0FDZ0RYIiwiZmlsZSI6InNyYy9wYWdlcy9mb3JtLWRldGFpbHMvZm9ybS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4kY29sb3VyMTojRkZGRkZGO1xyXG4kY29sb3VyMjojQzBDMEMwO1xyXG4kY29sb3VyMzojODA4MDgwO1xyXG4kY29sb3VyNDogIzAwMDAwMDtcclxuJGNvbG91cjU6ICNGRjAwMDA7XHJcbiRjb2xvdXI2OiAjODAwMDAwO1xyXG4kY29sb3VyNzogI0ZGRkYwMDtcclxuJGNvbG91cjg6ICM4MDgwMDA7XHJcbiRjb2xvdXI5OiAjMDBGRjAwO1xyXG4kY29sb3VyMTA6IzAwODAwMDtcclxuJGNvbG91cjExOiAjMDBGRkZGO1xyXG4kY29sb3VyMTI6ICMwMDgwODA7XHJcbiRjb2xvdXIxMzojMDAwMEZGO1xyXG4kY29sb3VyMTQ6IzAwMDA4MDtcclxuJGNvbG91cjE1OiAjRkYwMEZGO1xyXG4kY29sb3VyMTY6ICM4MDAwODA7XHJcblxyXG4uYmcgb3B0aW9uOm50aC1jaGlsZCgxKXtcclxuYmFja2dyb3VuZDogJGNvbG91cjE7XHJcbn1cclxuLmJnIG9wdGlvbjpudGgtY2hpbGQoMil7XHJcbiAgYmFja2dyb3VuZDogJGNvbG91cjI7XHJcbiAgfVxyXG4uYmcgb3B0aW9uOm50aC1jaGlsZCgzKXtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvdXIzO1xyXG4gICAgfVxyXG4uYmcgb3B0aW9uOm50aC1jaGlsZCg0KXtcclxuICAgICAgYmFja2dyb3VuZDogJGNvbG91cjQ7XHJcbiAgICB9XHJcbi5iZyBvcHRpb246bnRoLWNoaWxkKDUpe1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvdXI1O1xyXG4gIH1cclxuLmJnIG9wdGlvbjpudGgtY2hpbGQoNil7XHJcbiAgYmFja2dyb3VuZDogJGNvbG91cjY7XHJcbn1cclxuLmJnIG9wdGlvbjpudGgtY2hpbGQoNyl7XHJcbiAgYmFja2dyb3VuZDogJGNvbG91cjc7XHJcbiAgfVxyXG4gIC5iZyBvcHRpb246bnRoLWNoaWxkKDgpe1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvdXI4O1xyXG4gIH1cclxuICAuYmcgb3B0aW9uOm50aC1jaGlsZCg5KXtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvdXI5O1xyXG4gIH1cclxuLmJnIG9wdGlvbjpudGgtY2hpbGQoMTApe1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3VyMTA7XHJcbiAgfVxyXG4uYmcgb3B0aW9uOm50aC1jaGlsZCgxMSl7XHJcbiAgYmFja2dyb3VuZDogJGNvbG91cjExO1xyXG4gIH1cclxuICAuYmcgb3B0aW9uOm50aC1jaGlsZCgxMil7XHJcbiAgYmFja2dyb3VuZDogJGNvbG91cjEyO1xyXG4gIH1cclxuICAuYmcgb3B0aW9uOm50aC1jaGlsZCgxMyl7XHJcbiAgYmFja2dyb3VuZDogJGNvbG91cjEzO1xyXG59XHJcbi5iZyBvcHRpb246bnRoLWNoaWxkKDE0KXtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3VyMTQ7XHJcbn1cclxuLmJnIG9wdGlvbjpudGgtY2hpbGQoMTUpe1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvdXIxNTtcclxufVxyXG4uYmcgb3B0aW9uOm50aC1jaGlsZCgxNil7XHJcbiAgYmFja2dyb3VuZDogJGNvbG91cjE2O1xyXG59XHJcbiIsIi5idG4ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5iZyBvcHRpb246bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cblxuLmJnIG9wdGlvbjpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiAjQzBDMEMwO1xufVxuXG4uYmcgb3B0aW9uOm50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQ6ICM4MDgwODA7XG59XG5cbi5iZyBvcHRpb246bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cblxuLmJnIG9wdGlvbjpudGgtY2hpbGQoNSkge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAwO1xufVxuXG4uYmcgb3B0aW9uOm50aC1jaGlsZCg2KSB7XG4gIGJhY2tncm91bmQ6ICM4MDAwMDA7XG59XG5cbi5iZyBvcHRpb246bnRoLWNoaWxkKDcpIHtcbiAgYmFja2dyb3VuZDogI0ZGRkYwMDtcbn1cblxuLmJnIG9wdGlvbjpudGgtY2hpbGQoOCkge1xuICBiYWNrZ3JvdW5kOiAjODA4MDAwO1xufVxuXG4uYmcgb3B0aW9uOm50aC1jaGlsZCg5KSB7XG4gIGJhY2tncm91bmQ6ICMwMEZGMDA7XG59XG5cbi5iZyBvcHRpb246bnRoLWNoaWxkKDEwKSB7XG4gIGJhY2tncm91bmQ6ICMwMDgwMDA7XG59XG5cbi5iZyBvcHRpb246bnRoLWNoaWxkKDExKSB7XG4gIGJhY2tncm91bmQ6ICMwMEZGRkY7XG59XG5cbi5iZyBvcHRpb246bnRoLWNoaWxkKDEyKSB7XG4gIGJhY2tncm91bmQ6ICMwMDgwODA7XG59XG5cbi5iZyBvcHRpb246bnRoLWNoaWxkKDEzKSB7XG4gIGJhY2tncm91bmQ6ICMwMDAwRkY7XG59XG5cbi5iZyBvcHRpb246bnRoLWNoaWxkKDE0KSB7XG4gIGJhY2tncm91bmQ6ICMwMDAwODA7XG59XG5cbi5iZyBvcHRpb246bnRoLWNoaWxkKDE1KSB7XG4gIGJhY2tncm91bmQ6ICNGRjAwRkY7XG59XG5cbi5iZyBvcHRpb246bnRoLWNoaWxkKDE2KSB7XG4gIGJhY2tncm91bmQ6ICM4MDAwODA7XG59Il19 */"

/***/ }),

/***/ "./src/pages/form-details/form-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/pages/form-details/form-details.component.ts ***!
  \**********************************************************/
/*! exports provided: FormDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDetailsComponent", function() { return FormDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_myform_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/myform.action */ "./src/store/actions/myform.action.ts");
/* harmony import */ var _store_reducers_form_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/reducers/form.reducer */ "./src/store/reducers/form.reducer.ts");
/* harmony import */ var src_services_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/form.service */ "./src/services/form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let FormDetailsComponent = class FormDetailsComponent {
    constructor(store, fb) {
        this.store = store;
        this.fb = fb;
        this.editForms = false;
        this.showDetail = false;
        this.newField = false;
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions_myform_action__WEBPACK_IMPORTED_MODULE_3__["LoadForms"]());
        const form$ = this.store.select(_store_reducers_form_reducer__WEBPACK_IMPORTED_MODULE_4__["getCurrentForm"]);
        this.forms$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers_form_reducer__WEBPACK_IMPORTED_MODULE_4__["getForms"]));
        this.formDetails = this.fb.group({
            name: [' ', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            background: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            placeholder: [' '],
            pattern: [''],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        }),
            form$.subscribe(currentForm => {
                if (currentForm) {
                    this.formDetails.patchValue({
                        name: currentForm.name,
                        background: currentForm.background,
                        id: currentForm.id,
                    });
                }
            });
    }
    showDetails(item) {
        const openedForm = {
            name: item.name,
            background: item.background,
            id: item.id,
            fields: item.fields
        };
        this.store.dispatch(new _store_actions_myform_action__WEBPACK_IMPORTED_MODULE_3__["UpdateForm"](openedForm));
        this.store.dispatch(new _store_actions_myform_action__WEBPACK_IMPORTED_MODULE_3__["LoadForm"](item.id));
        this.showDetail = !this.showDetail;
    }
    editForm(item) {
        const openedForm = {
            name: item.name,
            background: item.background,
            id: item.id,
        };
        this.store.dispatch(new _store_actions_myform_action__WEBPACK_IMPORTED_MODULE_3__["UpdateForm"](openedForm));
        this.store.dispatch(new _store_actions_myform_action__WEBPACK_IMPORTED_MODULE_3__["LoadForm"](item.id));
        this.currentForm = item;
        console.log(this.currentForm);
        this.editForms = !this.editForms;
    }
    updateForm() {
        const updatedForm = {
            name: this.formDetails.get('name').value,
            background: this.formDetails.get('background').value,
            id: this.formDetails.get('id').value,
            //fields:null
            fields: [{ placeholder: this.formDetails.get('placeholder').value,
                    pattern: this.formDetails.get('pattern').value,
                    type: this.formDetails.get('type').value }]
        };
        for (let key of this.currentForm.fields) {
            console.log(key.placeholder, key.pattern, key.type);
            updatedForm.fields.push({ placeholder: key.placeholder, pattern: key.pattern, type: key.type });
            console.log(updatedForm.fields);
        }
        this.store.dispatch(new _store_actions_myform_action__WEBPACK_IMPORTED_MODULE_3__["UpdateForm"](updatedForm));
        this.editForms = !this.editForms;
        this.newField = !this.newField;
    }
    deleteForm(item) {
        this.store.dispatch(new _store_actions_myform_action__WEBPACK_IMPORTED_MODULE_3__["DeleteForm"](item.id));
    }
    addField() {
        this.newField = !this.newField;
    }
};
FormDetailsComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
FormDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-details',
        template: __webpack_require__(/*! raw-loader!./form-details.component.html */ "./node_modules/raw-loader/index.js!./src/pages/form-details/form-details.component.html"),
        providers: [src_services_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"]],
        styles: [__webpack_require__(/*! ./form-details.component.scss */ "./src/pages/form-details/form-details.component.scss")]
    })
], FormDetailsComponent);



/***/ })

}]);
//# sourceMappingURL=src-modules-form-details-form-details-module-es2015.js.map