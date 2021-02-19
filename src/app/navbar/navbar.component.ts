import { Component, OnInit } from '@angular/core';
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

  constructor(private logIn: LogInService) { }

  ngOnInit(): void {    
    console.log(this.currentUser)

  }

}
