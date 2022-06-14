import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal7',
  templateUrl: './modal7.component.html',
  styleUrls: ['./modal7.component.scss']
})
export class Modal7Component implements OnInit {

  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  masterOutList: any[] =[];
  outList: any[] = [];
  staffList: any[] = [];
  equList: any[] = [];

  startDate = new Date();
  endDate = new Date();

  constructor( private api: DashboardService) { }

  ngOnInit(): void {
    this.loadOut();
    this.loadStaff();
    this.loadEqu();
  }

  loadOut():void{
    this.subs.sink = this.api.getOut().subscribe(res => {
      this.outList = res;
    })
  }

  loadStaff():void{
    this.subs.sink = this.api.getStaff().subscribe(res => {
      this.staffList = res;
    })
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

  getStaffName(id: number):string{
    return this.staffList.find(f => f.id === id).fname;
  }

  getEquName(id: number):string{
    return this.equList.find(f => f.id === id).equip_name;
  }

  coloseFunc():void{
    this.close.emit('');
  }

  sortDate():void{
    this.outList =  this.masterOutList.filter(f =>
      f.out_date >= new Date(this.startDate).toISOString()  &&  f.out_date <= new Date(this.endDate).toISOString()
   )
  }


}
