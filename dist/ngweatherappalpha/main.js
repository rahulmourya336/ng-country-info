(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".danger {\r\n    color: red;\r\n}\r\n\r\n* {\r\n  font-family: \"Roboto Mono\", monospace;\r\n}\r\n\r\nh1 {\r\n  margin: 0 auto;\r\n}\r\n\r\n.searchbar__maxwidth {\r\n  width: 80%;\r\n  margin: 0.6em;\r\n}\r\n\r\n.social-signin {\r\n  float: right !important;\r\n  margin: 0; \r\n  padding: 0;\r\n}\r\n\r\n.row {\r\n  margin: 0 0 0 58%;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .searchbar__maxwidth {\r\n    width: 95%;\r\n    margin: 0.6em;\r\n  }\r\n  mat-expansion-panel {\r\n    display: block !important;\r\n  }\r\n  .header {\r\n    font-size: small;\r\n  }\r\n  .row {\r\n    margin: 0 0 0 15%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-toolbar-row>\n    <span class=\"header\">Search for {{ countryName || 'country' }}</span>\n\n    <!-- View Roadmap -->\n    <div class=\"row\">\n      <button mat-raised-button (click)=\"openDialog()\">Roadmap</button>\n    </div>\n\n\n  </mat-toolbar-row>\n\n  <!-- <mat-toolbar-row>\n    <div class='social-signin'>\n      <div class=\"g-signin2\" data-onsuccess=\"onSignIn\" *ngIf=\"!validUser\"></div>\n      <a href='#' onclick='signOut();'>Sign out</a>\n    </div>\n  </mat-toolbar-row> -->\n</mat-toolbar>\n\n<mat-form-field class='searchbar__maxwidth' [hideRequiredMarker]='options.value.hideRequired'\n  [floatLabel]='options.value.floatLabel'>\n  <input matInput placeholder='Enter a country name' required autofocus [(ngModel)]='countryName'\n    (keyup.enter)='searchCountry()' #countryInput />\n  <mat-progress-spinner mode='indeterminate' [diameter]=20 class='float-right' *ngIf='isLoading' matSuffix>\n  </mat-progress-spinner>\n</mat-form-field>\n\n\n<app-country-info [countryList]='countryList' [isLoading]='isLoading'></app-country-info>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _country_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-api.service */ "./src/app/country-api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _roadmap_overview_roadmap_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roadmap-overview/roadmap-overview.component */ "./src/app/roadmap-overview/roadmap-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AppComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function AppComponent(fb, API, iconRegistry, sanitizer, snackBar, dialog) {
        this.fb = fb;
        this.API = API;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.isLoading = 0;
        this.countryList = [];
        console.log('Init');
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    AppComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_roadmap_overview_roadmap_overview_component__WEBPACK_IMPORTED_MODULE_5__["RoadmapOverviewComponent"], {
            width: '45em',
            height: '25em'
        });
    };
    AppComponent.prototype.searchCountry = function () {
        var _this = this;
        if (this.countryName === '' || !this.countryName) {
            this.openSnackBar('Please enter a country name', 'Okay');
            return;
        }
        this.countryList = [];
        this.isLoading = 1;
        console.log(this.API.getCountryByName(this.countryName));
        this.API.getCountryByName(this.countryName).subscribe(function (res) {
            console.log(res);
            _this.countryList = res;
            _this.isLoading = 0;
            _this.openSnackBar(_this.countryList.length + " countries found", 'Dismiss');
        }, function (err) {
            _this.isLoading = 0;
            _this.openSnackBar("Cannot find country " + _this.countryName, 'Dismiss');
            console.error(err);
        });
    };
    AppComponent.prototype.openSnackBar = function (message, action) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.snackBar.open(message, action, {
                    duration: 2000,
                });
                return [2 /*return*/];
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _country_api_service__WEBPACK_IMPORTED_MODULE_2__["CountryAPIService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _country_info_country_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./country-info/country-info.component */ "./src/app/country-info/country-info.component.ts");
/* harmony import */ var _roadmap_overview_roadmap_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./roadmap-overview/roadmap-overview.component */ "./src/app/roadmap-overview/roadmap-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { CustomComponentComponent } from './custom-component/custom-component.component';
// import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
// ngx-material component library - https://material.angular.io/guide/getting-started






// const config = new AuthServiceConfig([
//   {
//     id: 'Ke9XCD1EWoK7MW3rEGgCmdGe',
//     provider: new GoogleLoginProvider('260121249713-ilvng8rj1bjgfj36k49lclq2th4ecoc4.apps.googleusercontent.com')
//   }
//   ]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _country_info_country_info_component__WEBPACK_IMPORTED_MODULE_10__["CountryInfoComponent"], _roadmap_overview_roadmap_overview_component__WEBPACK_IMPORTED_MODULE_11__["RoadmapOverviewComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]
                // SocialLoginModule.initialize(config)
            ],
            entryComponents: [
                _roadmap_overview_roadmap_overview_component__WEBPACK_IMPORTED_MODULE_11__["RoadmapOverviewComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/country-api.service.ts":
/*!****************************************!*\
  !*** ./src/app/country-api.service.ts ***!
  \****************************************/
/*! exports provided: CountryAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryAPIService", function() { return CountryAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryAPIService = /** @class */ (function () {
    function CountryAPIService(http) {
        this.http = http;
        this.BASEURL = 'https://restcountries.eu/rest/v2';
    }
    CountryAPIService.prototype.getCountryByName = function (name) {
        console.log('Searching for ', name);
        return this.http.get(this.BASEURL + "/name/" + name);
    };
    CountryAPIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CountryAPIService);
    return CountryAPIService;
}());



/***/ }),

