import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./alert.service";
import * as i3 from "../permissions/permission.store";
import * as i4 from "./data-store.service";
export class MicrostrategyService {
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
MicrostrategyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, deps: [{ token: i1.HttpClient }, { token: i2.AlertService }, { token: i3.PermissionStore }, { token: i4.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
MicrostrategyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MicrostrategyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.AlertService }, { type: i3.PermissionStore }, { type: i4.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm9zdHJhdGVneS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcm9sZXMvc3JjL2xpYi9waWNzLXJiYWMtcm9sZXMvQGNvcmUvc2VydmljZS9taWNyb3N0cmF0ZWd5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVczQyxNQUFNLE9BQU8sb0JBQW9CO0lBSS9CLFlBQW9CLElBQWdCLEVBQzFCLFlBQTBCLEVBQzFCLGVBQWdDLEVBQ2hDLGFBQStCO1FBSHJCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDbkY7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCxZQUFZOztRQUNWLE1BQU0sSUFBSSxHQUFHO1lBQ1gsUUFBUSxFQUFFLE1BQUEsSUFBSSxDQUFDLFdBQVcsMENBQUUsWUFBWTtZQUN4QyxRQUFRLEVBQUUsTUFBQSxJ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TUFBQSxJQUFJLENBQUMsV0FBVywwQ0FBRSxPQUFPLGNBQWMsRUFBRTtnQkFDL0MsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLE9BQU8sRUFBRSxVQUFVO2FBQ3BCLENBQUM7aUJBQ0QsU0FBUyxFQUFFO2lCQUNYLElBQUksQ0FBQyxDQUFDLFFBQWEsRUFBRSxFQUFFO2dCQUN0QixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2xDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ2xCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztvQkFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtpQkFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQzs7S0FDTjs7a0hBdkZVLG9CQUFvQjtzSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi4vcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcblxyXG5cclxuZGVjbGFyZSBjb25zdCBtaWNyb3N0cmF0ZWd5OiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNaWNyb3N0cmF0ZWd5U2VydmljZSB7XHJcbiAgZG9zc2llckxpc3Q6IGFueTtcclxuICBSQkFDT1JHOiBhbnk7XHJcbiAgZW52aXJvbm1lbnQ6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzWydSQkFDT1JHJ10gJiYgcmVzWydSQkFDT1JHJ10gIT09ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLlJCQUNPUkcgPSByZXNbJ1JCQUNPUkcnXTtcclxuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSB0aGlzLlJCQUNPUkdbJ2Vudmlyb25tZW50J10gPyB0aGlzLlJCQUNPUkdbJ2Vudmlyb25tZW50J10gOiAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICBnZXRBdXRoVG9rZW4oKSB7XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICB1c2VybmFtZTogdGhpcy5lbnZpcm9ubWVudD8ubXN0clVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogdGhpcy5lbnZpcm9ubWVudD8ubXN0clBhc3N3b3JkLFxyXG4gICAgICBsb2dpbk1vZGU6IDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbnZpcm9ubWVudD8ubXN0clVSTH0vYXBpL2F1dGgvbG9naW5gLCBib2R5LCB7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSdcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RG9zc2llcihwcm9qZWN0SWQ/OiBzdHJpbmcsIGRvc3NpZXJJZD86IHN0cmluZywgcGFnZU5vPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9IHRoaXMucGVybWlzc2lvblN0b3JlLnN0YXRlO1xyXG4gICAgY29uc3QgcHJvamVjdFVybCA9IGAke3RoaXMuZW52aXJvbm1lbnQ/Lm1zdHJVUkx9L2FwcC8ke3Byb2plY3RJZH1gO1xyXG4gICAgY29uc3QgZG9zc2llclVybCA9IGAke3Byb2plY3RVcmx9LyR7ZG9zc2llcklkfS8ke3BhZ2VOb31gO1xyXG4gICAgbWljcm9zdHJhdGVneS5kb3NzaWVyXHJcbiAgICAgIC5jcmVhdGUoe1xyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9zc2llckNvbnRhaW5lcicpLFxyXG4gICAgICAgIHVybDogZG9zc2llclVybCxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgZ290b0xpYnJhcnk6IHBlcm1pc3Npb25zPy5BTkFfTElCUkFSWSxcclxuICAgICAgICAgIHRpdGxlOiB0cnVlLFxyXG4gICAgICAgICAgdG9jOiB0cnVlLFxyXG4gICAgICAgICAgcmVzZXQ6IHRydWUsXHJcbiAgICAgICAgICByZXByb21wdDogdHJ1ZSxcclxuICAgICAgICAgIHNoYXJlOiB0cnVlLFxyXG4gICAgICAgICAgY29tbWVudDogdHJ1ZSxcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgIG9wdGlvbnM6IHRydWUsXHJcbiAgICAgICAgICBzZWFyY2g6IHRydWUsXHJcbiAgICAgICAgICBib29rbWFyazogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW5hYmxlQ3VzdG9tQXV0aGVudGljYXRpb246IHRydWUsXHJcbiAgICAgICAgZW5hYmxlUmVzcG9uc2l2ZTogZmFsc2UsXHJcbiAgICAgICAgY29udGFpbmVyV2lkdGg6IDQwMCxcclxuICAgICAgICBjb250YWluZXJIZWlnaHQ6IDQwMCxcclxuICAgICAgICBjdXN0b21BdXRoZW50aWNhdGlvblR5cGU6IG1pY3Jvc3RyYXRlZ3kuZG9zc2llci5DdXN0b21BdXRoZW50aWNhdGlvblR5cGUuQVVUSF9UT0tFTixcclxuICAgICAgICBnZXRMb2dpblRva2VuOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0QXV0aFRva2VuKCkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ3gtbXN0ci1hdXRodG9rZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoX2VycjogYW55KSA9PiB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihgRmFpbGVkIHRvIGNvbm5lY3QgJHt0aGlzLmVudmlyb25tZW50Py5tc3RyVVJMfWApKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldExpYnJhcnlEZXRhaWxzKFJCQUNPUkc/OiBhbnkpIHtcclxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5nZXRBdXRoVG9rZW4oKS50b1Byb21pc2UoKTtcclxuICAgIGNvbnN0IGF1dGh0b2tlbiA9IHRva2VuLmhlYWRlcnMuZ2V0KCd4LW1zdHItYXV0aHRva2VuJylcclxuICAgIGNvbnN0IGhlYWRlckluZm8gPSB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdYLU1TVFItQXV0aFRva2VuJzogYXV0aHRva2VuID8gYXV0aHRva2VuOiAnJyxcclxuICAgICAgJ1gtTVNUUi1Qcm9qZWN0SUQnOiB0aGlzLmVudmlyb25tZW50Py5tc3RyUHJvamVjdElEXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KGAke3RoaXMuZW52aXJvbm1lbnQ/Lm1zdHJVUkx9L2FwaS9saWJyYXJ5YCwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJJbmZvXHJcbiAgICAgIH0pXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5tYXAoKG1zdHI6IGFueSkgPT4gKHtcclxuICAgICAgICAgIGlkOiBtc3RyLnRhcmdldC5pZCxcclxuICAgICAgICAgIHByb2plY3RJZDogbXN0ci5wcm9qZWN0SWQsXHJcbiAgICAgICAgICBuYW1lOiBtc3RyLnRhcmdldC5uYW1lXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19