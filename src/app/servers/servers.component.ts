import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',//Element Selector
  //selector: '[app-servers]',//Attribute Selector
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 allowNewServer=false;
 serverCreateStatus:string='Server Not Created';
 serverName=''
 serverNameTowWayBinding='Test Server Two way data binding'
 serverCreated=false;
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer()
  {
    this.serverCreateStatus = 'Server Created';
    this.serverCreated=true;
  }
  onServerUpdate(event:Event)
  {
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
