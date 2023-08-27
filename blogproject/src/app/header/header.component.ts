import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public us:UsersService, private router:Router){}

  getBlogsWithEmail()
  {
    this.router.navigate(['/blogs'],{queryParams:{email:this.us.getUsername()}})
  }
}
