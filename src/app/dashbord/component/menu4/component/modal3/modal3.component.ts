import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal3',
  templateUrl: './modal3.component.html',
  styleUrls: ['./modal3.component.scss']
})
export class Modal3Component implements OnInit {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  masteUnitList: any[] = [];
  unitList: any[] = [];
  kw = '';
  constructor( private api: DashboardService) { }

  ngOnInit(): void {
    this.loadUnit();
  }

  loadUnit():void{
    this.subs.sink =  this.api.getAllUnit().subscribe(res => {
      this.unitList = res;
      this.masteUnitList = res;
    });
  }

  coloseFunc():void{
    this.close.emit('');
  }

  searchFunc():void{

    if(this.kw !== ''){
      this.unitList =  this.masteUnitList.filter(f => f.unit_name.toLowerCase().includes(this.kw.toLocaleLowerCase())
      || f.id.toString() === this.kw
      )
    }else{
      this.unitList = this.masteUnitList;
    }
}

}
