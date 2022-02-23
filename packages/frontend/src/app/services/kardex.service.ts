import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Kardex from "../models/Kardex";

@Injectable({
  providedIn: 'root'
})
export class KardexService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  getKardex(): Observable<Kardex[]>{
    let address = `${this.url}/kardex`;
    return this.http.get<Kardex[]>(address);
  }
}
