import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit{
  form3!: FormGroup
  isNew =true
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.form3 = new FormGroup({
      name: new FormControl(null, Validators.required)
    })

    this.route.params.subscribe((params: Params)=>{
if(params['id']){
  // Мы редактируем форму
  this.isNew = false
}
    } )
    
  }

  onSubmit(){
    
  }

}
