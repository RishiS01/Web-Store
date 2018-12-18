webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(wbService, authService, router) {
        var _this = this;
        this.wbService = wbService;
        this.authService = authService;
        this.router = router;
        this.title = "app";
        this.profile = {};
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.wbService
                    .getUserInfo(auth.uid)
                    .valueChanges()
                    .subscribe(function (data) {
                    _this.profile = data;
                    if (_this.profile !== null) {
                        if (_this.profile.role === "guest") {
                            _this.router.navigate([""]);
                        }
                        else {
                            _this.router.navigate(["admin-dashboard"]);
                        }
                    }
                });
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-root",
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* unused harmony export dropzone_config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngui_auto_complete__ = __webpack_require__("../../../../@ngui/auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_auth_login_login_component__ = __webpack_require__("../../../../../src/app/components/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_dashboard_admin_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_user_dashboard_user_dashboard_component__ = __webpack_require__("../../../../../src/app/components/user/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_categories_categories_component__ = __webpack_require__("../../../../../src/app/components/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_favourites_favourites_component__ = __webpack_require__("../../../../../src/app/components/user/favourites/favourites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_product_details_product_details_component__ = __webpack_require__("../../../../../src/app/components/user/product-details/product-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_delivery_delivery_component__ = __webpack_require__("../../../../../src/app/components/delivery/delivery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_payment_payment_component__ = __webpack_require__("../../../../../src/app/components/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/user/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_auth_register_register_component__ = __webpack_require__("../../../../../src/app/components/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_add_product_add_product_component__ = __webpack_require__("../../../../../src/app/components/admin/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/components/admin/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_admin_profile_admin_profile_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-profile/admin-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_admin_update_password_admin_update_password_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-update-password/admin-update-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_dropzone_wrapper__ = __webpack_require__("../../../../ngx-dropzone-wrapper/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_dropzone_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_ngx_dropzone_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__img_pipe__ = __webpack_require__("../../../../../src/app/img.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__category_pipe__ = __webpack_require__("../../../../../src/app/category.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__sort_pipe__ = __webpack_require__("../../../../../src/app/sort.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// firebase import






// notifications




var firebaseConfig = {
    apiKey: " AIzaSyDQCTzslEHPCFsaSvEzLtNXiGOCPoTu6B8 ",
    authDomain: "web-store-7d371.firebaseapp.com",
    databaseURL: "https://web-store-7d371.firebaseio.com",
    projectId: "web-store-7d371",
    storageBucket: "web-store-7d371.appspot.com",
    messagingSenderId: "493891340543"
};
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_user_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */] },
    { path: 'admin-dashboard', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'category/:name', component: __WEBPACK_IMPORTED_MODULE_9__components_categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'navbar', component: __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'favorite', component: __WEBPACK_IMPORTED_MODULE_11__components_user_favourites_favourites_component__["a" /* FavouritesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'product-detail/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_user_product_details_product_details_component__["a" /* ProductDetailsComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_16__components_user_user_profile_user_profile_component__["a" /* UserProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_18__components_auth_register_register_component__["a" /* RegisterComponent */] },
    { path: 'add-product', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_add_product_add_product_component__["a" /* AddProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_10__components_cart_cart_component__["a" /* CartComponent */] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_15__components_payment_payment_component__["a" /* PaymentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-product/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_admin_edit_product_edit_product_component__["a" /* EditProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'change-password', component: __WEBPACK_IMPORTED_MODULE_17__components_user_change_password_change_password_component__["a" /* ChangePasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'delivery', component: __WEBPACK_IMPORTED_MODULE_14__components_delivery_delivery_component__["a" /* DeliveryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin-profile', component: __WEBPACK_IMPORTED_MODULE_23__components_admin_admin_profile_admin_profile_component__["a" /* AdminProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin-password', component: __WEBPACK_IMPORTED_MODULE_24__components_admin_admin_update_password_admin_update_password_component__["a" /* AdminUpdatePasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
];
var dropzone_config = {
    url: 'https://httpbin.org/post',
    maxFilesize: 5,
    maxFiles: 100,
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    uploadMultiple: true,
    createImageThumbnails: true,
    autoProcessQueue: true,
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_auth_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_admin_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_favourites_favourites_component__["a" /* FavouritesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_user_product_details_product_details_component__["a" /* ProductDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_delivery_delivery_component__["a" /* DeliveryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_payment_payment_component__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_user_user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_user_change_password_change_password_component__["a" /* ChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_auth_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_admin_add_product_add_product_component__["a" /* AddProductComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_32__img_pipe__["a" /* ImgPipe */],
            __WEBPACK_IMPORTED_MODULE_21__components_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_admin_edit_product_edit_product_component__["a" /* EditProductComponent */],
            __WEBPACK_IMPORTED_MODULE_33__category_pipe__["a" /* CategoryPipe */],
            __WEBPACK_IMPORTED_MODULE_36__sort_pipe__["a" /* SortPipe */],
            __WEBPACK_IMPORTED_MODULE_23__components_admin_admin_profile_admin_profile_component__["a" /* AdminProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_admin_admin_update_password_admin_update_password_component__["a" /* AdminUpdatePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_menu_menu_component__["a" /* MenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__ngui_auto_complete__["NguiAutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_34_ngx_toastr__["b" /* ToastNoAnimationModule */],
            __WEBPACK_IMPORTED_MODULE_28_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_31_ngx_dropzone_wrapper__["DropzoneModule"].forRoot(dropzone_config),
            __WEBPACK_IMPORTED_MODULE_34_ngx_toastr__["c" /* ToastrModule */].forRoot({
                timeOut: 2000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
                toastComponent: __WEBPACK_IMPORTED_MODULE_34_ngx_toastr__["a" /* ToastNoAnimation */],
            }),
            __WEBPACK_IMPORTED_MODULE_35_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_30_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_25__services_auth_service_service__["a" /* AuthServiceService */],
            __WEBPACK_IMPORTED_MODULE_26__services_web_store_service__["a" /* WebStoreService */],
            __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/category.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoryPipe = (function () {
    function CategoryPipe() {
    }
    CategoryPipe.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLowerCase();
            return value = value.filter(function (el) {
                return el.productName.toLowerCase().indexOf(input) > -1;
            });
        }
        return input;
    };
    return CategoryPipe;
}());
CategoryPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'category',
    })
], CategoryPipe);

//# sourceMappingURL=category.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/add-product/add-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .image-container img{\n    max-height: 100%;\n    max-width: 100%;\n  /*margin: auto;*/\n}\n\n.image-container{\n    height: 150px;\n    width: 150px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 12px;\n    position: relative;\n}\n.remove{\n    color: red;\n    top: 0px;\n    text-decoration: none;\n    right: 12px;\n   \n}\n.dropzone-div{\n\tbackground-color: #f2f2f2;\n\theight: 100px;\n    width: 200px;\n    position: relative;\n    border: 1px dotted black;\n    margin-top: 30px;\n}\n.dropzone-text{\n\t\n\tmargin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%)\n}\n.dashboard{\n    position: relative;\n    top: 0;\n    height: 100vh;\n    overflow-x: hidden;\n}\n.sideBar-image{\n\n    background-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n    position: absolute;\n    z-index: -1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n    /* box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5); */\n    border-color: rgba(255, 255, 255, 1);\n}\n.sideBar{\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    width: 260px;\n    height: 100vh;\n}\n.main-content{\n    padding-top: 30px;\n}\n.panel-heading{\n    background-color: #006699 !important;\n    color: #fff;\n    font-size: 16px;\n}\n.panel-body{\n    margin: 0px auto;\n    box-shadow: 7px 7px 12px #9d9d9d; \n}\n.product{\n   display:inline-block;\n   margin-left: 29px;\n   margin-top: 15px;\n   position: relative;\n}\n.navBar{\n  border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n  color:black;\n}\n.dropzone-div{\n  cursor: pointer;\n}\n.sk-circle {\n  margin: 100px auto;\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  left: 50%;\n  top: 46%;\n}\n.sk-circle .sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.sk-circle .sk-child:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n          animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n}\n.sk-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg); }\n.sk-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg); }\n.sk-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n.sk-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n          transform: rotate(120deg); }\n.sk-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n          transform: rotate(150deg); }\n.sk-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n.sk-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n          transform: rotate(210deg); }\n.sk-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n          transform: rotate(240deg); }\n.sk-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n.sk-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n          transform: rotate(300deg); }\n.sk-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n          transform: rotate(330deg); }\n.sk-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n.sk-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n.sk-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n.sk-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n.sk-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s; }\n.sk-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s; }\n.sk-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n.sk-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s; }\n.sk-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s; }\n.sk-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s; }\n.sk-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@media all and (max-width: 768px){\n    .sideBar{\n      \n    }\n    .main-content{\n    height: auto;\n    min-height: 100%;\n    \n}\n.sideBar{\n        height: auto;\n        border-right: 0px solid #f0f0f0;\n        margin: 0 auto;\n        transition: 0.3s;\n        display: none;\n    }\n      .toggle-btn {\n        display: block;\n        cursor: pointer;\n        position: absolute;\n        left: 10px;\n        top: -38px;\n        z-index: 10 !important;\n        padding: 3px;\n        background-color: #ffffff;\n        color: #000;\n        width: 40px;\n        text-align: center;\n    }\n  .dropdownMenu{\n    display: none;\n  }\n}   \n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n\t<div class=\"navBar\">\n\t\t<app-nav></app-nav>\t\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"sideBar col-md-3\">\n\t\t\t<div id=\"Sidemenu\">\n\t\t\t<app-side-bar></app-side-bar>\n\t\t\t<div class=\"sideBar-image\"></div>\n\t\t\t</div>\n\t\t</div>\n\t<div class=\"col-md-9 main-content\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"addProduct panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">Add Product</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<form #f = \"ngForm\" (ngSubmit) = \"onAddProduct(f)\">\n\t\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"name\">Product Name: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"productName\" class=\"form-control\" placeholder=\"Name..\" [(ngModel)]='product.productName' #productName='ngModel' required=\"productName\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf = \"productName?.errors?.required && productName?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\tName Required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"description\">Description: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"2\" name=\"productDescription\"  required=\"productDescription\" placeholder=\"Description..\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]='product.productDescription' required=\"productDescription\" #productDescription='ngModel'></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf = \"productDescription?.errors?.required && productDescription?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\tDescription Required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"categories\">Category: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t<input auto-complete [source]=\"categories\" name=\"productCategory\" [(ngModel)]='product.productCategory'  #productCategory='ngModel'  required=\"productCategory\" class=\"form-control\" ngDefaultControl placeholder=\"Category\">\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf = \"productCategory?.errors?.required && productCategory?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t Required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"price\">Price: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"productPrice\" class=\"form-control\" placeholder=\"Price..\" [(ngModel)]='product.productPrice' required=\"productPrice\" #productPrice='ngModel'>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf = \"productPrice?.errors?.required && productPrice?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t Required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\"> \n\t\t\t\t\t\t\t\t<label for=\"form-control\">Product Image: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t<div [dropzone]=\"config\"  (error)=\"onUploadError($event)\" (processing)='onUploadProgress($event)' (success)=\"onUploadSuccess($event)\" \n\t\t\t\t\t\t\t\t\t(removedfile)='onRemoveImage($event)' >\n\t\t\t\t\t\t\t\t\t<div class=\"dz-message\" data-dz-message >\n\t\t\t\t\t\t\t\t\t\t<div class=\"dropzone-div\"><span class=\"dropzone-text\" >Add Product </span></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div action=\"/file-upload\" class=\"dropzone\" id=\"my-awesome-dropzone\">\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle\" *ngIf='loader'>\n  \t\t\t\t\t\t\t\t\t<div class=\"sk-circle1 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle2 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle3 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle4 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle5 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle6 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle7 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle8 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle9 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle10 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle11 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle12 sk-child\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngFor = 'let img of product.productImage; let i=index ' class=\"product\">\n\t\t\t\t\t\t\t\t\t<div class=\" image-container \" *ngIf='product.productImage' >\n\t\t\t\t\t\t\t\t\t\t<a  class=\"glyphicon glyphicon-remove remove dz-remove\"  (click)='onRemoveProductImage(img,i)' ></a>\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"img | img\" >\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button  type=\"submit\" class=\"btn btn-primary pull-right\" [disabled] = 'f.invalid'>Add Product</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\t"

/***/ }),

/***/ "../../../../../src/app/components/admin/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddProductComponent = (function () {
    function AddProductComponent(authService, wbService, router, dom, toststr) {
        this.authService = authService;
        this.wbService = wbService;
        this.router = router;
        this.dom = dom;
        this.toststr = toststr;
        this.product = {};
        this.loader = false;
        this.categories = [];
        this.addRemoveLinks = false;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
        });
        this.wbService.getCategories().subscribe(function (data) {
            var cat = [];
            data.map(function (obj) {
                obj = Object.assign([], obj);
                _this.categories.push(obj.name);
            });
        });
    };
    AddProductComponent.prototype.onAddProduct = function (f) {
        var _this = this;
        var $this = this;
        this.product.productName = f.value.productName;
        this.product.productDescription = f.value.productDescription;
        this.id = new Date().valueOf();
        this.product.id = this.id;
        this.authService.getAuth().subscribe(function (auth) {
            _this.wbService
                .addNewProduct(_this.product, _this.authUser.uid)
                .then(function (ref) {
                $this.$key = ref.key;
                $this.wbService.newProduct(ref.key, $this.product);
            });
            if (_this.categories.indexOf(_this.product.productCategory) === -1) {
                _this.wbService.productCategory(_this.product.productCategory);
            }
        });
        this.router.navigate(["admin-dashboard"]);
        this.toststr.success("New Product added", "Done");
    };
    AddProductComponent.prototype.onRemoveProductImage = function (img, i, $event) {
        if (confirm("sure")) {
            var img_1 = this.product.productImage;
            this.product.productImage.splice(i, 1);
        }
    };
    AddProductComponent.prototype.onRemoveImage = function ($event) { };
    AddProductComponent.prototype.onUploadSuccess = function ($event) {
        this.loader = true;
        var image = $event[0].dataURL;
        this.dom.bypassSecurityTrustResourceUrl(image);
        if (!this.product.productImage) {
            this.product.productImage = [];
            this.product.productImage.push(image);
        }
        else {
            this.product.productImage.push(image);
        }
        this.loader = false;
    };
    AddProductComponent.prototype.onUploadProgress = function ($event) {
        this.loader = true;
    };
    AddProductComponent.prototype.onUploadError = function ($event) {
        if (this.product.productImage.length === 5) {
            this.toststr.error("You cannot add more files", "Oops!!");
        }
    };
    AddProductComponent.prototype.selectCategory = function (c) {
        this.product.productCategory = c.name;
    };
    AddProductComponent.prototype.onItemAdded = function ($event) { };
    AddProductComponent.prototype.onItemRemoved = function ($event, f) { };
    return AddProductComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AddProductComponent.prototype, "addRemoveLinks", void 0);
AddProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-add-product",
        template: __webpack_require__("../../../../../src/app/components/admin/add-product/add-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/add-product/add-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["d" /* ToastrService */]) === "function" && _e || Object])
], AddProductComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n    max-width: 50%;\n    margin: 0 auto;\n    /*padding: 10px;*/\n}\n.image-td{\n    max-width: 80px;\n    max-height: 80px;\n}\n.dashboard{\n    position: relative;\n    top: 0;\n    height: 100vh;\n}\n.sideBar-image{\n\n    background-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n    position: absolute;\n    z-index: -1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n    /* box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5); */\n    border-color: rgba(255, 255, 255, 1);\n}\n.sideBar{\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    width: 260px;\n    overflow: auto;\n    height: 100vh;\n}\n.card-title{\n    display: -ms-grid;\n    display: grid;\n    margin-left: 15px;\n    padding-left: 15px;\n}\n.card-header{\n    margin: -20px 15px 0;\n    border-radius: 3px;\n    position: relative;\n    box-shadow:6px 5px 15px #9d9d9d;\n    top: 0;\n    overflow: hidden;\n    background-color: #ef5350;\n    padding: 15px;\n}\n.card{\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.14);\n    border-radius: 3px;\n    color: rgba(0,0,0, 0.87);\n    background: #fff;\n    border: 1px solid #ddd;\n\n}\n.main-content{\n\n}\n#Sidemenu{\n    padding: 10px;\n}\n.navBar{\n  \n    box-shadow: 6px 2px 12px #9d9d9d;\n    color:black;\n}\n.card-content{\n   padding: 15px 20px;\n}\n.table-responsive{\n    min-height: .01%;\n    overflow-x: auto;\n}\nh3, h4{\n    text-align: center;\n    margin: 0px;\n}\nh5{\n    text-align: center;\n    color: red;\n}\n.description{\n    padding: 10px 20px 15px 12px;\n}\nli a{\n    position: relative;\n    display: block;\n}\ntr td{\n    background-color: #ffffff;\n}\n.edit{\n    color: #42a98d;\n}\n.delete{\n    color: #f44336;\n    margin-left: 12px;\n}\n.product-table{\n    /*margin-top: 50px;*/\n    padding: 20px 13px;\n}\n.navbar-toggle{\n    background-color: #ddd;\n}\nspan.icon-bar{\n    background-color: black;\n}\n@media all and (max-width: 768px){\n    .sideBar{\n      \n    }\n    .main-content{\n    height: auto;\n    min-height: 100%;\n    \n}\n.sideBar{\n        height: auto;\n        border-right: 0px solid #f0f0f0;\n        margin: 0 auto;\n        transition: 0.3s;\n        display: none;\n    }\n      .toggle-btn {\n        display: block;\n        cursor: pointer;\n        position: absolute;\n        left: 10px;\n        top: -38px;\n        z-index: 10 !important;\n        padding: 3px;\n        background-color: #ffffff;\n        color: #000;\n        width: 40px;\n        text-align: center;\n    }\n  .dropdownMenu{\n    display: none;\n  }\n}   \n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n\t<div class=\"navBar\">\n\t\t<app-nav></app-nav>\n\t</div>\n\t<div class=\"row\">\n\t\t\n\t\t<div class=\"sideBar col-md-3\">\n        \t<div id=\"Sidemenu\">\n\t\t\t<app-side-bar></app-side-bar>\n\t\t\t<div class=\"sideBar-image\"></div>\n\t\t\t</div>\n\t\t</div>\n\t<div class=\"col-md-9 dd\" >\n\t\t<div class=\"main-content\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<div class=\"product-table\">\n\t\t\t\t<div class=\"card product-card\">\n\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t<h4 class=\"card-title\">List of Products</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-content table-responsive\">\n\t\t\t\t\t\t<table class =\"table table-striped\">\n\t\t\t\t\t\t\t<thead class=\"thead-inverse\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>Sr.No</th>\n\t\t\t\t\t\t\t\t\t<th>Product</th>\n\t\t\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t\t<th>Price</th>\n\t\t\t\t\t\t\t\t\t<th>Category</th>\n\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody >\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let product of product; let i = index \">\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t\t\t\t<td><div class=\"image-td\"><img src=\"{{product.productImage[0]}}\"></div></td>\n\t\t\t\t\t\t\t\t\t<td>{{product.productName}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{product.productPrice | currency:\"INR\" : true :'1.0-2'}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{product.productCategory}}</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<p href=\"\" class=\"glyphicon glyphicon-pencil edit\" [routerLink] =\"['/edit-product/'+product.key]\"></p>\n\t\t\t\t\t\t\t\t\t\t<p href=\"\" class=\"glyphicon glyphicon-trash delete\" (click)=\"onDeleteProduct(product)\"></p>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div>\n\t</div>\n</div>\n</div>\n<ng-template #noProducts>\n\t<h5>No products to show, \n\tadd some products</h5>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(router, wbService, authService, toaster) {
        this.router = router;
        this.wbService = wbService;
        this.authService = authService;
        this.toaster = toaster;
        this.product = {};
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
            _this.wbService.getProducts(_this.authUser.uid).subscribe(function (data) {
                _this.product = __WEBPACK_IMPORTED_MODULE_4_lodash__["values"](data);
            });
        });
    };
    AdminDashboardComponent.prototype.onDeleteProduct = function (prod) {
        if (confirm("Sure to delete?")) {
            this.wbService.deleteProduct(this.authUser.uid, prod);
            this.toaster.success("Product Removed");
        }
    };
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-admin-dashboard",
        template: __webpack_require__("../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-dashboard/admin-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["d" /* ToastrService */]) === "function" && _d || Object])
], AdminDashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-profile/admin-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard{\n  overflow-x: hidden;\n\t position: relative;\n    top: 0;\n    height: 100vh;\n    /*background-color: #ddd;*/\n}\n.sideBar-image{\n\n    background-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n    position: absolute;\n    z-index: -1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n    border-color: rgba(255, 255, 255, 1);\n}\n.sideBar{\n    margin: 0 auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    width: 260px;\n    overflow: auto;\n    height: 100vh;\n}\n.main-content{\n    padding-top: 35px;\n}\n.userProfile{\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n    padding: 35px 0;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border-radius: 6px;\n    color: rgba(0,0,0,.87);\n    background: #fff;\n    border: 1px solid #ddd;\n    /*padding:8px;*/\n}\n.panel-heading{\n    color:#fff;\n    margin: -50px 15px 20px 18px;\n    border-radius: 3px;\n    padding: 15px;\n    background-color: #ef5350;\n    position: relative;\n    box-shadow:6px 5px 15px #9d9d9d; \n}\n.btn{\n    background-color: #ef5350;\n    color: #fff;\n}\n.button{\n    padding-top: 18px;\n}\n.fa-user{\n    color:#fff;\n}\n.panel-default{\n    padding: 20px;\n}\ntextarea{\n    resize: none;\n}\n.form-control {\n  border: 0;\n  background-image: linear-gradient( #9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: rgba(0, 0, 0, 0);\n  transition: background 0s ease-out;\n  float: none;\n  box-shadow: none;\n  border-radius: 0;\n  font-weight: 400;\n  \n  }\n.form-control:focus { \n   outline: none;\n   background-image: linear-gradient( #55d4af, #55d4af), linear-gradient(#D2D2D2, #D2D2D2);\n   background-size: 100% 2px,100% 1px;\n   box-shadow: none;\n   transition: 0.5s;\n}\n.navBar{\n   border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n}\n.navbar-toggle{\n    background-color: #ddd;\n}\nbutton:focus {\n    outline: 0 !important;\n}\n.updateButton:active {\n    background-color: #20bd99;\n    color:#fff;\n}\n.updateButton:hover {\n    background-color: #20bd99;\n    color:#fff;\n}\n.updateButton {\n    background-color: #20bd99;\n    color:#fff;\n}\n.tx-danger{\n  color: red;\n}\nspan.icon-bar {\n    background-color: black;\n}\n@media all and (max-width: 768px){\n    .main-content{\n    height: auto;\n    min-height: 100%;\n    \n}\n.sideBar{\n        height: auto;\n        border-right: 0px solid #f0f0f0;\n        margin: 0 auto;\n        transition: 0.3s;\n        display: none;\n    }\n      .toggle-btn {\n        display: block;\n        cursor: pointer;\n        position: absolute;\n        left: 10px;\n        top: -38px;\n        z-index: 10 !important;\n        padding: 3px;\n        background-color: #ffffff;\n        color: #000;\n        width: 40px;\n        text-align: center;\n    }\n  .dropdownMenu{\n    display: none;\n  }\n\n}  \n@media only screen \n  and (max-width: 1024px) \n   {\n    .sideBar{\n        height: auto;\n        border-right: 0px solid #f0f0f0;\n        margin: 0 auto;\n        transition: 0.3s;\n        display: none;\n    }\n}\n /* @media only screen \n  and (min-width: 1024px) \n  and (max-height: 1366px) \n  and (orientation: portrait) \n  and (-webkit-min-device-pixel-ratio: 1.5) {\n\n    .sideBar{\n        margin: 0 auto;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1;\n        overflow: auto;\n        height: 100vh;\n    }\n} \n @media (min-width: 768px) and (max-width: 1024px) {\n  \n    .sideBar{\n        margin: 0 auto;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1;\n        overflow: auto;\n        height: 100vh;\n    }\n    \n  }  */\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-profile/admin-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n\t<div class=\"navBar\">\n\t\t<app-nav></app-nav>\n\t</div>\n\t<div class=\"row\">\n        <div class=\"sideBar col-md-3 col-sm-3\">\n\t\t\t<div id=\"Sidemenu\">\n\t\t\t<app-side-bar></app-side-bar>\n\t\t\t<div class=\"sideBar-image\"></div>\n\t\t\t</div>\n\t\t</div>\n\t<div class=\"col-md-9 col-sm-9 main-content\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-9 userProfile\">\n\t\t\t\t\t<div class=\"panel-heading\"><h4><i class=\"fa fa-user \" aria-hidden=\"true\"></i> Admin Profile</h4></div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<form #f = 'ngForm' (submit) = \"createAdminProfile(f)\" >\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"company\" >Company: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input  type=\"text\"  name=\"company\" class=\"form-control\" required placeholder=\"Company\" [(ngModel)]='profile.company' #company='ngModel'>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='company?.errors?.required && company?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tCompanay Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"firstName\" >First Name: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"firstName\" class=\"form-control\" required placeholder=\"FirstName\"  [(ngModel)]='profile.firstName' minlength=\"3\" #firstName='ngModel'>\n\t\t\t\t\t\t\t\t\t<div *ngIf='firstName?.errors?.required && firstName?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tFirst name Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='firstName?.errors?.minlength && firstName?.touched' class=\" alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tMust be minimum 3 characters\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"lastName\" >Last Name: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"lastName\" class=\"form-control\" required placeholder=\"LastName\"  [(ngModel)]='profile.lastName' minlength=\"3\" #lastName='ngModel'>\n\t\t\t\t\t\t\t\t\t<div *ngIf='lastName?.errors?.required && lastName?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tLast name Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='lastName?.errors?.minlength && lastName?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tMust be minimum 3 characters\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"phone\" >Contact No: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"phone\" class=\"form-control\" required placeholder=\"Contact Number\"  [(ngModel)]='profile.phone' minlength=\"10\" #phone='ngModel' maxlength=\"10\" pattern=\"[0-9]*\" >\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div [hidden]=\"phone.valid || phone.pristine\"\n      \t\t\t\t\t\t\t\t\t\tclass=\"alert alert-danger\">\n      \t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!phone.hasError('minlength')\">phone should be 10digit</div>\n      \t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!phone.hasError('required')\">phone is required</div>\n      \t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!phone.hasError('touched')\">phone is required</div>\n      \t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!phone.hasError('pattern')\">phone numberr should be only numbers</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"email\" >Email: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"email\"  name=\"email\" class=\"form-control\" required placeholder=\"email\" [(ngModel)]='profile.email' #email='ngModel' pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" >\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='email?.errors?.required && email?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tEmail Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div [hidden]=\"email.valid || email.pristine\"\n   \t\t\t\t\t\t\t\t\t\tclass=\"alert alert-danger\">\n  \t \t\t\t\t\t\t\t\t\t<div [hidden]=\"!email.hasError('required')\">Email is required</div>\n   \t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!email.hasError('pattern')\">Email format should be \n      \t\t\t\t\t\t\t\t\t<small><b>joe@abc.com</b></small>\n   \t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"address\" >Address: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<textarea  type=\"text\"  name=\"companey\" class=\"form-control\" required placeholder=\"Address\" [(ngModel)]='profile.address' #address='ngModel'></textarea>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='address?.errors?.required && address?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tAddress Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"city\" >City: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"city\" class=\"form-control\" required placeholder=\"city\" [(ngModel)]='profile.city' #city='ngModel'>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='city?.errors?.required && city?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tCity Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"country\" >Country: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"country\" class=\"form-control\" required placeholder=\"country\" [(ngModel)]='profile.country' #country='ngModel'>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='country?.errors?.required && country?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tCountry Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"postal code\" >Postal Code: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\"  name=\"postalCode\" class=\"form-control\" required placeholder=\"POSTAL CODE\" [(ngModel)]='profile.postalCode' #postalCode='ngModel' >\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='postalCode?.errors?.required && postalCode?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tPostal Code Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 button\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default pull-right updateButton\" type=\"submit\" [disabled]=f.invalid>Update Profile</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-profile/admin-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminProfileComponent = (function () {
    function AdminProfileComponent(router, toaster, wbService, authService) {
        this.router = router;
        this.toaster = toaster;
        this.wbService = wbService;
        this.authService = authService;
        this.profile = {};
    }
    AdminProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            _this.Authuser = auth;
            _this.wbService.getAdminProfile(auth.uid).valueChanges().subscribe(function (data) {
                _this.profile = data || {};
                console.log(_this.profile);
            });
        });
    };
    AdminProfileComponent.prototype.createAdminProfile = function (f) {
        this.profile.role = 'admin';
        this.wbService.adminProfile(this.profile, this.Authuser.uid);
    };
    return AdminProfileComponent;
}());
AdminProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-profile',
        template: __webpack_require__("../../../../../src/app/components/admin/admin-profile/admin-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-profile/admin-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["d" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _d || Object])
], AdminProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-update-password/admin-update-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard{\n    position: relative;\n    top: 0;\n    height: 100vh;\n}\n.sideBar-image{\n\n    background-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n    position: absolute;\n    z-index: -1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n    /* box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5); */\n    border-color: rgba(255, 255, 255, 1);\n}\n.sideBar{\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    width: 260px;\n    overflow: auto;\n    height: 100vh;\n}\n.main-content{\n    padding-top: 35px;\n}\n.card-title{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    color: #fff;\n}\n.card{\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border-radius: 6px;\n    color: rgba(0,0,0,.87);\n    background: #fff;\n    padding:8px;\n    border: 1px solid #ddd;\n}\n.card-header{\n    margin: -24px 15px 20px 18px;\n    border-radius: 3px;\n    padding: 15px;\n    background-color: #ef5350;\n    position: relative;\n    box-shadow:6px 5px 15px #9d9d9d;\n}\n.form-control {\n  border: 0;\n  background-image: linear-gradient( #9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: rgba(0, 0, 0, 0);\n  transition: background 0s ease-out;\n  float: none;\n  box-shadow: none;\n  border-radius: 0;\n  font-weight: 400;\n  \n  }\n.form-control:focus { \n   outline: none;\n   background-image: linear-gradient( #55d4af, #55d4af), linear-gradient(#D2D2D2, #D2D2D2);\n   background-size: 100% 2px,100% 1px;\n   box-shadow: none;\n   transition: 0.5s;\n}\n.form-group{\n    padding: 10px 25px;\n}\n.button{\n    background-color: #ef5350;\n    color: #FFFFFF;\n}\n.navBar{\n   border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n}\n@media all and (max-width: 768px){\n    .sideBar{\n      \n    }\n    .main-content{\n    height: auto;\n    min-height: 100%;\n    \n}\n.sideBar{\n        height: auto;\n        border-right: 0px solid #f0f0f0;\n        margin: 0 auto;\n        transition: 0.3s;\n        display: none;\n    }\n      .toggle-btn {\n        display: block;\n        cursor: pointer;\n        position: absolute;\n        left: 10px;\n        top: -38px;\n        z-index: 10 !important;\n        padding: 3px;\n        background-color: #ffffff;\n        color: #000;\n        width: 40px;\n        text-align: center;\n    }\n  .dropdownMenu{\n    display: none;\n  }\n}   \n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-update-password/admin-update-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n\t<div class=\"navBar\">\n\t<app-nav></app-nav>\n</div>\n<div class=\"row\">\n\t<div class=\"sideBar col-md-3\">\n    <div id=\"Sidemenu\">\n    <app-side-bar></app-side-bar>\n    <div class=\"sideBar-image\"></div>\n    </div>\n  </div>\n<div class=\"col-md-9 main-content\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 col-md-offset-2 \">\n\t\t\t\t<div class=\"panel-body  \">\n\t\t\t\t\t\n\t\t\t\t\t<form #f= 'ngForm' submit >\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Change Password</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"password\" >Old Password:</label>\n\t\t\t\t\t\t\t<input type=\"password\"  name=\"password\" required class=\"form-control\" placeholder=\"Old Password\" [(ngModel)]='password'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"password\" >New Password:</label>\n\t\t\t\t\t\t\t<input type=\"password\"  name=\"newPassword\" required class=\"form-control\" minlength=\"6\" placeholder=\"New Password\" [(ngModel)]='newPassword'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"password\" >Conform New Password:</label>\n\t\t\t\t\t\t\t<input type=\"password\"  name=\"passwordCheck\" required class=\"form-control\" minlength=\"6\" placeholder=\"New Password\" [(ngModel)]='passwordCheck'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default pull-right button\" (click)='onChangeUserPassword(f)'>Update Password</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-update-password/admin-update-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUpdatePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminUpdatePasswordComponent = (function () {
    function AdminUpdatePasswordComponent(router, wbService, authService, toast) {
        this.router = router;
        this.wbService = wbService;
        this.authService = authService;
        this.toast = toast;
    }
    AdminUpdatePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
        });
    };
    AdminUpdatePasswordComponent.prototype.onChangeUserPassword = function (f) {
        var _this = this;
        var newPassword = f.value.newPassword;
        var checkPassword = f.value.passwordCheck;
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
        if (checkPassword !== newPassword) {
            this.toast.error("Password did not match. please try again", "Oops!!");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]()
                .currentUser.reauthenticateWithCredential(__WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].EmailAuthProvider.credential(__WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.email, f.value.password))
                .then(function (res) {
                user
                    .updatePassword(newPassword)
                    .then(function (res) {
                    _this.toast.success("Password Updated");
                    _this.router.navigate(["admin-dashboard"]);
                })
                    .catch(function (err) {
                    _this.toast.error(err.message);
                });
            })
                .catch(function (err) {
                _this.toast.error(err.message, "Sorry");
            });
        }
    };
    return AdminUpdatePasswordComponent;
}());
AdminUpdatePasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-admin-update-password",
        template: __webpack_require__("../../../../../src/app/components/admin/admin-update-password/admin-update-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-update-password/admin-update-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["d" /* ToastrService */]) === "function" && _d || Object])
], AdminUpdatePasswordComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-update-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/edit-product/edit-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-container img{\n    max-height: 100%;\n    max-width: 100%;\n    /*margin: auto;*/\n}\n\n.image-container{\n    height: 150px;\n    width: 150px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 12px;\n    position: relative;\n}\n.remove{\n    color: red;\n    top: 0px;\n    text-decoration: none;\n    right: 7px;\n   \n}\n.dropzone-div{\n    background-color: #f2f2f2;\n    height: 100px;\n    width: 200px;\n    position: relative;\n    border: 1px dotted black;\n    margin-top: 30px;\n}\n.dropzone-text{\n    \n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%)\n}\n.dashboard{\n    position: relative;\n    top: 0;\n    height: 100vh;\n}\n.sideBar-image{\n\n    background-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n    position: absolute;\n    z-index: -1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n    box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 1);\n}\n.sideBar{\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    width: 260px;\n    height: 100vh;\n    box-shadow: 6px 2px 12px #9d9d9d;\n}\n.main-content{\n    padding-top: 30px;\n}\n.navBar{\n   border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n  color:black;\n}\n.panel-body{\n    margin: 0px auto;\n    box-shadow: 7px 7px 12px #9d9d9d; \n}\n.panel-heading{\n    background-color: #006699 !important;\n    color: #fff;\n    font-size: 16px;\n}\n.product{\n   display:inline-block;\n   margin-left: 29px;\n}\n.dz-message{\n    cursor: pointer;\n}\n.sk-circle {\n  margin: 100px auto;\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  left: 50%;\n  top: 46%;\n}\n.sk-circle .sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.sk-circle .sk-child:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n          animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n}\n.sk-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n          transform: rotate(30deg); }\n.sk-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg); }\n.sk-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n.sk-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n          transform: rotate(120deg); }\n.sk-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n          transform: rotate(150deg); }\n.sk-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n.sk-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n          transform: rotate(210deg); }\n.sk-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n          transform: rotate(240deg); }\n.sk-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n.sk-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n          transform: rotate(300deg); }\n.sk-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n          transform: rotate(330deg); }\n.sk-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n.sk-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n.sk-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n.sk-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n.sk-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s; }\n.sk-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s; }\n.sk-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n.sk-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s; }\n.sk-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s; }\n.sk-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s; }\n.sk-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@media all and (max-width: 768px){\n    .sideBar{\n      \n    }\n    .main-content{\n    height: auto;\n    min-height: 100%;\n    \n}\n.sideBar{\n        height: auto;\n        border-right: 0px solid #f0f0f0;\n        margin: 0 auto;\n        transition: 0.3s;\n        display: none;\n    }\n      .toggle-btn {\n        display: block;\n        cursor: pointer;\n        position: absolute;\n        left: 10px;\n        top: -38px;\n        z-index: 10 !important;\n        padding: 3px;\n        background-color: #ffffff;\n        color: #000;\n        width: 40px;\n        text-align: center;\n    }\n  .dropdownMenu{\n    display: none;\n  }\n}   \n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n\t<div class=\"navBar\">\n\t\t<app-nav></app-nav>\t\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"sideBar col-md-3\">\n\t\t<app-side-bar></app-side-bar>\n\t\t<div class=\"sideBar-image\"></div>\n\t</div>\n\t<div class=\"col-md-9 main-content\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"addProduct panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">Edit Product: {{product.productName}}</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<form #f = \"ngForm\" (ngSubmit) = \"onUpdateProduct(f)\">\n\t\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"name\">Product Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"productName\" class=\"form-control\" placeholder=\"name..\" [(ngModel)]='product.productName' #productName='ngModel' required=\"productName\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf = \"productName?.errors?.required && productName?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\tName Required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"description\">Description</label>\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"2\" name=\"productDescription\"  required=\"productDescription\" placeholder=\"description..\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]='product.productDescription' required=\"productDescription\" #productDescription='ngModel'></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf = \"productDescription?.errors?.required && productDescription?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\tDescription Required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"categories\">Category list (select one):</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\" id=\"categories\"  required=\"productCategory\" name=\"productCategory\" [(ngModel)]='product.productCategory' name=\"productCategory\" required=\"productCategory\" #productCategory='ngModel'>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf = \"productCategory?.errors?.required && productCategory?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t Required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"price\">Price</label>\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"productPrice\" class=\"form-control\" placeholder=\"price..\" [(ngModel)]='product.productPrice' required=\"productPrice\" #productPrice='ngModel'>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf = \"productPrice?.errors?.required && productPrice?.touched\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t Required\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div [dropzone]=\"config\" (error)=\"onUploadError($event)\" (processing)='onUploadProgress($event)' (success)=\"onUploadSuccess($event)\" >\n\t\t\t\t\t\t\t\t\t<div class=\"dz-message\" data-dz-message >\n\t\t\t\t\t\t\t\t\t\t<div class=\"dropzone-div\"><span class=\"dropzone-text\" >Add Product</span></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div action=\"/file-upload\" class=\"dropzone\" id=\"my-awesome-dropzone\">\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle\" *ngIf='loader'>\n  \t\t\t\t\t\t\t\t\t<div class=\"sk-circle1 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle2 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle3 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle4 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle5 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle6 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle7 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle8 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle9 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle10 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle11 sk-child\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"sk-circle12 sk-child\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngFor = 'let img of product.productImage; let i=index ' class=\"product\">\n\t\t\t\t\t\t\t\t\t\t<div class=\" image-container \" *ngIf='product.productImage' >\n\t\t\t\t\t\t\t\t\t\t<a class=\"glyphicon glyphicon-remove remove\" (click)='onRemoveProductImage(img,i)'></a>\n\t\t\t\t\t\t\t\t\t\t\t<img [src]=\"img | img\" >\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button  type=\"submit\" class=\"btn btn-success pull-right\" [disabled]='f.invalid'>Update</button>\n\t\t\t\t\t\t\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\t"

/***/ }),

