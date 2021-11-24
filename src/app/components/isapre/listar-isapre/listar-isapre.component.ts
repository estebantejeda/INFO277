import { Component, OnInit } from '@angular/core';
import Isapre from "../../../models/Isapre";
import {IsapreService} from "../../../services/isapre.service";

@Component({
  selector: 'app-listar-isapre',
  templateUrl: './listar-isapre.component.html',
  styleUrls: ['./listar-isapre.component.css']
})
export class ListarIsapreComponent implements OnInit {
  isapreList: Isapre[];
  constructor(private api: IsapreService) {
    this.isapreList = [];
  }

  ngOnInit(): void {
    this.api.getIsapre().subscribe(data => this.isapreList = data);
  }

}
