import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, of } from 'rxjs';
import { CategService } from 'src/app/categ.service';
import { MaterialService } from 'src/app/material.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit{
  @ViewChild('input') inputRef!: ElementRef
  form3!: FormGroup
  isNew =true
  constructor(private route: ActivatedRoute,
              private categService: CategService
  ){}

  ngOnInit(): void {
    this.form3 = new FormGroup({
      name: new FormControl(null, Validators.required)
    })
    //this.form3.disable()

//     this.route.params.subscribe((params: Params)=>{
// if(params['id']){
//   // Мы редактируем форму
//   this.isNew = false
// }
//     } )
    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew=false
              return this.categService.getById(params['id'])
            }

            return of(null)
          }
        )
      ).subscribe(
        category=> {
          if (category){
            this.form3.patchValue({
              name: category.name
            }
            )
            MaterialService.updateTextInputs()
          }
         // this.form3.enable()
        },
        error => MaterialService.toast(error.error.message)
        
      )
    
  }

  triggerClick(){
    this.inputRef.nativeElement.click()

  }



  onSubmit(){

  }

}
