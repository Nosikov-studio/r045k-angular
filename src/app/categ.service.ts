import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './interfaces';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategService {

  constructor(private http: HttpClient) {     
  }
private baseUrl = environment.apiUrl;
  fetch():Observable<Category[]>{
   return this.http.get<Category[]>(`${this.baseUrl}/api/category`)

  }
}
