import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss']
})
export class Modal2Component implements OnInit {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  masterCate: any[] = [];
  cateList: any[] = [];
  kw = '';
  opwnModal = false;
  constructor(  private api: DashboardService) { }

  ngOnInit(): void {
    this.loadCate();
  }

  coloseFunc():void{
    this.close.emit('');
  }

  loadCate():void{
    this.subs.sink =  this.api.getAllCate().subscribe(res => {
      this.cateList = res;
      this.masterCate = res;
    });
  }

  searchFunc():void{

    if(this.kw !== ''){
      this.cateList =  this.masterCate.filter(f => f.cate_name.toLowerCase().includes(this.kw.toLocaleLowerCase())
      || f.id.toString() === this.kw
      )
    }else{
      this.cateList = this.masterCate;
    }
}



}
