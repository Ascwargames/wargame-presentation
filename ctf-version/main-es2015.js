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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\"> \n  <router-outlet ></router-outlet>\n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-event/about-event.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-event/about-event.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo-img\"> \r\n    <img src=\"https://ihawk.s3.us-east-2.amazonaws.com/logo.png\" class=\"\"/>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12 mx-auto\">\r\n        <div class=\"about-event-div\">\r\n            <img class=\"img-fluid\" src=\"https://ihawk.s3.us-east-2.amazonaws.com/BG-Tex-Intro.png\" > \r\n            <div class=\"my-2 about-event-desc text-left\">\r\n                <h5 class=\"fw-bold text-center\">About This Event</h5>\r\n                <p class=\"text-center\"> Arab Security Cyber Wargames Championship is an interactive cybersecurity challenge that\r\n                immerses participants in a\r\n                simulated cyber-attack scenario, such as gaining or preventing access to a computer system or\r\n                exploiting and defending a vulnerability in a system or an application.</p>\r\n                <h5 class=\"fw-bold\">Core Objectives:</h5>\r\n                 <p class=\"test\">\r\n                - Prepare participants to real-life security challenges and demands\r\n                </p>\r\n                <p>\r\n                - Challenge participants to exploit and defend computer systems\r\n                </p>\r\n                <p>\r\n                - Help participants to identify their strength and weakness inside a safe, forgiving and\r\n                collaborative environment\r\n                </p>\r\n                <p>\r\n                - Help recruiters and management to spot growing talents and headhunt existing professionals\r\n                </p>\r\n                <p>\r\n                - Encourage participants to work on their soft skills, such as communication, teamwork, time\r\n                management, problem solving and adaptability\r\n                </p>\r\n    \r\n                <h5 class=\"fw-bold\">Core Objectives:</h5>\r\n                <p> - Prepare participants to real-life security challenges and demands </p>\r\n                <p> - Challenge participants to exploit and defend computer systems</p>\r\n                <p>- Help participants to identify their strength and weakness inside a safe, forgiving and\r\n                collaborative environment</p>\r\n                <p>- Help recruiters and management to spot growing talents and headhunt existing professionals\r\n                </p>\r\n                <p>- Encourage participants to work on their soft skills, such as communication, teamwork, time\r\n                management, problem solving and adaptability</p>\r\n                <h5 class=\"fw-bold\">Championship Domains</h5>\r\n                <p>\r\n                Arab Security Cyber Wargames simulate a prolonged and persistent cyber-attack in several,\r\n                multifaceted phases. In which participants will be exposed to different domains including :\r\n                </p>\r\n                <p>- Reverse engineering</p>\r\n                <p>- Network analysis and hacking</p>\r\n                <p>- Web hacking</p>\r\n                <p>- Steganography</p>\r\n                <p>- Hash cracking</p>\r\n                <p>- Cryptography</p>\r\n                <p>- Programming</p> \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/count-down/count-down.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/count-down/count-down.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center pt-5\">\r\n      <img [src]=\"timeTextImage\" />\r\n</div>\r\n<div class=\"row pt-2\" >\r\n      <div class=\"col-4 m-auto\">\r\n            <div class=\"countdown-img text-center\" countdown config=\"configTime\" >\r\n                  <countdown [config]=\"configTime\" class=\"countdown-text\"></countdown> \r\n            </div>\r\n      </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\"> \r\n        <div class=\"col-md-10 m-auto\">\r\n            <app-count-down> </app-count-down>\r\n            <app-about-event> </app-about-event>\r\n            <app-registeration-btns> </app-registeration-btns>\r\n        </div>\r\n    </div>\r\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registeration-btns/registeration-btns.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registeration-btns/registeration-btns.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register-btns my-2\"> \r\n    <button class=\"btn btn-login\" (click)=\"NavigateToSignIn()\"> Sign In </button>\r\n    <button class=\"btn btn-sign-up\" (click)=\"NavigateToSignUp()\"> Sign Up </button>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");




