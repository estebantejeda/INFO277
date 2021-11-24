import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParametersService} from "../../services/parameters.service";
import Parameters from "../../models/Parameters";

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {
  parametersForm: FormGroup;
  constructor(private fb: FormBuilder, private api: ParametersService) {
    this.parametersForm = this.fb.group({
      uf: ['', Validators.required],
      utm: ['', Validators.required],
      refugeesAmount: ['', Validators.required],
      daysPerMonth: ['', Validators.required],
      incomeTax: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  newParameter(){
    const parameter = new Parameters(
      this.parametersForm.value.uf,
      this.parametersForm.value.utm,
      this.parametersForm.value.refugeesAmount,
      this.parametersForm.value.daysPerMonth,
      this.parametersForm.value.incomeTax,
    );
    this.api.postParameter(parameter).subscribe(data => this.parametersForm.reset());
  }

}
