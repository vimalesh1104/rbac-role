import * as i0 from '@angular/core';
import { Injectable, Component, Directive, Input, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { __awaiter } from 'tslib';
import * as i1$2 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i1$1 from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import * as i14 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i7 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i8 from 'primeng/multiselect';
import { MultiSelectModule } from 'primeng/multiselect';
import * as i9 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i10 from 'primeng/tabmenu';
import { TabMenuModule } from 'primeng/tabmenu';
import * as i11 from 'primeng/accordion';
import { AccordionModule } from 'primeng/accordion';
import * as i12 from 'primeng/tree';
import { TreeModule } from 'primeng/tree';
import * as i16 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i17 from 'primeng/api';
import { ConfirmationService, TreeDragDropService } from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { MessageModule } from 'primeng/message';
import { OrderListModule } from 'primeng/orderlist';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeSelectModule } from 'primeng/treeselect';
import { DragDropModule } from '@angular/cdk/drag-drop';

class RbacRolesService {
    constructor() { }
}
RbacRolesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacRolesService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
RbacRolesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacRolesService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacRolesService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class RoleConfig {
}
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
class UserConfig {
}
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
class AttachmentConfig {
}
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
class PolicyGroupConfig {
}
PolicyGroupConfig.EndPoint = {
    policyGroup: {
        getPolicyGroupList: '/platform/page-designer/policyGroup',
        getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
        createPolicyGroup: '/platform/page-designer/policyGroup',
        getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
    }
};
class PermissionsURL {
}
PermissionsURL.EndPoints = {
    permission: {
        permissionRoleById: '/access-control/permission/role/{id}',
    },
    page: {
        getPageInformation: '/org/user/page/menulist',
        updateMenuOrder: '/access-control/permission/updateMenuOrder'
    }
};
class RBACINFO {
    constructor() {
        this.apiHost = '';
        this.tokenKey = '';
    }
}
class Environment {
}

class Store {
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}

class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data) {
        if (data) {
            this.setState(Object.assign(Object.assign({}, this.state), data));
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
}
PermissionStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PermissionStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class DataStoreService {
    constructor() {
        this.currentStoreSubject = new BehaviorSubject({});
        this.currentStore = this.currentStoreSubject.asObservable();
        // test code
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach((key) => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
}
DataStoreService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DataStoreService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class AppConstants {
}
AppConstants.errorMessage = 'Something went wrong!';
AppConstants.regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';

class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next({});
    }
}
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class Alert {
}
class UserGroupDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRolePageDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRoleDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class AccessManagementConfig {
}
AccessManagementConfig.EndPoint = {
    Organization: {
        getOrganizationList: '/org/organization/all',
        getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
    }
};

class MicrostrategyService {
    constructor(http, alertService, permissionStore, _storeservice) {
        this.http = http;
        this.alertService = alertService;
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.environment = this.RBACORG['environment'] ? this.RBACORG['environment'] : '';
            }
        });
    }
    getAuthToken() {
        var _a, _b, _c;
        const body = {
            username: (_a = this.environment) === null || _a === void 0 ? void 0 : _a.mstrUsername,
            password: (_b = this.environment) === null || _b === void 0 ? void 0 : _b.mstrPassword,
            loginMode: 1
        };
        return this.http.post(`${(_c = this.environment) === null || _c === void 0 ? void 0 : _c.mstrURL}/api/auth/login`, body, {
            withCredentials: true,
            headers: { 'Content-type': 'application/json' },
            observe: 'response'
        });
    }
    getDossier(projectId, dossierId, pageNo) {
        var _a;
        const permissions = this.permissionStore.state;
        const projectUrl = `${(_a = this.environment) === null || _a === void 0 ? void 0 : _a.mstrURL}/app/${projectId}`;
        const dossierUrl = `${projectUrl}/${dossierId}/${pageNo}`;
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
            getLoginToken: () => __awaiter(this, void 0, void 0, function* () {
                const response = yield this.getAuthToken().toPromise();
                return response.headers.get('x-mstr-authtoken');
            })
        })
            .catch((_err) => { var _a; return this.alertService.error(`Failed to connect ${(_a = this.environment) === null || _a === void 0 ? void 0 : _a.mstrURL}`); });
    }
    getLibraryDetails(RBACORG) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.getAuthToken().toPromise();
            const authtoken = token.headers.get('x-mstr-authtoken');
            const headerInfo = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-MSTR-AuthToken': authtoken ? authtoken : '',
                'X-MSTR-ProjectID': (_a = this.environment) === null || _a === void 0 ? void 0 : _a.mstrProjectID
            };
            return this.http
                .get(`${(_b = this.environment) === null || _b === void 0 ? void 0 : _b.mstrURL}/api/library`, {
                withCredentials: true,
                headers: headerInfo
            })
                .toPromise()
                .then((response) => {
                return response.map((mstr) => ({
                    id: mstr.target.id,
                    projectId: mstr.projectId,
                    name: mstr.target.name
                }));
            });
        });
    }
}
MicrostrategyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, deps: [{ token: i1$1.HttpClient }, { token: AlertService }, { token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
MicrostrategyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }, { type: AlertService }, { type: PermissionStore }, { type: DataStoreService }]; } });

