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
    pur_id: 0,
    user_id:0,
    import_date:new Date(),
    equip_stock:0, //
    equip_import:0, //
    equip_id:0,
    equip_qty: 0,
  }

  impList:any[] = [];
  purList: any[] = [];
  userList: any[] = [];
  equList: any[] = [];
  constructor(private api: DashboardService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  coloseFunc():void{
    this.close.emit('');
  }

  ngOnInit(): void {
    this.loadImport();
    this.loadPurl();
    this.loadUser();
    this.loadEqu();
  }

  loadImport():void{
    this.subs.sink = this.api.getImport().subscribe(res => {
      this.impList = res;
    });
  }

  loadPurl():void{
    this.subs.sink = this.api.getPur().subscribe(res => {
      this.purList = res;
    });
  }

  loadUser():void{
    this.subs.sink = this.api.getUser().subscribe(res => {
      this.userList = res;
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

  getEquName(id: number):string{
   return this.equList.find(f => f.id === id).equip_name
  }

  getUserName(id: number): string{
    return this.userList.find(f => f.id === id).user_name
  }

  addImp():void{

    if(this.addModal.id > 0){
      this.subs.sink = this.api.updateImport(this.addModal).subscribe((res) => {
        if(res === 'update Imports done !'){
            this.loadImport();
           const reset = {
            id: 0,
            pur_id: 0,
            user_id:0,
            import_date:new Date(),
            equip_stock:0, //
            equip_import:0, //
            equip_id:0,
            equip_qty: 0,
            }
            this.addModal = reset;
        }
      });
    }else{
      this.subs.sink = this.api.addImport(this.addModal).subscribe((res) => {
        if(res === 'create Imports done !'){
            this.loadImport();
           const reset = {
              id: 0,
              pur_id: 0,
              user_id:0,
              import_date:new Date(),
              equip_stock:0, //
              equip_import:0, //
              equip_id:0,
              equip_qty: 0,
           }
            this.addModal = reset;
        }
      });
    }
  }

  deleteImp(id: number):void{
    if(confirm("Are you sure to delete  Imports "+id)) {
      this.subs.sink = this.api.deleteImport(id).subscribe(res => {
        this.impList = this.impList.filter(f => f.id !== id);
      });
    }
  }

  impDetail(id: number): void{
    const findItem = this.impList.find(f => f.id == id);
    this.addModal.id = findItem.id;
    this.addModal.pur_id= findItem.pur_id;
    this.addModal.user_id= findItem.user_id;
    this.addModal.import_date= findItem.import_date;
    this.addModal.equip_id= findItem.equip_id;
    this.addModal.equip_qty= findItem.equip_qty;
  }

}