/***/ "./src/app/country-info/country-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/country-info/country-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@media screen and (max-width: 480px) {\r\n  #main { background-image: url('world_bg_medium.svg');}\r\n}\r\n\r\n@media screen and (max-width: 280px) {\r\n  #main { background-image: url('world_bg_small.svg');}\r\n}\r\n\r\n#main {\r\n    background-image: url('world_bg.svg');\r\n    background-repeat: repeat-y;\r\n    background-attachment: fixed;\r\n    -webkit-backdrop-filter: blur(3px);\r\n            backdrop-filter: blur(3px);\r\n    width: 100%;\r\n    height: 75vh;\r\n    background-origin: content-box;\r\n  }\r\n\r\n.country-card {\r\n    max-width: 400px;\r\n  }\r\n\r\n.country-header-image {\r\n    background-size: cover;\r\n  }\r\n\r\n#country-info {\r\n    width: 40%;\r\n    float: left;\r\n    margin: 1em;\r\n    min-height: 4em;\r\n    \r\n  }\r\n\r\n.country-name {\r\n    margin: 0.9em 0 0 1em;\r\n    vertical-align: middle;\r\n    text-overflow: ellipsis;\r\n    display: block;\r\n    clear: both;\r\n  }\r\n\r\n.country-capital {\r\n      margin: 1.4em 0 0 0.5em;\r\n      text-overflow: ellipsis;\r\n      display: block;\r\n      font-size: smaller;\r\n      color: darkgrey;\r\n  }\r\n\r\n.country-bookmark {\r\n      margin: 0 0 0 0;\r\n      float: right;\r\n      cursor: pointer;\r\n  }\r\n\r\n.country-image {\r\n      margin: 0.6em  0 0 0;\r\n    border-radius: 50%;\r\n    border: 0.2em solid rgba(0, 0, 0, 0.15);\r\n  }\r\n\r\n.metadata-flag {\r\n      margin: 1em 0 0 1.5em;\r\n      float: left;\r\n      cursor: pointer;\r\n  }\r\n\r\n.metadata-content {\r\n      margin: 2em 0 0 1.5em;\r\n      clear: both;\r\n      display: -ms-grid;\r\n      display: grid;\r\n      -ms-grid-columns: auto auto auto;\r\n          grid-template-columns: auto auto auto;\r\n  }\r\n\r\n.content-items {\r\n      margin: 0.5em 0 0 0;\r\n      display: inline-block;\r\n  }\r\n\r\n.heading {\r\n      font-weight: bold;\r\n      text-align: right;\r\n  }\r\n\r\n@media only screen and (max-width: 482px) {\r\n    .country-image {\r\n      border-radius: 50%;\r\n    }\r\n  \r\n    .country-name {\r\n      font-size: smaller;\r\n    }\r\n  }\r\n\r\n@media only screen and (max-width: 682px) {\r\n    .country-image {\r\n      border-radius: 50%;\r\n    }\r\n    body {\r\n      font-size: small;\r\n    }\r\n    \r\n    #country-info {\r\n        display: block !important;\r\n        width: 95%;\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/country-info/country-info.component.html":
/*!**********************************************************!*\
  !*** ./src/app/country-info/country-info.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='main'>\n\n  <!-- <mat-progress-spinner mode='indeterminate' [diameter]=20 *ngIf='isLoading'></mat-progress-spinner> -->\n\n  <div id=\"country-list\" *ngFor=\"let country of countryList\">\n\n    <!-- Expansion panel -->\n    <mat-expansion-panel id=\"country-info\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <img [src]=\"country.flag\" [alt]=\"country.name\" class=\"country-image\" height=\"30vh\" width=\"30vw\">\n          <span class=\"country-name\"> {{country.name}} </span> <span class=\"country-capital\"> ●\n            {{country.capital || 'N/A'}}</span>\n\n        </mat-panel-title>\n        <mat-panel-description>\n\n        </mat-panel-description>\n\n\n      </mat-expansion-panel-header>\n\n      <div class=\"country-metadata\">\n        <img [src]=\"country.flag\" [alt]=\"country.name\" class=\"metadata-flag\" height=\"80%\" width=\"70%\"\n          (click)=\"openGMaps(country.name)\">\n        <div class=\"metadata-content\">\n          <table>\n            <!-- <td class=\"area-icon\">\n              <mat-icon>terrain</mat-icon>\n            </td> -->\n            <tr></tr>\n            <td></td>\n            <td class=\"heading\">Area •</td>\n            <td>{{country.area}}</td>\n\n            <tr></tr>\n            <td></td>\n            <td class=\"heading\">population •</td>\n            <td>{{country.population}}</td>\n\n            <tr></tr>\n            <td></td>\n            <td class=\"heading\">Native name •</td>\n            <td>{{country.nativeName}}</td>\n\n            <tr></tr>\n            <td></td>\n            <td class=\"heading\">Region •</td>\n            <td>{{country.region}}</td>\n\n            <tr></tr>\n            <td></td>\n            <td class=\"heading\">Calling Codes •</td>\n            <td>{{country.callingCodes}}</td>\n\n          </table>\n\n          <p *ngFor=\"let currency of currencies\">\n            <span *ngFor=\"let CR of currency\">{{CR}} - {{CR.name}} - {{CR.symbol}} </span>\n          </p>\n\n        </div>\n\n      </div>\n      <!-- <mat-icon (click)=\"isBookmarked($event)\" color=\"primary\" aria-label=\"bookmark country icon\" class=\"country-bookmark\">{{bookmarkIcon}}</mat-icon> -->\n\n    </mat-expansion-panel>\n\n  </div>\n\n\n</div>\n<!-- end of main div -->"

/***/ }),

