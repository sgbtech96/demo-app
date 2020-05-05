import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://www.server.com/api/';

  constructor(private httpClient: HttpClient) {}
  public createCustomer(customer: Customer){
    return this.httpClient.post(`${this.apiURL}/customers/`,customer);
  }
  }