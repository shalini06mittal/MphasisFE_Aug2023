import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';
import { User } from '../model/Users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isError:boolean = false;
  errmsg:string=''

  constructor(private us:UsersService, private router:Router){}
  public onSubmit(user:any): void {
    console.log(user)
    this.us.validateUser(user)
    .subscribe({
      next: resp =>{
      console.log('---------')
      console.log(resp)
      sessionStorage.setItem('email', user.email)
      this.isError=false;
      this.router.navigate([''])
    },
    error:err=> {
      console.log(err.error)
      this.isError = true
      this.errmsg = err.error.description
    }
  })
  }
}
