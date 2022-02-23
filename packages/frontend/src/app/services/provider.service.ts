import { Injectable } from '@angular/core';
import Provider from "../models/Provider";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  postProvider(form: Provider): Observable<any>{
    let address = `${this.url}/provider`;
    return this.http.post<any>(address, form);
  }

  getProvider(): Observable<Provider[]>{
    let address = `${this.url}/provider`;
    return this.http.get<Provider[]>(address);
  }

}
