import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bill7',
  templateUrl: './bill7.component.html',
  styleUrls: ['./bill7.component.scss']
})
export class Bill7Component implements OnInit {
  @Input() invoiceList: any;
  @Output() close = new EventEmitter<string>();
  getDate = new Date();
  @Input() equList: any;
  @Input() staffList: any;

  constructor() { }

  ngOnInit(): void {
  }

  getStaffName(id: number):string{
    return this.staffList.find((f: { id: number; }) => f.id === id).fname;
  }

  getEquName(id: number):string{
    return this.equList.find((f: { id: number; }) => f.id === id).equip_name;
  }

}
