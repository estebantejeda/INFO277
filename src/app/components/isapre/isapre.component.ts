import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IsapreService} from "../../services/isapre.service";
import Isapre from "../../models/Isapre";

@Component({
  selector: 'app-isapre',
  templateUrl: './isapre.component.html',
  styleUrls: ['./isapre.component.css']
})
export class IsapreComponent implements OnInit {
  isapreForm: FormGroup;
  constructor(private fb: FormBuilder, private api: IsapreService) {
    this.isapreForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  newIsapre(){
    const isapre = new Isapre(this.isapreForm.value.name);
    this.api.postIsapre(isapre).subscribe(data =>{
      console.log(data);
      this.isapreForm.reset();
    });
  }

}
