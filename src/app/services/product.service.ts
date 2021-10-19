import { Injectable } from '@angular/core';
import Product from "../models/Product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  postProduct(form: Product): Observable<any>{
    let address = `${this.url}/product`;
    return this.http.post<any>(address, form);
  }

  getProduct(): Observable<Product[]>{
    let address = `${this.url}/product`;
    return this.http.get<Product[]>(address);
  }
}
