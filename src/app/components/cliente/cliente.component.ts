import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import Customer from "../../models/Customer";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  productForm: FormGroup;
  successAlert: boolean;
  constructor(private fb: FormBuilder, private api: CustomerService) {
    this.successAlert = false;
    this.productForm = this.fb.group({
      rut: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      email: ['']
    });
  }

  ngOnInit(): void {
  }

  newCustomer(){
    const customer = new Customer(
      this.productForm.value.rut,
      this.productForm.value.name,
      this.productForm.value.address,
      this.productForm.value.city,
      this.productForm.value.email,
    )
    this.api.postCustomer(customer).subscribe(data => {
      this.successAlert = true;
      this.productForm.reset();
      setTimeout(() => this.successAlert = false, 2000);
    })
  }

}
