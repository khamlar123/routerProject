import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bill6',
  templateUrl: './bill6.component.html',
  styleUrls: ['./bill6.component.scss']
})
export class Bill6Component implements OnInit {
  @Input() invoiceList: any;
  @Output() close = new EventEmitter<string>();
  getDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
