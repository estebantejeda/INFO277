import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AssetsDiscountService} from "../../../services/assets-discount.service";
import AssetsDiscountGenerator from "../../../models/Interfaces/AssetsDiscountGenerator";

@Component({
  selector: 'app-generar-haberes-descuentos',
  templateUrl: './generar-haberes-descuentos.component.html',
  styleUrls: ['./generar-haberes-descuentos.component.css']
})
export class GenerarHaberesDescuentosComponent implements OnInit {
  assetsDiscountGeneratorForm: FormGroup;
  constructor(private fb: FormBuilder, private api: AssetsDiscountService) {
    this.assetsDiscountGeneratorForm = this.fb.group({
      rut: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  newAssetsDiscountGenerator() {
    const assetsDiscountGenerator: AssetsDiscountGenerator = {
      rut: this.assetsDiscountGeneratorForm.value.rut,
      date: this.assetsDiscountGeneratorForm.value.date,
    }
    this.api.postGenerateAssetsDiscount(assetsDiscountGenerator).subscribe(data => {
      console.log(data);
      this.assetsDiscountGeneratorForm.reset();
    });
  }

}
