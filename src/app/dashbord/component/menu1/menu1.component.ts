import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.scss']
})
export class Menu1Component implements OnInit {
  activeMenu = 0;
  constructor(    private router : Router,) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') === null ){
      this.router.navigate(['/login'])
  }
  }

}
