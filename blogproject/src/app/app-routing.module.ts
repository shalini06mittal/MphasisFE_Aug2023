import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BlogformComponent } from './blogform/blogform.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { authGuard } from './service/auth.guard';
import { rerouteGuard } from './service/reroute.guard';

const routes: Routes = [
  //localhost:4200/
  // localhost:4200/blogs/1/comments
  {path:'', redirectTo:'blogs', pathMatch:'full'},
  {path:'blogs', component:BloglistComponent},
  {path:'blogs/:id', component:BlogdetailsComponent,
    children:[
      {path:':email',component:UserdetailsComponent}
      // {path:'',component:UserdetailsComponent}
    ]},
  {path:'Login', redirectTo:'login'},// localhost:4200/Login
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'create', component:BlogformComponent, canActivate:[authGuard], canDeactivate:[rerouteGuard]},
  {path:'profile', component:ProfileComponent, canActivate:[authGuard]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations:[
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
