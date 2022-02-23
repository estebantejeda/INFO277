import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Purchase from "../../models/Purchase";

@Component({
  selector: 'app-ingresar-compras',
  templateUrl: './ingresar-compras.component.html',
  styleUrls: ['./ingresar-compras.component.css']
})
export class IngresarComprasComponent implements OnInit {
  successAlert: boolean;
  dangerAlert: boolean;
  namePlaceHolder: string;
  descriptionPlaceHolder: string;
  purchaseForm: FormGroup;
  purchaseList: Purchase[];
  constructor(private fb: FormBuilder) {
    this.successAlert = false;
    this.dangerAlert = false;
    this.namePlaceHolder = "";
    this.descriptionPlaceHolder = "";
    this.purchaseList = [];
    this.purchaseForm = this.fb.group({
      docNumber: ['', Validators.required],
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
    const duplicate = this.purchaseList.find(x => x.id === this.purchaseForm.value.id)
    if(duplicate){
      this.dangerAlert = true;
      setTimeout(() => this.dangerAlert = false, 2000);
      return;
    }
    const purchase = new Purchase(
      this.purchaseForm.value.docNumber,
      this.purchaseForm.value.date,
      this.purchaseForm.value.rut,
      this.purchaseForm.value.id,
      this.purchaseForm.value.stock,
      this.purchaseForm.value.price,
      this.purchaseForm.value.total
    );
    this.addPurchase(purchase);
  }

  addPurchase(data: Purchase) {
    this.purchaseList.push(data);
  }
}
