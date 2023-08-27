import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpblogService } from '../service/httpblog.service';
import { Blog } from '../model/Blogs';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit{

  id:number = 0
  blog:Blog | undefined;
  constructor(private route:ActivatedRoute, private router : Router,
    private bs:HttpblogService,
    public us:UsersService){
    // console.log(route)
    this.route.params.subscribe(param=> {
      console.log(param)
      this.id = parseInt(param['id'])
    })

  }
  ngOnInit(): void {
   this.bs.getBlogById(this.id)
   .subscribe(blog=> this.blog = blog)
  }

  getUserDetails(email:any){
    //this.router.navigate([`/blogs/${this.id}`, userid])
    this.router.navigate([`./`, email],{relativeTo:this.route})
    //this.router.navigate([`./`],{relativeTo:this.route, queryParams:{userid}})
  }

}
