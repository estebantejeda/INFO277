import { Component, OnInit } from '@angular/core';
import Parameters from "../../../models/Parameters";
import {ParametersService} from "../../../services/parameters.service";

@Component({
  selector: 'app-listar-parametros',
  templateUrl: './listar-parametros.component.html',
  styleUrls: ['./listar-parametros.component.css']
})
export class ListarParametrosComponent implements OnInit {
  parameterList: Parameters[];
  constructor(private api: ParametersService) {
    this.parameterList = [];
  }

  ngOnInit(): void {
    this.api.getParameters().subscribe(data => {
      console.log(data);
      this.parameterList = data
    });
  }

}
