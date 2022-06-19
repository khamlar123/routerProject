import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu4RoutingModule } from './menu4-routing.module';
import { Menu4Component } from './menu4.component';
import { Modal1Component } from './component/modal1/modal1.component';
import { Modal2Component } from './component/modal2/modal2.component';
import { Modal3Component } from './component/modal3/modal3.component';
import { Modal4Component } from './component/modal4/modal4.component';
import { Modal5Component } from './component/modal5/modal5.component';
import { Modal6Component } from './component/modal6/modal6.component';
import { Modal7Component } from './component/modal7/modal7.component';
import { BillComponent } from './component/modal1/bill/bill.component';
import { Bill2Component } from './component/modal2/bill2/bill2.component';
import { Bill3Component } from './component/modal3/bill3/bill3.component';
import { Bill4Component } from './component/modal4/bill4/bill4.component';
import { Bill5Component } from './component/modal5/bill5/bill5.component';
import { Bill6Component } from './component/modal6/bill6/bill6.component';
import { Bill7Component } from './component/modal7/bill7/bill7.component';


@NgModule({
  declarations: [
    Menu4Component,
    Modal1Component,
    Modal2Component,
    Modal3Component,
    Modal4Component,
    Modal5Component,
    Modal6Component,
    Modal7Component,
    BillComponent,
    Bill2Component,
    Bill3Component,
    Bill4Component,
    Bill5Component,
    Bill6Component,
    Bill7Component
  ],
  imports: [
    CommonModule,
    Menu4RoutingModule,
    FormsModule
  ]
})
export class Menu4Module { }
