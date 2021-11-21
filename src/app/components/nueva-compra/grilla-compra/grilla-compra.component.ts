import {Component, Input, OnInit} from '@angular/core';
import {PurchaseLedgerService} from "../../../services/purchase-ledger.service";

@Component({
  selector: 'app-grilla-compra',
  templateUrl: './grilla-compra.component.html',
  styleUrls: ['./grilla-compra.component.css']
})
export class GrillaCompraComponent implements OnInit {
  @Input() purchaseList: any;
  constructor(private api: PurchaseLedgerService) {

  }

  ngOnInit(): void {
  }

  sendPurchase(){
    this.api.postPurchase(this.purchaseList).subscribe(data => {
      this.purchaseList = [];
    });
  }

}
