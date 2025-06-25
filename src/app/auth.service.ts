import { Injectable } from '@angular/core';
import {User} from './interfaces'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod'; // подсказал ИИ
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token =''

  constructor(private http: HttpClient) { }
 private baseUrl = environment.apiUrl; // подсказал ИИ

  register() {}

  login(user: User):Observable<{token: string}> {
    
    return this.http.post<{token: string}>(`${this.baseUrl}/api/auth/login`, user)
    .pipe(
      tap(
        ({token}) => {
          localStorage.setItem('auth-token', token)
          this.setToken(token)
        }
      )
    )
    
  }
setToken(token: string){
  this.token = token
}

getToken(): string {
  return this.token
}

isA(): boolean {
  return !!this.token
}

logout(){
  this.setToken('')
  localStorage.clear()
}
  
}
