import { Component, OnInit } from '@angular/core';
import {SaleService} from "../../services/sale.service";
import Sale from "../../models/Sale";

@Component({
  selector: 'app-libro-ventas',
  templateUrl: './libro-ventas.component.html',
  styleUrls: ['./libro-ventas.component.css']
})
export class LibroVentasComponent implements OnInit {
  saleList: Sale[];
  constructor(private api: SaleService) {
    this.saleList = [];
  }

  ngOnInit(): void {
    this.api.getSale().subscribe(data => this.saleList = data)
  }

}
