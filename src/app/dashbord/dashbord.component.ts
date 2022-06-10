import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  menuActive = 0;
  constructor(
    private router : Router,
    ) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') === null ){
        this.router.navigate(['/login'])
    }
  }

  changeActiveMenu(id:number):void{
      this.menuActive = id;
      this.router.navigate([`/menu${id}`])
  }


  logoutFunc():void{
    localStorage.clear();
    this.router.navigate(['/'])
  }

}
