
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu3RoutingModule } from './menu3-routing.module';
import { Menu3Component } from './menu3.component';
import { Modal1Component } from './component/modal1/modal1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Menu3Component,
    Modal1Component
  ],
  imports: [
    CommonModule,
    Menu3RoutingModule,
    FormsModule
  ]
})
export class Menu3Module { }
