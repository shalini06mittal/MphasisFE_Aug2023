import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// ds = new DemoService()
export class DemoService {

  /**
   * it is like global available to all the components
   * changes made by 1 component will reflect in all other components
   */
  message:string
  constructor() {
    console.log('demo service contructor!!')
    this.message='Message from service'
   }
}
