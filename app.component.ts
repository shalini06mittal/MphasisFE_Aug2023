import { Component } from '@angular/core';
import { DemoService } from './service/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemo';
  constructor(public ds:DemoService){
    console.log(ds)
  }
}