/***/ "../../../../../src/app/components/admin/edit-product/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditProductComponent = (function () {
    function EditProductComponent(router, route, wbService, authService, dom, toastr) {
        this.router = router;
        this.route = route;
        this.wbService = wbService;
        this.authService = authService;
        this.dom = dom;
        this.toastr = toastr;
        this.product = [];
        this.loader = false;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$key = this.route.snapshot.params["id"];
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
            _this.wbService
                .getProduct(_this.authUser.uid, _this.$key)
                .subscribe(function (data) {
                _this.product = data;
            });
        });
    };
    EditProductComponent.prototype.onUpdateProduct = function () {
        this.wbService.updateProduct(this.authUser.uid, this.$key, this.product);
        this.router.navigate(["admin-dashboard"]);
        this.toastr.success("Product Updated!");
    };
    EditProductComponent.prototype.onRemoveProductImage = function (i) {
        if (confirm("sure")) {
            this.product.productImage.splice(i, 1);
        }
    };
    EditProductComponent.prototype.onUploadSuccess = function ($event) {
        this.loader = true;
        var image = $event[0].dataURL;
        this.dom.bypassSecurityTrustResourceUrl(image);
        if (!this.product.productImage) {
            this.product.productImage = [];
            this.product.productImage.push(image);
        }
        else {
            this.product.productImage.push(image);
        }
        this.loader = false;
    };
    EditProductComponent.prototype.onUploadProgress = function () {
        this.loader = true;
    };
    EditProductComponent.prototype.onUploadError = function () { };
    return EditProductComponent;
}());
EditProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-edit-product",
        template: __webpack_require__("../../../../../src/app/components/admin/edit-product/edit-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/edit-product/edit-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["d" /* ToastrService */]) === "function" && _f || Object])
], EditProductComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=edit-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4{\n\ttext-align: center;\n\tmargin-top: 25px;\n\n}\n.loginBox{\n\tborder: 1px solid #f2f2f2;\n\tbox-shadow: 5px 7px 9px grey;\n\tpadding: 0px;\n}\n.google {\n    color: #dd4b39 !important;\n    margin-bottom: 8px;\n    /*color: white;*/\n}\n.facebook {\n    color: #006699 !important;\n    margin-bottom: 8px;\n    width: 50px;\n}\n.emailButton{\n\ttext-align: center;\n\tmargin-bottom: 10px;\n\tcolor: #42a98d;\n}\n.login{\n\t/* display: flex; */\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n  height: 70vh;\n  margin-top: 35px;\n}\n.panel-heading{\n\tbackground-color:#ccc;\n}\n\n.panel-footer{\n\tbackground-color: #ffffff;\n\tborder: 0px solid #ffffff;\n}\n.registerButton{\n\tcolor: #31708f;\n\tcursor: pointer;\n}\n.registerForm{\n\tpadding: 10px;\n}\n.registerHeadder{\n\tmargin-bottom: 20px;\n}\n.card-title{\n\tmargin-top: 10px;\n    margin-bottom: 10px;\n    color: #ddd;\n}\n.card{\n\t display: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border-radius: 6px;\n    color: rgba(0,0,0,.87);\n    background: #fff;\n    padding:8px;\n}\n.card-header{\n\tmargin: -41px 15px 20px 18px;\n    border-radius: 3px;\n    padding: 15px;\n    background-color: #42a98d;\n    position: relative;\n    box-shadow:6px 5px 15px #9d9d9d;\n}\n.social{\n\tmargin-left: 5px;\n\tmargin-right: 5px;\n}\n .input-group{\n\tpadding: 0px 8px 0px 8px;\n\tdisplay: table;\n}\ninput{\n\t border: none;\n    background:none;\n}\n.input-group-addon{\n\tborder:none;\n\tbackground-color: transparent;\n}\n.form-group{\n\t\n    margin: 20px 0 0 0;\n}\n.fa-user,.fa-lock{\n\tmargin-top: 18px;\n}\n.card-login{\n\tmargin: 13px 0 31px 0;\n\tpadding: 10px 20px 15px 12px;\n}\n.background {\n\tbackground-image: url(" + __webpack_require__("../../../../../src/assets/image/login.jpg") + ");\n\tposition: absolute;\n    z-index: -1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\t\n   \t-webkit-filter: brightness(50%);\t\n   \t        filter: brightness(50%);\n}\nh5{\n\ttext-align: center;\n\t/*margin-top: 15px;*/\n\tcolor: #999;\n}\n.loginForm{\n\t -webkit-animation: fadein 5s; \n      \n}\n@keyframes fadein {\n    from { opacity: 0; \n    0% {\n    position: absolute;\n    top: -3rem;\n    opacity: 0;\n  }\n\n  75% {\n    position: absolute;\n    top: 45%;\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n\n    to   { opacity: 1; }\n}\n}\n@-webkit-keyframes fadein {\n     from { opacity: 0; \n    0% {\n    position: absolute;\n    top: -3rem;\n    opacity: 0;\n  }\n\n  75% {\n    position: absolute;\n    top: 45%;\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n\n    to   { opacity: 1; }\n}\n\n}\n.form-control {\n  border: 0;\n  background-image: linear-gradient( #9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: rgba(0, 0, 0, 0);\n  transition: background 0s ease-out;\n\n  float: none;\n  box-shadow: none;\n  border-radius: 0;\n\n  font-weight: 400;\n}\n\n.form-control:focus { \n   outline: none;\n   background-image: linear-gradient( #55d4af, #55d4af), linear-gradient(#D2D2D2, #D2D2D2);\n   background-size: 100% 2px,100% 1px;\n   box-shadow: none;\n   transition: 0.5s;\n}\n.material-icons{\n  margin-top: 17px;\n}\n.button:focus { \n  outline: none;\n  color: #42a98d\n }\n .btn-link{\n  color: #42a98d\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<app-navbar></app-navbar>\n</div>\n<div class=\"background\"></div>\n<div class=\"container login\">\n\t<div class=\"row\">\n\t\t<div class=\" col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n\t\t\t<div class=\"loginForm panel-body \">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"card card-login\">\n\t\t\t\t\t\t<div class=\"card-header text-center\">\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Login to Web Store</h4>\n\t\t\t\t\t\t\t<div class=\"social-login\">\n\t\t\t\t\t\t\t\t<div class=\"btn btn social\">\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a  class=\" facebook\" (click)=\"signInWithFacebook()\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook fa-2x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"btn btn social\">\n\t\t\t\t\t\t\t\t\t<a type=\"button\" class=\" google \" (click)=\"signInWithGoogle()\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google fa-2x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"text\"><h5>OR</h5>\n\t\t\t\t\t\t<div class=\"card-login\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"material-icons\">email</i></span>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"email address\" [(ngModel)]=\"email\" name=\"email\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"material-icons\">https</i></span>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\" emailButton\">\n\t\t\t\t\t\t\t<button  type=\"submit\" class=\"btn btn-link button\" (click)=\"signInWithEmail()\">\n\t\t\t\t\t\t\t<h4> Login</h4>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(wbService, authService, router, toaster) {
        this.wbService = wbService;
        this.authService = authService;
        this.router = router;
        this.toaster = toaster;
        this.profile = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['']);
            }
        });
    };
    LoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.authService.signInWithFacebook()
            .then(function (res) {
            _this.router.navigate(['']);
            _this.toaster.success('Logged-in successfully');
        })
            .catch(function (err) {
            _this.router.navigate(['/login']);
            _this.toaster.error(err.message, 'Sorry');
        });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle()
            .then(function (res) {
            _this.router.navigate(['']);
            _this.toaster.success('Logged-in successfully');
        })
            .catch(function (err) {
            _this.router.navigate(['/login']);
            _this.toaster.error(err.message, 'Sorry');
        });
    };
    LoginComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.authService.signInWithEmail(this.email, this.password)
            .then(function (res) {
            var login = _this.wbService.getUserInfo(res.uid).valueChanges().subscribe(function (data) {
                return _this.profile = data;
            });
            if (_this.profile.role === 'guest') {
                _this.toaster.success('Logged-in successfully');
                _this.router.navigate(['']);
            }
            else {
                _this.router.navigate(['admin-dashboard']);
            }
        })
            .catch(function (err) {
            _this.toaster.error(err.message, 'Sorry');
            _this.router.navigate(['/login']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/auth/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["d" /* ToastrService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/auth/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".registerHeadder{\n\tmargin-top: -19px;\n    margin-bottom:-2px;\n    color: #ddd;\n}\n.registerBackground{\n\tbackground-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n\tposition: absolute;\n    z-index: -1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\t\n   \t-webkit-filter: brightness(50%);\t\n   \t        filter: brightness(50%);\n}\n.google {\n    color: #dd4b39 !important;\n    margin-bottom: 8px;\n}\n.facebook {\n    color: #006699 !important;\n    margin-bottom: 8px;\n    width: 50px;\n}\n.social{\n    margin-left: 5px;\n    margin-right: 5px;\n}\n.card-header{\n    text-align: center;\n    margin: -41px 15px 20px 18px;\n    border-radius: 3px;\n    padding: 15px;\n    background-color: #42a98d;\n    position: relative;\n    box-shadow:6px 5px 15px #9d9d9d;\n}\n.panel-body{\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 78px 0;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border-radius: 6px;\n    color: rgba(0,0,0,.87);\n    background: #fff;\n    padding:8px;\n}\n.registerForm{\n    padding: 12px;\n}\nh5{\n    text-align: center;\n    color: #999;\n}\nh4{\n    text-align: center;\n    margin-top: 25px;\n}\n.emailButton{\n    text-align: center;\n    margin-bottom: 10px;\n    color: #42a98d;\n}\n.form-control {\n  border: 0;\n  background-image: linear-gradient( #9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: rgba(0, 0, 0, 0);\n  transition: background 0s ease-out;\n  float: none;\n  box-shadow: none;\n  border-radius: 0;\n  font-weight: 400;\n  \n  }\n.form-control:focus { \n   outline: none;\n   background-image: linear-gradient( #55d4af, #55d4af), linear-gradient(#D2D2D2, #D2D2D2);\n   background-size: 100% 2px,100% 1px;\n   box-shadow: none;\n   transition: 0.5s;\n}\n.input-group-addon{\n    border:none;\n    background-color: transparent;\n}\n.button:focus { \n  outline: none;\n  color: #42a98d\n }\n .btn-link{\n  color: #42a98d\n }\n .register{\n  /* display: flex; */\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 70vh;\n  margin-top: 35px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<app-navbar></app-navbar>\n</div>\n<div class=\"registerBackground\"></div>\n<div class=\"container register\">\n\t<div class=\"row\">\n\t\t<div class=\" col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"panel-heading registerHeadder\"><h4>Register</h4></div>\n\t\t\t\t<div class=\"social-login\">\n\t\t\t\t\t<div class=\"btn btn social\">\n\t\t\t\t\t\t<a  class=\" facebook\" (click)=\"signInWithFacebook()\">\n\t\t\t\t\t\t\t<i class=\"fa fa-facebook fa-2x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"btn btn social\">\n\t\t\t\t\t\t<a type=\"button\" class=\" google \" (click)=\"signInWithGoogle()\">\n\t\t\t\t\t\t\t<i class=\"fa fa-google fa-2x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"text\"><h5>OR</h5>\n\t\t\t<form  (submit)=\"onRegisterUser()\">\n\t\t\t\t<div class=\"registerForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"material-icons\">email</i></span>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"email address\" [(ngModel)]=\"email\" name=\"email\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"material-icons\">https</i></span>\n\t\t\t\t\t\t\t<input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\" emailButton\">\n\t\t\t\t\t\t<button  type=\"submit\" class=\"btn btn-link button\">\n\t\t\t\t\t\t\t<h4> Register</h4>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(wbservice, authService, router) {
        this.wbservice = wbservice;
        this.authService = authService;
        this.router = router;
        this.profile = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['']);
            }
        });
    };
    RegisterComponent.prototype.onRegisterUser = function () {
        var _this = this;
        this.authService.newUser(this.email, this.password)
            .then(function (res) {
            _this.profile.role = 'guest';
            _this.authService.getAuth().subscribe(function (auth) {
                _this.wbservice.newUserProfile(_this.profile, auth.uid);
            });
            _this.router.navigate(['']);
        })
            .catch(function (err) {
            _this.router.navigate(['/login']);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/auth/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/auth/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n    max-width: 50%;\n    margin: 0 auto;\n    /*padding: 10px;*/\n}\n.image-td{\n    max-width: 80px;\n    max-height: 80px;\n}\n.dashboard{\n    position: relative;\n    top: 0;\n    height: 100vh;\n    /*background-color: #eee;*/\n}\n.sideBar-image{\n\n    background-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n    box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 1);\n}\n.sideBar{\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    width: 260px;\n    overflow: auto;\n    box-shadow: 6px 2px 12px #9d9d9d;\n}\n.card-title{\n    display: -ms-grid;\n    display: grid;\n    margin-left: 15px;\n    padding-left: 15px;\n}\n.card-header{\n    margin: -20px 15px 0;\n    border-radius: 3px;\n    position: relative;\n    box-shadow:6px 5px 15px #9d9d9d;\n    top: 0;\n    overflow: hidden;\n    background-color: #ef5350;\n    padding: 15px;\n    color: #fff;\n}\n.card{\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 10px 24px 0 rgba(0, 0, 0, 0.14);\n    border-radius: 3px;\n    color: rgba(0,0,0, 0.87);\n    background: #fff;\n\n}\n.navBar{\n    color:black;\n}\n.card-content{\n   padding: 15px 20px;\n}\n.table-responsive{\n    min-height: .01%;\n    overflow-x: auto;\n}\nh3, h4{\n    text-align: center;\n    margin: 0px;\n}\nh5{\n    text-align: center;\n    color: red;\n}\n.description{\n    padding: 10px 20px 15px 12px;\n}\ntr td{\n    background-color: #ffffff;\n}\n.edit{\n    color: #42a98d;\n}\n.delete{\n    color: #f44336;\n    margin-left: 12px;\n    cursor: pointer;\n}\n.product-table{\n    margin-top: 50px;\n    padding: 20px 13px;\n}\n.backToMain{\n    background-color: transparent;\n}\n.panel-footer{\n    background-color: #fff\n}\n.checkOutCart{\n   background-color: #20bd99;\n  color: #fff  \n}\n.product-description{\n    text-overflow: ellipsis;\n    width: 550px;\n    padding-right: 10px ;\n\n}\ninput{\n    width: 59px;\n    padding: 2px;\n}\n.navBar{\n   border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n  color:black;\n}\nbutton:focus {\n    outline: 0 !important;\n}\n.checkOutCart:active {\n    background-color: #20bd99;\n    color:#fff;\n}\n.checkOutCart {\n    background-color: #20bd99;\n    color:#fff;\n}\n.btn-success{\n  padding: 0px 10px;\n  font-size: 14px;\n  cursor: auto;\n}\n.btn-success b{\n    font-size: 14px;\n}\n.btn-xs{\n   background-color: #bdbcbc;\n   -webkit-border-radius: 100%; \n}\n.payment-card{\n    display: inline-block;\n    position: relative;\n    width: 100%;\n   \n    /* margin: 25px 0; */\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border-radius: 6px;\n    color: rgba(0,0,0,.87);\n    background: #fff;\n    padding:8px;\n    border: 1px solid #ddd;\n}\n.payment-card-header{\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n}\n.payment-card-body{\n    padding: 8px;\n    margin: 5px;\n}\n.col-md-1{\n    margin-top: 56px;\n}\n.total-items{\n    font-size: 20px;\n    font-weight: 600;\n    border-bottom:1px solid #ddd;\n    padding: 5px;\n}\n.total-amount{\n    font-size: 15px;\n    font-weight: 500;\n    border-right:1px solid  #ddd;\n    padding: 5px;\n}\n@media only screen and (max-width:768px)  {\n    .col-md-1{\n        margin-top:10px;\n    }\n    .product-table{\n        margin-top: 5px;\n        padding: 20px 13px;\n    }\n    .check-out-button{\n        float: none !important;\n    }\n    .total-amount{\n        float: none !important;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n\t<div class=\"navBar\">\n\t\t<app-nav></app-nav>\n\t</div>\n\t<div class=\"row\">\n\n\t\t<div class=\"col-md-12 main-content\">\n\t\t\t<!-- <div class=\"col-md-10 col-md-offset-1\"> -->\n\t\t\t\t<div class=\"product-table\">\n\t\t\t\t\t<div class=\"card product-card\">\n\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t<span class=\"card-title\">\n\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Your Cart ({{cart.length}})</h4>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-content table-responsive\">\n\t\t\t\t\t\t\t<table *ngIf='cart?.length > 0; else noProducts' class=\"table table-striped\">\n\t\t\t\t\t\t\t\t<thead class=\"thead-inverse\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Sr.No</th>\n\t\t\t\t\t\t\t\t\t\t<th>Product Info</th>\n\t\t\t\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t\t\t<th>Price</th>\n\t\t\t\t\t\t\t\t\t\t<th>Category</th>\n\t\t\t\t\t\t\t\t\t\t<th>Quantity</th>\n\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let product of cart; let i = index \">\n\t\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"image-td\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{product.productImage[0]}}\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t<b>{{product.productName}}</b>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"product-description\">{{product.productDescription}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-success fa fa-star\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<b> {{product.rating | number: '1.1-1'}}</b>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{product.productPrice | currency:\"INR\" : true}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{product.productCategory}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"quantity\" value=\"1\" [(ngModel)]=\"product.quantity\" (change)=\"onChange($event)\">\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<p href=\"\" class=\"glyphicon glyphicon-trash delete\" (click)=\"onDeleteProduct(product)\"></p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<div class=\"panel-footer col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 col-xs-6 \">\n\t\t\t\t\t\t\t\t\t<button routerLink='' class=\"btn btn-default backToMain\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-long-arrow-left\" aria-hidden=\"true\"></i> Continue Shopping</button>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-md-2  col-xs-6 pull-right check-out-button\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default checkOutCart\" routerLink='/delivery'>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Check Out</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 col-xs-12 pull-right total-amount\">\n\t\t\t\t\t\t\t\t\t<span> Amount Payable : {{total | currency:\"INR\" : true :'1.0-2'}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t<!-- </div> -->\n\t\t</div>\n\t</div>\n</div>\n<ng-template #noProducts>\n\t<h5>No products to show, add some products</h5>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartComponent = (function () {
    function CartComponent(wbService, authService, toaster) {
        this.wbService = wbService;
        this.authService = authService;
        this.toaster = toaster;
        this.cart = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
            _this.wbService.getUserCartProducts(_this.authUser.uid).subscribe(function (data) {
                _this.cart = __WEBPACK_IMPORTED_MODULE_3_lodash__["values"](data);
                data.map(function (obj) {
                    obj.quantity = 1;
                    var count = 0;
                    var oldRating = 0;
                    if (typeof obj.reviews !== typeof undefined) {
                        Object.values(obj.reviews).forEach(function (key) {
                            if (key.rating) {
                                var rat = Number(key.rating);
                                oldRating = oldRating + rat;
                                count++;
                            }
                        });
                        obj.rating = oldRating / count;
                    }
                    else {
                        obj.rating = 0;
                    }
                    _this.getTotal();
                });
            });
        });
    };
    CartComponent.prototype.onDeleteProduct = function (product) {
        if (confirm('Sure to Remove from cart?')) {
            this.wbService.removeFromCart(this.authUser.uid, product);
            this.toaster.success('Removed from Cart');
        }
    };
    CartComponent.prototype.getTotal = function () {
        var total = 0;
        this.cart.forEach(function (items) {
            var amount = items.productPrice * items.quantity;
            total = total + amount;
        });
        this.total = total;
    };
    CartComponent.prototype.onChange = function () {
        this.getTotal();
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["d" /* ToastrService */]) === "function" && _c || Object])
], CartComponent);

