import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../model/server';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() server: Server;

  constructor() {}

  ngOnInit() {}
}
