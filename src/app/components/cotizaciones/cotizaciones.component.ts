import { Component, OnInit } from '@angular/core';
import AssetsDiscountDetails from "../../models/Interfaces/AssetsDiscountDetails";
import {AssetsDiscountService} from "../../services/assets-discount.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {
  assetDiscountDetailList: AssetsDiscountDetails[];
  constructor(private api: AssetsDiscountService, private router: ActivatedRoute) {
    this.assetDiscountDetailList = [];
  }

  ngOnInit(): void {
    this.api.getDetails(this.router.snapshot.params.id).subscribe(data => {
      this.assetDiscountDetailList = data;
      console.log(data);
    })
  }

}
