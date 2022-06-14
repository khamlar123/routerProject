import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal5',
  templateUrl: './modal5.component.html',
  styleUrls: ['./modal5.component.scss']
})
export class Modal5Component implements OnInit {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  masterSupList: any[] =[];
  supList: any[] =[];
  kw = '';
  constructor(private api: DashboardService) { }

  ngOnInit(): void {
    this.loadSup();
  }

  coloseFunc():void{
    this.close.emit('');
  }

  loadSup():void{
    this.subs.sink = this.api.getSup().subscribe(res => {
        this.supList = res;
        this.masterSupList = res;
    })
  }

  searchFunc():void{

    if(this.kw !== ''){
      this.supList =  this.masterSupList.filter(f => f.conmpany_name.toLowerCase().includes(this.kw.toLocaleLowerCase())
      || f.id.toString() === this.kw
      || f.sup_name.toLowerCase().includes(this.kw.toLocaleLowerCase())
      || f.phone.toLowerCase().includes(this.kw.toLocaleLowerCase())
      )
    }else{
      this.supList = this.masterSupList;
    }
  }

}
