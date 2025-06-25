import { Injectable } from '@angular/core';
import {User} from './interfaces'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
//import { environment } from '../environments/environment.prod'; // подсказал ИИ

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
 // private baseUrl = environment.apiUrl; // подсказал ИИ

  register() {}

  login(user: User):Observable<{token: string}> {
    
    //return this.http.post<{token: string}>(`${this.baseUrl}/api/auth/login`, user)
    return this.http.post<{token: string}>(`/api/auth/login`, user)
  }

  
}
