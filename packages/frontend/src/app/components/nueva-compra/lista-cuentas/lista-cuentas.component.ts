import { Component, OnInit } from '@angular/core';
import Account from "../../../models/Account";
import {AccountService} from "../../../services/account.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-lista-cuentas',
  templateUrl: './lista-cuentas.component.html',
  styleUrls: ['./lista-cuentas.component.css']
})
export class ListaCuentasComponent implements OnInit {
  accountList: Account[];
  accountForm: FormGroup;
  constructor(private fb: FormBuilder, private api: AccountService) {
    this.accountList = [];
    this.accountForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.api.getAccount().subscribe(data => this.accountList = data);
  }

  newAccount(){
    const account = new Account(this.accountForm.value.name);
    this.api.postAccount(account).subscribe(data => {
      this.accountForm.reset();
      this.accountList.push(data);
    });
  }

}