/***/ "./src/app/country-info/country-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/country-info/country-info.component.ts ***!
  \********************************************************/
/*! exports provided: CountryInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryInfoComponent", function() { return CountryInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryInfoComponent = /** @class */ (function () {
    function CountryInfoComponent() {
        this.toggleSwitch = true;
        this.bookmarkIcon = '';
        this.validUser = false;
    }
    CountryInfoComponent.prototype.ngOnInit = function () {
        this.bookmarkIcon = 'bookmark_outline';
    };
    // tslint:disable-next-line:use-life-cycle-interface
    CountryInfoComponent.prototype.ngDoCheck = function () { };
    CountryInfoComponent.prototype.isBookmarked = function (ev) {
        event.stopPropagation();
        this.toggleSwitch = !this.toggleSwitch;
        this.toggleSwitch ? this.bookmarkIcon = 'bookmark_outline' : this.bookmarkIcon = 'bookmark';
    };
    CountryInfoComponent.prototype.openGMaps = function (countryName) {
        if (countryName.includes('(')) {
            countryName = countryName.split('(')[0];
        }
        var URL = "https://www.google.com/maps/place/" + countryName;
        window.open(URL, '_blank');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CountryInfoComponent.prototype, "isLoading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CountryInfoComponent.prototype, "countryList", void 0);
    CountryInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-info',
            template: __webpack_require__(/*! ./country-info.component.html */ "./src/app/country-info/country-info.component.html"),
            styles: [__webpack_require__(/*! ./country-info.component.css */ "./src/app/country-info/country-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CountryInfoComponent);
    return CountryInfoComponent;
}());



/***/ }),

/***/ "./src/app/roadmap-overview/roadmap-overview.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/roadmap-overview/roadmap-overview.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/roadmap-overview/roadmap-overview.component.html":
/*!******************************************************************!*\
  !*** ./src/app/roadmap-overview/roadmap-overview.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Roadmap</h1>\n<div mat-dialog-content>\n  <p>\n    <mat-checkbox checked='true' disabled='true'>Material UI</mat-checkbox>\n\n  </p>\n  <p>\n    <mat-checkbox checked='true' disabled='true'>Improve performance</mat-checkbox>\n  </p>\n  <p>\n    <mat-checkbox disabled='true'>Optimize for smaller screens</mat-checkbox>\n  </p>\n  <p>\n    <mat-checkbox disabled='true'>Search from channel list</mat-checkbox>\n  </p>\n  <p>\n    <mat-checkbox disabled='true'>Country facts and relevant data insights</mat-checkbox>\n  </p>\n  <p>\n    <mat-checkbox disabled='true'>Game: Country Quiz</mat-checkbox>\n  </p>\n  <p>\n      <mat-checkbox disabled='true'>Add PWA Support</mat-checkbox>\n    </p>\n\n\n\n</div>\n<div mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/roadmap-overview/roadmap-overview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/roadmap-overview/roadmap-overview.component.ts ***!
  \****************************************************************/
/*! exports provided: RoadmapOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapOverviewComponent", function() { return RoadmapOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoadmapOverviewComponent = /** @class */ (function () {
    function RoadmapOverviewComponent() {
    }
    RoadmapOverviewComponent.prototype.ngOnInit = function () {
    };
    RoadmapOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roadmap-overview',
            template: __webpack_require__(/*! ./roadmap-overview.component.html */ "./src/app/roadmap-overview/roadmap-overview.component.html"),
            styles: [__webpack_require__(/*! ./roadmap-overview.component.css */ "./src/app/roadmap-overview/roadmap-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoadmapOverviewComponent);
    return RoadmapOverviewComponent;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\radio\Documents\Node_Projects\ngweatherappalpha\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map