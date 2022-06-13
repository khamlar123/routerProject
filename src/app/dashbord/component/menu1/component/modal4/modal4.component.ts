import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal4',
  templateUrl: './modal4.component.html',
  styleUrls: ['./modal4.component.scss']
})
export class Modal4Component implements OnInit,OnDestroy {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  positionList : any[] =[];
  cateList: any[] =[];
  equList: any[] = [];
  addModal: {id: number,equip_id: number,cate_id: number,pos_name: string} = {
    id: 0,
    equip_id: 0,
    cate_id: 0,
    pos_name: '',
  }


  constructor(
    private api: DashboardService
  ) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.loadPos();
    this.loadCateAll();
    this.loadEqu();
  }

  loadPos():void{
   this.subs.sink = this.api.getPos().subscribe(res => {
      this.positionList = res;
    })
  }

  getCatName(id: number):string{
    return this.cateList.find(f => f.id === id).cate_name;
  }

  getEquName(id: number): string{
    return this.equList.find(f => f.id === id).equip_name;
  }


  addPos():void{
    if(this.addModal.id > 0){
      this.subs.sink = this.api.updatePos(this.addModal).subscribe((res) => {
        if(res === 'update positions done !'){
            this.loadPos();
           const reset = {
              id: 0,
              equip_id: 0,
              cate_id: 0,
              pos_name: '',
            }
            this.addModal = reset;
        }
      });
    }else{
      this.subs.sink = this.api.addPos(this.addModal).subscribe((res) => {
        if(res === 'create positions done !'){
            this.loadPos();
           const reset = {
              id: 0,
              equip_id: 0,
              cate_id: 0,
              pos_name: '',
            }
            this.addModal = reset;
        }
      })
    }
  }

  deletePos(id: number):void{
    if(confirm("Are you sure to delete  Position "+id)) {
      this.subs.sink = this.api.deletePos(id).subscribe(res => {
        this.positionList = this.positionList.filter(f => f.id !== id);
      });
    }
  }

  editPos(id:number):void{
    const findItem = this.positionList.find(f => f.id == id);
    this.addModal.id = findItem.id;
    this.addModal.equip_id = findItem.equip_id;
    this.addModal.cate_id = findItem.cate_id;
    this.addModal.pos_name = findItem.pos_name;
  }

  loadCateAll():void{
    this.subs.sink = this.api.getAllCate().subscribe(res => {
      this.cateList = res;
    })
  }

  loadEqu():void{
    this.subs.sink = this.api.getEquipments().subscribe(res => {
      this.equList = res;
    })
  }



  coloseFunc():void{
    this.close.emit('');
  }

}
