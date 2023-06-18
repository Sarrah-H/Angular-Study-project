import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {

@Input() element:{ type: string, name: string, content: string } | undefined;


constructor(){

  // console.log(this.element);
  
}

}
