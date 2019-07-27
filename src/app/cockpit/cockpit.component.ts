import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Server } from '../model/server';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  server: Server;
  newServerName = '';
  newServerContent = '';

  @Output() serverCreated: EventEmitter<Server> = new EventEmitter();
  @Output() blueprintCreated: EventEmitter<Server> = new EventEmitter();

  onAddServer() {
    this.server = new Server('server', this.newServerName, this.newServerContent);
    console.log(this.server);
    this.serverCreated.emit(this.server);
  }

  onAddBlueprint() {
    this.server = new Server('blueprint', this.newServerName, this.newServerContent);
    this.blueprintCreated.emit(this.server);
  }

  constructor() { }

  ngOnInit() {
  }

}
