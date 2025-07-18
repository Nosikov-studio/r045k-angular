import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  form1!: FormGroup;
  aSub!: Subscription

  constructor(private auth: AuthService, 
              private router: Router,
              private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form1 = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    })
    this.route.queryParams.subscribe((params: Params)=>{
      if (params['registered']){
        // можете
      MaterialService.toast('Можете зайти в систему используя свои данные');  
      } else if (params['accessDenied']) {
        // авторизуйтесь
      MaterialService.toast('Авторизуйтесь!');    
      } else if (params['sessionFailed']) {
        MaterialService.toast('Войтите заново!'); 
      }
    })
  }

  ngOnDestroy(): void {
    if(this.aSub){ this.aSub.unsubscribe() }    
    
  }
    onSubmit(){
    //  if(this.form1.valid) {
    //     console.log(this.form1.value)
    //  } else {alert("Форма не валидна")}       
      
    //  const user={
    //   email: this.form1.value.email,
    //   password: this.form1.value.password
    //  }
    this.form1.disable()
      this.aSub = this.auth.login(this.form1.value).subscribe(
        () => this.router.navigate(['/dashboard']),
        error => {
const message = error.error?.message || error.message || 'Произошла ошибка при авторизации';
  MaterialService.toast(message);
  //alert(message); // Заменили MaterialService.toast на alert
  console.warn(error);
  this.form1.enable();
        }
      )
    }
}
