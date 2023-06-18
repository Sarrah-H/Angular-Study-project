import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.scss']
})
export class CokpitComponent {
  NewServerName = ' ';
  NewServerContent = '';
  @Output() ServerCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() BlueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();


  onAddServer() {
    this.ServerCreated.emit({
      serverName: this.NewServerName,
      serverContent: this.NewServerContent
    })

  }


  onAddBlueprint() {
    this.BlueprintCreated.emit({
      serverName: this.NewServerName,
      serverContent: this.NewServerContent
    })
  }

}
