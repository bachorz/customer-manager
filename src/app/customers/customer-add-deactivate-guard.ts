import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {CustomerAddComponent} from "./customer-add/customer-add.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerAddDeactivateGuard implements CanDeactivate<CustomerAddComponent>{

  constructor() { }

  canDeactivate(component: CustomerAddComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !(component.name || component.age || component.type);
  }
}
