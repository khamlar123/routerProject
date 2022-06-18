import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bill3',
  templateUrl: './bill3.component.html',
  styleUrls: ['./bill3.component.scss']
})
export class Bill3Component implements OnInit {
  @Input() invoiceList: any;
  @Input() equList: any;
  @Output() close = new EventEmitter<string>();
  getDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  getEquname(id: number): any{
    const res = this.equList.find((f: { id: number; }) => f.id === id)?.equip_name;
    return res;
  }

}
