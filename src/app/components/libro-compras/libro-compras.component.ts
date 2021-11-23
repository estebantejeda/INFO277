import { Component, OnInit } from '@angular/core';
import PurchaseLedger from "../../models/PurchaseLedger";
import {PurchaseLedgerService} from "../../services/purchase-ledger.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-libro-compras',
  templateUrl: './libro-compras.component.html',
  styleUrls: ['./libro-compras.component.css']
})
export class LibroComprasComponent implements OnInit {
  purchaseList: PurchaseLedger[];
  dateForm: FormGroup;

  constructor(private fb: FormBuilder, private api: PurchaseLedgerService) {
    this.purchaseList = [];
    this.dateForm = this.fb.group({
      dateStart: ['', Validators.required],
      dateFinish: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.api.getPurchase().subscribe(data => this.purchaseList = data);
  }

  newDate(){

  }

  taxPurchase(){
    const netValue = this.purchaseList.reduce((x: number, y: any) => x+parseInt(y.net), 0);
    return netValue;
  }

}
