import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.scss']
})
export class Menu3Component implements OnInit {
  activeMenu = 0;
  constructor(    private router : Router,) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') === null ){
      this.router.navigate(['/login'])
  }
  }

}
