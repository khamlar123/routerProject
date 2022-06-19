import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bill4',
  templateUrl: './bill4.component.html',
  styleUrls: ['./bill4.component.scss']
})
export class Bill4Component implements OnInit {
  @Input() invoiceList: any;
  @Output() close = new EventEmitter<string>();
  @Input() purList: any;
  @Input() userList: any;
  @Input()equList: any;
  getDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  getEquName(id: number):string{
    if(this.equList !== undefined){
      return this.equList.find((f: { id: number; }) => f.id === id).equip_name
    }else{
      return '';
    }

   }

   getUserName(id: number): string{
    if(this.userList !== undefined){
      return this.userList.find((f: { id: number; }) => f.id === id).user_name
    }else{
      return  '';
    }

   }

}
