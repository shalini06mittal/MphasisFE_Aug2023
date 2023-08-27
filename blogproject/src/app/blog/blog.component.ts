import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../model/Blogs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent{
  @Input()
  blog:Blog | undefined
 
  constructor(private router:Router){
   
  }
  details(id:number | undefined){
    //alert(id)
    this.router.navigate(['/blogs', id])
  }

}
