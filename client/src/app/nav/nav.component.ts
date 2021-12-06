import { User } from './../_models/user';
import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }



  login() {
    this.accountService.login(this.model)
      .subscribe(
        response => {
          console.log(response);
        }, error => {
          console.error(error);
        }
      );
  }

  logout() {
    this.accountService.logout();
  }
}
