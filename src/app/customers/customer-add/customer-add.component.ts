import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {MessageService} from "../../core/message.service";
import {Customer, CustomerType} from "../model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'cus-customer-add',
  templateUrl: './customer-add.component.html',
  styles: [
  ]
})
export class CustomerAddComponent implements OnInit {


  name: string;
  age: number;
  type: CustomerType;
  CustomerType = CustomerType;
  customer: Customer;
  customers: Customer[];

  constructor(private customerService: CustomerService,
              private messageService: MessageService) { }



  ngOnInit(): void {
  }

  add(form: NgForm){
    this.customerService.createCustomer({
      name: this.name,
      age: this.age,
      type: this.type,
      photoUrl: '',
      categories: [],
      description: '',
      address: {
        city: '',
        houseNumber: 0,
        street: ''
      }
    }).subscribe(
        () => {this.messageService.success("Dodano klienta");
        form.resetForm();

        }
        )

  }
}
