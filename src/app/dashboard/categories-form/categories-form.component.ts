import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap, of } from 'rxjs';
import { CategService } from 'src/app/categ.service';
import { Category } from 'src/app/interfaces';
import { MaterialService } from 'src/app/material.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit{
  @ViewChild('input') inputRef!: ElementRef
  form3!: FormGroup
  image!: File
  imagePreview!: string | ArrayBuffer | null 
  isNew =true
  category!: Category
  constructor(private route: ActivatedRoute,
              private categService: CategService,
              private router: Router
  ){}





  ngOnInit(): void {

    // ручное обновление ( функции updateTextInputs нет в библиотеке)
MaterialService.updateTextInputs = () => {
  const elems = document.querySelectorAll('input[type=text], textarea');
  elems.forEach((el: any) => {
    if (el.value && el.classList.contains('validate')) {
      el.classList.add('active');
    }
  });
};



    this.form3 = new FormGroup({
      name: new FormControl(null, Validators.required)
    })
    this.form3.disable()

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
        (category: Category|null)=> {
          if (category){
            this.category = category
            this.form3.patchValue({
              name: category.name
            })
          if(category.imageSrc){
            this.imagePreview = "https://truruki.ru/"+category.imageSrc;
          }
            

            console.log(category.imageSrc)
            MaterialService.updateTextInputs()
          }
          this.form3.enable()
        },
        error => MaterialService.toast(error.error.message)
        
      )
    
  }

  triggerClick(){
    this.inputRef.nativeElement.click()

  }

  deleteCategory() {
    
    if (!this.category._id) {
    MaterialService.toast('ID категории отсутствует!');
    return;
  }
    const decision =window.confirm(`Вы уверены, что хотите удалить категорию ${this.category.name}?`)
    if (decision) {
      this.categService.delete(this.category._id).subscribe(
        response => MaterialService.toast(response.message),
        error => MaterialService.toast(error.error.message),
        ()=> this.router.navigate(['/dashboard'])
      )

    }
  }
  onFileUpload(event: any){
    const file = event.target.files[0]
    this.image = file

    const reader = new FileReader()

    reader.onload = () => {
      this.imagePreview = reader.result
    }

    reader.readAsDataURL(file)

  }  


  onSubmit(){
    let obs$
    this.form3.disable()

    if (this.isNew){
      //create
      obs$=this.categService.create(this.form3.value.name, this.image)
    } else{
      //update
      //this.categService.update(this.category._id, this.form3.value.name, this.image)
            const id = this.category._id;
            if (id) {
             obs$= this.categService.update(id, this.form3.value.name, this.image);
            } else {
              MaterialService.toast('ID категории отсутствует!');
            }
    }
    obs$?.subscribe(
      category => {
        this.category = category
        MaterialService.toast('Изменения сохранены')
        this.form3.enable()  
      },
      error => {
        
        MaterialService.toast(error.error.message)
        this.form3.enable()
      }
    )

  }

}
