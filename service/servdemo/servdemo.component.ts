import { Component } from '@angular/core';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-servdemo',
  templateUrl: './servdemo.component.html',
  styleUrls: ['./servdemo.component.css']
})
export class ServdemoComponent {
  // inject the dependency
  constructor(public ds:DemoService){
    console.log('service demo component contructor!!')
    console.log(ds)
  }
}
