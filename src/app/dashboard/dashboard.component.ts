import { Component, OnInit } from '@angular/core';
import { CategService } from '../categ.service';
import { Category } from '../interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  categories$?: Observable<Category[]>
  constructor(private categService: CategService){}

  ngOnInit(){
   
    this.categories$ =this.categService.fetch()
  }

}
