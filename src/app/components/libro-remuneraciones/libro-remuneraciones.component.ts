import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AssetsDiscountService} from "../../services/assets-discount.service";

@Component({
  selector: 'app-libro-remuneraciones',
  templateUrl: './libro-remuneraciones.component.html',
  styleUrls: ['./libro-remuneraciones.component.css']
})
export class LibroRemuneracionesComponent implements OnInit {
  assetsDiscoutBookForm: FormGroup;
  constructor(private fb: FormBuilder, private api: AssetsDiscountService ) {
    this.assetsDiscoutBookForm = this.fb.group({
      date: ['', Validators.required]
    });
  }
  ngOnInit(): void {

  }

  newAssetsDiscountBook(){
    this.api.getAssetsDiscountBook(this.assetsDiscoutBookForm.value.date).subscribe(data => {
      console.log(data);
    });
  }

}
