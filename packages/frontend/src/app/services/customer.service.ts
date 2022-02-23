import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Customer from "../models/Customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  postCustomer(form: Customer): Observable<any>{
    let address = `${this.url}/customer`;
    return this.http.post<any>(address, form);
  }

  getCustomer(): Observable<Customer[]>{
    let address = `${this.url}/customer`;
    return this.http.get<Customer[]>(address);
  }

}
