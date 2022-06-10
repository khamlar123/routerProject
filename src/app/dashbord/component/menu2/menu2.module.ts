import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu2RoutingModule } from './menu2-routing.module';
import { Menu2Component } from './menu2.component';


@NgModule({
  declarations: [
    Menu2Component
  ],
  imports: [
    CommonModule,
    Menu2RoutingModule
  ]
})
export class Menu2Module { }
