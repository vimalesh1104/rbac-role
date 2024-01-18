(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('@angular/router'), require('rxjs/add/operator/map'), require('@angular/common/http'), require('@angular/common'), require('primeng/card'), require('primeng/multiselect'), require('primeng/dropdown'), require('primeng/tabmenu'), require('primeng/accordion'), require('primeng/tree'), require('primeng/inputtext'), require('primeng/api'), require('@ng-bootstrap/ng-bootstrap'), require('primeng/avatar'), require('primeng/badge'), require('primeng/button'), require('primeng/calendar'), require('primeng/checkbox'), require('primeng/confirmdialog'), require('primeng/confirmpopup'), require('primeng/contextmenu'), require('primeng/dialog'), require('primeng/editor'), require('primeng/fieldset'), require('primeng/fileupload'), require('primeng/inputmask'), require('primeng/inputswitch'), require('primeng/inputtextarea'), require('primeng/knob'), require('primeng/message'), require('primeng/orderlist'), require('primeng/password'), require('primeng/progressspinner'), require('primeng/radiobutton'), require('primeng/ripple'), require('primeng/sidebar'), require('primeng/speeddial'), require('primeng/steps'), require('primeng/table'), require('primeng/tabview'), require('primeng/toast'), require('primeng/treeselect'), require('@angular/cdk/drag-drop')) :
    typeof define === 'function' && define.amd ? define('@pics-core/rbac-roles', ['exports', '@angular/core', 'rxjs', '@angular/forms', '@angular/router', 'rxjs/add/operator/map', '@angular/common/http', '@angular/common', 'primeng/card', 'primeng/multiselect', 'primeng/dropdown', 'primeng/tabmenu', 'primeng/accordion', 'primeng/tree', 'primeng/inputtext', 'primeng/api', '@ng-bootstrap/ng-bootstrap', 'primeng/avatar', 'primeng/badge', 'primeng/button', 'primeng/calendar', 'primeng/checkbox', 'primeng/confirmdialog', 'primeng/confirmpopup', 'primeng/contextmenu', 'primeng/dialog', 'primeng/editor', 'primeng/fieldset', 'primeng/fileupload', 'primeng/inputmask', 'primeng/inputswitch', 'primeng/inputtextarea', 'primeng/knob', 'primeng/message', 'primeng/orderlist', 'primeng/password', 'primeng/progressspinner', 'primeng/radiobutton', 'primeng/ripple', 'primeng/sidebar', 'primeng/speeddial', 'primeng/steps', 'primeng/table', 'primeng/tabview', 'primeng/toast', 'primeng/treeselect', '@angular/cdk/drag-drop'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["pics-core"] = global["pics-core"] || {}, global["pics-core"]["rbac-roles"] = {}), global.ng.core, global.rxjs, global.ng.forms, global.ng.router, global.rxjs["add/operator/map"], global.ng.common.http, global.ng.common, global.i7, global.i8, global.i9, global.i10, global.i11, global.i12, global.i16, global.i17, global.ngBootstrap, global.avatar, global.badge, global.button, global.calendar, global.checkbox, global.confirmdialog, global.confirmpopup, global.contextmenu, global.dialog, global.editor, global.fieldset, global.fileupload, global.inputmask, global.inputswitch, global.inputtextarea, global.knob, global.message, global.orderlist, global.password, global.progressspinner, global.radiobutton, global.ripple, global.sidebar, global.speeddial, global.steps, global.table, global.tabview, global.toast, global.treeselect, global.ng.cdk.dragDrop));
})(this, (function (exports, i0, rxjs, i1$2, i1, map, i1$1, i14, i7, i8, i9, i10, i11, i12, i16, i17, ngBootstrap, avatar, badge, button, calendar, checkbox, confirmdialog, confirmpopup, contextmenu, dialog, editor, fieldset, fileupload, inputmask, inputswitch, inputtextarea, knob, message, orderlist, password, progressspinner, radiobutton, ripple, sidebar, speeddial, steps, table, tabview, toast, treeselect, dragDrop) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i14__namespace = /*#__PURE__*/_interopNamespace(i14);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i11__namespace = /*#__PURE__*/_interopNamespace(i11);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i16__namespace = /*#__PURE__*/_interopNamespace(i16);
    var i17__namespace = /*#__PURE__*/_interopNamespace(i17);

    var RbacRolesService = /** @class */ (function () {
        function RbacRolesService() {
        }
        return RbacRolesService;
    }());
    RbacRolesService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacRolesService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RbacRolesService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacRolesService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacRolesService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var RoleConfig = /** @class */ (function () {
        function RoleConfig() {
        }
        return RoleConfig;
    }());
    RoleConfig.EndPoint = {
        role: {
            getAllUserRole: '/access-control/role',
            createRole: '/access-control/role/create',
            getLandingPage: '/platform/menu/application',
            addPolicyGroup: '/access-control/role',
            getAllOrgRole: '/access-control/role/organization/{orgid}',
            dossier: '/dossier'
        }
    };
    var UserConfig = /** @class */ (function () {
        function UserConfig() {
        }
        return UserConfig;
    }());
    UserConfig.EndPoint = {
        User: {
            getAllUserList: '/org/user',
            getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
            activateUser: '/org/user/activate',
            createUser: '/org/user/create',
            userRole: '/org/user/role',
            managementgroup: '/org/team/managementgroup',
            getAllUserOrgList: '/org/user/organization/'
        },
        Provider: {
            getProviderList: '/ref/provider',
            searchProviderList: '/ref/provider/search',
            addProviderUser: '/ref/provider/create/account'
        }
    };
    var AttachmentConfig = /** @class */ (function () {
        function AttachmentConfig() {
        }
        return AttachmentConfig;
    }());
    AttachmentConfig.EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
    var PolicyGroupConfig = /** @class */ (function () {
        function PolicyGroupConfig() {
        }
        return PolicyGroupConfig;
    }());
    PolicyGroupConfig.EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
    var PermissionsURL = /** @class */ (function () {
        function PermissionsURL() {
        }
        return PermissionsURL;
    }());
    PermissionsURL.EndPoints = {
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
        },
        page: {
            getPageInformation: '/org/user/page/menulist',
            updateMenuOrder: '/access-control/permission/updateMenuOrder'
        }
    };
    var RBACINFO = /** @class */ (function () {
        function RBACINFO() {
            this.apiHost = '';
            this.tokenKey = '';
        }
        return RBACINFO;
    }());
    var Environment = /** @class */ (function () {
        function Environment() {
        }
        return Environment;
    }());

    /******************************************************************************
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
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
                throw new TypeError("Object expected.");
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async)
                        return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    var Store = /** @class */ (function () {
        function Store(initialState) {
            this._state$ = new rxjs.BehaviorSubject(initialState);
            this.state$ = this._state$.asObservable();
        }
        Object.defineProperty(Store.prototype, "state", {
            get: function () {
                return this._state$.getValue();
            },
            enumerable: false,
            configurable: true
        });
        Store.prototype.setState = function (nextState) {
            this._state$.next(nextState);
        };
        return Store;
    }());

    var PermissionStore = /** @class */ (function (_super) {
        __extends(PermissionStore, _super);
        function PermissionStore() {
            return _super.call(this, {}) || this;
        }
        PermissionStore.prototype.setStore = function (data) {
            if (data) {
                this.setState(Object.assign(Object.assign({}, this.state), data));
            }
        };
        PermissionStore.prototype.getStore = function (type) {
            if (type === void 0) { type = 'P'; }
            if (type === 'P')
                return rxjs.of(this.state);
            else
                return rxjs.of(this.state);
        };
        PermissionStore.prototype.flat = function (array) {
            var _this = this;
            var result = [];
            if (array) {
                array.forEach(function (item) {
                    result.push(item);
                    if (item && Array.isArray(item)) {
                        result = result.concat(_this.flat(item));
                    }
                });
            }
            return result;
        };
        return PermissionStore;
    }(Store));
    PermissionStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PermissionStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var DataStoreService = /** @class */ (function () {
        function DataStoreService() {
            this.currentStoreSubject = new rxjs.BehaviorSubject({});
            this.currentStore = this.currentStoreSubject.asObservable();
            // test code
        }
        DataStoreService.prototype.setData = function (key, value) {
            var currentStore = this.getCurrentStore();
            currentStore[key] = value;
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.setObject = function (value) {
            this.currentStoreSubject.next(value);
        };
        DataStoreService.prototype.getData = function (key) {
            var currentStore = this.getCurrentStore();
            return currentStore[key];
        };
        DataStoreService.prototype.clearStore = function () {
            var currentStore = this.getCurrentStore();
            Object.keys(currentStore).forEach(function (key) {
                delete currentStore[key];
            });
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.getCurrentStore = function () {
            return this.currentStoreSubject.value;
        };
        return DataStoreService;
    }());
    DataStoreService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DataStoreService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var AppConstants = /** @class */ (function () {
        function AppConstants() {
        }
        return AppConstants;
    }());
    AppConstants.errorMessage = 'Something went wrong!';
    AppConstants.regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';

    var AlertService = /** @class */ (function () {
        function AlertService(router) {
            var _this = this;
            this.router = router;
            this.subject = new rxjs.Subject();
            this.keepAfterRouteChange = false;
            // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
            router.events.subscribe(function (event) {
                if (event instanceof i1.NavigationStart) {
                    if (_this.keepAfterRouteChange) {
                        // only keep for a single route change
                        _this.keepAfterRouteChange = false;
                    }
                    else {
                        // clear alert messages
                        _this.clear();
                    }
                }
            });
        }
        AlertService.prototype.getAlert = function () {
            return this.subject.asObservable();
        };
        AlertService.prototype.success = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Success, message, keepAfterRouteChange);
        };
        AlertService.prototype.error = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Error, message, keepAfterRouteChange);
        };
        AlertService.prototype.info = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Info, message, keepAfterRouteChange);
        };
        AlertService.prototype.warn = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Warning, message, keepAfterRouteChange);
        };
        AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.keepAfterRouteChange = keepAfterRouteChange;
            this.subject.next({ type: type, message: message });
        };
        AlertService.prototype.clear = function () {
            // clear alerts
            this.subject.next({});
        };
        return AlertService;
    }());
    AlertService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, deps: [{ token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AlertService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }]; } });
    var AlertType;
    (function (AlertType) {
        AlertType[AlertType["Success"] = 0] = "Success";
        AlertType[AlertType["Error"] = 1] = "Error";
        AlertType[AlertType["Info"] = 2] = "Info";
        AlertType[AlertType["Warning"] = 3] = "Warning";
    })(AlertType || (AlertType = {}));
    var Alert = /** @class */ (function () {
        function Alert() {
        }
        return Alert;
    }());
    var UserGroupDto = /** @class */ (function () {
        function UserGroupDto(data) {
            Object.assign(this, data);
        }
        return UserGroupDto;
    }());
    var UserRolePageDto = /** @class */ (function () {
        function UserRolePageDto(data) {
            Object.assign(this, data);
        }
        return UserRolePageDto;
    }());
    var UserRoleDto = /** @class */ (function () {
        function UserRoleDto(data) {
            Object.assign(this, data);
        }
        return UserRoleDto;
    }());
    var UserDto = /** @class */ (function () {
        function UserDto(data) {
            Object.assign(this, data);
        }
        return UserDto;
    }());
    var AccessManagementConfig = /** @class */ (function () {
        function AccessManagementConfig() {
        }
        return AccessManagementConfig;
    }());
    AccessManagementConfig.EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };

    var MicrostrategyService = /** @class */ (function () {
        function MicrostrategyService(http, alertService, permissionStore, _storeservice) {
            var _this = this;
            this.http = http;
            this.alertService = alertService;
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    _this.environment = _this.RBACORG['environment'] ? _this.RBACORG['environment'] : '';
                }
            });
        }
        MicrostrategyService.prototype.getAuthToken = function () {
            var _a, _b, _c;
            var body = {
                username: (_a = this.environment) === null || _a === void 0 ? void 0 : _a.mstrUsername,
                password: (_b = this.environment) === null || _b === void 0 ? void 0 : _b.mstrPassword,
                loginMode: 1
            };
            return this.http.post(((_c = this.environment) === null || _c === void 0 ? void 0 : _c.mstrURL) + "/api/auth/login", body, {
                withCredentials: true,
                headers: { 'Content-type': 'application/json' },
                observe: 'response'
            });
        };
        MicrostrategyService.prototype.getDossier = function (projectId, dossierId, pageNo) {
            var _this = this;
            var _a;
            var permissions = this.permissionStore.state;
            var projectUrl = ((_a = this.environment) === null || _a === void 0 ? void 0 : _a.mstrURL) + "/app/" + projectId;
            var dossierUrl = projectUrl + "/" + dossierId + "/" + pageNo;
            microstrategy.dossier
                .create({
                placeholder: document.getElementById('dossierContainer'),
                url: dossierUrl,
                navigationBar: {
                    enabled: true,
                    gotoLibrary: permissions === null || permissions === void 0 ? void 0 : permissions.ANA_LIBRARY,
                    title: true,
                    toc: true,
                    reset: true,
                    reprompt: true,
                    share: true,
                    comment: true,
                    notification: true,
                    filter: true,
                    options: true,
                    search: true,
                    bookmark: true
                },
                enableCustomAuthentication: true,
                enableResponsive: false,
                containerWidth: 400,
                containerHeight: 400,
                customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
                getLoginToken: function () { return __awaiter(_this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0: return [4 /*yield*/, this.getAuthToken().toPromise()];
                            case 1:
                                response = _d.sent();
                                return [2 /*return*/, response.headers.get('x-mstr-authtoken')];
                        }
                    });
                }); }
            })
                .catch(function (_err) { var _a; return _this.alertService.error("Failed to connect " + ((_a = _this.environment) === null || _a === void 0 ? void 0 : _a.mstrURL)); });
        };
        MicrostrategyService.prototype.getLibraryDetails = function (RBACORG) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var token, authtoken, headerInfo;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, this.getAuthToken().toPromise()];
                        case 1:
                            token = _d.sent();
                            authtoken = token.headers.get('x-mstr-authtoken');
                            headerInfo = {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                                'X-MSTR-AuthToken': authtoken ? authtoken : '',
                                'X-MSTR-ProjectID': (_a = this.environment) === null || _a === void 0 ? void 0 : _a.mstrProjectID
                            };
                            return [2 /*return*/, this.http
                                    .get(((_b = this.environment) === null || _b === void 0 ? void 0 : _b.mstrURL) + "/api/library", {
                                    withCredentials: true,
                                    headers: headerInfo
                                })
                                    .toPromise()
                                    .then(function (response) {
                                    return response.map(function (mstr) { return ({
                                        id: mstr.target.id,
                                        projectId: mstr.projectId,
                                        name: mstr.target.name
                                    }); });
                                })];
                    }
                });
            });
        };
        return MicrostrategyService;
    }());
    MicrostrategyService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, deps: [{ token: i1__namespace$1.HttpClient }, { token: AlertService }, { token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MicrostrategyService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.HttpClient }, { type: AlertService }, { type: PermissionStore }, { type: DataStoreService }]; } });

    var RbacService = /** @class */ (function () {
        function RbacService(_storeservice) {
            var _this = this;
            this._storeservice = _storeservice;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res) {
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
        }
        // constructor(private httpService: HttpService) {}
        RbacService.prototype.getAllUserList = function (key) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserList + "/" + key);
        };
        RbacService.prototype.getAllUserOrgList = function (orgid) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
        };
        RbacService.prototype.saveUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
        };
        RbacService.prototype.updateUser = function (data, userid) {
            return this.httpService.put(UserConfig.EndPoint.User.getAllUserList + "/" + userid, data);
        };
        RbacService.prototype.deleteUser = function (id) {
            return this.httpService.delete(UserConfig.EndPoint.User.getAllUserList + "/" + id);
        };
        RbacService.prototype.activateUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
        };
        RbacService.prototype.addProviderUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
        };
        RbacService.prototype.addUserRole = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
        };
        RbacService.prototype.uploadKey = function (objparams) {
            return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
        };
        RbacService.prototype.getOrgPolicyGroupList = function (orgid) {
            return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
        };
        RbacService.prototype.getAllPolicyGroupList = function (policyGroupId) {
            var endPoint = policyGroupId
                ? PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + policyGroupId
                : PolicyGroupConfig.EndPoint.policyGroup.getAllPolicyGroupList;
            return this.httpService.get(endPoint);
        };
        RbacService.prototype.getPolicyGroupById = function (id) {
            return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + '/' + id);
        };
        RbacService.prototype.getPolicyGroupsByManagementGroup = function (policyGroupId) {
            return this.httpService.get("/org/policyGroup/managementgroup/" + policyGroupId);
        };
        RbacService.prototype.createPolicyGroup = function (data) {
            return this.httpService.post(PolicyGroupConfig.EndPoint.policyGroup.createPolicyGroup, data);
        };
        RbacService.prototype.updatePolicyGroup = function (id, item) {
            return this.httpService.put(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + id, item);
        };
        RbacService.prototype.deletePolicyGroup = function (id) {
            return this.httpService.delete(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + id);
        };
        RbacService.prototype.getAllUserRole = function (id) {
            return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
        };
        RbacService.prototype.deleteRole = function (id) {
            return this.httpService.delete(RoleConfig.EndPoint.role.getAllUserRole + "/" + id);
        };
        RbacService.prototype.getRoleById = function (roleid) {
            return this.httpService.get(RoleConfig.EndPoint.role.getAllUserRole + "/" + roleid);
        };
        RbacService.prototype.createRole = function (data) {
            return this.httpService.post(RoleConfig.EndPoint.role.createRole, data);
        };
        RbacService.prototype.updateRole = function (roleId, data) {
            return this.httpService.put(RoleConfig.EndPoint.role.getAllUserRole + "/" + roleId, data);
        };
        RbacService.prototype.getLandingPage = function (id) {
            return this.httpService.get(RoleConfig.EndPoint.role.getLandingPage + "/" + id);
        };
        RbacService.prototype.createPolicyGroupForRole = function (roleId, data) {
            return this.httpService.post(RoleConfig.EndPoint.role.addPolicyGroup + "/" + roleId + "/policygroups", data);
        };
        RbacService.prototype.updatePolicyGroupForRole = function (roleId, data) {
            return this.httpService.put(RoleConfig.EndPoint.role.addPolicyGroup + "/" + roleId + "/policygroups", data);
        };
        RbacService.prototype.getReportDashbaord = function () {
            return this.httpService.get("" + RoleConfig.EndPoint.role.dossier);
        };
        RbacService.prototype.getPermissionRoleById = function (id) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.permissionRoleById.replace('{id}', id));
        };
        RbacService.prototype.getManagementGroupTree = function (_organizationid) {
            return this.httpService.get('/org/management-group/organization/tree');
        };
        RbacService.prototype.getAllPages = function () {
            return this.httpService.get(PermissionsURL.EndPoints.page.getPageInformation);
        };
        RbacService.prototype.updateMenuOrder = function (page) {
            return this.httpService.post(PermissionsURL.EndPoints.page.updateMenuOrder, page);
        };
        return RbacService;
    }());
    RbacService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, deps: [{ token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RbacService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

    var DISPLAY_IN_SECONDS = 8;
    var AlertComponent = /** @class */ (function () {
        function AlertComponent(alertService) {
            this.alertService = alertService;
            this.alerts = [];
        }
        AlertComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.alertService.getAlert().subscribe(function (alert) {
                if (!alert) {
                    // clear alerts when an empty alert is received
                    _this.alerts = [];
                    return;
                }
                // add alert to array
                _this.alerts.push(alert);
                // remove alert after 5 seconds
                setTimeout(function () { return _this.removeAlert(alert); }, DISPLAY_IN_SECONDS * 1000);
            });
        };
        AlertComponent.prototype.removeAlert = function (alert) {
            this.alerts = this.alerts.filter(function (x) { return x !== alert; });
        };
        AlertComponent.prototype.cssClass = function (alert) {
            if (!alert) {
                return;
            }
            // return css class based on alert type
            switch (alert.type) {
                case AlertType.Success:
                    return 'alert alert-success';
                case AlertType.Error:
                    return 'alert alert-danger';
                case AlertType.Info:
                    return 'alert alert-info';
                case AlertType.Warning:
                    return 'alert alert-warning';
            }
        };
        return AlertComponent;
    }());
    AlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, deps: [{ token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0__namespace, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i14__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        // moduleId: module.id,
                        selector: 'app-alert',
                        templateUrl: 'alert.component.html',
                        styleUrls: ['./alert.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: AlertService }]; } });

    var PermissionDirective = /** @class */ (function () {
        function PermissionDirective(renderer, elementRef, dataStore) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.dataStore = dataStore;
        }
        PermissionDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            if (permissions) {
                if (!permissions[this.fieldKey]) {
                    var template = this.elementRef.nativeElement;
                    if (template.tagName === 'A') {
                        if (template) {
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                            r.innerHTML = template.innerHTML;
                            r.href = 'javascript:void(0);';
                            r['disabled'] = true;
                            r.className = template.className;
                            this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                        }
                    }
                    else if (template.tagName === 'P-MULTISELECT' ||
                        template.tagName === 'P-DROPDOWN' ||
                        template.tagName === 'P-CHECKBOX' ||
                        template.tagName === 'P-TREESELECT' ||
                        template.tagName === 'P-RADIOBUTTON' ||
                        template.tagName === 'P-CALENDAR') {
                        if (template) {
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                            r.innerHTML = template.innerHTML;
                            r.className = template.className;
                            r.className += ' p-disabled';
                            this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                        }
                    }
                    else {
                        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                        var childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                        childInputNodes.forEach(function (elem) {
                            _this.renderer.setAttribute(elem, 'disabled', 'true');
                        });
                    }
                }
            }
        };
        return PermissionDirective;
    }());
    PermissionDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, deps: [{ token: i0__namespace.Renderer2 }, { token: i0__namespace.ElementRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    PermissionDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[fieldKey]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                    type: i0.Input
                }] } });

    var ShowFieldDirective = /** @class */ (function () {
        function ShowFieldDirective(templateRef, viewContainer, dataStore) {
            this.templateRef = templateRef;
            this.viewContainer = viewContainer;
            this.dataStore = dataStore;
        }
        ShowFieldDirective.prototype.ngOnInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            if (!permissions || !permissions[this.showField]) {
                this.viewContainer.clear();
            }
            else {
                this.viewContainer.createEmbeddedView(this.templateRef);
                var lookupIds = sessionStorage.getItem('LOOKUP_IDS');
                if (lookupIds) {
                    var lookupIdArray_1 = lookupIds.split(',');
                    Object.entries(permissions)
                        .filter(function (item) { return item[0].startsWith('GALKP_'); })
                        .forEach(function (_a) {
                        var e_1, _b;
                        var _c = __read(_a, 2), key = _c[0], value = _c[1];
                        try {
                            for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                                var _value = value_1_1.value;
                                var _key = key.replace('GALKP_', '');
                                if (_key === _this.showField &&
                                    lookupIdArray_1.includes(String(_value['lookupid'])) &&
                                    _value['action'] === 'H') {
                                    _this.viewContainer.clear();
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (value_1_1 && !value_1_1.done && (_b = value_1.return)) _b.call(value_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    });
                }
            }
        };
        return ShowFieldDirective;
    }());
    ShowFieldDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShowFieldDirective, deps: [{ token: i0__namespace.TemplateRef }, { token: i0__namespace.ViewContainerRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    ShowFieldDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShowFieldDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[showField]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.TemplateRef }, { type: i0__namespace.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                    type: i0.Input
                }] } });

    var RolesComponent = /** @class */ (function () {
        function RolesComponent(injector, formBuilder, alertService, mstrService, rolesService, _storeservice, permissionService) {
            var _this = this;
            this.formBuilder = formBuilder;
            this.alertService = alertService;
            this.mstrService = mstrService;
            this.rolesService = rolesService;
            this._storeservice = _storeservice;
            this.permissionService = permissionService;
            this.roleList = [];
            this.filteredRoleList = [];
            this.selectedPermissionsGroup = [];
            this.userroles = [];
            this.modelRoleName = '';
            this.permissions = [];
            this.landingPage = [];
            this.RBACORG = new RBACINFO();
            this.items = [];
            this.mainMenuList = [];
            this.reArrangedList = [];
            this.menuList = [];
            this.subMenuList = [];
            this.parent = [];
            this.childMenuList = [];
            this.showChildren = false;
            this.parentMenulist = [];
            this.buildTree = function (parentId) { return function (item) {
                var children = _this.menuList.filter(function (child) { return child.parentid === item.id; });
                return Object.assign(Object.assign({}, item), (children.length > 0 && { children: children.map(_this.buildTree(item.id)) }));
            }; };
            this.formSubmit = false;
            this.orgSubs = this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.formSubmit = false;
                    _this.permissionAllow = false;
                    _this.RBACORG = res['RBACORG'];
                    _this.environment = _this.RBACORG['environment'];
                    _this.orgId = parseInt(_this.RBACORG['orgID']);
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
            this.items = [
                {
                    label: 'Permissions',
                    icon: '',
                    command: function (event) {
                        _this.activateMenu(event);
                    }
                },
                {
                    label: 'Menu Ordering',
                    icon: '',
                    command: function (event) {
                        _this.activateMenu(event);
                    }
                }
            ];
            this.activeItem = this.items[0];
            this.firstTab = true;
        }
        RolesComponent.prototype.nestedData = function () {
            this.mainMenuList = this.menuList.filter(function (item) { return !item.parentid; }).map(this.buildTree(null));
        };
        RolesComponent.prototype.ngOnInit = function () {
            console.log();
            this.initializeform();
            this.getReportDashboard();
            this.getRoleList();
            this.getPolicyGroupList();
            this.getLandingPage();
        };
        RolesComponent.prototype.ngOnDestroy = function () {
            this.orgSubs.unsubscribe();
        };
        RolesComponent.prototype.initializeform = function () {
            this.roleForm = this.formBuilder.group({
                name: ['', i1$2.Validators.required],
                defaultpageid: ['', i1$2.Validators.required],
                parentid: [2],
                policyGroupId: ['', i1$2.Validators.required],
                dossierid: ['']
            });
        };
        Object.defineProperty(RolesComponent.prototype, "formValidate", {
            get: function () {
                return this.roleForm.controls;
            },
            enumerable: false,
            configurable: true
        });
        RolesComponent.prototype.getLandingPage = function () {
            var _this = this;
            this.rolesService.getLandingPage('1').subscribe(function (res) {
                if (res) {
                    _this.landingPage = res['data'].filter(function (x) { return x.route.charAt(0) === '/'; });
                }
            }, function (error) { return console.log(error); });
        };
        RolesComponent.prototype.getRoleList = function (_key) {
            var _this = this;
            this.rolesService.getAllUserRole(this.orgId).subscribe(function (res) {
                _this.roleList = res['data'].filter(function (a) { return a.name !== 'Super admin'; });
                _this.filteredRoleList = _this.roleList;
            }, function (err) { return console.log(err); });
        };
        RolesComponent.prototype.getPolicyGroupList = function (_managementGroupId) {
            var _this = this;
            this.rolesService.getOrgPolicyGroupList(this.orgId).subscribe(function (res) {
                _this.policyGroupList = res['data'];
            }, function (err) { return console.log(err); });
        };
        RolesComponent.prototype.searchRole = function (event) {
            var value = event.target.value.toLowerCase();
            this.filteredRoleList = this.roleList.filter(function (a) { var _a; return (_a = a === null || a === void 0 ? void 0 : a.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
        };
        RolesComponent.prototype.getRoleInfo = function (roleid) {
            var _this = this;
            this.roleId = roleid;
            if (roleid) {
                this.isDisabled = true;
                this.rolesService.getRoleById(roleid).subscribe(function (res) {
                    _this.permissionAllow = true;
                    _this.roleInformation(res);
                });
            }
            else {
                this.roleForm.reset();
                this.permissions = [];
                this.isDisabled = false;
                this.isDisabledOther = false;
                this.roleForm.enable();
            }
        };
        RolesComponent.prototype.roleInformation = function (res) {
            var _this = this;
            var _a, _b, _c;
            this.roleForm.patchValue({
                name: res.data.name,
                defaultpageid: res.data.defaultpageid,
                parentid: res.data.parentid,
                policyGroupId: ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.policyGroups.filter(function (item) { return item; }).map(function (item) {
                    return item['id'];
                })) || [],
                dossierid: (_b = JSON.parse(res.data.dossierid)) === null || _b === void 0 ? void 0 : _b.id
            });
            this.permissions = __spreadArray([], __read((_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.permissions));
            this.permissions = this.permissions
                .map(function (f) {
                return Object.assign({ isFormBuilder: false }, f);
            })
                .map(function (g) {
                if (g.key === 'FORM') {
                    g.isFormBuilder = true;
                }
                else {
                    g.isFormBuilder = false;
                }
                return g;
            });
            this.selectedPermissionsGroup = [];
            if (res.data.permissions && res.data.permissions.length) {
                res.data.permissions.forEach(function (ele) {
                    _this.getSelectedPermisions(ele);
                });
            }
            this.isDisabledOther = !this.hasAccess;
            var isAdmin = this.userroles.find(function (_d) {
                var name = _d.name;
                return name === 'Admin';
            });
            if (isAdmin) {
                this.roleForm.enable();
                this.isDisabledOther = false;
            }
            else if (!this.hasAccess || res.isreadonly) {
                this.roleForm.controls['name'].disable();
            }
            else {
                this.roleForm.enable();
            }
        };
        Object.defineProperty(RolesComponent.prototype, "hasAccess", {
            get: function () {
                var _this = this;
                return this.userroles.find(function (_d) {
                    var id = _d.id, name = _d.name;
                    return id === _this.roleId || name === 'Admin';
                });
            },
            enumerable: false,
            configurable: true
        });
        RolesComponent.prototype.isPrivilage = function (permission) {
            var _a;
            if (permission && (permission === null || permission === void 0 ? void 0 : permission.permissions) && ((_a = permission === null || permission === void 0 ? void 0 : permission.permissions) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                return true;
            }
            else {
                return false;
            }
        };
        RolesComponent.prototype.selectAllPage = function (index, event) {
            var _this = this;
            event.stopPropagation();
            this.permissions[index].checked = event.target.checked;
            this.setSelectedPermisions(event.target.checked, this.permissions[index].id, this.permissions[index].checked, this.permissions[index].checkedwrite);
            this.permissions[index].permissions.forEach(function (page) {
                page.checked = event.target.checked;
                page.checkedwrite = event.target.checked;
                _this.setSelectedPermisions(event.target.checked, page.id, page.checked, page.checkedwrite);
                page.permissions.forEach(function (privilege) {
                    privilege.checked = event.target.checked;
                    privilege.checkedwrite = event.target.checked;
                    _this.setSelectedPermisions(event.target.checked, privilege.id, privilege.checked, privilege.checkedwrite);
                });
            });
        };
        RolesComponent.prototype.getSelectedPermisions = function (item) {
            var _this = this;
            this.setSelectedPermisions(item.checked, item.id, item.checked, item.checkedwrite);
            if (item.permissions && item.permissions.length) {
                item.permissions.forEach(function (page) {
                    var _a;
                    _this.setSelectedPermisions(page.checked, page.id, page.checked, page.checkedwrite);
                    if (page && ((_a = page.permissions) === null || _a === void 0 ? void 0 : _a.length)) {
                        page.permissions.forEach(function (privilege) {
                            _this.setSelectedPermisions(privilege.checked, privilege.id, privilege.checked, privilege.checkedwrite);
                        });
                    }
                });
            }
        };
        RolesComponent.prototype.selectAllPrivilage = function (pageIndex, permissionIndex, event) {
            var _this = this;
            event.stopPropagation();
            this.permissions[pageIndex].checked = event.target.checked;
            if (event.target.value === 'read' || event.target.value === 'on') {
                this.permissions[pageIndex].permissions[permissionIndex].checked = event.target.checked;
            }
            if (event.target.value === 'write') {
                this.permissions[pageIndex].permissions[permissionIndex].checkedwrite = event.target.checked;
            }
            this.setSelectedPermisions(event.target.checked, this.permissions[pageIndex].permissions[permissionIndex].id, this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].checkedwrite);
            if (event.target.value === 'read' || event.target.value === 'on') {
                if (event.target.checked || !event.target.checked) {
                    this.permissions[pageIndex].permissions[permissionIndex].permissions.forEach(function (page) {
                        page.checked = event.target.checked;
                        _this.setSelectedPermisions(event.target.checked, page.id, page.checked, page.checkedwrite);
                    });
                }
            }
            else if (event.target.value === 'write') {
                if (event.target.checked) {
                    this.permissions[pageIndex].permissions[permissionIndex].permissions.forEach(function (page) {
                        page.checkedwrite = event.target.checked;
                        _this.setSelectedPermisions(event.target.checked, page.id, page.checked, page.checkedwrite);
                    });
                }
            }
            this.getPageChecked(pageIndex);
        };
        RolesComponent.prototype.selectPage = function (pageIndex, permissionIndex, event) {
            event.stopPropagation();
            if (event.target.value === 'write') {
                this.permissions[pageIndex].permissions[permissionIndex].checkedwrite = event.target.checked;
            }
            if (event.target.value === 'read') {
                this.permissions[pageIndex].permissions[permissionIndex].checked = event.target.checked;
            }
            this.setSelectedPermisions(event.target.checked, this.permissions[pageIndex].permissions[permissionIndex].id, this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].checkedwrite);
            this.getPageChecked(pageIndex);
        };
        RolesComponent.prototype.selectPrivilege = function (pageIndex, permissionIndex, privilegeIndex, event) {
            event.stopPropagation();
            if (event.target.value === 'write') {
                this.permissions[pageIndex].permissions[permissionIndex].permissions[privilegeIndex].checkedwrite =
                    event.target.checked;
            }
            if (event.target.value === 'read' || event.target.value === 'on') {
                this.permissions[pageIndex].permissions[permissionIndex].permissions[privilegeIndex].checked =
                    event.target.checked;
            }
            this.setSelectedPermisions(event.target.checked, this.permissions[pageIndex].permissions[permissionIndex].permissions[privilegeIndex].id, this.permissions[pageIndex].permissions[permissionIndex].permissions[privilegeIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].permissions[privilegeIndex].checkedwrite);
            this.getPrivilageChecked(pageIndex, permissionIndex);
            this.getPageChecked(pageIndex);
        };
        RolesComponent.prototype.getPageChecked = function (pageIndex) {
            if (this.permissions[pageIndex].checked !== this.getChecked(this.permissions[pageIndex].permissions) &&
                this.permissions[pageIndex].checkedwrite !== this.getCheckedWrite(this.permissions[pageIndex].permissions)) {
                this.permissions[pageIndex].checked = this.getChecked(this.permissions[pageIndex].permissions);
                this.setSelectedPermisions(this.permissions[pageIndex].checked, this.permissions[pageIndex].id, this.permissions[pageIndex].checked, this.permissions[pageIndex].checkedwrite);
            }
        };
        RolesComponent.prototype.getPrivilageChecked = function (pageIndex, permissionIndex) {
            if (this.permissions[pageIndex].permissions[permissionIndex].checked !==
                this.getChecked(this.permissions[pageIndex].permissions[permissionIndex].permissions)) {
                this.permissions[pageIndex].permissions[permissionIndex].checked = this.getChecked(this.permissions[pageIndex].permissions[permissionIndex].permissions);
                this.setSelectedPermisions(this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].id, this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].checkedwrite);
            }
            else if (this.permissions[pageIndex].permissions[permissionIndex].checkedwrite !==
                this.getCheckedWrite(this.permissions[pageIndex].permissions[permissionIndex].permissions)) {
                this.permissions[pageIndex].permissions[permissionIndex].checkedwrite = this.getCheckedWrite(this.permissions[pageIndex].permissions[permissionIndex].permissions);
                this.setSelectedPermisions(this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].id, this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].checkedwrite);
            }
        };
        RolesComponent.prototype.selectAllAccess = function (value) {
            var _this = this;
            this.permissions.forEach(function (page) {
                page.checked = value;
                _this.setSelectedPermisions(value, page.id, page.checked, page.checkedwrite);
                if (page && page.permissions) {
                    page.permissions.forEach(function (permission) {
                        var _a;
                        permission.checked = value;
                        _this.setSelectedPermisions(value, permission.id, permission.checked, permission.checkedwrite);
                        if (permission && ((_a = permission.permissions) === null || _a === void 0 ? void 0 : _a.length)) {
                            permission.permissions.forEach(function (privilege) {
                                privilege.checked = value;
                                privilege.checkedwrite = value;
                                _this.setSelectedPermisions(value, privilege.id, privilege.checked, privilege.checkedwrite);
                            });
                        }
                    });
                }
            });
        };
        RolesComponent.prototype.addNewRole = function (id) {
            var _this = this;
            this.permissions = [];
            this.formSubmit = false;
            this.permissionAllow = false;
            this.rolesService.getPermissionRoleById(id).subscribe(function (res) {
                _this.permissionAllow = true;
                _this.permissions = res['data'];
            }, function (err) { return console.log(err); });
        };
        RolesComponent.prototype.setSelectedPermisions = function (_selected, id, allow, write) {
            var index = this.selectedPermissionsGroup.findIndex(function (res) { return res.id === id; });
            if (index === -1 && allow) {
                this.selectedPermissionsGroup.push({ id: id, allow: allow, write: write });
            }
            else if (!allow && !write && index !== -1) {
                this.selectedPermissionsGroup.splice(index, 1);
            }
            else if (index !== -1) {
                this.selectedPermissionsGroup = this.selectedPermissionsGroup.map(function (i) {
                    if (i.id === id) {
                        i.write = write;
                        i.allow = allow;
                    }
                    return i;
                });
            }
        };
        RolesComponent.prototype.addRole = function () {
            var _this = this;
            var _a, _b;
            this.formSubmit = true;
            var data = this.roleForm.getRawValue();
            if (this.roleForm.valid) {
                var dossierConfig = (_b = (_a = this.reportDashboardList) === null || _a === void 0 ? void 0 : _a.filter(function (dossier) { return dossier.id === data.dossierid; })) === null || _b === void 0 ? void 0 : _b.map(function (a) { return ({
                    id: a.id,
                    projectId: a.projectId
                }); })[0];
                data.priority = this.environment.priority;
                data.applicationid = this.environment.applicationid;
                data.parentid = 2;
                data.permissions = this.selectedPermissionsGroup;
                data.dossierid = JSON.stringify(dossierConfig);
                data = Object.assign({ organizationid: this.orgId }, data);
                if (this.roleId) {
                    data.id = Number(this.roleId);
                    this.rolesService.updateRole(this.roleId, data).subscribe(function () {
                        _this.getRoleList();
                        _this.mapPolicyGroupToRole(_this.roleId, data.policyGroupId);
                        _this.alertService.success('Role updated successfully');
                    }, function (err) { return _this.alertService.error(err.error.message); });
                }
                else {
                    data.id = 0;
                    data.priority = this.environment.priority;
                    this.rolesService.createRole(data).subscribe(function (res) {
                        _this.cancel();
                        if (data.policyGroupId) {
                            _this.mapPolicyGroupToRole(res['data'], data.policyGroupId, 'add');
                        }
                        _this.alertService.success('Role saved successfully');
                        _this.getRoleList();
                    }, function (err) { return _this.alertService.error(err.error.message); });
                }
            }
        };
        RolesComponent.prototype.mapPolicyGroupToRole = function (id, data, action) {
            var _this = this;
            if (action === 'add') {
                this.rolesService.createPolicyGroupForRole(id, data).subscribe(function () { return console.log('policy group mapped to role successfully'); }, function (_err) { return _this.alertService.error(AppConstants.errorMessage); });
            }
            else {
                this.rolesService.updatePolicyGroupForRole(id, data).subscribe(function () { return console.log('policy group mapped to role successfully'); }, function (_err) { return _this.alertService.error(AppConstants.errorMessage); });
            }
        };
        RolesComponent.prototype.getReturnValue = function (array, type) {
            if (array === void 0) { array = []; }
            return type === 'id'
                ? array.map(function (_d) {
                    var id = _d.id;
                    return id;
                })
                : array.map(function (id) {
                    return { id: id };
                });
        };
        RolesComponent.prototype.getChecked = function (item) {
            return item.filter(function (_d) {
                var checked = _d.checked;
                return checked;
            }).length > 0;
        };
        RolesComponent.prototype.getCheckedWrite = function (item) {
            return item.filter(function (_d) {
                var checkedwrite = _d.checkedwrite;
                return checkedwrite;
            }).length > 0;
        };
        RolesComponent.prototype.cancel = function () {
            this.roleForm.reset();
            this.roleForm.enable();
            this.permissions = [];
            this.formSubmit = false;
            this.permissionAllow = false;
            this.roleId = 0;
        };
        RolesComponent.prototype.delete = function (event, id) {
            event.stopPropagation();
            this.deletedId = id;
            $('#Deleteuser').modal('show');
        };
        RolesComponent.prototype.deleteRole = function () {
            var _this = this;
            this.rolesService.deleteRole(this.deletedId).subscribe(function () {
                _this.cancel();
                _this.alertService.success('Role deleted successfully');
                $('#Deleteuser').modal('hide');
                _this.getRoleList();
            }, function (_err) { return _this.alertService.error('Failed to delete Role'); });
        };
        RolesComponent.prototype.getReportDashboard = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _d = this;
                            return [4 /*yield*/, this.mstrService.getLibraryDetails(this.RBACORG)];
                        case 1:
                            _d.reportDashboardList = _e.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        // roleValidation(): any {
        //   if (!this.roleForm.value.dossierid) {
        //     this.alertService.warn('Please fill all required fields');
        //     return false;
        //   }
        //   return true;
        // }
        RolesComponent.prototype.onModelRole = function (value) {
            this.modelRoleName = value.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        };
        RolesComponent.prototype.activateMenu = function (event) {
            if (event.item.label == 'Permissions') {
                this.firstTab = true;
            }
            else {
                this.firstTab = false;
                this.getPageInformation();
            }
        };
        RolesComponent.prototype.getPageInformation = function () {
            var _this = this;
            this.permissionService.getAllPages().subscribe(function (res) {
                _this.menuList = res === null || res === void 0 ? void 0 : res.data;
                res.data.map(function (item, index) {
                    item.label = item.name;
                });
                _this.nestedData();
                console.log(_this.mainMenuList);
                // document.querySelector('#result').innerHTML = this.buildNavigation(this.menuList);
                // res.data.map((item, index) => {
                //   if (item.parentid == null) {
                //     let obj = {
                //       key : 1,
                //       id: item.id,
                //       parentid: item.parentid,
                //       label: item.name,
                //       data: 'Documents Folder',
                //       icon: 'pi pi-fw pi-inbox',
                //       children: []
                //     }
                //     this.mainMenuList.push(obj)
                //   }
                // });
                // this.mainMenuList.map((menu, index1) => {
                //   this.menuList.map((list, index) => {
                //     if (list?.parentid == menu?.id) {
                //       let obj = {
                //         key : 2,
                //         id: list.id,
                //         parentid: list.parentid,
                //         label: list.name,
                //         data: 'Documents Folder',
                //         icon: 'pi pi-fw pi-inbox',
                //         children: []
                //       }
                //       this.mainMenuList[index1].children.push(obj);
                //     }
                //   })
                // })
                // this.mainMenuList.map((menu, index1) => {
                //   menu.children.map((subitem, subindex) => {
                //     this.menuList.map((list, index) => {
                //       if(list.parentid == subitem.id)
                //       {
                //         let obj = {
                //             key : 3,              
                //             id: list.id,
                //             parentid: list.parentid,
                //             label: list.name,
                //             data: 'Documents Folder',
                //             icon: 'pi pi-fw pi-inbox',
                //           }
                //           subitem.children.push(obj);
                //       }
                //     })
                //   })
                // })
            });
        };
        RolesComponent.prototype.updateMenuOrder = function () {
            var _this = this;
            this.mainMenuList.forEach(function (element, index) {
                var _a, _b;
                var data = {
                    'menuorder': index + 1,
                    'id': element.rolepermissionid,
                    'roleid': _this.roleId
                };
                _this.reArrangedList.push(data);
                if (((_a = element === null || element === void 0 ? void 0 : element.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    (_b = element === null || element === void 0 ? void 0 : element.children) === null || _b === void 0 ? void 0 : _b.forEach(function (childelement, childindex) {
                        var _a, _b;
                        var childdata = {
                            'menuorder': childindex + 1,
                            'id': childelement.rolepermissionid,
                            'roleid': _this.roleId
                        };
                        _this.reArrangedList.push(childdata);
                        if (((_a = childelement === null || childelement === void 0 ? void 0 : childelement.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                            (_b = childelement === null || childelement === void 0 ? void 0 : childelement.children) === null || _b === void 0 ? void 0 : _b.forEach(function (childrenelement, childrenindex) {
                                var childrendata = {
                                    'menuorder': childrenindex + 1,
                                    'id': childrenelement.rolepermissionid,
                                    'roleid': _this.roleId
                                };
                                _this.reArrangedList.push(childrendata);
                            });
                        }
                    });
                }
            });
            console.log('this.rearrangelist', this.reArrangedList);
            this.permissionService.updateMenuOrder({ pages: this.reArrangedList }).subscribe(function (res) {
                _this.alertService.success('Updated Successfully!');
                // this.Service.sendUpdate('Updated Successfully');
                // this.getPageInformation();
                window.location.reload();
            });
        };
        RolesComponent.prototype.nodeDrop = function (event) {
            if (event.originalEvent.target.childNodes.length === 0) {
                if (event.dragNode.parentid == event.dropNode.parentid) {
                    event.accept();
                }
                else {
                    this.alertService.success('not allowed to drop');
                }
                console.log('this.mainMenuList', this.mainMenuList);
            }
            else {
                this.alertService.success('not allowed to drop');
            }
        };
        return RolesComponent;
    }());
    RolesComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RolesComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace$2.FormBuilder }, { token: AlertService }, { token: MicrostrategyService }, { token: RbacService }, { token: DataStoreService }, { token: RbacService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RolesComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RolesComponent, selector: "roles", ngImport: i0__namespace, template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\" [formGroup]=\"roleForm\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2 px-2 px-sm-0\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"form-group bgiconsearch\">\r\n            <input class=\"form-control\" fieldKey=\"SETTINGS_ROL_SEARCH_BY_NAME\" placeholder=\"Search by Role name\"\r\n              type=\"text\" (keyup)=\"searchRole($event)\" />\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"useracess\">\r\n            <div class=\"d-flex align-items-center justify-content-center h-100 w-100 ng-star-inserted\"\r\n              *ngIf=\"!filteredRoleList.length\">\r\n              <p>No Record Found</p>\r\n            </div>\r\n            <ng-container *ngFor=\"let item of filteredRoleList\">\r\n              <div class=\"row userdata align-items-center\" (click)=\"getRoleInfo(item.id)\" [ngClass]=\"{ active: +item.id === roleId }\">\r\n                <div class=\"col-md-10 col-sm-10 col-10 overflow_txt\">\r\n                  <span class=\"nameuser\">{{ item.name }}</span> <br />\r\n                </div>\r\n                <div class=\"col-md-2 text-right\">\r\n                  <span class=\"right-icons\">\r\n                    <em class=\"fa fa-trash text-primary\" (click)=\"delete($event, item.id)\" aria-hidden=\"true\"\r\n                      *showField=\"'SETTINGS_ROL_DELETE'\"></em>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-md-6 col-12 roles-right group-role mt-2\">\r\n      <p-card class=\"rbac-card\" [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Role Details</span>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label for=\"rolesName\" class=\"referral-form-labels\">Role Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"rolesName\" type=\"text\" fieldKey=\"SETTINGS_ROL_ROLE_NAME\" formControlName=\"name\"\r\n              placeholder=\"Enter Role Name\" aria-describedby=\"rolesName\" [(ngModel)]=\"modelRoleName\"\r\n              (ngModelChange)=\"onModelRole($event)\" pInputText />\r\n            <div *ngIf=\"formValidate['name'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['name'].invalid\" class=\"p-error block\">Role Name is required </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"policyGroupList\" for=\"policyGroupList\" class=\"referral-form-labels\"\r\n              >Policy Groups\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-multiSelect name=\"policyGroupList\" [options]=\"policyGroupList\" formControlName=\"policyGroupId\"\r\n              defaultLabel=\"Select Policy Groups\" optionLabel=\"policygroupname\" optionValue=\"id\"\r\n              inputId=\"policyGroupList\" ariaFilterLabel=\"null\" fieldKey=\"SETTINGS_ROL_POLICY_GROUP\" display=\"chip\">\r\n            </p-multiSelect>\r\n            <div *ngIf=\"formValidate['policyGroupId'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['policyGroupId'].invalid\" class=\"p-error block\">Policy Group is required </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"landingPage\" for=\"landingPage\" class=\"referral-form-labels\">Landing Page\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown name=\"landingPage\" [options]=\"landingPage\" [filter]=\"true\" [editable]=\"true\" formControlName=\"defaultpageid\"\r\n              defaultLabel=\"Select Landing Page\" fieldKey=\"SETTINGS_ROL_LANDING_PAGE\" optionLabel=\"name\"\r\n              optionValue=\"id\" inputId=\"landingPage\">\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['defaultpageid'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['defaultpageid'].invalid\" class=\"p-error block\">Landing Page is required\r\n              </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"dossierId\" for=\"dossierId\" class=\"referral-form-labels\">Report Dashboard</label>\r\n            <p-dropdown\r\n              [options]=\"reportDashboardList\"\r\n              optionLabel=\"name\"\r\n              id=\"dossierid\"\r\n              optionValue=\"id\"\r\n              placeholder=\"Select ID\"\r\n              formControlName=\"dossierid\"></p-dropdown>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\"></div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <!-- <button\r\n              class=\"pull-right mb-2 btn btn-primary btncommon report_button\"\r\n              fieldKey=\"SETTINGS_ROL_CONFIGURE_PERMISSION\"\r\n              (click)=\"addNewRole('1')\">\r\n              Configure Permission\r\n            </button> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-2\" *ngIf=\"permissionAllow\">\r\n          <button fieldKey=\"SETTINGS_ROL_RESET\" class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\"\r\n            (click)=\"selectAllAccess(false)\">\r\n            Reset\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_ROL_SELECT_ALL\"\r\n            (click)=\"selectAllAccess(true)\">\r\n            Select All\r\n          </button>\r\n          <!-- <br /> -->\r\n        </div>\r\n        <div class=\"strip_head toggleleft adjusttop\" *ngIf=\"permissionAllow\">\r\n          <!-- <span class=\"report_head font-weight-bold\">Permissions</span> -->\r\n          <p-tabMenu [model]=\"items\" [activeItem]=\"activeItem\"></p-tabMenu>\r\n        </div>\r\n\r\n        <div *ngIf=\"firstTab\">\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"mt-4 mb-4\">\r\n            <p-accordion class=\"w-100\">\r\n              <p-accordionTab class=\"w-100\" *ngFor=\"let page of permissions; let i = index\">\r\n                <ng-template pTemplate=\"header\">\r\n                  {{ page.description }}\r\n                </ng-template>\r\n                <ng-template pTemplate=\"content\">\r\n                  <div class=\"heading_analysis datamargin\">\r\n                    <div class=\"Customcheckbox pl-1\">\r\n                      <input type=\"checkbox\" class=\"styled-checkbox\" id=\"custom{{ i }}\"\r\n                        (change)=\"selectAllPage(i, $event)\" [checked]=\"page?.checked\" />\r\n                      <label for=\"custom{{ i }}\" class=\"heading_role\">{{ page.description }}</label>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <ul class=\"marginul_list ecms_rolescroll\">\r\n                    <ng-container *ngFor=\"let permission of page?.permissions; let j = index\">\r\n                      <ng-container *ngIf=\"isPrivilage(permission); else permissionOnly\">\r\n                        <li>\r\n                          <div class=\"inner_childaccess d-flex mt-0 py-1\">\r\n                            <div class=\"d-inline-flex align-items-center\">\r\n                              <label class=\"Customcheckbox pl-1 mb-0\">\r\n                                <input type=\"checkbox\" [checked]=\"permission?.checked\"\r\n                                  (change)=\"selectAllPrivilage(i, j, $event)\" id=\"description{{ j }}\" />\r\n                                <span class=\"checkmark\"></span>\r\n                              </label>\r\n                              <label for=\"description{{ j }}\" class=\"heading_role mb-0\">{{\r\n                                permission.description\r\n                                }}</label>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                        <li class=\"ml-1\" *ngFor=\"let privilege of permission?.permissions; let k = index\">\r\n                          <div class=\"d-flex\">\r\n                            <div class=\"custom-control custom-switch\">\r\n                              <input type=\"checkbox\" [checked]=\"privilege?.checked\" class=\"custom-control-input\"\r\n                                id=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\"\r\n                                (click)=\"selectPrivilege(i, j, k, $event)\" />\r\n                              <label class=\"custom-control-label\" for=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\">{{\r\n                                privilege.description\r\n                                }}</label>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                      </ng-container>\r\n                      <ng-template #permissionOnly>\r\n                        <li>\r\n                          <div class=\"custom-control custom-switch\">\r\n                            <input type=\"checkbox\" [checked]=\"permission?.checked\" class=\"custom-control-input\"\r\n                              (click)=\"selectPage(i, j, $event)\" id=\"customSwitchesroles{{ i }}{{ j }}\" />\r\n                            <label class=\"custom-control-label\" for=\"customSwitchesroles{{ i }}{{ j }}\">{{\r\n                              permission.description }}\r\n                            </label>\r\n                          </div>\r\n                        </li>\r\n                      </ng-template>\r\n                    </ng-container>\r\n                  </ul>\r\n                </ng-template>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n            <div class=\"col-md-12 box d-none\" *ngFor=\"let page of permissions; let i = index\">\r\n              <div class=\"heading_analysis datamargin\">\r\n                <div class=\"Customcheckbox\">\r\n                  <input type=\"checkbox\" class=\"styled-checkbox\" id=\"custom{{ i }}\" (change)=\"selectAllPage(i, $event)\"\r\n                    [checked]=\"page?.checked\" />\r\n                  <label for=\"custom{{ i }}\" class=\"heading_role\">{{ page.description }}</label>\r\n                </div>\r\n              </div>\r\n\r\n              <ul class=\"marginul_list ecms_rolescroll\">\r\n                <ng-container *ngFor=\"let permission of page?.permissions; let j = index\">\r\n                  <ng-container *ngIf=\"isPrivilage(permission); else permissionOnly\">\r\n                    <li>\r\n                      <div class=\"inner_childaccess\">\r\n                        <label class=\"Customcheckbox\">\r\n                          <input type=\"checkbox\" [checked]=\"permission?.checked\"\r\n                            (change)=\"selectAllPrivilage(i, j, $event)\" />\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                        <span class=\"heading_role\">{{ permission.description }}</span>\r\n                      </div>\r\n                    </li>\r\n                    <li *ngFor=\"let privilege of permission?.permissions; let k = index\">\r\n                      <div class=\"custom-control custom-switch\">\r\n                        <input type=\"checkbox\" [checked]=\"privilege?.checked\" class=\"custom-control-input\"\r\n                          id=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\" (click)=\"selectPrivilege(i, j, k, $event)\" />\r\n                        <label class=\"custom-control-label\" for=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\">{{\r\n                          privilege.description\r\n                          }}</label>\r\n                      </div>\r\n                    </li>\r\n                  </ng-container>\r\n                  <ng-template #permissionOnly>\r\n                    <li>\r\n                      <div class=\"custom-control custom-switch\">\r\n                        <input type=\"checkbox\" [checked]=\"permission?.checked\" class=\"custom-control-input\"\r\n                          (click)=\"selectPage(i, j, $event)\" id=\"customSwitchesroles{{ i }}{{ j }}\" />\r\n                        <label class=\"custom-control-label\" for=\"customSwitchesroles{{ i }}{{ j }}\">{{\r\n                          permission.description }}\r\n                        </label>\r\n                      </div>\r\n                    </li>\r\n                  </ng-template>\r\n                </ng-container>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-2\">\r\n            <button class=\"pull-right mb-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_ROL_ADD_ROLE\"\r\n              (click)=\"addRole()\">\r\n              {{ roleId ? 'Update' : 'Add' }} Role\r\n            </button>\r\n            <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" fieldKey=\"SETTINGS_ROL_CANCEL\"\r\n              (click)=\"cancel()\">\r\n              Clear\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!firstTab\">\r\n\r\n          <div class=\"card flex justify-content-center\">\r\n            <p-tree [value]=\"mainMenuList\" [draggableNodes]=\"true\" [droppableNodes]=\"true\" draggableScope=\"self\"\r\n              droppableScope=\"self\" class=\"w-full md:w-30rem\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\r\n              [validateDrop]=\"true\" (onNodeDrop)=\"nodeDrop($event)\"></p-tree>\r\n          </div>\r\n\r\n          <div class=\"mt-2\">\r\n            <button class=\"pull-right mb-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_ROL_ADD_ROLE\"\r\n              (click)=\"updateMenuOrder()\">\r\n              Submit\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n          <br />\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Role</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to delete the Role?\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"deleteRole()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:var(--font-13)}.useracess{border-radius:2px;padding:5px 0;max-height:calc(100vh - 227px);overflow-y:auto}.userempty{max-width:none;border-radius:50%;height:35px;width:35px}.row.userdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}span.nameuser{font-size:var(--font-13);color:var(--label-text);font-weight:600}.userid,span.emailuser{font-size:var(--font-13);color:#838383}.heading_analysis{padding-bottom:0;border-bottom:1px solid var(--table-border)}.Customcheckbox{position:relative;padding-top:0;padding-left:10px}.heading_role{padding-left:10px;font-size:var(--font-13);top:-2px;position:relative;font-weight:700}.marginul_list{padding:0;margin:0}.marginul_list li{list-style:none;padding-top:5px}.marginul_list li label{color:var(--text-dark);text-transform:capitalize;font-size:var(--font-13)}.marginul_list.ecms_rolescroll{max-height:250px;overflow:auto;margin-bottom:20px}.ecms_rolescroll::-webkit-scrollbar{width:.5em;height:.5em}.ecms_rolescroll::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #0000004d;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.ecms_rolescroll::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:1px solid slategrey}.inner_childaccess{margin-top:9px;margin-left:3px;border-bottom:1px solid var(--table-border)}.inner_childaccess .heading_role{font-size:var(--font-13);font-weight:700}.Customcheckbox input{display:inline-block}.Customcheckbox:hover input~.checkmark{border:solid 2px #2196f3}.Customcheckbox input~.checkmark{display:none}.Customcheckbox input:checked~.checkmark{display:none;border:solid 2px #1db766;background-color:#1db766}.Customcheckbox input:checked~.checkmark:after{display:block}.Customcheckbox .checkmark:after{left:6px;top:2px;width:5px;height:10px;border:solid #ffffff;border-width:0 2px 2px 0;transform:rotate(45deg)}.custom-control-input:checked~.custom-control-label:before{color:#fff;border:#1db766!important;background:#1db766!important}.custom-control.custom-switch.toggleleft .custom-control-label{padding-top:3px;font-size:var(--font-13)}.custom-switch .custom-control-label:after{top:calc(.25rem + 3px)}.toggle .custom-control-input:checked~.custom-control-label:before{color:#fff;border:#1db766!important;background:#1db766!important}.toggle .custom-control-input~.custom-control-label:before{color:#fff;border:#8c8c8c;background:#8c8c8c}.toggle .custom-control-label:after{background-color:#fff}.custom-switch .custom-control-label:before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-control-label:before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:18px;pointer-events:none;content:\"\";background-color:#fff;border:1px solid #adb5bd}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control input[type=checkbox]+label:before{content:\"\"}.custom-switch{padding-left:3.25rem}.toggleleft{font-size:var(--font-13);font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-top:27px}.head-div .heading{font-weight:600}.right-icons .fa{margin-top:3px;display:inline-block;z-index:9}.right-icons .fa-trash{font-size:18px}:host ::ng-deep .p-accordion .p-accordion-tab .p-accordion-header .p-accordion-header-link{background:var(--bg-light);color:var(--text-dark);border-color:var(--table-border)}:host ::ng-deep .p-accordion .p-accordion-tab .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link{background:var(--primary);color:var(--hover-text);border-color:var(--table-border)}:host ::ng-deep .p-accordion .p-accordion-tab .p-accordion-content{background:var(--bg-light);color:var(--text-dark);border-color:var(--table-border)}:host ::ng-deep .p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link{background:var(--primary);color:var(--hover-text);border-color:var(--table-border)}.adjusttop{margin-top:60px;margin-bottom:-24px}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i7__namespace.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i8__namespace.MultiSelect, selector: "p-multiSelect", inputs: ["style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "label", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "autoZIndex", "baseZIndex", "filterBy", "virtualScroll", "itemSize", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "scrollHeight", "defaultLabel", "placeholder", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide"] }, { type: i9__namespace.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }, { type: i10__namespace.TabMenu, selector: "p-tabMenu", inputs: ["model", "activeItem", "scrollable", "popup", "style", "styleClass"] }, { type: i11__namespace.Accordion, selector: "p-accordion", inputs: ["multiple", "style", "styleClass", "expandIcon", "collapseIcon", "activeIndex"], outputs: ["onClose", "onOpen", "activeIndexChange"] }, { type: i11__namespace.AccordionTab, selector: "p-accordionTab", inputs: ["header", "disabled", "cache", "transitionOptions", "selected"], outputs: ["selectedChange"] }, { type: i12__namespace.Tree, selector: "p-tree", inputs: ["value", "selectionMode", "selection", "style", "styleClass", "contextMenu", "layout", "draggableScope", "droppableScope", "draggableNodes", "droppableNodes", "metaKeySelection", "propagateSelectionUp", "propagateSelectionDown", "loading", "loadingIcon", "emptyMessage", "ariaLabel", "togglerAriaLabel", "ariaLabelledBy", "validateDrop", "filter", "filterBy", "filterMode", "filterPlaceholder", "filteredNodes", "filterLocale", "scrollHeight", "virtualScroll", "virtualNodeHeight", "minBufferPx", "maxBufferPx", "indentation", "trackBy"], outputs: ["selectionChange", "onNodeSelect", "onNodeUnselect", "onNodeExpand", "onNodeCollapse", "onNodeContextMenuSelect", "onNodeDrop", "onFilter"] }], directives: [{ type: i1__namespace$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i14__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }, { type: i1__namespace$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i16__namespace.InputText, selector: "[pInputText]" }, { type: i17__namespace.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RolesComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'roles',
                        templateUrl: './roles.component.html',
                        styleUrls: ['./roles.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace$2.FormBuilder }, { type: AlertService }, { type: MicrostrategyService }, { type: RbacService }, { type: DataStoreService }, { type: RbacService }]; } });

    var RbacRolesComponent = /** @class */ (function () {
        function RbacRolesComponent(permissionStore, _storeservice) {
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this.RBACORG = new RBACINFO();
        }
        RbacRolesComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.roleEvent.subscribe(function (val) {
                _this.RBACORG = val.RBACORG;
                _this.PERMISSION = val.PERMISSION;
                _this._storeservice.setData('RBACORG', _this.RBACORG);
                _this.permissionStore.setStore(_this.PERMISSION);
                _this._storeservice.setData('HTTPSERVICE', val.httpService);
            });
        };
        return RbacRolesComponent;
    }());
    RbacRolesComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacRolesComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RbacRolesComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacRolesComponent, selector: "rbac-roles", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", roleEvent: "roleEvent" }, ngImport: i0__namespace, template: "\n      <roles></roles>\n  ", isInline: true, components: [{ type: RolesComponent, selector: "roles" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacRolesComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'rbac-roles',
                        template: "\n      <roles></roles>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                    type: i0.Input
                }], PERMISSION: [{
                    type: i0.Input
                }], roleEvent: [{
                    type: i0.Input
                }] } });

    var DirectivesModule = /** @class */ (function () {
        function DirectivesModule() {
        }
        return DirectivesModule;
    }());
    DirectivesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DirectivesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [i14.CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    DirectivesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, imports: [[i14.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [PermissionDirective, ShowFieldDirective],
                        imports: [i14.CommonModule],
                        exports: [PermissionDirective, ShowFieldDirective]
                    }]
            }] });

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, declarations: [AlertComponent], imports: [i14.CommonModule], exports: [AlertComponent] });
    AlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, imports: [[i14.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i14.CommonModule],
                        declarations: [AlertComponent],
                        exports: [AlertComponent]
                    }]
            }] });

    var PicsRbacRolesModule = /** @class */ (function () {
        function PicsRbacRolesModule() {
        }
        return PicsRbacRolesModule;
    }());
    PicsRbacRolesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacRolesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PicsRbacRolesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacRolesModule, declarations: [RolesComponent], imports: [i14.CommonModule,
            i1$2.ReactiveFormsModule,
            ngBootstrap.NgbModule,
            i10.TabMenuModule,
            tabview.TabViewModule,
            treeselect.TreeSelectModule,
            // HttpClientModule,
            checkbox.CheckboxModule,
            i9.DropdownModule,
            i7.CardModule,
            confirmdialog.ConfirmDialogModule,
            i11.AccordionModule,
            message.MessageModule,
            table.TableModule,
            i16.InputTextModule,
            calendar.CalendarModule,
            editor.EditorModule,
            fieldset.FieldsetModule,
            button.ButtonModule,
            radiobutton.RadioButtonModule,
            inputtextarea.InputTextareaModule,
            inputmask.InputMaskModule,
            steps.StepsModule,
            toast.ToastModule,
            ripple.RippleModule,
            avatar.AvatarModule,
            badge.BadgeModule,
            i8.MultiSelectModule,
            inputswitch.InputSwitchModule,
            progressspinner.ProgressSpinnerModule,
            speeddial.SpeedDialModule,
            orderlist.OrderListModule,
            fileupload.FileUploadModule,
            dialog.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            sidebar.SidebarModule,
            contextmenu.ContextMenuModule,
            confirmpopup.ConfirmPopupModule,
            DirectivesModule,
            AlertModule,
            i12.TreeModule,
            dragDrop.DragDropModule], exports: [RolesComponent] });
    PicsRbacRolesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacRolesModule, providers: [RbacService, MicrostrategyService, i1$1.HttpClient, AlertService, i17.ConfirmationService, PermissionStore,
            DataStoreService, i17.TreeDragDropService], imports: [[
                i14.CommonModule,
                i1$2.ReactiveFormsModule,
                ngBootstrap.NgbModule,
                i10.TabMenuModule,
                tabview.TabViewModule,
                treeselect.TreeSelectModule,
                // HttpClientModule,
                checkbox.CheckboxModule,
                i9.DropdownModule,
                i7.CardModule,
                confirmdialog.ConfirmDialogModule,
                i11.AccordionModule,
                message.MessageModule,
                table.TableModule,
                i16.InputTextModule,
                calendar.CalendarModule,
                editor.EditorModule,
                fieldset.FieldsetModule,
                button.ButtonModule,
                radiobutton.RadioButtonModule,
                inputtextarea.InputTextareaModule,
                inputmask.InputMaskModule,
                steps.StepsModule,
                toast.ToastModule,
                ripple.RippleModule,
                avatar.AvatarModule,
                badge.BadgeModule,
                i8.MultiSelectModule,
                inputswitch.InputSwitchModule,
                progressspinner.ProgressSpinnerModule,
                speeddial.SpeedDialModule,
                orderlist.OrderListModule,
                fileupload.FileUploadModule,
                dialog.DialogModule,
                password.PasswordModule,
                knob.KnobModule,
                sidebar.SidebarModule,
                contextmenu.ContextMenuModule,
                confirmpopup.ConfirmPopupModule,
                DirectivesModule,
                AlertModule,
                i12.TreeModule,
                dragDrop.DragDropModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacRolesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            RolesComponent
                        ],
                        imports: [
                            i14.CommonModule,
                            i1$2.ReactiveFormsModule,
                            ngBootstrap.NgbModule,
                            i10.TabMenuModule,
                            tabview.TabViewModule,
                            treeselect.TreeSelectModule,
                            // HttpClientModule,
                            checkbox.CheckboxModule,
                            i9.DropdownModule,
                            i7.CardModule,
                            confirmdialog.ConfirmDialogModule,
                            i11.AccordionModule,
                            message.MessageModule,
                            table.TableModule,
                            i16.InputTextModule,
                            calendar.CalendarModule,
                            editor.EditorModule,
                            fieldset.FieldsetModule,
                            button.ButtonModule,
                            radiobutton.RadioButtonModule,
                            inputtextarea.InputTextareaModule,
                            inputmask.InputMaskModule,
                            steps.StepsModule,
                            toast.ToastModule,
                            ripple.RippleModule,
                            avatar.AvatarModule,
                            badge.BadgeModule,
                            i8.MultiSelectModule,
                            inputswitch.InputSwitchModule,
                            progressspinner.ProgressSpinnerModule,
                            speeddial.SpeedDialModule,
                            orderlist.OrderListModule,
                            fileupload.FileUploadModule,
                            dialog.DialogModule,
                            password.PasswordModule,
                            knob.KnobModule,
                            sidebar.SidebarModule,
                            contextmenu.ContextMenuModule,
                            confirmpopup.ConfirmPopupModule,
                            DirectivesModule,
                            AlertModule,
                            i12.TreeModule,
                            dragDrop.DragDropModule
                        ],
                        exports: [RolesComponent],
                        schemas: [i0.NO_ERRORS_SCHEMA, i0.CUSTOM_ELEMENTS_SCHEMA],
                        providers: [RbacService, MicrostrategyService, i1$1.HttpClient, AlertService, i17.ConfirmationService, PermissionStore,
                            DataStoreService, i17.TreeDragDropService]
                    }]
            }] });

    var RbacRolesModule = /** @class */ (function () {
        function RbacRolesModule() {
        }
        return RbacRolesModule;
    }());
    RbacRolesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacRolesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    RbacRolesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacRolesModule, declarations: [RbacRolesComponent], imports: [PicsRbacRolesModule], exports: [RbacRolesComponent] });
    RbacRolesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacRolesModule, imports: [[
                PicsRbacRolesModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacRolesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            RbacRolesComponent
                        ],
                        imports: [
                            PicsRbacRolesModule
                        ],
                        exports: [
                            RbacRolesComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of rbac-roles
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.RbacRolesComponent = RbacRolesComponent;
    exports.RbacRolesModule = RbacRolesModule;
    exports.RbacRolesService = RbacRolesService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pics-core-rbac-roles.umd.js.map
