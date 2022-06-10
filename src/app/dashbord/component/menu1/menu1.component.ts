import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.scss']
})
export class Menu1Component implements OnInit {
  activeMenu = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
