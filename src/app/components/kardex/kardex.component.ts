import { Component, OnInit } from '@angular/core';
import {KardexService} from "../../services/kardex.service";
import Kardex from "../../models/Kardex";

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.css']
})
export class KardexComponent implements OnInit {
  kardexList: Kardex[];
  constructor(private api: KardexService) {
    this.kardexList = [];
  }

  ngOnInit(): void {
    this.api.getKardex().subscribe(data => {
      this.kardexList = data;
    });
  }

}
