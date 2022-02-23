import {Component, Input, OnInit} from '@angular/core';
import {SaleService} from "../../../services/sale.service";

@Component({
  selector: 'app-grilla-ventas',
  templateUrl: './grilla-ventas.component.html',
  styleUrls: ['./grilla-ventas.component.css']
})
export class GrillaVentasComponent implements OnInit {
  @Input() saleList: any;
  successAlert: boolean;
  constructor(private api: SaleService) {
    this.successAlert = false;
  }

  ngOnInit(): void {
  }

  sendSale(){
    this.api.postSale(this.saleList).subscribe(data => {
      this.saleList = [];
    });
  }

}
