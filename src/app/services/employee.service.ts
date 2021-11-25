import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Employee from "../models/Employee";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  postEmployee(form: Employee): Observable<any>{
    let address = `${this.url}/employee`;
    return this.http.post<any>(address, form);
  }

  getEmployee():Observable<Employee[]> {
    let address = `${this.url}/employee`;
    return this.http.get<Employee[]>(address);
  }
}
