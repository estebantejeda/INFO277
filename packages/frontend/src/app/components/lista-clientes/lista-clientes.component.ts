import { Component, OnInit } from '@angular/core';
import Customer from "../../models/Customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  customerList: Customer[];
  constructor(private api: CustomerService) {
    this.customerList = [];
  }

  ngOnInit(): void {
    this.api.getCustomer().subscribe(data => this.customerList = data);
  }

}
