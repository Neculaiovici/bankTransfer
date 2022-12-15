import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Account } from '../models/account.interface';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  public account:any = []

  constructor(private services: ServicesService) { }

  ngOnInit(): void {
    this.GetAllAccounts()
  }

  //refreshList
  refreshAccountList(){
    window.location.reload();
  }

  GetAllAccounts(){
    this.services.getAccount().subscribe((data:Account) => {
      this.account = data,
      localStorage.setItem('accounts', JSON.stringify(data))
    })
  }
}
