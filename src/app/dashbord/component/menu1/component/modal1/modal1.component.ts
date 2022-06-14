import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss']
})
export class Modal1Component implements OnInit,OnDestroy {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  pos_id = 0;

  equList: any[] = [];
  allCate : any[] = [];
  allUnit : any[] = [];
  allPos : any[] =[];


  addModal = {
    id: 0,
    cate_id: 0,
    unit_id: 0,
    equip_name:'',
    equip_stock: 0,
    equip_import: 0,
    pos_name: ''
  }

  constructor(
    private api: DashboardService
  ) { }
  ngOnDestroy(): void {
    this.subs.unsubscribe();

  }

  ngOnInit(): void {
    this.loadEqu();
    this.getAllCate();
    this.getAllUnit();

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

  deleteEqu(id: number):void{
    if(confirm("Are you sure to delete  Equ"+id)) {
      this.subs.sink = this.api.deleteEqu(id).subscribe(res => {
        if(res > 0){
          this.equList = this.equList.filter(f => f.id !== id);
        }
    });
    }
  }

  addEqu():void{

    if(this.addModal.id > 0){
      const model = {
        id:  this.addModal.id,
        cate_id:  this.addModal.cate_id,
        unit_id:this.addModal.unit_id,
        equip_name:this.addModal.equip_name,
        equip_stock: this.addModal.equip_stock,
        equip_import: this.addModal.equip_import,
        pos_name: this.addModal.pos_name,
        pos_id: this.pos_id,
      }

      this.subs.sink = this.api.updateEqu(model).subscribe(res => {
        if(res == 'update equipments done !'){
          this.loadEqu();
          const reset = {
            id: 0,
            cate_id: 0,
            unit_id: 0,
            equip_name:'',
            equip_stock: 0,
            equip_import: 0,
            pos_name: '',
          }
          this.addModal = reset;
        }
      })
    }else{
      this.subs.sink = this.api.addEqu(this.addModal).subscribe(res => {
        if(res == 'create equipments done !'){

          this.loadEqu();
          const reset = {
            id: 0,
            cate_id: 0,
            unit_id: 0,
            equip_name:'',
            equip_stock: 0,
            equip_import: 0,
            pos_name: '',
          }
          this.addModal = reset;
        }
      })
    }
  }

  getAllCate():void{
    this.subs.sink = this.api.getAllCate().subscribe(res => {
        this.allCate = res;
    })
  }

  getAllUnit():void{
    this.subs.sink = this.api.getAllUnit().subscribe(res => {
      this.allUnit = res;
  })
  }

  editEqu(id: number):void{
    const findItem = this.equList.find(f => f.id == id);
    this.addModal.id  =findItem.id;
    this.addModal.cate_id = findItem.cate_id;
    this.addModal.unit_id = findItem.unit_id;
    this.addModal.equip_name = findItem.equip_name;
    this.addModal.equip_stock = findItem.equip_stock;
    this.addModal.equip_import = findItem.equip_import;
    this.pos_id = findItem.pos_id;
  }

  coloseFunc():void{
    this.close.emit('');
  }


}
