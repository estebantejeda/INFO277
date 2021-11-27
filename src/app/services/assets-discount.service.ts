import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import AssetsDiscount from "../models/AssetsDiscount";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AssetsDiscountService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  postAssetsDiscount(form: AssetsDiscount): Observable<any>{
    let address = `${this.url}/assetsDiscount`;
    return this.http.post<any>(address, form);
  }

  getEmployee():Observable<AssetsDiscount[]> {
    let address = `${this.url}/assetsDiscount`;
    return this.http.get<AssetsDiscount[]>(address);
  }

}
