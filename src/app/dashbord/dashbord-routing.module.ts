
import { Routes } from '@angular/router';
import { CartGuard } from './dashboard';
export const DashbordRoutingModule: Routes = [
  {
    path: 'menu1',
    loadChildren: () =>
      import('./component/menu1/menu1.module').then((m) => m.Menu1Module),
  },

  {
    path: 'menu2',
    loadChildren: () =>
      import('./component/menu2/menu2.module').then((m) => m.Menu2Module),
  },

  {
    path: 'menu3',
    loadChildren: () =>
      import('./component/menu3/menu3.module').then((m) => m.Menu3Module),
  },

  {
    path: 'menu4',
    loadChildren: () =>
      import('./component/menu4/menu4.module').then((m) => m.Menu4Module),
  },



  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },

];
