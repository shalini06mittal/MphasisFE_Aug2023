import { Component, OnInit } from '@angular/core';
import { getUsers, getusersWithDelay, getusersWithPromise } from './service/promises';
import { HttpblogService } from './service/httpblog.service';
/**
 * user.service
 * httpblog.service
 * login => html, .ts
 * header -> html, .ts
 * app-routing-module
 * blogfrom =>.ts
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showform = false

  constructor(private httpservice:HttpblogService){}
  ngOnInit(): void {
      // console.log(getUsers())
      // getusersWithDelay(function(users:any){
      //   console.log('users success')
      //   console.log(users)
      // })
      // getusersWithPromise()
      // .then(data => console.log('data',data),
      //      err => console.log('reject',err))
      // .catch(err=> {
      //       console.log('error')
      //       console.log(err)
      //      })

      // let obs = this.httpservice.getBlogs()
      // .subscribe(data => console.log(data))
      // //obs.unsubscribe()

      // this.httpservice.addBlogs({title:'new title', 
      //         content:'new content',
      //         category:'dummy',
      //         created: new Date(),
      //         imgurl:'data:image/jpeg;base64,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',
      //         userid:2})
      //         .subscribe(data=> console.log(data))

      // this.httpservice.deleteBlog(4).subscribe({
      //   next: data => console.log(data),
      //   error: err=>  console.log('error', err)})
  }

  displayForm()
  {
    this.showform = !this.showform;
  }
  
}
