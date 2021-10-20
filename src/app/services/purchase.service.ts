import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Purchase from "../models/Purchase";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  postPurchase(form: Purchase): Observable<any>{
    let address = `${this.url}/purchaseLedger`;
    return this.http.post<any>(address, form);
  }
}
