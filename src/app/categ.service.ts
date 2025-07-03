import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Message } from './interfaces';
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
  getById(id: string):Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/api/category/${id}`)
  }

  create(name: string, image?: File):Observable<Category> {
    const fd=new FormData()

    if(image){
      fd.append('image', image, image.name)
    }
    fd.append('name', name)
    return this.http.post<Category>(`${this.baseUrl}/api/category`, fd)

  }

  update(id:string, name: string, image?: File):Observable<Category> {
    const fd=new FormData()

    if(image){
      fd.append('image', image, image.name)
    }
    fd.append('name', name)
    return this.http.patch<Category>(`${this.baseUrl}/api/category/${id}`, fd)

  }

  delete(id: string): Observable<Message>{
    return this.http.delete<Message>(`${this.baseUrl}/api/category/${id}`)
  }


}
