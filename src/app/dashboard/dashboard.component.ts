import { Component, OnInit } from '@angular/core';
import { CategService } from '../categ.service';
import { Category } from '../interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading = false
  categories: Category[]=[]
  constructor(private categService: CategService){}

  ngOnInit(){
    this.loading =true
    this.categService.fetch().subscribe( categories=>{
      this.loading=false
      this.categories = categories
      console.log('Categories', categories)
    })
  }

}
