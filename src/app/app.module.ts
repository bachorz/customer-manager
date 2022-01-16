import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {CustomersModule} from "./customers/customers.module";
import {CoreModule} from "./core/core.module";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./core/not-found/not-found.component";


const routes: Routes = [
    {path: 'contracts', loadChildren: () => import(`src/app/contracts/contracts.module`).then(m => m.ContractsModule)},
    {path: '', redirectTo: 'customers', pathMatch: "full"},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        RouterModule.forRoot(routes),
        CustomersModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
