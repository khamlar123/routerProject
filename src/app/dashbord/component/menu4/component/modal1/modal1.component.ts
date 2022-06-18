import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss']
})
export class Modal1Component implements OnInit {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  masterEqu:any[] =[];
  equList: any[] = [];
  kw = '';

  opwnModal = false;

  constructor( private api: DashboardService) { }

  ngOnInit(): void {
    this.loadEqu();
  }

  loadEqu():void{
    this.subs.sink = this.api.getEquipments().subscribe(res => {
      let arrayList: any[] =[];
      arrayList = res;
      arrayList.forEach(itx => {

        const checkItem = this.equList.find(f =>f.id == itx.id);
        if(!checkItem){
          this.equList.push(itx);
          this.masterEqu.push(itx);
        }
      });
    })
  }

  coloseFunc():void{
    this.close.emit('');
  }

  searchFunc():void{

      if(this.kw !== ''){
        this.equList =  this.masterEqu.filter(f => f.equip_name.toLowerCase().includes(this.kw.toLocaleLowerCase())
        || f.id.toString() === this.kw
        )
      }else{
        this.equList = this.masterEqu;
      }
  }

}
