import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-rbac-roles/@core/permissions/permission.store';
import { DataStoreService } from './pics-rbac-roles/@core/service/data-store.service';
import { RBACINFO } from './pics-rbac-roles/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
export declare class RbacRolesComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    roleEvent: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RbacRolesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RbacRolesComponent, "rbac-roles", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "roleEvent": "roleEvent"; }, {}, never, never>;
}
