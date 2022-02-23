import { Component, OnInit } from '@angular/core';
import SumPurchase from "../../../models/Interfaces/SumPurchase";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PurchaseLedgerService} from "../../../services/purchase-ledger.service";

@Component({
  selector: 'app-listar-cargos',
  templateUrl: './listar-cargos.component.html',
  styleUrls: ['./listar-cargos.component.css']
})
export class ListarCargosComponent implements OnInit {
  purchaseList: SumPurchase[];
  dateForm: FormGroup;
  constructor(private fb: FormBuilder, private api: PurchaseLedgerService) {
    this.purchaseList = [];
    this.dateForm = this.fb.group({
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.api.getSumPurchase().subscribe(data => this.purchaseList = data);
  }

  newDate(): void{

  }

}
