import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal3',
  templateUrl: './modal3.component.html',
  styleUrls: ['./modal3.component.scss']
})
export class Modal3Component implements OnInit {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  masteUnitList: any[] = [];
  unitList: any[] = [];
  kw = '';
  opwnModal = false;
  equList: {
    cate_id: number;
    cate_name: string;
    equip_import: number;
    equip_name: string;
    equip_stock: number;
    id: number;
    pos_id: number;
    pos_name: string;
    unit_id: number;
    unit_name: string;
  }[]= [];
  startDate = new Date();
  endDate = new Date();
  constructor( private api: DashboardService) { }

  ngOnInit(): void {
    this.loadPur();
    this.loadEqu()
  }

  loadPur():void{
    this.subs.sink = this.api.getPur().subscribe(res => {
      this.unitList = res;
      this.masteUnitList = res;
    });
  }

  loadEqu():void{

    this.subs.sink = this.api.getEquipments().subscribe(res => {
      let arrayList: any[] =[];
      arrayList = res;
      arrayList.forEach(itx => {

        const checkItem = this.equList.find(f =>f.id == itx.id);
        if(!checkItem){
          this.equList.push(itx);
        }
      });
    })



  }

  getEquname(id: number): any{
    const res = this.equList.find(f => f.id === id)?.equip_name;
    return res;
  }

  coloseFunc():void{
    this.close.emit('');
  }

  searchFunc():void{

    if(this.kw !== ''){
      this.unitList =  this.masteUnitList.filter(f => f.unit_name.toLowerCase().includes(this.kw.toLocaleLowerCase())
      || f.id.toString() === this.kw
      )
    }else{
      this.unitList = this.masteUnitList;
    }
}

sortDate():void{
  this.unitList =  this.masteUnitList.filter(f =>
    f.pur_date >= new Date(this.startDate).toISOString()  &&  f.pur_date <= new Date(this.endDate).toISOString()
 )
}

}
