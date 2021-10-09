import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service'
import {Product} from "../../../models/Product";

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
  productList: Product[];

  constructor(private api: ProductService) {
    this.productList = [];
  }

  ngOnInit(): void {
    this.api.getProduct().subscribe(data => this.productList = data);
  }

  update(){
    this.api.getProduct().subscribe(data => {
      console.log(data)
      this.productList = data;
    });
  }


}