var _a, _b, _c;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\n\tlist-style: none;\n}\n.dashboard{\n\tposition: relative;\n    top: 0;\n  \n}\n.sidebar{\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 250px;\n    height: auto;\n}\n.side-menu{\n    overflow: hidden;\n    padding-top: 0px;\n    min-height:auto;\n    margin-top: 10px;\n}\n.card-image{\n    height: 200px;\n    width: 200px;\n    margin: 0 auto;\n    text-align: center;\n    padding: 10px;\n    overflow: hidden;\n\n}\n.card-image img{\n    max-height: 100%;\n    padding: 10px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    background-color: transparent;\n    max-width: 100%\n}\n.card{\n    display: inline-block;\n    background: #fff;\n    padding: 5px;\n    margin-bottom: 30px;\n    margin-top: 12px;\n    height: 322px;\n    cursor: pointer;\n}\n.card:hover  {\n  box-shadow: 0px 6px 29px #9d9d9d;\n}\n.product-name{\n    text-overflow: ellipsis;\n    text-align: center;\n}\n.product-price{\n  text-align: center;\n  padding: 10px 0px;\n  font-size: 17px;\n  font-weight: 500;\n  \n}\n.sidebar-heading{\n  margin-top: 0px;\n  padding: 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.sidebar ul{\n  padding: 0px;\n}\n.category-name{\n  text-align: center;\n  \n}\n.toggle-btn{\n  display: none;\n}\na{\n  text-decoration: none;\n}\np{\n    font-size: 14px;\n    width: 200px;\n    text-align: center;\n}\n.menu-heading{\n  color: black !important ;\n  font-size: 16px;\n}\n.category-list{\n color: #7f7f7f;\n margin: 7px 0;\npadding-left: 10px;\ncursor: pointer;\n}\n.favourite-list, .cart-list, .profile-list {\n  margin-bottom: 7px;\n  border-bottom: 1px solid #ddd;\n  padding: 11px;\n  color: #7f7f7f;\n  font-size: 16px;\n  cursor: pointer;\n}\n.sidebar-header{\n  border-bottom: 1px solid #ddd;\n  font-size: 21px;\n  padding: 11px;\n}\n.collapsed{\n margin-bottom: 7px;\nborder-bottom: 1px solid #ddd;\n  padding: 11px;\n}\n#new{\n  border-bottom: 1px solid #ddd;\n}\n.navBar{\n   border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n}\n.panel-body{\n    padding: 0px;\n}\n.favourite{\n    margin: 10px 10px 0 0;\n    color: darkgrey;\n}\n.active{\n    color: red;\n}\n.product-name{\n    text-overflow: ellipsis;\n    text-align: center;\n}\n.main-content{\n  padding-top: 38px;\n}\n.btn-success{\n  padding: 0px 10px;\n  font-size: 14px;\n  cursor: auto;\n}\n.btn-default{\n  padding: 0px 10px;\n  font-size: 14px;\n  cursor: auto;\n  background-color: #e6e6e6;\n}\n@media only screen and (max-width:768px) {\n  .side-menu {\n    /* width: auto;\n    float: right;\n    display: block; */\n    z-index: 999999;\n    position: absolute;\n    background: #ffffff;\n    padding: 3px;\n    border: 1px solid #dedede;\n    text-align: justify;\n    top: 9%;\n    left: 24px;\n  }\n  .sidebar {\n    /* width: auto; */\n    float: right;\n    position: absolute;\n    display: block;\n  }\n  .product-container {\n    height: auto;\n    display: block;\n  }\n  .toggle-btn {\n    display: block;\n  }\n.main-container {\n  /* position: absolute; */\n  padding: 0px;\n  text-align: center;\n}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n  <div class=\"navBar\">\n    <app-nav></app-nav>\n  </div>\n  <div class=\"row\">\n    <div class=\"container\">\n      <div class=\"main-content\">\n        <div class=\" col-md-3 col-xs-12 sidebar\">\n          <div class=\"side-menu\">\n            <div class=\"sidebar-header\" data-toggle=\"collapse\" data-target=\".dropdownMenu\">\n              <span (click) = \"toggleDropdown()\">Filter <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></span>\n            </div>\n            <div class=\"dropdownMenu\" *ngIf = \"showDropdown\">\n              <div id=\"dropdown\">\n                <li class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#sort\">\n                  <a><span class=\"menu-heading\"> Sort By </span><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n                </li>\n                <ul class=\"sub-menu collapse\" id=\"sort\">\n                  <a>\n                    <li>\n                      <h5 class=\"category-list\" (click)=\"sortPopular()\">\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        Popularity</h5>\n                    </li>\n                    <li>\n                      <h5 class=\"category-list\" (click)=\"sortLowProduct()\">\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        Price Low to High</h5>\n                    </li>\n                    <li>\n                      <h5 class=\"category-list\" (click)=\"sortHighProduct()\">\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        Price High to Low</h5>\n                    </li>\n                  </a>\n                </ul>\n                <li class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#account\">\n                  <a><span class=\"menu-heading\">My Account </span><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n                </li>\n                <ul class=\"sub-menu collapse\" id=\"account\">\n                  <a>\n                    <li>\n                      <h5 class=\"favourite-list\" routerLink='/favorite'>\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        Wishlist</h5>\n                    </li>\n                    <li>\n                      <h5 class=\"cart-list\" routerLink='/cart'>\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        Cart</h5>\n                    </li>\n                    <li>\n                      <h5 class=\"profile-list\" routerLink='/user-profile'>\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        My Profile </h5>\n                    </li>\n                  </a>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12 col-lg-9 col-xs-12 container main-container\">\n          <div class=\"row\">\n            <div *ngFor='let product of product let i = index ' class=\"col-md-4 col-lg-3 col-sm-6\">\n              <div class=\"card\">\n                <div (click)='toggleFavourite(product)'>\n                  <span>\n                    <i class=\"glyphicon glyphicon-heart favourite pull-right\" [ngClass]=\"{active:product.userFavourite === true}\"></i>\n                  </span>\n                </div>\n                <div class=\"panel-body\" [routerLink]=\"['/product-detail/'+product.key]\">\n                  <div class=\"card-image\">\n                    <img src=\"{{product.productImage[0]}}\">\n                  </div>\n                  <div class=\"product-name\">\n                    <span>\n                      <h4>\n                        <p>{{product.productName}}</p>\n                      </h4>\n                    </span>\n                  </div>\n                  <div class=\"product-review col-md-12\">\n                    <span class=\"col-md-6\"><span class=\"btn btn-success fa fa-star\"><b> {{product.rating | number:\n                          '1.1-1'}}</b></span></span>\n\n                  </div>\n                  <div class=\"col-md-12 \">\n                    <span class=\"col-md-6\"><span class=\"product-price\">{{product.productPrice | currency:\"INR\" : true\n                        :'1.0-2'}}</span></span>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CategoriesComponent = (function () {
    function CategoriesComponent(wbService, authService, router, route, toastr, vcr, toast) {
        var _this = this;
        this.wbService = wbService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.toast = toast;
        this.categories = [];
        this.product = [];
        this.showDropdown = false;
        this.authService.getAuth().subscribe(function (auth) {
            _this.Authuser = auth;
        });
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.name = params['name'];
            _this.getProductDetails();
        });
    };
    CategoriesComponent.prototype.toggleDropdown = function () {
        this.showDropdown = !this.showDropdown;
    };
    CategoriesComponent.prototype.getProductDetails = function () {
        var _this = this;
        this.wbService.getProductsByCategory().subscribe(function (data) {
            data.map(function (obj) {
                var count = 0;
                var oldRating = 0;
                if (typeof obj.reviews !== typeof undefined) {
                    Object.values(obj.reviews).forEach(function (key) {
                        if (key.rating) {
                            var rat = Number(key.rating);
                            oldRating = oldRating + rat;
                            count++;
                        }
                    });
                    obj.rating = oldRating / count || 0;
                }
                else {
                    obj.rating = 0;
                }
                if (_this.name === obj.productCategory) {
                    _this.product.push(obj);
                }
            });
            _this.getFavourites();
        });
    };
    CategoriesComponent.prototype.toggleFavourite = function (product) {
        if (this.Authuser === null) {
            this.router.navigate(['login']);
            this.toast.error('You Need to Login first for this');
        }
        else {
            if (typeof product.userFavourite === typeof undefined || product.userFavourite === false) {
                product.userFavourite = true;
                this.wbService.userFavourite(this.Authuser.uid, product);
                this.toast.success('Added to your Wishlist');
            }
            else {
                product.userFavourite = false;
                this.wbService.removeAsFavourite(this.Authuser.uid, product);
                this.toast.success('Removed from your Wishlist');
            }
        }
    };
    CategoriesComponent.prototype.sortPopular = function (sort) {
        this.product = __WEBPACK_IMPORTED_MODULE_6_lodash__["shuffle"](this.product);
    };
    CategoriesComponent.prototype.sortLowProduct = function (sort) {
        this.product = __WEBPACK_IMPORTED_MODULE_6_lodash__["orderBy"](this.product, ['productPrice'], ['asc']);
    };
    CategoriesComponent.prototype.sortHighProduct = function (sort) {
        this.product = __WEBPACK_IMPORTED_MODULE_6_lodash__["orderBy"](this.product, ['productPrice'], ['desc']);
    };
    CategoriesComponent.prototype.getFavourites = function () {
        var _this = this;
        this.wbService.getUserFavouraite(this.Authuser.uid).subscribe(function (data) {
            _this.product.map(function (prod) {
                data.filter(function (obj) {
                    if (prod.id === obj.id) {
                        prod.userFavourite = true;
                    }
                });
            });
        });
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/components/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["d" /* ToastrService */]) === "function" && _g || Object])
], CategoriesComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/delivery/delivery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard{\n\tposition: relative;\n    top: 0;\n}\n.sideBar-image{\n\n    background-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n    box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 1);\n}\n.sideBar{\n   position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    width: 260px;\n    overflow: auto;\n    box-shadow: 6px 2px 12px #9d9d9d;\n}\n.main-content{\n    padding: 35px;\n}\n.navBar{\n   border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n  color:black;\n}\n.address{\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n    padding: 10px 0;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border-radius: 6px;\n    color: rgba(0,0,0,.87);\n    background: #fff;\n    border: 1px solid #ddd;\n}\n.panel-heading{\n    color:#fff;\n    margin: -32px 15px 20px 18px;\n    border-radius: 3px;\n    padding: 15px;\n    background-color: #ef5350;\n    position: relative;\n    box-shadow:6px 5px 15px #9d9d9d; \n}\ntextarea{\n    resize: none;\n}\n.button{\n    background-color: #20bd99;\n    color: #fff;\n}\nbutton:focus {\n    outline: 0 !important;\n}\n.button:active {\n    background-color: #20bd99;\n    color:#fff;\n}\n.button {\n    background-color: #20bd99;\n    color:#fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/delivery/delivery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n\t<div class=\"navBar\">\n\t<app-nav></app-nav>\n</div>\n<div class=\"row\">\n\t\n<div class=\"col-md-9 col-md-offset-2 main-content\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"well well-sm address\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h4>Delivery Address</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"name\" >Name: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"firstName\" class=\"form-control\" required placeholder=\"Name\"  [(ngModel)]='profile.firstName' minlength=\"3\" >\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"phone\" >Contact No: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"phone\" class=\"form-control\" required placeholder=\"Contact Number\"  [(ngModel)]='profile.phone' minlength=\"10\" #phone='ngModel' maxlength=\"10\" pattern=\"[0-9]*\" >\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"location\" >Country: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"country\" class=\"form-control\" required placeholder=\"Country\"  [(ngModel)]='profile.country'  >\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"address\" >Address: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<textarea type=\"text\"  name=\"address\" class=\"form-control\" required placeholder=\"Address\" [(ngModel)]='profile.address' #address='ngModel'></textarea>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"city\" >City: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"city\" class=\"form-control\" required placeholder=\"city\" [(ngModel)]='profile.city' #city='ngModel'>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"postal code\" >Postal Code: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\"  name=\"postalCode\" class=\"form-control\" required placeholder=\"POSTAL CODE\" [(ngModel)]='profile.postalCode' #postalCode='ngModel' >\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"state\" >State: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"state\" class=\"form-control\" required placeholder=\"State\" [(ngModel)]='state'  >\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default pull-right button\" routerLink='/payment'>Proceed</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/delivery/delivery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeliveryComponent = (function () {
    function DeliveryComponent(wbService, authService) {
        this.wbService = wbService;
        this.authService = authService;
        this.profile = {};
    }
    DeliveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
            _this.isLoginUser = _this.authUser.email;
            _this.wbService.getUserProfile(auth.uid).valueChanges().subscribe(function (data) {
                _this.profile = data || {};
            });
        });
    };
    return DeliveryComponent;
}());
DeliveryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delivery',
        template: __webpack_require__("../../../../../src/app/components/delivery/delivery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/delivery/delivery.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _b || Object])
], DeliveryComponent);

