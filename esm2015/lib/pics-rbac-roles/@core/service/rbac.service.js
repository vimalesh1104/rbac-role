import { Injectable } from '@angular/core';
// import { HttpService } from './http.service';
import { AttachmentConfig, PermissionsURL, PolicyGroupConfig, RoleConfig, UserConfig } from '../urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class RbacService {
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
RbacService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
RbacService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcm9sZXMvc3JjL2xpYi9waWNzLXJiYWMtcm9sZXMvQGNvcmUvc2VydmljZS9yYmFjLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxnREFBZ0Q7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQU10SCxNQUFNLE9BQU8sV0FBVztJQUV0QixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxtREFBbUQ7SUFFbkQsY0FBYyxDQUFDLEdBQVk7UUFDekIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxLQUFVO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNELFFBQVEsQ0FBQyxJQUFTO1FBQ2hCLE9BQU8sSUFBSSxD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QyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFDRCxlQUFlLENBQUMsSUFBUztRQUN2QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDOzt5R0FsSFUsV0FBVzs2R0FBWCxXQUFXLGNBRlYsTUFBTTs0RkFFUCxXQUFXO2tCQUh2QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG4vLyBpbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXR0YWNobWVudENvbmZpZywgUGVybWlzc2lvbnNVUkwsIFBvbGljeUdyb3VwQ29uZmlnLCBSb2xlQ29uZmlnLCBVc2VyQ29uZmlnIH0gZnJvbSAnLi4vdXJscy9yYmFjLXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmJhY1NlcnZpY2Uge1xyXG4gIGh0dHBTZXJ2aWNlOmFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UgPSByZXNbJ0hUVFBTRVJWSUNFJ11cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHt9XHJcblxyXG4gIGdldEFsbFVzZXJMaXN0KGtleT86IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7VXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLmdldEFsbFVzZXJMaXN0fS8ke2tleX1gKTtcclxuICB9XHJcbiAgZ2V0QWxsVXNlck9yZ0xpc3Qob3JnaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFVzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyT3JnTGlzdCArIG9yZ2lkKTtcclxuICB9XHJcbiAgc2F2ZVVzZXIoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFVzZXJDb25maWcuRW5kUG9pbnQuVXNlci5jcmVhdGVVc2VyLCBkYXRhKTtcclxuICB9XHJcbiAgdXBkYXRlVXNlcihkYXRhOiBhbnksIHVzZXJpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wdXQoYCR7VXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLmdldEFsbFVzZXJMaXN0fS8ke3VzZXJpZH1gLCBkYXRhKTtcclxuICB9XHJcbiAgZGVsZXRlVXNlcihpZD86IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZGVsZXRlKGAke1VzZXJDb25maWcuRW5kUG9pbnQuVXNlci5nZXRBbGxVc2VyTGlzdH0vJHtpZH1gKTtcclxuICB9XHJcbiAgYWN0aXZhdGVVc2VyKGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuYWN0aXZhdGVVc2VyLCBkYXRhKTtcclxuICB9XHJcbiAgYWRkUHJvdmlkZXJVc2VyKGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChVc2VyQ29uZmlnLkVuZFBvaW50LlByb3ZpZGVyLmFkZFByb3ZpZGVyVXNlciwgZGF0YSk7XHJcbiAgfVxyXG4gIGFkZFVzZXJSb2xlKGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIudXNlclJvbGUsIGRhdGEpO1xyXG4gIH1cclxuICB1cGxvYWRLZXkob2JqcGFyYW1zOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoQXR0YWNobWVudENvbmZpZy5FbmRQb2ludC5BdHRhY2htZW50cy5VcGxvYWRLZXksIG9ianBhcmFtcyk7XHJcbiAgfVxyXG4gIGdldE9yZ1BvbGljeUdyb3VwTGlzdChvcmdpZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoXHJcbiAgICAgIFBvbGljeUdyb3VwQ29uZmlnLkVuZFBvaW50LnBvbGljeUdyb3VwLmdldE9yZ1BvbGljeUdyb3Vwcy5yZXBsYWNlKCd7b3JnYW5pemF0aW9uaWR9JywgU3RyaW5nKG9yZ2lkKSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGdldEFsbFBvbGljeUdyb3VwTGlzdChwb2xpY3lHcm91cElkPzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBlbmRQb2ludCA9IHBvbGljeUdyb3VwSWRcclxuICAgICAgPyBgJHtQb2xpY3lHcm91cENvbmZpZy5FbmRQb2ludC5wb2xpY3lHcm91cC5nZXRQb2xpY3lHcm91cExpc3R9LyR7cG9saWN5R3JvdXBJZH1gXHJcbiAgICAgIDogUG9saWN5R3JvdXBDb25maWcuRW5kUG9pbnQucG9saWN5R3JvdXAuZ2V0QWxsUG9saWN5R3JvdXBMaXN0O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGVuZFBvaW50KTtcclxuICB9XHJcbiAgZ2V0UG9saWN5R3JvdXBCeUlkKGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChQb2xpY3lHcm91cENvbmZpZy5FbmRQb2ludC5wb2xpY3lHcm91cC5nZXRQb2xpY3lHcm91cExpc3QgKyAnLycgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRQb2xpY3lHcm91cHNCeU1hbmFnZW1lbnRHcm91cChwb2xpY3lHcm91cElkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgL29yZy9wb2xpY3lHcm91cC9tYW5hZ2VtZW50Z3JvdXAvJHtwb2xpY3lHcm91cElkfWApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUG9saWN5R3JvdXAoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFBvbGljeUdyb3VwQ29uZmlnLkVuZFBvaW50LnBvbGljeUdyb3VwLmNyZWF0ZVBvbGljeUdyb3VwLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvbGljeUdyb3VwKGlkOiBudW1iZXIsIGl0ZW06IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucHV0KGAke1BvbGljeUdyb3VwQ29uZmlnLkVuZFBvaW50LnBvbGljeUdyb3VwLmdldFBvbGljeUdyb3VwTGlzdH0vJHtpZH1gLCBpdGVtKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVBvbGljeUdyb3VwKGlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmRlbGV0ZShgJHtQb2xpY3lHcm91cENvbmZpZy5FbmRQb2ludC5wb2xpY3lHcm91cC5nZXRQb2xpY3lHcm91cExpc3R9LyR7aWR9YCk7XHJcbiAgfVxyXG4gIGdldEFsbFVzZXJSb2xlKGlkPzogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoUm9sZUNvbmZpZy5FbmRQb2ludC5yb2xlLmdldEFsbE9yZ1JvbGUucmVwbGFjZSgne29yZ2lkfScsIFN0cmluZyhpZCkpKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVJvbGUoaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZGVsZXRlKGAke1JvbGVDb25maWcuRW5kUG9pbnQucm9sZS5nZXRBbGxVc2VyUm9sZX0vJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGdldFJvbGVCeUlkKHJvbGVpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7Um9sZUNvbmZpZy5FbmRQb2ludC5yb2xlLmdldEFsbFVzZXJSb2xlfS8ke3JvbGVpZH1gKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVJvbGUoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFJvbGVDb25maWcuRW5kUG9pbnQucm9sZS5jcmVhdGVSb2xlLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJvbGUocm9sZUlkOiBhbnksIGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucHV0KGAke1JvbGVDb25maWcuRW5kUG9pbnQucm9sZS5nZXRBbGxVc2VyUm9sZX0vJHtyb2xlSWR9YCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRMYW5kaW5nUGFnZShpZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7Um9sZUNvbmZpZy5FbmRQb2ludC5yb2xlLmdldExhbmRpbmdQYWdlfS8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUG9saWN5R3JvdXBGb3JSb2xlKHJvbGVJZDogbnVtYmVyLCBkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoYCR7Um9sZUNvbmZpZy5FbmRQb2ludC5yb2xlLmFkZFBvbGljeUdyb3VwfS8ke3JvbGVJZH0vcG9saWN5Z3JvdXBzYCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb2xpY3lHcm91cEZvclJvbGUocm9sZUlkOiBudW1iZXIsIGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucHV0KGAke1JvbGVDb25maWcuRW5kUG9pbnQucm9sZS5hZGRQb2xpY3lHcm91cH0vJHtyb2xlSWR9L3BvbGljeWdyb3Vwc2AsIGRhdGEpO1xyXG4gIH1cclxuICBnZXRSZXBvcnREYXNoYmFvcmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoYCR7Um9sZUNvbmZpZy5FbmRQb2ludC5yb2xlLmRvc3NpZXJ9YCk7XHJcbiAgfVxyXG4gIGdldFBlcm1pc3Npb25Sb2xlQnlJZChpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoUGVybWlzc2lvbnNVUkwuRW5kUG9pbnRzLnBlcm1pc3Npb24ucGVybWlzc2lvblJvbGVCeUlkLnJlcGxhY2UoJ3tpZH0nLCBpZCkpO1xyXG4gIH1cclxuICBnZXRNYW5hZ2VtZW50R3JvdXBUcmVlKF9vcmdhbml6YXRpb25pZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoJy9vcmcvbWFuYWdlbWVudC1ncm91cC9vcmdhbml6YXRpb24vdHJlZScpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsUGFnZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoUGVybWlzc2lvbnNVUkwuRW5kUG9pbnRzLnBhZ2UuZ2V0UGFnZUluZm9ybWF0aW9uKTtcclxuICB9XHJcbiAgdXBkYXRlTWVudU9yZGVyKHBhZ2U6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChQZXJtaXNzaW9uc1VSTC5FbmRQb2ludHMucGFnZS51cGRhdGVNZW51T3JkZXIsIHBhZ2UpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==