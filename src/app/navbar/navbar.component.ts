import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import { LogInService } from '../shared/services/log-in.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   get currentUser() {
     return this.logIn.getUserByID
   }

  constructor(private logIn: LogInService, private router: Router) { }

  ngOnInit(): void {    

  }

  logOut(){
    this.logIn.logOut();
this.router.navigate(['/'])

  }

}
