import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Blog } from '../model/Blogs';
import { HttpblogService } from '../service/httpblog.service';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit{
  isSubmit:boolean = true;
  constructor(private bs:HttpblogService, 
    private router:Router, private us:UsersService){
  }

  ngOnInit(): void {
      // if(!this.us.isLoggedIn()){
      //   alert('Please login to access!!')
      //   this.router.navigate(['/login'])
      // }
  }
  saveBlog(blogform:any){
    console.log(blogform)
    if(blogform.status === 'INVALID')
    {
      alert('Please enter details')
      return;
    }
    //save blog
    this.bs.addBlogs(blogform.value)
    .subscribe(resp => this.router.navigate(['']))
  }
 
}
