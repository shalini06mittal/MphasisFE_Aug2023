import { Component, OnDestroy, OnInit } from '@angular/core';
import { User, UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy{

  user:User
  // constructor => used to initialize the values, called only once
  // donot write any long running or complex or  code for network calls
  constructor(private us:UserService, private router:Router){
    this.user = new User(0, '','','','')
  }
// ng on init => gets called only once the lifecylce of the component and
// this is the place to write any complex code
  ngOnInit(): void {
      let username = this.us.getUsername()
      if(username){
        this.user.name= username 
        this.us.validateUser(username)
        .subscribe(resp=>{
          if(resp.length > 0){
            let obj = resp[0]
            this.user.email = obj.email
            this.user.city = obj.city
            this.user.id= obj.id
          }
          else
          console.log('no user')
        })
      }
      else{
        alert('Please login')
        this.router.navigate(['/login'])
      }
  }
  edit()
  {

  }
  delete(){
    this.us.deleteUser(this.user.id)
    .subscribe(resp=>{
      this.us.logout()
      this.router.navigate(['/home'])
    })
  }
// this is the place to unsubscribe or release the resouces
  ngOnDestroy(): void {
      console.log('destroy profile')
  }

}
