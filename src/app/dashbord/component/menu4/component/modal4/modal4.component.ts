import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal4',
  templateUrl: './modal4.component.html',
  styleUrls: ['./modal4.component.scss']
})
export class Modal4Component implements OnInit {

  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  masterimpList:any[] =[];
  impList:any[] = [];
  purList: any[] = [];
  userList: any[] = [];
  equList: any[] = [];
  kw = '';
  opwnModal = false;
  startDate = new Date();
  endDate = new Date();

  constructor( private api: DashboardService) { }

  ngOnInit(): void {
    this.loadImport();
    this.loadPurl();
    this.loadUser();
    this.loadEqu();
  }

  coloseFunc():void{
    this.close.emit('');
  }

  searchFunc():void{

      if(this.kw !== ''){
        this.impList =  this.masterimpList.filter(f => f.equip_name.toLowerCase().includes(this.kw.toLocaleLowerCase())
        || f.id.toString() === this.kw
        )
      }else{
        this.impList = this.masterimpList;
      }
  }

  getEquName(id: number):string{
    return this.equList.find(f => f.id === id).equip_name
   }

   getUserName(id: number): string{
     return this.userList.find(f => f.id === id).user_name
   }

  loadImport():void{
    this.subs.sink = this.api.getImport().subscribe(res => {
      this.impList = res;
      this.masterimpList = res;
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

  sortDate():void{
    this.impList =  this.masterimpList.filter(f =>
      f.import_date >= new Date(this.startDate).toISOString()  &&  f.import_date <= new Date(this.endDate).toISOString()
   )
  }

}
