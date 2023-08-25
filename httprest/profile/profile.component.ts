import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user:User

  constructor(private us:UserService){
    this.user = new User(0, '','','','')
  }

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
          }
          else
          console.log('no user')
        })
      }

  }

}
