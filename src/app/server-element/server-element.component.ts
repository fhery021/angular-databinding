import { Component, OnInit, Input, ViewEncapsulation, ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import { Server } from '../model/server';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input() server: Server;

  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('paragraph: ' + this.paragraph.nativeElement.textContent);
  }
}
