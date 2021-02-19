import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import { LogInService } from '../shared/services/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  logInForm!: FormGroup;
  errorMessage!:string|null
 
  constructor(private logIn: LogInService, private router: Router) { }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required ]),
      password: new FormControl('',[Validators.minLength(8), Validators.required,] ),
    })
  }
  onSubmit(){
    const userData = new User()
    userData.email = this.logInForm.controls.email.value;
    userData.password = this.logInForm.controls.password.value;

    this.logIn.logIn(userData)
    .subscribe(
      res => {
        this.logIn.loggedIn = true;
        this.logIn.loggedUserID = res.id;
        this.router.navigate(['/'])
      },
      err => {
        this.errorMessage = err
        setTimeout(()=>{this.errorMessage = null}, 6000)
      }
    )
  }

}
