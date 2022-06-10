
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashbordRoutingModule } from './dashbord-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(DashbordRoutingModule),
    FormsModule
  ],
  exports:[],
  providers: []
})
export class DashbordModule { }
