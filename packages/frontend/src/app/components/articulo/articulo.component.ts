import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Product from "../../models/Product";
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  productForm: FormGroup;
  successAlert: boolean;
  constructor(private fb: FormBuilder, private api: ProductService) {
    this.successAlert = false;
    this.productForm = this.fb.group({
      id: '',
      description: ['', Validators.required],
      cost: ['', Validators.required],
      date: ['', Validators.required],
      stock: ['', Validators.required],
      price: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  newProduct(){
    const product = new Product(
      this.productForm.value.description,
      this.productForm.value.cost,
      this.productForm.value.date,
      this.productForm.value.stock,
      this.productForm.value.price,
    )
    this.api.postProduct(product).subscribe(data => {
      this.successAlert = true;
      this.productForm.reset();
      setTimeout(() => this.successAlert = false, 2000);
    });
  }



}
