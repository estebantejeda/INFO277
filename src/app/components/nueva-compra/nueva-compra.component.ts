import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import PurchaseLedger from "../../models/PurchaseLedger";

@Component({
  selector: 'app-nueva-compra',
  templateUrl: './nueva-compra.component.html',
  styleUrls: ['./nueva-compra.component.css']
})
export class NuevaCompraComponent implements OnInit {
  purchaseForm: FormGroup;
  purchaseList: PurchaseLedger[];
  constructor(private fb: FormBuilder) {
    this.purchaseList = [];
    this.purchaseForm = this.fb.group({
      date: ['', Validators.required],
      docNumber: ['', Validators.required],
      docType: ['', Validators.required],
      correlative: ['', Validators.required],
      rut: ['', Validators.required],
      accountId: ['', Validators.required],
      net: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  newPurchase(){
    const purchaseLedger = new PurchaseLedger(
      this.purchaseForm.value.docNumber,
      this.purchaseForm.value.docType,
      this.purchaseForm.value.rut,
      this.purchaseForm.value.correlative,
      this.purchaseForm.value.net,
      false,
      this.purchaseForm.value.date,
      this.purchaseForm.value.accountId
    );
    this.addPurchase(purchaseLedger);
  }

  addPurchase(data: PurchaseLedger){
    this.purchaseList.push(data);
  }

}
