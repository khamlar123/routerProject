import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal7',
  templateUrl: './modal7.component.html',
  styleUrls: ['./modal7.component.scss']
})
export class Modal7Component implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  addModel  ={
    id : 0,
    equip_id: 0,
    pur_date: new Date(),
    equip_qty: 0,
  }

  purList: any[] = [];
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

  constructor(private api: DashboardService) { }

  ngOnDestroy(): void {
   this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.loadPur();
    this.loadEqu();
  }

  loadPur():void{
    this.subs.sink = this.api.getPur().subscribe(res => {
      this.purList = res;
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

  addPur():void{
      if(this.addModel.id > 0){
        this.subs.sink = this.api.updatePur(this.addModel).subscribe((res) => {
          if(res === 'update out Purchases done !'){
              this.loadPur();
             const reset = {
              id : 0,
              equip_id: 0,
              pur_date: new Date(),
              equip_qty: 0,
              }
              this.addModel = reset;
          }
        });
      }else{

        this.subs.sink = this.api.addPur(this.addModel).subscribe((res) => {
          if(res === 'create out Purchases done !'){
              this.loadPur();
             const reset = {
              id : 0,
              equip_id: 0,
              pur_date: new Date(),
              equip_qty: 0,
              }
              this.addModel = reset;
          }
        });
      }
  }

  deletePur(id: number):void{
    if(confirm("Are you sure to delete  Purchases "+id)) {
      this.subs.sink = this.api.deletePur(id).subscribe(res => {
        this.purList = this.purList.filter(f => f.id !== id);
      });
    }
  }

  purDetail(id: number):void{
    const findItem = this.purList.find(f => f.id === id);
    this.addModel.id = findItem.id;
    this.addModel.equip_id= findItem.equip_id;
    this.addModel.pur_date = new Date(findItem.pur_date);
    this.addModel.equip_qty = findItem.equip_qty;

  }

  getEquname(id: number): any{
    const res = this.equList.find(f => f.id === id)?.equip_name;
    return res;
  }

  coloseFunc():void{
    this.close.emit('');
  }

}
