import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal3',
  templateUrl: './modal3.component.html',
  styleUrls: ['./modal3.component.scss']
})
export class Modal3Component implements OnInit,OnDestroy {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  cateList: any[] = [];
  addModal ={
    id: 0,
    cate_name : '',
  }

  constructor(
    private api: DashboardService
  ) { }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.loadCate();
  }

  loadCate():void{
    this.subs.sink =  this.api.getAllCate().subscribe(res => {
      this.cateList = res;
    });
  }

  addCate():void{
    if(this.addModal.id > 0){
      this.subs.sink = this.api.updateCate(this.addModal).subscribe(res => {
        if(res == 'update categories done !'){
          this.loadCate();

          const reset ={
            id: 0,
            cate_name: '',
          };

          this.addModal = reset;
        }

      });
     }else{
      this.subs.sink = this.api.addCate(this.addModal).subscribe(res => {
        if(res == 'create categories done !'){
          this.loadCate();

          const reset ={
            id: 0,
            cate_name: '',
          };

          this.addModal = reset;
        }
      });
     }
  }

  deleteCate(id:number):void{
    if(confirm("Are you sure to delete  Category"+id)) {
      this.subs.sink = this.api.deleteCate(id).subscribe(res => {
        this.cateList = this.cateList.filter(f => f.id !== id);
      });
    }
  }

  editCate(id:number):void{
    const findItem = this.cateList.find(f => f.id == id);
    this.addModal.id = findItem.id;
    this.addModal.cate_name = findItem.cate_name;
  }


  coloseFunc():void{
    this.close.emit('');
  }

}
