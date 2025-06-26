import { Component, OnDestroy, OnInit } from '@angular/core';
import {CheckformService} from '../checkform.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  
})
export class RegComponent implements OnInit, OnDestroy {
form2!: FormGroup
aSub!: Subscription


  constructor(private auth: AuthService,
              private router: Router
  ) {}
  ngOnInit() {
        this.form2 = new FormGroup({
          email: new FormControl(null, [Validators.required, Validators.email]),
          password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
        })
  }

  ngOnDestroy(): void {
    if(this.aSub){ this.aSub.unsubscribe() }    
    
  }

  onSubmit() {
    this.form2.disable()
    this.aSub=this.auth.register(this.form2.value).subscribe(
      () => {this.router.navigate(['/login'], {
        queryParams: {
          registred: true
        }
      })},
      error => {
        console.warn(error)
        this.form2.enable()
      }
    )
}
}