var _a, _b;
//# sourceMappingURL=delivery.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\">\n    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Tutorials\n    <span class=\"caret\"></span></button>\n    <ul class=\"dropdown-menu\">\n      <li><a tabindex=\"-1\" href=\"#\">HTML</a></li>\n      <li><a tabindex=\"-1\" href=\"#\">CSS</a></li>\n      <li class=\"dropdown-submenu\">\n        <a class=\"test\" tabindex=\"-1\" href=\"#\">New dropdown <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a tabindex=\"-1\" href=\"#\">2nd level dropdown</a></li>\n          <li><a tabindex=\"-1\" href=\"#\">2nd level dropdown</a></li>\n          <li class=\"dropdown-submenu\">\n            <a class=\"test\" href=\"#\">Another dropdown <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">3rd level dropdown</a></li>\n              <li><a href=\"#\">3rd level dropdown</a></li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        var $;
        $(document).ready(function () {
            $('.dropdown-submenu a.test').on("click", function (e) {
                $(this).next('ul').toggle();
                e.stopPropagation();
                e.preventDefault();
            });
        });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n  list-style: none;\n}\n\n.navbar-brand,\n.navLink {\n  color: #697071;\n  background-color: transparent;\n\n}\n\n.navLink:hover {\n  background-color: transparent;\n\n}\n\n.nav>li>a:hover {\n  background-color: transparent;\n}\n\n.nav .open>a {\n  background-color: transparent;\n}\n\n.navbar-toggle {\n  background-color: #ddd;\n}\n\nspan.icon-bar {\n  background-color: black;\n}\n\n.navbar-transparent {\n  margin-bottom: 0px;\n}\n\np {\n  margin-top: -27px;\n  margin-left: 35px;\n}\n\n.material-icons {\n  margin-right: 15px;\n}\n\n.dropdown-menu li a:hover {\n  background-color: #eceaea;\n}\n\n.dropdown-menu li a {\n  font-size: 15px;\n  padding: 5px 20px;\n}\n\n.logoutLink {\n  border-top: 1px solid #ddd;\n  padding: 2px 0px;\n  margin-top: 6px;\n}\n\n.dropdown-menu li a i {\n  padding: 0px 3px;\n  color: #a2a2a2;\n}\n\n.search-list li {\n  background-color: #fbfbfb;\n  padding: 7px 20px;\n  text-decoration: none;\n  font-size: 14px;\n  color: black;\n  white-space: nowrap;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.search-list {\n  padding: 0px;\n  cursor: pointer;\n  line-height: 1.42857143;\n  margin-top: -1px;\n  margin-bottom: 10px;\n  position: absolute;\n  z-index: 10000;\n  border: 1px solid #ddd;\n  width: 200px;\n  border-top: 0px;\n}\n\n.navbar-form {\n  position: relative;\n}\n\n.search-list li:hover {\n  background-color: #eee;\n}\n\n@media all and (max-width: 600px) {\n  .navbar-toggle {\n    float: left;\n    display: none;\n  }\n\n  .dropdown {\n    float: left;\n  }\n}\n\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: absolute;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    box-shadow: none;\n  }\n\n  .dropdown-menu li a {\n    font-size: 14px;\n    padding: 5px 9px;\n  }\n\n  .small-dropdown {\n    /* padding-right: 18px; */\n  }\n\n  a .material-icons {\n    font-size: 20px;\n    margin-right: 3px;\n  }\n\n  .nav>li>a {\n    /* padding: 5px 15px 0px 0px; */\n  }\n  .visible-xs {\n    display: block !important;\n    float: left;\n}\n.navbar-nav {\n  /* margin: 0.5px -12px; */\n}\n.pull-right {\n  /* float: none !important; */\n}\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">Web Store</a>\n            <ul class=\"nav navbar-nav pull-right visible-xs  hidden-md small-dropdown\">\n                <li *ngIf=\"!isLoggedIn\"><a href=\"\" routerLink = '/login' class=\"navLink\" style=\"padding-right:28px\"><i class=\"fa fa-sign-in \"></i> Login</a></li>\n                    <li *ngIf=\"isLoggedIn\" class=\"dropdown\"><a href=\"\" class=\"dropdown-toggle\" data-toggle='dropdown'><i class=\"fa fa-user \" aria-hidden=\"true\"></i>\n                        {{isLoginUser}}<span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li *ngIf=\"profile.role !=='guest'\"><a href=\"\" routerLink='/admin-dashboard'><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i> Dashboard</a></li>\n                            <li  *ngIf=\"profile.role !=='guest'\" ><a href=\"\" routerLink='/add-product'><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> Add_Product</a></li>\n                            <li ><a href=\"\"  *ngIf = \"profile.role ==='guest'\" routerLink = '/user-profile'><i class=\"fa fa-user \" aria-hidden=\"true\"></i> Profile</a></li>\n                            <li ><a href=\"\" *ngIf = \"profile.role !=='guest'\" routerLink = '/admin-profile'><i class=\"fa fa-user \" aria-hidden=\"true\"></i> Profile</a></li>\n                            <li *ngIf = \"profile.role ==='guest'\"><a href=\"\" routerLink = '/favorite'><i class=\"fa fa-heart\" aria-hidden=\"true\"></i> Wishlist</a></li>\n                            <li ><a href=\"\" routerLink = '/change-password'><i class=\"fa fa-key\" aria-hidden=\"true\"></i> Change Password</a></li>\n                            <li *ngIf = \"profile.role ==='guest'\"><a href=\"\" routerLink = '/cart'><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Cart</a></li>\n                            <li class=\"logoutLink\"><a href=\"#\" (click) = \"onLogout()\"><span class=\"glyphicon glyphicon glyphicon-off\"></span> Logout</a>\n                        </ul>\n                    </li>\n                </ul>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"menu\">\n            <ul class=\"nav navbar-nav pull-right\">\n                <li class=\"dropdown\">\n                    <div class=\"collapse navbar-collapse\" id=\"menu\">\n                        <ul class=\"nav navbar-nav pull-right\">\n                            <li *ngIf=\"!isLoggedIn\"><a href=\"\" routerLink = '/login' class=\"navLink\" style=\"padding-right:28px\"><i class=\"fa fa-sign-in \"></i> Login</a></li>\n                            <li *ngIf=\"isLoggedIn\" class=\"dropdown\"><a href=\"\" class=\"dropdown-toggle\" data-toggle='dropdown'><i class=\"fa fa-user \" aria-hidden=\"true\"></i>\n                                {{isLoginUser}}<span class=\"caret\"></span></a>\n                            <ul class=\"dropdown-menu\">\n                                <li *ngIf=\"profile.role !=='guest'\"><a href=\"\" routerLink='/admin-dashboard'><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i> Dashboard</a></li>\n                                <li ><a href=\"\"  *ngIf = \"profile.role ==='guest'\" routerLink = '/user-profile'><i class=\"fa fa-user \" aria-hidden=\"true\"></i> Profile</a></li>\n                                <li ><a href=\"\"  *ngIf = \"profile.role !=='guest'\" routerLink = '/admin-profile'><i class=\"fa fa-user \" aria-hidden=\"true\"></i> Profile</a></li>\n                                <li *ngIf = \"profile.role ==='guest'\"><a href=\"\" routerLink = '/favorite'><i class=\"fa fa-heart\" aria-hidden=\"true\"></i> Wishlist</a></li>\n                                <li ><a href=\"\" routerLink = '/change-password'><i class=\"fa fa-key\" aria-hidden=\"true\"></i> Change Password</a></li>\n                                <li *ngIf = \"profile.role ==='guest'\"><a href=\"\" routerLink = '/cart'><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> Cart</a></li>\n                                <li class=\"logoutLink\"><a href=\"#\" (click) = \"onLogout()\"><span class=\"glyphicon glyphicon glyphicon-off\"></span> Logout</a>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </li>\n        </ul>\n        <form class=\"navbar-form navbar-right\" role=\"search\">\n            <div class=\"input-group\">\n               <div class=\"form-group form-black is-empty\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"productName\"  [(ngModel)]='product.productName' (ngModelChange)='search($event)'>\n                <span class=\"material-input\"></span>\n            </div>\n            <span class=\"input-group-addon\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i><div class=\"ripple-container\"></div>\n            </span> \n            </div>\n            <ul  class=\"search-list\">\n                <li *ngFor=\"let product of filteredData\">\n                    <span [routerLink] =\"['/product-detail/'+product.key]\">{{product.productName}}</span>\n                </li>\n            </ul>\n        </form>\n    </div>\n    \n</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavComponent = (function () {
    function NavComponent(wbService, authService, router) {
        this.wbService = wbService;
        this.authService = authService;
        this.router = router;
        this.isLoggedIn = false;
        this.product = [];
        this.searchProducts = [];
        this.filteredData = this.product;
        this.profile = {};
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.isLoginUser = auth.email;
                _this.wbService
                    .getUserProfile(auth.uid)
                    .valueChanges()
                    .subscribe(function (data) {
                    _this.profile = data || {};
                });
            }
            else {
                _this.isLoggedIn = false;
            }
        });
        this.wbService.getProductsForUsers().subscribe(function (data) {
            _this.product = __WEBPACK_IMPORTED_MODULE_4_lodash__["values"](data);
        });
    };
    NavComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(["/login"]);
    };
    NavComponent.prototype.search = function (val) {
        if (val) {
            this.filteredData = this.product;
            this.filteredData = this.product.filter(function (d) { return d.productName.toLowerCase().indexOf(val) >= 0; });
        }
        else {
            this.filteredData = [];
        }
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-nav",
        template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NavComponent);

var _a, _b, _c;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand, .navLink{\n\tcolor: #ddd;\n\tbackground-color: transparent;\n\n}\n.navLink:hover{\n\tbackground-color: transparent;\n\n}\n.navbar-toggle{\n\tbackground-color: #ddd;\n}\nspan.icon-bar{\n\tbackground-color: black;\n}\n.navbar-transparent{\n\tmargin-bottom: 0px;\n}\np{\n\tmargin-top: -27px;\n\tmargin-left: 35px;\n}\n.material-icons{\n\tmargin-right: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n       <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Web-Store</a>\n    </div>\n  </div>\n  <div class=\"collapse navbar-collapse\" id=\"menu\">\n    <ul class=\"nav navbar-nav pull-right\">\n      <li *ngIf=\"!isLoggedIn\"><a href=\"\" routerLink='' class=\"navLink\"><i class=\"material-icons\">dashboard</i> <p>Dashboard</p></a></li>\n      <li *ngIf=\"!isLoggedIn\"><a href=\"\" routerLink='/register' class=\"navLink\"><i class=\"fa fa-user \" aria-hidden=\"true\"></i> Register</a></li>\n      <li *ngIf=\"!isLoggedIn\"><a href=\"\" routerLink = '/login' class=\"navLink\"><i class=\"fa fa-sign-in \"></i> Login</a></li>\n      <li *ngIf=\"isLoggedIn\" class=\"dropdown\"><a href=\"\" class=\"dropdown-toggle\" data-toggle='dropdown'>{{isLoginUser}}<span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li ><a href=\"\" >Profile</a></li>\n          <li ><a href=\"\" >Favourates</a></li>\n          <li ><a href=\"\" >Change Password</a></li>\n          <li ><a href=\"#\" (click) = \"onLogout()\"><span class=\"glyphicon glyphicon glyphicon-off\"></span> Logout</a>\n        </ul>\n      </li>\n      \n    </ul>\n  </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(wbService, authService, router) {
        this.wbService = wbService;
        this.authService = authService;
        this.router = router;
        this.isLoggedIn = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.isLoginUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/payment/payment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard{\n\tposition: relative;\n    top: 0;\n}\n.sideBar-image{\n\n    background-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n    box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 1);\n}\n.sideBar{\n   position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    width: 260px;\n    overflow: auto;\n    box-shadow: 6px 2px 12px #9d9d9d;\n}\n.main-content{\n    position: relative;\n    height: 100%;\n    float: right;\n    min-height: 100%;\n    /*width: calc(100% - 260px);*/\n    padding: 35px;\n}\n.navBar{\n   border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n  color:black;\n}\n.address{\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n    padding: 10px 0;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border-radius: 6px;\n    color: rgba(0,0,0,.87);\n    background: #fff;\n    border: 1px solid #ddd;\n}\n.panel-heading{\n    color:#fff;\n    margin: -32px 15px 20px 18px;\n    border-radius: 3px;\n    padding: 15px;\n    background-color: #ef5350;\n    position: relative;\n    box-shadow:6px 5px 15px #9d9d9d; \n}\ntextarea{\n    resize: none;\n}\n.button{\n    background-color: #20bd99; \n    color:#fff;\n}\nbutton:focus {\n    outline: 0 !important;\n}\nbutton:hover {\n    background-color: #20bd99;\n}\n.button:active {\n    background-color: #20bd99;\n    color:#fff;\n}\n.expiry{\n    padding-left: 0px;\n}\n.text-info{\n   color:  #44abde;\n}\n.text-danger{\n    color: #e40d09;\n}\n.text-success{\n    color: #319e33;\n}\n.text-warning{\n    color: #f1b80b;\n}\n.cod{\n    border: 1px solid #ddd;\n    background-color: #fff;\n}\n.cod-div{\n    padding: 12px;\n    border: 1px solid #ddd;\n    background-color: #fff;\n    margin: 24px;\n}\n.debit-div{\n    padding: 12px;\n    border: 1px solid #ddd;\n    background-color: #fff;\n    margin: 24px;\n}\n.well{\n    border: 1px solid #ddd;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n\t<div class=\"navBar\">\n\t<app-nav></app-nav>\n</div>\n<div class=\"row\">\n\t\n<div class=\"col-md-10  main-content\">\n\t<div class=\"container\">\n\t\t<div class=\"well\">\n\t\t\t<div class=\"cod-div\">\n\t\t\t\t<small><h5>\n\t\t\t\t<span (click) = \"showCashOnDelivery = !showCashOnDelivery\"><input type=\"radio\" name=\"optradio\"><b> Cash on Delivery</b></span></h5>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t\t<div class=\"debit-div\">\n\t\t\t\t<small><h5>\n\t\t\t\t<span (click) = \"showDebitPayment = !showDebitPayment\"><input type=\"radio\" name=\"optradio\"><b> Credit/ATM Card/Debit</b></span></h5>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf='showCashOnDelivery ' class=\"col-md-6 -col-md-offset-2\">\n\t\t\t<div class=\"panel-body well well-sm cod\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<span><h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></h5></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default pull-right button\" (click)=\"makePaymentonDelivery()\">Confirm Order</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\" *ngIf=' showDebitPayment'>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"well well-sm address\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h4> Payment Options</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"name\" >Card Number:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"number\" class=\"form-control\" placeholder=\"Card Number\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-7 expiry\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"name\" >Expiry Date:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"expiry\" class=\"form-control\" placeholder=\"MM/YY\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"name\" >CVV:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"cvv\" class=\"form-control\" placeholder=\"CVV\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"name\" >Name on Card:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Enter your Name\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<h3>General Information</h3>\n\t\t\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-cc-visa text-info\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-cc-mastercard text-danger\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-cc-amex text-success\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-cc-paypal text-warning\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default pull-right button\" (click)=\"makePayment()\">Make Payment</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentComponent = (function () {
    function PaymentComponent(wbService, authService, toaster) {
        this.wbService = wbService;
        this.authService = authService;
        this.toaster = toaster;
        this.profile = {};
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
            _this.isLoginUser = _this.authUser.email;
            _this.wbService.getUserProfile(auth.uid).valueChanges().subscribe(function (data) {
                _this.profile = data || {};
            });
        });
    };
    PaymentComponent.prototype.makePayment = function () {
        this.toaster.success('Payment done successfully');
    };
    PaymentComponent.prototype.makePaymentonDelivery = function () {
        this.toaster.success('Order placed successfully');
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payment',
        template: __webpack_require__("../../../../../src/app/components/payment/payment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/payment/payment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_web_store_service__["a" /* WebStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["d" /* ToastrService */]) === "function" && _c || Object])
], PaymentComponent);

