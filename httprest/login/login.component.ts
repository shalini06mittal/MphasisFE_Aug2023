import { CSP_NONCE, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private route: Router, private us:UserService ){}
  onSubmit(user:any){
    console.log(user)
    this.us.validateUser(user.name)
    .subscribe(resp=>{
      // resp is an array
      if(resp.length>0){
        let obj = resp[0]
        if(obj.password === user.password){
          // cookies
          sessionStorage.setItem('username', user.name)
          this.route.navigate(['/profile']);
        }
        else{
          alert('Invalid Credentials')
        }
      }
      else
        alert('Username does not exist')
    })
    
  }
}
