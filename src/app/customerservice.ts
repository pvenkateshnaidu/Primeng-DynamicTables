import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategory } from './customer';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomersMedium() {
    return this.http
      .get<any>('assets/customers.json')
      .toPromise()
      .then((res) => <SubCategory[]>res.data)
      .then((data) => {
        return data;
      });
  }
  getCustomersall() {
    return this.http
      .get<any>('assets/customers-medium.json')
      .toPromise()
      .then((res) => <SubCategory[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
