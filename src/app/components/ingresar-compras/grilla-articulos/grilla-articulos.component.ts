import { Component, OnInit, Input } from '@angular/core';
import {PurchaseService} from "../../../services/purchase.service";

@Component({
  selector: 'app-grilla-articulos',
  templateUrl: './grilla-articulos.component.html',
  styleUrls: ['./grilla-articulos.component.css']
})
export class GrillaArticulosComponent implements OnInit {
  @Input() purchaseList: any;
  successAlert: boolean;
  constructor(private api: PurchaseService) {
    this.successAlert = false;
  }

  ngOnInit(): void {
  }

  sendPurchase(){
    this.api.postPurchase(this.purchaseList).subscribe(data => {
      this.purchaseList = [];
    })
  }


}