class RbacService {
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    // constructor(private httpService: HttpService) {}
    getAllUserList(key) {
        return this.httpService.get(`${UserConfig.EndPoint.User.getAllUserList}/${key}`);
    }
    getAllUserOrgList(orgid) {
        return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
    }
    saveUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
    }
    updateUser(data, userid) {
        return this.httpService.put(`${UserConfig.EndPoint.User.getAllUserList}/${userid}`, data);
    }
    deleteUser(id) {
        return this.httpService.delete(`${UserConfig.EndPoint.User.getAllUserList}/${id}`);
    }
    activateUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
    }
    addProviderUser(data) {
        return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
    }
    addUserRole(data) {
        return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
    }
    uploadKey(objparams) {
        return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
    }
    getOrgPolicyGroupList(orgid) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
    }
    getAllPolicyGroupList(policyGroupId) {
        const endPoint = policyGroupId
            ? `${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${policyGroupId}`
            : PolicyGroupConfig.EndPoint.policyGroup.getAllPolicyGroupList;
        return this.httpService.get(endPoint);
    }
    getPolicyGroupById(id) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + '/' + id);
    }
    getPolicyGroupsByManagementGroup(policyGroupId) {
        return this.httpService.get(`/org/policyGroup/managementgroup/${policyGroupId}`);
    }
    createPolicyGroup(data) {
        return this.httpService.post(PolicyGroupConfig.EndPoint.policyGroup.createPolicyGroup, data);
    }
    updatePolicyGroup(id, item) {
        return this.httpService.put(`${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${id}`, item);
    }
    deletePolicyGroup(id) {
        return this.httpService.delete(`${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${id}`);
    }
    getAllUserRole(id) {
        return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
    }
    deleteRole(id) {
        return this.httpService.delete(`${RoleConfig.EndPoint.role.getAllUserRole}/${id}`);
    }
    getRoleById(roleid) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleid}`);
    }
    createRole(data) {
        return this.httpService.post(RoleConfig.EndPoint.role.createRole, data);
    }
    updateRole(roleId, data) {
        return this.httpService.put(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleId}`, data);
    }
    getLandingPage(id) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getLandingPage}/${id}`);
    }
    createPolicyGroupForRole(roleId, data) {
        return this.httpService.post(`${RoleConfig.EndPoint.role.addPolicyGroup}/${roleId}/policygroups`, data);
    }
    updatePolicyGroupForRole(roleId, data) {
        return this.httpService.put(`${RoleConfig.EndPoint.role.addPolicyGroup}/${roleId}/policygroups`, data);
    }
    getReportDashbaord() {
        return this.httpService.get(`${RoleConfig.EndPoint.role.dossier}`);
    }
    getPermissionRoleById(id) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.permissionRoleById.replace('{id}', id));
    }
    getManagementGroupTree(_organizationid) {
        return this.httpService.get('/org/management-group/organization/tree');
    }
    getAllPages() {
        return this.httpService.get(PermissionsURL.EndPoints.page.getPageInformation);
    }
    updateMenuOrder(page) {
        return this.httpService.post(PermissionsURL.EndPoints.page.updateMenuOrder, page);
    }
}
RbacService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
RbacService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

const DISPLAY_IN_SECONDS = 8;
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.alertService.getAlert().subscribe((alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // remove alert after 5 seconds
            setTimeout(() => this.removeAlert(alert), DISPLAY_IN_SECONDS * 1000);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
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
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    // moduleId: module.id,
                    selector: 'app-alert',
                    templateUrl: 'alert.component.html',
                    styleUrls: ['./alert.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

class PermissionDirective {
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        if (permissions) {
            if (!permissions[this.fieldKey]) {
                const template = this.elementRef.nativeElement;
                if (template.tagName === 'A') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
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
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.className = template.className;
                        r.className += ' p-disabled';
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                    const childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                    childInputNodes.forEach((elem) => {
                        this.renderer.setAttribute(elem, 'disabled', 'true');
                    });
                }
            }
        }
    }
}
PermissionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
PermissionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });

class ShowFieldDirective {
    constructor(templateRef, viewContainer, dataStore) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.dataStore = dataStore;
    }
    ngOnInit() {
        const permissions = this.dataStore.state;
        if (!permissions || !permissions[this.showField]) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
            const lookupIds = sessionStorage.getItem('LOOKUP_IDS');
            if (lookupIds) {
                const lookupIdArray = lookupIds.split(',');
                Object.entries(permissions)
                    .filter(item => item[0].startsWith('GALKP_'))
                    .forEach(([key, value]) => {
                    for (const _value of value) {
                        const _key = key.replace('GALKP_', '');
                        if (_key === this.showField &&
                            lookupIdArray.includes(String(_value['lookupid'])) &&
                            _value['action'] === 'H') {
                            this.viewContainer.clear();
                        }
                    }
                });
            }
        }
    }
}
ShowFieldDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShowFieldDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
ShowFieldDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ShowFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                type: Input
            }] } });

class RolesComponent {
    constructor(injector, formBuilder, alertService, mstrService, rolesService, _storeservice, permissionService) {
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
        this.buildTree = (parentId) => (item) => {
            const children = this.menuList.filter((child) => child.parentid === item.id);
            return Object.assign(Object.assign({}, item), (children.length > 0 && { children: children.map(this.buildTree(item.id)) }));
        };
        this.formSubmit = false;
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.formSubmit = false;
                this.permissionAllow = false;
                this.RBACORG = res['RBACORG'];
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                this.httpService = res['HTTPSERVICE'];
            }
        });
        this.items = [
            {
                label: 'Permissions',
                icon: '',
                command: event => {
                    this.activateMenu(event);
                }
            },
            {
                label: 'Menu Ordering',
                icon: '',
                command: event => {
                    this.activateMenu(event);
                }
            }
        ];
        this.activeItem = this.items[0];
        this.firstTab = true;
    }
    nestedData() {
        this.mainMenuList = this.menuList.filter((item) => !item.parentid).map(this.buildTree(null));
    }
    ngOnInit() {
        console.log();
        this.initializeform();
        this.getReportDashboard();
        this.getRoleList();
        this.getPolicyGroupList();
        this.getLandingPage();
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    initializeform() {
        this.roleForm = this.formBuilder.group({
            name: ['', Validators.required],
            defaultpageid: ['', Validators.required],
            parentid: [2],
            policyGroupId: ['', Validators.required],
            dossierid: ['']
        });
    }
    get formValidate() {
        return this.roleForm.controls;
    }
    getLandingPage() {
        this.rolesService.getLandingPage('1').subscribe((res) => {
            if (res) {
                this.landingPage = res['data'].filter((x) => x.route.charAt(0) === '/');
            }
        }, (error) => console.log(error));
    }
    getRoleList(_key) {
        this.rolesService.getAllUserRole(this.orgId).subscribe((res) => {
            this.roleList = res['data'].filter((a) => a.name !== 'Super admin');
            this.filteredRoleList = this.roleList;
        }, (err) => console.log(err));
    }
    getPolicyGroupList(_managementGroupId) {
        this.rolesService.getOrgPolicyGroupList(this.orgId).subscribe((res) => {
            this.policyGroupList = res['data'];
        }, (err) => console.log(err));
    }
    searchRole(event) {
        const value = event.target.value.toLowerCase();
        this.filteredRoleList = this.roleList.filter(a => { var _a; return (_a = a === null || a === void 0 ? void 0 : a.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
    }
    getRoleInfo(roleid) {
        this.roleId = roleid;
        if (roleid) {
            this.isDisabled = true;
            this.rolesService.getRoleById(roleid).subscribe((res) => {
                this.permissionAllow = true;
                this.roleInformation(res);
            });
        }
        else {
            this.roleForm.reset();
            this.permissions = [];
            this.isDisabled = false;
            this.isDisabledOther = false;
            this.roleForm.enable();
        }
    }
    roleInformation(res) {
        var _a, _b, _c;
        this.roleForm.patchValue({
            name: res.data.name,
            defaultpageid: res.data.defaultpageid,
            parentid: res.data.parentid,
            policyGroupId: ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.policyGroups.filter((item) => item).map((item) => {
                return item['id'];
            })) || [],
            dossierid: (_b = JSON.parse(res.data.dossierid)) === null || _b === void 0 ? void 0 : _b.id
        });
        this.permissions = [...(_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.permissions];
        this.permissions = this.permissions
            .map(f => {
            return Object.assign({ isFormBuilder: false }, f);
        })
            .map(g => {
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
            res.data.permissions.forEach((ele) => {
                this.getSelectedPermisions(ele);
            });
        }
        this.isDisabledOther = !this.hasAccess;
        const isAdmin = this.userroles.find(({ name }) => name === 'Admin');
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
    }
    get hasAccess() {
        return this.userroles.find(({ id, name }) => id === this.roleId || name === 'Admin');
    }
    isPrivilage(permission) {
        var _a;
        if (permission && (permission === null || permission === void 0 ? void 0 : permission.permissions) && ((_a = permission === null || permission === void 0 ? void 0 : permission.permissions) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    selectAllPage(index, event) {
        event.stopPropagation();
        this.permissions[index].checked = event.target.checked;
        this.setSelectedPermisions(event.target.checked, this.permissions[index].id, this.permissions[index].checked, this.permissions[index].checkedwrite);
        this.permissions[index].permissions.forEach((page) => {
            page.checked = event.target.checked;
            page.checkedwrite = event.target.checked;
            this.setSelectedPermisions(event.target.checked, page.id, page.checked, page.checkedwrite);
            page.permissions.forEach((privilege) => {
                privilege.checked = event.target.checked;
                privilege.checkedwrite = event.target.checked;
                this.setSelectedPermisions(event.target.checked, privilege.id, privilege.checked, privilege.checkedwrite);
            });
        });
    }
    getSelectedPermisions(item) {
        this.setSelectedPermisions(item.checked, item.id, item.checked, item.checkedwrite);
        if (item.permissions && item.permissions.length) {
            item.permissions.forEach((page) => {
                var _a;
                this.setSelectedPermisions(page.checked, page.id, page.checked, page.checkedwrite);
                if (page && ((_a = page.permissions) === null || _a === void 0 ? void 0 : _a.length)) {
                    page.permissions.forEach((privilege) => {
                        this.setSelectedPermisions(privilege.checked, privilege.id, privilege.checked, privilege.checkedwrite);
                    });
                }
            });
        }
    }
    selectAllPrivilage(pageIndex, permissionIndex, event) {
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
                this.permissions[pageIndex].permissions[permissionIndex].permissions.forEach((page) => {
                    page.checked = event.target.checked;
                    this.setSelectedPermisions(event.target.checked, page.id, page.checked, page.checkedwrite);
                });
            }
        }
        else if (event.target.value === 'write') {
            if (event.target.checked) {
                this.permissions[pageIndex].permissions[permissionIndex].permissions.forEach((page) => {
                    page.checkedwrite = event.target.checked;
                    this.setSelectedPermisions(event.target.checked, page.id, page.checked, page.checkedwrite);
                });
            }
        }
        this.getPageChecked(pageIndex);
    }
    selectPage(pageIndex, permissionIndex, event) {
        event.stopPropagation();
        if (event.target.value === 'write') {
            this.permissions[pageIndex].permissions[permissionIndex].checkedwrite = event.target.checked;
        }
        if (event.target.value === 'read') {
            this.permissions[pageIndex].permissions[permissionIndex].checked = event.target.checked;
        }
        this.setSelectedPermisions(event.target.checked, this.permissions[pageIndex].permissions[permissionIndex].id, this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].checkedwrite);
        this.getPageChecked(pageIndex);
    }
    selectPrivilege(pageIndex, permissionIndex, privilegeIndex, event) {
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
    }
    getPageChecked(pageIndex) {
        if (this.permissions[pageIndex].checked !== this.getChecked(this.permissions[pageIndex].permissions) &&
            this.permissions[pageIndex].checkedwrite !== this.getCheckedWrite(this.permissions[pageIndex].permissions)) {
            this.permissions[pageIndex].checked = this.getChecked(this.permissions[pageIndex].permissions);
            this.setSelectedPermisions(this.permissions[pageIndex].checked, this.permissions[pageIndex].id, this.permissions[pageIndex].checked, this.permissions[pageIndex].checkedwrite);
        }
    }
    getPrivilageChecked(pageIndex, permissionIndex) {
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
    }
    selectAllAccess(value) {
        this.permissions.forEach((page) => {
            page.checked = value;
            this.setSelectedPermisions(value, page.id, page.checked, page.checkedwrite);
            if (page && page.permissions) {
                page.permissions.forEach((permission) => {
                    var _a;
                    permission.checked = value;
                    this.setSelectedPermisions(value, permission.id, permission.checked, permission.checkedwrite);
                    if (permission && ((_a = permission.permissions) === null || _a === void 0 ? void 0 : _a.length)) {
                        permission.permissions.forEach((privilege) => {
                            privilege.checked = value;
                            privilege.checkedwrite = value;
                            this.setSelectedPermisions(value, privilege.id, privilege.checked, privilege.checkedwrite);
                        });
                    }
                });
            }
        });
    }
    addNewRole(id) {
        this.permissions = [];
        this.formSubmit = false;
        this.permissionAllow = false;
        this.rolesService.getPermissionRoleById(id).subscribe((res) => {
            this.permissionAllow = true;
            this.permissions = res['data'];
        }, (err) => console.log(err));
    }
    setSelectedPermisions(_selected, id, allow, write) {
        const index = this.selectedPermissionsGroup.findIndex(res => res.id === id);
        if (index === -1 && allow) {
            this.selectedPermissionsGroup.push({ id, allow, write });
        }
        else if (!allow && !write && index !== -1) {
            this.selectedPermissionsGroup.splice(index, 1);
        }
        else if (index !== -1) {
            this.selectedPermissionsGroup = this.selectedPermissionsGroup.map(i => {
                if (i.id === id) {
                    i.write = write;
                    i.allow = allow;
                }
                return i;
            });
        }
    }
    addRole() {
        var _a, _b;
        this.formSubmit = true;
        let data = this.roleForm.getRawValue();
        if (this.roleForm.valid) {
            const dossierConfig = (_b = (_a = this.reportDashboardList) === null || _a === void 0 ? void 0 : _a.filter((dossier) => dossier.id === data.dossierid)) === null || _b === void 0 ? void 0 : _b.map((a) => ({
                id: a.id,
                projectId: a.projectId
            }))[0];
            data.priority = this.environment.priority;
            data.applicationid = this.environment.applicationid;
            data.parentid = 2;
            data.permissions = this.selectedPermissionsGroup;
            data.dossierid = JSON.stringify(dossierConfig);
            data = Object.assign({ organizationid: this.orgId }, data);
            if (this.roleId) {
                data.id = Number(this.roleId);
                this.rolesService.updateRole(this.roleId, data).subscribe(() => {
                    this.getRoleList();
                    this.mapPolicyGroupToRole(this.roleId, data.policyGroupId);
                    this.alertService.success('Role updated successfully');
                }, (err) => this.alertService.error(err.error.message));
            }
            else {
                data.id = 0;
                data.priority = this.environment.priority;
                this.rolesService.createRole(data).subscribe((res) => {
                    this.cancel();
                    if (data.policyGroupId) {
                        this.mapPolicyGroupToRole(res['data'], data.policyGroupId, 'add');
                    }
                    this.alertService.success('Role saved successfully');
                    this.getRoleList();
                }, (err) => this.alertService.error(err.error.message));
            }
        }
    }
    mapPolicyGroupToRole(id, data, action) {
        if (action === 'add') {
            this.rolesService.createPolicyGroupForRole(id, data).subscribe(() => console.log('policy group mapped to role successfully'), (_err) => this.alertService.error(AppConstants.errorMessage));
        }
        else {
            this.rolesService.updatePolicyGroupForRole(id, data).subscribe(() => console.log('policy group mapped to role successfully'), (_err) => this.alertService.error(AppConstants.errorMessage));
        }
    }
    getReturnValue(array = [], type) {
        return type === 'id'
            ? array.map(({ id }) => id)
            : array.map(id => {
                return { id };
            });
    }
    getChecked(item) {
        return item.filter(({ checked }) => checked).length > 0;
    }
    getCheckedWrite(item) {
        return item.filter(({ checkedwrite }) => checkedwrite).length > 0;
    }
    cancel() {
        this.roleForm.reset();
        this.roleForm.enable();
        this.permissions = [];
        this.formSubmit = false;
        this.permissionAllow = false;
        this.roleId = 0;
    }
    delete(event, id) {
        event.stopPropagation();
        this.deletedId = id;
        $('#Deleteuser').modal('show');
    }
    deleteRole() {
        this.rolesService.deleteRole(this.deletedId).subscribe(() => {
            this.cancel();
            this.alertService.success('Role deleted successfully');
            $('#Deleteuser').modal('hide');
            this.getRoleList();
        }, (_err) => this.alertService.error('Failed to delete Role'));
    }
    getReportDashboard() {
        return __awaiter(this, void 0, void 0, function* () {
            this.reportDashboardList = yield this.mstrService.getLibraryDetails(this.RBACORG);
        });
    }
    // roleValidation(): any {
    //   if (!this.roleForm.value.dossierid) {
    //     this.alertService.warn('Please fill all required fields');
    //     return false;
    //   }
    //   return true;
    // }
    onModelRole(value) {
        this.modelRoleName = value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }
    activateMenu(event) {
        if (event.item.label == 'Permissions') {
            this.firstTab = true;
        }
        else {
            this.firstTab = false;
            this.getPageInformation();
        }
    }
    getPageInformation() {
        this.permissionService.getAllPages().subscribe((res) => {
            this.menuList = res === null || res === void 0 ? void 0 : res.data;
            res.data.map((item, index) => {
                item.label = item.name;
            });
            this.nestedData();
            console.log(this.mainMenuList);
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
    }
    updateMenuOrder() {
        this.mainMenuList.forEach((element, index) => {
            var _a, _b;
            let data = {
                'menuorder': index + 1,
                'id': element.rolepermissionid,
                'roleid': this.roleId
            };
            this.reArrangedList.push(data);
            if (((_a = element === null || element === void 0 ? void 0 : element.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                (_b = element === null || element === void 0 ? void 0 : element.children) === null || _b === void 0 ? void 0 : _b.forEach((childelement, childindex) => {
                    var _a, _b;
                    let childdata = {
                        'menuorder': childindex + 1,
                        'id': childelement.rolepermissionid,
                        'roleid': this.roleId
                    };
                    this.reArrangedList.push(childdata);
                    if (((_a = childelement === null || childelement === void 0 ? void 0 : childelement.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        (_b = childelement === null || childelement === void 0 ? void 0 : childelement.children) === null || _b === void 0 ? void 0 : _b.forEach((childrenelement, childrenindex) => {
                            let childrendata = {
                                'menuorder': childrenindex + 1,
                                'id': childrenelement.rolepermissionid,
                                'roleid': this.roleId
                            };
                            this.reArrangedList.push(childrendata);
                        });
                    }
                });
            }
        });
        console.log('this.rearrangelist', this.reArrangedList);
        this.permissionService.updateMenuOrder({ pages: this.reArrangedList }).subscribe((res) => {
            this.alertService.success('Updated Successfully!');
            // this.Service.sendUpdate('Updated Successfully');
            // this.getPageInformation();
            window.location.reload();
        });
    }
    nodeDrop(event) {
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
    }
}
RolesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RolesComponent, deps: [{ token: i0.Injector }, { token: i1$2.FormBuilder }, { token: AlertService }, { token: MicrostrategyService }, { token: RbacService }, { token: DataStoreService }, { token: RbacService }], target: i0.ɵɵFactoryTarget.Component });
RolesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RolesComponent, selector: "roles", ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\" [formGroup]=\"roleForm\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2 px-2 px-sm-0\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"form-group bgiconsearch\">\r\n            <input class=\"form-control\" fieldKey=\"SETTINGS_ROL_SEARCH_BY_NAME\" placeholder=\"Search by Role name\"\r\n              type=\"text\" (keyup)=\"searchRole($event)\" />\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"useracess\">\r\n            <div class=\"d-flex align-items-center justify-content-center h-100 w-100 ng-star-inserted\"\r\n              *ngIf=\"!filteredRoleList.length\">\r\n              <p>No Record Found</p>\r\n            </div>\r\n            <ng-container *ngFor=\"let item of filteredRoleList\">\r\n              <div class=\"row userdata align-items-center\" (click)=\"getRoleInfo(item.id)\" [ngClass]=\"{ active: +item.id === roleId }\">\r\n                <div class=\"col-md-10 col-sm-10 col-10 overflow_txt\">\r\n                  <span class=\"nameuser\">{{ item.name }}</span> <br />\r\n                </div>\r\n                <div class=\"col-md-2 text-right\">\r\n                  <span class=\"right-icons\">\r\n                    <em class=\"fa fa-trash text-primary\" (click)=\"delete($event, item.id)\" aria-hidden=\"true\"\r\n                      *showField=\"'SETTINGS_ROL_DELETE'\"></em>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-md-6 col-12 roles-right group-role mt-2\">\r\n      <p-card class=\"rbac-card\" [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Role Details</span>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label for=\"rolesName\" class=\"referral-form-labels\">Role Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"rolesName\" type=\"text\" fieldKey=\"SETTINGS_ROL_ROLE_NAME\" formControlName=\"name\"\r\n              placeholder=\"Enter Role Name\" aria-describedby=\"rolesName\" [(ngModel)]=\"modelRoleName\"\r\n              (ngModelChange)=\"onModelRole($event)\" pInputText />\r\n            <div *ngIf=\"formValidate['name'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['name'].invalid\" class=\"p-error block\">Role Name is required </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"policyGroupList\" for=\"policyGroupList\" class=\"referral-form-labels\"\r\n              >Policy Groups\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-multiSelect name=\"policyGroupList\" [options]=\"policyGroupList\" formControlName=\"policyGroupId\"\r\n              defaultLabel=\"Select Policy Groups\" optionLabel=\"policygroupname\" optionValue=\"id\"\r\n              inputId=\"policyGroupList\" ariaFilterLabel=\"null\" fieldKey=\"SETTINGS_ROL_POLICY_GROUP\" display=\"chip\">\r\n            </p-multiSelect>\r\n            <div *ngIf=\"formValidate['policyGroupId'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['policyGroupId'].invalid\" class=\"p-error block\">Policy Group is required </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"landingPage\" for=\"landingPage\" class=\"referral-form-labels\">Landing Pagedgsdfg\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown name=\"landingPage\" [options]=\"landingPage\" [filter]=\"true\" [editable]=\"true\" formControlName=\"defaultpageid\"\r\n              defaultLabel=\"Select Landing Page\" fieldKey=\"SETTINGS_ROL_LANDING_PAGE\" optionLabel=\"name\"\r\n              optionValue=\"id\" inputId=\"landingPage\">\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['defaultpageid'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['defaultpageid'].invalid\" class=\"p-error block\">Landing Page is required\r\n              </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"dossierId\" for=\"dossierId\" class=\"referral-form-labels\">Report Dashboard</label>\r\n            <p-dropdown\r\n              [options]=\"reportDashboardList\"\r\n              optionLabel=\"name\"\r\n              id=\"dossierid\"\r\n              optionValue=\"id\"\r\n              placeholder=\"Select ID\"\r\n              formControlName=\"dossierid\"></p-dropdown>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\"></div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <!-- <button\r\n              class=\"pull-right mb-2 btn btn-primary btncommon report_button\"\r\n              fieldKey=\"SETTINGS_ROL_CONFIGURE_PERMISSION\"\r\n              (click)=\"addNewRole('1')\">\r\n              Configure Permission\r\n            </button> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-2\" *ngIf=\"permissionAllow\">\r\n          <button fieldKey=\"SETTINGS_ROL_RESET\" class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\"\r\n            (click)=\"selectAllAccess(false)\">\r\n            Reset\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_ROL_SELECT_ALL\"\r\n            (click)=\"selectAllAccess(true)\">\r\n            Select All\r\n          </button>\r\n          <!-- <br /> -->\r\n        </div>\r\n        <div class=\"strip_head toggleleft adjusttop\" *ngIf=\"permissionAllow\">\r\n          <!-- <span class=\"report_head font-weight-bold\">Permissions</span> -->\r\n          <p-tabMenu [model]=\"items\" [activeItem]=\"activeItem\"></p-tabMenu>\r\n        </div>\r\n\r\n        <div *ngIf=\"firstTab\">\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"mt-4 mb-4\">\r\n            <p-accordion class=\"w-100\">\r\n              <p-accordionTab class=\"w-100\" *ngFor=\"let page of permissions; let i = index\">\r\n                <ng-template pTemplate=\"header\">\r\n                  {{ page.description }}\r\n                </ng-template>\r\n                <ng-template pTemplate=\"content\">\r\n                  <div class=\"heading_analysis datamargin\">\r\n                    <div class=\"Customcheckbox pl-1\">\r\n                      <input type=\"checkbox\" class=\"styled-checkbox\" id=\"custom{{ i }}\"\r\n                        (change)=\"selectAllPage(i, $event)\" [checked]=\"page?.checked\" />\r\n                      <label for=\"custom{{ i }}\" class=\"heading_role\">{{ page.description }}</label>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <ul class=\"marginul_list ecms_rolescroll\">\r\n                    <ng-container *ngFor=\"let permission of page?.permissions; let j = index\">\r\n                      <ng-container *ngIf=\"isPrivilage(permission); else permissionOnly\">\r\n                        <li>\r\n                          <div class=\"inner_childaccess d-flex mt-0 py-1\">\r\n                            <div class=\"d-inline-flex align-items-center\">\r\n                              <label class=\"Customcheckbox pl-1 mb-0\">\r\n                                <input type=\"checkbox\" [checked]=\"permission?.checked\"\r\n                                  (change)=\"selectAllPrivilage(i, j, $event)\" id=\"description{{ j }}\" />\r\n                                <span class=\"checkmark\"></span>\r\n                              </label>\r\n                              <label for=\"description{{ j }}\" class=\"heading_role mb-0\">{{\r\n                                permission.description\r\n                                }}</label>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                        <li class=\"ml-1\" *ngFor=\"let privilege of permission?.permissions; let k = index\">\r\n                          <div class=\"d-flex\">\r\n                            <div class=\"custom-control custom-switch\">\r\n                              <input type=\"checkbox\" [checked]=\"privilege?.checked\" class=\"custom-control-input\"\r\n                                id=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\"\r\n                                (click)=\"selectPrivilege(i, j, k, $event)\" />\r\n                              <label class=\"custom-control-label\" for=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\">{{\r\n                                privilege.description\r\n                                }}</label>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                      </ng-container>\r\n                      <ng-template #permissionOnly>\r\n                        <li>\r\n                          <div class=\"custom-control custom-switch\">\r\n                            <input type=\"checkbox\" [checked]=\"permission?.checked\" class=\"custom-control-input\"\r\n                              (click)=\"selectPage(i, j, $event)\" id=\"customSwitchesroles{{ i }}{{ j }}\" />\r\n                            <label class=\"custom-control-label\" for=\"customSwitchesroles{{ i }}{{ j }}\">{{\r\n                              permission.description }}\r\n                            </label>\r\n                          </div>\r\n                        </li>\r\n                      </ng-template>\r\n                    </ng-container>\r\n                  </ul>\r\n                </ng-template>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n            <div class=\"col-md-12 box d-none\" *ngFor=\"let page of permissions; let i = index\">\r\n              <div class=\"heading_analysis datamargin\">\r\n                <div class=\"Customcheckbox\">\r\n                  <input type=\"checkbox\" class=\"styled-checkbox\" id=\"custom{{ i }}\" (change)=\"selectAllPage(i, $event)\"\r\n                    [checked]=\"page?.checked\" />\r\n                  <label for=\"custom{{ i }}\" class=\"heading_role\">{{ page.description }}</label>\r\n                </div>\r\n              </div>\r\n\r\n              <ul class=\"marginul_list ecms_rolescroll\">\r\n                <ng-container *ngFor=\"let permission of page?.permissions; let j = index\">\r\n                  <ng-container *ngIf=\"isPrivilage(permission); else permissionOnly\">\r\n                    <li>\r\n                      <div class=\"inner_childaccess\">\r\n                        <label class=\"Customcheckbox\">\r\n                          <input type=\"checkbox\" [checked]=\"permission?.checked\"\r\n                            (change)=\"selectAllPrivilage(i, j, $event)\" />\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                        <span class=\"heading_role\">{{ permission.description }}</span>\r\n                      </div>\r\n                    </li>\r\n                    <li *ngFor=\"let privilege of permission?.permissions; let k = index\">\r\n                      <div class=\"custom-control custom-switch\">\r\n                        <input type=\"checkbox\" [checked]=\"privilege?.checked\" class=\"custom-control-input\"\r\n                          id=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\" (click)=\"selectPrivilege(i, j, k, $event)\" />\r\n                        <label class=\"custom-control-label\" for=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\">{{\r\n                          privilege.description\r\n                          }}</label>\r\n                      </div>\r\n                    </li>\r\n                  </ng-container>\r\n                  <ng-template #permissionOnly>\r\n                    <li>\r\n                      <div class=\"custom-control custom-switch\">\r\n                        <input type=\"checkbox\" [checked]=\"permission?.checked\" class=\"custom-control-input\"\r\n                          (click)=\"selectPage(i, j, $event)\" id=\"customSwitchesroles{{ i }}{{ j }}\" />\r\n                        <label class=\"custom-control-label\" for=\"customSwitchesroles{{ i }}{{ j }}\">{{\r\n                          permission.description }}\r\n                        </label>\r\n                      </div>\r\n                    </li>\r\n                  </ng-template>\r\n                </ng-container>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-2\">\r\n            <button class=\"pull-right mb-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_ROL_ADD_ROLE\"\r\n              (click)=\"addRole()\">\r\n              {{ roleId ? 'Update' : 'Add' }} Role\r\n            </button>\r\n            <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" fieldKey=\"SETTINGS_ROL_CANCEL\"\r\n              (click)=\"cancel()\">\r\n              Clear\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!firstTab\">\r\n\r\n          <div class=\"card flex justify-content-center\">\r\n            <p-tree [value]=\"mainMenuList\" [draggableNodes]=\"true\" [droppableNodes]=\"true\" draggableScope=\"self\"\r\n              droppableScope=\"self\" class=\"w-full md:w-30rem\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\r\n              [validateDrop]=\"true\" (onNodeDrop)=\"nodeDrop($event)\"></p-tree>\r\n          </div>\r\n\r\n          <div class=\"mt-2\">\r\n            <button class=\"pull-right mb-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_ROL_ADD_ROLE\"\r\n              (click)=\"updateMenuOrder()\">\r\n              Submit\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n          <br />\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Role</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to delete the Role?\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"deleteRole()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:var(--font-13)}.useracess{border-radius:2px;padding:5px 0;max-height:calc(100vh - 227px);overflow-y:auto}.userempty{max-width:none;border-radius:50%;height:35px;width:35px}.row.userdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}span.nameuser{font-size:var(--font-13);color:var(--label-text);font-weight:600}.userid,span.emailuser{font-size:var(--font-13);color:#838383}.heading_analysis{padding-bottom:0;border-bottom:1px solid var(--table-border)}.Customcheckbox{position:relative;padding-top:0;padding-left:10px}.heading_role{padding-left:10px;font-size:var(--font-13);top:-2px;position:relative;font-weight:700}.marginul_list{padding:0;margin:0}.marginul_list li{list-style:none;padding-top:5px}.marginul_list li label{color:var(--text-dark);text-transform:capitalize;font-size:var(--font-13)}.marginul_list.ecms_rolescroll{max-height:250px;overflow:auto;margin-bottom:20px}.ecms_rolescroll::-webkit-scrollbar{width:.5em;height:.5em}.ecms_rolescroll::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #0000004d;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.ecms_rolescroll::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:1px solid slategrey}.inner_childaccess{margin-top:9px;margin-left:3px;border-bottom:1px solid var(--table-border)}.inner_childaccess .heading_role{font-size:var(--font-13);font-weight:700}.Customcheckbox input{display:inline-block}.Customcheckbox:hover input~.checkmark{border:solid 2px #2196f3}.Customcheckbox input~.checkmark{display:none}.Customcheckbox input:checked~.checkmark{display:none;border:solid 2px #1db766;background-color:#1db766}.Customcheckbox input:checked~.checkmark:after{display:block}.Customcheckbox .checkmark:after{left:6px;top:2px;width:5px;height:10px;border:solid #ffffff;border-width:0 2px 2px 0;transform:rotate(45deg)}.custom-control-input:checked~.custom-control-label:before{color:#fff;border:#1db766!important;background:#1db766!important}.custom-control.custom-switch.toggleleft .custom-control-label{padding-top:3px;font-size:var(--font-13)}.custom-switch .custom-control-label:after{top:calc(.25rem + 3px)}.toggle .custom-control-input:checked~.custom-control-label:before{color:#fff;border:#1db766!important;background:#1db766!important}.toggle .custom-control-input~.custom-control-label:before{color:#fff;border:#8c8c8c;background:#8c8c8c}.toggle .custom-control-label:after{background-color:#fff}.custom-switch .custom-control-label:before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-control-label:before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:18px;pointer-events:none;content:\"\";background-color:#fff;border:1px solid #adb5bd}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control input[type=checkbox]+label:before{content:\"\"}.custom-switch{padding-left:3.25rem}.toggleleft{font-size:var(--font-13);font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-top:27px}.head-div .heading{font-weight:600}.right-icons .fa{margin-top:3px;display:inline-block;z-index:9}.right-icons .fa-trash{font-size:18px}:host ::ng-deep .p-accordion .p-accordion-tab .p-accordion-header .p-accordion-header-link{background:var(--bg-light);color:var(--text-dark);border-color:var(--table-border)}:host ::ng-deep .p-accordion .p-accordion-tab .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link{background:var(--primary);color:var(--hover-text);border-color:var(--table-border)}:host ::ng-deep .p-accordion .p-accordion-tab .p-accordion-content{background:var(--bg-light);color:var(--text-dark);border-color:var(--table-border)}:host ::ng-deep .p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link{background:var(--primary);color:var(--hover-text);border-color:var(--table-border)}.adjusttop{margin-top:60px;margin-bottom:-24px}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i7.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i8.MultiSelect, selector: "p-multiSelect", inputs: ["style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "label", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "autoZIndex", "baseZIndex", "filterBy", "virtualScroll", "itemSize", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "scrollHeight", "defaultLabel", "placeholder", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide"] }, { type: i9.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }, { type: i10.TabMenu, selector: "p-tabMenu", inputs: ["model", "activeItem", "scrollable", "popup", "style", "styleClass"] }, { type: i11.Accordion, selector: "p-accordion", inputs: ["multiple", "style", "styleClass", "expandIcon", "collapseIcon", "activeIndex"], outputs: ["onClose", "onOpen", "activeIndexChange"] }, { type: i11.AccordionTab, selector: "p-accordionTab", inputs: ["header", "disabled", "cache", "transitionOptions", "selected"], outputs: ["selectedChange"] }, { type: i12.Tree, selector: "p-tree", inputs: ["value", "selectionMode", "selection", "style", "styleClass", "contextMenu", "layout", "draggableScope", "droppableScope", "draggableNodes", "droppableNodes", "metaKeySelection", "propagateSelectionUp", "propagateSelectionDown", "loading", "loadingIcon", "emptyMessage", "ariaLabel", "togglerAriaLabel", "ariaLabelledBy", "validateDrop", "filter", "filterBy", "filterMode", "filterPlaceholder", "filteredNodes", "filterLocale", "scrollHeight", "virtualScroll", "virtualNodeHeight", "minBufferPx", "maxBufferPx", "indentation", "trackBy"], outputs: ["selectionChange", "onNodeSelect", "onNodeUnselect", "onNodeExpand", "onNodeCollapse", "onNodeContextMenuSelect", "onNodeDrop", "onFilter"] }], directives: [{ type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }, { type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i16.InputText, selector: "[pInputText]" }, { type: i17.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RolesComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'roles',
                    templateUrl: './roles.component.html',
                    styleUrls: ['./roles.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1$2.FormBuilder }, { type: AlertService }, { type: MicrostrategyService }, { type: RbacService }, { type: DataStoreService }, { type: RbacService }]; } });

class RbacRolesComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.roleEvent.subscribe(val => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
            this._storeservice.setData('HTTPSERVICE', val.httpService);
        });
    }
}
RbacRolesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacRolesComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
RbacRolesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacRolesComponent, selector: "rbac-roles", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", roleEvent: "roleEvent" }, ngImport: i0, template: `
      <roles></roles>
  `, isInline: true, components: [{ type: RolesComponent, selector: "roles" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacRolesComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rbac-roles',
                    template: `
      <roles></roles>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], roleEvent: [{
                type: Input
            }] } });