const routes = [
    { path: '', component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] }
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep body {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.main {\n  background-image: url(\"https://ihawk.s3.us-east-2.amazonaws.com/Main-BG-2.jpg\");\n  height: 100vh;\n  background-position: center center;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n::ng-deep .swal2-title {\n  color: #000000d1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxJU0VDXFxQcm9qZWN0c1xcd2FyZ2FtZXMgLSBWMjAyMlxcY3RmLXZlcnNpb25cXHNyY1xcYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDQztFQUNHLCtFQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VKOztBRENDO0VBQ0csMkJBQUE7QUNFSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDsgXHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLm1haW4gIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9paGF3ay5zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9NYWluLUJHLTIuanBnJyk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiB9XHJcbiA6Om5nLWRlZXAgLnN3YWwyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwZDEgIWltcG9ydGFudDtcclxuIH0iLCI6Om5nLWRlZXAgYm9keSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaWhhd2suczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vTWFpbi1CRy0yLmpwZ1wiKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbjo6bmctZGVlcCAuc3dhbDItdGl0bGUge1xuICBjb2xvcjogIzAwMDAwMGQxICFpbXBvcnRhbnQ7XG59Il19 */");

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
        this.title = 'ctf-version';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/count-down/count-down.component */ "./src/app/components/count-down/count-down.component.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_registeration_btns_registeration_btns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/registeration-btns/registeration-btns.component */ "./src/app/components/registeration-btns/registeration-btns.component.ts");
/* harmony import */ var _components_about_event_about_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about-event/about-event.component */ "./src/app/components/about-event/about-event.component.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_count_down_count_down_component__WEBPACK_IMPORTED_MODULE_5__["CountDownComponent"],
            _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
            _components_registeration_btns_registeration_btns_component__WEBPACK_IMPORTED_MODULE_7__["RegisterationBtnsComponent"],
            _components_about_event_about_event_component__WEBPACK_IMPORTED_MODULE_8__["AboutEventComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"]
        ],
        providers: [ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownGlobalConfig"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about-event/about-event.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/about-event/about-event.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 14px;\n  font-weight: 600 !important;\n}\n\n.logo-img {\n  position: relative;\n  height: 120px;\n  width: 25%;\n  margin: auto;\n}\n\n.logo-img img {\n  width: 80%;\n  position: absolute;\n  bottom: -45px;\n  z-index: 999;\n  left: 10%;\n}\n\n.about-event-div {\n  position: relative;\n}\n\n.about-event-desc {\n  position: absolute;\n  top: 16%;\n  right: 4%;\n  max-height: 100px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  width: 91%;\n}\n\n.about-event-desc div {\n  font-family: \"Modern No. 20\" !important;\n  font-weight: 600;\n}\n\n.about-event-desc h5 {\n  color: #861521;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n  border: 1px solid #ddbf7c;\n  border-radius: 20px;\n  cursor: pointer !important;\n}\n\n::-webkit-scrollbar-thumb {\n  background-image: linear-gradient(#584824, #ddbf7c, #584824) !important;\n  /* color of the scroll thumb */\n  border-radius: 20px;\n  cursor: pointer !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQtZXZlbnQvRDpcXElTRUNcXFByb2plY3RzXFx3YXJnYW1lcyAtIFYyMDIyXFxjdGYtdmVyc2lvblxcc3JjXFxhcHAvY29tcG9uZW50c1xcYWJvdXQtZXZlbnRcXGFib3V0LWV2ZW50LmNvbXBvbmVudC5zY3NzIiwiY29tcG9uZW50cy9hYm91dC1ldmVudC9hYm91dC1ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDSUo7O0FESEk7RUFDRSx1Q0FBQTtFQUNBLGdCQUFBO0FDS047O0FERkU7RUFDRSxjQUFBO0FDS0o7O0FERkE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDS0o7O0FERkE7RUFDSSx1RUFBQTtFQUFnRiw4QkFBQTtFQUNoRixtQkFBQTtFQUNBLDBCQUFBO0FDTUoiLCJmaWxlIjoiY29tcG9uZW50cy9hYm91dC1ldmVudC9hYm91dC1ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuLmxvZ28taW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDoyNSU7XHJcbiAgICBtYXJnaW46YXV0bzsgXHJcbiAgfVxyXG4ubG9nby1pbWcgaW1nIHtcclxuICB3aWR0aDogODAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC00NXB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBsZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5hYm91dC1ldmVudC1kaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hYm91dC1ldmVudC1kZXNjIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDoxNiU7XHJcbiAgICByaWdodDogNCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjs7XHJcbiAgICB3aWR0aDogOTElO1xyXG4gICAgZGl2IHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTW9kZXJuIE5vLiAyMFwiICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYWJvdXQtZXZlbnQtZGVzYyBoNSB7XHJcbiAgICBjb2xvcjogIzg2MTUyMTtcclxuXHJcbiAgfVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4OyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGJmN2MgOyAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7ICAgIFxyXG4gIH1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAjNTg0ODI0ICwgI2RkYmY3YyAsIzU4NDgyNCApICAhaW1wb3J0YW50OyAgICAvKiBjb2xvciBvZiB0aGUgc2Nyb2xsIHRodW1iICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgICBcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50OyAgIFxyXG4gIH1cclxuXHJcbiIsInAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLmxvZ28taW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dvLWltZyBpbWcge1xuICB3aWR0aDogODAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTQ1cHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgbGVmdDogMTAlO1xufVxuXG4uYWJvdXQtZXZlbnQtZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWJvdXQtZXZlbnQtZGVzYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNiU7XG4gIHJpZ2h0OiA0JTtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB3aWR0aDogOTElO1xufVxuLmFib3V0LWV2ZW50LWRlc2MgZGl2IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9kZXJuIE5vLiAyMFwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hYm91dC1ldmVudC1kZXNjIGg1IHtcbiAgY29sb3I6ICM4NjE1MjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkYmY3YztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzU4NDgyNCwgI2RkYmY3YywgIzU4NDgyNCkgIWltcG9ydGFudDtcbiAgLyogY29sb3Igb2YgdGhlIHNjcm9sbCB0aHVtYiAqL1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/about-event/about-event.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/about-event/about-event.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutEventComponent", function() { return AboutEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutEventComponent = class AboutEventComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-event',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-event.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-event/about-event.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-event.component.scss */ "./src/app/components/about-event/about-event.component.scss")).default]
    })
], AboutEventComponent);



