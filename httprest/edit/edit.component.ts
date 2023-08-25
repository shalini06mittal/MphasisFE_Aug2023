import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  user:User = new User(0,'','','','')
  constructor(private us:UserService, 
    private router:Router,
    private route :ActivatedRoute){}
  ngOnInit(): void {
      this.route.params.subscribe(param=>{
        let id = param['id']
        this.us.getUserById(id)
        .subscribe(resp=> this.user = resp)
      })
      
  }
  onSubmit(){
    this.us.updateUser(this.user)
    .subscribe(resp=> {
      alert('Updated successfully')
      this.router.navigate(['/profile'])

    })
  }
}
