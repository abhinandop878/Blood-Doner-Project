import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppiService {

  constructor(private http:HttpClient) { }
  viewAll=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
