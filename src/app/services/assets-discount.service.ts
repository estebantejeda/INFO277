import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import AssetsDiscount from "../models/AssetsDiscount";
import {Observable} from "rxjs";
import AssetsDiscountGenerator from "../models/Interfaces/AssetsDiscountGenerator";
import AssetsDiscountEmployee from "../models/Interfaces/AssetsDiscountEmployee";
import AssetsDiscountDetails from "../models/Interfaces/AssetsDiscountDetails";
import AssetsDiscountDate from "../models/Interfaces/AssetsDiscountDate";

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

  postGenerateAssetsDiscount(form: AssetsDiscountGenerator): Observable<any>{
    let address = `${this.url}/assetsDiscountGenerate`;
    console.log(address);
    return this.http.post<any>(address, form);
  }

  getEmployee(id: number):Observable<AssetsDiscountEmployee[]> {
    let address = `${this.url}/assetsDiscount/${id}`;
    return this.http.get<AssetsDiscountEmployee[]>(address);
  }

  getDetails(id: number): Observable<AssetsDiscountDetails>{
    let address = `${this.url}/assetsDiscountDetail/${id}`;
    return this.http.get<AssetsDiscountDetails>(address);
  }

  getDate(): Observable<AssetsDiscountDate[]>{
    let address = `${this.url}/assetsDiscountDate`;
    return this.http.get<AssetsDiscountDate[]>(address);
  }



}
