import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AfpService} from "../../services/afp.service";
import Afp from "../../models/Afp";

@Component({
  selector: 'app-afp',
  templateUrl: './afp.component.html',
  styleUrls: ['./afp.component.css']
})
export class AfpComponent implements OnInit {
  afpForm: FormGroup;
  constructor(private fb: FormBuilder, private api: AfpService) {
    this.afpForm = this.fb.group({
      name: ['', Validators.required],
      tax: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  newAfp(){
    const afp = new Afp(
      this.afpForm.value.name,
      this.afpForm.value.tax
    );
    this.api.postAfp(afp).subscribe(data => {
      this.afpForm.reset();
    });
  }

}
