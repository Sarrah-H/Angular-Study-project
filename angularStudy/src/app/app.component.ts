import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  serverElemnts = [{type: 'server' , name: 'Server test name', content : ' just a test serverrr!!'}];


  onserverAdded(      ) {
    this.serverElemnts.push({
      type: 'server' ,
      name : ServerData.serverName,
      content : ServerData.serverContent
    });
  }


  onBluePrintAdded(bluePrintData : {serverName: string , serverContent : string}) {
    this.serverElemnts.push({
      type: 'bluePrint' ,
      name : bluePrintData.serverName,
      content : bluePrintData.serverContent
    });

  }

}
