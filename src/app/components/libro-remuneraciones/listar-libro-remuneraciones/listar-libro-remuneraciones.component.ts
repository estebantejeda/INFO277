import { Component, OnInit } from '@angular/core';
import AssetsDiscountDetails from "../../../models/Interfaces/AssetsDiscountDetails";
import {AssetsDiscountService} from "../../../services/assets-discount.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-listar-libro-remuneraciones',
  templateUrl: './listar-libro-remuneraciones.component.html',
  styleUrls: ['./listar-libro-remuneraciones.component.css']
})
export class ListarLibroRemuneracionesComponent implements OnInit {
  salaryLedgerList: AssetsDiscountDetails[];
  dateRouter: string;
  constructor(private api: AssetsDiscountService, private router: ActivatedRoute) {
    this.salaryLedgerList = [];
    this.dateRouter = this.router.snapshot.params.date;
  }

  ngOnInit(): void {
    this.api.getSalaryLedger(this.dateRouter).subscribe(data => {
      console.log(data);
      this.salaryLedgerList = data;
    });
  }

}