/***/ }),

/***/ "./src/app/components/count-down/count-down.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/count-down/count-down.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  max-width: 50%;\n}\n\n.countdown-img {\n  background-image: url(\"https://ihawk.s3.us-east-2.amazonaws.com/Counter.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  padding: 20px 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.countdown-text {\n  margin-bottom: 6px;\n  font-family: \"Modern No.\" !important;\n  font-weight: 600;\n}\n\n::ng-deep .countdown-text span {\n  margin: 0px 9px !important;\n  letter-spacing: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY291bnQtZG93bi9EOlxcSVNFQ1xcUHJvamVjdHNcXHdhcmdhbWVzIC0gVjIwMjJcXGN0Zi12ZXJzaW9uXFxzcmNcXGFwcC9jb21wb25lbnRzXFxjb3VudC1kb3duXFxjb3VudC1kb3duLmNvbXBvbmVudC5zY3NzIiwiY29tcG9uZW50cy9jb3VudC1kb3duL2NvdW50LWRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSw2RUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksMEJBQUE7RUFDQSw4QkFBQTtBQ0lKIiwiZmlsZSI6ImNvbXBvbmVudHMvY291bnQtZG93bi9jb3VudC1kb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG59XHJcbi5jb3VudGRvd24taW1ne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2loYXdrLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL0NvdW50ZXIucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvdW50ZG93bi10ZXh0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9kZXJuIE5vLlwiICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbjo6bmctZGVlcCAuY291bnRkb3duLXRleHQgc3BhbiB7XHJcbiAgICBtYXJnaW46IDBweCA5cHggIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHggIWltcG9ydGFudDtcclxufVxyXG4iLCJpbWcge1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLmNvdW50ZG93bi1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2loYXdrLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL0NvdW50ZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb3VudGRvd24tdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9kZXJuIE5vLlwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbjo6bmctZGVlcCAuY291bnRkb3duLXRleHQgc3BhbiB7XG4gIG1hcmdpbjogMHB4IDlweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMnB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/count-down/count-down.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/count-down/count-down.component.ts ***!
  \***************************************************************/