var _a, _b, _c;
//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sideBar{\n   \n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 4;\n    width: 245px;\n    height: auto;\n   \n}\n.nav>li>a{\n\tmargin: 10px 15px;\n\tcolor: #fff;\n\tposition: relative;\n    display: block;\n    padding: 10px 15px;\n\n}\nli a:active{\n\tbackground-color: #ec5855;\n\tcolor: #ffffff;\n\tbox-shadow:6px 5px 15px #4c2b2b;\n}\nli a:focus{\n\tbackground-color: #ec5855;\n\tcolor: #ffffff;\n\t box-shadow:6px 5px 15px #4c2b2b;\n}\nli>a.active{\n\tbackground-color: #ec5855;\n\tcolor: #ffffff;\n\tbox-shadow:6px 5px 15px #4c2b2b;\n\n}\n.nav>li, .nav>li>a {\n    position: relative;\n    display: block;\n}\n.sidebar .nav li>a {\n    margin: 10px 15px 0;\n    border-radius: 3px;\n    color: #3c4858;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.nav>li{\n    position: relative;\n    display: block;\n}\np{\n\tmargin-top: -27px;\n\tmargin-left: 35px;\n}\ni{\n\tmargin-right: 15px;\n}\nli a{\n    position: relative;\n    display: block;\n}\n.dropdown-menu{\n\tmargin-left: 13px;\n}\n.favourite{\n    margin: 10px 10px 0 0;\n    color: transparent;\n}\n.active{\n    color: #f44336;\n}\n.logout{\n    cursor: pointer;\n}\n.header{\n    margin: 10px 15px;\n    padding: 10px;\n    border-bottom: 1px solid #eee;\n    border-top: 1px solid #eee;\n}\n.admin-header{\n    font-size: 17px;\n    color: #fff;\n}\n.admin-header p , i{\n    margin: 0px;\n}\n\n@media only screen and (max-width:768px)  {\n    .sideBar{\n        height: auto;\n        border-right: 0px solid #f0f0f0;\n    \n    }\n      .toggle-btn {\n        display: block;\n        cursor: pointer;\n        position: absolute;\n        left: 10px;\n        top: -38px;\n        z-index: 10 !important;\n        padding: 3px;\n        background-color: #ffffff;\n        color: #000;\n        width: 40px;\n        text-align: center;\n    }\n  .dropdownMenu{\n    display: none;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"admin-header\">\n    <p>{{isLoginUser}}</p>\n  </div>\n</div>\n<div class=\"nav-container sideBar\">\n\n  <div class=\"nav-container\">\n\n    <ul class=\"nav\" id=\"menu\">\n      <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems; let i = index\" class=\"{{menuItem.class}}\">\n        <a routerLinkActive=\"active\" [routerLink]=\"[menuItem.path]\">\n          <i class=\"material-icons\">{{menuItem.icon}}</i>\n          <p>{{menuItem.title}}</p>\n        </a>\n      </li>\n      <li (click)=\"onLogout()\">\n        <a class=\"logout\">\n          <i class=\"material-icons\">power_settings_new</i>\n          <p>LogOut</p>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var appRoutes = [
    { path: '/admin-dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/admin-profile', title: ' Profile', icon: 'person', class: '' },
    { path: '/add-product', title: 'Add_Product', icon: 'library_add', class: '' },
    { path: '/admin-password', title: 'Change Password', icon: 'fingerprint', class: '' },
];
var SideBarComponent = (function () {
    function SideBarComponent(authService, wbService, router) {
        this.authService = authService;
        this.wbService = wbService;
        this.router = router;
        this.isLoggedIn = false;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = appRoutes.filter(function (menuItem) { return menuItem; });
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.isLoginUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    SideBarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-bar',
        template: __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SideBarComponent);

var _a, _b, _c;
//# sourceMappingURL=side-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard{\n    position: relative;\n    top: 0;\n    height: 100vh;\n}\n.sideBar-image{\n\n    background-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n  \n    border-color: rgba(255, 255, 255, 1);\n}\n.sideBar{\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    width: 260px;\n    overflow: auto;\n    box-shadow: 6px 2px 12px #9d9d9d;\n}\n.main-content{\n    padding-top: 35px;\n}\n.card-title{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    color: #fff;\n}\n.card{\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border-radius: 6px;\n    color: rgba(0,0,0,.87);\n    background: #fff;\n    padding:8px;\n    border: 1px solid #ddd;\n}\n.card-header{\n    margin: -24px 15px 20px 18px;\n    border-radius: 3px;\n    padding: 15px;\n    background-color: #ef5350;\n    position: relative;\n    box-shadow:6px 5px 15px #9d9d9d;\n}\n.form-control {\n  border: 0;\n  background-image: linear-gradient( #9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: rgba(0, 0, 0, 0);\n  transition: background 0s ease-out;\n  float: none;\n  box-shadow: none;\n  border-radius: 0;\n  font-weight: 400;\n  \n  }\n.form-control:focus { \n   outline: none;\n   background-image: linear-gradient( #55d4af, #55d4af), linear-gradient(#D2D2D2, #D2D2D2);\n   background-size: 100% 2px,100% 1px;\n   box-shadow: none;\n   transition: 0.5s;\n}\n.form-group{\n    padding: 10px 25px;\n}\n.button{\n    background-color: #ef5350;\n    color: #FFFFFF;\n}\n.navBar{\n   border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n\t<div class=\"navBar\">\n\t<app-nav></app-nav>\n</div>\n<div class=\"row\">\n\t\n<div class=\"col-md-9 col-md-offset-2 main-content\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-8 col-md-offset-1 \">\n\t\t\t\t<div class=\"panel-body  \">\n\t\t\t\t\t\n\t\t\t\t\t<form #f= 'ngForm' submit >\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Change Password</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"password\" >Old Password:</label>\n\t\t\t\t\t\t\t<input type=\"password\"  name=\"password\" required class=\"form-control\" placeholder=\"Old Password\" [(ngModel)]= 'password'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"password\" >New Password:</label>\n\t\t\t\t\t\t\t<input type=\"password\"  name=\"newPassword\" required class=\"form-control\" minlength=\"6\" placeholder=\"New Password\" [(ngModel)]='newPassword'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"password\" >Conform New Password:</label>\n\t\t\t\t\t\t\t<input type=\"password\"  name=\"passwordCheck\" required class=\"form-control\" minlength=\"6\" placeholder=\"New Password\" [(ngModel)]='passwordCheck'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default pull-right button\" (click)='onChangeUserPassword(f)'>Update Password</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(router, wbService, authService, toast) {
        this.router = router;
        this.wbService = wbService;
        this.authService = authService;
        this.toast = toast;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
        });
    };
    ChangePasswordComponent.prototype.onChangeUserPassword = function (f) {
        var _this = this;
        var newPassword = f.value.newPassword;
        var checkPassword = f.value.passwordCheck;
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
        if (checkPassword !== newPassword) {
            this.toast.error("Password did not match. please try again", "Oops!!");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]()
                .currentUser.reauthenticateWithCredential(__WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].EmailAuthProvider.credential(__WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.email, f.value.password))
                .then(function (res) {
                user
                    .updatePassword(newPassword)
                    .then(function (res) {
                    _this.toast.success("Password Updated");
                    _this.router.navigate([""]);
                })
                    .catch(function (err) {
                    _this.toast.error(err.message);
                });
            })
                .catch(function (err) {
                _this.toast.error(err.message, "Sorry");
            });
        }
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-change-password",
        template: __webpack_require__("../../../../../src/app/components/user/change-password/change-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/change-password/change-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["d" /* ToastrService */]) === "function" && _d || Object])
], ChangePasswordComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/favourites/favourites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nli{ \n    list-style: none;\n }\n.image-td{\n    overflow: hidden;\n}\n.image-div{\n    max-height: 100%;\n    max-width: 100%;\n}\n.image-td img{\n    height: 100px;\n    max-width: 100%;\n    padding: 0px;\n    cursor: pointer;\n}\n.dashboard{\n    position: relative;\n    top: 0;\n    height: 100vh;\n}\n.sideBar-image{\n\n    background-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n    box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 1);\n}\n.sideBar{\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    width: 260px;\n    overflow: auto;\n    box-shadow: 6px 2px 12px #9d9d9d;\n}\n.card-title{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    height: 100%;\n    width: 100%;\n    display: -ms-grid;\n    display: grid;\n    margin: 0 auto;\n    text-align: center;\n}\n\n.card{\n    display: inline-block;\n    background: #fff;\n    padding: 25px;\n    margin-bottom: 30px;\n    border: 1px solid #fffafa;\n    height: 300px;\n}\n.main-content{\n    min-height: 100%;\n    padding-top: 38px;\n    \n}\n.navBar{\n    color:black;\n}\n.card-image{\n    height: 200px;\n    width: 200px;\n    /*display: grid;*/\n    margin: 0 auto;\n    text-align: center;\n    padding: 10px;\n    overflow: hidden;\n\n}\n\n.navBar{\n   border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n}\n.panel-body{\n    padding: 0px;\n}\n.delete{\n    color: #bbb7b7;\n    cursor: pointer;\n    font-size: 15px;\n}\n.delete:hover{\n    color: red;\n}\n\n.active{\n    color: red;\n}\n.product-name{\n    text-overflow: ellipsis;\n    text-align: center;\n}\n.product-review{\n    padding: 0px;\n}\np{\n    font-size: 16px;\n    width: 200px;\n    white-space: nowrap;\n    font-weight: 500;\n}\n.product-description {\n   \n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #ddd;\n  overflow: hidden;\n  width: 100%;\n  height: 0;\n  transition: .5s ease;\n  opacity: 0.8;\n  color: black;\n}\n\n.card:hover{\n  box-shadow: 6px 2px 12px #9d9d9d;\n}\n.card:hover .remove{\n    display: block;\n}\n\n.description-text {\n\n  white-space: nowrap; \n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.well{\n    padding: 24px;\n    line-height: 1;\n    background-color: #fff;\n    overflow: hidden;\n    display: -ms-grid;\n    display: grid;\n    border: 0px solid #fff;\n}\n.wishList{\n    padding: 8px 0 10px 0;\n    margin: 8px 0 8px 0;\n    border-bottom: 1px solid #ddd;\n    \n}\n.product-price{\n    padding-top: 5px;\n    margin-top: 8px;\n    font-size: 20px;\n\n}\n.card-content{\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n    padding: 35px 0;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border-radius: 6px;\n    color: rgba(0,0,0,.87);\n    background: #fff;\n    padding-bottom: 5px;\n    border: 1px solid #ddd;\n}\n.panel-heading{\n    color:#fff;\n    margin: -50px 15px 20px 18px;\n    border-radius: 3px;\n    background-color: #ef5350;\n    position: relative;\n    box-shadow:6px 5px 15px #9d9d9d; \n}\nh3,h5{\n    text-align: center;\n}\n.btn-success{\n  padding: 0px 10px;\n  font-size: 14px;\n  cursor: auto;\n}\n.btn-success b{\n    font-size: 14px;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/favourites/favourites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n\t<div class=\"navBar\">\n\t<app-nav></app-nav>\n</div>\n<div class=\"row\">\n<div class=\"col-md-12 main-content\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"card-content\">\n\t\t\t\t<div *ngIf='favourite?.length > 0; else noProducts' class =\"table table-striped\">\n\t\t\t\t\t<div class=\"panel-heading\"><h4>My WishList ( {{favourite.length}} )</h4></div>\n\t\t\t\t\t<div class=\"well well-sm\">\n\t\t\t\t\t\t<div *ngFor=\"let favourite of favourite; let i of index\" class=\"wishList \">\n\t\t\t\t\t\t\t<div class=\"image-td col-md-4\">\n\t\t\t\t\t\t\t\t<div class=\"image-div\"  [routerLink] =\"['/product-detail/'+favourite.key]\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{favourite.productImage[0]}}\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<p >{{favourite.productName}}</p>\n\t\t\t\t\t\t\t\t<div class=\"product-review \">\n\t\t\t\t\t\t\t\t\t<span class=\"btn btn-success fa fa-star\"><b> {{favourite.rating | number: '1.1-1'}}</b></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"product-price\"><b>{{favourite.productPrice | currency:\"INR\" : true:'1.0-2'}}</b></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t<small href=\"\" class=\" delete\" (click)='onRemoveUserFavourite(i)'><i class=\"material-icons\">delete</i></small>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n</div>\n<ng-template #noProducts>\n\t<h3>Empty Wishlist</h3>\n<h5>You have no items in your wishlist. Start adding!</h5>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/user/favourites/favourites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavouritesComponent = (function () {
    function FavouritesComponent(router, wbService, authService, toaster) {
        this.router = router;
        this.wbService = wbService;
        this.authService = authService;
        this.toaster = toaster;
        this.review = [];
    }
    FavouritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            _this.authUser = auth;
            _this.wbService.getUserFavouraite(_this.authUser.uid).subscribe(function (data) {
                _this.favourite = __WEBPACK_IMPORTED_MODULE_4_lodash__["values"](data);
                data.map(function (obj) {
                    var count = 0;
                    var oldRating = 0;
                    if (typeof obj.reviews !== typeof undefined) {
                        Object.values(obj.reviews).forEach(function (key) {
                            if (key.rating) {
                                var rat = Number(key.rating);
                                oldRating = oldRating + rat;
                                count++;
                            }
                        });
                        obj.rating = oldRating / count;
                    }
                    else {
                        obj.rating = 0;
                    }
                });
            });
        });
    };
    FavouritesComponent.prototype.onRemoveUserFavourite = function (i) {
        if (confirm('Sure to Remove from Favourites?')) {
            this.wbService.removeAsFavourite(this.authUser.uid, i);
            this.toaster.success('Removed from your favourites');
        }
    };
    return FavouritesComponent;
}());
FavouritesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-favourites',
        template: __webpack_require__("../../../../../src/app/components/user/favourites/favourites.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/favourites/favourites.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["d" /* ToastrService */]) === "function" && _d || Object])
], FavouritesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=favourites.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/product-details/product-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\n    list-style: none;\n}\n.poster{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 360px;\n    overflow: hidden;\n}\n.image-div{\n    max-height: 100%;\n    max-width: 100%;\n    margin: auto;\n}\n.poster img{\n    height: 300px;\n    max-width: 100%;\n    box-shadow: 5px 7px 9px grey;\n    padding: 0px;\n}\n.dashboard{\n\tposition: relative;\n    top: 0;\n}\n.sideBar-image{\n\n    background-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n    box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 1);\n}\n.sideBar{\n   position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    width: 260px;\n    overflow: auto;\n    box-shadow: 6px 2px 12px #9d9d9d;\n}\n.action-buttons{\n    text-align: center;\n}\n.product-image img{\n    max-width: 100%;\n    margin: 0 auto;\n    max-height: 100%;\n}\n\n.image-container{\n    height: 150px;\n    width: 150px;\n    display: -ms-grid;\n    display: grid;\n    margin: 12px;\n    position: relative;\n}\n.product-image{\n    /*height: 100px;*/\n    width: 50px;\n    display: -ms-grid;\n    display: grid;\n    margin: 0 auto;\n}\n.addToCart{\n    background-color: #20bd99;\n    margin-top: 20px;\n    box-shadow: 5px 7px 14px grey;\n}\n.product{\n   display:inline-block;\n   margin: 6px;\n}\n.product-detail{\n    margin-top: 30px;\n    border: 1px solid #ddd;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n   /* box-shadow: 9px 6px 12px #9d9d9d;*/\n}\n.product-price{\n    padding-top: 5px;\n    margin-bottom: 8px;\n    font-size: 20px;\n}\n.product-description{\n    font-weight: 500;\n    padding: 10px 0px;\n}\n.product-price b{\n    font-size: 20px;\n}\n.btn-default{\n    padding: 0px 10px;\n    color: #fff;\n    text-align: center;\n    background-color: #ff9f00;\n    cursor: auto;\n}\n.product-details{\n    float: right;\n}\n.buyItem{\n    background-color: #ef5350;\n    margin-top: 20px;\n    margin-left: 8px;\n    box-shadow: 5px 7px 14px grey;  \n}\n.review-button{\n    padding-left: 0px;\n    margin-top: 6px;\n    color: #3a9c3a;\n}\n.userEmail{\n    color: #078c8c\n}\n.remove{\n    color: red;\n    cursor: pointer;\n}\n.fa-user{\n    color: grey;\n}\n.user-review{\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border: 1px solid #ddd;\n}\nh5{\n    color: red;\n}\n.navBar{\n   border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n  color:black;\n}\n.review{\n    color: #504c4c;\n    margin: 10px;\n    line-height: 150%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.description{\n    margin: 10px 0px;\n}\n.description span{ \n    font-weight: 500;\n    color: #878787;\n    width: 110px;\n    padding-right: 10px;\n    float: left;\n}\nfieldset, label { margin: 0; padding: 0; }\nbody{ margin: 20px; }\nh1 { font-size: 1.5em; margin: 10px; }\n\n/****** Style Star Rating Widget *****/\n\n.rating { \n  border: none;\n  float: left;\n}\n\n.rating > input { display: none; } \n.rating > label:before { \n  margin: 5px;\n  font-size: 1.25em;\n  font-family: FontAwesome;\n  display: inline-block;\n  content: \"\\F005\";\n}\n\n.rating > .half:before { \n  content: \"\\F089\";\n  position: absolute;\n}\n\n.rating > label { \n  color: #ddd; \n float: right; \n}\n.btn-success{\n    padding: 0 12px;\n    cursor: auto;\n}\n.btn-warning{\n    background-color: #ff9f00;\n    padding: 1px 4px;\n    font-size: 11px;\n    cursor: auto;\n    \n}\n.review-product{\n    cursor: pointer;\n}\n.rating-font{\n    font-size: 14px;\n    color:#fff;\n    font-weight: 900;\n}\nb{\n    font-size: 16px;\n}\n.user-name{\n    font-size: 11px;\n}\n.user-comment{\n    padding: 10px 18px;\n    border-bottom: 1px solid #ddd;\n\n}\n/***** CSS Magic to Highlight Stars on Hover *****/\n\n.rating > input:checked ~ label, \n.rating:not(:checked) > label:hover, \n.rating:not(:checked) > label:hover ~ label { color: #FFD700;  }\n\n.rating > input:checked + label:hover, \n.rating > input:checked ~ label:hover,\n.rating > label:hover ~ input:checked ~ label, \n.rating > input:checked ~ label:hover ~ label { color: #FFED85;  } \n.rating > label {\n    color: #a9a8a8;\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/product-details/product-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n\t<div class=\"navBar\">\n\t<app-nav></app-nav>\n</div>\n<div class=\"row \">\n\t<div class=\" col-md-12 main-content\">\n\t\t<div class=\"container\">\n\n\t\t<div class=\"well well-lg product-detail\">\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\" col-md-6\" >\n\t\t\t\t\t<div class=\"poster\">\n\t\t\t\t\t\t<div class=\"image-div\">\n\t\t\t\t\t\t\t<img [src]=\"image | img\" alt=\"Poster\" class=\"title panel-body img-responsive\" >\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 \">\n\t\t\t\t\t<div class=\"product-details panel-body\">\n\t\t\t\t\t<div><h1>{{product.productName}}</h1></div>\n\t\t\t\t\t<div class=\"col-md-6 review-product\" >\n    \t\t\t\t\t<h4><a (click) = \"showReviewInput = !showReviewInput\"><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> {{review.length}} Reviews </a></h4>\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"col-md-6\">\n    \t\t\t\t\t<h4><a (click) = \"showInput = !showInput\"><small class=\"btn btn-success fa fa-star\"><b> {{rating | number: '1.1-1'}}</b></small> Ratings </a></h4>\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"panel-footer \">\n\t\t\t\t\t\t<div class=\"product-price\"><b>{{product.productPrice | currency:\"INR\" : true}}</b></div>\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<span>Description:</span>\n\t\t\t\t\t\t\t<div class=\"product-description col-md-12\">{{product.productDescription}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"row \">\n\t\t\t\t<div class=\"col-md-12 panel-body\">\n\t\t\t\t\t<div class=\" panel-footer col-md-6\">\n\t\t\t\t\t\t<div >\n\t\t\t\t\t<div *ngFor = 'let img of product.productImage; let i=index ' class=\"product\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\" product-image \" *ngIf='product.productImage' >\n\t\t\t\t\t\t\t<img [src]=\"img | img\" (click)=displayImage(img,i)>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"action-buttons\">\n\t\t\t\t\t\t<button class=\"btn btn-lg addToCart\" (click)='addProductToCart(product)'><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to Cart </button>\n\t\t\t\t\t\t<button class=\"btn btn-lg buyItem\" routerLink='/delivery'><i class=\"fa fa-buysellads fa-rotate-90\" aria-hidden=\"true\"></i> Buy Now </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"well well-sm user-review col-md-12\">\n\t\t<div>\n    \t\t<form  #f='ngForm'(ngSubmit)=onSubmitUserReview(f) *ngIf='showReviewInput'>\n    \t\t\t<div class=\"form-group\">\n    \t\t\t\t<div class=\"col-md-5\">\n    \t\t\t\t\t<span class=\"rating\" >\n   \t\t\t\t\t\t\t<input type=\"radio\" id=\"star5\" name=\"userrating\" value=\"5\" [(ngModel)]='userrating'/><label class = \"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label>\n\t\t\t\t\t\t    <!-- <input type=\"radio\" id=\"star4half\" name=\"rating\" value=\"4 and a half\" /><label class=\"half\" for=\"star4half\" title=\"Pretty good - 4.5 stars\"></label> -->\n\t\t\t\t\t\t    <input type=\"radio\" id=\"star4\" name=\"userrating\" value=\"4\" [(ngModel)]='userrating'/><label class = \"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label>\n\t\t\t\t\t\t   \n\t\t\t\t\t\t    <input type=\"radio\" id=\"star3\" name=\"userrating\" value=\"3\" [(ngModel)]='userrating'/><label class = \"full\" for=\"star3\" title=\"Meh - 3 stars\"></label>\n\t\t\t\t\t\t    \n\t\t\t\t\t\t    <input type=\"radio\" id=\"star2\" name=\"userrating\" value=\"2\" [(ngModel)]='userrating'/><label class = \"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label>\n\t\t\t\t\t\t   \n\t\t\t\t\t\t    <input type=\"radio\" id=\"star1\" name=\"userrating\" value=\"1\" [(ngModel)]='userrating'/><label class = \"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label>\n\t\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<input type=\"text\" name=\"userReview\" class=\"form-control\" placeholder=\"Review Product..\" [(ngModel)]='userReview'>\n    \t\t\t\t\t<div class=\" review-button\">\n    \t\t\t\t<button  type=\"submit\" class=\"btn btn-success\">Submit</button>\n    \t\t\t</div> \n    \t\t\t\t</div>\n    \t\t\t</div>\n    \t\t</form>\n    \n    \t<div class=\"col-md-12\" >\n    \t\t<h4>User Comments:</h4>\n    \t\t<ul >\n    \t\t\t<li *ngFor=\"let rev of review ; let i= index \"> \n    \t\t\t\t<h5 class=\"user-comment\">\n    \t\t\t\t\t<p>\n    \t\t\t\t\t\t<span class=\"btn btn-warning fa fa-star\"> \n    \t\t\t\t\t\t\t<small class=\"rating-font\">{{rev.rating}}</small>\n    \t\t\t\t\t\t</span>\n    \t\t\t\t\t\t<div class=\"review\">{{rev.review}}</div>\n    \t\t\t\t\t\t<span class=\"userEmail\"> <small class=\"user-name\">By</small> <i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{rev.email}}  </span>\n    \t\t\t\t\t\t<span *ngIf='Authuser'><span *ngIf='Authuser.uid === rev.id ' class=\"glyphicon glyphicon-remove pull-right remove\" (click)='onDeleteReviewC(rev,i)'></span>\n    \t\t\t\t\t</span>\n    \t\t\t\t\t\t\t\n    \t\t\t\t</h5>\n    \t\t\t</li>\n    \t\t</ul> \n    \t</div>\n\t</div>\n\t</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/product-details/product-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(router, route, wbService, authService, toast) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.wbService = wbService;
        this.authService = authService;
        this.toast = toast;
        this.product = {};
        this.review = [];
        this.oldRating = 0;
        this.authService.getAuth().subscribe(function (auth) {
            _this.Authuser = auth;
        });
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.$key = this.route.snapshot.params["id"];
        this.getProductDetails();
    };
    ProductDetailsComponent.prototype.getProductDetails = function () {
        var _this = this;
        if (this.$key === "undefined") {
            this.router.navigate([""]);
        }
        this.wbService.getProductDetail(this.$key).subscribe(function (data) {
            data = Object.assign([], data);
            _this.product = data;
            _this.review = [];
            _this.image = _this.product.productImage[0];
            if (typeof data.reviews === typeof undefined) {
                _this.rating = 0;
            }
            Object.keys(data.reviews).forEach(function (key) {
                var $key = key;
                var uid = data.reviews[key].uid;
                var rew = data.reviews[key].review;
                var email_id = data.reviews[key].email;
                var ret = data.reviews[key].rating || 0;
                _this.review.push({
                    id: uid,
                    review: rew,
                    email: email_id,
                    $key: $key,
                    rating: ret
                });
            });
            _this.calculateRatings();
        });
    };
    ProductDetailsComponent.prototype.calculateRatings = function () {
        var count = 0;
        var oldRating = 0;
        this.review.map(function (obj) {
            if (obj.rating !== 0) {
                var rat = Number(obj.rating);
                oldRating = oldRating + rat;
                count++;
            }
        });
        if (oldRating !== 0) {
            this.rating = oldRating / count;
        }
        else {
            this.rating = 0;
        }
    };
    ProductDetailsComponent.prototype.displayImage = function (img, i) {
        this.image = img;
    };
    ProductDetailsComponent.prototype.addProductToCart = function (product) {
        if (this.Authuser === null) {
            this.router.navigate(["login"]);
            this.toast.error("You Need to Login first for this");
        }
        else {
            this.wbService.userCart(this.Authuser.uid, product);
            this.toast.success("Product added to your cart");
            this.router.navigate(["cart"]);
        }
    };
    ProductDetailsComponent.prototype.onSubmitUserReview = function (f) {
        var $this = this;
        if (this.Authuser) {
            var review = {
                uid: this.Authuser.uid,
                review: f.value.userReview,
                rating: f.value.userrating || undefined,
                email: this.Authuser.email
            };
            if (typeof review.rating === typeof undefined) {
                delete review.rating;
            }
            this.wbService.userReview(this.Authuser.uid, this.$key, review);
            this.getProductDetails();
        }
        else {
            this.toast.error("You need to login first");
            this.router.navigate(["login"]);
        }
    };
    ProductDetailsComponent.prototype.onDeleteReviewC = function (rev, i) {
        if (confirm("Are you Sure?")) {
            this.wbService.deleteReview(this.$key, rev.$key);
            this.toast.success("Your Review deleted");
            this.getProductDetails();
        }
    };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-product-details",
        template: __webpack_require__("../../../../../src/app/components/user/product-details/product-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/product-details/product-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["d" /* ToastrService */]) === "function" && _e || Object])
], ProductDetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=product-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-dashboard/user-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n  list-style: none;\n}\n.card-image img {\n  max-height: 100%;\n  padding: 10px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: 100%;\n}\n.dashboard {\n  overflow-x: hidden;\n  position: relative;\n  top: 0;\n  height: 100vh;\n  padding: 0px;\n}\n.sidebar {\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 250px;\n  height: auto;\n\n  /* padding: 15px;\n    background-color: white;\n    position: relative;\n    border-radius: 6px;\n    box-shadow: 0 1px 5px 0 rgba(45, 62, 80, .12);\n    width: 100%;\n    margin: 0px 0 20px 0;\n    position: relative;\n    border-top: 5px solid #5a85a7; */\n}\n.side-menu {\n  overflow: hidden;\n  padding-top: 0px;\n  min-height: auto;\n  margin-top: 10px;\n}\n.card-title {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 100%;\n  width: 100%;\n  display: -ms-grid;\n  display: grid;\n  margin: 0 auto;\n  text-align: center;\n}\n.product-container {\n  padding: 0px;\n  height: auto;\n  background-color: #fff;\n}\n.card {\n  display: inline-block;\n  background: #fff;\n  padding: 5px;\n  margin-bottom: 30px;\n  margin-top: 12px;\n  cursor: pointer;\n  height: 322px;\n}\n\n.navBar {\n  color: black;\n}\n.card-image {\n  height: 200px;\n  width: 200px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 10px;\n  overflow: hidden;\n}\n\n.navBar {\n  border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n}\n.panel-body {\n  padding: 0px;\n}\n.favourite {\n  margin: 10px 10px 0 0;\n  color: darkgrey;\n}\n.active {\n  color: red;\n}\n.inactive {\n  background: transparent;\n}\n.product-name {\n  text-overflow: ellipsis;\n  text-align: center;\n}\np {\n  font-size: 14px;\n  width: 200px;\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.product-description {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #ddd;\n  overflow: hidden;\n  width: 100%;\n  height: 0;\n  transition: 0.5s ease;\n  opacity: 0.8;\n  color: black;\n  text-align: justify;\n}\n\n.card:hover {\n  box-shadow: 0 3px 16px 0 #9d9d9d;\n}\n\n.description-text {\n  white-space: nowrap;\n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n.product-price {\n  text-align: center;\n  padding: 10px 0px;\n  font-size: 17px;\n  font-weight: 500;\n}\n.productList {\n  background-color: #ddd;\n  padding: 15px 29px;\n  margin-left: 14px;\n}\n.sidebar-heading {\n  margin-top: 0px;\n  padding: 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.sidebar ul {\n  padding: 0px;\n}\n.category-name {\n  text-align: center;\n}\n\na {\n  text-decoration: none;\n}\n.menu-heading {\n  color: black !important ;\n  font-size: 16px;\n}\n.category-list {\n  color: #7f7f7f;\n  margin: 7px 0;\n  padding-left: 10px;\n  cursor: pointer;\n}\n.sidebar-header {\n  font-size: 21px;\n  padding: 11px;\n}\n.collapsed {\n  margin-bottom: 7px;\n  border-bottom: 1px solid #ddd;\n  padding: 11px;\n}\n#new {\n  border-bottom: 1px solid #ddd;\n}\n.search-list li {\n  border: 1px solid #ddd;\n  margin-top: -1px;\n  background-color: #f6f6f6;\n  padding: 7px;\n  text-decoration: none;\n  font-size: 14px;\n  color: black;\n  white-space: nowrap;\n}\n.toggle-btn {\n  display: block;\n}\n.collapsedin {\n  display: block;\n}\n.search-list {\n  padding: 0px;\n  cursor: pointer;\n  line-height: 1.42857143;\n  margin-top: 0;\n  margin-bottom: 10px;\n  position: absolute;\n  z-index: 10000;\n}\n.navbar-form {\n  position: relative;\n}\n.btn-success {\n  padding: 0px 10px;\n  font-size: 14px;\n  cursor: auto;\n}\n.btn-success {\n  font-size: 14px;\n}\n\n.dropdownMenu {\n  display: block;\n}\n#dropdown {\n  display: block;\n}\n.main-container {\n  border-left: 1px solid #ddd;\n  display: block;\n}\n.favourite-list,\n.cart-list,\n.profile-list {\n  margin-bottom: 7px;\n  border-bottom: 1px solid #ddd;\n  padding: 11px;\n  color: #7f7f7f;\n  font-size: 16px;\n  cursor: pointer;\n}\n.sk-cube-grid {\n  width: 86px;\n  height: 86px;\n  margin: 100px auto;\n}\n\n.sk-cube-grid .sk-cube {\n  width: 33%;\n  height: 33%;\n  background-color: #b33c3c;\n  float: left;\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n.sk-cube-grid .sk-cube1 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.sk-cube-grid .sk-cube2 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n.sk-cube-grid .sk-cube3 {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n.sk-cube-grid .sk-cube4 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n.sk-cube-grid .sk-cube5 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.sk-cube-grid .sk-cube6 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n.sk-cube-grid .sk-cube7 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.sk-cube-grid .sk-cube8 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n.sk-cube-grid .sk-cube9 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%,\n  70%,\n  100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1);\n  }\n}\n\n@keyframes sk-cubeGridScaleDelay {\n  0%,\n  70%,\n  100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1);\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .main-container{\n    border: none;\n    margin-top: 30px;\n  }\n  .side-menu{\n    z-index: 999999;\n    position: absolute;\n    background: #ffffff;\n    padding: 3px;\n    border: 1px solid #dedede;\n    text-align: justify;\n    /* top: 5%; */\n    left: 0;\n  }\n\n}\n@media only screen and (max-width: 768px) {\n  .side-menu {\n    /* width: auto;\n    float: right;\n    display: block; */\n    z-index: 999999;\n    position: absolute;\n    background: #ffffff;\n    padding: 3px;\n    border: 1px solid #dedede;\n    text-align: justify;\n    top: 9%;\n    left: 24px;\n  }\n  .sidebar {\n    /* width: auto; */\n    float: right;\n    position: absolute;\n    display: block;\n  }\n  .product-container {\n    height: auto;\n    display: block;\n  }\n  .toggle-btn {\n    display: block;\n  }\n  .main-container {\n    /* position: absolute; */\n    padding: 0px;\n    text-align: center;\n  }\n  .toggle-btn {\n    display: block;\n    cursor: pointer;\n    left: 10px;\n    top: -38px;\n    z-index: 10 !important;\n    padding: 3px;\n    background-color: #ffffff;\n    color: #000;\n    text-align: center;\n  }\n  .main-container{\n    border: none;\n  }\n  \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-dashboard/user-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n  <div class=\"navBar\">\n    <app-nav></app-nav>\n  </div>\n  <div class=\"row\">\n    <div class=\"container\">\n      \n      <div class=\"main-content\">\n          <!-- col-xs-12 col-sm-5 -->\n        <div class=\" col-md-3 col-xs-12 sidebar\"> \n          <div class=\"side-menu\">\n            <div class=\"sidebar-header toggle-btn dropdown-toggle\" data-toggle=\"collapse\" data-target=\"#dropdownMenu\" >\n              <span (click) = \"toggleDropdown()\">Filter\n                <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <div id=\"dropdownMenu\" *ngIf = \"showDropdown\">\n              <div id=\"dropdown\">\n                <li data-toggle=\"collapse\" data-target=\"#new\" class=\"collapsed\">\n                  <a href=\"#\">\n                    <span class=\"menu-heading\"> Category </span>\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                  </a>\n                </li>\n                <ul class=\"sub-menu collapse\" id=\"new\">\n                  <a href=\"\" *ngFor='let cat of categories' [routerLink]='[\"/category/\"+cat.name]'>\n                    <li>\n                      <h5 class=\"category-list\">\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        {{cat.name}}</h5>\n                    </li>\n                  </a>\n                </ul>\n                <li class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#sort\">\n                  <a href=\"#\">\n                    <span class=\"menu-heading\">Sort By </span>\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                  </a>\n                </li>\n                <ul class=\"sub-menu collapse\" id=\"sort\">\n                  <a>\n                    <li>\n                      <h5 class=\"category-list\" (click)=\"sortPopular()\">\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        Popularity</h5>\n                    </li>\n                    <li>\n                      <h5 class=\"category-list\" (click) = \"sortLowProduct()\">\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        Price Low to High</h5>\n                    </li>\n                    <li>\n                      <h5 class=\"category-list\" (click) = \"sortHighProduct()\">\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        Price High to Low</h5>\n                    </li>\n                  </a>\n                </ul>\n                <li class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#account\" *ngIf=\"profile.role !=='admin'\">\n                  <a href=\"#\">\n                    <span class=\"menu-heading\">My Account </span>\n                    <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                  </a>\n                </li>\n                <ul class=\"sub-menu collapse\" id=\"account\">\n                  <a>\n                    <li>\n                      <h5 class=\"favourite-list\" routerLink='/favorite'>\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        Wishlist</h5>\n                    </li>\n                    <li>\n                      <h5 class=\"cart-list\" routerLink='/cart'>\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        Cart</h5>\n                    </li>\n                    <li>\n                      <h5 class=\"profile-list\" routerLink='/user-profile'>\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                        My Profile </h5>\n                    </li>\n                  </a>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- <app-menu></app-menu> -->\n        <div class=\"col-md-12 col-lg-9 col-xs-12 container main-container\">\n          <div class=\"row\">\n            <div *ngFor=\"let product of product let i = index \" class=\" col-md-4 col-lg-3 col-sm-6 col-xs-12 dd\">\n              <div class=\"card\">\n                <div (click)='toggleFavourite(product)'>\n                  <span>\n                    <i class=\"glyphicon glyphicon-heart favourite pull-right\" [ngClass]=\"{active:product.userFavourite === true}\"></i>\n                  </span>\n                </div>\n                <div class=\"panel-body\" [routerLink]=\"['/product-detail/'+product.key]\">\n                  <div class=\"card-image\">\n                    <img src=\"{{product.productImage[0]}}\">\n                  </div>\n                  <div class=\"product-name\">\n                    <span>\n                      <h4>\n                        <p>{{product.productName}}</p>\n                      </h4>\n                    </span>\n                  </div>\n                  <div class=\"product-review col-md-12\">\n                    <span class=\"col-md-6\">\n                      <span class=\"btn btn-success fa fa-star\">\n                        <b> {{product.rating | number: '1.1-1'}}</b>\n                      </span>\n                    </span>\n\n                  </div>\n                  <div class=\"col-md-12 \">\n                    <span class=\"col-md-6\">\n                      <span class=\"product-price\">{{product.productPrice | currency:\"INR\" : true :'1.0-2'}}</span>\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"sk-cube-grid\" *ngIf=\"loader\">\n    <div class=\"sk-cube sk-cube1\"></div>\n    <div class=\"sk-cube sk-cube2\"></div>\n    <div class=\"sk-cube sk-cube3\"></div>\n    <div class=\"sk-cube sk-cube4\"></div>\n    <div class=\"sk-cube sk-cube5\"></div>\n    <div class=\"sk-cube sk-cube6\"></div>\n    <div class=\"sk-cube sk-cube7\"></div>\n    <div class=\"sk-cube sk-cube8\"></div>\n    <div class=\"sk-cube sk-cube9\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-dashboard/user-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserDashboardComponent = (function () {
    function UserDashboardComponent(router, wbService, authService, toast) {
        var _this = this;
        this.router = router;
        this.wbService = wbService;
        this.authService = authService;
        this.toast = toast;
        this.profile = {};
        this.product = [];
        this.searchProducts = [];
        this.categories = [];
        this.userFilter = { name: "" };
        this.filteredData = this.product;
        this.review = [];
        this.loader = false;
        this.userFavourite = false;
        this.showDropdown = false;
        // this.toastr.setRootViewContainerRef(vcr);
        this.authService.getAuth().subscribe(function (auth) {
            _this.Authuser = auth;
        });
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = true;
        this.wbService.getProductsForUsers().subscribe(function (data) {
            _this.loader = false;
            _this.product = __WEBPACK_IMPORTED_MODULE_4_lodash__["values"](data);
            data.map(function (obj) {
                var count = 0;
                var oldRating = 0;
                if (typeof obj.reviews !== typeof undefined) {
                    Object.values(obj.reviews).forEach(function (key) {
                        if (key.rating) {
                            var rat = Number(key.rating);
                            oldRating = oldRating + rat;
                            count++;
                        }
                    });
                    obj.rating = oldRating / count || 0;
                }
                else {
                    obj.rating = 0;
                }
            });
            _this.getFavourites();
        });
        this.getCategories();
    };
    UserDashboardComponent.prototype.toggleDropdown = function () {
        this.showDropdown = !this.showDropdown;
    };
    UserDashboardComponent.prototype.toggleFavourite = function (product) {
        if (this.Authuser === null) {
            this.router.navigate(["login"]);
            this.toast.error("You Need to Login first for this");
        }
        else {
            if (typeof product.userFavourite === typeof undefined ||
                product.userFavourite === false) {
                product.userFavourite = true;
                this.wbService.userFavourite(this.Authuser.uid, product);
                this.toast.success("Added to your Wishlist");
            }
            else {
                product.userFavourite = false;
                this.onRemoveUserFavourite(product);
            }
        }
    };
    UserDashboardComponent.prototype.onRemoveUserFavourite = function (i) {
        this.wbService.removeAsFavourite(this.Authuser.uid, i);
        this.toast.success("Removed from your Wishlist");
    };
    UserDashboardComponent.prototype.sortPopular = function () {
        this.product = __WEBPACK_IMPORTED_MODULE_4_lodash__["shuffle"](this.product);
    };
    UserDashboardComponent.prototype.sortLowProduct = function (sort) {
        this.product = __WEBPACK_IMPORTED_MODULE_4_lodash__["orderBy"](this.product, ["productPrice"], ["asc"]);
    };
    UserDashboardComponent.prototype.sortHighProduct = function (sort) {
        this.product = __WEBPACK_IMPORTED_MODULE_4_lodash__["orderBy"](this.product, ["productPrice"], ["desc"]);
    };
    UserDashboardComponent.prototype.getFavourites = function () {
        var _this = this;
        this.wbService
            .getUserFavouraite(this.Authuser.uid)
            .subscribe(function (data) {
            _this.product.map(function (prod) {
                data.filter(function (obj) {
                    if (prod.id === obj.id) {
                        prod.userFavourite = true;
                    }
                });
            });
        });
    };
    UserDashboardComponent.prototype.getCategories = function () {
        var _this = this;
        this.wbService.getCategories().subscribe(function (data) {
            var cat = [];
            data.map(function (obj) {
                obj = Object.assign([], obj);
                _this.categories.push(obj);
            });
        });
    };
    UserDashboardComponent.prototype.search = function (val) {
        if (val) {
            this.filteredData = this.product;
            this.filteredData = this.product.filter(function (d) { return d.productName.toLowerCase().indexOf(val) >= 0; });
        }
    };
    return UserDashboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("input"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], UserDashboardComponent.prototype, "inputElRef", void 0);
UserDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-user-dashboard",
        template: __webpack_require__("../../../../../src/app/components/user/user-dashboard/user-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-dashboard/user-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["d" /* ToastrService */]) === "function" && _e || Object])
], UserDashboardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard{\n\tposition: relative;\n    top: 0;\n    height: 100vh;\n    /*background-color: #ddd;*/\n}\n.sideBar-image{\n\n    background-image: url(" + __webpack_require__("../../../../../src/assets/image/lock.jpg") + ");\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: 50%;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n    box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 1);\n}\n.sideBar{\n   position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    width: 260px;\n    overflow: auto;\n    box-shadow: 6px 2px 12px #9d9d9d;\n}\n.main-content{\n    padding-top: 32px;\n}\n.userProfile{\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 20px;\n    padding: 35px 0;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border-radius: 6px;\n    color: rgba(0,0,0,.87);\n    background: #fff;\n    border: 1px solid #ddd;\n    /*padding:8px;*/\n}\n.panel-heading{\n    color:#fff;\n    margin: -50px 15px 20px 18px;\n    border-radius: 3px;\n    padding: 15px;\n    background-color: #ef5350;\n    position: relative;\n    box-shadow:6px 5px 15px #9d9d9d; \n}\n.btn{\n    background-color: #ef5350;\n    color: #fff;\n}\n.button{\n    padding-top: 18px;\n}\n.fa-user{\n    color:#fff;\n}\n.panel-default{\n    padding: 20px;\n}\ntextarea{\n    resize: none;\n}\n.form-control {\n  border: 0;\n  background-image: linear-gradient( #9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);\n  background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: rgba(0, 0, 0, 0);\n  transition: background 0s ease-out;\n  float: none;\n  box-shadow: none;\n  border-radius: 0;\n  font-weight: 400;\n  \n  }\n.form-control:focus { \n   outline: none;\n   background-image: linear-gradient( #55d4af, #55d4af), linear-gradient(#D2D2D2, #D2D2D2);\n   background-size: 100% 2px,100% 1px;\n   box-shadow: none;\n   transition: 0.5s;\n}\n.navBar{\n   border-bottom: 1px solid #eee;\n  box-shadow: 6px 2px 12px #9d9d9d;\n}\nbutton:focus {\n    outline: 0 !important;\n}\n.updateButton:active {\n    background-color: #20bd99;\n    color:#fff;\n}\n.updateButton:hover {\n    background-color: #20bd99;\n    color:#fff;\n}\n.updateButton {\n    background-color: #20bd99;\n    color:#fff;\n}\n.tx-danger{\n  color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n\t<div class=\"navBar\">\n\t\t<app-nav></app-nav>\n\t</div>\n\t<div class=\"row\">\n\t<div class=\"col-md-12 main-content\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 userProfile\">\n\t\t\t\t\t<div class=\"panel-heading\"><h4><i class=\"fa fa-user \" aria-hidden=\"true\"></i> My Profile</h4></div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<form #f = 'ngForm' (submit) = \"createUserProfile(f)\" >\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"firstName\" >First Name: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"firstName\" class=\"form-control\" required placeholder=\"FirstName\"  [(ngModel)]='profile.firstName' minlength=\"3\" #firstName='ngModel'>\n\t\t\t\t\t\t\t\t\t<div *ngIf='firstName?.errors?.required && firstName?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tFirst name Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='firstName?.errors?.minlength && firstName?.touched' class=\" alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tMust be minimum 3 characters\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"lastName\" >Last Name: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"lastName\" class=\"form-control\" required placeholder=\"LastName\"  [(ngModel)]='profile.lastName' minlength=\"3\" #lastName='ngModel'>\n\t\t\t\t\t\t\t\t\t<div *ngIf='lastName?.errors?.required && lastName?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tLast name Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='lastName?.errors?.minlength && lastName?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tMust be minimum 3 characters\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"phone\" >Contact No: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"phone\" class=\"form-control\" required placeholder=\"Contact Number\"  [(ngModel)]='profile.phone' minlength=\"10\" #phone='ngModel' maxlength=\"10\" pattern=\"[0-9]*\" >\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div [hidden]=\"phone.valid || phone.pristine\"\n      \t\t\t\t\t\t\t\t\t\tclass=\"alert alert-danger\">\n      \t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!phone.hasError('minlength')\">phone should be 10digit</div>\n      \t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!phone.hasError('required')\">phone is required</div>\n      \t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!phone.hasError('touched')\">phone is required</div>\n      \t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!phone.hasError('pattern')\">phone numberr should be only numbers</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"email\" >Email: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"email\"  name=\"email\" class=\"form-control\" required placeholder=\"email\" [(ngModel)]='profile.email' #email='ngModel' pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" >\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='email?.errors?.required && email?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tEmail Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div [hidden]=\"email.valid || email.pristine\"\n   \t\t\t\t\t\t\t\t\t\tclass=\"alert alert-danger\">\n  \t \t\t\t\t\t\t\t\t\t<div [hidden]=\"!email.hasError('required')\">Email is required</div>\n   \t\t\t\t\t\t\t\t\t\t<div [hidden]=\"!email.hasError('pattern')\">Email format should be \n      \t\t\t\t\t\t\t\t\t<small><b>joe@abc.com</b></small>\n   \t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"address\" >Address: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<textarea type=\"text\"  name=\"address\" class=\"form-control\" required placeholder=\"Address\" [(ngModel)]='profile.address' #address='ngModel'></textarea>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='address?.errors?.required && address?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tAddress Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"city\" >City: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"city\" class=\"form-control\" required placeholder=\"city\" [(ngModel)]='profile.city' #city='ngModel'>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='city?.errors?.required && city?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tCity Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"country\" >Country: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"country\" class=\"form-control\" required placeholder=\"country\" [(ngModel)]='profile.country' #country='ngModel'>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='country?.errors?.required && country?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tCountry Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"postal code\" >Postal Code: <span class=\"tx-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\"  name=\"postalCode\" class=\"form-control\" required placeholder=\"POSTAL CODE\" [(ngModel)]='profile.postalCode' #postalCode='ngModel' >\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div *ngIf='postalCode?.errors?.required && postalCode?.touched' class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t\t\t\tPostal Code Required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 button\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default pull-right updateButton\" type=\"submit\" [disabled]=f.invalid>Update Profile</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileComponent = (function () {
    function UserProfileComponent(router, toaster, wbService, authService) {
        this.router = router;
        this.toaster = toaster;
        this.wbService = wbService;
        this.authService = authService;
        this.profile = {};
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            _this.Authuser = auth;
            _this.wbService.getUserProfile(auth.uid).valueChanges().subscribe(function (data) {
                _this.profile = data || {};
            });
        });
    };
    UserProfileComponent.prototype.createUserProfile = function (f) {
        this.profile.role = 'guest';
        this.wbService.newUserProfile(this.profile, this.Authuser.uid);
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/components/user/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["d" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["d" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_web_store_service__["a" /* WebStoreService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _d || Object])
], UserProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service_service__ = __webpack_require__("../../../../../src/app/services/auth-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = (function () {
    function AuthGuard(angularFireAuth, router, authService, wbService) {
        this.angularFireAuth = angularFireAuth;
        this.router = router;
        this.authService = authService;
        this.wbService = wbService;
        this.isAuthorised = false;
        this.profile = {};
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.angularFireAuth.authState.map(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service_service__["a" /* AuthServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service_service__["a" /* AuthServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_web_store_service__["a" /* WebStoreService */]) === "function" && _d || Object])
], AuthGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/img.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImgPipe = (function () {
    function ImgPipe(dom) {
        this.dom = dom;
    }
    ImgPipe.prototype.transform = function (value, args) {
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    return ImgPipe;
}());
ImgPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'img'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object])
], ImgPipe);

