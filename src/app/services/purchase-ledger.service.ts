import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import PurchaseLedger from "../models/PurchaseLedger";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PurchaseLedgerService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  postPurchase(form: PurchaseLedger): Observable<any>{
    let address = `${this.url}/purchase`;
    return this.http.post<PurchaseLedger[]>(address, form);
  }
}
