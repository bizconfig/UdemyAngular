import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Customer : Array<Object> = new Array<Object>();
  constructor(){
    this.Customer.push({"Name":"Rakesh","Age":30})
    this.Customer.push({"Name":"Lawrence","Age":31})
  }
}
