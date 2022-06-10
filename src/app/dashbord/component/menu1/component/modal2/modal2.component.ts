import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss']
})
export class Modal2Component implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  unitList: any[] = [];
  addModal = {
    id: 0,
    unit_name: '',
  }
  constructor(
    private api: DashboardService
  ) { }
  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.loadUnit();
  }

  loadUnit():void{
    this.subs.sink =  this.api.getAllUnit().subscribe(res => {
      this.unitList = res;
    });
  }

  coloseFunc():void{
    this.close.emit('');
  }

  addUnit():void{

     if(this.addModal.id > 0){
      this.subs.sink = this.api.updateUnit(this.addModal).subscribe(res => {
        if(res == 'update unit done !'){
          this.loadUnit();

          const reset ={
            id: 0,
            unit_name: '',
          };

          this.addModal = reset;
        }

      });
     }else{
      this.subs.sink = this.api.addUnit(this.addModal).subscribe(res => {
        if(res == 'create unit done !'){
          this.loadUnit();

          const reset ={
            id: 0,
            unit_name: '',
          };

          this.addModal = reset;
        }
      });
     }


  }

  deleteUnit(id:number):void{
    if(confirm("Are you sure to delete  Unit"+id)) {
      this.subs.sink = this.api.deleteUnit(id).subscribe(res => {
        this.unitList = this.unitList.filter(f => f.id !== id);
      });
    }

  }

  editUnit(id: number):void {
    const findItem = this.unitList.find(f => f.id == id);
    this.addModal.id = findItem.id;
    this.addModal.unit_name = findItem.unit_name;
  }

}
