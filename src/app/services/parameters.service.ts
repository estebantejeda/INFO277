import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Parameters from "../models/Parameters";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParametersService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  postParameter(form: Parameters): Observable<any>{
    let address = `${this.url}/parameters`;
    return this.http.post<any>(address, form);
  }

  getParameters(): Observable<Parameters[]>{
    let address = `${this.url}/parameters`;
    return this.http.get<Parameters[]>(address);
  }

}
