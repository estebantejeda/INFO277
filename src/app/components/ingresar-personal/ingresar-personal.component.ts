import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import Employee from "../../models/Employee";

@Component({
  selector: 'app-ingresar-personal',
  templateUrl: './ingresar-personal.component.html',
  styleUrls: ['./ingresar-personal.component.css']
})
export class IngresarPersonalComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder, private api: EmployeeService) {
    this.employeeForm = this.fb.group({
      rut: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      refugees: ['', Validators.required],
      baseSalary: ['', Validators.required],
      salesCommission: ['', Validators.required],
      afpId: ['', Validators.required],
      isapreId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  newEmployee(){
    const employee = new Employee(
      this.employeeForm.value.rut,
      this.employeeForm.value.name,
      this.employeeForm.value.gender,
      this.employeeForm.value.birthDate,
      this.employeeForm.value.refugees,
      this.employeeForm.value.baseSalary,
      this.employeeForm.value.salesCommission,
      this.employeeForm.value.afpId,
      this.employeeForm.value.isapreId
    );
    this.api.postEmployee(employee).subscribe(data => {
      console.log(data);
      this.employeeForm.reset();
    })
  }
}
