import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu4RoutingModule } from './menu4-routing.module';
import { Menu4Component } from './menu4.component';


@NgModule({
  declarations: [
    Menu4Component
  ],
  imports: [
    CommonModule,
    Menu4RoutingModule
  ]
})
export class Menu4Module { }
