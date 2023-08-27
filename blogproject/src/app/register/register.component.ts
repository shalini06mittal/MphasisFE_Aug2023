import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isError:boolean = false;
  errmsg:string=''
  public onSubmit(user:any): void {
    console.log(user)
    
  }
}
