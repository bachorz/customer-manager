import { NgModule } from '@angular/core';
import { ContractListComponent } from './contract-list/contract-list.component';
import {ContractService} from "./contract.service";
import {SharedModule} from "../shared/shared.module";
import {Route, RouterModule, Routes} from "@angular/router";
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import {ContractResolver} from "./contract-resolver";

const routes: Routes = [
  {path: '/:id', component: ContractDetailsComponent, resolve: {contract: ContractResolver}},
  {path: '', component: ContractListComponent}
];

@NgModule({
  declarations: [ContractListComponent, ContractDetailsComponent],
  providers: [ContractService, ContractResolver
  ],
  exports: [
    ContractListComponent
  ],
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ]
})
export class ContractsModule { }