var _a;
//# sourceMappingURL=img.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_web_store_service__ = __webpack_require__("../../../../../src/app/services/web-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthServiceService = (function () {
    function AuthServiceService(wbService, router, angularFireAuth) {
        this.wbService = wbService;
        this.router = router;
        this.angularFireAuth = angularFireAuth;
    }
    AuthServiceService.prototype.getAuth = function () {
        return this.angularFireAuth.authState;
    };
    AuthServiceService.prototype.signInWithFacebook = function () {
        return this.angularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider());
    };
    AuthServiceService.prototype.signInWithGoogle = function () {
        return this.angularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthServiceService.prototype.signInWithEmail = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthServiceService.prototype.newUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthServiceService.prototype.logout = function () {
        return this.angularFireAuth.auth.signOut();
    };
    return AuthServiceService;
}());
AuthServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_web_store_service__["a" /* WebStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_web_store_service__["a" /* WebStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], AuthServiceService);

var _a, _b, _c;
//# sourceMappingURL=auth-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/web-store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebStoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebStoreService = (function () {
    function WebStoreService(router, angularFire) {
        this.router = router;
        this.angularFire = angularFire;
        this.sellers = this.angularFire.list("/sellers");
        this.users = this.angularFire.list("/users");
        this.categories = this.angularFire.list("/categories");
        this.favourites = this.angularFire.list("/favourites");
        this.products = this.angularFire.list("/products");
    }
    WebStoreService.prototype.addNewProduct = function (product, id) {
        var prod = this.angularFire.list("sellers/" + id + "/products");
        return prod.push(product);
    };
    WebStoreService.prototype.newProduct = function (key, product) {
        this.angularFire.list("/products").set(key, product);
        return;
    };
    WebStoreService.prototype.productCategory = function (category) {
        var c = { name: category };
        this.categories.push(c);
    };
    WebStoreService.prototype.getCategories = function () {
        return this.angularFire
            .list("/categories")
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        });
    };
    WebStoreService.prototype.newUserProfile = function (profile, uid) {
        var pro = this.angularFire.object("users/" + uid + "/profile");
        pro.set(profile);
        return;
    };
    WebStoreService.prototype.getUserProfile = function (i) {
        return this.angularFire.object("/users/" + i + "/profile");
    };
    WebStoreService.prototype.getProducts = function (id) {
        return this.angularFire
            .list("sellers/" + id + "/products")
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        });
    };
    WebStoreService.prototype.deleteProduct = function (id, pr) {
        this.angularFire.list("sellers/" + id + "/products/" + pr.key).remove();
        this.angularFire.list("/products/" + pr.key).remove();
    };
    WebStoreService.prototype.getProduct = function (id, key) {
        return this.angularFire
            .object("sellers/" + id + "/products/" + key)
            .snapshotChanges()
            .map(function (action) {
            var $key = action.payload.key;
            var data = __assign({ $key: $key }, action.payload.val());
            return data;
        });
    };
    WebStoreService.prototype.updateProduct = function (id, $key, pro) {
        delete pro.$key;
        this.angularFire.list("sellers/" + id + "/products").update($key, pro);
        this.angularFire.list("/products").update($key, pro);
    };
    WebStoreService.prototype.getProductsForUsers = function () {
        return this.angularFire
            .list("/products")
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        });
    };
    WebStoreService.prototype.getProductDetail = function (id) {
        return this.angularFire
            .object("products/" + id)
            .snapshotChanges()
            .map(function (action) {
            var $key = action.payload.key;
            var data = __assign({ $key: $key }, action.payload.val());
            return data;
        });
    };
    WebStoreService.prototype.userCart = function (id, p) {
        var pro = this.angularFire.object("users/" + id + "/cart/" + p.$key);
        delete p.$key;
        pro.set(__assign({}, p));
    };
    WebStoreService.prototype.getUserCartProducts = function (id) {
        return this.angularFire
            .list("/users/" + id + "/cart")
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        });
    };
    WebStoreService.prototype.userReview = function (id, key, review) {
        var rew = this.angularFire.object("products/" + key + "/reviews/" + review.uid);
        return rew.set(review);
    };
    WebStoreService.prototype.deleteReview = function (key, id) {
        this.angularFire.list("products/" + key + "/reviews/" + id).remove();
    };
    WebStoreService.prototype.getUserFavouraite = function (id) {
        return this.angularFire
            .list("/users/" + id + "/favourites")
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        });
    };
    WebStoreService.prototype.userFavourite = function (id, i) {
        var pro = this.angularFire.object("users/" + id + "/favourites/" + i.key);
        pro.set(__assign({}, i));
    };
    WebStoreService.prototype.removeAsFavourite = function (id, i) {
        return this.angularFire.object("users/" + id + "/favourites/" + i.key).remove();
    };
    WebStoreService.prototype.getProductsByCategory = function () {
        return this.angularFire
            .list("/products")
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (action) { return (__assign({ key: action.key }, action.payload.val())); });
        });
    };
    WebStoreService.prototype.removeFromCart = function (id, pro) {
        return this.angularFire.object("users/" + id + "/cart/" + pro.key).remove();
    };
    WebStoreService.prototype.getUserInfo = function (id) {
        return this.angularFire.object("users/" + id + "/profile");
    };
    WebStoreService.prototype.adminProfile = function (profile, uid) {
        var pro = this.angularFire.object("sellers/" + uid + "/profile");
        pro.set(profile);
        return;
    };
    WebStoreService.prototype.getAdminProfile = function (id) {
        return this.angularFire.object("/sellers/" + id + "/profile");
    };
    return WebStoreService;
}());
WebStoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], WebStoreService);

var _a, _b;
//# sourceMappingURL=web-store.service.js.map

/***/ }),

/***/ "../../../../../src/app/sort.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (productPrice, product) {
        productPrice.forEach(function (currentField) {
            var orderType = 'ASC';
            if (currentField[0] === '-') {
                currentField = currentField.substring(1);
                orderType = 'DESC';
            }
            productPrice.sort(function (a, b) {
                if (orderType === 'ASC') {
                    if (a[currentField] < b[currentField])
                        return -1;
                    if (a[currentField] > b[currentField])
                        return 1;
                    return 0;
                }
                else {
                    if (a[currentField] < b[currentField])
                        return 1;
                    if (a[currentField] > b[currentField])
                        return -1;
                    return 0;
                }
            });
        });
        return productPrice;
    };
    return SortPipe;
}());
SortPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sort'
    })
], SortPipe);

//# sourceMappingURL=sort.pipe.js.map

/***/ }),

/***/ "../../../../../src/assets/image/lock.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lock.35f7d126c07a40a893f3.jpg";

/***/ }),

/***/ "../../../../../src/assets/image/login.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "login.59fc83e26c663ade5dca.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map