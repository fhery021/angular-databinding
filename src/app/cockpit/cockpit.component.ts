import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Server } from '../model/server';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  server: Server;
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  @Output() serverCreated: EventEmitter<Server> = new EventEmitter();
  @Output() blueprintCreated: EventEmitter<Server> = new EventEmitter();

  onAddServer(nameInput: HTMLInputElement) {
    this.server = new Server('server', nameInput.value, this.serverContentInput.nativeElement.value);
    this.serverCreated.emit(this.server);
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.server = new Server('blueprint', nameInput.value, this.serverContentInput.nativeElement.value);
    this.blueprintCreated.emit(this.server);
  }

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
