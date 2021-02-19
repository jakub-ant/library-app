import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  loggedIn = false;
  loggedUser!:User;
  users:User[] = [{email: 'abc@gmail.com', password:'janusz123'},{email:'emilia@interia.eu', password:'emilia2000'},{email:'kozak@wp.pl', password:'Ewelina098'}]


  logIn(user: User) {
    if(this.users.some(e=>e.email===user.email)&&this.users.some(e=>e.password===user.password)){
      return new Observable<User>((subscriber) => {
          subscriber.next(user);
        }) 
    } else {
      return throwError("Such a user doesn't exist")
    }

  }
  constructor() { }
}
