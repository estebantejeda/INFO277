import { Component, OnInit } from '@angular/core';
import Employee from "../../models/Employee";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-listar-personal',
  templateUrl: './listar-personal.component.html',
  styleUrls: ['./listar-personal.component.css']
})
export class ListarPersonalComponent implements OnInit {
  employeeList: Employee[];
  constructor(private api: EmployeeService) {
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.api.getEmployee().subscribe(data => this.employeeList = data);
  }

}
