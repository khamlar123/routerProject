import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bill5',
  templateUrl: './bill5.component.html',
  styleUrls: ['./bill5.component.scss']
})
export class Bill5Component implements OnInit {
  @Input() invoiceList: any;
  @Output() close = new EventEmitter<string>();
  getDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