/*! exports provided: CountDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownComponent", function() { return CountDownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _countDownDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../countDownDate */ "./src/app/countDownDate.js");
/* harmony import */ var _countDownDate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_countDownDate__WEBPACK_IMPORTED_MODULE_3__);




let CountDownComponent = class CountDownComponent {
    constructor(_route, _activatedRoute) {
        this._route = _route;
        this._activatedRoute = _activatedRoute;
        this.timeTextImage = "https://ihawk.s3.us-east-2.amazonaws.com/Coming-Soon-02.png";
    }
    ngOnInit() {
        // this.competitionStartTime = this._activatedRoute.snapshot.data.countDownTime;
        // this.competitionStartTime = competitionTime;
        let filtrationDate = new Date(_countDownDate__WEBPACK_IMPORTED_MODULE_3__["competitionTime"].challengeTime);
        // let currentTime =  new Date(this.competitionStartTime.currentTime);
        let currentTime = new Date(Date.now());
        let timeInSec = filtrationDate.getTime() / 1000 - currentTime.getTime() / 1000;
        let daysLeft = Math.floor(timeInSec / (60 * 60 * 24));
        let day = 86400; //60x60x24
        if (timeInSec >= day * 10) {
            this.setTime(`${daysLeft}:HH:mm:ss`, timeInSec);
        }
        else if (timeInSec < day * 10 && timeInSec > day)
            this.setTime(`0${daysLeft}:HH:mm:ss`, timeInSec);
        else if (timeInSec < day && timeInSec >= 3600)
            this.setTime(`00:HH:mm:ss`, timeInSec);
        else if (timeInSec < day &&
            timeInSec < 3600 &&
            timeInSec >= 0)
            this.setTime(`00:00:mm:ss`, timeInSec);
        // GAME STARTED
        else if (timeInSec <= 0 && timeInSec > day * -1) {
            this.timeTextImage = "https://ihawk.s3.us-east-2.amazonaws.com/Game+Started.png";
            timeInSec = (filtrationDate.getTime() + 86400000) / 1000 - currentTime.getTime() / 1000;
            let hours = Math.floor(timeInSec / 3600);
            if (hours > 10)
                this.setTime(`00:${hours}:mm:ss`, timeInSec);
            else
                this.setTime(`00:0${hours}:mm:ss`, timeInSec);
        }
        else {
            this.timeTextImage = "https://ihawk.s3.us-east-2.amazonaws.com/Game+Finished.png";
            this.setTime(`00:00:00:00`, 0);
        }
    }
    setTime(format, timeInSec) {
        this.configTime = {
            leftTime: timeInSec,
            format: format,
            timezone: "+0000",
            prettyText: (text) => {
                return text
                    .split(":")
                    .map((v, index) => `<span class="item${index}">${v}</span>`)
                    .join(":");
            },
        };
    }
};
CountDownComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("countdown", { static: false })
], CountDownComponent.prototype, "competitionStartTime", void 0);
CountDownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-count-down',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./count-down.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/count-down/count-down.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./count-down.component.scss */ "./src/app/components/count-down/count-down.component.scss")).default]
    })
], CountDownComponent);



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb25lbnRzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LandingPageComponent = class LandingPageComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
};
LandingPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/components/landing-page/landing-page.component.scss")).default]
    })
], LandingPageComponent);



/***/ }),

