import { Component, OnInit } from '@angular/core';
import { CategService } from '../categ.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private categService: CategService){}

  ngOnInit(){
    this.categService.fetch().subscribe( categories=>{
      console.log('Categories', categories)
    })
  }

}
