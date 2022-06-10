
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu3Component } from './menu3.component';

const routes: Routes = [
  {
    path:'',
    component: Menu3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu3RoutingModule { }