class DirectivesModule {
}
DirectivesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DirectivesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
DirectivesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PermissionDirective, ShowFieldDirective],
                    imports: [CommonModule],
                    exports: [PermissionDirective, ShowFieldDirective]
                }]
        }] });

class AlertModule {
}
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent]
                }]
        }] });

class PicsRbacRolesModule {
}
PicsRbacRolesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacRolesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PicsRbacRolesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacRolesModule, declarations: [RolesComponent], imports: [CommonModule,
        ReactiveFormsModule,
        NgbModule,
        TabMenuModule,
        TabViewModule,
        TreeSelectModule,
        // HttpClientModule,
        CheckboxModule,
        DropdownModule,
        CardModule,
        ConfirmDialogModule,
        AccordionModule,
        MessageModule,
        TableModule,
        InputTextModule,
        CalendarModule,
        EditorModule,
        FieldsetModule,
        ButtonModule,
        RadioButtonModule,
        InputTextareaModule,
        InputMaskModule,
        StepsModule,
        ToastModule,
        RippleModule,
        AvatarModule,
        BadgeModule,
        MultiSelectModule,
        InputSwitchModule,
        ProgressSpinnerModule,
        SpeedDialModule,
        OrderListModule,
        FileUploadModule,
        DialogModule,
        PasswordModule,
        KnobModule,
        SidebarModule,
        ContextMenuModule,
        ConfirmPopupModule,
        DirectivesModule,
        AlertModule,
        TreeModule,
        DragDropModule], exports: [RolesComponent] });
PicsRbacRolesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacRolesModule, providers: [RbacService, MicrostrategyService, HttpClient, AlertService, ConfirmationService, PermissionStore,
        DataStoreService, TreeDragDropService], imports: [[
            CommonModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            // HttpClientModule,
            CheckboxModule,
            DropdownModule,
            CardModule,
            ConfirmDialogModule,
            AccordionModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            SidebarModule,
            ContextMenuModule,
            ConfirmPopupModule,
            DirectivesModule,
            AlertModule,
            TreeModule,
            DragDropModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacRolesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RolesComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NgbModule,
                        TabMenuModule,
                        TabViewModule,
                        TreeSelectModule,
                        // HttpClientModule,
                        CheckboxModule,
                        DropdownModule,
                        CardModule,
                        ConfirmDialogModule,
                        AccordionModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        SidebarModule,
                        ContextMenuModule,
                        ConfirmPopupModule,
                        DirectivesModule,
                        AlertModule,
                        TreeModule,
                        DragDropModule
                    ],
                    exports: [RolesComponent],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                    providers: [RbacService, MicrostrategyService, HttpClient, AlertService, ConfirmationService, PermissionStore,
                        DataStoreService, TreeDragDropService]
                }]
        }] });

class RbacRolesModule {
}
RbacRolesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacRolesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RbacRolesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacRolesModule, declarations: [RbacRolesComponent], imports: [PicsRbacRolesModule], exports: [RbacRolesComponent] });
RbacRolesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacRolesModule, imports: [[
            PicsRbacRolesModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacRolesModule, decorators: [{
            type: NgModule,
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

export { RbacRolesComponent, RbacRolesModule, RbacRolesService };
//# sourceMappingURL=pics-core-rbac-roles.js.map
