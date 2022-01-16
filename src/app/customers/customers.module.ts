import { NgModule } from '@angular/core';
import {CustomerAddComponent} from "./customer-add/customer-add.component";
import {CustomerBrowserComponent} from "./customer-browser/customer-browser.component";
import {CustomerDetailsComponent} from "./customer-details/customer-details.component";
import {CustomerService} from "./customer.service";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../core/auth-guard.service";
import {CustomerAddDeactivateGuard} from "./customer-add-deactivate-guard";

const routes: Routes = [
  {path: 'customers', component: CustomerBrowserComponent},
  {path: 'customers/add', component: CustomerAddComponent, canActivate: [AuthGuard], canDeactivate: [CustomerAddDeactivateGuard]}
];

@NgModule({
  declarations: [CustomerAddComponent,
    CustomerBrowserComponent,
    CustomerDetailsComponent],
  providers: [CustomerService, CustomerAddDeactivateGuard],
  imports: [SharedModule, RouterModule.forChild(routes)]
  ,
  exports: [CustomerAddComponent, CustomerBrowserComponent]
})
export class CustomersModule { }
