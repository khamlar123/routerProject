import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.scss']
})
export class Menu4Component implements OnInit {

  constructor(    private router : Router,) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') === null ){
      this.router.navigate(['/login'])
  }
  }

}
