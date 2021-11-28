import { Component, OnInit } from '@angular/core';
import AssetsDiscountEmployee from "../../models/Interfaces/AssetsDiscountEmployee";
import {AssetsDiscountService} from "../../services/assets-discount.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-listar-cotizacion-personal',
  templateUrl: './listar-cotizacion-personal.component.html',
  styleUrls: ['./listar-cotizacion-personal.component.css']
})
export class ListarCotizacionPersonalComponent implements OnInit {
  assetDiscountEmployeeList: AssetsDiscountEmployee[];
  title: string;
  constructor(private api: AssetsDiscountService, private router: ActivatedRoute) {
    this.assetDiscountEmployeeList = [];
    this.title = 'Cotizaciones no encontradas';
  }

  ngOnInit(): void {
    this.api.getEmployee(this.router.snapshot.params.id).subscribe(data => {
      this.assetDiscountEmployeeList = data
      this.title = `Cotizaciones de ${data[0].employee.name}`;
    });

  }

}
