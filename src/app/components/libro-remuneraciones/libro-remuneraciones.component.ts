import { Component, OnInit } from '@angular/core';
import AssetsDiscountDate from "../../models/Interfaces/AssetsDiscountDate";
import {AssetsDiscountService} from "../../services/assets-discount.service";

@Component({
  selector: 'app-libro-remuneraciones',
  templateUrl: './libro-remuneraciones.component.html',
  styleUrls: ['./libro-remuneraciones.component.css']
})
export class LibroRemuneracionesComponent implements OnInit {
  assetsDiscountDateList: AssetsDiscountDate[];
  constructor(private api: AssetsDiscountService ) {
    this.assetsDiscountDateList = [];
  }

  ngOnInit(): void {
    this.api.getDate().subscribe(data => this.assetsDiscountDateList = data);
  }

  transformDate(date: Date): string{
    const newDate = date.toString();
    const newDateSplit = newDate.split('-');
    const year = newDateSplit[0];
    const month = newDateSplit[1];
    return `${year}-${month}`;
  }

}
