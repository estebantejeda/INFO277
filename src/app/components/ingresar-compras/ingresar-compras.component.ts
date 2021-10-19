import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ingresar-compras',
  templateUrl: './ingresar-compras.component.html',
  styleUrls: ['./ingresar-compras.component.css']
})
export class IngresarComprasComponent implements OnInit {
  successAlert: boolean;
  namePlaceHolder: string;
  descriptionPlaceHolder: string;
  purchaseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.successAlert = false;
    this.namePlaceHolder = "";
    this.descriptionPlaceHolder = "";
    this.purchaseForm = this.fb.group({
      docNum: ['', Validators.required],
      date: ['', Validators.required],
      rut: ['', Validators.required],
      id: ['', Validators.required],
      stock: ['', Validators.required],
      price: ['', Validators.required],
      total: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  newPurchase(){
    console.log(this.purchaseForm.value);
  }

}
