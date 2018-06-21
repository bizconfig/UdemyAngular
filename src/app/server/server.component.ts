import {Component} from '@angular/core'

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverName:string='App';
    serverId :number=10;
    serverStatus:string='Offline';
    getServerName()
    {
        this.serverName
    }
}