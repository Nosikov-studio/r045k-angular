import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  form1!: FormGroup;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.form1 = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    })
  }
    onSubmit(){
     if(this.form1.valid) {
        console.log(this.form1.value)
     } else {alert("Форма не валидна")}       
      
    //  const user={
    //   email: this.form1.value.email,
    //   password: this.form1.value.password
    //  }
      this.auth.login(this.form1.value).subscribe(
        () => console.log('Login success'),
        error => {console.warn(error)}
      )
    }
}
