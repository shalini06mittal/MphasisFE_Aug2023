import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogComponent } from './blog/blog.component';
import { BlogformComponent } from './blogform/blogform.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    BloglistComponent,
    BlogComponent,
    BlogformComponent,
    BlogdetailsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    PagenotfoundComponent,
    ProfileComponent,
    UserdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
