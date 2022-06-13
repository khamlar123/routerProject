import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu2RoutingModule } from './menu2-routing.module';
import { Menu2Component } from './menu2.component';
import { Modal1Component } from './component/modal1/modal1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Menu2Component,
    Modal1Component,
  ],
  imports: [
    CommonModule,
    Menu2RoutingModule,
    FormsModule
  ]
})
export class Menu2Module { }
