import { Component, OnInit } from '@angular/core';
import AfpEmployee from "../../../models/Interfaces/AfpEmployee";
import {AfpService} from "../../../services/afp.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-afiliados-afp',
  templateUrl: './afiliados-afp.component.html',
  styleUrls: ['./afiliados-afp.component.css']
})
export class AfiliadosAfpComponent implements OnInit {
  afpEmployeeList: AfpEmployee[];
  constructor(private api: AfpService, private router: ActivatedRoute) {
    this.afpEmployeeList = [];
  }

  ngOnInit(): void {
    this.api.getAfpEmployee(this.router.snapshot.params.id).subscribe(data => {
      this.afpEmployeeList = data;
      console.log(typeof data);
    })
  }

}
