import { Menu1Component } from './menu1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1RoutingModule } from './menu1-routing.module';
import { Modal1Component } from './component/modal1/modal1.component';
import { FormsModule } from '@angular/forms';
import { Modal2Component } from './component/modal2/modal2.component';
import { Modal3Component } from './component/modal3/modal3.component';
import { Modal4Component } from './component/modal4/modal4.component';
import { Modal5Component } from './component/modal5/modal5.component';
import { Modal6Component } from './component/modal6/modal6.component';
import { Modal7Component } from './component/modal7/modal7.component';
import { Modal8Component } from './component/modal8/modal8.component';


@NgModule({
  declarations: [Menu1Component, Modal1Component, Modal2Component, Modal3Component, Modal4Component, Modal5Component, Modal6Component, Modal7Component, Modal8Component],
  imports: [
    CommonModule,
    Menu1RoutingModule,
    FormsModule
  ]
})
export class Menu1Module { }
