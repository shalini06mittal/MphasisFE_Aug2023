import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
//localforage
export class UsersService {

  url:string = 'http://localhost:8080/'
  constructor(private http:HttpClient) { }

  validateUser(user:User){
    return this.http.post<any>(`${this.url}signin`, user,{
      headers:{'Content-Type':'application/json'}
    });
  }
  logoutUser(){
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
  }
  isLoggedIn()
  {
    if(sessionStorage.getItem('email'))
      return true;
    return false
    //!!sessionStorage.getItem('username') // how boolean works in javascript
  }
  getUsername(){
    return sessionStorage.getItem('email')
  }
}
