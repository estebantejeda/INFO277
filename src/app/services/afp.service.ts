import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Afp from "../models/Afp";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AfpService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  postAfp(form: Afp): Observable<any>{
    let address = `${this.url}/afp`;
    return this.http.post<any>(address, form);
  }

  getAfp(): Observable<Afp[]>{
    let address = `${this.url}/afp`;
    return this.http.get<Afp[]>(address);
  }
}
