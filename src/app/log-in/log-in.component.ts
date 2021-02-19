import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  logInForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required ]),
      password: new FormControl('',[Validators.minLength(8), Validators.required,] ),
    })
  }
  onSubmit(){
    const userData = new User()
    userData.email = this.logInForm.controls.email.value;
    userData.password = this.logInForm.controls.password.value
  }

}
