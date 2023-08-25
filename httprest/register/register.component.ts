import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private us:UserService, private router:Router){

  }
  onSubmit(user:any)
  {
    this.us.addUser(user)
    .subscribe(resp=>{
        console.log(resp)
        this.router.navigate(['/login'])
    })
  }
}
