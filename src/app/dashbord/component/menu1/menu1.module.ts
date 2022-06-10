import { Menu1Component } from './menu1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1RoutingModule } from './menu1-routing.module';
import { Modal1Component } from './component/modal1/modal1.component';


@NgModule({
  declarations: [Menu1Component, Modal1Component],
  imports: [
    CommonModule,
    Menu1RoutingModule
  ]
})
export class Menu1Module { }
