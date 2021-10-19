import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Provider from "../../models/Provider";
import {ProviderService} from "../../services/provider.service";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  productForm: FormGroup;
  successAlert: boolean;
  constructor(private fb: FormBuilder, private api: ProviderService) {
    this.successAlert = false;
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      rut: ['', Validators.required],
      companyName: ['', Validators.required],
      lineBusiness: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      email: [''],
    });
  }

  ngOnInit(): void {
  }

  newProvider(){
    const provider = new Provider(
      this.productForm.value.name,
      this.productForm.value.rut,
      this.productForm.value.companyName,
      this.productForm.value.lineBusiness,
      this.productForm.value.address,
      this.productForm.value.city,
      this.productForm.value.email
    )
    this.api.postProvider(provider).subscribe(data => {
      this.successAlert = true;
      setTimeout(() => this.successAlert = false, 2000);
    });
  }

}
