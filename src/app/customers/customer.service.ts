import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Config, CONFIG} from "../model";
import {Customer} from "./model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient, @Inject(CONFIG) private config: Config) {
  }

  getCustomer() {
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}/customers`)
        .pipe(map(customers => customers.slice(0, this.config.customerLimit)));
  }

  createCustomer(customer: Customer) {
    return this.httpClient.post(`${this.config.apiUrl}/customers`, customer);
  }

  deleteCustomer(customer: Customer) {
    return this.httpClient.delete(`${this.config.apiUrl}/customers/${customer.id}`);
  }
}
