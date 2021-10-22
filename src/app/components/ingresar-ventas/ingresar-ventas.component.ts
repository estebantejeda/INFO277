import {Component, OnInit} from '@angular/core';
import Sale from "../../models/Sale";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ingresar-ventas',
  templateUrl: './ingresar-ventas.component.html',
  styleUrls: ['./ingresar-ventas.component.css']
})
export class IngresarVentasComponent implements OnInit {
  successAlert: boolean;
  namePlaceHolder: string
  descriptionPlaceHolder: string
  saleForm: FormGroup;
  saleList: Sale[];
  constructor(private fb: FormBuilder) {
    this.successAlert = false;
    this.namePlaceHolder = '';
    this.descriptionPlaceHolder = '';
    this.saleList = [];
    this.saleForm = this.fb.group({
      docNumber: [''],
      docType: ['', Validators.required],
      payType: ['', Validators.required],
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

  newSale(){
    const sale = new Sale(
      this.saleForm.value.docNumber,
      this.saleForm.value.docType,
      this.saleForm.value.payType,
      this.saleForm.value.date,
      this.saleForm.value.rut,
      this.saleForm.value.id,
      this.saleForm.value.stock,
      this.saleForm.value.price,
      this.saleForm.value.total
    );
    this.addSale(sale);
  }

  addSale(data: Sale){
    this.saleList.push(data);
    console.log(this.saleList);
  }

}
