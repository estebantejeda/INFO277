import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import PurchaseLedger from "../models/PurchaseLedger";
import SumPurchase from "../models/Interfaces/SumPurchase";
import {Observable, Subject} from "rxjs";

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

  getPurchase(): Observable<PurchaseLedger[]>{
    let address = `${this.url}/purchase`;
    return this.http.get<PurchaseLedger[]>(address);
  }

  getSumPurchase(): Observable<SumPurchase[]>{
    let address = `${this.url}/purchaseSum`;
    return this.http.get<SumPurchase[]>(address);
  }
}
