import { Component, OnInit } from '@angular/core';
import {ProviderService} from "../../services/provider.service";
import Provider from "../../models/Provider";

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css']
})
export class ListaProveedoresComponent implements OnInit {
  providerList: Provider[];

  constructor(private api: ProviderService) {
    this.providerList = [];
  }

  ngOnInit(): void {
    this.api.getProvider().subscribe(data => this.providerList = data);
  }

}
