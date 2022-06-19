import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal6',
  templateUrl: './modal6.component.html',
  styleUrls: ['./modal6.component.scss']
})
export class Modal6Component implements OnInit {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  masterStaffList: any[] =[];
  staffList: any[] =[];
  kw = '';
  opwnModal = false;
  constructor(private api: DashboardService) { }

  ngOnInit(): void {
    this.loadStaff();
  }

  coloseFunc():void{
    this.close.emit('');
  }

  loadStaff():void{
    this.subs.sink = this.api.getStaff().subscribe(res => {
        this.staffList = res;
        this.masterStaffList = res;
    })
  }

  searchFunc():void{

    if(this.kw !== ''){
      this.staffList =  this.masterStaffList.filter(f =>
        f.fname.toLowerCase().includes(this.kw.toLocaleLowerCase())
      || f.id.toString() === this.kw
      ||  f.lname.toLowerCase().includes(this.kw.toLocaleLowerCase())
      ||  f.phone.toLowerCase().includes(this.kw.toLocaleLowerCase())
      )
    }else{
      this.staffList = this.masterStaffList;
    }
}


}
