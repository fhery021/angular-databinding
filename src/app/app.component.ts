import { Component } from '@angular/core';
import { Server } from './model/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    new Server('server', 'test', 'web'),
    new Server('blueprint', 'qa', 'web')
  ];

  onServerAdded(server: Server) {
    this.serverElements.push(server);
  }

  onBluePrintAdded(blueprint: Server) {
    this.serverElements.push(blueprint);
  }
}
