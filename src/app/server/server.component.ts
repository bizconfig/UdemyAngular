import {Component} from '@angular/core'

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverName:string='App';
    serverId :number=10;
    serverStatus:string='Offline';
    constructor(){
        this.serverStatus=Math.random()>0.5?'online':'offline';
    }
    getServerName()
    {
      return this.serverName
    }
    getColor(){
        return this.serverStatus='online'?'green':'red'
    }
}