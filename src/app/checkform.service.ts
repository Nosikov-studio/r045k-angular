import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckformService {

  constructor() { }
  checkEmail(email:String) {
    if(email == undefined || email =="")
      return false;
    else
      return true;
  }
    checkPassword(password:String) {
    if(password == undefined|| password =="")
      return false;
    else
      return true;
  }
}
