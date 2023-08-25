import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * 1. Add HttpClientModule in app.module.ts file
 * 2. Inject Httpclient in the service
 * 3. Create the url and make HTTP method request
 */
export class User{
  constructor(public id:number,
    public name:string,
    public password:string,
    public email:string,
    public city:string,){}
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string ='http://localhost:3000/users'
  constructor(private http:HttpClient) { }

  public validateUser(username:string){
    return this.http.get<User[]>(`${this.url}?name=${username}`)
  }

  public getUsername()
  {
    return sessionStorage.getItem('username')
  }
  public logout(){
    sessionStorage.removeItem('username')
  }
  addUser(user:User)
  {
    return this.http.post<User>(`${this.url}`, user, {
      headers:{'Content-type':'application/json'}
    })
  }
  deleteUser(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  getUserById(id:number){
    return this.http.get<User>(`${this.url}/${id}`)
  }
  updateUser(user:User)
  {
    return this.http.put<User>(`${this.url}/${user.id}`, user, {
      headers:{'Content-type':'application/json'}
    })
  }
}
