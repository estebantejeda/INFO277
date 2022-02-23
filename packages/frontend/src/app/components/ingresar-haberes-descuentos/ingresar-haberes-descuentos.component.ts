import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AssetsDiscountService} from "../../services/assets-discount.service";
import AssetsDiscount from "../../models/AssetsDiscount";

@Component({
  selector: 'app-ingresar-haberes-descuentos',
  templateUrl: './ingresar-haberes-descuentos.component.html',
  styleUrls: ['./ingresar-haberes-descuentos.component.css']
})
export class IngresarHaberesDescuentosComponent implements OnInit {
  assetsDiscountForm: FormGroup;
  constructor(private fb: FormBuilder, private api: AssetsDiscountService) {
    this.assetsDiscountForm = this.fb.group({
      workedDays: ['', Validators.required],
      gratification: ['', Validators.required],
      familyWelfare: ['', Validators.required],
      otherDiscount: ['', Validators.required],
      rut: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  newAssetsDiscount(){
    const assetsDiscount = new AssetsDiscount(
      this.assetsDiscountForm.value.workedDays,
      this.assetsDiscountForm.value.gratification,
      this.assetsDiscountForm.value.familyWelfare,
      this.assetsDiscountForm.value.otherDiscount,
      this.assetsDiscountForm.value.rut,
      this.assetsDiscountForm.value.date
    );
    this.api.postAssetsDiscount(assetsDiscount).subscribe(data => {
      console.log(data);
      this.assetsDiscountForm.reset();
    });
  }

}
