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

  getBaseSalary(){
    const total = this.salaryLedgerList.reduce((x: number, y: any) => x + parseInt(y.baseSalary),0);
    return total
  }

  getGratification(){
    const total = this.salaryLedgerList.reduce((x: number, y: any) => x + parseInt(y.gratification),0);
    return total
  }

  getRefugeesAmount(){
    const total = this.salaryLedgerList.reduce((x: number, y: any) => x + parseInt(y.refugeesAmount),0);
    return total
  }

  getTotalAssets(){
    const total = this.salaryLedgerList.reduce((x: number, y: any) => x + parseInt(y.totalAssets),0);
    return total
  }

  getPension(){
    const total = this.salaryLedgerList.reduce((x: number, y: any) => x + parseInt(y.pension),0);
    return total
  }

  getHealth(){
    const total = this.salaryLedgerList.reduce((x: number, y: any) => x + parseInt(y.health),0);
    return total
  }

  getSocialSecurity(){
    const total = this.salaryLedgerList.reduce((x: number, y: any) => x + parseInt(y.socialSecurity),0);
    return total
  }

  getFamilyWelfare(){
    const total = this.salaryLedgerList.reduce((x: number, y: any) => x + parseInt(y.familyWelfare),0);
    return total
  }

  getOtherDiscount(){
    const total = this.salaryLedgerList.reduce((x: number, y: any) => x + parseInt(y.otherDiscount),0);
    return total
  }

  getTotalDiscount(){
    const total = this.salaryLedgerList.reduce((x: number, y: any) => x + parseInt(y.totalDiscount),0);
    return total
  }

  getNetSalary(){
    const total = this.salaryLedgerList.reduce((x: number, y: any) => x + parseInt(y.netSalary),0);
    return total
  }

}
