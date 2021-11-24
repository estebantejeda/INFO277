import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Isapre from "../models/Isapre";

@Injectable({
  providedIn: 'root'
})
export class IsapreService {
  url: string;
  constructor(private http:HttpClient) {
    this.url = 'http://localhost:3000';
  }

  postIsapre(form: Isapre): Observable<any>{
    let address = `${this.url}/isapre`;
    return this.http.post<any>(address, form);
  }

  getIsapre(): Observable<Isapre[]>{
    let address = `${this.url}/isapre`;
    return this.http.get<Isapre[]>(address);
  }
}
