import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContractService} from "../contract.service";
import {Contract} from "../model";

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styles: [
  ]
})
export class ContractDetailsComponent implements OnInit {

  contract: Contract;

  constructor(
      private activatedRoute: ActivatedRoute,
      private contractService: ContractService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.contract = data.contract;
    })
  }

}
