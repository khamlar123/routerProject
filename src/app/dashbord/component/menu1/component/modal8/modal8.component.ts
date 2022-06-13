import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal8',
  templateUrl: './modal8.component.html',
  styleUrls: ['./modal8.component.scss']
})
export class Modal8Component implements OnInit, OnDestroy{
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();
  userList : any[] =[];
  staffList: any[] =[];
  addModel = {
    id: 0,
    staff_id: 0,
    user_name: '',
    password: '',
  }
  constructor(private api: DashboardService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.loadUser();
    this.loadStaff();
  }

  loadUser():void{
    this.subs.sink = this.api.getUser().subscribe(res => {
        this.userList = res;
    });
  }

  addUser():void{
      if(this.addModel.password === ""){
        alert('Ples enter your password');
        return ;
      }

      if(this.addModel.id > 0){

        this.subs.sink = this.api.updateUser(this.addModel).subscribe((res) => {
          if(res === 'create user done !'){
              this.loadUser();
            const reset = {
              id: 0,
              staff_id: 0,
              user_name: '',
              password: '',
              }
              this.addModel = reset;
          }
        });

      }else{
          this.subs.sink = this.api.addUser(this.addModel).subscribe((res) => {
            if(res === 'create user done !'){
                this.loadUser();
              const reset = {
                id: 0,
                staff_id: 0,
                user_name: '',
                password: '',
                }
                this.addModel = reset;
            }
          });
      }
  }

  dateUser(id: number):void{
    if(confirm("Are you sure to delete  Position "+id)) {
      this.subs.sink = this.api.deleteUser(id).subscribe(res => {
        this.userList = this.userList.filter(f => f.id !== id);
      });
    }
  }

  loadStaff():void{
    this.subs.sink = this.api.getStaff().subscribe(res => {
      this.staffList = res;
    })
  }

  userDetail(id: number):void{
    const findItem =  this.userList.find(f => f.id == id);

    this.addModel.id = findItem.id;
    this.addModel.staff_id= findItem.staff_id;
    this.addModel.user_name= findItem.user_name;
    this.addModel.password = "";
  }

  getStaffName(id: number):string{
    return this.staffList.find(f => f.id === id).fname
  }

  coloseFunc():void{
    this.close.emit('');
  }

}
