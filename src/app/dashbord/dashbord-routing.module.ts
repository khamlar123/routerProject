
import { Routes } from '@angular/router';
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
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },

];
