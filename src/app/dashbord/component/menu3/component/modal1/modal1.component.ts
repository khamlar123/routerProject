import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss']
})
export class Modal1Component implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  addModal = {
    id: 0,
    staff_id: 0,
    out_qty: 0,
    out_date: new Date(),
    equip_id: 0,
  }

  outList: any[] = [];
  staffList: any[] = [];
  equList: any[] = [];

  constructor(  private api: DashboardService) { }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

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

  addOut():void{
    if(this.addModal.id > 0){
      this.subs.sink = this.api.updateOut(this.addModal).subscribe(res => {
        if(res === 'update out equipment done !'){
          this.loadOut();
          const reset = {
            id: 0,
            staff_id: 0,
            out_qty: 0,
            out_date: new Date(),
            equip_id: 0,
          }
          this.addModal = reset;
        }
      })
    }else{
      this.subs.sink = this.api.addOut(this.addModal).subscribe(res => {
        if(res === 'create out equipment done !'){

          this.loadOut();
          const reset = {
            id: 0,
            staff_id: 0,
            out_qty: 0,
            out_date: new Date(),
            equip_id: 0,
          }
          this.addModal = reset;
        }
      })
    }
  }

  deleteOut(id: number):void{
    if(confirm("Are you sure to delete  out equipment"+id)) {
      this.subs.sink = this.api.deleteOut(id).subscribe(res => {
        if(res > 0){
          this.outList = this.outList.filter(f => f.id !== id);
        }
    });
    }
  }

  detail(id: number):void{
    const findItem = this.outList.find(f => f.id == id);

    this.addModal.id = findItem.id;
    this.addModal.staff_id= findItem.staff_id;
    this.addModal.out_qty= findItem.out_qty;
    this.addModal.out_date= findItem.out_date;
    this.addModal.equip_id= findItem.equip_id;

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

}
