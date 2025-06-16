import { Component } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  email: String;
  password: String;

  userRegisterClick() {
    console.log(this.email);
    return false;
  }

}
