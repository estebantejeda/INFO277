import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Sale from "../models/Sale";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  postSale(form: Sale): Observable<any>{
    let address = `${this.url}/saleLedger`;
    return this.http.post<any>(address, form);
  }

  getSale(): Observable<Sale[]>{
    let address = `${this.url}/saleLedger`;
    return this.http.get<Sale[]>(address);
  }
}
