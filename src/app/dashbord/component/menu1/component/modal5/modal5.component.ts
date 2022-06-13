import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal5',
  templateUrl: './modal5.component.html',
  styleUrls: ['./modal5.component.scss']
})
export class Modal5Component implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  staffList: any[] =[];

  addModel = {
    id: 0,
    fname: '',
    lname: '',
    gender: '',
    bod: new Date(),
    village: '',
    district: '',
    province: '',
    phone: '',
    contact_info: '',
  }

  constructor(private api: DashboardService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.loadStaff();
  }

  loadStaff():void{
    this.subs.sink = this.api.getStaff().subscribe(res => {
        this.staffList = res;
    })
  }

  deleteStaff(id: number):void{
    if(confirm("Are you sure to delete  Position "+id)) {
      this.subs.sink = this.api.deleteStaff(id).subscribe(res => {
        this.staffList = this.staffList.filter(f => f.id !== id);
      });
    }
  }

  addStaff():void{
    if(this.addModel.id > 0){
      this.subs.sink = this.api.updateStaff(this.addModel).subscribe((res) => {
        if(res === 'update staff done !'){
            this.loadStaff();
           const reset = {
              id: 0,
              fname: '',
              lname: '',
              gender: '',
              bod: new Date(),
              village: '',
              district: '',
              province: '',
              phone: '',
              contact_info: '',
            }
            this.addModel = reset;
        }
      });

    }else{
      this.subs.sink = this.api.addStaff(this.addModel).subscribe((res) => {
        if(res === 'create staff done !'){
            this.loadStaff();
           const reset = {
              id: 0,
              fname: '',
              lname: '',
              gender: '',
              bod: new Date(),
              village: '',
              district: '',
              province: '',
              phone: '',
              contact_info: '',
            }
            this.addModel = reset;
        }
      });
    }
  }

  staffDetail(id: number): void{
    const findItem = this.staffList.find(f => f.id == id);
    this.addModel.id = findItem.id;
    this.addModel.fname= findItem.fname;
    this.addModel.lname= findItem.lname;
    this.addModel.gender= findItem.gender;
    this.addModel.bod = new Date(findItem.bod);
    this.addModel.village= findItem.village;
    this.addModel.district= findItem.district;
    this.addModel.province= findItem.province;
    this.addModel.phone= findItem.phone;
    this.addModel.contact_info= findItem.contact_info;
  }


  coloseFunc():void{
    this.close.emit('');
  }

}
