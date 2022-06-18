import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  @Input() invoiceList: any;
  @Output() close = new EventEmitter<string>();
  getDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }



}
