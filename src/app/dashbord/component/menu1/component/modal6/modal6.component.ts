import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal6',
  templateUrl: './modal6.component.html',
  styleUrls: ['./modal6.component.scss']
})
export class Modal6Component implements OnInit,OnDestroy {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  supList: any[] = [];
  addModel = {
    id: 0,
    conmpany_name: '',
    sup_name: '',
    village: '',
    district: '',
    province: '',
    phone: '',
    email: '',
    contact_info: '',
  }
  constructor(private api: DashboardService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.loadSup();
  }

  loadSup():void{
    this.subs.sink = this.api.getSup().subscribe(res => {
        this.supList = res;
    })
  }

  deleteSup(id: number): void{
    if(confirm("Are you sure to delete  Position "+id)) {
      this.subs.sink = this.api.deleteStaff(id).subscribe(res => {
        this.supList = this.supList.filter(f => f.id !== id);
      });
    }
  }

  addSub():void{
      if(this.addModel.id > 0){
        this.subs.sink = this.api.updateSup(this.addModel).subscribe((res) => {
          if(res === 'update suppliers done !'){
              this.loadSup();
             const reset = {
              id: 0,
              conmpany_name: '',
              sup_name: '',
              village: '',
              district: '',
              province: '',
              phone: '',
              email: '',
              contact_info: '',
              }
              this.addModel = reset;
          }
        });
      }else{
        this.subs.sink = this.api.addSup(this.addModel).subscribe((res) => {
          if(res === 'create suppliers done !'){
              this.loadSup();
             const reset = {
              id: 0,
              conmpany_name: '',
              sup_name: '',
              village: '',
              district: '',
              province: '',
              phone: '',
              email: '',
              contact_info: '',
              }
              this.addModel = reset;
          }
        });
      }
  }

  supDetail(id: number): void{
    const findItem = this.supList.find(f => f.id === id);
    this.addModel.id = findItem.id;
    this.addModel.conmpany_name = findItem.conmpany_name;
    this.addModel.sup_name= findItem.sup_name;
    this.addModel.village= findItem.village;
    this.addModel.district= findItem.district;
    this.addModel.province= findItem.province;
    this.addModel.phone= findItem.phone;
    this.addModel.email= findItem.email;
    this.addModel.contact_info= findItem.contact_info;
  }

  coloseFunc():void{
    this.close.emit('');
  }

}
