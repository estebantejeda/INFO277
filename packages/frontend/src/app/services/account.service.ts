import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Account from '../models/Account';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  postAccount(form: Account): Observable<any>{
    let address = `${this.url}/account`;
    return this.http.post<any>(address, form);
  }

  getAccount(): Observable<Account[]>{
    let address = `${this.url}/account`;
    return this.http.get<Account[]>(address);
  }

}
