import { Menu1Component } from './menu1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1RoutingModule } from './menu1-routing.module';
import { Modal1Component } from './component/modal1/modal1.component';
import { FormsModule } from '@angular/forms';
import { Modal2Component } from './component/modal2/modal2.component';


@NgModule({
  declarations: [Menu1Component, Modal1Component, Modal2Component],
  imports: [
    CommonModule,
    Menu1RoutingModule,
    FormsModule
  ]
})
export class Menu1Module { }
