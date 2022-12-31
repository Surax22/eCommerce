import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get<any>("http://localhost:3000/products")  
    .pipe(map((res:any)=>{
      return res;
    })) 
  }
  getCategory(){
    return this.http.get<any>("http://localhost:3000/categories")  
    .pipe(map((res:any)=>{
      return res;
    })) 
  }
}
