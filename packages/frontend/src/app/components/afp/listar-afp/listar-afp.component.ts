import { Component, OnInit } from '@angular/core';
import Afp from "../../../models/Afp";
import {AfpService} from "../../../services/afp.service";

@Component({
  selector: 'app-listar-afp',
  templateUrl: './listar-afp.component.html',
  styleUrls: ['./listar-afp.component.css']
})
export class ListarAfpComponent implements OnInit {
  afpList: Afp[];
  constructor(private api: AfpService) {
    this.afpList = [];
  }

  ngOnInit(): void {
    this.api.getAfp().subscribe(data => this.afpList = data);
  }

}
