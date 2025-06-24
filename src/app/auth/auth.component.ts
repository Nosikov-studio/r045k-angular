import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  form1!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form1 = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }
    onSubmit(){
     if(this.form1.valid) {
        console.log(this.form1.value)
     } else {alert("Форма не валидна")}       
      
    }
}
