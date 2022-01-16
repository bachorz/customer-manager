import {Inject, Injectable} from '@angular/core';
import {Contract} from "./model";
import {HttpClient} from "@angular/common/http";
import {Config, CONFIG} from "../model";

@Injectable()
export class ContractService {

  constructor(
      private httpClient: HttpClient,
      @Inject(CONFIG) private config: Config
  ) { }

  getContracts() {
    return this.httpClient.get<Contract[]>(`${this.config.apiUrl}/contracts`);
  }

  getContract(id: number) {
    return this.httpClient.get<Contract>(`${this.config.apiUrl}/contracts/${id}`);
  }

}
