import {Component, OnInit, Input, EventEmitter, Output, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
import {MessageService} from "../../core/message.service";
import {Customer, CustomerType} from "../model";

@Component({
  selector: 'cus-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
  ]
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  customer: Customer;
  @Output()
  shift = new EventEmitter<string>();

  nameColor: string = "blue";
  isActive: boolean = true;
  showPhoto: boolean = false;
  counter: number = 0;
  counterHandle: number;

  CustomerType = CustomerType;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.customer.firstChange) {
      console.log(`change from ${changes.customer.previousValue.name} to ${changes.customer.currentValue.name}`);
    }
  }

  changeColor(){
    this.nameColor = this.nameColor === "blue" ? "red" : "blue";
    this.messageService.success("Udało się zmienić kolor")
  }

  left(){
    this.shift.emit("left");
  }

  right(){
    this.shift.emit("right");
  }

}
