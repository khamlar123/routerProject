import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bill2',
  templateUrl: './bill2.component.html',
  styleUrls: ['./bill2.component.scss']
})
export class Bill2Component implements OnInit {
  @Input() invoiceList: any;
  @Output() close = new EventEmitter<string>();
  getDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