/***/ "./src/app/components/registeration-btns/registeration-btns.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/registeration-btns/registeration-btns.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register-btns {\n  display: flex;\n  justify-content: center;\n}\n\n.btn-login,\n.btn-sign-up {\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  padding: 16px 0px 22px 0px;\n  width: 40%;\n  color: #d2ab5f;\n  font-weight: 600;\n  text-align: center;\n  font-family: \"Modern No.\" !important;\n  cursor: pointer !important;\n}\n\n.btn-login:focus, .btn-sign-up:focus {\n  box-shadow: none;\n}\n\n.btn-login {\n  background-image: url(https://ihawk.s3.us-east-2.amazonaws.com/Short-Btn-2.png);\n}\n\n.btn-sign-up {\n  background-image: url(https://ihawk.s3.us-east-2.amazonaws.com/Short-Btn-1.png);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVnaXN0ZXJhdGlvbi1idG5zL0Q6XFxJU0VDXFxQcm9qZWN0c1xcd2FyZ2FtZXMgLSBWMjAyMlxcY3RmLXZlcnNpb25cXHNyY1xcYXBwL2NvbXBvbmVudHNcXHJlZ2lzdGVyYXRpb24tYnRuc1xccmVnaXN0ZXJhdGlvbi1idG5zLmNvbXBvbmVudC5zY3NzIiwiY29tcG9uZW50cy9yZWdpc3RlcmF0aW9uLWJ0bnMvcmVnaXN0ZXJhdGlvbi1idG5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQ0E7O0VBRUksMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0FDRUo7O0FEQUE7RUFDQSxnQkFBQTtBQ0dBOztBRERBO0VBQ0ksK0VBQUE7QUNJSjs7QURGQTtFQUNJLCtFQUFBO0FDS0oiLCJmaWxlIjoiY29tcG9uZW50cy9yZWdpc3RlcmF0aW9uLWJ0bnMvcmVnaXN0ZXJhdGlvbi1idG5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWJ0bnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgXHJcbn1cclxuLmJ0bi1sb2dpbiAgLFxyXG4uYnRuLXNpZ24tdXB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDBweCAyMnB4IDBweCA7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgY29sb3I6ICNkMmFiNWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vZGVybiBOby5cIiAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5idG4tbG9naW46Zm9jdXMgLCAuYnRuLXNpZ24tdXA6Zm9jdXMgIHtcclxuYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuLWxvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9paGF3ay5zMy51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9TaG9ydC1CdG4tMi5wbmcpO1xyXG59XHJcbi5idG4tc2lnbi11cCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL2loYXdrLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL1Nob3J0LUJ0bi0xLnBuZyk7XHJcbn0iLCIucmVnaXN0ZXItYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLWxvZ2luLFxuLmJ0bi1zaWduLXVwIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMTZweCAwcHggMjJweCAwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGNvbG9yOiAjZDJhYjVmO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk1vZGVybiBOby5cIiAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1sb2dpbjpmb2N1cywgLmJ0bi1zaWduLXVwOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1sb2dpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2loYXdrLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL1Nob3J0LUJ0bi0yLnBuZyk7XG59XG5cbi5idG4tc2lnbi11cCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2loYXdrLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL1Nob3J0LUJ0bi0xLnBuZyk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/registeration-btns/registeration-btns.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/registeration-btns/registeration-btns.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RegisterationBtnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationBtnsComponent", function() { return RegisterationBtnsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RegisterationBtnsComponent = class RegisterationBtnsComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
    NavigateToSignIn() {
        this._router.navigate([""], { replaceUrl: false });
    }
    NavigateToSignUp() {
        this._router.navigate([""], { replaceUrl: false });
    }
};
RegisterationBtnsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RegisterationBtnsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registeration-btns',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registeration-btns.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registeration-btns/registeration-btns.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registeration-btns.component.scss */ "./src/app/components/registeration-btns/registeration-btns.component.scss")).default]
    })
], RegisterationBtnsComponent);



/***/ }),

/***/ "./src/app/countDownDate.js":
/*!**********************************!*\
  !*** ./src/app/countDownDate.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.competitionTime = { challengeTime: "8/5/2022, 03:00:00 PM"}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ISEC\Projects\wargames - V2022\ctf-version\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map