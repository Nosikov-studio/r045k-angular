import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private auth: AuthService){}
  title = 'k-project';

  ngOnInit(): void {
    const pT =localStorage.getItem('auth-token')
    if (pT !==null) {
      this.auth.setToken(pT)
    }
  }
}
