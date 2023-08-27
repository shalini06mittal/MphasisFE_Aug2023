import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  email:string | undefined 
  constructor(private route:ActivatedRoute){
      this.route.params.subscribe(param=> {
        console.log(param)
        this.email = param['email']
      })
      //this.route.parent?.params.subscribe(param=> console.log(param))
      //this.route.queryParams.subscribe(param=>console.log(param))
  }
  // ngoninit => REST API call to get user details and display the info
}
