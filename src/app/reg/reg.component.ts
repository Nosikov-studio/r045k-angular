import { Component, OnInit } from '@angular/core';
import {CheckformService} from '../checkform.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  
})
export class RegComponent implements OnInit {

email: string = '';
password: string = '';

  constructor(private checkForm: CheckformService) {}
  ngOnInit() {}
  userRegisterClick() {
    // console.log(this.email);
    // return false;
    const user = {
      email: this.email,
      password: this.password,
    };
    if(!this.checkForm.checkEmail(user.email)) {
      console.log("Имэйла не видно!");
      return false;
    } else if(!this.checkForm.checkEmail(user.password)) {
      console.log("Пароля не видно!");
      return false;
  };

}
